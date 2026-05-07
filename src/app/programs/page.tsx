"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  FaArrowRight,
  FaClock,
  FaUsers,
} from "react-icons/fa";

import { colors } from "@/config";
import PageHero from "../components/PageHero";

interface TrainingProgram {
  _id: string;
  title: string;
  excerpt: string;
  duration: string;
  participants: string;
  imageUrl?: string;
  category: string;
  level?: string;
  benefits?: string[];
}

const compactSummary = (text: string, maxWords = 14) => {
  if (!text) return "";

  const words = text.trim().split(/\s+/);

  if (words.length <= maxWords) {
    return text;
  }

  return `${words.slice(0, maxWords).join(" ")}...`;
};

export default function ProgramsPage() {
  const [programs, setPrograms] = useState<TrainingProgram[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const res = await fetch("/api/training", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch training programs");
        }

        const data = await res.json();

        if (Array.isArray(data)) {
          setPrograms(data);
        }
      } catch (error) {
        console.error("Error fetching programs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

  const categories = useMemo(() => {
    const unique = Array.from(
      new Set(
        programs
          .map((item) => item.category)
          .filter((category): category is string => Boolean(category))
      )
    );

    return ["All", ...unique];
  }, [programs]);

  const filteredPrograms = useMemo(() => {
    if (selectedCategory === "All") {
      return programs;
    }

    return programs.filter(
      (program) => program.category === selectedCategory
    );
  }, [programs, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <PageHero
        title="Training Programs"
        subtitle="Our Training Programs"
        description="World-class training programs designed to develop champions at every level"
      />

      {/* Programs Section */}
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
          {!loading && filteredPrograms.length === 0 && (
            <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-md">
              <h3 className="mb-2 font-sans text-2xl font-bold text-[#002B7F]">
                No Programs Found
              </h3>

              <p className="font-sans text-gray-600">
                No training programs are available for this category yet.
              </p>
            </div>
          )}

          {/* Programs Grid */}
          {!loading && filteredPrograms.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPrograms.map((program) => (
                <article
                  key={program._id}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_12px_30px_rgba(2,6,23,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(2,6,23,0.22)]"
                >
                  {/* Header */}
                  <div className="relative h-56 p-2">
                    <div
                      className="relative h-full w-full overflow-hidden rounded-2xl border-4 border-white"
                      style={{
                        background: `linear-gradient(145deg, ${colors.primary.navy} 0%, ${colors.primary.blue} 100%)`,
                      }}
                    >
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white_0%,transparent_45%),radial-gradient(circle_at_80%_70%,white_0%,transparent_35%)]" />

                      {/* Center Category */}
                      <div className="relative z-10 flex h-full items-center justify-center px-4 text-center">
                        <span className="rounded-full bg-black/30 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                          {program.category}
                        </span>
                      </div>

                      {/* Category Badge */}
                      <span
                        className="absolute top-5 right-5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide"
                        style={{
                          backgroundColor: colors.primary.yellow,
                          color: colors.primary.navy,
                        }}
                      >
                        {program.category}
                      </span>

                      {/* Level Badge */}
                      {program.level && (
                        <span className="absolute top-5 left-5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#002B7F]">
                          {program.level}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-4 p-5">
                    {/* Meta */}
                    <div className="flex items-center justify-between gap-2 text-xs font-sans text-slate-600">
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 font-semibold">
                        <FaClock className="text-xs" />
                        <span>{program.duration}</span>
                      </div>

                      <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 font-semibold">
                        <FaUsers className="text-xs" />
                        <span>{program.participants}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="line-clamp-2 min-h-[56px] text-lg font-extrabold leading-tight font-sans text-[#002B7F] transition-colors group-hover:text-[#001B5F]">
                      {program.title}
                    </h3>

                    {/* Description */}
                    <p className="line-clamp-3 font-sans text-sm leading-6 text-slate-600">
                      {compactSummary(program.excerpt)}
                    </p>

                    {/* Benefits */}
                    {program.benefits &&
                      program.benefits.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {program.benefits
                            .slice(0, 3)
                            .map((benefit, index) => (
                              <span
                                key={index}
                                title={benefit}
                                className="max-w-full truncate rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700"
                              >
                                {benefit}
                              </span>
                            ))}
                        </div>
                      )}

                    {/* CTA */}
                    <Link
                      href={`/programs/${program._id}`}
                      className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#FFD100] py-3 text-sm font-bold tracking-wide text-[#002B7F] transition-all duration-300 hover:brightness-95 hover:shadow-md active:scale-[0.99]"
                    >
                      Learn More
                      <FaArrowRight className="text-xs" />
                    </Link>
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
            Ready to Start Your Journey?
          </h2>

          <p className="mb-8 font-sans text-lg text-gray-600">
            Contact us to enroll in any of our training programs or learn
            about customized training options.
          </p>

          <Link
            href="/contact"
            className="font-sans inline-flex items-center gap-3 rounded-full bg-[#002B7F] px-8 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#001B5F]"
          >
            Contact Us
            <FaArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
}