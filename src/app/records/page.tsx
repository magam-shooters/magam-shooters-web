import { colors } from "@/config";
import Link from "next/link";
import { FaArrowLeft, FaTrophy } from "react-icons/fa";

interface Record {
  id: string;
  title: string;
  holder: string;
  score: string;
  date: string;
  location: string;
  category: string;
  discipline: string;
  event: string;
}

export default function RecordsPage() {
  const records: Record[] = [
    {
      id: "1",
      title: "National Record - 10m Air Rifle Men",
      holder: "Sanjeewa Kumara",
      score: "633.2",
      date: "January 15, 2026",
      location: "NSSF Range, Kohuwala",
      category: "Rifle",
      discipline: "10m Air Rifle",
      event: "National Championship 2026"
    },
    {
      id: "2",
      title: "National Record - 10m Air Pistol Women",
      holder: "Nadeeka Perera",
      score: "591.8",
      date: "December 10, 2025",
      location: "Colombo Rifle Club",
      category: "Pistol",
      discipline: "10m Air Pistol",
      event: "NSSF Open Championship 2025"
    },
    {
      id: "3",
      title: "National Record - Trap Men",
      holder: "Ravi Silva",
      score: "124/125",
      date: "November 25, 2025",
      location: "CTSCC Range, Payagala",
      category: "Shotgun",
      discipline: "Trap",
      event: "Sri Lanka Open 2025"
    },
    {
      id: "4",
      title: "National Record - 50m Rifle 3 Positions Men",
      holder: "Chaminda Rajapakse",
      score: "1178",
      date: "October 12, 2025",
      location: "National Range, Ratmalana",
      category: "Rifle",
      discipline: "50m Rifle 3 Positions",
      event: "National Championship 2025"
    },
    {
      id: "5",
      title: "National Record - 25m Pistol Women",
      holder: "Dilani Silva",
      score: "587",
      date: "September 8, 2025",
      location: "NSSF Range, Kohuwala",
      category: "Pistol",
      discipline: "25m Pistol",
      event: "National Games 2025"
    },
    {
      id: "6",
      title: "National Record - Skeet Men",
      holder: "Mahesh Gunasekara",
      score: "123/125",
      date: "August 15, 2025",
      location: "CTSCC Range, Payagala",
      category: "Shotgun",
      discipline: "Skeet",
      event: "NSSF Skeet Championship 2025"
    },
    {
      id: "7",
      title: "National Record - 10m Air Rifle Women",
      holder: "Tharani Fernando",
      score: "631.5",
      date: "July 20, 2025",
      location: "NSSF Range, Kohuwala",
      category: "Rifle",
      discipline: "10m Air Rifle",
      event: "Women's Championship 2025"
    },
    {
      id: "8",
      title: "National Record - 10m Air Pistol Men",
      holder: "Kasun Jayasinghe",
      score: "588.4",
      date: "June 5, 2025",
      location: "Colombo Rifle Club",
      category: "Pistol",
      discipline: "10m Air Pistol",
      event: "National Open 2025"
    },
    {
      id: "9",
      title: "National Record - Double Trap Men",
      holder: "Nuwan Perera",
      score: "142/150",
      date: "May 18, 2025",
      location: "CTSCC Range, Payagala",
      category: "Shotgun",
      discipline: "Double Trap",
      event: "South Asian Championship 2025"
    },
    {
      id: "10",
      title: "Junior National Record - 10m Air Rifle",
      holder: "Sahan Wijesinghe",
      score: "627.3",
      date: "April 22, 2025",
      location: "NSSF Range, Kohuwala",
      category: "Rifle",
      discipline: "10m Air Rifle Junior",
      event: "Junior National Championship 2025"
    },
    {
      id: "11",
      title: "Junior National Record - 10m Air Pistol",
      holder: "Nimesha Samaraweera",
      score: "578.6",
      date: "March 10, 2025",
      location: "Kandy Shooting Range",
      category: "Pistol",
      discipline: "10m Air Pistol Junior",
      event: "Youth Championship 2025"
    },
    {
      id: "12",
      title: "National Record - 50m Pistol Men",
      holder: "Prasad Fernando",
      score: "564",
      date: "February 15, 2025",
      location: "National Range, Ratmalana",
      category: "Pistol",
      discipline: "50m Pistol",
      event: "National Championship 2025"
    }
  ];

  const categories = ["All", "Rifle", "Pistol", "Shotgun"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#FFD100] to-[#E5BC00] text-[#002B7F] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="font-sans inline-flex items-center gap-2 text-[#002B7F]/80 hover:text-[#002B7F] mb-6 transition-colors"
          >
            <FaArrowLeft />
            <span>Back to Home</span>
          </Link>

          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <FaTrophy className="text-6xl" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-wider mb-2 text-[#D71920]">
              Achievements
            </p>
            <h1 className="font-sans text-4xl md:text-5xl font-bold mb-4">
              National Records
            </h1>
            <p className="font-sans text-lg max-w-2xl mx-auto">
              Outstanding achievements and record-breaking performances by Sri Lankan athletes
            </p>
          </div>
        </div>
      </section>

      {/* Records Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter (optional for future enhancement) */}
          <div className="mb-8 flex justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                className="font-sans px-6 py-2 rounded-full font-semibold transition-all duration-200 bg-white text-[#002B7F] border-2 border-[#002B7F] hover:bg-[#002B7F] hover:text-white"
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {records.map((record) => (
              <article
                key={record.id}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border-2 border-[#FFD100]"
              >
                <div className="relative h-48 bg-gradient-to-br from-[#002B7F] to-[#004A9F] flex flex-col items-center justify-center">
                  <FaTrophy className="text-6xl text-[#FFD100] mb-3" />
                  <span className="text-white text-sm font-semibold px-3 py-1 bg-black/30 rounded-full">
                    {record.category}
                  </span>
                  <div className="absolute top-3 right-3">
                    <span className="bg-[#FFD100] text-[#002B7F] text-xs font-bold px-2 py-1 rounded-full">
                      Record
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-sans text-xl font-semibold text-[#002B7F] mb-3 line-clamp-2 group-hover:text-[#001B5F] transition-colors">
                    {record.title}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-sm text-gray-600">Holder:</span>
                      <span className="font-sans text-sm font-bold text-[#002B7F]">{record.holder}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-sm text-gray-600">Score:</span>
                      <span className="font-sans text-2xl font-bold text-[#D71920]">{record.score}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-sm text-gray-600">Event:</span>
                      <span className="font-sans text-xs font-medium text-gray-700">{record.event}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-sm text-gray-600">Date:</span>
                      <span className="font-sans text-sm font-medium text-gray-700">{record.date}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-sm text-gray-600">Location:</span>
                      <span className="font-sans text-xs font-medium text-gray-700">{record.location}</span>
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
            Think You Can Break a Record?
          </h2>
          <p className="font-sans text-lg text-gray-600 mb-8">
            Join our training programs and compete in national championships to set your own records.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/programs"
              className="font-sans inline-flex items-center justify-center gap-3 bg-[#002B7F] hover:bg-[#001B5F] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105"
            >
              View Training Programs
            </Link>
            <Link
              href="/events"
              className="font-sans inline-flex items-center justify-center gap-3 bg-[#FFD100] hover:bg-[#E5BC00] text-[#002B7F] font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105"
            >
              View Upcoming Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

