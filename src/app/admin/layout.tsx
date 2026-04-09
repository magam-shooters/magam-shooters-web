'use client';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faBullseye, faCalendar, faDumbbell, faHouse, faImage, faMedal, faNewspaper, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const navItems: { label: string; href: string; icon: IconDefinition }[] = [
  { label: 'Dashboard', href: '/admin', icon: faHouse },
  { label: 'Upcoming Matches', href: '/admin/matches', icon: faBullseye },
  { label: 'Intl. Calendar', href: '/admin/calendar', icon: faCalendar },
  { label: 'Training Programs', href: '/admin/training', icon: faDumbbell },
  { label: 'National Records', href: '/admin/records', icon: faTrophy },
  { label: 'Competition Results', href: '/admin/results', icon: faMedal },
  { label: 'News', href: '/admin/news', icon: faNewspaper },
  { label: 'Gallery', href: '/admin/gallery', icon: faImage },
];

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#002B7F] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600 font-sans">Loading...</p>
        </div>
      </div>
    );
  }

  if (status === 'unauthenticated') return null;

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden font-sans">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#002B7F] text-white flex flex-col transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:inset-auto lg:flex`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-5 border-b border-white/20">
          <img src="/logo.png" alt="NSSF" className="w-9" />
          <div>
            <p className="font-sans font-bold text-sm leading-tight">NSSF Admin</p>
            <p className="text-white/60 text-xs">Sri Lanka</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-6 py-3 text-sm font-sans font-semibold transition-all duration-200
                  ${isActive
                    ? 'bg-[#FFD100] text-[#002B7F]'
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                  }`}
              >
                <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* User */}
        <div className="px-6 py-4 border-t border-white/20">
          <p className="text-xs text-white/60 mb-1">Signed in as</p>
          <p className="text-sm font-semibold truncate">{session?.user?.name}</p>
          <p className="text-xs text-white/60 truncate">{session?.user?.email}</p>
          <div className="flex gap-2 mt-3">
            <Link href="/" className="flex-1 text-center text-xs py-1.5 rounded bg-white/10 hover:bg-white/20 transition">
              View Site
            </Link>
            <button
              onClick={() => signOut({ callbackUrl: '/login' })}
              className="flex-1 text-xs py-1.5 rounded bg-[#FFD100] text-[#002B7F] hover:bg-[#F0C500] transition"
            >
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close sidebar"
        />
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top bar */}
        <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center gap-4 shadow-sm">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="font-sans font-bold text-gray-800 text-lg flex-1">
            {navItems.find((n) => n.href === pathname)?.label ?? 'Admin Panel'}
          </h1>
          <span className="text-xs bg-[#FFD100] text-[#002B7F] font-bold px-2 py-1 rounded-full">
            ADMIN
          </span>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
}

