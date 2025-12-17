import { colors } from "@/config";
import { IMAGES } from "@/config/images";
import Link from "next/link";
import { FaBullseye, FaChartLine, FaCheckCircle, FaIdCard, FaMedal, FaShieldAlt, FaTools, FaTrophy, FaUsers } from "react-icons/fa";
import PageHero from "../components/PageHero";

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
      icon: FaBullseye,
      color: colors.primary.red,
      title: "Professional Training",
      description: "Access to certified coaches and structured training programs for all skill levels"
    },
    {
      icon: FaTrophy,
      color: colors.primary.yellow,
      title: "Competition Access",
      description: "Participate in local, national, and international shooting competitions"
    },
    {
      icon: FaUsers,
      color: colors.primary.blue,
      title: "Community Network",
      description: "Connect with fellow shooting enthusiasts and build lasting friendships"
    },
    {
      icon: FaTools,
      color: colors.primary.green,
      title: "Equipment Support",
      description: "Professional equipment maintenance, rental, and purchasing assistance"
    },
    {
      icon: FaChartLine,
      color: colors.primary.navy,
      title: "Progress Tracking",
      description: "Advanced scoring systems to monitor and improve your shooting performance"
    },
    {
      icon: FaShieldAlt,
      color: colors.primary.red,
      title: "Safety First",
      description: "Comprehensive safety training and strict protocols ensure secure environment"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <PageHero
        title="Affiliated Clubs"
        description="Join one of our 17 affiliated shooting clubs across Sri Lanka and become part of the NSSF family"
      />

      {/* Membership Plans Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: colors.primary.red }}>
              Choose Your Path
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.primary.navy }}>
              Membership Plans
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select the membership that best fits your shooting goals and experience level
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {membershipPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 ${
                  plan.popular 
                    ? 'ring-2 ring-offset-2' 
                    : 'border border-gray-200'
                }`}
                style={plan.popular ? { ringColor: colors.primary.yellow } : {}}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="px-4 py-1 text-sm font-bold uppercase tracking-wider rounded-full text-white" style={{ backgroundColor: colors.primary.yellow }}>
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-2" style={{ color: colors.primary.navy }}>{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold" style={{ color: colors.primary.red }}>{plan.price}</span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <FaCheckCircle className="mt-0.5 flex-shrink-0" style={{ color: colors.primary.green }} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'text-white hover:shadow-lg'
                      : 'border-2 hover:shadow-lg'
                  }`}
                  style={plan.popular 
                    ? { backgroundColor: colors.primary.navy }
                    : { borderColor: colors.primary.navy, color: colors.primary.navy }
                  }
                >
                  {plan.buttonText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Club Facilities Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: colors.primary.red }}>
              State-of-the-Art Infrastructure
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.primary.navy }}>
              World-Class Facilities
            </h2>
          </div>

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
                  <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: colors.primary.navy }}>{facility.title}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">{facility.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {facility.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <FaCheckCircle style={{ color: colors.primary.green }} />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: colors.primary.red }}>
              What You'll Gain
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.primary.navy }}>
              Membership Benefits
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => {
              const IconComponent = benefit.icon;
              return (
                <div key={benefit.title} className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: benefit.color }}>
                    <IconComponent className="text-3xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: colors.primary.navy }}>{benefit.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Membership Process Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: colors.primary.red }}>
              Simple Process
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.primary.navy }}>
              How to Join
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 rounded-full text-white font-bold text-2xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: colors.primary.red }}>
                  1
                </div>
                <h3 className="font-bold mb-2" style={{ color: colors.primary.navy }}>Apply</h3>
                <p className="text-gray-600 text-sm">Submit your membership application with required documents</p>
            </div>

            <div className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 rounded-full text-white font-bold text-2xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: colors.primary.yellow }}>
                  2
                </div>
                <h3 className="font-bold mb-2" style={{ color: colors.primary.navy }}>Interview</h3>
                <p className="text-gray-600 text-sm">Attend a brief interview and facility orientation session</p>
            </div>

            <div className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 rounded-full text-white font-bold text-2xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: colors.primary.blue }}>
                  3
                </div>
                <h3 className="font-bold mb-2" style={{ color: colors.primary.navy }}>Training</h3>
                <p className="text-gray-600 text-sm">Complete mandatory safety training and assessment</p>
            </div>

            <div className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 rounded-full text-white font-bold text-2xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: colors.primary.green }}>
                  4
                </div>
                <h3 className="font-bold mb-2" style={{ color: colors.primary.navy }}>Welcome</h3>
                <p className="text-gray-600 text-sm">Receive your membership card and start shooting!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: colors.primary.red }}>
              What You Need to Know
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.primary.navy }}>
              Membership Requirements
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: colors.primary.blue }}>
                    <FaIdCard className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: colors.primary.navy }}>Required Documents</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2"><FaCheckCircle className="mt-0.5" style={{ color: colors.primary.green }} /> Valid National ID or Passport</li>
                <li className="flex items-start gap-2"><FaCheckCircle className="mt-0.5" style={{ color: colors.primary.green }} /> Police clearance certificate</li>
                <li className="flex items-start gap-2"><FaCheckCircle className="mt-0.5" style={{ color: colors.primary.green }} /> Medical fitness certificate</li>
                <li className="flex items-start gap-2"><FaCheckCircle className="mt-0.5" style={{ color: colors.primary.green }} /> 2 passport-size photographs</li>
                <li className="flex items-start gap-2"><FaCheckCircle className="mt-0.5" style={{ color: colors.primary.green }} /> Completed application form</li>
                <li className="flex items-start gap-2"><FaCheckCircle className="mt-0.5" style={{ color: colors.primary.green }} /> References from 2 current members (if applicable)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: colors.primary.navy }}>
                    <FaMedal className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: colors.primary.navy }}>Eligibility Criteria</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2"><FaCheckCircle className="mt-0.5" style={{ color: colors.primary.green }} /> Minimum age: 16 years (with parent consent)</li>
                <li className="flex items-start gap-2"><FaCheckCircle className="mt-0.5" style={{ color: colors.primary.green }} /> Clean criminal record</li>
                <li className="flex items-start gap-2"><FaCheckCircle className="mt-0.5" style={{ color: colors.primary.green }} /> Physical and mental fitness</li>
                <li className="flex items-start gap-2"><FaCheckCircle className="mt-0.5" style={{ color: colors.primary.green }} /> Commitment to safety protocols</li>
                <li className="flex items-start gap-2"><FaCheckCircle className="mt-0.5" style={{ color: colors.primary.green }} /> Willingness to complete training programs</li>
                <li className="flex items-start gap-2"><FaCheckCircle className="mt-0.5" style={{ color: colors.primary.green }} /> Respect for NSSF rules and regulations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Join NSSF Sri Lanka?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Take the first step towards excellence in shooting sports. Join our community of champions today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-lg font-semibold text-white transition-all duration-200 hover:shadow-lg text-lg"
              style={{ backgroundColor: colors.primary.red }}
            >
              Apply for Membership
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg"
            >
              Schedule a Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}