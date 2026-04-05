import { authOptions } from '@/lib/auth';
import { getPresignedUploadUrl, getPresignedViewUrl } from '@/lib/s3';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

const BUCKET_NAME = process.env.AWS_S3_BUCKET_NAME;
const AWS_REGION = process.env.AWS_REGION;

// GET /api/upload/presign?key=gallery/abc.jpg — returns a short-lived presigned view URL
export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const key = req.nextUrl.searchParams.get('key');
  if (!key) return NextResponse.json({ error: 'key is required' }, { status: 400 });

  try {
    const viewUrl = await getPresignedViewUrl(key, 3600);
    return NextResponse.json({ viewUrl });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to generate view URL';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const { fileName, contentType, folder } = await req.json();

    if (!fileName || !contentType) {
      return NextResponse.json({ error: 'fileName and contentType are required' }, { status: 400 });
    }

    const ext = fileName.split('.').pop() || 'bin';
    const key = `${folder || 'uploads'}/${uuidv4()}.${ext}`;

    const presignedUrl = await getPresignedUploadUrl(key, contentType, 300); // 5 min expiry
    const publicUrl = `https://${BUCKET_NAME}.s3.${AWS_REGION}.amazonaws.com/${key}`;

    return NextResponse.json({ presignedUrl, key, publicUrl });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to generate upload URL';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
