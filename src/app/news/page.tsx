"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRight, FaCalendar, FaSearch, FaUser } from "react-icons/fa";
import PageHero from "../components/PageHero";
import { colors } from "@/config";

interface NewsItem {
  _id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  imageUrl?: string;
  category: string;
}

const compactSummary = (text: string, maxWords = 14) => {
  const words = text.trim().split(/\s+/);
  if (words.length <= maxWords) return text;
  return `${words.slice(0, maxWords).join(" ")}...`;
};


// //Sample news data - this would typically come from a CMS or API
// // const allNewsItems: NewsItem[] = [
// //   {
// //     id: "1",
// //     title: "NSSF Announces National Championship Results",
// //     excerpt: "Outstanding performance by Sri Lankan athletes at the 2026 National Shooting Championship with record-breaking scores.",
// //     content: `The National Shooting Sports Federation of Sri Lanka is proud to announce the outstanding results from the 2026 National Shooting Championship held at the Colombo Shooting Club from February 15-18, 2026.
    
// //     This year's championship witnessed exceptional performances across all disciplines, with several national records being broken. The event featured over 200 athletes from 25 affiliated clubs across the island, competing in various categories including Air Rifle, Air Pistol, Small Bore Rifle, and Rapid Fire Pistol.
    
// //     Notable performances included Samantha Perera's new national record in the Men's 10m Air Rifle with a score of 632.5, surpassing the previous record by 2.3 points. In the Women's category, Nimal Jayasuriya achieved a remarkable 628.1 in the 10m Air Rifle, setting a new benchmark for future competitions.
    
// //     The championship also served as the selection event for the upcoming Asian Games, with the top performers earning their spots on the national team. NSSF President commended all participants for their dedication and sportsmanship displayed throughout the event.`,
// //     date: "February 20, 2026",
// //     author: "NSSF Media Team",
// //     image: "/gallery/news-1.jpg",
// //     category: "Championships"
// //   },
// //   {
// //     id: "2",
// //     title: "New Training Facility Opens in Kandy",
// //     excerpt: "State-of-the-art shooting range with Olympic-standard facilities now open for athletes across the Central Province.",
// //     content: `The National Shooting Sports Federation of Sri Lanka officially opened its newest training facility in Kandy on February 18, 2026. This state-of-the-art complex represents a significant investment in developing shooting sports infrastructure in the Central Province.
    
// //     The new facility features 20 electronic lanes for 10m Air Rifle and Air Pistol, complete with SIUS electronic scoring systems that meet international standards. Additionally, the complex includes a 50m range with 15 lanes for Small Bore Rifle events, making it one of the most comprehensive shooting facilities outside of Colombo.
    
// //     The facility also houses modern amenities including equipment storage, athlete rest areas, coaching spaces, and administrative offices. Special attention has been paid to safety protocols, with advanced ventilation systems and sound insulation to minimize environmental impact.
    
// //     This expansion is part of NSSF's broader strategy to decentralize training opportunities and make high-quality facilities accessible to athletes across all provinces. The Kandy facility is expected to serve over 150 registered athletes and will host regional competitions throughout the year.`,
// //     date: "February 18, 2026",
// //     author: "NSSF Development",
// //     image: "/gallery/news-2.jpg",
// //     category: "Facilities"
// //   },
// //   {
// //     id: "3",
// //     title: "Youth Development Program Expansion",
// //     excerpt: "NSSF launches comprehensive youth program across 15 schools to identify and nurture young shooting talent.",
// //     content: `The National Shooting Sports Federation has announced a major expansion of its youth development program, partnering with 15 schools across Sri Lanka to introduce shooting sports to students aged 12-18.
    
// //     This initiative, launched on February 15, 2026, aims to identify and nurture young talent while promoting discipline, concentration, and mental strength among youth. The program includes basic safety training, fundamental shooting techniques, and character development components.
    
// //     Participating schools include prestigious institutions from Colombo, Kandy, Galle, and other major cities. Each school will receive specialized equipment including air rifles suitable for beginners, safety gear, and training materials developed specifically for young athletes.
    
// //     Professional coaches from NSSF will conduct weekly training sessions at each school, with promising students invited to advanced training camps during school holidays. The program also includes educational components about Olympic history, sportsmanship, and career opportunities in shooting sports.
    
