'use client';

import { colors } from '@/config';
import Image from 'next/image';
import { useState } from 'react';

interface CouncilMember {
  name: string;
  role: string;
  image?: string;
}

// NSSF-SL Council Members
const councilMembers: CouncilMember[] = [
  {
    name: "Mr. Pradeep Edirisinghe",
    role: "President",
    image: "/council_members/PradeepEdirisinghe.jpg"
  },
  {
    name: "Mr. Dinesh Lionel",
    role: "Secretary General",
    image: "/council_members/DineshLionel.jpg"
  },
  {
    name: "Lt. Cdr. Naveen Pathmarathne (Rtd.)",
    role: "Vice President Rifle"
  },
  {
    name: "Mr. Sagara Wimaladharma",
    role: "Vice President Pistol",
    image: "/council_members/SagaraWimaladharma.jpg"
  },
  {
    name: "Mr. Dallas Martenstyn",
    role: "Vice President Shotgun"
  },
  {
    name: "Mr. Shirantha Peries",
    role: "Vice President Coaching",
    image: "/council_members/ShiranthaPeries.jpg"
  },
  {
    name: "Ms. Kehara Siriwardhana",
    role: "Assistant Secretary Rifle",
    image: "/council_members/KeharaSiriwardhana.jpg"
  },
  {
    name: "Mr. Sandun Dissanayake",
    role: "Assistant Secretary Pistol",
    image: "/council_members/SandunDissanayake.jpeg"
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
    name: "Mr. Lasitha Perera",
    role: "Chairman Judges Committee"
  },
  {
    name: "Ms. Chathuni Kandawinna",
    role: "Secretary Tech Committee",
    image: "/council_members/ChathuniImayaKandawinna.jpg"
  },
  {
    name: "Mr. Dhanuka Kamal",
    role: "Secretary Judges Committee"
  },
  {
    name: "Mrs. Tharanga Perera",
    role: "Treasurer"
  }
];

export default function CouncilMembers() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-montserrat font-semibold uppercase tracking-wider mb-2" style={{ color: colors.primary.blue }}>
            Leadership
          </p>
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4" style={{ color: colors.primary.navy }}>
            Council Members
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            Meet the dedicated leaders guiding Sri Lanka's shooting sports federation towards excellence
          </p>
        </div>

        {/* Council Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {councilMembers.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MemberCard({ member }: { member: CouncilMember }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200"
    >
      {/* Member Avatar/Image */}
      <div className="relative h-48 overflow-hidden flex items-center justify-center" style={{ backgroundColor: colors.primary.navy }}>
        {member.image && !imageError ? (
          <div className="relative w-full h-full">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover object-[center_20%] scale-100"
              onError={() => setImageError(true)}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
            />
          </div>
        ) : (
          <svg
            className="w-20 h-20 text-white opacity-70"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        )}
      </div>

      {/* Member Info */}
      <div className="p-4">
        <h3 className="text-base font-montserrat font-bold mb-1 leading-tight" style={{ color: colors.primary.navy }}>
          {member.name}
        </h3>
        <p
          className="text-xs font-montserrat font-semibold uppercase tracking-wide"
          style={{ color: colors.primary.blue }}
        >
          {member.role}
        </p>
      </div>
    </div>
  );
}
