import { IMAGES } from "@/config/images";
import Link from "next/link";
import CTASection from "../components/CTASection";
import FeatureGrid from "../components/FeatureGrid";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import StatsGrid from "../components/StatsGrid";
import TeamGrid from "../components/TeamGrid";
import { FaBullseye, FaShieldAlt, FaTrophy, FaDumbbell, FaMedal, FaChartBar } from "react-icons/fa";

export default function AboutUs() {
  const values = [
    {
      id: "precision",
      icon: <FaBullseye className="text-3xl text-[#002B7F]" />,
      title: "Precision",
      description: "We demand accuracy and attention to detail in every aspect of shooting sports.",
    },
    {
      id: "safety",
      icon: <FaShieldAlt className="text-3xl text-[#002B7F]" />,
      title: "Safety",
      description: "Safety protocols and training are paramount in all our activities and competitions.",
    },
    {
      id: "excellence",
      icon: <FaTrophy className="text-3xl text-[#002B7F]" />,
      title: "Excellence",
      description: "Continuous improvement and pursuit of excellence drives our competitive spirit.",
    },
    {
      id: "discipline",
      icon: <FaDumbbell className="text-3xl text-[#002B7F]" />,
      title: "Discipline",
      description: "Mental focus and physical discipline are essential for shooting sports success.",
    },
  ];

  const team = [
    {
      id: "john",
      name: "John Silva",
      role: "Chief Range Officer",
      image: IMAGES.PERSON_MALE_1,
      bio: "30+ years of experience in competitive shooting and range safety management.",
    },
    {
      id: "sarah",
      name: "Sarah Fernando",
      role: "Head Coach",
      image: IMAGES.PERSON_FEMALE_1,
      bio: "Olympic shooting coach with expertise in pistol and rifle disciplines.",
    },
    {
      id: "mike",
      name: "Mike Perera",
      role: "Technical Director",
      image: IMAGES.PERSON_MALE_2,
      bio: "Equipment specialist and technical advisor for competitive shooting.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <PageHero
        title="About Us"
        description="Discover the legacy and excellence of Magam Shooters - Sri Lanka's premier shooting sports organization"
      />

      {/* Our Story Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image */}
            <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden shadow-lg">
              <img
                src={IMAGES.FEATURE_LARGE_1}
                alt="Shooting Range Facility"
                className="w-full h-full object-cover shadow-xl"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">Our Story</h2>
              <p className="text-[#00AEEF] text-xs uppercase tracking-widest font-semibold mb-3">
                Founded in 1985
              </p>
              
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
                Established in 1985 by a group of passionate marksmen, Magam Shooters has grown to become Sri Lanka's most respected shooting sports organization. What started as a small club has evolved into a national institution promoting excellence in competitive shooting.
              </p>
              
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                For nearly four decades, we've been dedicated to developing shooting talent, promoting safety standards, and fostering a community of disciplined athletes committed to precision and excellence.
              </p>

              <Link
                href="/events"
                className="inline-block bg-[#00AEEF] hover:bg-[#0090C0] text-white font-bold py-2 px-6 transition duration-200 uppercase text-xs tracking-wider rounded"
              >
                View Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-10 sm:py-12 md:py-16 px-2 sm:px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Our Purpose"
            subtitle="Mission & Vision"
          />

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Mission */}
            <div className="bg-white p-6 sm:p-7 md:p-8 shadow-md hover:shadow-lg transition duration-200 border-l-4 border-[#00AEEF]">
              <div className="mb-4">
                <FaBullseye className="text-3xl md:text-4xl text-[#00AEEF]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#00AEEF] mb-2">Our Mission</h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                To promote excellence in shooting sports through world-class training, safe competition environments, and fostering a community of disciplined athletes who represent the highest standards of marksmanship.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-6 sm:p-7 md:p-8 shadow-md hover:shadow-lg transition duration-200 border-l-4 border-[#00AEEF]">
              <div className="mb-4">
                <FaTrophy className="text-3xl md:text-4xl text-[#00AEEF]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#00AEEF] mb-2">Our Vision</h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                To be recognized as the premier shooting sports organization in Asia, developing Olympic-caliber athletes while promoting the values of precision, discipline, and safety in competitive shooting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-10 sm:py-12 md:py-16 px-2 sm:px-4 lg:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Core Values"
            subtitle="What We Stand For"
          />

          <FeatureGrid features={values} columns={4} />
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-10 sm:py-12 md:py-16 px-2 sm:px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Leadership Team"
            subtitle="Meet Our Experts"
            description="Our leadership team combines decades of competitive shooting experience, coaching expertise, and commitment to athlete development."
          />

          <TeamGrid members={team} columns={3} showBio={true} />
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-10 sm:py-12 md:py-16 px-2 sm:px-4 lg:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Our Achievements"
            subtitle="Recognition & Milestones"
          />

          <StatsGrid 
            stats={[
              { value: "38+", label: "Years of Excellence" },
              { value: "500+", label: "Active Members" },
              { value: "50+", label: "National Championships" },
              { value: "15+", label: "Olympic Qualifiers" }
            ]} 
            columns={4} 
          />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-10 sm:py-12 md:py-16 px-2 sm:px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">Why Choose Magam Shooters</h2>
            <p className="text-[#00AEEF] text-xs uppercase tracking-widest font-semibold">What Sets Us Apart</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Feature 1 */}
            <div className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-[#00AEEF] text-white flex items-center justify-center text-xl">
                <FaMedal />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#00AEEF] mb-1">Olympic-Level Training</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Our coaches have trained multiple Olympic and Commonwealth Games athletes.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-[#00AEEF] text-white flex items-center justify-center text-xl">
                <FaBullseye />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#00AEEF] mb-1">State-of-Art Facilities</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Modern shooting ranges with electronic targeting systems and climate control.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-[#00AEEF] text-white flex items-center justify-center text-xl">
                <FaShieldAlt />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#00AEEF] mb-1">Safety First</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Rigorous safety protocols and certified range officers ensure secure training environment.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-[#00AEEF] text-white flex items-center justify-center text-xl">
                <FaChartBar />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#00AEEF] mb-1">Performance Analytics</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Advanced scoring systems and performance tracking to optimize your shooting technique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Join Magam Shooters"
        description="Experience the precision and excellence of competitive shooting sports with Sri Lanka's premier organization."
        primaryButton={{ text: "Get In Touch", href: "/contact" }}
        secondaryButton={{ text: "Explore Membership", href: "/clubs", style: "outline" }}
      />
    </div>
  );
}