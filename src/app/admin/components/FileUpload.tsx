'use client';

import { useRef, useState } from 'react';

interface FileUploadProps {
  label: string;
  accept: string;
  folder: string;
  currentUrl?: string;
  onUpload: (url: string, key: string) => void;
}

export default function FileUpload({ label, accept, folder, currentUrl, onUpload }: FileUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(currentUrl || null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (file: File) => {
    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('folder', folder);
    try {
      const res = await fetch('/api/upload', { method: 'POST', body: formData });
      if (!res.ok) throw new Error('Upload failed');
      const { url, key } = await res.json();
      setPreview(url);
      onUpload(url, key);
    } catch (err) {
      alert('Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const isImage = accept.includes('image');

  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1 font-montserrat">{label}</label>
      <div
        className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-[#002B7F] transition-colors"
        onClick={() => inputRef.current?.click()}
      >
        {uploading ? (
          <div className="py-4">
            <div className="w-8 h-8 border-2 border-[#002B7F] border-t-transparent rounded-full animate-spin mx-auto mb-2" />
            <p className="text-sm text-gray-500">Uploading...</p>
          </div>
        ) : preview ? (
          <div>
            {isImage ? (
              <img src={preview} alt="Preview" className="h-32 object-cover mx-auto rounded mb-2" />
            ) : (
              <div className="flex items-center justify-center gap-2 py-3">
                <span className="text-3xl">📄</span>
                <a href={preview} target="_blank" rel="noopener noreferrer" className="text-sm text-[#002B7F] underline" onClick={(e) => e.stopPropagation()}>
                  View uploaded file
                </a>
              </div>
            )}
            <p className="text-xs text-gray-400">Click to replace</p>
          </div>
        ) : (
          <div className="py-4">
            <p className="text-2xl mb-1">{isImage ? '🖼️' : '📄'}</p>
            <p className="text-sm text-gray-500">Click to upload {label}</p>
            <p className="text-xs text-gray-400 mt-1">{accept}</p>
          </div>
        )}
      </div>
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
