import { IMAGES } from "@/config/images";
import Link from "next/link";
import CTASection from "../components/CTASection";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";

export default function Events() {
  const upcomingEvents = [
    {
      id: "championship-2025",
      title: "Magam Shooters Championship 2025",
      date: "March 15-17, 2025",
      time: "8:00 AM - 6:00 PM",
      location: "Main Shooting Range, Colombo",
      category: "National Championship",
      disciplines: ["Pistol", "Rifle", "Shotgun"],
      registrationDeadline: "February 28, 2025",
      entryFee: "LKR 15,000",
      description: "The premier annual shooting competition featuring all major disciplines. Open to all licensed shooters.",
      image: IMAGES.HERO_GOLF_1,
      status: "Registration Open"
    },
    {
      id: "youth-development",
      title: "Youth Development Series",
      date: "April 5-7, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "Training Range, Kandy",
      category: "Youth Competition",
      disciplines: ["Air Pistol", "Air Rifle"],
      registrationDeadline: "March 20, 2025",
      entryFee: "LKR 8,000",
      description: "Specialized competition for young shooters under 21. Focus on skill development and competition experience.",
      image: IMAGES.HERO_GOLF_2,
      status: "Registration Open"
    },
    {
      id: "precision-challenge",
      title: "Precision Challenge Cup",
      date: "May 10-12, 2025",
      time: "7:30 AM - 5:30 PM",
      location: "Elite Range, Galle",
      category: "Elite Competition",
      disciplines: ["50m Rifle", "25m Pistol"],
      registrationDeadline: "April 25, 2025",
      entryFee: "LKR 12,000",
      description: "High-precision competition for advanced shooters. Qualification required based on previous scores.",
      image: IMAGES.HERO_GOLF_3,
      status: "Registration Opens Soon"
    }
  ];

  const pastEvents = [
    {
      id: "winter-championship-2024",
      title: "Winter Championship 2024",
      date: "December 8-10, 2024",
      winner: "Samantha Rodrigo",
      discipline: "Air Rifle",
      score: "589.7",
      participants: 156
    },
    {
      id: "olympic-qualifier-2024",
      title: "Olympic Qualifier 2024",
      date: "September 15-17, 2024",
      winner: "Kamal Jayasinghe",
      discipline: "50m Pistol",
      score: "578.3",
      participants: 89
    },
    {
      id: "inter-club-2024",
      title: "Inter-Club Championship 2024",
      date: "July 20-22, 2024",
      winner: "Magam Shooters Team A",
      discipline: "Team Event",
      score: "1,745 points",
      participants: 24
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <PageHero
        title="Events"
        description="Discover upcoming competitions and past achievements in the world of precision shooting"
      />

      {/* Upcoming Events Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Upcoming Events"
            subtitle="2025 Competition Calendar"
            description="Join our upcoming competitions and test your skills against Sri Lanka's finest marksmen"
          />

          <div className="grid gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition duration-300 overflow-hidden">
                <div className="md:flex">
                  {/* Event Image */}
                  <div className="md:w-1/3">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>

                  {/* Event Details */}
                  <div className="md:w-2/3 p-6 md:p-8">
                    <div className="flex flex-wrap items-start justify-between mb-4">
                      <div>
                        <span className={`inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-3 ${
                          event.status === 'Registration Open' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {event.status}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{event.title}</h3>
                        <p className="text-[#00AEEF] font-semibold text-sm uppercase tracking-widest">{event.category}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-[#00AEEF]">{event.entryFee}</p>
                        <p className="text-sm text-gray-600">Entry Fee</p>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-1">📅 Date & Time</p>
                        <p className="text-gray-600">{event.date}</p>
                        <p className="text-gray-600 text-sm">{event.time}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-1">📍 Location</p>
                        <p className="text-gray-600">{event.location}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-1">🎯 Disciplines</p>
                        <p className="text-gray-600">{event.disciplines.join(", ")}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-1">⏰ Registration Deadline</p>
                        <p className="text-gray-600">{event.registrationDeadline}</p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6">{event.description}</p>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href="/contact"
                        className="bg-[#00AEEF] hover:bg-[#0096C7] text-white font-bold py-2 px-6 transition duration-300 text-center"
                      >
                        Register Now
                      </Link>
                      <Link
                        href="/contact"
                        className="border border-[#00AEEF] text-[#00AEEF] hover:bg-[#00AEEF] hover:text-white font-bold py-2 px-6 transition duration-300 text-center"
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
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Event Categories"
            subtitle="Competition Types"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {/* National Championships */}
            <div className="bg-white p-8 shadow-lg hover:shadow-xl transition duration-300 text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-[#00AEEF] mb-3">National Championships</h3>
              <p className="text-gray-600 mb-4">Premier competitions featuring all Olympic disciplines with national ranking points.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 10m Air Rifle/Pistol</li>
                <li>• 50m Rifle/Pistol</li>
                <li>• 25m Pistol</li>
                <li>• Shotgun Events</li>
              </ul>
            </div>

            {/* Youth Development */}
            <div className="bg-white p-8 shadow-lg hover:shadow-xl transition duration-300 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-[#00AEEF] mb-3">Youth Development</h3>
              <p className="text-gray-600 mb-4">Specialized competitions for young shooters under 21 years old.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Junior Categories</li>
                <li>• Coaching Clinics</li>
                <li>• Skills Development</li>
                <li>• Mentorship Programs</li>
              </ul>
            </div>

            {/* Club Competitions */}
            <div className="bg-white p-8 shadow-lg hover:shadow-xl transition duration-300 text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-[#00AEEF] mb-3">Club Competitions</h3>
              <p className="text-gray-600 mb-4">Inter-club matches and team events fostering community spirit.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Team Championships</li>
                <li>• Monthly Club Matches</li>
                <li>• Fun Shooting Events</li>
                <li>• Member Tournaments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events & Results */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Recent Results"
            subtitle="2024 Championship Winners"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-white border border-gray-200 p-6 shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-[#00AEEF] text-sm font-semibold mb-3">{event.date}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Winner:</span>
                    <span className="font-semibold text-gray-900">{event.winner}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Discipline:</span>
                    <span className="text-gray-900">{event.discipline}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Score:</span>
                    <span className="font-semibold text-[#00AEEF]">{event.score}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Participants:</span>
                    <span className="text-gray-900">{event.participants}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Rules & Guidelines */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Competition Guidelines"
            subtitle="Important Information"
          />

          <div className="bg-white p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-[#00AEEF] mb-4">🎯 Eligibility Requirements</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Valid shooting license</li>
                  <li>• Current membership (club events)</li>
                  <li>• Age verification for youth categories</li>
                  <li>• Medical clearance certificate</li>
                  <li>• Equipment safety inspection</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#00AEEF] mb-4">📋 Registration Process</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Complete online registration form</li>
                  <li>• Submit required documents</li>
                  <li>• Pay entry fees before deadline</li>
                  <li>• Attend mandatory briefing</li>
                  <li>• Equipment check-in on event day</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#00AEEF] mb-4">🛡️ Safety Protocols</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Mandatory safety briefing</li>
                  <li>• Certified range officer supervision</li>
                  <li>• Personal protective equipment required</li>
                  <li>• Zero tolerance for safety violations</li>
                  <li>• Emergency medical support on-site</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#00AEEF] mb-4">🏅 Awards & Recognition</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Medals for top 3 in each category</li>
                  <li>• Trophies for overall champions</li>
                  <li>• National ranking points</li>
                  <li>• Certificates for all participants</li>
                  <li>• Special recognition awards</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Compete?"
        description="Join our upcoming competitions and experience the thrill of precision shooting sports."
        primaryButton={{ text: "Register for Events", href: "/contact" }}
        secondaryButton={{ text: "View Calendar", href: "/contact", style: "outline" }}
      />
    </div>
  );
}