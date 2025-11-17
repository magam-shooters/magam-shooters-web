import { IMAGES } from "@/config/images";
import Link from "next/link";
import { MdBarChart, MdBuild, MdCheckCircle, MdDescription, MdEmojiEvents, MdGroups, MdSecurity, MdSportsScore } from "react-icons/md";
import CTASection from "../components/CTASection";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";

export default function Clubs() {
  const membershipPlans = [
    {
      id: "beginner",
      name: "Beginner",
      price: "LKR 25,000",
      period: "/year",
      description: "Perfect for newcomers to shooting sports",
      features: [
        "Basic training sessions (12 hours/month)",
        "Range access during off-peak hours",
        "Safety certification course",
        "Equipment rental discounts",
        "Monthly club events access",
        "Beginner-friendly competitions"
      ],
      popular: false,
      buttonText: "Start Your Journey"
    },
    {
      id: "standard",
      name: "Standard",
      price: "LKR 45,000",
      period: "/year",
      description: "Ideal for regular shooters and enthusiasts",
      features: [
        "Unlimited range access",
        "Advanced training sessions (20 hours/month)",
        "Personal equipment storage",
        "All club events and competitions",
        "Guest privileges (2 guests/month)",
        "Equipment maintenance support",
        "Coaching consultation sessions"
      ],
      popular: true,
      buttonText: "Most Popular Choice"
    },
    {
      id: "premium",
      name: "Premium",
      price: "LKR 75,000",
      period: "/year",
      description: "For serious competitors and professionals",
      features: [
        "24/7 range access with private lanes",
        "Unlimited personal coaching",
        "Competition entry fee discounts",
        "Priority event registration",
        "Guest privileges (unlimited)",
        "Equipment purchase discounts",
        "Performance analytics and tracking",
        "Exclusive premium member events"
      ],
      popular: false,
      buttonText: "Elite Experience"
    },
    {
      id: "family",
      name: "Family",
      price: "LKR 85,000",
      period: "/year",
      description: "Perfect for shooting sports families",
      features: [
        "Up to 4 family members included",
        "Youth training programs",
        "Family-friendly competition entries",
        "Weekend range access priority",
        "Family events and activities",
        "Equipment sharing privileges",
        "Parent-child coaching sessions",
        "Special family rates for events"
      ],
      popular: false,
      buttonText: "Family Package"
    }
  ];

  const clubFacilities = [
    {
      id: "indoor-range",
      title: "Indoor Shooting Range",
      description: "Climate-controlled 25m indoor range with 20 lanes featuring electronic targeting systems",
      features: ["Electronic targets", "Climate control", "LED lighting", "Sound dampening"],
      image: IMAGES.FEATURE_LARGE_1
    },
    {
      id: "outdoor-range",
      title: "Outdoor Range Complex",
      description: "50m outdoor range for rifle competitions with natural wind conditions",
      features: ["50m distance", "Natural conditions", "Competition standard", "Spectator seating"],
      image: IMAGES.FEATURE_LARGE_2
    },
    {
      id: "training-center",
      title: "Training Center",
      description: "Modern training facilities with simulation systems and analysis equipment",
      features: ["Simulation systems", "Performance analysis", "Video replay", "Coaching rooms"],
      image: IMAGES.HERO_GOLF_1
    }
  ];

  const benefits = [
    {
      icon: <MdSportsScore className="mx-auto text-4xl text-red-600" />,
      title: "Professional Training",
      description: "Access to certified coaches and structured training programs for all skill levels"
    },
    {
      icon: <MdEmojiEvents className="mx-auto text-4xl text-yellow-500" />,
      title: "Competition Access",
      description: "Participate in local, national, and international shooting competitions"
    },
    {
      icon: <MdGroups className="mx-auto text-4xl text-blue-600" />,
      title: "Community Network",
      description: "Connect with fellow shooting enthusiasts and build lasting friendships"
    },
    {
      icon: <MdBuild className="mx-auto text-4xl text-green-600" />,
      title: "Equipment Support",
      description: "Professional equipment maintenance, rental, and purchasing assistance"
    },
    {
      icon: <MdBarChart className="mx-auto text-4xl text-purple-600" />,
      title: "Progress Tracking",
      description: "Advanced scoring systems to monitor and improve your shooting performance"
    },
    {
      icon: <MdSecurity className="mx-auto text-4xl text-gray-700" />,
      title: "Safety First",
      description: "Comprehensive safety training and strict protocols ensure secure environment"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <PageHero
        title="Club Membership"
        description="Join Sri Lanka's premier shooting sports community and elevate your marksmanship skills"
      />

      {/* Membership Plans Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Membership Plans"
            subtitle="Choose Your Path to Excellence"
            description="Select the membership that best fits your shooting goals and experience level"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {membershipPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white border-2 shadow-lg hover:shadow-xl transition duration-300 p-6 ${
                  plan.popular 
                    ? 'border-[#00AEEF] ring-4 ring-[#B3E9FC]' 
                    : 'border-gray-200 hover:border-[#00AEEF]'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-[#00AEEF] text-white px-4 py-1 text-sm font-semibold uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-[#002B7F] mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold" style={{ color: '#00AEEF' }}>{plan.price}</span>
                      <span className="text-gray-900">{plan.period}</span>
                    </div>
                    <p className="text-gray-900 text-sm">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span className="text-gray-900 text-sm">{feature}</span>
                      </li>
                    ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full text-center py-3 px-4 font-semibold transition duration-300 ${
                    plan.popular
                      ? 'bg-[#00AEEF] text-white hover:bg-[#0096C7]'
                      : 'border border-[#00AEEF] text-[#00AEEF] hover:bg-[#00AEEF] hover:text-white'
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Club Facilities Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#E6F7FC] to-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="World-Class Facilities"
            subtitle="State-of-the-Art Infrastructure"
          />

          <div className="space-y-12">
            {clubFacilities.map((facility, index) => (
              <div 
                key={facility.id} 
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#002B7F] mb-4">{facility.title}</h3>
                  <p className="text-gray-900 text-lg leading-relaxed mb-6">{facility.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {facility.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <span className="text-[#00AEEF]">•</span>
                          <span className="text-gray-900 text-sm">{feature}</span>
                        </div>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-64 md:h-80 lg:h-96 object-cover shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Benefits Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Membership Benefits"
            subtitle="What You'll Gain"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
                <div key={benefit.title} className="text-center">
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-[#002B7F] mb-3">{benefit.title}</h3>
                  <p className="text-gray-900 leading-relaxed">{benefit.description}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Process Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#E6F7FC] to-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="How to Join"
            subtitle="Simple Membership Process"
          />

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
                <div className="w-16 h-16 bg-[#00AEEF] text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold text-[#002B7F] mb-2">Apply</h3>
                <p className="text-gray-900 text-sm">Submit your membership application with required documents</p>
            </div>

            <div className="text-center">
                <div className="w-16 h-16 bg-[#00AEEF] text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold text-[#002B7F] mb-2">Interview</h3>
                <p className="text-gray-900 text-sm">Attend a brief interview and facility orientation session</p>
            </div>

            <div className="text-center">
                <div className="w-16 h-16 bg-[#00AEEF] text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold text-[#002B7F] mb-2">Training</h3>
                <p className="text-gray-900 text-sm">Complete mandatory safety training and assessment</p>
            </div>

            <div className="text-center">
                <div className="w-16 h-16 bg-[#00AEEF] text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  4
                </div>
                <h3 className="font-semibold text-[#002B7F] mb-2">Welcome</h3>
                <p className="text-gray-900 text-sm">Receive your membership card and start shooting!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Membership Requirements"
            subtitle="What You Need to Know"
          />

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6">
                <h3 className="flex items-center gap-2 text-xl font-bold mb-4" style={{ color: '#002B7F' }}>
                  <MdDescription className="text-2xl" style={{ color: '#002B7F' }} /> Required Documents
                </h3>
                <ul className="space-y-2 text-gray-900">
                <li className="flex items-center gap-2"><MdCheckCircle className="text-green-500" /> Valid National ID or Passport</li>
                <li className="flex items-center gap-2"><MdCheckCircle className="text-green-500" /> Police clearance certificate</li>
                <li className="flex items-center gap-2"><MdCheckCircle className="text-green-500" /> Medical fitness certificate</li>
                <li className="flex items-center gap-2"><MdCheckCircle className="text-green-500" /> 2 passport-size photographs</li>
                <li className="flex items-center gap-2"><MdCheckCircle className="text-green-500" /> Completed application form</li>
                <li className="flex items-center gap-2"><MdCheckCircle className="text-green-500" /> References from 2 current members (if applicable)</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6">
                <h3 className="flex items-center gap-2 text-xl font-bold mb-4" style={{ color: '#002B7F' }}>
                  <MdCheckCircle className="text-2xl" style={{ color: '#002B7F' }} /> Eligibility Criteria
                </h3>
                <ul className="space-y-2 text-gray-900">
                <li className="flex items-center gap-2"><MdCheckCircle className="text-green-500" /> Minimum age: 16 years (with parent consent)</li>
                <li className="flex items-center gap-2"><MdCheckCircle className="text-green-500" /> Clean criminal record</li>
                <li className="flex items-center gap-2"><MdCheckCircle className="text-green-500" /> Physical and mental fitness</li>
                <li className="flex items-center gap-2"><MdCheckCircle className="text-green-500" /> Commitment to safety protocols</li>
                <li className="flex items-center gap-2"><MdCheckCircle className="text-green-500" /> Willingness to complete training programs</li>
                <li className="flex items-center gap-2"><MdCheckCircle className="text-green-500" /> Respect for club rules and regulations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Join Magam Shooters?"
        description="Take the first step towards excellence in shooting sports. Join our community today."
        primaryButton={{ text: "Apply for Membership", href: "/contact" }}
        secondaryButton={{ text: "Schedule a Visit", href: "/contact", style: "outline" }}
      />
    </div>
  );
}