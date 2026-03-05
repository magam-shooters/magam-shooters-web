'use client';

import { SessionProvider } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import Footer from './Footer';
import Navbar from './Navbar';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();
  const isAuthRoute = pathname?.startsWith('/login') || pathname?.startsWith('/admin');

  return (
    <SessionProvider>
      {isAuthRoute ? (
        <>{children}</>
      ) : (
        <>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </>
      )}
    </SessionProvider>
  );
}
