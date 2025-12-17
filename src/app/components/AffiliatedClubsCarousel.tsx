'use client';

import { colors } from '@/config';
import { useRef } from 'react';

interface Club {
  id: number;
  name: string;
  logo: string;
  location: string;
}

// Placeholder data for 17 affiliated clubs
const affiliatedClubs: Club[] = [
  { id: 1, name: "Colombo Rifle Club", logo: "/clubs/club-01.png", location: "Colombo" },
  { id: 2, name: "Kandy Shooting Club", logo: "/clubs/club-02.png", location: "Kandy" },
  { id: 3, name: "Galle Sports Club", logo: "/clubs/club-03.png", location: "Galle" },
  { id: 4, name: "Jaffna Shooting Academy", logo: "/clubs/club-04.png", location: "Jaffna" },
  { id: 5, name: "Negombo Target Club", logo: "/clubs/club-05.png", location: "Negombo" },
  { id: 6, name: "Matara Rifle Association", logo: "/clubs/club-06.png", location: "Matara" },
  { id: 7, name: "Anuradhapura Shooting Club", logo: "/clubs/club-07.png", location: "Anuradhapura" },
  { id: 8, name: "Trincomalee Sports Club", logo: "/clubs/club-08.png", location: "Trincomalee" },
  { id: 9, name: "Kurunegala Rifle Club", logo: "/clubs/club-09.png", location: "Kurunegala" },
  { id: 10, name: "Ratnapura Shooting Association", logo: "/clubs/club-10.png", location: "Ratnapura" },
  { id: 11, name: "Batticaloa Target Club", logo: "/clubs/club-11.png", location: "Batticaloa" },
  { id: 12, name: "Badulla Rifle Club", logo: "/clubs/club-12.png", location: "Badulla" },
  { id: 13, name: "Ampara Shooting Club", logo: "/clubs/club-13.png", location: "Ampara" },
  { id: 14, name: "Vavuniya Sports Club", logo: "/clubs/club-14.png", location: "Vavuniya" },
  { id: 15, name: "Polonnaruwa Rifle Association", logo: "/clubs/club-15.png", location: "Polonnaruwa" },
  { id: 16, name: "Hambantota Shooting Club", logo: "/clubs/club-16.png", location: "Hambantota" },
  { id: 17, name: "Nuwara Eliya Target Club", logo: "/clubs/club-17.png", location: "Nuwara Eliya" },
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
