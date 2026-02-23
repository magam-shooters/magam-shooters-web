'use client';

import { colors } from '@/config';

interface Match {
  id: number;
  date: string;
  time: string;
  title: string;
  venue: string;
  category: string;
  status: 'upcoming' | 'ongoing' | 'completed';
}

// Updated match data for March events
const matches: Match[] = [
  {
    id: 1,
    date: "2026-03-10", // 2nd week of March (approximate)
    time: "All Day",
    title: "NSSF-SL Open Rifle/Pistol Championship",
    venue: "NSSF Range – Kohuwala & SLNS, Gemunu Range, Welisara",
    category: "Rifle/Pistol",
    status: "upcoming"
  },
  {
    id: 2,
    date: "2026-03-17", // 3rd week of March (approximate)
    time: "All Day",
    title: "NSSF Trap Open Championship",
    venue: "CTSCC Range, Payagala",
    category: "Trap",
    status: "upcoming"
  },
  {
    id: 3,
    date: "2026-03-24", // 4th week of March (approximate)
    time: "All Day",
    title: "NSSF Skeet Open Championship",
    venue: "CTSCC Range, Payagala",
    category: "Skeet",
    status: "upcoming"
  }
];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

export default function MatchesCalendar() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: colors.primary.red }}>
            Competitions
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.primary.navy }}>
            Upcoming Matches
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with upcoming shooting competitions and championships across Sri Lanka
          </p>
        </div>

        {/* Matches Grid - Only one row (first 3 matches) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {matches.slice(0, 3).map((match) => (
            <div
              key={match.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 overflow-hidden flex flex-col"
              style={{ minHeight: 340 }}
            >
              {/* Date Header */}
              <div
                className="px-6 py-4 flex items-center justify-between"
                style={{ backgroundColor: colors.primary.navy }}
              >
                <div className="flex items-center gap-2 text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-semibold text-base">{formatDate(match.date)}</span>
                </div>
                <span
                  className="px-4 py-1 rounded-full text-sm font-bold"
                  style={{
                    backgroundColor: colors.primary.yellow,
                    color: colors.primary.navy
                  }}
                >
                  {match.category}
                </span>
              </div>

              {/* Match Details */}
              <div className="flex-1 flex flex-col p-8 pb-0">
                <h3 className="text-2xl font-bold mb-4" style={{ color: colors.primary.navy }}>
                  {match.title}
                </h3>

                <div className="space-y-3 mb-8">
                  {/* Time */}
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-base">{match.time}</span>
                  </div>

                  {/* Venue */}
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-base">{match.venue}</span>
                  </div>
                </div>
              </div>

              {/* Register Button */}
              <div className="p-6 pt-0">
                <button
                  className="w-full py-3 rounded-md font-bold text-lg transition-all duration-200 hover:shadow-md hover:scale-105"
                  style={{
                    backgroundColor: colors.primary.yellow,
                    color: colors.primary.navy
                  }}
                >
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Calendar Button - Download PDF */}
        <div className="text-center">
          <a
            href="/CALENDAR_2026.pdf"
            download
            className="px-8 py-4 rounded-lg font-semibold text-white transition-all duration-200 hover:shadow-lg hover:scale-105 inline-flex items-center gap-2"
            style={{ backgroundColor: colors.primary.navy }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            View Full NSSF Calendar
          </a>
        </div>

        {/* Calendar Integration Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Connected to official NSSF Competition Calendar
          </p>
        </div>
      </div>
    </section>
  );
}
