'use client';

import { faArrowUpFromBracket, faFile, faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';

interface FileUploadProps {
  label: string;
  accept: string;
  folder: string;
  currentUrl?: string;
  onUpload: (url: string, key: string) => void;
}

/** Extract the S3 key from a public S3 URL, e.g. https://bucket.s3.region.amazonaws.com/gallery/abc.jpg */
function extractS3Key(url: string): string | null {
  try {
    const { pathname } = new URL(url);
    // pathname is like /gallery/abc.jpg â€” strip the leading slash
    return pathname.slice(1) || null;
  } catch {
    return null;
  }
}

export default function FileUpload({ label, accept, folder, currentUrl, onUpload }: FileUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  // preview holds either a local object URL (after picking a file) or a presigned GET URL (for existing images)
  const [preview, setPreview] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  // Track object URLs we created so we can revoke them to avoid memory leaks
  const localObjectUrlRef = useRef<string | null>(null);
  // Track the S3 key that is currently stored, so we can delete it when the image is replaced
  const currentKeyRef = useRef<string | null>(currentUrl ? extractS3Key(currentUrl) : null);

  // When currentUrl changes (e.g. editing an existing record), update the key ref and fetch a presigned GET URL
  useEffect(() => {
    currentKeyRef.current = currentUrl ? extractS3Key(currentUrl) : null;

    if (!currentUrl) {
      setPreview(null);
      return;
    }

    const key = extractS3Key(currentUrl);
    if (!key) {
      setPreview(currentUrl); // fallback: try using it directly
      return;
    }

    fetch(`/api/upload/presign?key=${encodeURIComponent(key)}`)
      .then((r) => r.ok ? r.json() : null)
      .then((data) => {
        if (data?.viewUrl) setPreview(data.viewUrl);
        else setPreview(currentUrl); // fallback
      })
      .catch(() => setPreview(currentUrl));
  }, [currentUrl]);

  // Cleanup object URLs on unmount
  useEffect(() => {
    return () => {
      if (localObjectUrlRef.current) URL.revokeObjectURL(localObjectUrlRef.current);
    };
  }, []);

  const handleFile = async (file: File) => {
    setUploading(true);
    setErrorMsg(null);
    setUploadProgress(0);

    // Show a local preview immediately â€” no S3 public access needed
    if (localObjectUrlRef.current) URL.revokeObjectURL(localObjectUrlRef.current);
    const localObjectUrl = URL.createObjectURL(file);
    localObjectUrlRef.current = localObjectUrl;
    setPreview(localObjectUrl);

    try {
      // Step 1: Get a presigned URL from the server (no body size limit for this call)
      const presignRes = await fetch('/api/upload/presign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fileName: file.name, contentType: file.type || 'application/octet-stream', folder }),
      });

      if (!presignRes.ok) {
        const err = await presignRes.json().catch(() => ({ error: 'Failed to get upload URL' }));
        throw new Error(err.error || 'Failed to get upload URL');
      }

      const { presignedUrl, key, publicUrl } = await presignRes.json();

      // Step 2: Upload directly to S3 using the presigned URL â€” no Next.js size limit
      await new Promise<void>((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('PUT', presignedUrl, true);
        xhr.setRequestHeader('Content-Type', file.type || 'application/octet-stream');

        xhr.upload.onprogress = (e) => {
          if (e.lengthComputable) {
            setUploadProgress(Math.round((e.loaded / e.total) * 100));
          }
        };

        xhr.onload = () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve();
          } else {
            reject(new Error(`S3 upload failed: ${xhr.status} ${xhr.statusText}`));
          }
        };

        xhr.onerror = () => reject(new Error('Network error during upload'));
        xhr.send(file);
      });

      // Delete the previously stored S3 object now that the new one is uploaded
      const oldKey = currentKeyRef.current;
      if (oldKey && oldKey !== key) {
        fetch('/api/upload', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ key: oldKey }),
        }).catch(() => {/* best-effort, don't block the UI */});
      }

      // Update the tracked key to the newly uploaded one
      currentKeyRef.current = key;

      // Local preview is already shown; notify parent with the stored publicUrl
      onUpload(publicUrl, key);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Upload failed';
      setErrorMsg(message);
      setPreview(null);
    } finally {
      setUploading(false);
      setUploadProgress(0);
    }
  };

  const isImage = accept.includes('image');

  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1 font-sans">{label}</label>
      <div
        role="button"
        tabIndex={0}
        className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-[#002B7F] transition-colors"
        onClick={() => inputRef.current?.click()}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') inputRef.current?.click(); }}
      >
        {uploading ? (
          <div className="py-4">
            <div className="w-8 h-8 border-2 border-[#002B7F] border-t-transparent rounded-full animate-spin mx-auto mb-2" />
            <p className="text-sm text-gray-500">
              {uploadProgress > 0 ? `Uploading... ${uploadProgress}%` : 'Preparing upload...'}
            </p>
            {uploadProgress > 0 && (
              <div className="mt-2 w-48 bg-gray-200 rounded-full h-1.5 mx-auto">
                <div
                  className="bg-[#002B7F] h-1.5 rounded-full transition-all duration-200"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
            )}
          </div>
        ) : preview ? (
          <div>
            {isImage ? (
              <img src={preview} alt="Preview" className="h-32 object-cover mx-auto rounded mb-2" />
            ) : (
              <div className="flex items-center justify-center gap-2 py-3">
                <FontAwesomeIcon icon={faFile} className="w-6 h-6 text-gray-500" />
                <a
                  href={preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#002B7F] underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  View uploaded file
                </a>
              </div>
            )}
            <p className="text-xs text-gray-400">Click to replace</p>
          </div>
        ) : (
          <div className="py-4">
            <FontAwesomeIcon icon={isImage ? faImage : faFile} className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-500 flex items-center justify-center gap-1.5">
              <FontAwesomeIcon icon={faArrowUpFromBracket} className="w-3.5 h-3.5" />
              Click to upload {label}
            </p>
            <p className="text-xs text-gray-400 mt-1">Any image format Â· No size limit</p>
          </div>
        )}
      </div>
      {errorMsg && (
        <p className="mt-1.5 text-xs text-[#002B7F] font-sans">{errorMsg}</p>
      )}
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
      />
    </div>
  );
}

