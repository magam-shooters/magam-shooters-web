import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#002B7F] border-t border-[#001A4D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Magam Shooters</h3>
            <p className="text-gray-200">
              Sri Lanka's premier shooting sports club offering professional training, competitions, and world-class facilities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-200 hover:text-[#FFD100] transition duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/aboutus"
                  className="text-gray-200 hover:text-[#FFD100] transition duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-gray-200 hover:text-[#FFD100] transition duration-200"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/clubs"
                  className="text-gray-200 hover:text-[#FFD100] transition duration-200"
                >
                  Clubs
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/clubs"
                  className="text-gray-200 hover:text-[#FFD100] transition duration-200"
                >
                  Training Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-gray-200 hover:text-[#FFD100] transition duration-200"
                >
                  Competitions
                </Link>
              </li>
              <li>
                <Link
                  href="/clubs"
                  className="text-gray-200 hover:text-[#FFD100] transition duration-200"
                >
                  Equipment Rental
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-200 hover:text-[#FFD100] transition duration-200"
                >
                  Coaching
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                        <ul className="space-y-2 text-gray-200">
              <li>
                <a
                  href="tel:+15551234567"
                  className="hover:text-[#FFD100] transition duration-200"
                >
                  (555) 123-4567
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@magamshooters.com"
                  className="hover:text-[#FFD100] transition duration-200"
                >
                  info@magamshooters.com
                </a>
              </li>
              <li className="mt-4">
                <Link
                  href="/contact"
                  className="inline-block bg-[#00AEEF] hover:bg-[#0096C7] text-white font-semibold py-2 px-4 transition duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-[#3A4E8C] pt-8 mb-8">
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-[#FFD100] transition duration-200"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-[#FFD100] transition duration-200"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 100-8 4 4 0 000 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-[#FFD100] transition duration-200"
              aria-label="Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-[#FFD100] transition duration-200"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-[#3A4E8C] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-200 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Magam Shooters. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="/privacy"
                className="text-gray-200 hover:text-[#FFD100] text-sm transition duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-200 hover:text-[#FFD100] text-sm transition duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
