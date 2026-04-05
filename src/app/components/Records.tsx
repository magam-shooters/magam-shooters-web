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
          <p className="text-sm font-montserrat font-semibold uppercase tracking-wider mb-2" style={{ color: colors.primary.blue }}>
            Achievements
          </p>
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4" style={{ color: colors.primary.navy }}>
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
              className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border-2 border-[#FFD100]"
            >
              <div className="relative h-48 bg-gradient-to-br from-[#002B7F] to-[#004A9F] flex flex-col items-center justify-center">
                <FaTrophy className="text-6xl text-[#FFD100] mb-3" />
                <span className="text-white text-sm font-semibold px-3 py-1 bg-black/30 rounded-full">
                  {record.category}
                </span>
                <div className="absolute top-3 right-3">
                  <span className="bg-[#FFD100] text-[#002B7F] text-xs font-bold px-2 py-1 rounded-full">
                    Record
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-montserrat font-bold text-[#002B7F] mb-3 line-clamp-2 group-hover:text-[#001B5F] transition-colors">
                  {record.title}
                </h3>
                
                <div className="space-y-2 mb-4 font-sans">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Holder:</span>
                    <span className="text-sm font-montserrat font-bold text-[#002B7F]">{record.holder}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Score:</span>
                    <span className="text-2xl font-montserrat font-bold text-[#00AEEF]">{record.score}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Date:</span>
                    <span className="text-sm font-medium text-gray-700">{record.date}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Location:</span>
                    <span className="text-xs font-medium text-gray-700">{record.location}</span>
                  </div>
                </div>
                
                <Link
                  href={`/records/${record._id}`}
                  className="inline-flex items-center gap-2 text-[#002B7F] hover:text-[#001B5F] font-montserrat font-semibold text-sm group-hover:gap-3 transition-all duration-300"
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
            className="inline-flex items-center gap-3 bg-[#FFD100] hover:bg-[#E5BC00] text-[#002B7F] font-montserrat font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105"
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
