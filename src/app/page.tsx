import { IMAGES } from "@/config/images";
import { FaBolt, FaCameraRetro, FaHeadset, FaPenNib, FaTools } from "react-icons/fa";
import CTASection from "./components/CTASection";
import FeatureGrid from "./components/FeatureGrid";
import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import SectionHeader from "./components/SectionHeader";
import TeamGrid from "./components/TeamGrid";
import TestimonialCarousel from "./components/TestimonialCarousel";

export default function Home() {
  const features = [
    {
      id: "professional",
      icon: <FaCameraRetro className="text-3xl sm:text-4xl md:text-5xl text-[#002B7F]" />,
      title: "Professional Quality",
      description: "Expert expertise",
    },
    {
      id: "turnaround",
      icon: <FaBolt className="text-3xl sm:text-4xl md:text-5xl text-[#002B7F]" />,
      title: "Fast Turnaround",
      description: "Quick delivery",
    },
    {
      id: "support",
      icon: <FaHeadset className="text-3xl sm:text-4xl md:text-5xl text-[#002B7F]" />,
      title: "Great Support",
      description: "24/7 availability",
    },
    {
      id: "equipment",
      icon: <FaTools className="text-3xl sm:text-4xl md:text-5xl text-[#002B7F]" />,
      title: "Equipment",
      description: "State-of-art",
    },
    {
      id: "editing",
      icon: <FaPenNib className="text-3xl sm:text-4xl md:text-5xl text-[#002B7F]" />,
      title: "Professional Editing",
      description: "Premium finish",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        subtitle="SHOOTING COMPETITION"
        title="Magam Shooters Championship 2025"
        description="Welcome to Sri Lanka's premier shooting sports event! Compete in pistol, rifle, and shotgun disciplines. Challenge your accuracy and speed, and join a community of passionate marksmen. Register now to secure your spot!"
        primaryButtonText="Register Now"
        primaryButtonHref="/register"
        secondaryButtonText="View Rules"
        secondaryButtonHref="/rules"
        backgroundImages={[
          IMAGES.HERO_GOLF_1,
          IMAGES.HERO_GOLF_2,
          IMAGES.HERO_GOLF_3
        ]}
      ></HeroSection>

      {/* Features Section */}
      <Features features={features} />
      {/* The Latest Photos Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="The Latest Photos"
            subtitle="Amazing Photoreportage"
            alignment="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {/* Photo 1 */}
            <div className="relative overflow-hidden shadow-md hover:shadow-xl transition duration-300 group">
              <img
                src={IMAGES.GALLERY_1}
                alt="Golf club and ball"
                className="w-full h-40 md:h-48 object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Photo 2 */}
            <div className="relative overflow-hidden shadow-md hover:shadow-xl transition duration-300 group">
              <img
                src={IMAGES.GALLERY_2}
                alt="Golf shoe and ball"
                className="w-full h-40 md:h-48 object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Photo 3 */}
            <div className="relative overflow-hidden shadow-md hover:shadow-xl transition duration-300 group">
              <img
                src={IMAGES.GALLERY_3}
                alt="Golfers on field"
                className="w-full h-40 md:h-48 object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Golf Field Review Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
            <div>
              <SectionHeader
                title="Golf Field Review"
                subtitle="Unique Construction"
                alignment="left"
              />
              <p className="text-gray-900 text-base leading-relaxed mb-8 uppercase tracking-wide text-sm">
                Extensive upgrades and thorough maintenance have made our course a modern comfortable place for trainings
              </p>

              {/* Features List */}
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 border-2 border-[#002B7F] flex-shrink-0 mt-0.5"></div>
                  <p className="text-gray-900 text-sm">No daily water usage</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 border-2 border-[#002B7F] flex-shrink-0 mt-0.5"></div>
                  <p className="text-gray-900 text-sm">Not affected by freezing (weather</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 border-2 border-[#002B7F] flex-shrink-0 mt-0.5"></div>
                  <p className="text-gray-900 text-sm">3 Distinct tennis court surface speed-of-play options</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 border-2 border-[#002B7F] flex-shrink-0 mt-0.5"></div>
                  <p className="text-gray-900 text-sm">Adjustable court speeds that are great for serves</p>
                </div>
              </div>

              {/* Learn More Button */}
              <button className="bg-[#002B7F] hover:bg-[#001A4D] text-white px-8 py-3 font-semibold uppercase text-sm tracking-wider transition duration-300">
                LEARN MORE
              </button>
            </div>

            {/* Right Image */}
            <div className="relative h-80 md:h-96 lg:h-full">
              <img
                src={IMAGES.FEATURE_LARGE_1}
                alt="Golf field"
                className="w-full h-full object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <TestimonialCarousel />

      {/* Featured Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Why Choose Us?"
            alignment="center"
          />
          
          <FeatureGrid
            features={[
              {
                icon: "📸",
                title: "Professional Quality",
                description: "State-of-the-art equipment and professional expertise to deliver exceptional results."
              },
              {
                icon: "⚡",
                title: "Fast Turnaround",
                description: "Quick delivery without compromising on quality. Your project is our priority."
              },
              {
                icon: "💬",
                title: "Great Support",
                description: "Dedicated customer service team ready to help you at every step."
              }
            ]}
            columns={3}
          />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Get Started?"
        description="Contact us today to discuss your project and learn how we can help."
        primaryButton={{
          text: "Contact Us Now",
          href: "/contact"
        }}
      />

      {/* Club Membership Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Club Membership"
            subtitle="Perfect for every need"
            alignment="center"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Starter Plan */}
            <div className="bg-white overflow-hidden shadow-md hover:shadow-xl transition duration-300">
              <div className="bg-slate-900 text-white py-3 px-4 text-center font-bold text-sm uppercase tracking-wider">
                Starter
              </div>
              <div className="p-8">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-[#002B7F]">$250</span>
                  <span className="text-gray-600 text-sm">/mo</span>
                </div>
                <p className="text-gray-900 text-sm text-center mb-8 leading-relaxed">
                  Perfect for beginners looking to enjoy golf and access to basic club facilities and training.
                </p>
                <button className="w-full bg-[#002B7F] hover:bg-[#001A4D] text-white font-bold py-2 px-4 transition duration-300 uppercase text-sm tracking-wider">
                  Choose Plan
                </button>
              </div>
            </div>

            {/* Individual Plan */}
            <div className="bg-white overflow-hidden shadow-md hover:shadow-xl transition duration-300">
              <div className="bg-slate-900 text-white py-3 px-4 text-center font-bold text-sm uppercase tracking-wider">
                Individual
              </div>
              <div className="p-8">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-[#002B7F]">$350</span>
                  <span className="text-gray-600 text-sm">/mo</span>
                </div>
                <p className="text-gray-900 text-sm text-center mb-8 leading-relaxed">
                  Ideal for individual members with priority booking and extended facility access all week.
                </p>
                <button className="w-full bg-[#002B7F] hover:bg-[#001A4D] text-white font-bold py-2 px-4 transition duration-300 uppercase text-sm tracking-wider">
                  Choose Plan
                </button>
              </div>
            </div>

            {/* Family Plan 1 */}
            <div className="bg-white overflow-hidden shadow-md hover:shadow-xl transition duration-300">
              <div className="bg-slate-900 text-white py-3 px-4 text-center font-bold text-sm uppercase tracking-wider">
                Family
              </div>
              <div className="p-8">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-[#002B7F]">$450</span>
                  <span className="text-gray-600 text-sm">/mo</span>
                </div>
                <p className="text-gray-900 text-sm text-center mb-8 leading-relaxed">
                  Best for families with up to 4 members getting premium access and coaching sessions.
                </p>
                <button className="w-full bg-[#002B7F] hover:bg-[#001A4D] text-white font-bold py-2 px-4 transition duration-300 uppercase text-sm tracking-wider">
                  Choose Plan
                </button>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-white overflow-hidden shadow-md hover:shadow-xl transition duration-300">
              <div className="bg-slate-900 text-white py-3 px-4 text-center font-bold text-sm uppercase tracking-wider">
                Premium
              </div>
              <div className="p-8">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-[#002B7F]">$450</span>
                  <span className="text-gray-600 text-sm">/mo</span>
                </div>
                <p className="text-gray-900 text-sm text-center mb-8 leading-relaxed">
                  Ultimate membership with all benefits including private lessons and VIP event access.
                </p>
                <button className="w-full bg-[#002B7F] hover:bg-[#001A4D] text-white font-bold py-2 px-4 transition duration-300 uppercase text-sm tracking-wider">
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Club Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Our Club Team"
            subtitle="Meet our experts"
            description="Our club is honored to work with the country's league. Meet coaches that can improve your ability level."
            alignment="center"
          />

          <TeamGrid
            members={[
              {
                name: "Dale Adams",
                role: "Head Golf Coach",
                image: IMAGES.PERSON_MALE_1
              },
              {
                name: "Logan James",
                role: "Training Director",
                image: IMAGES.PERSON_MALE_2
              },
              {
                name: "Tracy Scott",
                role: "Fitness Coach",
                image: IMAGES.PERSON_FEMALE_1
              }
            ]}
            showBio={false}
          />

          <div className="text-center">
            <button className="bg-[#002B7F] hover:bg-[#001A4D] text-white font-bold py-3 px-8 transition duration-300 uppercase text-sm tracking-wider">
              View All Team
            </button>
          </div>
        </div>
      </section>

      {/* Video Tips & Coaching Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Video Golf Tips */}
            <div className="bg-gradient-to-br from-[#4A5EBF] to-[#002B7F] overflow-hidden shadow-lg">
              <img
                src={IMAGES.VIDEO_LARGE_1}
                alt="Golf video tips"
                className="w-full h-80 object-cover"
              />
              <div className="p-8 text-white">
                <h3 className="text-2xl font-bold mb-3">Video Golf Tips</h3>
                <p className="text-white/90 text-sm mb-6">
                  Golf videos for Beginners - Learn the fundamentals of golf and improve your game with our comprehensive video tutorials.
                </p>
                <button className="bg-white text-[#002B7F] hover:bg-gray-100 font-bold py-2 px-6 transition duration-300 uppercase text-sm tracking-wider">
                  View Videos
                </button>
              </div>
            </div>

            {/* Coaching & Tips */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Coaching & Tips</h3>
              
              <div className="grid grid-cols-2 gap-6">
                {/* Tip 1 */}
                <div className="bg-white overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                  <img
                    src={IMAGES.TIP_SMALL_1}
                    alt="Swing technique"
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 text-sm mb-2">Golf Swing Tips for Better Performance</h4>
                    <p className="text-gray-900 text-xs leading-relaxed">
                      Learn how to improve your swing technique with expert coaching.
                    </p>
                  </div>
                </div>

                {/* Tip 2 */}
                <div className="bg-white overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                  <img
                    src={IMAGES.TIP_SMALL_2}
                    alt="Grip and stance"
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 text-sm mb-2">Perfect Grip and Stance Guide</h4>
                    <p className="text-gray-900 text-xs leading-relaxed">
                      Master the fundamentals with our comprehensive stance guide.
                    </p>
                  </div>
                </div>

                {/* Tip 3 */}
                <div className="bg-white overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                  <img
                    src={IMAGES.TIP_SMALL_3}
                    alt="Course strategy"
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 text-sm mb-2">Course Strategy Tips for Success</h4>
                    <p className="text-gray-900 text-xs leading-relaxed">
                      Strategic tips to help you navigate the course efficiently.
                    </p>
                  </div>
                </div>

                {/* Tip 4 */}
                <div className="bg-white overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                  <img
                    src={IMAGES.TIP_SMALL_4}
                    alt="Mental game"
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 text-sm mb-2">Mental Game and Confidence Building</h4>
                    <p className="text-gray-900 text-xs leading-relaxed">
                      Develop mental toughness and confidence on the course.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
