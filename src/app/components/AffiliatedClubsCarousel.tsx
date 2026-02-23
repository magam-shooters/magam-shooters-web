'use client';

import { colors } from '@/config';
import { useRef } from 'react';

interface Club {
  id: number;
  name: string;
  logo: string;
  location: string;
}

// Actual affiliated clubs as per provided screenshots
const affiliatedClubs: Club[] = [
  { id: 1, name: "Negombo Rifle Club", logo: "/clubs/negombo-rifle.png", location: "Negombo" },
  { id: 2, name: "Hill Country Sport Shooting Club", logo: "/clubs/hill-country.png", location: "Hill Country" },
  { id: 3, name: "Wayamba Sport Shooting Club", logo: "/clubs/wayamba.png", location: "Wayamba" },
  { id: 4, name: "Clay Target Shooting Club of Colombo", logo: "/clubs/clay-target-colombo.png", location: "Colombo" },
  { id: 5, name: "Siyane Rifle Shooting Club", logo: "/clubs/siyane-rifle.png", location: "Siyane" },
  { id: 6, name: "Scorpion Shooting Club", logo: "/clubs/scorpion.png", location: "-" },
  { id: 7, name: "Army Small Arms Association", logo: "/clubs/nssf-badge.png", location: "-" },
  { id: 8, name: "Srilanka Navy Musketry", logo: "/clubs/nssf-badge.png", location: "-" },
  { id: 9, name: "Srilanka Airforce Shooting Club", logo: "/clubs/nssf-badge.png", location: "-" },
  { id: 10, name: "Srilanka Police Shooting Club", logo: "/clubs/nssf-badge.png", location: "-" },
  { id: 11, name: "Srilanka Schools Shooting Sports Association", logo: "/clubs/nssf-badge.png", location: "-" },
  { id: 12, name: "The Sport Shooting Club of Nuwara Eliya", logo: "/clubs/nssf-badge.png", location: "Nuwara Eliya" },
  { id: 13, name: "Magnum Sport Shooting Club", logo: "/clubs/nssf-badge.png", location: "-" },
  { id: 14, name: "Athugala Shooting Sport Club", logo: "/clubs/nssf-badge.png", location: "-" },
  { id: 15, name: "Magam Sport Shooting Club", logo: "/clubs/nssf-badge.png", location: "-" },
  { id: 16, name: "Cambrian Shooting Sport Club", logo: "/clubs/nssf-badge.png", location: "-" },
  { id: 17, name: "Puttalam District Sport Shooting Club", logo: "/clubs/nssf-badge.png", location: "Puttalam" },
];

export default function AffiliatedClubsCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: colors.primary.red }}>
            Our Network
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.primary.navy }}>
            Affiliated Clubs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proud to collaborate with 17 distinguished shooting clubs across Sri Lanka
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-200 hover:scale-110"
            style={{ color: colors.primary.navy }}
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide flex gap-6 px-12 py-4 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {affiliatedClubs.map((club) => (
              <div
                key={club.id}
                className="flex-shrink-0 w-64 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-6 border border-gray-100"
              >
                {/* Club Logo Placeholder */}
                <div
                  className="w-full h-40 rounded-lg mb-4 flex items-center justify-center text-4xl font-bold"
                  style={{
                    backgroundColor: colors.primary.navy,
                    color: colors.primary.yellow
                  }}
                >
                  {club.name.split(' ').map(word => word[0]).join('').slice(0, 3)}
                </div>

                {/* Club Name */}
                <h3 className="text-xl font-bold mb-2" style={{ color: colors.primary.navy }}>
                  {club.name}
                </h3>

                {/* Location */}
                <div className="flex items-center text-gray-600 mb-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm">{club.location}</span>
                </div>

                {/* View Details Link */}
                <button
                  className="w-full py-2 rounded-lg font-semibold transition-all duration-200 hover:shadow-md"
                  style={{
                    backgroundColor: colors.primary.yellow,
                    color: colors.primary.navy
                  }}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-200 hover:scale-110"
            style={{ color: colors.primary.navy }}
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-6 text-sm text-gray-500">
          <p>← Scroll to explore all affiliated clubs →</p>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
