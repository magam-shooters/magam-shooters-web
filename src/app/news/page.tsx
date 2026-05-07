"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  FaArrowRight,
  FaCalendar,
  FaSearch,
  FaUser,
} from "react-icons/fa";

import { colors } from "@/config";
import PageHero from "../components/PageHero";

interface NewsItem {
  _id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  imageUrl?: string;
  category: string;
}

const compactSummary = (text: string, maxWords = 16) => {
  if (!text) return "";

  const words = text.trim().split(/\s+/);

  if (words.length <= maxWords) {
    return text;
  }

  return `${words.slice(0, maxWords).join(" ")}...`;
};

export default function NewsPage() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [failedImages, setFailedImages] = useState<
    Record<string, boolean>
  >({});

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("/api/news", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch news");
        }

        const data = await res.json();

        if (Array.isArray(data)) {
          setNewsItems(data);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const categories = useMemo(() => {
    const unique = Array.from(
      new Set(
        newsItems
          .map((item) => item.category)
          .filter((category): category is string => Boolean(category))
      )
    );

    return ["All", ...unique];
  }, [newsItems]);

  const filteredNews = useMemo(() => {
    return newsItems.filter((news) => {
      const matchesSearch =
        news.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        news.excerpt
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        news.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [newsItems, searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <PageHero
        title="Latest News"
        subtitle="News & Updates"
        description="Stay informed with the latest news, announcements, and developments from the National Shooting Sports Federation of Sri Lanka."
      />

      {/* News Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Search + Filters */}
          <div className="mb-12 rounded-3xl bg-white p-6 shadow-sm border border-slate-200">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
              {/* Search */}
              <div className="relative flex-1">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type="text"
                  placeholder="Search news..."
                  value={searchQuery}
                  onChange={(e) =>
                    setSearchQuery(e.target.value)
                  }
                  className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 font-sans focus:border-[#002B7F] focus:outline-none focus:ring-2 focus:ring-[#002B7F]/20"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => {
                  const isActive =
                    selectedCategory === category;

                  return (
                    <button
                      key={category}
                      onClick={() =>
                        setSelectedCategory(category)
                      }
                      className={`font-sans rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-[#002B7F] text-white"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Loading */}
          {loading && (
            <div className="flex items-center justify-center py-20">
              <div className="h-12 w-12 rounded-full border-4 border-[#002B7F] border-t-transparent animate-spin" />
            </div>
          )}

          {/* Empty State */}
          {!loading && filteredNews.length === 0 && (
            <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-md">
              <h3 className="mb-2 font-sans text-2xl font-bold text-[#002B7F]">
                No News Found
              </h3>

              <p className="font-sans text-gray-600">
                No news articles match your current search
                or category.
              </p>
            </div>
          )}

          {/* News Grid */}
          {!loading && filteredNews.length > 0 && (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredNews.map((news) => {
                const hasImage =
                  Boolean(news.imageUrl) &&
                  !failedImages[news._id];

                return (
                  <article
                    key={news._id}
                    className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_12px_30px_rgba(2,6,23,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(2,6,23,0.22)]"
                  >
                    {/* Image Section */}
                    <div className="relative h-56 p-2">
                      <div
                        className="relative h-full w-full overflow-hidden rounded-2xl border-4 border-white"
                        style={{
                          background: `linear-gradient(145deg, ${colors.primary.navy} 0%, ${colors.primary.blue} 100%)`,
                        }}
                      >
                        {hasImage ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={news.imageUrl}
                            alt={news.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            onError={() =>
                              setFailedImages((prev) => ({
                                ...prev,
                                [news._id]: true,
                              }))
                            }
                          />
                        ) : (
                          <>
                            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white_0%,transparent_45%),radial-gradient(circle_at_80%_70%,white_0%,transparent_35%)]" />

                            <div className="relative z-10 flex h-full items-center justify-center px-4 text-center">
                              <span className="rounded-full bg-black/30 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                                {news.category}
                              </span>
                            </div>
                          </>
                        )}

                        {/* Category Badge */}
                        <span
                          className="absolute top-5 right-5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide"
                          style={{
                            backgroundColor:
                              colors.primary.yellow,
                            color: colors.primary.navy,
                          }}
                        >
                          {news.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-4 p-5">
                      {/* Title */}
                      <h3 className="line-clamp-2 min-h-[56px] text-lg font-extrabold leading-tight font-sans text-[#002B7F] transition-colors group-hover:text-[#001B5F]">
                        {news.title}
                      </h3>

                      {/* Meta */}
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-sans text-slate-600">
                        <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 font-semibold">
                          <FaCalendar className="text-xs" />
                          <span>{news.date}</span>
                        </div>

                        <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 font-semibold">
                          <FaUser className="text-xs" />
                          <span>{news.author}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="line-clamp-3 font-sans text-sm leading-6 text-slate-600">
                        {compactSummary(news.excerpt)}
                      </p>

                      {/* CTA */}
                      <Link
                        href={`/news/${news._id}`}
                        className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold tracking-wide transition-all duration-300 hover:brightness-95 hover:shadow-md active:scale-[0.99]"
                        style={{
                          backgroundColor:
                            colors.primary.yellow,
                          color: colors.primary.navy,
                        }}
                      >
                        Read More
                        <FaArrowRight className="text-xs" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}