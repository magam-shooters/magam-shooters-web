"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { FaMapMarkerAlt, FaTrophy, FaCalendarAlt } from "react-icons/fa";

import { colors } from "@/config";
import PageHero from "../components/PageHero";

interface RecordItem {
  _id: string;
  title: string;
  holder: string;
  score: string;
  date: string;
  location: string;
  category: string;
  event?: string;
}

export default function RecordsPage() {
  const [records, setRecords] = useState<RecordItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const res = await fetch("/api/records", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch records");
        }

        const data = await res.json();

        if (Array.isArray(data)) {
          setRecords(data);
        }
      } catch (error) {
        console.error("Error fetching records:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecords();
  }, []);

  const categories = useMemo(() => {
    const unique = Array.from(
      new Set(
        records
          .map((item) => item.category)
          .filter((category): category is string => Boolean(category))
      )
    );

    return ["All", ...unique];
  }, [records]);

  const filteredRecords = useMemo(() => {
    if (selectedCategory === "All") {
      return records;
    }

    return records.filter(
      (record) => record.category === selectedCategory
    );
  }, [records, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <PageHero
        title="Achievements"
        subtitle="National Records"
        description="Outstanding achievements and record-breaking performances by Sri Lankan athletes"
      />

      {/* Records Section */}
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
          {!loading && filteredRecords.length === 0 && (
            <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-md">
              <FaTrophy className="mx-auto mb-4 text-5xl text-[#002B7F]" />

              <h3 className="font-sans text-2xl font-bold text-[#002B7F] mb-2">
                No Records Found
              </h3>

              <p className="font-sans text-gray-600">
                There are no records available for this category.
              </p>
            </div>
          )}

          {/* Records Grid */}
          {!loading && filteredRecords.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRecords.map((record) => (
                <article
                  key={record._id}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_12px_30px_rgba(2,6,23,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(2,6,23,0.22)]"
                >
                  {/* Top Banner */}
                  <div className="relative h-56 p-2">
                    <div
                      className="relative h-full w-full overflow-hidden rounded-2xl border-4 border-white"
                      style={{
                        background: `linear-gradient(145deg, ${colors.primary.navy} 0%, ${colors.primary.blue} 100%)`,
                      }}
                    >
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white_0%,transparent_45%),radial-gradient(circle_at_80%_70%,white_0%,transparent_35%)]" />

                      <div className="relative z-10 flex h-full items-center justify-center">
                        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/90 shadow-xl">
                          <FaTrophy
                            className="text-4xl"
                            style={{ color: colors.primary.navy }}
                          />
                        </div>
                      </div>

                      <span
                        className="absolute top-5 right-5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide"
                        style={{
                          backgroundColor: colors.primary.yellow,
                          color: colors.primary.navy,
                        }}
                      >
                        {record.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-4 p-5">
                    {/* Title */}
                    <h3
                      className="line-clamp-2 min-h-[56px] text-lg font-extrabold leading-tight font-sans"
                      style={{ color: colors.primary.navy }}
                    >
                      {record.title}
                    </h3>

                    {/* Details */}
                    <div className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 font-sans">
                      {/* Holder */}
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-sm text-slate-600">
                          Holder
                        </span>

                        <span
                          className="text-sm font-bold text-right"
                          style={{ color: colors.primary.navy }}
                        >
                          {record.holder}
                        </span>
                      </div>

                      {/* Score */}
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-sm text-slate-600">
                          Score
                        </span>

                        <span
                          className="text-sm font-extrabold"
                          style={{ color: colors.primary.navy }}
                        >
                          {record.score}
                        </span>
                      </div>

                      {/* Event */}
                      {record.event && (
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-sm text-slate-600">
                            Event
                          </span>

                          <span className="text-sm font-medium text-slate-700 text-right">
                            {record.event}
                          </span>
                        </div>
                      )}

                      {/* Date */}
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2 text-slate-600">
                          <FaCalendarAlt className="text-xs" />
                          <span className="text-sm">Date</span>
                        </div>

                        <span className="text-sm font-medium text-slate-700">
                          {record.date}
                        </span>
                      </div>

                      {/* Location */}
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2 text-slate-600">
                          <FaMapMarkerAlt className="text-xs" />
                          <span className="text-sm">Location</span>
                        </div>

                        <span className="text-sm font-medium text-slate-700 text-right">
                          {record.location}
                        </span>
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
            className="mb-4 font-sans text-3xl font-semibold"
            style={{ color: colors.primary.navy }}
          >
            Think You Can Break a Record?
          </h2>

          <p className="mb-8 font-sans text-lg text-gray-600">
            Join our training programs and compete in national championships
            to set your own records.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/programs"
              className="font-sans inline-flex items-center justify-center rounded-full bg-[#002B7F] px-8 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#001B5F]"
            >
              View Training Programs
            </Link>

            <Link
              href="/events"
              className="font-sans inline-flex items-center justify-center rounded-full bg-[#FFD100] px-8 py-3 font-semibold text-[#002B7F] transition-all duration-300 hover:scale-105 hover:bg-[#E5BC00]"
            >
              View Upcoming Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}