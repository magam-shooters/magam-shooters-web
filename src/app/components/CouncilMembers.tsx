'use client';

import { colors } from '@/config';

interface CouncilMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

// Placeholder data for council members
const councilMembers: CouncilMember[] = [
  {
    name: "Dr. Rajith Ferdinando",
    role: "President",
    image: "https://picsum.photos/seed/president/400/400",
    bio: "Leading NSSF with over 20 years of experience in shooting sports administration and Olympic committee work."
  },
  {
    name: "Mr. Samantha Wickramasinghe",
    role: "Vice President",
    image: "https://picsum.photos/seed/vicepresident/400/400",
    bio: "Former national champion and dedicated advocate for youth development in shooting sports across Sri Lanka."
  },
  {
    name: "Ms. Nadeeka Perera",
    role: "Secretary General",
    image: "https://picsum.photos/seed/secretary/400/400",
    bio: "Experienced sports administrator coordinating national and international shooting events for the federation."
  },
  {
    name: "Mr. Chandana Silva",
    role: "Treasurer",
    image: "https://picsum.photos/seed/treasurer/400/400",
    bio: "Chartered accountant ensuring financial excellence and transparency in all NSSF operations and programs."
  },
  {
    name: "Col. Roshan Dissanayake",
    role: "Technical Director",
    image: "https://picsum.photos/seed/technical/400/400",
    bio: "Military shooting expert overseeing technical standards, training programs, and safety protocols nationwide."
  },
  {
    name: "Mrs. Dilani Jayawardena",
    role: "Women's Committee Chair",
    image: "https://picsum.photos/seed/womens/400/400",
    bio: "Passionate about promoting women's participation and excellence in shooting sports at all competitive levels."
  }
];

export default function CouncilMembers() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: colors.primary.red }}>
            Leadership
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.primary.navy }}>
            Council Members
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated leaders guiding Sri Lanka's shooting sports federation towards excellence
          </p>
        </div>

        {/* Council Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {councilMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              {/* Member Image */}
              <div className="relative h-80 overflow-hidden bg-gray-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2" style={{ color: colors.primary.navy }}>
                  {member.name}
                </h3>
                <p
                  className="text-sm font-semibold uppercase tracking-wider mb-3"
                  style={{ color: colors.primary.red }}
                >
                  {member.role}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Contact Button */}
              <div className="px-6 pb-6">
                <button
                  className="w-full py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-md hover:scale-105 flex items-center justify-center gap-2"
                  style={{
                    backgroundColor: colors.primary.navy,
                    color: 'white'
                  }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
