'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'AboutUs', href: '/aboutus' },
    { label: 'Events', href: '/events' },
    { label: 'Clubs', href: '/clubs' },
    { label: 'ContactUs', href: '/contact' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 fixed top-0 left-0 w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0 group">
            <img src="/logo.png" alt="Logo" className="w-6 sm:w-8" />
            <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-gray-800 group-hover:text-[#FFD100] transition duration-200 luckiest-guy-regular whitespace-nowrap">
              NSSF SriLanka
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-2 font-medium transition-all duration-200 rounded-md whitespace-nowrap
                    ${isActive 
                      ? 'bg-[#002B7F] text-white shadow-md' 
                      : 'text-gray-800 hover:text-[#002B7F] hover:bg-gray-100'
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Tablet Navigation (hidden on mobile, shown on md-lg) */}
          <div className="hidden md:flex lg:hidden md:items-center">
            <div className="flex flex-wrap gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`px-2 py-1 text-sm font-medium transition-all duration-200 rounded whitespace-nowrap
                      ${isActive 
                        ? 'bg-[#002B7F] text-white shadow-md' 
                        : 'text-gray-800 hover:text-[#002B7F] hover:bg-gray-100'
                      }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 text-gray-800 hover:text-[#002B7F] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#002B7F] rounded-md transition duration-200"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`block px-4 py-3 text-base font-medium rounded-md transition-all duration-200 border-l-4
                    ${isActive 
                      ? 'bg-[#002B7F] text-white border-[#FFD100] shadow-md' 
                      : 'text-gray-800 hover:text-[#002B7F] hover:bg-gray-100 border-transparent hover:border-[#002B7F]'
                    }`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
