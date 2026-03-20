'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });
    setLoading(false);
    if (res?.error) {
      setError('Invalid email or password.');
    } else {
      router.push('/admin');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#002B7F] to-[#004A9F] px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        {/* Logo & Title */}
        <div className="text-center mb-8">
          <img src="/logo.png" alt="NSSF Logo" className="w-16 mx-auto mb-4" />
          <h1 className="text-2xl font-montserrat font-bold text-[#002B7F]">Admin Login</h1>
          <p className="text-gray-500 text-sm mt-1 font-sans">NSSF Sri Lanka Admin Panel</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1 font-montserrat">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002B7F] font-sans text-gray-800"
              placeholder="admin@nssf.lk"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1 font-montserrat">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002B7F] font-sans text-gray-800"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="bg-[#FFF7CC] border border-[#FFD100] text-[#002B7F] px-4 py-3 rounded-lg text-sm font-sans">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#002B7F] text-white font-montserrat font-bold py-3 rounded-lg hover:bg-[#001B5F] transition-colors duration-200 disabled:opacity-60"
          >
            {loading ? 'Signing in…' : 'Sign In'}
          </button>
        </form>

        <p className="text-center text-xs text-gray-400 mt-6 font-sans">
          © {new Date().getFullYear()} NSSF Sri Lanka. All rights reserved.
        </p>
      </div>
    </div>
  );
}
