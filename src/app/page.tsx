import { IMAGES } from "@/config/images";
import { FaAward, FaBullseye, FaMedal, FaTrophy, FaUsers } from "react-icons/fa";
import AffiliatedClubsCarousel from "./components/AffiliatedClubsCarousel";
import CouncilMembers from "./components/CouncilMembers";
import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import ImageGalleryScroll from "./components/ImageGalleryScroll";
import MatchesCalendar from "./components/MatchesCalendar";

export default function Home() {
  const features = [
    {
      id: "excellence",
      icon: <FaTrophy className="text-3xl sm:text-4xl md:text-5xl text-[#002B7F]" />,
      title: "Excellence in Sports",
      description: "Promoting shooting sports excellence",
    },
    {
      id: "development",
      icon: <FaUsers className="text-3xl sm:text-4xl md:text-5xl text-[#002B7F]" />,
      title: "Athlete Development",
      description: "Nurturing future champions",
    },
    {
      id: "precision",
      icon: <FaBullseye className="text-3xl sm:text-4xl md:text-5xl text-[#002B7F]" />,
      title: "Precision Training",
      description: "World-class coaching",
    },
    {
      id: "facilities",
      icon: <FaMedal className="text-3xl sm:text-4xl md:text-5xl text-[#002B7F]" />,
      title: "Modern Facilities",
      description: "State-of-the-art ranges",
    },
    {
      id: "international",
      icon: <FaAward className="text-3xl sm:text-4xl md:text-5xl text-[#002B7F]" />,
      title: "International Standards",
      description: "Olympic-grade competitions",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        subtitle="NATIONAL SHOOTING SPORTS FEDERATION"
        title="NSSF Sri Lanka"
        description="The National Shooting Sports Federation of Sri Lanka is committed to developing and promoting shooting sports at all levels. We provide world-class training facilities, organize national and international competitions, and nurture athletes to represent Sri Lanka on the global stage."
        primaryButtonText="View Events"
        primaryButtonHref="/events"
        secondaryButtonText="Join Federation"
        secondaryButtonHref="/clubs"
        backgroundImages={[
          IMAGES.HERO_GOLF_1,
          IMAGES.HERO_GOLF_2,
          IMAGES.HERO_GOLF_3
        ]}
      ></HeroSection>

      {/* Features Section */}
      <Features features={features} />

      {/* Image Gallery Scroll */}
      <ImageGalleryScroll />

      {/* Affiliated Clubs Carousel */}
      <AffiliatedClubsCarousel />

      {/* Matches Calendar */}
      <MatchesCalendar />

      {/* Council Members */}
      <CouncilMembers />

      {/* Training Programs & Success Stories Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#002B7F]">
              Our Training Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              World-class training programs designed to develop champions at every level
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Beginner Training */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-[#002B7F] flex items-center justify-center">
                <FaBullseye className="text-6xl text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#002B7F] mb-3">Beginner Programs</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Foundation training in safety, fundamentals, and basic marksmanship for newcomers to shooting sports.
                </p>
                <ul className="space-y-2 text-sm text-gray-700 mb-4">
                  <li className="flex items-center gap-2">
                    <span className="text-[#002B7F]">✓</span> Safety certification
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#002B7F]">✓</span> Basic shooting techniques
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#002B7F]">✓</span> Equipment introduction
                  </li>
                </ul>
                <button className="w-full bg-[#002B7F] hover:bg-[#001B5F] text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
                  Learn More
                </button>
              </div>
            </div>

            {/* Intermediate Training */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-[#002B7F] flex items-center justify-center">
                <FaMedal className="text-6xl text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#002B7F] mb-3">Intermediate Programs</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Advanced techniques, competitive preparation, and performance optimization for developing athletes.
                </p>
                <ul className="space-y-2 text-sm text-gray-700 mb-4">
                  <li className="flex items-center gap-2">
                    <span className="text-[#002B7F]">✓</span> Competition training
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#002B7F]">✓</span> Mental conditioning
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#002B7F]">✓</span> Performance analysis
                  </li>
                </ul>
                <button className="w-full bg-[#002B7F] hover:bg-[#001B5F] text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
                  Learn More
                </button>
              </div>
            </div>

            {/* Elite Training */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-[#002B7F] flex items-center justify-center">
                <FaTrophy className="text-6xl text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#002B7F] mb-3">Elite Programs</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Olympic-level training, international competition preparation, and personalized coaching for top athletes.
                </p>
                <ul className="space-y-2 text-sm text-gray-700 mb-4">
                  <li className="flex items-center gap-2">
                    <span className="text-[#002B7F]">✓</span> Olympic preparation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#002B7F]">✓</span> Personal coaching
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#002B7F]">✓</span> International events
                  </li>
                </ul>
                <button className="w-full bg-[#002B7F] hover:bg-[#001B5F] text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Success Stories */}
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-[#002B7F] mb-4">Success Stories</h3>
              <p className="text-gray-600">Celebrating our athletes' achievements on national and international stages</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-20 h-20 bg-[#002B7F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaTrophy className="text-4xl text-white" />
                </div>
                <h4 className="text-4xl font-bold text-[#002B7F] mb-2">25+</h4>
                <p className="text-gray-600 font-semibold">International Medals</p>
                <p className="text-sm text-gray-500 mt-2">Asian & Commonwealth Games</p>
              </div>
              <div>
                <div className="w-20 h-20 bg-[#002B7F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaAward className="text-4xl text-white" />
                </div>
                <h4 className="text-4xl font-bold text-[#002B7F] mb-2">75+</h4>
                <p className="text-gray-600 font-semibold">National Champions</p>
                <p className="text-sm text-gray-500 mt-2">Across all disciplines</p>
              </div>
              <div>
                <div className="w-20 h-20 bg-[#002B7F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUsers className="text-4xl text-white" />
                </div>
                <h4 className="text-4xl font-bold text-[#002B7F] mb-2">1000+</h4>
                <p className="text-gray-600 font-semibold">Athletes Trained</p>
                <p className="text-sm text-gray-500 mt-2">From grassroots to elite</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