// //     "This investment in our youth is crucial for the future of shooting sports in Sri Lanka," said the NSSF Youth Development Coordinator. "We're not just training athletes; we're building character and discipline that will benefit these young people throughout their lives."`,
// //     date: "February 15, 2026",
// //     author: "Youth Development Team",
// //     image: "/gallery/news-3.jpg",
// //     category: "Youth Programs"
// //   },
// //   {
// //     id: "4",
// //     title: "International Coach Workshop Series",
// //     excerpt: "World-renowned coaches to conduct technical workshops for Sri Lankan trainers and athletes this March.",
// //     content: `The NSSF is pleased to announce an exclusive series of international coaching workshops scheduled for March 2026. These sessions will feature world-renowned coaches from Germany, India, and Australia, bringing cutting-edge training methodologies to Sri Lankan shooting sports.
    
// //     The workshop series, running from March 5-12, 2026, will cover advanced techniques in mental preparation, biomechanics, equipment optimization, and competition strategy. These sessions are designed for both coaches and elite athletes looking to enhance their technical knowledge and performance.
    
// //     Featured instructors include Olympic medalist and coach Dr. Wolfgang Mueller from Germany, who will focus on precision shooting techniques, and Rajesh Patel from India, specializing in rapid-fire events. Australian coach Sarah Thompson will lead sessions on sports psychology and mental conditioning.
    
// //     The workshops will be held at the National Shooting Center in Colombo, with limited seats available to ensure personalized attention. Priority registration is given to national team members, certified coaches, and promising junior athletes.
    
// //     This initiative is part of NSSF's commitment to bringing international best practices to Sri Lankan shooting sports and ensuring our athletes and coaches have access to world-class knowledge and techniques.`,
// //     date: "February 12, 2026",
// //     author: "Technical Committee",
// //     image: "/gallery/news-4.jpg",
// //     category: "Training"
// //   },
// //   {
// //     id: "5",
// //     title: "Asian Games Qualification Update",
// //     excerpt: "Five Sri Lankan shooters secure qualification spots for the upcoming Asian Games following excellent performances.",
// //     content: `Five talented Sri Lankan shooters have successfully secured their qualification spots for the upcoming Asian Games, following a series of excellent performances at recent international and national competitions.
    
// //     The qualified athletes include Samantha Perera (Men's 10m Air Rifle), Nimal Jayasuriya (Women's 10m Air Rifle), Kasun Fernando (Men's 25m Rapid Fire Pistol), Dilani Silva (Women's 10m Air Pistol), and Chaminda Rajapakse (Men's 50m Rifle 3 Positions).
    
// //     These athletes achieved the required Minimum Qualification Scores (MQS) set by the Asian Shooting Confederation and demonstrated consistent performance across multiple competitions. Their qualification marks a significant achievement for Sri Lankan shooting sports on the international stage.
    
// //     The selection process was highly competitive, with over 30 athletes vying for the limited spots available. The final team selection was based on a combination of recent performance scores, consistency in major competitions, and demonstrated ability to perform under pressure.
    
// //     "We are incredibly proud of these five athletes who have earned their places through dedication, hard work, and exceptional skill," said the NSSF President. "They represent the best of Sri Lankan shooting sports and we're confident they will make our nation proud at the Asian Games."
    
// //     The team will undergo intensive training camps and compete in preparation events before the Asian Games to ensure optimal performance.`,
// //     date: "February 10, 2026",
// //     author: "Selection Committee",
// //     image: "/gallery/news-5.jpg",
// //     category: "International"
// //   },
// //   {
// //     id: "6",
// //     title: "Equipment Modernization Initiative",
// //     excerpt: "NSSF invests in cutting-edge electronic scoring systems and training equipment across all affiliated clubs.",
// //     content: `The National Shooting Sports Federation has announced a comprehensive equipment modernization initiative, investing in cutting-edge electronic scoring systems and training equipment across all affiliated clubs.
    
// //     This Rs. 50 million investment includes the installation of SIUS electronic targets at 12 major clubs, upgrading existing mechanical systems to provide real-time scoring and analysis capabilities. The new systems offer precise shot placement data, statistical analysis, and training feedback that was previously unavailable.
    
// //     Additionally, the initiative includes the procurement of modern air rifles and pistols that meet current international standards, ensuring all athletes have access to competition-grade equipment during training. Safety equipment upgrades include new ventilation systems, improved lighting, and enhanced security measures.
    
