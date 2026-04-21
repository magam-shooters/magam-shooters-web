import { colors } from "@/config";
import Link from "next/link";
import { FaArrowLeft, FaCalendar, FaMapMarkerAlt, FaMedal } from "react-icons/fa";
import PageHero from "../components/PageHero";

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
      {/* <section className="bg-linear-to-br from-[#002B7F] to-[#004A9F] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="font-sans inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <FaArrowLeft />
            <span>Back to Home</span>
          </Link>

          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#FFD100] ring-4 ring-white/25">
                <FaMedal className="text-3xl text-[#002B7F]" />
              </div>
            </div>
            <p className="text-sm font-semibold uppercase tracking-wider mb-2 text-[#FFD100]">
              Results
            </p>
            <h1 className="font-sans text-4xl md:text-5xl font-bold mb-4 text-[#FFD100]">
              Competition Results
            </h1>
            <p className="font-sans text-lg  max-w-2xl mx-auto text-[#FFD100]">
              Recent championship outcomes and podium finishes from NSSF competitions
            </p>
          </div>
        </div>
      </section> */}

      <PageHero
              title="Competition Results"
              subtitle="Recent Outcomes"
              description="Recent championship outcomes and podium finishes from NSSF competitions"
            />


      {/* Results Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="mb-8 flex justify-center gap-4 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                className="font-sans px-6 py-2 rounded-full font-semibold transition-all duration-200 bg-white text-[#002B7F] border-2 border-[#002B7F] hover:bg-[#002B7F] hover:text-white"
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((result) => (
              <article
                key={result.id}
                className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_12px_30px_rgba(2,6,23,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(2,6,23,0.22)]"
              >
                <div className="relative h-44 p-2">
                  <div
                    className="relative h-full w-full rounded-2xl border-4 border-white overflow-hidden"
                    style={{
                      background: `linear-gradient(145deg, ${colors.primary.navy} 0%, ${colors.primary.blue} 100%)`,
                    }}
                  >
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white_0%,transparent_45%),radial-gradient(circle_at_80%_70%,white_0%,transparent_35%)]" />

                    <div className="relative z-10 h-full flex items-center justify-center">
                      <div className="h-14 w-14 rounded-xl bg-white/90 flex items-center justify-center shadow-lg">
                        <FaMedal className="text-2xl" style={{ color: colors.primary.navy }} />
                      </div>
                    </div>

                    <span
                      className="absolute top-4 right-4 rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wide uppercase"
                      style={{ backgroundColor: colors.primary.yellow, color: colors.primary.navy }}
                    >
                      Results
                    </span>
                  </div>
                </div>

                <div className="p-3.5 flex flex-col gap-2.5 flex-1">
                  <h3 className="min-h-6 text-base font-sans font-extrabold leading-tight line-clamp-2 transition-colors" style={{ color: colors.primary.navy }}>
                    {result.competition}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-slate-600 font-sans">
                    <div className="flex items-center gap-1.5">
                      <FaCalendar className="text-xs" />
                      <span>{result.date}</span>
                    </div>
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold">{result.category}</span>
                  </div>

                  

                  <div className="flex items-start gap-1 text-slate-600 text-xs">
                    <FaMapMarkerAlt className="text-xs mt-0.5 shrink-0" />
                    <span className="font-sans">{result.location}</span>
                  </div>

                  <div className="inline-flex w-fit rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-700 font-sans">
                    {result.participants} Participants
                  </div>

                  <div className="space-y-1 bg-slate-50 p-2 rounded-lg border border-slate-200 font-sans">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-xs font-semibold text-slate-600">Gold</span>
                      <div className="text-right leading-tight">
                        <span className="text-xs font-bold block" style={{ color: colors.primary.navy }}>{result.winners.gold}</span>
                        <span className="text-[10px] text-slate-500">{result.winners.goldScore}</span>
                      </div>
                    </div>
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-xs font-semibold text-slate-600">Silver</span>
                      <div className="text-right leading-tight">
                        <span className="text-xs font-bold block" style={{ color: colors.primary.navy }}>{result.winners.silver}</span>
                        <span className="text-[10px] text-slate-500">{result.winners.silverScore}</span>
                      </div>
                    </div>
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-xs font-semibold text-slate-600">Bronze</span>
                      <div className="text-right leading-tight">
                        <span className="text-xs font-bold block" style={{ color: colors.primary.navy }}>{result.winners.bronze}</span>
                        <span className="text-[10px] text-slate-500">{result.winners.bronzeScore}</span>
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
              className="font-sans inline-flex items-center justify-center gap-3 bg-[#FFD100] hover:bg-[#E6BC00] text-[#002B7F] font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105"
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

