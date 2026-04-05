import connectDB from '@/lib/mongodb';
import AdminUser from '@/models/AdminUser';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectDB();

    const existing = await AdminUser.findOne({ email: process.env.ADMIN_EMAIL?.toLowerCase() });
    if (existing) {
      return NextResponse.json({ message: 'Admin user already exists.' });
    }

    await AdminUser.create({
      email: process.env.ADMIN_EMAIL || 'admin@nssf.lk',
      password: process.env.ADMIN_PASSWORD || 'Admin@1234',
      name: 'NSSF Admin',
      role: 'admin',
    });

    return NextResponse.json({ message: 'Admin user created successfully.' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
