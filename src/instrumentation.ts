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
      console.error('[NSSF] Failed to seed admin user:', err);
    }
  }
}
