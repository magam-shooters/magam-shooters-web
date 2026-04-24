'use client';

import { colors } from '@/config';
import { useRef } from 'react';
import ModernSectionHeader from './ModernSectionHeader';

interface Club {
  id: number;
  name: string;
  logo: string;
  location: string;
}

// Actual affiliated clubs as per provided list
const affiliatedClubs: Club[] = [
  { id: 1, name: "Army Small Arms Association", logo: "/clubs/nssf-badge.png", location: "-" },
  { id: 2, name: "Athugala Shooting Sport Club", logo: "/clubs/nssf-badge.png", location: "-" },
  { id: 3, name: "Cambrian Shooting Sport Club", logo: "/clubs/nssf-badge.png", location: "-" },
  { id: 4, name: "Clay Target Shooting Club of Colombo", logo: "/clubs/clay-target-colombo.png", location: "Colombo" },
  { id: 5, name: "Hill Country Sport Shooting Club", logo: "/clubs/hill-country.png", location: "Hill Country" },
  { id: 6, name: "Magam Sport Shooting Club", logo: "/clubs/nssf-badge.png", location: "-" },
  { id: 7, name: "Magnum Sport Shooting Club", logo: "/clubs/nssf-badge.png", location: "-" },
  { id: 8, name: "Negombo Rifle Club", logo: "/clubs/negombo-rifle.png", location: "Negombo" },
  { id: 9, name: "Puttalam District Sport Shooting Club", logo: "/clubs/nssf-badge.png", location: "Puttalam" },
  { id: 10, name: "Scorpion Shooting Club", logo: "/clubs/scorpion.png", location: "-" },
  { id: 11, name: "Siyane Rifle Shooting Club", logo: "/clubs/siyane-rifle.png", location: "Siyane" },
  { id: 12, name: "Sri Lanka Air Force Shooting Club", logo: "/clubs/nssf-badge.png", location: "-" },
  { id: 13, name: "Sri Lanka Navy Musketry", logo: "/clubs/nssf-badge.png", location: "-" },
  { id: 14, name: "Sri Lanka Police Shooting Club", logo: "/clubs/nssf-badge.png", location: "-" },
  { id: 15, name: "Sri Lanka Schools Shooting Sports Association", logo: "/clubs/nssf-badge.png", location: "-" },
  { id: 16, name: "The Sport Shooting Club of Nuwara Eliya", logo: "/clubs/nssf-badge.png", location: "Nuwara Eliya" },
  { id: 17, name: "Wayamba Sport Shooting Club", logo: "/clubs/wayamba.png", location: "Wayamba" },
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

        <ModernSectionHeader
          subtitle="Our Network"
          title="Affiliated Clubs"
          description="Proud to collaborate with 17 distinguished shooting clubs across Sri Lanka"

        />

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
                className="shrink-0 w-64 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 p-2 flex flex-col"
              >
                {/* Club Logo Panel */}
                <div
                  className="w-full h-48 rounded-2xl flex items-center justify-center text-4xl font-bold border overflow-hidden"
                  // style={{
                  //   backgroundColor: colors.primary.navy,
                  //   borderColor: colors.primary.navy,
                  //   color: '#FFFFFF'
                  // }}

                  style={{
                    background: `linear-gradient(145deg, ${colors.primary.navy} 0%, ${colors.primary.blue} 100%)`,
                    color: '#FFFFFF'
                  }}
                >
                  {club.name.split(' ').map((word) => word[0]).join('').slice(0, 3)}
                </div>

                {/* Card Content */}
                <div className="pt-2 flex flex-col grow">
                  {/* Club Name - Fixed Height */}
                  <h3 className="text-lg text-center font-sans font-bold mb-3 h-14 line-clamp-2" style={{ color: colors.primary.navy }}>
                    {club.name}
                  </h3>

                  {/* View Details Link */}
                  <button
                    className="w-full py-2 rounded-lg font-sans font-semibold transition-all duration-200 hover:shadow-md mt-auto"
                    style={{
                      backgroundColor: colors.primary.yellow,
                      color: colors.primary.navy
                    }}
                  >
                    View Details
                  </button>
                </div>
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
          <p className="font-sans">Scroll horizontally to explore all affiliated clubs.</p>
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

