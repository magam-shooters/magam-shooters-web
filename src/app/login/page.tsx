'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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
          <h1 className="text-2xl font-sans font-bold text-[#002B7F]">Admin Login</h1>
          <p className="text-gray-500 text-sm mt-1 font-sans">NSSF Sri Lanka Admin Panel</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1 font-sans">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002B7F] font-sans text-gray-800"
              placeholder="admin@nssf.lk"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-1 font-sans">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002B7F] font-sans text-gray-800 pr-12"
                placeholder="••••••••"
              />
              <button
                type="button"
                tabIndex={-1}
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#002B7F] focus:outline-none"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-[#FFF7CC] border border-[#FFD100] text-[#002B7F] px-4 py-3 rounded-lg text-sm font-sans">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#002B7F] text-white font-sans font-bold py-3 rounded-lg hover:bg-[#001B5F] transition-colors duration-200 disabled:opacity-60"
          >
            {loading ? 'Signing inâ€¦' : 'Sign In'}
          </button>

        </form>
        {/* Back to Home Button */}
        <button
          type="button"
          onClick={() => router.push('/')}
          className="w-full mt-4 bg-gray-200 text-[#002B7F] font-sans font-bold py-3 rounded-lg hover:bg-gray-300 transition-colors duration-200"
        >
          Back to Home
        </button>

        <p className="text-center text-xs text-gray-400 mt-6 font-sans">
          Â© {new Date().getFullYear()} NSSF Sri Lanka. All rights reserved.
        </p>
      </div>
    </div>
  );
}

