import { colors } from "@/config";
import Link from "next/link";
import { FaArrowRight, FaCalendar, FaMapMarkerAlt } from "react-icons/fa";

interface CompetitionResult {
  id: string;
  competition: string;
  date: string;
  location: string;
  category: string;
  winners: {
    gold: string;
    silver: string;
    bronze: string;
  };
}

const CompetitionResults = () => {
  // Sample competition results data
  const results: CompetitionResult[] = [
    {
      id: "1",
      competition: "NSSF-SL Open Rifle Championship 2026",
      date: "February 18, 2026",
      location: "NSSF Range, Kohuwala",
      category: "10m Air Rifle",
      winners: {
        gold: "Sanjeewa Kumara",
        silver: "Prasad Fernando",
        bronze: "Kasun Jayasinghe"
      }
    },
    {
      id: "2",
      competition: "National Pistol Championship 2026",
      date: "February 10, 2026",
      location: "Colombo Rifle Club",
      category: "10m Air Pistol",
      winners: {
        gold: "Nadeeka Perera",
        silver: "Dilani Silva",
        bronze: "Chamari Wickramasinghe"
      }
    },
    {
      id: "3",
      competition: "Sri Lanka Open Trap Shooting",
      date: "January 28, 2026",
      location: "CTSCC Range, Payagala",
      category: "Trap",
      winners: {
        gold: "Ravi Silva",
        silver: "Mahesh Gunasekara",
        bronze: "Nuwan Perera"
      }
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-montserrat font-semibold uppercase tracking-wider mb-2" style={{ color: colors.primary.blue }}>
            Results
          </p>
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4" style={{ color: colors.primary.navy }}>
            Latest Competition Results
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            Recent championship outcomes and podium finishes from NSSF competitions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {results.map((result) => (
            <article
              key={result.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 bg-gradient-to-br from-[#00AEEF] to-[#0088CC] flex items-center justify-center">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="w-10 h-10 rounded-full bg-[#FFD100] flex items-center justify-center">
                      <span className="text-[#002B7F] font-bold text-lg">🥇</span>
                    </div>
                  </div>
                  <span className="text-white text-sm font-semibold px-3 py-1 bg-black/30 rounded-full">
                    {result.category}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-white/90 text-[#00AEEF] text-xs font-bold px-2 py-1 rounded-full">
                    Results
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3 font-sans">
                  <div className="flex items-center gap-1">
                    <FaCalendar className="text-xs" />
                    <span>{result.date}</span>
                  </div>
                </div>

                <h3 className="text-xl font-montserrat font-bold text-[#002B7F] mb-2 line-clamp-2 group-hover:text-[#001B5F] transition-colors">
                  {result.competition}
                </h3>

                <div className="flex items-start gap-1 text-gray-600 text-xs mb-4 font-sans">
                  <FaMapMarkerAlt className="text-xs mt-0.5 flex-shrink-0" />
                  <span>{result.location}</span>
                </div>
                
                <div className="space-y-2 mb-4 bg-gray-50 p-3 rounded-lg font-sans">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">🥇 Gold:</span>
                    <span className="text-sm font-montserrat font-bold text-[#FFD100]">{result.winners.gold}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">🥈 Silver:</span>
                    <span className="text-sm font-montserrat font-bold text-gray-500">{result.winners.silver}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">🥉 Bronze:</span>
                    <span className="text-sm font-montserrat font-bold text-[#CD7F32]">{result.winners.bronze}</span>
                  </div>
                </div>
                
                <Link
                  href={`/results/${result.id}`}
                  className="inline-flex items-center gap-2 text-[#002B7F] hover:text-[#001B5F] font-montserrat font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                >
                  Full Results
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/results"
            className="inline-flex items-center gap-3 bg-[#00AEEF] hover:bg-[#0088CC] text-white font-montserrat font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105"
          >
            View All Results
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CompetitionResults;
