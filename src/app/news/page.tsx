"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { FaArrowRight, FaCalendar, FaSearch, FaUser } from "react-icons/fa";
import PageHero from "../components/PageHero";

interface NewsItem {
  _id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  imageUrl?: string;
  category: string;
}

export default function NewsPage() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("/api/news", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setNewsItems(data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(newsItems.map((item) => item.category).filter(Boolean)));
    return ["All", ...unique];
  }, [newsItems]);

  const filteredNews = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return newsItems.filter((news) => {
      const matchesSearch =
        news.title.toLowerCase().includes(q) ||
        news.excerpt.toLowerCase().includes(q) ||
        news.author.toLowerCase().includes(q);
      const matchesCategory = selectedCategory === "All" || news.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [newsItems, searchQuery, selectedCategory]);

  return (
    <div>
      <PageHero
        title="News & Updates"
        description="Stay informed with the latest news, announcements, and developments from the National Shooting Sports Federation of Sri Lanka."
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 bg-gray-50 rounded-xl p-6">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="flex-1 relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search news..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-[#002B7F] focus:outline-none focus:ring-2 focus:ring-[#002B7F]/20"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`font-sans px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-[#002B7F] text-white"
                        : "bg-white text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {loading && (
            <div className="text-center py-12">
              <p className="font-sans text-gray-500 text-lg">Loading news...</p>
            </div>
          )}

          {!loading && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredNews.map((news) => (
                  <article
                    key={news._id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
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
                        <div className="w-full h-full bg-gradient-to-br from-[#002B7F] to-[#004A9F] flex items-center justify-center">
                          <span className="text-white text-sm font-semibold px-3 py-1 bg-black/30 rounded-full">
                            {news.category}
                          </span>
                        </div>
                      )}
                      <div className="absolute top-3 right-3">
                        <span className="bg-white/90 text-[#002B7F] text-xs font-bold px-2 py-1 rounded-full">
                          {news.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <FaCalendar className="text-xs" />
                          <span>{news.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaUser className="text-xs" />
                          <span>{news.author}</span>
                        </div>
                      </div>

                      <h3 className="font-sans text-xl font-semibold text-[#002B7F] mb-3 line-clamp-2 group-hover:text-[#001B5F] transition-colors">
                        {news.title}
                      </h3>

                      <p className="font-sans text-gray-600 text-sm mb-4 line-clamp-3">
                        {news.excerpt}
                      </p>

                      <Link
                        href={`/news/${news._id}`}
                        className="font-sans inline-flex items-center gap-2 text-[#002B7F] hover:text-[#001B5F] font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                      >
                        Read More
                        <FaArrowRight className="text-xs" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {filteredNews.length === 0 && (
                <div className="text-center py-12">
                  <p className="font-sans text-gray-500 text-lg">No news found matching your criteria.</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
