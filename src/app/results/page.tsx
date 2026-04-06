"use client";

import { colors } from "@/config";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { FaArrowLeft, FaCalendar, FaMapMarkerAlt } from "react-icons/fa";

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
      <section className="bg-gradient-to-br from-[#D71920] to-[#A01520] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="font-sans inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <FaArrowLeft />
            <span>Back to Home</span>
          </Link>

          <div className="text-center mb-8">
            <p className="text-sm font-semibold uppercase tracking-wider mb-2 text-[#FFD100]">Results</p>
            <h1 className="font-sans text-4xl md:text-5xl font-bold mb-4">Competition Results</h1>
            <p className="font-sans text-lg text-white/90 max-w-2xl mx-auto">
              Recent championship outcomes and podium finishes from NSSF competitions
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex justify-center gap-4 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-sans px-6 py-2 rounded-full font-semibold transition-all duration-200 border-2 ${
                  selectedCategory === cat
                    ? "bg-[#D71920] text-white border-[#D71920]"
                    : "bg-white text-[#D71920] border-[#D71920] hover:bg-[#D71920] hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

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
                    </div>
                  </div>

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
          <Link
            href="/events"
            className="font-sans inline-flex items-center justify-center gap-3 bg-[#D71920] hover:bg-[#A01520] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105"
          >
            View Upcoming Events
          </Link>
        </div>
      </section>
    </div>
  );
}
