'use client';

import { colors } from '@/config';
import Link from "next/link";
import { useEffect, useState } from 'react';
import { FaArrowRight, FaClock, FaUsers } from "react-icons/fa";


interface TrainingProgram {
  _id: string;
  title: string;
  excerpt: string;
  duration: string;
  participants: string;
  imageUrl?: string;
  category: string;
}

const TrainingPrograms = () => {
  const [programs, setPrograms] = useState<TrainingProgram[]>([]);

  useEffect(() => {
    fetch('/api/training')
      .then((r) => r.json())
      .then((data) => setPrograms(Array.isArray(data) ? data : []))
      .catch(() => {});
  }, []);

  if (programs.length === 0) return null;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
           <div className="text-center mb-16">
          <p className="text-sm font-sans font-semibold uppercase tracking-wider mb-2" style={{ color: colors.primary.blue }}>
            Our Training Programs
          </p>
          <h2 className="text-4xl md:text-5xl font-sans font-bold mb-4" style={{ color: colors.primary.navy }}>
            Training Programs for All Levels
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            World-class training programs designed to develop champions at every level
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {programs.map((program) => (
            <article
              key={program._id}
              className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_12px_30px_rgba(2,6,23,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(2,6,23,0.22)]"
            >
              <div className="relative h-56 p-2">
                <div
                  className="relative h-full w-full rounded-2xl border-4 border-white overflow-hidden"
                  style={{
                    background: program.imageUrl ? undefined : `linear-gradient(145deg, #002B7F 0%, #004A9F 100%)`,
                  }}
                >
                  {program.imageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={program.imageUrl}
                      alt={program.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : null}

                  {!program.imageUrl && (
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white_0%,transparent_45%),radial-gradient(circle_at_80%_70%,white_0%,transparent_35%)]" />
                  )}

                  {!program.imageUrl && (
                    <div className="relative z-10 h-full flex items-center justify-center px-4 text-center">
                      <span className="text-white text-sm font-semibold px-3 py-1 bg-black/30 rounded-full">
                        {program.category}
                      </span>
                    </div>
                  )}

                  <span
                    className="absolute top-5 right-5 rounded-full px-3 py-1 text-[11px] font-bold tracking-wide uppercase"
                    style={{ backgroundColor: '#FFD100', color: '#002B7F' }}
                  >
                    {program.category}
                  </span>
                </div>
              </div>
              
              <div className="p-5 flex flex-col gap-4">
                <div className="flex items-center justify-between text-xs text-slate-600 font-sans">
                  <div className="flex items-center gap-1.5">
                    <FaClock className="text-xs" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 font-semibold">
                    <FaUsers className="text-xs" />
                    <span>{program.participants}</span>
                  </div>
                </div>
                
                <h3 className="min-h-10 text-lg font-sans font-extrabold leading-tight line-clamp-2 transition-colors" style={{ color: '#002B7F' }}>
                  {program.title}
                </h3>
                
                <p className="text-slate-600 text-sm line-clamp-3 font-sans">
                  {program.excerpt}
                </p>
                
                <Link
                  href={`/programs/${program._id}`}
                  className="mt-1 w-full rounded-xl py-2.5 text-sm font-bold tracking-wide transition-all duration-300 hover:brightness-95 hover:shadow-md active:scale-[0.99] inline-flex items-center justify-center gap-2"
                  style={{ backgroundColor: '#FFD100', color: '#002B7F' }}
                >
                  Learn More
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/programs"
            className="inline-flex items-center gap-3 bg-[#002B7F] hover:bg-[#001B5F] text-white font-sans font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105"
          >
            View All Programs
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrainingPrograms;

