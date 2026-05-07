import { colors } from "@/config";
import { IMAGES } from "@/config/images";
import Link from "next/link";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaTrophy } from "react-icons/fa";
import ModernSectionHeader from "../components/ModernSectionHeader";
import PageHero from "../components/PageHero";

export default function Events() {
  const upcomingEvents = [
    {
      id: "championship-2025",
      title: "National Shooting Championship 2025",
      date: "March 15-17, 2025",
      time: "8:00 AM - 6:00 PM",
      location: "NSSF National Range, Colombo",
      category: "National Championship",
      disciplines: ["Pistol", "Rifle", "Shotgun"],
      registrationDeadline: "February 28, 2025",
      entryFee: "LKR 15,000",
      description: "The premier annual shooting competition featuring all major Olympic disciplines. Open to all licensed shooters nationwide.",
      image: IMAGES.HERO_GOLF_1,
      status: "Registration Open"
    },
    {
      id: "youth-development",
      title: "Youth Development Championship",
      date: "April 5-7, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "NSSF Training Range, Kandy",
      category: "Youth Competition",
      disciplines: ["Air Pistol", "Air Rifle"],
      registrationDeadline: "March 20, 2025",
      entryFee: "LKR 8,000",
      description: "Specialized competition for young shooters under 21. Focus on skill development and competition experience with expert coaching.",
      image: IMAGES.HERO_GOLF_2,
      status: "Registration Open"
    },
    {
      id: "precision-challenge",
      title: "Sri Lanka Precision Challenge",
      date: "May 10-12, 2025",
      time: "7:30 AM - 5:30 PM",
      location: "Elite Range, Galle",
      category: "Elite Competition",
      disciplines: ["50m Rifle", "25m Pistol"],
      registrationDeadline: "April 25, 2025",
      entryFee: "LKR 12,000",
      description: "High-precision competition for advanced shooters. Olympic qualification standards and international ranking points available.",
      image: IMAGES.HERO_GOLF_3,
      status: "Registration Opens Soon"
    },
    {
      id: "international-meet",
      title: "Asian Championship Qualifier",
      date: "June 20-23, 2025",
      time: "8:00 AM - 5:00 PM",
      location: "NSSF International Range, Colombo",
      category: "International Qualifier",
      disciplines: ["10m Air Rifle", "10m Air Pistol", "50m Rifle 3 Positions"],
      registrationDeadline: "June 5, 2025",
      entryFee: "LKR 18,000",
      description: "Official qualifier for Asian Shooting Championships. Minimum Qualification Score (MQS) required for entry.",
      image: IMAGES.HERO_GOLF_1,
      status: "Upcoming"
    }
  ];

  const pastEvents = [
    {
      id: "winter-championship-2024",
      title: "National Winter Championship 2024",
      date: "December 8-10, 2024",
      winner: "Samantha Rodrigo",
      discipline: "10m Air Rifle Women",
      score: "589.7",
      participants: 156
    },
    {
      id: "olympic-qualifier-2024",
      title: "Olympic Qualification Round 2024",
      date: "September 15-17, 2024",
      winner: "Kamal Jayasinghe",
      discipline: "50m Pistol Men",
      score: "578.3",
      participants: 89
    },
    {
      id: "inter-club-2024",
      title: "Inter-Club National Championship 2024",
      date: "July 20-22, 2024",
      winner: "Colombo Shooting Club",
      discipline: "Team Event",
      score: "1,745 points",
      participants: 17
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <PageHero
        title="Competitions & Events"
        subtitle="Join Our Championships"
        description="Join Sri Lanka's premier shooting sports competitions and championship events"
      />

      {/* Upcoming Events Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <ModernSectionHeader
            className="mb-12"
            subtitle="2025 Calendar"
            title="Upcoming Championships"
            description="Join our upcoming competitions and test your skills against Sri Lanka's finest marksmen"
          />

          <div className="grid gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white border border-gray-200 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="md:flex">
                  {/* Event Image */}
                  <div className="md:w-1/3 relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                    <span 
                      className={`absolute top-4 left-4 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full shadow-lg ${
                        event.status === 'Registration Open' ? 'bg-[#002B7F] text-white' : 'bg-[#FFD100] text-[#002B7F]'
                      }`}
                    >
                      {event.status}
                    </span>
                  </div>

                  {/* Event Details */}
                  <div className="md:w-2/3 p-8">
                    <div className="flex flex-wrap items-start justify-between mb-4">
                      <div className="flex-1">
                        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-3 rounded-full" 
                              style={{ backgroundColor: colors.primary.yellow, color: colors.primary.navy }}>
                          {event.category}
                        </span>
                        <h3 className="font-sans text-2xl md:text-3xl font-semibold mb-2" style={{ color: colors.primary.navy }}>
                          {event.title}
                        </h3>
                      </div>
                      <div className="text-right bg-gray-50 px-4 py-3 rounded-lg">
                        <p className="font-sans text-2xl font-bold" style={{ color: colors.primary.blue }}>{event.entryFee}</p>
                        <p className="font-sans text-sm text-gray-600">Entry Fee</p>
                      </div>
                    </div>

                    <p className="font-sans text-gray-600 mb-6 leading-relaxed">{event.description}</p>

                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-start gap-3">
                        <FaCalendarAlt className="text-xl mt-1" style={{ color: colors.primary.navy }} />
                        <div>
                          <p className="font-sans text-sm font-semibold text-gray-700">Date & Time</p>
                          <p className="font-sans text-gray-600">{event.date}</p>
                          <p className="font-sans text-gray-500 text-sm">{event.time}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaMapMarkerAlt className="text-xl mt-1" style={{ color: colors.primary.blue }} />
                        <div>
                          <p className="font-sans text-sm font-semibold text-gray-700">Location</p>
                          <p className="font-sans text-gray-600">{event.location}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaTrophy className="text-xl mt-1" style={{ color: colors.primary.yellow }} />
                        <div>
                          <p className="font-sans text-sm font-semibold text-gray-700">Disciplines</p>
                          <p className="font-sans text-gray-600">{event.disciplines.join(", ")}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaClock className="text-xl mt-1" style={{ color: colors.primary.blue }} />
                        <div>
                          <p className="font-sans text-sm font-semibold text-gray-700">Registration Deadline</p>
                          <p className="font-sans text-gray-600">{event.registrationDeadline}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href="/contact"
                        className="font-sans px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 hover:shadow-lg text-center"
                        style={{ backgroundColor: colors.primary.navy }}
                      >
                        Register Now
                      </Link>
                      <Link
                        href="/contact"
                        className="font-sans px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg border-2 text-center"
                        style={{ borderColor: colors.primary.navy, color: colors.primary.navy }}
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

