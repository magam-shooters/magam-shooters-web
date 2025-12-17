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

// Placeholder match data
const matches: Match[] = [
  {
    id: 1,
    date: "2025-01-15",
    time: "09:00 AM",
    title: "National Rifle Championship",
    venue: "Colombo Rifle Range",
    category: "Rifle",
    status: "upcoming"
  },
  {
    id: 2,
    date: "2025-01-20",
    time: "02:00 PM",
    title: "Youth Pistol Competition",
    venue: "Kandy Sports Complex",
    category: "Pistol",
    status: "upcoming"
  },
  {
    id: 3,
    date: "2025-02-05",
    time: "10:00 AM",
    title: "International Open Championship",
    venue: "NSSF National Range",
    category: "Mixed",
    status: "upcoming"
  },
  {
    id: 4,
    date: "2025-02-18",
    time: "08:30 AM",
    title: "Women's Shooting Championship",
    venue: "Galle Shooting Range",
    category: "Rifle & Pistol",
    status: "upcoming"
  },
  {
    id: 5,
    date: "2025-03-10",
    time: "09:00 AM",
    title: "Junior National Championships",
    venue: "Colombo Rifle Range",
    category: "Rifle",
    status: "upcoming"
  },
  {
    id: 6,
    date: "2025-03-25",
    time: "01:00 PM",
    title: "Inter-Club Tournament",
    venue: "Various Locations",
    category: "Team Event",
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

        {/* Matches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {matches.map((match) => (
            <div
              key={match.id}
              className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 overflow-hidden"
            >
              {/* Date Header */}
              <div
                className="p-4 text-white"
                style={{ backgroundColor: colors.primary.navy }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-semibold">{formatDate(match.date)}</span>
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold"
                    style={{
                      backgroundColor: colors.primary.yellow,
                      color: colors.primary.navy
                    }}
                  >
                    {match.category}
                  </span>
                </div>
              </div>

              {/* Match Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3" style={{ color: colors.primary.navy }}>
                  {match.title}
                </h3>

                <div className="space-y-2 mb-4">
                  {/* Time */}
                  <div className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm">{match.time}</span>
                  </div>

                  {/* Venue */}
                  <div className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm">{match.venue}</span>
                  </div>
                </div>

                {/* Register Button */}
                <button
                  className="w-full py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-md hover:scale-105"
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

        {/* View Full Calendar Button */}
        <div className="text-center">
          <a
            href="/calendar"
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
