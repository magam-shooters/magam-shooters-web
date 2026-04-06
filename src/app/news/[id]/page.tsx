"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaCalendar, FaUser } from "react-icons/fa";
import PageHero from "../../components/PageHero";

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

export default function NewsDetailPage() {
  const params = useParams<{ id: string }>();
  const [news, setNews] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!params?.id) return;

    fetch(`/api/news/${params.id}`, { cache: "no-store" })
      .then(async (res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((data) => setNews(data))
      .catch(() => setNews(null))
      .finally(() => setLoading(false));
  }, [params?.id]);

  if (loading) {
    return (
      <div className="py-20 text-center">
        <p className="font-sans text-gray-500 text-lg">Loading news...</p>
      </div>
    );
  }

  if (!news) {
    return (
      <div className="py-20 text-center">
        <p className="font-sans text-gray-500 text-lg mb-4">News article not found.</p>
        <Link href="/news" className="font-sans text-[#002B7F] hover:text-[#001B5F] font-semibold">
          Back to News
        </Link>
      </div>
    );
  }

  return (
    <div>
      <PageHero title={news.title} description={news.excerpt} />

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-[#002B7F] hover:text-[#001B5F] font-sans font-semibold mb-8"
          >
            <FaArrowLeft className="text-xs" />
            Back to All News
          </Link>

          <article className="bg-white rounded-xl shadow-lg overflow-hidden">
            {news.imageUrl && (
              <div className="h-72 md:h-96 overflow-hidden bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={news.imageUrl} alt={news.title} className="w-full h-full object-cover" />
              </div>
            )}

            <div className="p-8 md:p-10">
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-5">
                <div className="flex items-center gap-1">
                  <FaCalendar className="text-xs" />
                  <span>{news.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaUser className="text-xs" />
                  <span>{news.author}</span>
                </div>
                <span className="bg-[#EDF3FF] text-[#002B7F] text-xs font-bold px-2 py-1 rounded-full">
                  {news.category}
                </span>
              </div>

              <h1 className="font-sans text-3xl md:text-4xl font-bold text-[#002B7F] mb-6">{news.title}</h1>

              <div className="font-sans text-gray-700 leading-8 whitespace-pre-line">{news.content}</div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
