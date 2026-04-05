import { colors } from "@/config";
import Link from "next/link";
import { FaArrowLeft, FaCalendar, FaMapMarkerAlt } from "react-icons/fa";

interface CompetitionResult {
  id: string;
  competition: string;
  date: string;
  location: string;
  category: string;
  discipline: string;
  winners: {
    gold: string;
    goldScore: string;
    silver: string;
    silverScore: string;
    bronze: string;
    bronzeScore: string;
  };
  participants: number;
}

export default function ResultsPage() {
  const results: CompetitionResult[] = [
    {
      id: "1",
      competition: "NSSF-SL Open Rifle Championship 2026",
      date: "February 18, 2026",
      location: "NSSF Range, Kohuwala",
      category: "Rifle",
      discipline: "10m Air Rifle Men",
      winners: {
        gold: "Sanjeewa Kumara",
        goldScore: "633.2",
        silver: "Prasad Fernando",
        silverScore: "628.5",
        bronze: "Kasun Jayasinghe",
        bronzeScore: "625.1"
      },
      participants: 45
    },
    {
      id: "2",
      competition: "National Pistol Championship 2026",
      date: "February 10, 2026",
      location: "Colombo Rifle Club",
      category: "Pistol",
      discipline: "10m Air Pistol Women",
      winners: {
        gold: "Nadeeka Perera",
        goldScore: "591.8",
        silver: "Dilani Silva",
        silverScore: "587.3",
        bronze: "Chamari Wickramasinghe",
        bronzeScore: "582.9"
      },
      participants: 32
    },
    {
      id: "3",
      competition: "Sri Lanka Open Trap Shooting",
      date: "January 28, 2026",
      location: "CTSCC Range, Payagala",
      category: "Shotgun",
      discipline: "Trap Men",
      winners: {
        gold: "Ravi Silva",
        goldScore: "124/125",
        silver: "Mahesh Gunasekara",
        silverScore: "122/125",
        bronze: "Nuwan Perera",
        bronzeScore: "121/125"
      },
      participants: 38
    },
    {
      id: "4",
      competition: "National Games 2025 - Rifle Events",
      date: "December 15, 2025",
      location: "National Range, Ratmalana",
      category: "Rifle",
      discipline: "50m Rifle 3 Positions Men",
      winners: {
        gold: "Chaminda Rajapakse",
        goldScore: "1178",
        silver: "Sanjeewa Kumara",
        silverScore: "1165",
        bronze: "Anil Wijesinghe",
        bronzeScore: "1158"
      },
      participants: 28
    },
    {
      id: "5",
      competition: "Women's Shooting Championship 2025",
      date: "November 20, 2025",
      location: "NSSF Range, Kohuwala",
      category: "Pistol",
      discipline: "25m Pistol Women",
      winners: {
        gold: "Dilani Silva",
        goldScore: "587",
        silver: "Nadeeka Perera",
        silverScore: "582",
        bronze: "Tharani Fernando",
        bronzeScore: "578"
      },
      participants: 24
    },
    {
      id: "6",
      competition: "NSSF Skeet Championship 2025",
      date: "October 8, 2025",
      location: "CTSCC Range, Payagala",
      category: "Shotgun",
      discipline: "Skeet Men",
      winners: {
        gold: "Mahesh Gunasekara",
        goldScore: "123/125",
        silver: "Ravi Silva",
        silverScore: "122/125",
        bronze: "Chaminda Perera",
        bronzeScore: "120/125"
      },
      participants: 35
    },
    {
      id: "7",
      competition: "Junior National Championship 2025",
      date: "September 25, 2025",
      location: "NSSF Range, Kohuwala",
      category: "Rifle",
      discipline: "10m Air Rifle Junior",
      winners: {
        gold: "Sahan Wijesinghe",
        goldScore: "627.3",
        silver: "Nimesh Silva",
        silverScore: "622.8",
        bronze: "Kavinda Fernando",
        bronzeScore: "619.5"
      },
      participants: 52
    },
    {
      id: "8",
      competition: "Inter-Club Championship 2025",
      date: "August 12, 2025",
      location: "Various Locations",
      category: "Mixed",
      discipline: "Team Event",
      winners: {
        gold: "Colombo Rifle Club",
        goldScore: "2456",
        silver: "Negombo Rifle Club",
        silverScore: "2438",
        bronze: "Kandy Shooting Club",
        bronzeScore: "2425"
      },
      participants: 17
    },
    {
      id: "9",
      competition: "South Asian Shooting Championship",
      date: "July 5, 2025",
      location: "New Delhi, India",
      category: "International",
      discipline: "10m Air Pistol Men",
      winners: {
        gold: "Kasun Jayasinghe (SL)",
        goldScore: "588.4",
        silver: "Rahul Sharma (IND)",
        silverScore: "586.2",
        bronze: "Ahmed Khan (PAK)",
        bronzeScore: "583.7"
      },
      participants: 68
    },
    {
      id: "10",
      competition: "Youth Olympic Qualifier 2025",
      date: "June 18, 2025",
      location: "Bangkok, Thailand",
      category: "Youth",
      discipline: "10m Air Rifle Youth",
      winners: {
        gold: "Sahan Wijesinghe (SL)",
        goldScore: "625.8",
        silver: "Li Wei (CHN)",
        silverScore: "624.3",
        bronze: "Kim Min-ji (KOR)",
        bronzeScore: "622.1"
      },
      participants: 85
    },
    {
      id: "11",
      competition: "Commonwealth Shooting Trials",
      date: "May 22, 2025",
      location: "Sydney, Australia",
      category: "International",
      discipline: "50m Pistol Men",
      winners: {
        gold: "James Wilson (AUS)",
        goldScore: "572",
        silver: "Prasad Fernando (SL)",
        silverScore: "564",
        bronze: "David Smith (CAN)",
        bronzeScore: "559"
      },
      participants: 42
    },
    {
      id: "12",
      competition: "Asian Championship Qualification",
      date: "April 10, 2025",
      location: "Kuala Lumpur, Malaysia",
      category: "International",
      discipline: "Trap Mixed Team",
      winners: {
        gold: "India Team",
        goldScore: "242/250",
        silver: "Sri Lanka Team",
        silverScore: "238/250",
        bronze: "Thailand Team",
        bronzeScore: "235/250"
      },
      participants: 14
    }
  ];

  const categories = ["All", "Rifle", "Pistol", "Shotgun", "International"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#D71920] to-[#A01520] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="font-sans inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <FaArrowLeft />
            <span>Back to Home</span>
          </Link>

          <div className="text-center mb-8">
            <div className="flex justify-center gap-2 mb-4">
              <div className="text-5xl">ðŸ¥‡</div>
              <div className="text-5xl">ðŸ¥ˆ</div>
              <div className="text-5xl">ðŸ¥‰</div>
            </div>
            <p className="text-sm font-semibold uppercase tracking-wider mb-2 text-[#FFD100]">
              Results
            </p>
            <h1 className="font-sans text-4xl md:text-5xl font-bold mb-4">
              Competition Results
            </h1>
            <p className="font-sans text-lg text-white/90 max-w-2xl mx-auto">
              Recent championship outcomes and podium finishes from NSSF competitions
            </p>
          </div>
        </div>
      </section>

      {/* Results Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="mb-8 flex justify-center gap-4 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                className="font-sans px-6 py-2 rounded-full font-semibold transition-all duration-200 bg-white text-[#D71920] border-2 border-[#D71920] hover:bg-[#D71920] hover:text-white"
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map((result) => (
              <article
                key={result.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48 bg-gradient-to-br from-[#D71920] to-[#A01520] flex items-center justify-center">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <div className="w-10 h-10 rounded-full bg-[#FFD100] flex items-center justify-center">
                        <span className="text-[#002B7F] font-bold text-lg">ðŸ¥‡</span>
                      </div>
                    </div>
                    <span className="text-white text-sm font-semibold px-3 py-1 bg-black/30 rounded-full">
                      {result.discipline}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-white/90 text-[#D71920] text-xs font-bold px-2 py-1 rounded-full">
                      {result.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-white/90 text-[#002B7F] text-xs font-medium px-2 py-1 rounded-full">
                      {result.participants} Participants
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <FaCalendar className="text-xs" />
                      <span>{result.date}</span>
                    </div>
                  </div>

                  <h3 className="font-sans text-xl font-semibold text-[#002B7F] mb-2 line-clamp-2 group-hover:text-[#001B5F] transition-colors">
                    {result.competition}
                  </h3>

                  <div className="flex items-start gap-1 text-gray-600 text-xs mb-4">
                    <FaMapMarkerAlt className="text-xs mt-0.5 flex-shrink-0" />
                    <span className="font-sans">{result.location}</span>
                  </div>

                  <div className="space-y-2 mb-4 bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-sm font-medium text-gray-600">ðŸ¥‡ Gold:</span>
                      <div className="text-right">
                        <span className="font-sans text-sm font-bold text-[#FFD700] block">{result.winners.gold}</span>
                        <span className="font-sans text-xs text-gray-500">{result.winners.goldScore}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-sm font-medium text-gray-600">ðŸ¥ˆ Silver:</span>
                      <div className="text-right">
                        <span className="font-sans text-sm font-bold text-gray-500 block">{result.winners.silver}</span>
                        <span className="font-sans text-xs text-gray-500">{result.winners.silverScore}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-sm font-medium text-gray-600">ðŸ¥‰ Bronze:</span>
                      <div className="text-right">
                        <span className="font-sans text-sm font-bold text-[#CD7F32] block">{result.winners.bronze}</span>
                        <span className="font-sans text-xs text-gray-500">{result.winners.bronzeScore}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-sans text-3xl font-semibold mb-4" style={{ color: colors.primary.navy }}>
            Want to Compete?
          </h2>
          <p className="font-sans text-lg text-gray-600 mb-8">
            Check out upcoming competitions and register to showcase your skills on the national stage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/events"
              className="font-sans inline-flex items-center justify-center gap-3 bg-[#D71920] hover:bg-[#A01520] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105"
            >
              View Upcoming Events
            </Link>
            <Link
              href="/calendar"
              className="font-sans inline-flex items-center justify-center gap-3 bg-[#002B7F] hover:bg-[#001B5F] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105"
            >
              Competition Calendar
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

