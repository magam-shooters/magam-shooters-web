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
          <p className="text-sm font-montserrat font-semibold uppercase tracking-wider mb-2" style={{ color: colors.primary.blue }}>
            Our Training Programs
          </p>
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4" style={{ color: colors.primary.navy }}>
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
              className="card-unified group"
            >
              <div className="relative h-48 overflow-hidden">
                {program.imageUrl ? (
                  <img src={program.imageUrl} alt={program.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-linear-to-br from-[#002B7F] to-[#004A9F] flex items-center justify-center">
                    <span className="text-white text-sm font-semibold px-3 py-1 bg-black/30 rounded-full">
                      {program.category}
                    </span>
                  </div>
                )}
                <div className="absolute top-3 right-3">
                  <span className="tag-unified text-xs font-bold px-2 py-1 rounded-full">
                    {program.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3 font-sans">
                  <div className="flex items-center gap-1">
                    <FaClock className="text-xs" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaUsers className="text-xs" />
                    <span>{program.participants}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-montserrat font-bold text-[#002B7F] mb-3 line-clamp-2 group-hover:text-[#001B5F] transition-colors">
                  {program.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 font-sans">
                  {program.excerpt}
                </p>
                
                <Link
                  href={`/programs/${program._id}`}
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
            className="inline-flex items-center gap-3 bg-[#002B7F] hover:bg-[#001B5F] text-white font-montserrat font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105"
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
