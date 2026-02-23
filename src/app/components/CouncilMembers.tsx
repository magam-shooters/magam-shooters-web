'use client';

import { colors } from '@/config';

interface CouncilMember {
  name: string;
  role: string;
}

// NSSF-SL Council Members
const councilMembers: CouncilMember[] = [
  {
    name: "Mr. Pradeep Edirisinghe",
    role: "President"
  },
  {
    name: "Lt. Cdr. Naveen Pathmarathne (Rtd.)",
    role: "Vice President Rifle"
  },
  {
    name: "Mr. Sagara Wimaladharma",
    role: "Vice President Pistol"
  },
  {
    name: "Mr. Dallas Martenstyn",
    role: "Vice President Shotgun"
  },
  {
    name: "Mr. Shirantha Peries",
    role: "Vice President Coaching"
  },
  {
    name: "Mr. Dinesh Lionel",
    role: "Secretary General"
  },
  {
    name: "Mrs. Tharanga Perera",
    role: "Treasurer"
  },
  {
    name: "Ms. Kehara Siriwardhana",
    role: "Assistant Secretary Rifle"
  },
  {
    name: "Mr. Sandun Dissanayake",
    role: "Assistant Secretary Pistol"
  },
  {
    name: "Mr. Nivantha Waas",
    role: "Assistant Secretary Shotgun"
  },
  {
    name: "Ms. Githmi Gunawardena",
    role: "Assistant Secretary Coaching"
  },
  {
    name: "Mr. Mohan Gilbert",
    role: "Chairman Tech Committee"
  },
  {
    name: "Ms. Chathuni Kandawinna",
    role: "Secretary Tech Committee"
  },
  {
    name: "Mr. Lasitha Perera",
    role: "Chairman Judges Committee"
  },
  {
    name: "Mr. Dhanuka Kamal",
    role: "Secretary Judges Committee"
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
              {/* Member Avatar Icon */}
              <div className="relative h-80 overflow-hidden flex items-center justify-center" style={{ backgroundColor: colors.primary.navy }}>
                <svg
                  className="w-32 h-32 text-white opacity-80"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{ color: colors.primary.navy }}>
                  {member.name}
                </h3>
                <p
                  className="text-sm font-semibold uppercase tracking-wider"
                  style={{ color: colors.primary.red }}
                >
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
