import { colors } from "@/config";
import { IMAGES } from "@/config/images";
import Link from "next/link";
import { FaAward, FaCalendarAlt, FaCheckCircle, FaClock, FaMapMarkerAlt, FaMedal, FaShieldAlt, FaTrophy, FaUsers } from "react-icons/fa";
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
        description="Join Sri Lanka's premier shooting sports competitions and championship events"
      />

      {/* Upcoming Events Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: colors.primary.red }}>
              2025 Calendar
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.primary.navy }}>
              Upcoming Championships
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our upcoming competitions and test your skills against Sri Lanka's finest marksmen
            </p>
          </div>

          <div className="grid gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
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
                        event.status === 'Registration Open' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'
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
                        <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: colors.primary.navy }}>
                          {event.title}
                        </h3>
                      </div>
                      <div className="text-right bg-gray-50 px-4 py-3 rounded-lg">
                        <p className="text-2xl font-bold" style={{ color: colors.primary.red }}>{event.entryFee}</p>
                        <p className="text-sm text-gray-600">Entry Fee</p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">{event.description}</p>

                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-start gap-3">
                        <FaCalendarAlt className="text-xl mt-1" style={{ color: colors.primary.navy }} />
                        <div>
                          <p className="text-sm font-semibold text-gray-700">Date & Time</p>
                          <p className="text-gray-600">{event.date}</p>
                          <p className="text-gray-500 text-sm">{event.time}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaMapMarkerAlt className="text-xl mt-1" style={{ color: colors.primary.red }} />
                        <div>
                          <p className="text-sm font-semibold text-gray-700">Location</p>
                          <p className="text-gray-600">{event.location}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaTrophy className="text-xl mt-1" style={{ color: colors.primary.yellow }} />
                        <div>
                          <p className="text-sm font-semibold text-gray-700">Disciplines</p>
                          <p className="text-gray-600">{event.disciplines.join(", ")}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaClock className="text-xl mt-1" style={{ color: colors.primary.blue }} />
                        <div>
                          <p className="text-sm font-semibold text-gray-700">Registration Deadline</p>
                          <p className="text-gray-600">{event.registrationDeadline}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href="/contact"
                        className="px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 hover:shadow-lg text-center"
                        style={{ backgroundColor: colors.primary.navy }}
                      >
                        Register Now
                      </Link>
                      <Link
                        href="/contact"
                        className="px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg border-2 text-center"
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

      {/* Event Categories Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: colors.primary.red }}>
              Competition Types
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.primary.navy }}>
              Event Categories
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* National Championships */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: colors.primary.yellow }}>
                <FaTrophy className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: colors.primary.navy }}>National Championships</h3>
              <p className="text-gray-600 mb-4">Premier competitions featuring all Olympic disciplines with national ranking points.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2"><FaCheckCircle style={{ color: colors.primary.green }} /> 10m Air Rifle/Pistol</li>
                <li className="flex items-center gap-2"><FaCheckCircle style={{ color: colors.primary.green }} /> 50m Rifle/Pistol</li>
                <li className="flex items-center gap-2"><FaCheckCircle style={{ color: colors.primary.green }} /> 25m Pistol</li>
                <li className="flex items-center gap-2"><FaCheckCircle style={{ color: colors.primary.green }} /> Shotgun Events</li>
              </ul>
            </div>

            {/* Youth Development */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: colors.primary.blue }}>
                <FaUsers className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: colors.primary.navy }}>Youth Development</h3>
              <p className="text-gray-600 mb-4">Specialized competitions for young shooters under 21 years old.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2"><FaCheckCircle style={{ color: colors.primary.green }} /> Junior Categories</li>
                <li className="flex items-center gap-2"><FaCheckCircle style={{ color: colors.primary.green }} /> Coaching Clinics</li>
                <li className="flex items-center gap-2"><FaCheckCircle style={{ color: colors.primary.green }} /> Skills Development</li>
                <li className="flex items-center gap-2"><FaCheckCircle style={{ color: colors.primary.green }} /> Mentorship Programs</li>
              </ul>
            </div>

            {/* Club Competitions */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: colors.primary.red }}>
                <FaMedal className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: colors.primary.navy }}>Club Competitions</h3>
              <p className="text-gray-600 mb-4">Inter-club matches and team events fostering community spirit.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2"><FaCheckCircle style={{ color: colors.primary.green }} /> Team Championships</li>
                <li className="flex items-center gap-2"><FaCheckCircle style={{ color: colors.primary.green }} /> Monthly Club Matches</li>
                <li className="flex items-center gap-2"><FaCheckCircle style={{ color: colors.primary.green }} /> Fun Shooting Events</li>
                <li className="flex items-center gap-2"><FaCheckCircle style={{ color: colors.primary.green }} /> Member Tournaments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events & Results */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: colors.primary.red }}>
              2024 Champions
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.primary.navy }}>
              Recent Results
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center gap-2 mb-4">
                  <FaAward className="text-2xl" style={{ color: colors.primary.yellow }} />
                  <h3 className="text-lg font-bold" style={{ color: colors.primary.navy }}>{event.title}</h3>
                </div>
                <p className="text-sm font-semibold mb-4" style={{ color: colors.primary.blue }}>{event.date}</p>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="text-gray-600">Winner:</span>
                    <span className="font-bold" style={{ color: colors.primary.navy }}>{event.winner}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="text-gray-600">Discipline:</span>
                    <span className="text-gray-900">{event.discipline}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="text-gray-600">Score:</span>
                    <span className="font-bold" style={{ color: colors.primary.red }}>{event.score}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Participants:</span>
                    <span className="font-semibold text-gray-900">{event.participants}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Rules & Guidelines */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: colors.primary.red }}>
              Important Information
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.primary.navy }}>
              Competition Guidelines
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: colors.primary.navy }}>
                  <FaCheckCircle className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold" style={{ color: colors.primary.navy }}>Eligibility Requirements</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2"><span style={{ color: colors.primary.red }}>•</span> Valid shooting license</li>
                <li className="flex items-start gap-2"><span style={{ color: colors.primary.red }}>•</span> Current NSSF membership</li>
                <li className="flex items-start gap-2"><span style={{ color: colors.primary.red }}>•</span> Age verification for youth categories</li>
                <li className="flex items-start gap-2"><span style={{ color: colors.primary.red }}>•</span> Medical clearance certificate</li>
                <li className="flex items-start gap-2"><span style={{ color: colors.primary.red }}>•</span> Equipment safety inspection</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: colors.primary.blue }}>
                  <FaCalendarAlt className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold" style={{ color: colors.primary.navy }}>Registration Process</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2"><span style={{ color: colors.primary.red }}>•</span> Complete online registration form</li>
                <li className="flex items-start gap-2"><span style={{ color: colors.primary.red }}>•</span> Submit required documents</li>
                <li className="flex items-start gap-2"><span style={{ color: colors.primary.red }}>•</span> Pay entry fees before deadline</li>
                <li className="flex items-start gap-2"><span style={{ color: colors.primary.red }}>•</span> Attend mandatory briefing</li>
                <li className="flex items-start gap-2"><span style={{ color: colors.primary.red }}>•</span> Equipment check-in on event day</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: colors.primary.red }}>
                  <FaShieldAlt className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold" style={{ color: colors.primary.navy }}>Safety Protocols</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2"><span style={{ color: colors.primary.red }}>•</span> Mandatory safety briefing</li>
                <li className="flex items-start gap-2"><span style={{ color: colors.primary.red }}>•</span> Certified range officer supervision</li>
                <li className="flex items-start gap-2"><span style={{ color: colors.primary.red }}>•</span> Personal protective equipment required</li>
                <li className="flex items-start gap-2"><span style={{ color: colors.primary.red }}>•</span> Zero tolerance for safety violations</li>
                <li className="flex items-start gap-2"><span style={{ color: colors.primary.red }}>•</span> Emergency medical support on-site</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: colors.primary.yellow }}>
                  <FaTrophy className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold" style={{ color: colors.primary.navy }}>Awards & Recognition</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2"><span style={{ color: colors.primary.red }}>•</span> Medals for top 3 in each category</li>
                <li className="flex items-start gap-2"><span style={{ color: colors.primary.red }}>•</span> Trophies for overall champions</li>
                <li className="flex items-start gap-2"><span style={{ color: colors.primary.red }}>•</span> National ranking points</li>
                <li className="flex items-start gap-2"><span style={{ color: colors.primary.red }}>•</span> Certificates for all participants</li>
                <li className="flex items-start gap-2"><span style={{ color: colors.primary.red }}>•</span> Special recognition awards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Compete?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our upcoming competitions and experience the thrill of precision shooting sports with NSSF Sri Lanka.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-lg font-semibold text-white transition-all duration-200 hover:shadow-lg text-lg"
              style={{ backgroundColor: colors.primary.red }}
            >
              Register for Events
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}