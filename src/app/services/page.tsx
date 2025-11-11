'use client';

import { COLORS } from "@/config/designTokens";
import { IMAGES } from "@/config/images";
import Link from "next/link";
import { useState } from "react";
import CTASection from "../components/CTASection";
import FeatureGrid from "../components/FeatureGrid";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const services = [
    {
      id: 1,
      title: "Ways To Improve Your Short Game",
      categories: ["COACHING & TIPS", "FULL SWING", "TECHNICS"],
      image: IMAGES.SERVICE_1,
      date: "MARCH 1, 2016",
      slug: "improve-short-game"
    },
    {
      id: 2,
      title: "Golfer's Wish List: How To Fix A Slice",
      categories: ["COACHING & TIPS", "FULL SWING", "TECHNICS"],
      image: IMAGES.SERVICE_2,
      date: "MARCH 1, 2016",
      slug: "fix-a-slice"
    },
    {
      id: 3,
      title: "Tips for improving your serve",
      categories: ["COACHING & TIPS", "TECHNICS"],
      image: IMAGES.SERVICE_3,
      date: "MARCH 1, 2016",
      slug: "improve-serve"
    },
    {
      id: 4,
      title: "Ten hot tips for the grass court season",
      categories: ["COACHING & TIPS", "TECHNICS"],
      image: IMAGES.SERVICE_4,
      date: "MARCH 1, 2016",
      slug: "grass-court-tips"
    },
    {
      id: 5,
      title: "United Golf Championship",
      categories: ["COMPETITION"],
      image: IMAGES.SERVICE_5,
      date: "MARCH 1, 2016",
      slug: "united-golf-championship"
    },
    {
      id: 6,
      title: "Junior Club Championship",
      categories: ["COMPETITION"],
      image: IMAGES.SERVICE_6,
      date: "MARCH 1, 2016",
      slug: "junior-championship"
    },
    {
      id: 7,
      title: "Senior Open Championship",
      categories: ["COMPETITION"],
      image: IMAGES.SERVICE_7,
      date: "MARCH 1, 2016",
      slug: "senior-championship"
    },
    {
      id: 8,
      title: "National Invitational Tournament",
      categories: ["COMPETITION"],
      image: IMAGES.SERVICE_8,
      date: "MARCH 1, 2016",
      slug: "national-tournament"
    }
  ];

  const categories = ["ALL", "COACHING & TIPS", "FULL SWING", "TECHNICS", "COMPETITION"];

  const filteredServices = activeCategory === "ALL" 
    ? services 
    : services.filter(service => service.categories.includes(activeCategory));

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <PageHero
        title="Our Services"
        description="Comprehensive golf coaching, training programs, and tournament opportunities"
      />

      {/* Services Section with Filters */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-12 md:mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-bold uppercase tracking-wider transition duration-300 ${
                  activeCategory === category
                    ? `bg-${COLORS.PRIMARY_MAIN} text-white`
                    : `text-${COLORS.PRIMARY_MAIN} border-2 border-${COLORS.PRIMARY_MAIN} hover:bg-${COLORS.PRIMARY_MAIN} hover:text-white`
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {filteredServices.map((service) => (
              <article
                key={service.id}
                className="group overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              >
                {/* Service Image */}
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden group-hover:bg-gray-900 group-hover/img transition duration-300">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className={`absolute inset-0 bg-${COLORS.PRIMARY_MAIN} opacity-0 group-hover:opacity-30 transition duration-300 flex items-center justify-center`}>
                    <div className={`w-14 h-14 bg-white text-${COLORS.PRIMARY_MAIN} rounded-full flex items-center justify-center text-2xl font-bold`}>
                      +
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="bg-white p-6 sm:p-7 md:p-8">
                  {/* Categories */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.categories.map((cat) => (
                      <span
                        key={cat}
                        className={`text-${COLORS.PRIMARY_MAIN} text-xs font-bold uppercase tracking-wider`}
                      >
                        {cat}
                        {service.categories.indexOf(cat) < service.categories.length - 1 && ", "}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <Link href={`/services/${service.slug}`}>
                    <h3 className={`text-lg sm:text-xl font-bold text-gray-900 hover:text-${COLORS.PRIMARY_MAIN} transition duration-200 mb-3 line-clamp-2`}>
                      {service.title}
                    </h3>
                  </Link>

                  {/* Date */}
                  <p className={`text-${COLORS.PRIMARY_MAIN} text-xs font-semibold uppercase tracking-wider`}>
                    {service.date}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* No Results Message */}
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No services found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Our Services Section */}
      <section className={`bg-gradient-to-b from-${COLORS.BG_LIGHT} to-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Why Choose Our Services"
            subtitle="Excellence in Every Program"
          />

          <FeatureGrid
            features={[
              { icon: "👨‍🏫", title: "Expert Coaches", description: "Certified professionals with years of experience" },
              { icon: "🎯", title: "Personalized Programs", description: "Customized training tailored to your goals" },
              { icon: "🏆", title: "Proven Results", description: "Track record of championship winners" },
              { icon: "📊", title: "Progress Tracking", description: "Detailed analytics and performance metrics" }
            ]}
            columns={4}
          />
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Service Categories"
            subtitle="What We Offer"
          />

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Coaching & Tips */}
            <div className={`bg-gradient-to-br from-${COLORS.BG_LIGHT} to-white p-8 sm:p-10 border-l-4 border-${COLORS.PRIMARY_MAIN}`}>
              <h3 className={`text-2xl sm:text-3xl font-bold text-${COLORS.PRIMARY_MAIN} mb-4`}>Coaching & Tips</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Professional coaching sessions with expert instructors covering swing techniques, grip, stance, and course strategy for all skill levels.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className={`text-${COLORS.PRIMARY_MAIN} font-bold mt-1`}>✓</span>
                  <span>One-on-one coaching sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={`text-${COLORS.PRIMARY_MAIN} font-bold mt-1`}>✓</span>
                  <span>Group training programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={`text-${COLORS.PRIMARY_MAIN} font-bold mt-1`}>✓</span>
                  <span>Video analysis sessions</span>
                </li>
              </ul>
            </div>

            {/* Full Swing & Technics */}
            <div className={`bg-gradient-to-br from-${COLORS.BG_LIGHT} to-white p-8 sm:p-10 border-l-4 border-${COLORS.PRIMARY_MAIN}`}>
              <h3 className={`text-2xl sm:text-3xl font-bold text-${COLORS.PRIMARY_MAIN} mb-4`}>Full Swing & Technics</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Advanced techniques for improving your full swing, including club selection, trajectory control, and distance optimization.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className={`text-${COLORS.PRIMARY_MAIN} font-bold mt-1`}>✓</span>
                  <span>Swing mechanics analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={`text-${COLORS.PRIMARY_MAIN} font-bold mt-1`}>✓</span>
                  <span>Impact position training</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={`text-${COLORS.PRIMARY_MAIN} font-bold mt-1`}>✓</span>
                  <span>Distance and accuracy drills</span>
                </li>
              </ul>
            </div>

            {/* Fitness Training */}
            <div className={`bg-gradient-to-br from-${COLORS.BG_LIGHT} to-white p-8 sm:p-10 border-l-4 border-${COLORS.PRIMARY_MAIN}`}>
              <h3 className={`text-2xl sm:text-3xl font-bold text-${COLORS.PRIMARY_MAIN} mb-4`}>Fitness Training</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Customized fitness programs designed to enhance your golf performance, build strength, flexibility, and endurance.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className={`text-${COLORS.PRIMARY_MAIN} font-bold mt-1`}>✓</span>
                  <span>Strength and conditioning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={`text-${COLORS.PRIMARY_MAIN} font-bold mt-1`}>✓</span>
                  <span>Flexibility and mobility work</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={`text-${COLORS.PRIMARY_MAIN} font-bold mt-1`}>✓</span>
                  <span>Performance optimization</span>
                </li>
              </ul>
            </div>

            {/* Competitions */}
            <div className={`bg-gradient-to-br from-${COLORS.BG_LIGHT} to-white p-8 sm:p-10 border-l-4 border-${COLORS.PRIMARY_MAIN}`}>
              <h3 className={`text-2xl sm:text-3xl font-bold text-${COLORS.PRIMARY_MAIN} mb-4`}>Competitions</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Participate in various tournaments and competitions, from local club events to national and international championships.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className={`text-${COLORS.PRIMARY_MAIN} font-bold mt-1`}>✓</span>
                  <span>Club championships</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={`text-${COLORS.PRIMARY_MAIN} font-bold mt-1`}>✓</span>
                  <span>National tournaments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={`text-${COLORS.PRIMARY_MAIN} font-bold mt-1`}>✓</span>
                  <span>International events</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Elevate Your Game?"
        description="Choose a service that matches your goals and start your journey to excellence"
        primaryButton={{
          text: "Book Now",
          href: "/contact"
        }}
        secondaryButton={{
          text: "Learn More",
          href: "/contact"
        }}
      />
    </div>
  );
}
