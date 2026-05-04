"use client";

import { colors } from "@/config";
import Link from "next/link";
<<<<<<< HEAD
import { useEffect, useMemo, useState } from "react";
import { FaArrowLeft, FaCalendar, FaMapMarkerAlt } from "react-icons/fa";
=======
import { FaArrowLeft, FaCalendar, FaMapMarkerAlt, FaMedal } from "react-icons/fa";
import PageHero from "../components/PageHero";
>>>>>>> b34211f3ba4931c85e9de2f88e6a11884de89047

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

export default function ResultsPage() {
  const [results, setResults] = useState<CompetitionResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("/api/results", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setResults(data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(results.map((item) => item.category).filter(Boolean)));
    return ["All", ...unique];
  }, [results]);

  const filteredResults = useMemo(() => {
    if (selectedCategory === "All") return results;
    return results.filter((result) => result.category === selectedCategory);
  }, [results, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
<<<<<<< HEAD
      <section className="bg-gradient-to-br from-[#D71920] to-[#A01520] text-white py-16 px-4 sm:px-6 lg:px-8">
=======
      {/* Header Section */}
      {/* <section className="bg-linear-to-br from-[#002B7F] to-[#004A9F] text-white py-16 px-4 sm:px-6 lg:px-8">
>>>>>>> b34211f3ba4931c85e9de2f88e6a11884de89047
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="font-sans inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <FaArrowLeft />
            <span>Back to Home</span>
          </Link>

          <div className="text-center mb-8">
<<<<<<< HEAD
            <p className="text-sm font-semibold uppercase tracking-wider mb-2 text-[#FFD100]">Results</p>
            <h1 className="font-sans text-4xl md:text-5xl font-bold mb-4">Competition Results</h1>
            <p className="font-sans text-lg text-white/90 max-w-2xl mx-auto">
=======
            <div className="flex justify-center mb-4">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#FFD100] ring-4 ring-white/25">
                <FaMedal className="text-3xl text-[#002B7F]" />
              </div>
            </div>
            <p className="text-sm font-semibold uppercase tracking-wider mb-2 text-[#FFD100]">
              Results
            </p>
            <h1 className="font-sans text-4xl md:text-5xl font-bold mb-4 text-[#FFD100]">
              Competition Results
            </h1>
            <p className="font-sans text-lg  max-w-2xl mx-auto text-[#FFD100]">
>>>>>>> b34211f3ba4931c85e9de2f88e6a11884de89047
              Recent championship outcomes and podium finishes from NSSF competitions
            </p>
          </div>
        </div>
      </section> */}

      <PageHero
              title="Competition Results"
              subtitle="Recent Outcomes"
              description="Recent championship outcomes and podium finishes from NSSF competitions"
            />


      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex justify-center gap-4 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
<<<<<<< HEAD
                onClick={() => setSelectedCategory(cat)}
                className={`font-sans px-6 py-2 rounded-full font-semibold transition-all duration-200 border-2 ${
                  selectedCategory === cat
                    ? "bg-[#D71920] text-white border-[#D71920]"
                    : "bg-white text-[#D71920] border-[#D71920] hover:bg-[#D71920] hover:text-white"
                }`}
=======
                className="font-sans px-6 py-2 rounded-full font-semibold transition-all duration-200 bg-white text-[#002B7F] border-2 border-[#002B7F] hover:bg-[#002B7F] hover:text-white"
>>>>>>> b34211f3ba4931c85e9de2f88e6a11884de89047
              >
                {cat}
              </button>
            ))}
          </div>

