import { authOptions } from '@/lib/auth';
import connectDB from '@/lib/mongodb';
import TrainingProgram from '@/models/TrainingProgram';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const page = Math.max(Number(req.nextUrl.searchParams.get('page') || '1'), 1);
    const rawLimit = req.nextUrl.searchParams.get('limit');
    const limit = rawLimit ? Math.min(Math.max(Number(rawLimit), 1), 200) : 0;

    let query = TrainingProgram.find().sort({ createdAt: -1 }).lean();
    if (limit > 0) {
      query = query.skip((page - 1) * limit).limit(limit);
    }

    const programs = await query;
    return NextResponse.json(programs, {
      headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' },
    });
  } catch (error: any) {
    const message = error?.message || 'Unknown error';
    const isAtlasConnectivityError =
      message.includes('Could not connect to any servers') ||
      message.includes('IP that is not whitelisted') ||
      message.includes('querySrv ETIMEOUT') ||
      message.includes('querySrv ENOTFOUND') ||
      message.includes('ECONNREFUSED');

    if (isAtlasConnectivityError) {
      return NextResponse.json([], {
        status: 200,
        headers: {
          'Cache-Control': 'no-store',
          'X-Data-Source': 'fallback-db-unavailable',
        },
      });
    }

    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    await connectDB();
    const body = await req.json();
    const program = await TrainingProgram.create(body);
    return NextResponse.json(program, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
