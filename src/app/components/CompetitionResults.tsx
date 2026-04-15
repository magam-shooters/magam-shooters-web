'use client';

import { colors } from "@/config";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRight, FaCalendar, FaMapMarkerAlt, FaMedal } from "react-icons/fa";
import ModernSectionHeader from "./ModernSectionHeader";

interface CompetitionResult {
  _id: string;
  competition: string;
  date: string;
  location: string;
  category: string;
  winners: {
    gold: string;
    silver: string;
    bronze: string;
  };
}

const CompetitionResults = () => {
  const [results, setResults] = useState<CompetitionResult[]>([]);

  useEffect(() => {
    fetch('/api/results')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setResults(data);
      })
      .catch(() => { });
  }, []);

  if (results.length === 0) return null;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        <ModernSectionHeader
          subtitle="Results"
          title="Latest Competition Results"
          description="Recent championship outcomes and podium finishes from NSSF competitions"
          
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {results.map((result) => (
            <article
              key={result._id}
              className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_12px_30px_rgba(2,6,23,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(2,6,23,0.22)]"
            >
              <div className="relative h-56 p-2">

                {/* Blue gradient box with border */}
                <div
                  className="relative h-full w-full rounded-2xl border-4 border-white overflow-hidden"
                  style={{
                    background: `linear-gradient(145deg, ${colors.primary.navy} 0%, ${colors.primary.blue} 100%)`,
                  }}
                >

                  {/* Glow effect */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white_0%,transparent_45%),radial-gradient(circle_at_80%_70%,white_0%,transparent_35%)]" />

                  {/* Center icon */}
                  <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="h-20 w-20 rounded-2xl bg-white/90 flex items-center justify-center shadow-lg">
                      <FaMedal className="text-3xl" style={{ color: colors.primary.navy }} />
                    </div>
                  </div>

                  {/* Results badge */}
                  <span
                    className="absolute top-5 right-5 rounded-full px-3 py-1 text-[11px] font-bold tracking-wide uppercase"
                    style={{ backgroundColor: colors.primary.yellow, color: colors.primary.navy }}
                  >
                    Results
                  </span>

                </div>

              </div>

              <div className="p-4 flex flex-col gap-3 flex-1">
                <div className="flex items-center justify-between text-xs text-slate-600 font-sans">
                  <div className="flex items-center gap-1.5">
                    <FaCalendar className="text-xs" />
                    <span>{result.date}</span>
                  </div>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 font-semibold">{result.category}</span>
                </div>

                <h3 className="min-h-6 text-lg font-sans font-extrabold leading-tight line-clamp-2 transition-colors" style={{ color: colors.primary.navy }}>
                  {result.competition}
                </h3>



                <div className="space-y-1 bg-slate-50 p-2 rounded-xl border border-slate-200 font-sans">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-600">Gold</span>
                    <span className="text-sm font-sans font-bold" style={{ color: colors.primary.navy }}>{result.winners.gold}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-600">Silver</span>
                    <span className="text-sm font-sans font-bold" style={{ color: colors.primary.navy }}>{result.winners.silver}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-600">Bronze</span>
                    <span className="text-sm font-sans font-bold" style={{ color: colors.primary.navy }}>{result.winners.bronze}</span>
                  </div>
                </div>

                {/* <Link
                  href={`/results/${result._id}`}
                  className="mt-1 w-full rounded-xl py-2.5 text-sm font-bold tracking-wide transition-all duration-300 hover:brightness-95 hover:shadow-md active:scale-[0.99] inline-flex items-center justify-center gap-2"
                  style={{ backgroundColor: colors.primary.yellow, color: colors.primary.navy }}
                >
                  Full Results
                  <FaArrowRight className="text-xs" />
                </Link> */}
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/results"
            className="inline-flex items-center gap-3 bg-[#002B7F] hover:bg-[#001B5F] text-white font-sans font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105"
          >
            View All Results
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CompetitionResults;

