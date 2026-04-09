export async function register() {
  // Only run on the Node.js runtime (server), not the Edge runtime
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { default: connectDB } = await import('@/lib/mongodb');
    const { default: AdminUser } = await import('@/models/AdminUser');

    const getMongoHostForLogs = () => {
      const uri = process.env.MONGODB_URI;
      if (!uri) return undefined;
      try {
        const parsed = new URL(uri);
        return `${parsed.protocol}//${parsed.hostname}`;
      } catch {
        return undefined;
      }
    };

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
      console.error('[NSSF] Failed to seed admin user:', err);

      const message = (err as any)?.message as string | undefined;
      if (message?.includes('querySrv ENOTFOUND') || message?.includes('getaddrinfo ENOTFOUND')) {
        const host = getMongoHostForLogs();
        console.error(
          '[NSSF] MongoDB hostname could not be resolved. Check MONGODB_URI (Atlas cluster host/connection string) or use a local Mongo URI for dev. Host:',
          host || '(unparseable)'
        );
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
