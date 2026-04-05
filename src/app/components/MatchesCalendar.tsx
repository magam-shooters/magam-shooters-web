'use client';

import { colors } from '@/config';
import { useEffect, useState } from 'react';

interface Match {
  _id: string;
  date: string;
  time: string;
  title: string;
  venue: string;
  category: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  pdfUrl?: string;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

export default function MatchesCalendar() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/matches')
      .then((r) => r.json())
      .then((data) => { setMatches(Array.isArray(data) ? data.slice(0, 3) : []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  if (loading || matches.length === 0) return null;

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-montserrat font-semibold uppercase tracking-wider mb-2" style={{ color: colors.primary.blue }}>
            Competitions
          </p>
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4" style={{ color: colors.primary.navy }}>
            Upcoming Matches
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            Stay updated with upcoming shooting competitions and championships across Sri Lanka
          </p>
        </div>

        {/* Matches Grid - Only one row (first 3 matches) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {matches.slice(0, 3).map((match) => (
            <div
              key={match._id}
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
                  <span className="font-montserrat font-semibold text-base">{formatDate(match.date)}</span>
                </div>
                <span
                  className="px-4 py-1 rounded-full text-sm font-montserrat font-bold"
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
                <h3 className="text-2xl font-montserrat font-bold mb-4" style={{ color: colors.primary.navy }}>
                  {match.title}
                </h3>

                <div className="space-y-3 mb-8 font-sans">
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

              {/* PDF / Register Button */}
              <div className="p-6 pt-0">
                {match.pdfUrl ? (
                  <a
                    href={match.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-md font-montserrat font-bold text-lg transition-all duration-200 hover:shadow-md hover:scale-105 flex items-center justify-center gap-2"
                    style={{ backgroundColor: colors.primary.yellow, color: colors.primary.navy }}
                  >
                    📄 Download Programme
                  </a>
                ) : (
                  <button
                    className="w-full py-3 rounded-md font-montserrat font-bold text-lg transition-all duration-200 hover:shadow-md hover:scale-105"
                    style={{ backgroundColor: colors.primary.yellow, color: colors.primary.navy }}
                  >
                    Register Now
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View Full Calendar Button - Download PDF */}
        <div className="text-center">
          <a
            href="/CALENDAR_2026.pdf"
            download
            className="px-8 py-4 rounded-lg font-montserrat font-semibold text-white transition-all duration-200 hover:shadow-lg hover:scale-105 inline-flex items-center gap-2"
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
          <p className="text-sm text-gray-500 font-sans">
            Connected to official NSSF Competition Calendar
          </p>
        </div>
      </div>
    </section>
  );
}
