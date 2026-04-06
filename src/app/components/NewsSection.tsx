'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRight, FaCalendar, FaUser } from "react-icons/fa";
import ModernSectionHeader from "./ModernSectionHeader";

interface NewsItem {
  _id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  imageUrl?: string;
  category: string;
}

const NewsSection = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);

  useEffect(() => {
    fetch('/api/news?limit=6')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setNewsItems(data.slice(0, 6));
      })
      .catch(() => {});
  }, []);

  if (newsItems.length === 0) return null;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <ModernSectionHeader
          title="Latest News"
          description="Stay updated with the latest developments, achievements, and announcements from NSSF Sri Lanka"
          alignment="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {newsItems.map((news) => (
            <article
              key={news._id}
              className="card-unified group"
            >
              <div className="relative h-48 overflow-hidden">
                {news.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={news.imageUrl}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-linear-to-br from-[#002B7F] to-[#004A9F] flex items-center justify-center">
                    <span className="text-white text-sm font-semibold px-3 py-1 bg-black/30 rounded-full">
                      {news.category}
                    </span>
                  </div>
                )}
                <div className="absolute top-3 right-3">
                  <span className="tag-unified text-xs font-bold px-2 py-1 rounded-full">
                    {news.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3 font-sans">
                  <div className="flex items-center gap-1">
                    <FaCalendar className="text-xs" />
                    <span>{news.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaUser className="text-xs" />
                    <span>{news.author}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-sans font-bold text-[#002B7F] mb-3 line-clamp-2 group-hover:text-[#001B5F] transition-colors">
                  {news.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 font-sans">
                  {news.excerpt}
                </p>
                
                <Link
                  href={`/news/${news._id}`}
                  className="inline-flex items-center gap-2 text-[#002B7F] hover:text-[#001B5F] font-sans font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                >
                  Read More
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/news"
            className="inline-flex items-center gap-3 bg-[#002B7F] hover:bg-[#001B5F] text-white font-sans font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105"
          >
            View All News
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