// //     The modernization project will be implemented in phases over six months, starting with the National Shooting Center in Colombo and extending to regional facilities. Training programs will be conducted to ensure coaches and range officers are fully familiar with the new systems.
    
// //     "This investment represents our commitment to providing world-class facilities and equipment to our athletes," stated the NSSF Technical Director. "Modern equipment not only improves training quality but also helps athletes transition more easily to international competitions where similar systems are standard."
    
// //     The initiative is expected to significantly enhance training quality and help Sri Lankan athletes achieve better international competitiveness.`,
// //     date: "February 8, 2026",
// //     author: "Technical Department",
// //     image: "/gallery/news-6.jpg",
// //     category: "Technology"
// //   }
// // ];

export default function NewsPage() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    fetch('/api/news')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setNewsItems(data.slice(0, 6));
      })
      .catch(() => {});
  }, []);

  if (newsItems.length === 0) return null;

  const categories = ["All", "Championships", "Facilities", "Youth Programs", "Training", "International", "Technology"];

  const filteredNews = newsItems.filter(news => {
    const matchesSearch =
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || news.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <PageHero
        title="Latest News"
        subtitle="News & Updates"
        description="Stay informed with the latest news, announcements, and developments from the National Shooting Sports Federation of Sri Lanka."
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <div className="mb-12 bg-gray-50 rounded-xl p-6">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
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

              {/* Categories */}
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

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((news) =>
              (() => {
                const hasImage = Boolean(news.imageUrl) && !failedImages[news._id];
                return (
                  <article
                    key={news._id}
                    className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_12px_30px_rgba(2,6,23,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(2,6,23,0.22)]"
                  >
                    <div className="relative h-56 p-2">
                      <div
                        className="relative h-full w-full rounded-2xl border-4 border-white overflow-hidden"
                        style={{
                          background: `linear-gradient(145deg, ${colors.primary.navy} 0%, ${colors.primary.blue} 100%)`,
                        }}
                      >
                        {hasImage ? (
                          <img
                            src={news.imageUrl}
                            alt={news.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            onError={() =>
                              setFailedImages((prev) => ({
                                ...prev,
                                [news._id]: true,
                              }))
                            }
                          />
                        ) : null}

                        {!hasImage && (
                          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white_0%,transparent_45%),radial-gradient(circle_at_80%_70%,white_0%,transparent_35%)]" />
                        )}

                        {!hasImage && (
                          <div className="relative z-10 h-full flex items-center justify-center px-4 text-center">
                            <span className="text-white text-sm font-semibold px-3 py-1 bg-black/30 rounded-full">
                              {news.category}
                            </span>
                          </div>
                        )}

                        <span
                          className="absolute top-5 right-5 rounded-full px-3 py-1 text-[11px] font-bold tracking-wide uppercase"
                          style={{ backgroundColor: "#FFD100", color: "#002B7F" }}
                        >
                          {news.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-4 flex flex-col gap-3">
                      <h3 className="min-h-6 text-base md:text-lg font-sans font-extrabold leading-tight line-clamp-2 transition-colors text-[#002B7F]">
                        {news.title}
                      </h3>

                      <div className="flex items-center justify-between gap-2 text-[11px] text-slate-600 font-sans">
                        <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 font-semibold">
                          <FaCalendar className="text-xs" />
                          <span>{news.date}</span>
                        </div>
                        <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 font-semibold">
                          <FaUser className="text-xs" />
                          <span>{news.author}</span>
                        </div>
                      </div>

                      <p className="text-slate-600 text-xs md:text-sm leading-6 line-clamp-2 font-sans">
                        {compactSummary(news.excerpt)}
                      </p>

                      <Link
                        href={`/news/${news._id}`}
                        className="mt-1 w-full rounded-xl py-2.5 text-sm font-bold tracking-wide transition-all duration-300 hover:brightness-95 hover:shadow-md active:scale-[0.99] inline-flex items-center justify-center gap-2"
                        style={{ backgroundColor: "#FFD100", color: "#002B7F" }}
                      >
                        Read More
                        <FaArrowRight className="text-xs" />
                      </Link>
                    </div>
                  </article>
                );
              })()
            )}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-12">
              <p className="font-sans text-gray-500 text-lg">
                No news found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}