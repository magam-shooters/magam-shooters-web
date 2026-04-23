"use client";

import { colors } from "@/config";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { FaArrowLeft, FaTrophy } from "react-icons/fa";
import PageHero from "../components/PageHero";

interface RecordItem {
  _id: string;
  title: string;
  holder: string;
  score: string;
  date: string;
  location: string;
  category: string;
}

export default function RecordsPage() {
  const [records, setRecords] = useState<RecordItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("/api/records", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setRecords(data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(records.map((item) => item.category).filter(Boolean)));
    return ["All", ...unique];
  }, [records]);

  const filteredRecords = useMemo(() => {
    if (selectedCategory === "All") return records;
    return records.filter((record) => record.category === selectedCategory);
  }, [records, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
<<<<<<< HEAD
      <section className="bg-gradient-to-br from-[#FFD100] to-[#E5BC00] text-[#002B7F] py-16 px-4 sm:px-6 lg:px-8">
=======
      {/* Header Section */}
      {/* <section className="bg-linear-to-br from-[#FFD100] to-[#E5BC00] text-[#002B7F] py-16 px-4 sm:px-6 lg:px-8">
>>>>>>> b34211f3ba4931c85e9de2f88e6a11884de89047
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="font-sans inline-flex items-center gap-2 text-[#002B7F]/80 hover:text-[#002B7F] mb-6 transition-colors"
          >
            <FaArrowLeft />
            <span>Back to Home</span>
          </Link>

          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <FaTrophy className="text-6xl" />
            </div>
<<<<<<< HEAD
            <p className="text-sm font-semibold uppercase tracking-wider mb-2 text-[#D71920]">Achievements</p>
            <h1 className="font-sans text-4xl md:text-5xl font-bold mb-4">National Records</h1>
=======
            <p className="text-sm font-semibold uppercase tracking-wider mb-2 ">
              Achievements
            </p>
            <h1 className="font-sans text-4xl md:text-5xl font-bold mb-4">
              National Records
            </h1>
>>>>>>> b34211f3ba4931c85e9de2f88e6a11884de89047
            <p className="font-sans text-lg max-w-2xl mx-auto">
              Outstanding achievements and record-breaking performances by Sri Lankan athletes
            </p>
          </div>
        </div>
      </section> */}

      <PageHero
                    title="Achievements"
                    subtitle="National Records"
                    description="Outstanding achievements and record-breaking performances by Sri Lankan athletes"
                  />
      

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex justify-center gap-4 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-sans px-6 py-2 rounded-full font-semibold transition-all duration-200 border-2 ${
                  selectedCategory === cat
                    ? "bg-[#002B7F] text-white border-[#002B7F]"
                    : "bg-white text-[#002B7F] border-[#002B7F] hover:bg-[#002B7F] hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

<<<<<<< HEAD
          {loading && <div className="py-20 text-center text-gray-400 font-sans">Loading records...</div>}

          {!loading && filteredRecords.length === 0 && (
            <div className="py-20 text-center text-gray-400 font-sans">No records available yet.</div>
          )}

          {!loading && filteredRecords.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRecords.map((record) => (
                <article
                  key={record._id}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border-2 border-[#FFD100]"
                >
                  <div className="relative h-48 bg-gradient-to-br from-[#002B7F] to-[#004A9F] flex flex-col items-center justify-center">
                    <FaTrophy className="text-6xl text-[#FFD100] mb-3" />
                    <span className="text-white text-sm font-semibold px-3 py-1 bg-black/30 rounded-full">{record.category}</span>
                    <div className="absolute top-3 right-3">
                      <span className="bg-[#FFD100] text-[#002B7F] text-xs font-bold px-2 py-1 rounded-full">Record</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-sans text-xl font-semibold text-[#002B7F] mb-3 line-clamp-2 group-hover:text-[#001B5F] transition-colors">
                      {record.title}
                    </h3>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="font-sans text-sm text-gray-600">Holder:</span>
                        <span className="font-sans text-sm font-bold text-[#002B7F]">{record.holder}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-sans text-sm text-gray-600">Score:</span>
                        <span className="font-sans text-2xl font-bold text-[#D71920]">{record.score}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-sans text-sm text-gray-600">Date:</span>
                        <span className="font-sans text-sm font-medium text-gray-700">{record.date}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-sans text-sm text-gray-600">Location:</span>
                        <span className="font-sans text-xs font-medium text-gray-700">{record.location}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {records.map((record) => (
              <article
                key={record.id}
                className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_12px_30px_rgba(2,6,23,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(2,6,23,0.22)]"
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
                        <FaTrophy className="text-3xl" style={{ color: colors.primary.navy }} />
                      </div>
                    </div>
                    <span
                      className="absolute top-5 right-5 rounded-full px-3 py-1 text-[11px] font-bold tracking-wide uppercase"
                      style={{ backgroundColor: colors.primary.yellow, color: colors.primary.navy }}
                    >
                      {record.category}
                    </span>
                  </div>
                </div>

                <div className="p-4 flex flex-col gap-2.5">
                  <h3 className="min-h-6 text-base md:text-lg font-sans font-extrabold leading-tight line-clamp-2" style={{ color: colors.primary.navy }}>
                    {record.title}
                  </h3>
                  {/* <div className="flex items-center justify-end">
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">{record.category}</span>
                  </div> */}

                  {/* <h3 className="min-h-6 text-base md:text-lg font-sans font-extrabold leading-tight line-clamp-2" style={{ color: colors.primary.navy }}>
                    {record.title}
                  </h3> */}

                  <div className="space-y-1 font-sans rounded-xl border border-slate-200 bg-slate-50 p-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-600">Holder</span>
                      <span className="text-xs md:text-sm font-sans font-bold" style={{ color: colors.primary.navy }}>{record.holder}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-600">Score</span>
                      <span className="text-xs md:text-sm font-sans font-extrabold" style={{ color: colors.primary.navy }}>{record.score}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Event</span>
                     <span className="text-xs font-medium text-slate-700">{record.event}</span>
                    </div>
                      <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Date</span>
                      <span className="text-sm font-medium text-slate-700">{record.date}</span>
                    </div>
                     <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Location</span>
                      <span className="text-xs font-medium text-slate-700">{record.location}</span>
                    </div>
                      
                    </div>
                  </div>

                  {/* <div className="flex flex-wrap gap-1.5">
                    <span className="max-w-full truncate rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700" title={record.discipline}>
                      {record.discipline}
                    </span>
                    <span className="max-w-full truncate rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700" title={record.event}>
                      {record.event}
                    </span>
                    <span className="max-w-full truncate rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700" title={record.location}>
                      {record.location}
                    </span>
                  </div> */}
                
              </article>
            ))}
          </div>
>>>>>>> b34211f3ba4931c85e9de2f88e6a11884de89047
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-sans text-3xl font-semibold mb-4" style={{ color: colors.primary.navy }}>
            Think You Can Break a Record?
          </h2>
          <p className="font-sans text-lg text-gray-600 mb-8">
            Join our training programs and compete in national championships to set your own records.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/programs"
              className="font-sans inline-flex items-center justify-center gap-3 bg-[#002B7F] hover:bg-[#001B5F] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105"
            >
              View Training Programs
            </Link>
            <Link
              href="/events"
              className="font-sans inline-flex items-center justify-center gap-3 bg-[#FFD100] hover:bg-[#E5BC00] text-[#002B7F] font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105"
            >
              View Upcoming Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
