import { authOptions } from '@/lib/auth';
import connectDB from '@/lib/mongodb';
import Gallery from '@/models/Gallery';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const page = Math.max(Number(req.nextUrl.searchParams.get('page') || '1'), 1);
    const rawLimit = req.nextUrl.searchParams.get('limit');
    const limit = rawLimit ? Math.min(Math.max(Number(rawLimit), 1), 200) : 0;

    let query = Gallery.find().sort({ createdAt: -1 }).lean();
    if (limit > 0) {
      query = query.skip((page - 1) * limit).limit(limit);
    }

    const items = await query;
    return NextResponse.json(items, {
      headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    await connectDB();
    const body = await req.json();
    const item = await Gallery.create(body);
    return NextResponse.json(item, { status: 201 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
