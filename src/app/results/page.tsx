"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { FaCalendar, FaMapMarkerAlt, FaMedal } from "react-icons/fa";

import { colors } from "@/config";
import PageHero from "../components/PageHero";

interface CompetitionResult {
  _id: string;
  competition: string;
  date: string;
  location: string;
  category: string;
  participants?: number;
  winners: {
    gold: string;
    silver: string;
    bronze: string;
    goldScore?: string;
    silverScore?: string;
    bronzeScore?: string;
  };
}

export default function ResultsPage() {
  const [results, setResults] = useState<CompetitionResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await fetch("/api/results", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch results");
        }

        const data = await res.json();

        if (Array.isArray(data)) {
          setResults(data);
        }
      } catch (error) {
        console.error("Error fetching results:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  const categories = useMemo(() => {
    const unique = Array.from(
      new Set(
        results
          .map((item) => item.category)
          .filter((category): category is string => Boolean(category))
      )
    );

    return ["All", ...unique];
  }, [results]);

  const filteredResults = useMemo(() => {
    if (selectedCategory === "All") {
      return results;
    }

    return results.filter(
      (result) => result.category === selectedCategory
    );
  }, [results, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title="Competition Results"
        subtitle="Recent Outcomes"
        description="Recent championship outcomes and podium finishes from NSSF competitions"
      />

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Category Filters */}
          <div className="mb-10 flex flex-wrap justify-center gap-4">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`font-sans px-6 py-2 rounded-full font-semibold border-2 transition-all duration-300 ${
                    isActive
                      ? "bg-[#002B7F] text-white border-[#002B7F]"
                      : "bg-white text-[#002B7F] border-[#002B7F] hover:bg-[#002B7F] hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Loading */}
          {loading && (
            <div className="flex items-center justify-center py-20">
              <div className="h-12 w-12 rounded-full border-4 border-[#002B7F] border-t-transparent animate-spin" />
            </div>
          )}

          {/* Empty State */}
          {!loading && filteredResults.length === 0 && (
            <div className="rounded-3xl bg-white p-12 text-center shadow-md border border-slate-200">
              <FaMedal className="mx-auto mb-4 text-5xl text-[#002B7F]" />
              <h3 className="font-sans text-2xl font-bold text-[#002B7F] mb-2">
                No Results Found
              </h3>
              <p className="font-sans text-gray-600">
                There are no competition results available for this category.
              </p>
            </div>
          )}

          {/* Results Grid */}
          {!loading && filteredResults.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResults.map((result) => (
                <article
                  key={result._id}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_12px_30px_rgba(2,6,23,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(2,6,23,0.22)]"
                >
                  {/* Card Header */}
                  <div className="relative h-44 p-2">
                    <div
                      className="relative h-full w-full overflow-hidden rounded-2xl border-4 border-white"
                      style={{
                        background: `linear-gradient(145deg, ${colors.primary.navy} 0%, ${colors.primary.blue} 100%)`,
                      }}
                    >
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white_0%,transparent_45%),radial-gradient(circle_at_80%_70%,white_0%,transparent_35%)]" />

                      <div className="relative z-10 flex h-full items-center justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/90 shadow-xl">
                          <FaMedal
                            className="text-3xl"
                            style={{ color: colors.primary.navy }}
                          />
                        </div>
                      </div>

                      <span
                        className="absolute top-4 right-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide"
                        style={{
                          backgroundColor: colors.primary.yellow,
                          color: colors.primary.navy,
                        }}
                      >
                        Results
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-col gap-3 p-4">
                    <h3
                      className="line-clamp-2 min-h-[56px] text-xl font-extrabold leading-tight font-sans"
                      style={{ color: colors.primary.navy }}
                    >
                      {result.competition}
                    </h3>

                    <div className="flex items-center justify-between text-xs text-slate-600 font-sans">
                      <div className="flex items-center gap-1.5">
                        <FaCalendar className="text-xs" />
                        <span>{result.date}</span>
                      </div>

                      <span className="rounded-full bg-slate-100 px-2 py-1 text-[11px] font-semibold">
                        {result.category}
                      </span>
                    </div>

                    <div className="flex items-start gap-2 text-slate-600 text-sm">
                      <FaMapMarkerAlt className="mt-0.5 shrink-0 text-xs" />
                      <span className="font-sans">
                        {result.location}
                      </span>
                    </div>

                    {result.participants && (
                      <div className="inline-flex w-fit rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-700 font-sans">
                        {result.participants} Participants
                      </div>
                    )}

                    {/* Winners */}
                    <div className="space-y-2 rounded-xl border border-slate-200 bg-slate-50 p-3 font-sans">
                      {/* Gold */}
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-xs font-semibold text-yellow-600">
                          Gold
                        </span>

                        <div className="text-right leading-tight">
                          <span
                            className="block text-sm font-bold"
                            style={{ color: colors.primary.navy }}
                          >
                            {result.winners.gold}
                          </span>

                          {result.winners.goldScore && (
                            <span className="text-[10px] text-slate-500">
                              {result.winners.goldScore}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Silver */}
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-xs font-semibold text-slate-500">
                          Silver
                        </span>

                        <div className="text-right leading-tight">
                          <span
                            className="block text-sm font-bold"
                            style={{ color: colors.primary.navy }}
                          >
                            {result.winners.silver}
                          </span>

                          {result.winners.silverScore && (
                            <span className="text-[10px] text-slate-500">
                              {result.winners.silverScore}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Bronze */}
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-xs font-semibold text-amber-700">
                          Bronze
                        </span>

                        <div className="text-right leading-tight">
                          <span
                            className="block text-sm font-bold"
                            style={{ color: colors.primary.navy }}
                          >
                            {result.winners.bronze}
                          </span>

                          {result.winners.bronzeScore && (
                            <span className="text-[10px] text-slate-500">
                              {result.winners.bronzeScore}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="font-sans text-3xl font-semibold mb-4"
            style={{ color: colors.primary.navy }}
          >
            Want to Compete?
          </h2>

          <p className="font-sans text-lg text-gray-600 mb-8">
            Join our training programs and participate in upcoming championships.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/events"
              className="font-sans inline-flex items-center justify-center rounded-full bg-[#FFD100] px-8 py-3 font-semibold text-[#002B7F] transition-all duration-300 hover:scale-105 hover:bg-[#E6BC00]"
            >
              View Upcoming Events
            </Link>

            <Link
              href="/calendar"
              className="font-sans inline-flex items-center justify-center rounded-full bg-[#002B7F] px-8 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#001B5F]"
            >
              Competition Calendar
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}