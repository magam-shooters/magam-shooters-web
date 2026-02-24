import Link from "next/link";
import { FaArrowRight, FaCalendar, FaUser } from "react-icons/fa";
import ModernSectionHeader from "./ModernSectionHeader";

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

const NewsSection = () => {
  // Sample news data - this would typically come from a CMS or API
  const newsItems: NewsItem[] = [
    {
      id: "1",
      title: "NSSF Announces National Championship Results",
      excerpt: "Outstanding performance by Sri Lankan athletes at the 2026 National Shooting Championship with record-breaking scores.",
      date: "February 20, 2026",
      author: "NSSF Media Team",
      image: "/gallery/news-1.jpg",
      category: "Championships"
    },
    {
      id: "2", 
      title: "New Training Facility Opens in Kandy",
      excerpt: "State-of-the-art shooting range with Olympic-standard facilities now open for athletes across the Central Province.",
      date: "February 18, 2026",
      author: "NSSF Development",
      image: "/gallery/news-2.jpg",
      category: "Facilities"
    },
    {
      id: "3",
      title: "Youth Development Program Expansion",
      excerpt: "NSSF launches comprehensive youth program across 15 schools to identify and nurture young shooting talent.",
      date: "February 15, 2026",
      author: "Youth Development Team",
      image: "/gallery/news-3.jpg",
      category: "Youth Programs"
    },
    {
      id: "4",
      title: "International Coach Workshop Series",
      excerpt: "World-renowned coaches to conduct technical workshops for Sri Lankan trainers and athletes this March.",
      date: "February 12, 2026",
      author: "Technical Committee",
      image: "/gallery/news-4.jpg",
      category: "Training"
    },
    {
      id: "5",
      title: "Asian Games Qualification Update",
      excerpt: "Five Sri Lankan shooters secure qualification spots for the upcoming Asian Games following excellent performances.",
      date: "February 10, 2026",
      author: "Selection Committee",
      image: "/gallery/news-5.jpg",
      category: "International"
    },
    {
      id: "6",
      title: "Equipment Modernization Initiative",
      excerpt: "NSSF invests in cutting-edge electronic scoring systems and training equipment across all affiliated clubs.",
      date: "February 8, 2026",
      author: "Technical Department",
      image: "/gallery/news-6.jpg",
      category: "Technology"
    }
  ];

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
              key={news.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[#002B7F] to-[#004A9F] flex items-center justify-center">
                  <span className="text-white text-sm font-semibold px-3 py-1 bg-black/30 rounded-full">
                    {news.category}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-white/90 text-[#002B7F] text-xs font-bold px-2 py-1 rounded-full">
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
                
                <h3 className="text-xl font-montserrat font-bold text-[#002B7F] mb-3 line-clamp-2 group-hover:text-[#001B5F] transition-colors">
                  {news.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 font-sans">
                  {news.excerpt}
                </p>
                
                <Link
                  href={`/news/${news.id}`}
                  className="inline-flex items-center gap-2 text-[#002B7F] hover:text-[#001B5F] font-montserrat font-semibold text-sm group-hover:gap-3 transition-all duration-300"
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
            className="inline-flex items-center gap-3 bg-[#002B7F] hover:bg-[#001B5F] text-white font-montserrat font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105"
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