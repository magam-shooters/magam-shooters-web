"use client";

import { colors } from "@/config";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaClock, FaUsers } from "react-icons/fa";

interface TrainingProgram {
  _id: string;
  title: string;
  excerpt: string;
  duration: string;
  participants: string;
  imageUrl?: string;
  category: string;
}

export default function ProgramsPage() {
  const [programs, setPrograms] = useState<TrainingProgram[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("/api/training", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setPrograms(data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(programs.map((item) => item.category).filter(Boolean)));
    return ["All", ...unique];
  }, [programs]);

  const filteredPrograms = useMemo(() => {
    if (selectedCategory === "All") return programs;
    return programs.filter((program) => program.category === selectedCategory);
  }, [programs, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-[#002B7F] to-[#004A9F] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="font-sans inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <FaArrowLeft />
            <span>Back to Home</span>
          </Link>

          <div className="text-center mb-8">
            <p className="text-sm font-semibold uppercase tracking-wider mb-2 text-[#FFD100]">Training</p>
            <h1 className="font-sans text-4xl md:text-5xl font-bold mb-4">Our Training Programs</h1>
            <p className="font-sans text-lg text-white/90 max-w-2xl mx-auto">
              Professional training programs designed to develop shooting sports excellence at every level
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
                    ? "bg-[#002B7F] text-white border-[#002B7F]"
                    : "bg-white text-[#002B7F] border-[#002B7F] hover:bg-[#002B7F] hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {loading && <div className="py-20 text-center text-gray-400 font-sans">Loading programs...</div>}

          {!loading && filteredPrograms.length === 0 && (
            <div className="py-20 text-center text-gray-400 font-sans">No training programs available yet.</div>
          )}

          {!loading && filteredPrograms.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPrograms.map((program) => (
                <article
                  key={program._id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    {program.imageUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={program.imageUrl}
                        alt={program.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#002B7F] to-[#004A9F] flex items-center justify-center">
                        <span className="text-white text-sm font-semibold px-3 py-1 bg-black/30 rounded-full">
                          {program.category}
                        </span>
                      </div>
                    )}
                    <div className="absolute top-3 right-3">
                      <span className="bg-white/90 text-[#002B7F] text-xs font-bold px-2 py-1 rounded-full">
                        {program.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <FaClock className="text-xs" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaUsers className="text-xs" />
                        <span>{program.participants}</span>
                      </div>
                    </div>

                    <h3 className="font-sans text-xl font-semibold text-[#002B7F] mb-3 line-clamp-2 group-hover:text-[#001B5F] transition-colors">
                      {program.title}
                    </h3>

                    <p className="font-sans text-gray-600 text-sm mb-4 line-clamp-3">{program.excerpt}</p>
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
            Ready to Start Your Journey?
          </h2>
          <p className="font-sans text-lg text-gray-600 mb-8">
            Contact us to enroll in any of our training programs or learn about customized training options.
          </p>
          <Link
            href="/contact"
            className="font-sans inline-flex items-center gap-3 bg-[#002B7F] hover:bg-[#001B5F] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105"
          >
            Contact Us
            <FaArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
}
