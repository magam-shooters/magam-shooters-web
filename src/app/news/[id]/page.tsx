"use client";

import { colors } from "@/config";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaCalendar,
  FaFacebook,
  FaLinkedin,
  FaShare,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import PageHero from "../../components/PageHero";

interface NewsItem {
  _id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  imageUrl?: string;
  category: string;
  content: string;
}

export default function NewsArticle() {
  const params = useParams();
  const newsId = params.id as string;

  const [newsData, setNewsData] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (!newsId) return;

    fetch(`/api/news/${newsId}`, {
      cache: "no-store",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch article");
        }

        return res.json();
      })
      .then((data) => {
        setNewsData(data);
      })
      .catch(() => {
        setNewsData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [newsId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <PageHero
          title="Loading..."
          description="Fetching article details"
        />

        <div className="py-24 text-center">
          <p className="font-sans text-lg text-gray-500">
            Loading article...
          </p>
        </div>
      </div>
    );
  }

  if (!newsData) {
    return (
      <div className="min-h-screen bg-gray-50">
        <PageHero
          title="News Not Found"
          description="The requested news article could not be found."
        />

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-sans text-2xl font-semibold text-gray-800 mb-4">
              Article Not Found
            </h1>

            <p className="font-sans text-gray-600 mb-8">
              The news article you&apos;re looking for doesn&apos;t exist or may
              have been removed.
            </p>

            <Link
              href="/news"
              className="font-sans inline-flex items-center gap-2 bg-[#002B7F] hover:bg-[#001B5F] text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              <FaArrowLeft />
              Back to News
            </Link>
          </div>
        </section>
      </div>
    );
  }

  const hasImage = Boolean(newsData.imageUrl) && !imageError;

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title={newsData.title}
        subtitle={newsData.category}
        description={newsData.excerpt}
      />

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <article className="bg-white rounded-3xl shadow-[0_12px_35px_rgba(2,6,23,0.08)] overflow-hidden border border-slate-200">
            {/* Featured Image */}
            <div className="relative w-full h-64 sm:h-80 lg:h-[450px] overflow-hidden">
              {hasImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={newsData.imageUrl}
                  alt={newsData.title}
                  className="w-full h-full object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{
                    background: `linear-gradient(145deg, ${colors.primary.navy} 0%, ${colors.primary.blue} 100%)`,
                  }}
                >
                  <div className="text-center px-6">
                    <span className="inline-flex rounded-full bg-white/20 px-4 py-2 text-white text-sm font-semibold backdrop-blur-sm">
                      {newsData.category}
                    </span>
                  </div>
                </div>
              )}

              <div className="absolute top-5 right-5">
                <span
                  className="rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide"
                  style={{
                    backgroundColor: colors.primary.yellow,
                    color: colors.primary.navy,
                  }}
                >
                  {newsData.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 lg:p-10">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
                  <FaCalendar className="text-xs" />
                  <span>{newsData.date}</span>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
                  <FaUser className="text-xs" />
                  <span>{newsData.author}</span>
                </div>
              </div>

              {/* Title */}
              <h1
                className="font-sans text-3xl sm:text-4xl font-extrabold leading-tight mb-6"
                style={{ color: colors.primary.navy }}
              >
                {newsData.title}
              </h1>

              {/* Excerpt */}
              <p className="font-sans text-lg leading-8 text-slate-600 mb-10 border-l-4 pl-5 italic border-[#FFD100]">
                {newsData.excerpt}
              </p>

              {/* Main Content */}
              <div className="prose prose-lg max-w-none">
                <div className="font-sans text-slate-700 leading-8 whitespace-pre-line">
                  {newsData.content}
                </div>
              </div>

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2 text-slate-700">
                      <FaShare />
                      <span className="font-semibold">
                        Share this article
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                      >
                        <FaFacebook />
                      </button>

                      <button
                        type="button"
                        className="p-3 rounded-full bg-sky-500 hover:bg-sky-600 text-white transition-colors"
                      >
                        <FaTwitter />
                      </button>

                      <button
                        type="button"
                        className="p-3 rounded-full bg-blue-700 hover:bg-blue-800 text-white transition-colors"
                      >
                        <FaLinkedin />
                      </button>
                    </div>
                  </div>

                  <Link
                    href="/news"
                    className="inline-flex items-center gap-2 font-semibold transition-colors"
                    style={{ color: colors.primary.navy }}
                  >
                    <FaArrowLeft />
                    Back to All News
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}