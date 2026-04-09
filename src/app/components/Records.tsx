'use client';

import { colors } from "@/config";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRight, FaTrophy } from "react-icons/fa";

interface Record {
  _id: string;
  title: string;
  holder: string;
  score: string;
  date: string;
  location: string;
  category: string;
}

const Records = () => {
  const [records, setRecords] = useState<Record[]>([]);

  useEffect(() => {
    fetch('/api/records')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setRecords(data);
      })
      .catch(() => {});
  }, []);

  if (records.length === 0) return null;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-sans font-semibold uppercase tracking-wider mb-2" style={{ color: colors.primary.blue }}>
            Achievements
          </p>
          <h2 className="text-4xl md:text-5xl font-sans font-bold mb-4" style={{ color: colors.primary.navy }}>
            National Records
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            Outstanding achievements and record-breaking performances by Sri Lankan athletes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {records.map((record) => (
            <article
              key={record._id}
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
                    Record
                  </span>
                </div>
              </div>
              
              <div className="p-5 flex flex-col gap-4">
                <div className="flex items-center justify-end">
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">{record.category}</span>
                </div>

                <h3 className="min-h-10 text-lg font-sans font-extrabold leading-tight line-clamp-2" style={{ color: colors.primary.navy }}>
                  {record.title}
                </h3>
                
                <div className="space-y-2 font-sans rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Holder</span>
                    <span className="text-sm font-sans font-bold" style={{ color: colors.primary.navy }}>{record.holder}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Score</span>
                    <span className="text-xl font-sans font-extrabold" style={{ color: colors.primary.navy }}>{record.score}</span>
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
                
                <Link
                  href={`/records/${record._id}`}
                  className="mt-1 w-full rounded-xl py-2.5 text-sm font-bold tracking-wide transition-all duration-300 hover:brightness-95 hover:shadow-md active:scale-[0.99] inline-flex items-center justify-center gap-2"
                  style={{ backgroundColor: colors.primary.yellow, color: colors.primary.navy }}
                >
                  View Details
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/records"
            className="inline-flex items-center gap-3 bg-[#FFD100] hover:bg-[#E5BC00] text-[#002B7F] font-sans font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105"
          >
            View All Records
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Records;

