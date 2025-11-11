import { COLORS } from "@/config/designTokens";
import { IMAGES } from "@/config/images";
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
      icon: "📸",
      title: "Professional Quality",
      description: "Expert expertise",
    },
    {
      id: "turnaround",
      icon: "⚡",
      title: "Fast Turnaround",
      description: "Quick delivery",
    },
    {
      id: "support",
      icon: "💬",
      title: "Great Support",
      description: "24/7 availability",
    },
    {
      id: "equipment",
      icon: "🎥",
      title: "Equipment",
      description: "State-of-art",
    },
    {
      id: "editing",
      icon: "✏️",
      title: "Professional Editing",
      description: "Premium finish",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        subtitle="ENJOY THE ULTIMATE"
        title="Photography & Video Services"
        description="Our legendary photography and videography services are a classic gem that caters exclusively to our members and valued clients."
        primaryButtonText="Our Services"
        primaryButtonHref="/services"
        secondaryButtonText="Book Online Now"
        secondaryButtonHref="/contact"
        backgroundImages={[
          IMAGES.HERO_GOLF_1,
          IMAGES.HERO_GOLF_2,
          IMAGES.HERO_GOLF_3
        ]}
      ></HeroSection>

      {/* Features Section */}
      <Features features={features} />

      {/* Next Matches & Match Review Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Next Matches */}
            <div className={`bg-gradient-to-b from-${COLORS.PRIMARY_LIGHT} to-${COLORS.PRIMARY_MAIN} text-white p-8 md:p-12`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Next Matches</h2>
              <p className="text-white/80 text-sm md:text-base mb-8 uppercase tracking-wide">
                Most golf matches are played on Sundays from 10 AM to approximately 2 PM
              </p>

              <div className="space-y-6">
                {/* Match 1 */}
                <div className="border-l-4 border-white/30 pl-4">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-2xl font-bold">03</span>
                    <span className="text-sm uppercase tracking-widest font-semibold">MAY</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">McCladrey Classic</h3>
                  <p className="text-white/80 text-sm">10:00. Kevin Gonzales - Susan Rogers</p>
                </div>

                {/* Match 2 */}
                <div className="border-l-4 border-white/30 pl-4">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-2xl font-bold">07</span>
                    <span className="text-sm uppercase tracking-widest font-semibold">MAY</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">Barracuda Championship</h3>
                  <p className="text-white/80 text-sm">10:00. Susan Rogers - Robert Ross</p>
                </div>

                {/* Match 3 */}
                <div className="border-l-4 border-white/30 pl-4">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-2xl font-bold">20</span>
                    <span className="text-sm uppercase tracking-widest font-semibold">MAY</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">WGT Virtual Tour</h3>
                  <p className="text-white/80 text-sm">10:00. Kevin Gonzales - Susan Rogers</p>
                </div>

                {/* Match 4 */}
                <div className="border-l-4 border-white/30 pl-4">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-2xl font-bold">28</span>
                    <span className="text-sm uppercase tracking-widest font-semibold">MAY</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">Hero World Challenge</h3>
                  <p className="text-white/80 text-sm">10:00. Robert Ross - Sharon Carter</p>
                </div>
              </div>
            </div>

            {/* Match Review */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Match Review</h2>
                <div className={`w-12 h-1 bg-${COLORS.PRIMARY_MAIN}`}></div>
                <p className={`text-${COLORS.TEXT_SECONDARY} text-sm md:text-base mt-4 uppercase tracking-widest`}>
                  WE ARE VERY EXCITED TO GO OVER THIS EXCEPTIONAL TOURNAMENT THAT LITERALLY LEFT THE PLAYERS AND THE CROWD BREATHLESS!
                </p>
              </div>

              {/* Match Cards */}
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Card 1 - Kevin Gonzales */}
                <div className="bg-white overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                  <div className="relative">
                    <img
                      src={IMAGES.PLAYER_1}
                      alt="Kevin Gonzales"
                      className="w-full h-48 object-cover"
                    />
                    <div className={`absolute top-3 right-3 bg-${COLORS.PRIMARY_MAIN} text-white px-3 py-1 text-sm font-semibold`}>
                      MX
                    </div>
                  </div>
                  <div className="p-4">
                    <p className={`text-${COLORS.PRIMARY_MAIN} text-sm font-semibold mb-2`}>03 May 10:00</p>
                    <p className="text-2xl font-bold text-gray-900 mb-2">72-69</p>
                    <p className={`text-${COLORS.TEXT_SECONDARY} text-xs uppercase tracking-widest font-semibold`}>
                      Sea Island Golf Club - Seaside Course
                    </p>
                  </div>
                  <div className={`bg-${COLORS.BG_DARK} text-white py-2 px-4 text-center font-semibold text-sm`}>
                    Kevin Gonzales
                  </div>
                </div>

                {/* Card 2 - Susan Rogers */}
                <div className="bg-white overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                  <div className="relative">
                    <img
                      src={IMAGES.PLAYER_2}
                      alt="Susan Rogers"
                      className="w-full h-48 object-cover"
                    />
                    <div className={`absolute top-3 right-3 bg-${COLORS.PRIMARY_MAIN} text-white px-3 py-1 text-sm font-semibold`}>
                      CA
                    </div>
                  </div>
                  <div className="p-4">
                    <p className={`text-${COLORS.PRIMARY_MAIN} text-sm font-semibold mb-2`}>03 May 10:00</p>
                    <p className="text-2xl font-bold text-gray-900 mb-2">72-69</p>
                    <p className={`text-${COLORS.TEXT_SECONDARY} text-xs uppercase tracking-widest font-semibold`}>
                      Sea Island Golf Club - Seaside Course
                    </p>
                  </div>
                  <div className={`bg-${COLORS.BG_DARK} text-white py-2 px-4 text-center font-semibold text-sm`}>
                    Susan Rogers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Latest Photos Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="The Latest Photos"
            subtitle="Amazing Photoreportage"
            alignment="center"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
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

            {/* Photo 4 */}
            <div className="relative overflow-hidden shadow-md hover:shadow-xl transition duration-300 group">
              <img
                src={IMAGES.GALLERY_4}
                alt="Golf players"
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
              <p className="text-gray-600 text-base leading-relaxed mb-8 uppercase tracking-wide text-sm">
                Extensive upgrades and thorough maintenance have made our course a modern comfortable place for trainings
              </p>

              {/* Features List */}
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <div className={`w-5 h-5 border-2 border-${COLORS.PRIMARY_MAIN} flex-shrink-0 mt-0.5`}></div>
                  <p className="text-gray-700 text-sm">No daily water usage</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className={`w-5 h-5 border-2 border-${COLORS.PRIMARY_MAIN} flex-shrink-0 mt-0.5`}></div>
                  <p className="text-gray-700 text-sm">Not affected by freezing (weather</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className={`w-5 h-5 border-2 border-${COLORS.PRIMARY_MAIN} flex-shrink-0 mt-0.5`}></div>
                  <p className="text-gray-700 text-sm">3 Distinct tennis court surface speed-of-play options</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className={`w-5 h-5 border-2 border-${COLORS.PRIMARY_MAIN} flex-shrink-0 mt-0.5`}></div>
                  <p className="text-gray-700 text-sm">Adjustable court speeds that are great for serves</p>
                </div>
              </div>

              {/* Learn More Button */}
              <button className={`bg-${COLORS.PRIMARY_MAIN} hover:bg-${COLORS.PRIMARY_DARK} text-white px-8 py-3 font-semibold uppercase text-sm tracking-wider transition duration-300`}>
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

      {/* Promotional Banner Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-${COLORS.PRIMARY_MAIN} to-${COLORS.PRIMARY_DARK}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white relative z-10">
              <div className={`inline-block bg-${COLORS.PRIMARY_DARK} text-white px-6 py-2 mb-6 font-semibold uppercase text-sm tracking-wider`}>
                OFF
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Extra 25% Off
                <br />
                All Selected Items
              </h2>
              
              <p className={`text-${COLORS.PRIMARY_LIGHT} text-lg font-semibold mb-4`}>3 days Only!</p>
              
              <p className="text-white/80 text-base mb-8">
                Enter Code <span className="font-bold text-blue-200">EXTRAVALUE</span> at checkout
                <br />
                for additional 3 days discount
              </p>

              <button className={`bg-${COLORS.PRIMARY_MAIN} hover:bg-${COLORS.PRIMARY_DARK} text-white font-bold py-3 px-8 transition duration-300 uppercase tracking-wider`}>
                Shop Now
              </button>
            </div>

            {/* Right Image */}
            <div className="relative h-80 md:h-96">
              <img
                src={IMAGES.FEATURE_LARGE_2}
                alt="Golf equipment"
                className="w-full h-full object-cover shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

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
              <div className={`bg-${COLORS.BG_DARK} text-white py-3 px-4 text-center font-bold text-sm uppercase tracking-wider`}>
                Starter
              </div>
              <div className="p-8">
                <div className="text-center mb-6">
                  <span className={`text-4xl font-bold text-${COLORS.PRIMARY_MAIN}`}>$250</span>
                  <span className="text-gray-600 text-sm">/mo</span>
                </div>
                <p className="text-gray-600 text-sm text-center mb-8 leading-relaxed">
                  Perfect for beginners looking to enjoy golf and access to basic club facilities and training.
                </p>
                <button className={`w-full bg-${COLORS.PRIMARY_MAIN} hover:bg-${COLORS.PRIMARY_DARK} text-white font-bold py-2 px-4 transition duration-300 uppercase text-sm tracking-wider`}>
                  Choose Plan
                </button>
              </div>
            </div>

            {/* Individual Plan */}
            <div className="bg-white overflow-hidden shadow-md hover:shadow-xl transition duration-300">
              <div className={`bg-${COLORS.BG_DARK} text-white py-3 px-4 text-center font-bold text-sm uppercase tracking-wider`}>
                Individual
              </div>
              <div className="p-8">
                <div className="text-center mb-6">
                  <span className={`text-4xl font-bold text-${COLORS.PRIMARY_MAIN}`}>$350</span>
                  <span className="text-gray-600 text-sm">/mo</span>
                </div>
                <p className="text-gray-600 text-sm text-center mb-8 leading-relaxed">
                  Ideal for individual members with priority booking and extended facility access all week.
                </p>
                <button className={`w-full bg-${COLORS.PRIMARY_MAIN} hover:bg-${COLORS.PRIMARY_DARK} text-white font-bold py-2 px-4 transition duration-300 uppercase text-sm tracking-wider`}>
                  Choose Plan
                </button>
              </div>
            </div>

            {/* Family Plan 1 */}
            <div className="bg-white overflow-hidden shadow-md hover:shadow-xl transition duration-300">
              <div className={`bg-${COLORS.BG_DARK} text-white py-3 px-4 text-center font-bold text-sm uppercase tracking-wider`}>
                Family
              </div>
              <div className="p-8">
                <div className="text-center mb-6">
                  <span className={`text-4xl font-bold text-${COLORS.PRIMARY_MAIN}`}>$450</span>
                  <span className="text-gray-600 text-sm">/mo</span>
                </div>
                <p className="text-gray-600 text-sm text-center mb-8 leading-relaxed">
                  Best for families with up to 4 members getting premium access and coaching sessions.
                </p>
                <button className={`w-full bg-${COLORS.PRIMARY_MAIN} hover:bg-${COLORS.PRIMARY_DARK} text-white font-bold py-2 px-4 transition duration-300 uppercase text-sm tracking-wider`}>
                  Choose Plan
                </button>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-white overflow-hidden shadow-md hover:shadow-xl transition duration-300">
              <div className={`bg-${COLORS.BG_DARK} text-white py-3 px-4 text-center font-bold text-sm uppercase tracking-wider`}>
                Premium
              </div>
              <div className="p-8">
                <div className="text-center mb-6">
                  <span className={`text-4xl font-bold text-${COLORS.PRIMARY_MAIN}`}>$450</span>
                  <span className="text-gray-600 text-sm">/mo</span>
                </div>
                <p className="text-gray-600 text-sm text-center mb-8 leading-relaxed">
                  Ultimate membership with all benefits including private lessons and VIP event access.
                </p>
                <button className={`w-full bg-${COLORS.PRIMARY_MAIN} hover:bg-${COLORS.PRIMARY_DARK} text-white font-bold py-2 px-4 transition duration-300 uppercase text-sm tracking-wider`}>
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
            <button className={`bg-${COLORS.PRIMARY_MAIN} hover:bg-${COLORS.PRIMARY_DARK} text-white font-bold py-3 px-8 transition duration-300 uppercase text-sm tracking-wider`}>
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
            <div className={`bg-gradient-to-br from-${COLORS.PRIMARY_LIGHT} to-${COLORS.PRIMARY_MAIN} overflow-hidden shadow-lg`}>
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
                <button className={`bg-white text-${COLORS.PRIMARY_MAIN} hover:bg-gray-100 font-bold py-2 px-6 transition duration-300 uppercase text-sm tracking-wider`}>
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
                    <p className="text-gray-600 text-xs leading-relaxed">
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
                    <p className="text-gray-600 text-xs leading-relaxed">
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
                    <p className="text-gray-600 text-xs leading-relaxed">
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
                    <p className="text-gray-600 text-xs leading-relaxed">
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
