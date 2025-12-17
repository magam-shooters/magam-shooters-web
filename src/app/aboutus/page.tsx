import { colors } from "@/config";
import { IMAGES } from "@/config/images";
import { FaAward, FaBullseye, FaGlobe, FaHandshake, FaHeart, FaShieldAlt, FaTrophy, FaUsers } from "react-icons/fa";
import CouncilMembers from "../components/CouncilMembers";
import ImageGalleryScroll from "../components/ImageGalleryScroll";
import PageHero from "../components/PageHero";
import StatsGrid from "../components/StatsGrid";

export default function AboutUs() {
  const coreValues = [
    {
      icon: FaBullseye,
      title: "Precision & Excellence",
      description: "We demand the highest standards of accuracy and performance in every aspect of shooting sports."
    },
    {
      icon: FaShieldAlt,
      title: "Safety First",
      description: "Rigorous safety protocols and certified training ensure a secure environment for all participants."
    },
    {
      icon: FaUsers,
      title: "Athlete Development",
      description: "Committed to nurturing talent from grassroots to Olympic-level competitive shooting."
    },
    {
      icon: FaHandshake,
      title: "Integrity & Fair Play",
      description: "Upholding the principles of sportsmanship, ethics, and fair competition in all activities."
    },
    {
      icon: FaGlobe,
      title: "International Standards",
      description: "Adhering to ISSF regulations and promoting Sri Lankan shooting sports on the global stage."
    },
    {
      icon: FaHeart,
      title: "Community & Inclusion",
      description: "Building a diverse, inclusive community that welcomes shooters of all backgrounds and abilities."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <PageHero
        title="About NSSF Sri Lanka"
        description="The National Shooting Sports Federation of Sri Lanka - Championing excellence in competitive shooting since its establishment"
      />

      {/* Introduction Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: colors.primary.red }}>
              Our Federation
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: colors.primary.navy }}>
              Leading Sri Lanka's Shooting Sports
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The National Shooting Sports Federation of Sri Lanka (NSSF) is the apex body governing shooting sports in the country. 
              We are dedicated to developing world-class athletes, promoting safe shooting practices, and fostering a culture of 
              excellence in marksmanship across the nation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-96 overflow-hidden rounded-xl shadow-2xl">
              <img
                src={IMAGES.FEATURE_LARGE_1}
                alt="NSSF Shooting Range Facility"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-3xl font-bold mb-6" style={{ color: colors.primary.navy }}>Our Mission</h3>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                NSSF Sri Lanka is committed to nurturing shooting sports talent from grassroots to elite levels. We provide comprehensive 
                training programs, organize national and international competitions, and ensure adherence to global safety and technical standards.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Through our network of 17 affiliated clubs and state-of-the-art facilities, we create pathways for athletes to represent 
                Sri Lanka on international platforms including the Olympics, Asian Games, and Commonwealth Games.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  className="px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 hover:shadow-lg"
                  style={{ backgroundColor: colors.primary.navy }}
                >
                  Our Programs
                </button>
                <button
                  className="px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg border-2"
                  style={{ borderColor: colors.primary.navy, color: colors.primary.navy }}
                >
                  View Events
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: colors.primary.red }}>
              Our Purpose
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.primary.navy }}>
              Vision & Mission
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center" style={{ backgroundColor: colors.primary.yellow }}>
                    <FaTrophy className="text-3xl text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4" style={{ color: colors.primary.navy }}>Our Vision</h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    To position Sri Lanka as a powerhouse in Asian shooting sports, producing world-class athletes who compete 
                    with excellence on international stages while upholding the highest standards of sportsmanship and integrity.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center" style={{ backgroundColor: colors.primary.red }}>
                    <FaBullseye className="text-3xl text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4" style={{ color: colors.primary.navy }}>Our Mission</h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    To develop, promote, and govern shooting sports in Sri Lanka through comprehensive training programs, world-class 
                    facilities, and fostering a culture of excellence that nurtures talent from grassroots to Olympic levels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: colors.primary.red }}>
              Our Principles
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.primary.navy }}>
              Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The fundamental principles that guide our federation and shape the future of shooting sports in Sri Lanka
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-lg flex items-center justify-center" style={{ backgroundColor: colors.primary.yellow }}>
                    <value.icon className="text-2xl" style={{ color: colors.primary.navy }} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: colors.primary.navy }}>
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Council Members Section */}
      <CouncilMembers />

      {/* Achievements & Statistics Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: colors.primary.red }}>
              Our Impact
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.primary.navy }}>
              Achievements & Milestones
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Decades of excellence in developing shooting sports talent and representing Sri Lanka internationally
            </p>
          </div>

          <StatsGrid 
            stats={[
              { value: "17+", label: "Affiliated Clubs" },
              { value: "1000+", label: "Active Athletes" },
              { value: "75+", label: "National Championships" },
              { value: "25+", label: "International Medals" }
            ]} 
            columns={4} 
          />
        </div>
      </section>

      {/* Why NSSF Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: colors.primary.red }}>
              Excellence in Every Shot
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.primary.navy }}>
              Why Choose NSSF Sri Lanka
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Leading the nation with world-class facilities, expert coaching, and a commitment to athlete success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="flex gap-6 p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center" style={{ backgroundColor: colors.primary.navy }}>
                  <FaAward className="text-2xl text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: colors.primary.navy }}>Olympic-Level Training</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our world-class coaches have trained multiple Olympic, Asian Games, and Commonwealth Games athletes, 
                  providing expertise in all shooting disciplines.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-6 p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center" style={{ backgroundColor: colors.primary.navy }}>
                  <FaBullseye className="text-2xl text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: colors.primary.navy }}>World-Class Facilities</h3>
                <p className="text-gray-600 leading-relaxed">
                  State-of-the-art shooting ranges equipped with electronic scoring systems, climate control, and 
                  facilities that meet international ISSF standards.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-6 p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center" style={{ backgroundColor: colors.primary.navy }}>
                  <FaShieldAlt className="text-2xl text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: colors.primary.navy }}>Uncompromising Safety</h3>
                <p className="text-gray-600 leading-relaxed">
                  Rigorous safety protocols, certified range officers, and comprehensive safety training ensure 
                  a secure environment for all participants.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-6 p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center" style={{ backgroundColor: colors.primary.navy }}>
                  <FaUsers className="text-2xl text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: colors.primary.navy }}>Nationwide Network</h3>
                <p className="text-gray-600 leading-relaxed">
                  With 17 affiliated clubs across Sri Lanka, we provide accessible training and competition 
                  opportunities throughout the country.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <ImageGalleryScroll />

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join the NSSF Family</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Be part of Sri Lanka's premier shooting sports federation. Whether you're a beginner or an experienced shooter, 
            NSSF provides the platform, training, and support to achieve your goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
              style={{ backgroundColor: colors.primary.yellow, color: colors.primary.navy }}
            >
              Become a Member
            </button>
            <button
              className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:shadow-xl hover:scale-105 border-2 border-white text-white hover:bg-white"
              style={{ '&:hover': { color: colors.primary.navy } }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}