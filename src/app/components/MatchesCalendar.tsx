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
          <p className="text-sm font-sans font-semibold uppercase tracking-wider mb-2" style={{ color: colors.primary.blue }}>
            Competitions
          </p>
          <h2 className="text-4xl md:text-5xl font-sans font-bold mb-4" style={{ color: colors.primary.navy }}>
            Upcoming Matches
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            Stay updated with upcoming shooting competitions and championships across Sri Lanka
          </p>
        </div>

        {/* Matches Grid - Only one row (first 3 matches) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {matches.slice(0, 3).map((match) => (
            <article
              key={match._id}
              className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_12px_30px_rgba(2,6,23,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(2,6,23,0.22)] flex flex-col"
            >
              <div className="relative h-56 p-2">
                <div
                  className="relative h-full w-full rounded-2xl border-4 border-white overflow-hidden"
                  style={{
                    background: `linear-gradient(145deg, ${colors.primary.navy} 0%, ${colors.primary.blue} 100%)`,
                  }}
                >
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white_0%,transparent_45%),radial-gradient(circle_at_80%_70%,white_0%,transparent_35%)]" />
                  <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="h-20 w-20 rounded-2xl bg-white/90 flex items-center justify-center shadow-lg">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: colors.primary.navy }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <span
                    className="absolute top-5 right-5 rounded-full px-3 py-1 text-[11px] font-bold tracking-wide uppercase"
                    style={{ backgroundColor: colors.primary.yellow, color: colors.primary.navy }}
                  >
                    Match
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col gap-4 flex-1">
                <div className="flex items-center justify-between text-xs text-slate-600 font-sans">
                  <span>{formatDate(match.date)}</span>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 font-semibold">{match.category}</span>
                </div>

                <h3 className="min-h-10 text-lg font-sans font-extrabold leading-tight line-clamp-2" style={{ color: colors.primary.navy }}>
                  {match.title}
                </h3>

                <div className="space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-3 font-sans">
                  <div className="flex items-center text-slate-700 text-sm">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{match.time}</span>
                  </div>

                  <div className="flex items-center text-slate-700 text-sm">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{match.venue}</span>
                  </div>
                </div>

                {match.pdfUrl ? (
                  <a
                    href={match.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 w-full rounded-xl py-2.5 text-sm font-bold tracking-wide transition-all duration-300 hover:brightness-95 hover:shadow-md active:scale-[0.99] inline-flex items-center justify-center gap-2"
                    style={{ backgroundColor: colors.primary.yellow, color: colors.primary.navy }}
                  >
                    Download Programme
                  </a>
                ) : (
                  <button
                    className="mt-1 w-full rounded-xl py-2.5 text-sm font-bold tracking-wide transition-all duration-300 hover:brightness-95 hover:shadow-md active:scale-[0.99]"
                    style={{ backgroundColor: colors.primary.yellow, color: colors.primary.navy }}
                  >
                    Register Now
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* View Full Calendar Button - Download PDF */}
        <div className="text-center">
          <a
            href="/CALENDAR_2026.pdf"
            download
            className="px-8 py-4 rounded-lg font-sans font-semibold text-white transition-all duration-200 hover:shadow-lg hover:scale-105 inline-flex items-center gap-2"
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

