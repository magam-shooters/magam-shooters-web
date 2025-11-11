import { COLORS } from "@/config/designTokens";
import { IMAGES } from "@/config/images";
import Link from "next/link";
import CTASection from "../components/CTASection";
import FeatureGrid from "../components/FeatureGrid";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import StatsGrid from "../components/StatsGrid";
import TeamGrid from "../components/TeamGrid";

export default function About() {
  const values = [
    {
      id: "excellence",
      icon: "⭐",
      title: "Excellence",
      description: "We strive for excellence in every project, ensuring top-tier quality and attention to detail.",
    },
    {
      id: "integrity",
      icon: "🤝",
      title: "Integrity",
      description: "Honest, transparent, and ethical practices guide all our professional relationships.",
    },
    {
      id: "innovation",
      icon: "💡",
      title: "Innovation",
      description: "Continuous improvement and creative solutions drive our approach to client projects.",
    },
    {
      id: "teamwork",
      icon: "👥",
      title: "Teamwork",
      description: "Collaborative spirit and diverse expertise make us stronger together.",
    },
  ];

  const team = [
    {
      id: "dale",
      name: "Dale Adams",
      role: "Founder & Head Coach",
      image: IMAGES.PERSON_MALE_1,
      bio: "20+ years of professional experience in golf coaching and training.",
    },
    {
      id: "logan",
      name: "Logan James",
      role: "Training Director",
      image: IMAGES.PERSON_MALE_2,
      bio: "Expert in athlete development and specialized training programs.",
    },
    {
      id: "tracy",
      name: "Tracy Scott",
      role: "Fitness Coach",
      image: IMAGES.PERSON_FEMALE_1,
      bio: "Specialized fitness training tailored to golf performance.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <PageHero
        title="About Us"
        description="Discover our journey, mission, and the team behind Magam Shooters"
      />

      {/* Our Story Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image */}
            <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden shadow-lg">
                            <img
                src={IMAGES.FEATURE_LARGE_1}
                alt="Our Golf Facility"
                className="w-full h-full object-cover shadow-xl"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">Our Story</h2>
              <p className={`text-${COLORS.PRIMARY_MAIN} text-sm uppercase tracking-widest font-semibold mb-6`}>
                Founded in 1964
              </p>
              
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
                Founded in 1964 by a team of professional golf players, our club is based in one of the most picturesque areas of the country and is ideal for family membership. What began as a vision to create an exceptional golf community has evolved into a premier destination for golf enthusiasts and professional athletes.
              </p>
              
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                Over six decades, we've maintained our commitment to excellence, providing world-class facilities, professional coaching, and a welcoming community for golfers of all skill levels.
              </p>

              <Link
                href="/services"
                className={`inline-block bg-${COLORS.PRIMARY_MAIN} hover:bg-${COLORS.PRIMARY_DARK} text-white font-bold py-3 px-8 transition duration-300 uppercase text-sm tracking-wider`}
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className={`bg-gradient-to-b from-${COLORS.BG_LIGHT} to-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Our Purpose"
            subtitle="Mission & Vision"
          />

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Mission */}
            <div className={`bg-white p-8 sm:p-10 md:p-12 shadow-lg hover:shadow-xl transition duration-300 border-l-4 border-${COLORS.PRIMARY_MAIN}`}>
              <div className="text-4xl md:text-5xl mb-6">🎯</div>
              <h3 className={`text-2xl sm:text-3xl font-bold text-${COLORS.PRIMARY_MAIN} mb-4`}>Our Mission</h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                To deliver exceptional golf experiences and professional coaching that exceed our members' expectations, foster a thriving community, and maintain our legacy as a premier golf institution.
              </p>
            </div>

            {/* Vision */}
            <div className={`bg-white p-8 sm:p-10 md:p-12 shadow-lg hover:shadow-xl transition duration-300 border-l-4 border-${COLORS.PRIMARY_MAIN}`}>
              <div className="text-4xl md:text-5xl mb-6">🌟</div>
              <h3 className={`text-2xl sm:text-3xl font-bold text-${COLORS.PRIMARY_MAIN} mb-4`}>Our Vision</h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                To be recognized globally as the most innovative and welcoming golf club, where athletes of all levels can achieve their dreams and build lasting connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Core Values"
            subtitle="What We Believe In"
          />

          <FeatureGrid features={values} columns={4} />
        </div>
      </section>

      {/* Team Section */}
      <section className={`bg-gradient-to-b from-${COLORS.BG_LIGHT} to-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Leadership Team"
            subtitle="Meet Our Experts"
            description="Our dedicated leadership team brings decades of combined experience in golf coaching, player development, and club management."
          />

          <TeamGrid members={team} columns={3} showBio={true} />
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Our Achievements"
            subtitle="Recognition & Milestones"
          />

          <StatsGrid 
            stats={[
              { value: "60+", label: "Years of Excellence" },
              { value: "5000+", label: "Active Members" },
              { value: "100+", label: "Pro Tournaments" },
              { value: "98%", label: "Member Satisfaction" }
            ]} 
            columns={4} 
          />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={`bg-gradient-to-b from-${COLORS.BG_LIGHT} to-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">Why Choose Magam Shooters</h2>
            <p className={`text-${COLORS.PRIMARY_MAIN} text-sm uppercase tracking-widest font-semibold`}>What Sets Us Apart</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Feature 1 */}
            <div className="flex gap-4 sm:gap-6">
              <div className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-${COLORS.PRIMARY_MAIN} text-white flex items-center justify-center text-2xl`}>
                📚
              </div>
              <div>
                <h3 className={`text-xl sm:text-2xl font-bold text-${COLORS.PRIMARY_MAIN} mb-2`}>Expert Coaching</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Our certified coaches have won numerous awards and competitions at professional levels.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4 sm:gap-6">
              <div className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-${COLORS.PRIMARY_MAIN} text-white flex items-center justify-center text-2xl`}>
                🏆
              </div>
              <div>
                <h3 className={`text-xl sm:text-2xl font-bold text-${COLORS.PRIMARY_MAIN} mb-2`}>World-Class Facilities</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  State-of-the-art training grounds and equipment for optimal performance development.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4 sm:gap-6">
              <div className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-${COLORS.PRIMARY_MAIN} text-white flex items-center justify-center text-2xl`}>
                👥
              </div>
              <div>
                <h3 className={`text-xl sm:text-2xl font-bold text-${COLORS.PRIMARY_MAIN} mb-2`}>Community Focus</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  A welcoming environment where members build lasting connections and friendships.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-4 sm:gap-6">
              <div className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-${COLORS.PRIMARY_MAIN} text-white flex items-center justify-center text-2xl`}>
                🎯
              </div>
              <div>
                <h3 className={`text-xl sm:text-2xl font-bold text-${COLORS.PRIMARY_MAIN} mb-2`}>Personalized Programs</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Custom training plans tailored to your skill level and individual goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Join Our Community"
        description="Become part of a legacy of excellence and start your golf journey with Magam Shooters today."
        primaryButton={{ text: "Get In Touch", href: "/contact" }}
        secondaryButton={{ text: "Explore Memberships", href: "/services", style: "outline" }}
      />
    </div>
  );
}
