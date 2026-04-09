export async function register() {
  // Only run on the Node.js runtime (server), not the Edge runtime
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { default: connectDB } = await import('@/lib/mongodb');
    const { default: AdminUser } = await import('@/models/AdminUser');

    try {
      await connectDB();

      const email = (process.env.ADMIN_EMAIL || 'admin@nssf.lk').toLowerCase();
      const existing = await AdminUser.findOne({ email });

      if (!existing) {
        await AdminUser.create({
          email,
          password: process.env.ADMIN_PASSWORD || 'Admin@1234',
          name: 'NSSF Admin',
          role: 'admin',
        });
        console.log('[NSSF] Admin user created:', email);
      } else {
        console.log('[NSSF] Admin user already exists:', email);
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);

      if (message.includes('MongoDB connection refused')) {
        console.warn('[NSSF] Admin seed skipped:', message);
      } else {
        console.error('[NSSF] Failed to seed admin user:', err);
      }
    }

    // Configure S3 bucket CORS to allow direct browser uploads (presigned URLs)
    try {
      const { configureBucketCors } = await import('@/lib/s3');
      await configureBucketCors();
      console.log('[NSSF] S3 CORS configured for direct uploads');
    } catch (err) {
      console.warn('[NSSF] S3 CORS setup skipped (may already be configured):', (err as Error).message);
    }
  }
}
