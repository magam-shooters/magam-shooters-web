'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaArrowLeft, FaCalendarAlt, FaClock, FaMapMarkerAlt, FaTrophy } from 'react-icons/fa';

interface Match {
  id: number;
  date: string;
  time: string;
  title: string;
  venue: string;
  category: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  description?: string;
}

// Full calendar data with more events
const matches: Match[] = [
  {
    id: 1,
    date: "2025-01-15",
    time: "09:00 AM",
    title: "National Rifle Championship",
    venue: "Colombo Rifle Range",
    category: "Rifle",
    status: "upcoming",
    description: "Annual national championship featuring top shooters from across Sri Lanka"
  },
  {
    id: 2,
    date: "2025-01-20",
    time: "02:00 PM",
    title: "Youth Pistol Competition",
    venue: "Kandy Sports Complex",
    category: "Pistol",
    status: "upcoming",
    description: "Development competition for youth athletes under 18"
  },
  {
    id: 3,
    date: "2025-02-05",
    time: "10:00 AM",
    title: "International Open Championship",
    venue: "NSSF National Range",
    category: "Mixed",
    status: "upcoming",
    description: "International event with participants from South Asian countries"
  },
  {
    id: 4,
    date: "2025-02-18",
    time: "08:30 AM",
    title: "Women's Shooting Championship",
    venue: "Galle Shooting Range",
    category: "Rifle & Pistol",
    status: "upcoming",
    description: "Championship dedicated to women's shooting sports excellence"
  },
  {
    id: 5,
    date: "2025-03-10",
    time: "09:00 AM",
    title: "Junior National Championships",
    venue: "Colombo Rifle Range",
    category: "Rifle",
    status: "upcoming",
    description: "National level competition for junior category athletes"
  },
  {
    id: 6,
    date: "2025-03-25",
    time: "01:00 PM",
    title: "Inter-Club Tournament",
    venue: "Various Locations",
    category: "Team Event",
    status: "upcoming",
    description: "Team-based competition among affiliated clubs"
  },
  {
    id: 7,
    date: "2025-04-08",
    time: "09:00 AM",
    title: "Air Rifle Championship",
    venue: "Negombo Indoor Range",
    category: "Air Rifle",
    status: "upcoming",
    description: "Precision air rifle competition for all age categories"
  },
  {
    id: 8,
    date: "2025-04-22",
    time: "10:30 AM",
    title: "Regional Qualifiers - Southern",
    venue: "Matara Shooting Complex",
    category: "Mixed",
    status: "upcoming",
    description: "Southern region qualifying event for nationals"
  },
  {
    id: 9,
    date: "2025-05-10",
    time: "08:00 AM",
    title: "National Selection Trials",
    venue: "NSSF National Range",
    category: "Mixed",
    status: "upcoming",
    description: "Selection trials for international competitions"
  },
  {
    id: 10,
    date: "2025-05-25",
    time: "09:00 AM",
    title: "Veteran Shooters Championship",
    venue: "Colombo Rifle Range",
    category: "Rifle & Pistol",
    status: "upcoming",
    description: "Championship for veteran category (45+ years)"
  },
  {
    id: 11,
    date: "2025-06-12",
    time: "10:00 AM",
    title: "International Friendship Match",
    venue: "NSSF National Range",
    category: "International",
    status: "upcoming",
    description: "Friendly competition with visiting international teams"
  },
  {
    id: 12,
    date: "2025-06-28",
    time: "09:00 AM",
    title: "Mid-Year Championship",
    venue: "Kandy Sports Complex",
    category: "Mixed",
    status: "upcoming",
    description: "Mid-year national level championship across all disciplines"
  },
];

const categories = ["All", "Rifle", "Pistol", "Mixed", "Air Rifle", "Team Event", "International", "Rifle & Pistol"];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
};

const formatDateShort = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

export default function CalendarPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredMatches = selectedCategory === "All" 
    ? matches 
    : matches.filter(match => match.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#002B7F] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-white hover:text-gray-200 mb-6 transition-colors"
          >
            <FaArrowLeft />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <FaCalendarAlt className="text-4xl" />
            <h1 className="text-4xl md:text-5xl font-bold">NSSF Competition Calendar</h1>
          </div>
          <p className="text-xl text-white/90 max-w-2xl">
            Complete schedule of shooting competitions and championships throughout the year
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-[#002B7F] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <p className="text-center mt-4 text-gray-600">
            Showing {filteredMatches.length} {filteredMatches.length === 1 ? 'event' : 'events'}
          </p>
        </div>
      </section>

      {/* Calendar Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredMatches.map((match) => (
              <div
                key={match.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200"
              >
                {/* Date Header */}
                <div className="bg-[#002B7F] text-white p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-white text-[#002B7F] rounded-lg p-3 text-center min-w-[60px]">
                        <div className="text-2xl font-bold leading-none">
                          {new Date(match.date).getDate()}
                        </div>
                        <div className="text-xs uppercase mt-1">
                          {new Date(match.date).toLocaleDateString('en-US', { month: 'short' })}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm opacity-90">
                          {new Date(match.date).toLocaleDateString('en-US', { weekday: 'long' })}
                        </div>
                        <div className="text-lg font-semibold">
                          {formatDate(match.date)}
                        </div>
                      </div>
                    </div>
                    <span className="px-4 py-2 rounded-full text-xs font-bold bg-[#FFD100] text-[#002B7F]">
                      {match.category}
                    </span>
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#002B7F] mb-4">
                    {match.title}
                  </h3>

                  {match.description && (
                    <p className="text-gray-600 mb-4 text-sm">
                      {match.description}
                    </p>
                  )}

                  <div className="space-y-3 mb-6">
                    {/* Time */}
                    <div className="flex items-center text-gray-700">
                      <FaClock className="w-5 h-5 mr-3 text-[#002B7F]" />
                      <span className="font-medium">{match.time}</span>
                    </div>

                    {/* Venue */}
                    <div className="flex items-center text-gray-700">
                      <FaMapMarkerAlt className="w-5 h-5 mr-3 text-[#D71920]" />
                      <span className="font-medium">{match.venue}</span>
                    </div>

                    {/* Status */}
                    <div className="flex items-center text-gray-700">
                      <FaTrophy className="w-5 h-5 mr-3 text-[#FFD100]" />
                      <span className="font-medium capitalize">{match.status}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-[#002B7F] hover:bg-[#001B5F] text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
                      Register Now
                    </button>
                    <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-[#002B7F] font-semibold py-3 px-6 rounded-lg transition duration-300">
                      More Info
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Download Calendar */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
              <FaCalendarAlt className="text-5xl text-[#002B7F] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#002B7F] mb-3">
                Download Full Calendar
              </h3>
              <p className="text-gray-600 mb-6">
                Add all NSSF events to your calendar application
              </p>
              <div className="flex gap-4 justify-center">
                <button className="bg-[#002B7F] hover:bg-[#001B5F] text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
                  Download iCal
                </button>
                <button className="bg-gray-100 hover:bg-gray-200 text-[#002B7F] font-semibold py-3 px-6 rounded-lg transition duration-300">
                  Google Calendar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