<<<<<<< HEAD
          {loading && <div className="py-20 text-center text-gray-400 font-sans">Loading results...</div>}

          {!loading && filteredResults.length === 0 && (
            <div className="py-20 text-center text-gray-400 font-sans">No competition results available yet.</div>
          )}

          {!loading && filteredResults.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResults.map((result) => (
                <article
                  key={result._id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative h-48 bg-gradient-to-br from-[#D71920] to-[#A01520] flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-white text-sm font-semibold px-3 py-1 bg-black/30 rounded-full">
                        {result.category}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="bg-white/90 text-[#D71920] text-xs font-bold px-2 py-1 rounded-full">Results</span>
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((result) => (
              <article
                key={result.id}
                className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_12px_30px_rgba(2,6,23,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(2,6,23,0.22)]"
              >
                <div className="relative h-44 p-2">
                  <div
                    className="relative h-full w-full rounded-2xl border-4 border-white overflow-hidden"
                    style={{
                      background: `linear-gradient(145deg, ${colors.primary.navy} 0%, ${colors.primary.blue} 100%)`,
                    }}
                  >
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white_0%,transparent_45%),radial-gradient(circle_at_80%_70%,white_0%,transparent_35%)]" />

                    <div className="relative z-10 h-full flex items-center justify-center">
                      <div className="h-14 w-14 rounded-xl bg-white/90 flex items-center justify-center shadow-lg">
                        <FaMedal className="text-2xl" style={{ color: colors.primary.navy }} />
                      </div>
                    </div>

                    <span
                      className="absolute top-4 right-4 rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wide uppercase"
                      style={{ backgroundColor: colors.primary.yellow, color: colors.primary.navy }}
                    >
                      Results
                    </span>
                  </div>
                </div>

                <div className="p-3.5 flex flex-col gap-2.5 flex-1">
                  <h3 className="min-h-6 text-lg font-sans font-extrabold leading-tight line-clamp-2 transition-colors" style={{ color: colors.primary.navy }}>
                    {result.competition}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-slate-600 font-sans">
                    <div className="flex items-center gap-1.5">
                      <FaCalendar className="text-xs" />
                      <span>{result.date}</span>
>>>>>>> b34211f3ba4931c85e9de2f88e6a11884de89047
                    </div>
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold">{result.category}</span>
                  </div>

<<<<<<< HEAD
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <FaCalendar className="text-xs" />
                        <span>{result.date}</span>
                      </div>
                    </div>

                    <h3 className="font-sans text-xl font-semibold text-[#002B7F] mb-2 line-clamp-2 group-hover:text-[#001B5F] transition-colors">
                      {result.competition}
                    </h3>

                    <div className="flex items-start gap-1 text-gray-600 text-xs mb-4">
                      <FaMapMarkerAlt className="text-xs mt-0.5 flex-shrink-0" />
                      <span className="font-sans">{result.location}</span>
                    </div>

                    <div className="space-y-2 mb-4 bg-gray-50 p-3 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="font-sans text-sm font-medium text-gray-600">Gold:</span>
                        <span className="font-sans text-sm font-bold text-[#B8860B]">{result.winners.gold}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-sans text-sm font-medium text-gray-600">Silver:</span>
                        <span className="font-sans text-sm font-bold text-gray-500">{result.winners.silver}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-sans text-sm font-medium text-gray-600">Bronze:</span>
                        <span className="font-sans text-sm font-bold text-[#CD7F32]">{result.winners.bronze}</span>
=======
                  

                  <div className="flex items-start gap-1 text-slate-600 text-xs">
                    <FaMapMarkerAlt className="text-xs mt-0.5 shrink-0" />
                    <span className="font-sans">{result.location}</span>
                  </div>

                  <div className="inline-flex w-fit rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-700 font-sans">
                    {result.participants} Participants
                  </div>

                  <div className="space-y-1 bg-slate-50 p-2 rounded-lg border border-slate-200 font-sans">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-xs font-semibold text-slate-600">Gold</span>
                      <div className="text-right leading-tight">
                        <span className="text-xs font-bold block" style={{ color: colors.primary.navy }}>{result.winners.gold}</span>
                        <span className="text-[10px] text-slate-500">{result.winners.goldScore}</span>
                      </div>
                    </div>
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-xs font-semibold text-slate-600">Silver</span>
                      <div className="text-right leading-tight">
                        <span className="text-xs font-bold block" style={{ color: colors.primary.navy }}>{result.winners.silver}</span>
                        <span className="text-[10px] text-slate-500">{result.winners.silverScore}</span>
                      </div>
                    </div>
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-xs font-semibold text-slate-600">Bronze</span>
                      <div className="text-right leading-tight">
                        <span className="text-xs font-bold block" style={{ color: colors.primary.navy }}>{result.winners.bronze}</span>
                        <span className="text-[10px] text-slate-500">{result.winners.bronzeScore}</span>
>>>>>>> b34211f3ba4931c85e9de2f88e6a11884de89047
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-sans text-3xl font-semibold mb-4" style={{ color: colors.primary.navy }}>
            Want to Compete?
          </h2>
          <p className="font-sans text-lg text-gray-600 mb-8">
            Join our training programs and participate in upcoming championships.
          </p>
<<<<<<< HEAD
          <Link
            href="/events"
            className="font-sans inline-flex items-center justify-center gap-3 bg-[#D71920] hover:bg-[#A01520] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105"
          >
            View Upcoming Events
          </Link>
=======
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/events"
              className="font-sans inline-flex items-center justify-center gap-3 bg-[#FFD100] hover:bg-[#E6BC00] text-[#002B7F] font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105"
            >
              View Upcoming Events
            </Link>
            <Link
              href="/calendar"
              className="font-sans inline-flex items-center justify-center gap-3 bg-[#002B7F] hover:bg-[#001B5F] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105"
            >
              Competition Calendar
            </Link>
          </div>
>>>>>>> b34211f3ba4931c85e9de2f88e6a11884de89047
        </div>
      </section>
    </div>
  );
}
