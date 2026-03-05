import { authOptions } from '@/lib/auth';
import connectDB from '@/lib/mongodb';
import News from '@/models/News';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDB();
    const news = await News.findById(params.id);
    if (!news) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(news);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    await connectDB();
    const body = await req.json();
    const news = await News.findByIdAndUpdate(params.id, body, { new: true });
    if (!news) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(news);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    await connectDB();
    await News.findByIdAndDelete(params.id);
    return NextResponse.json({ message: 'Deleted' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
