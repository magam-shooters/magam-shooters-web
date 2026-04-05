import { colors } from "@/config";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight, FaClock, FaUsers } from "react-icons/fa";

interface TrainingProgram {
  id: string;
  title: string;
  excerpt: string;
  description: string;
  duration: string;
  participants: string;
  level: string;
  category: string;
  schedule: string;
  prerequisites: string[];
  benefits: string[];
}

export default function ProgramsPage() {
  const programs: TrainingProgram[] = [
    {
      id: "1",
      title: "Beginner Rifle Training Program",
      excerpt: "Foundation program covering safety, basic techniques, and marksmanship fundamentals for newcomers to rifle shooting.",
      description: "A comprehensive introduction to rifle shooting designed for absolute beginners. This program emphasizes safety protocols, proper stance, breathing techniques, trigger control, and basic marksmanship principles.",
      duration: "8 Weeks",
      participants: "15-20 Students",
      level: "Beginner",
      category: "Rifle",
      schedule: "Saturdays & Sundays, 9:00 AM - 12:00 PM",
      prerequisites: ["Minimum age 16 years", "Good physical health", "No prior experience required"],
      benefits: ["Safety certification", "Basic shooting techniques", "Equipment introduction", "Foundation for competitive shooting"]
    },
    {
      id: "2",
      title: "Advanced Pistol Shooting Course",
      excerpt: "Intensive training for experienced shooters focusing on precision, speed, and competitive shooting techniques.",
      description: "This advanced course is designed for shooters with prior experience who want to refine their skills and compete at higher levels. Focus on advanced techniques, mental preparation, and competition strategies.",
      duration: "12 Weeks",
      participants: "10-15 Students",
      level: "Advanced",
      category: "Pistol",
      schedule: "Weekday evenings, 5:00 PM - 8:00 PM",
      prerequisites: ["Minimum 1 year shooting experience", "Basic pistol handling skills", "Safety certification"],
      benefits: ["Advanced techniques", "Competition preparation", "Mental training", "Performance analysis"]
    },
    {
      id: "3",
      title: "Youth Development Program",
      excerpt: "Comprehensive program designed specifically for young athletes aged 12-18 covering all shooting disciplines.",
      description: "A holistic development program for young shooters combining technical training, physical conditioning, and character development. Covers rifle, pistol, and shotgun disciplines.",
      duration: "6 Months",
      participants: "20-25 Students",
      level: "Youth",
      category: "Youth",
      schedule: "After school sessions, flexible timings",
      prerequisites: ["Age 12-18 years", "Parental consent", "School recommendation"],
      benefits: ["Multi-discipline training", "Character development", "Physical fitness", "Scholarship opportunities"]
    },
    {
      id: "4",
      title: "Olympic Preparation Training",
      excerpt: "Elite-level training program for athletes preparing for international competitions and Olympic qualifications.",
      description: "High-performance training program for elite athletes aiming for Olympic qualification and international medals. Includes world-class coaching, sports science support, and international exposure.",
      duration: "Ongoing",
      participants: "Selected Athletes",
      level: "Elite",
      category: "Elite",
      schedule: "Full-time training, customized schedules",
      prerequisites: ["National team selection", "Proven competition record", "Medical clearance"],
      benefits: ["World-class coaching", "Sports science support", "International competitions", "Olympic pathway"]
    },
    {
      id: "5",
      title: "Shotgun Fundamentals Course",
      excerpt: "Complete introduction to trap and skeet shooting with focus on technique, stance, and target tracking.",
      description: "Learn the exciting disciplines of trap and skeet shooting. This course covers shotgun safety, mounting techniques, target acquisition, and tracking fundamentals for both disciplines.",
      duration: "10 Weeks",
      participants: "12-18 Students",
      level: "Beginner/Intermediate",
      category: "Shotgun",
      schedule: "Weekends, 7:00 AM - 11:00 AM",
      prerequisites: ["Minimum age 18 years", "Good eyesight", "Physical fitness"],
      benefits: ["Trap and skeet fundamentals", "Safety certification", "Clay shooting techniques", "Competition readiness"]
    },
    {
      id: "6",
      title: "Coach Certification Program",
      excerpt: "Professional development course for aspiring coaches covering technical knowledge, safety, and teaching methodologies.",
      description: "Comprehensive coaching course aligned with ISSF standards. Learn technical expertise, teaching methodologies, safety management, and athlete development principles.",
      duration: "16 Weeks",
      participants: "8-12 Coaches",
      level: "Professional",
      category: "Coaching",
      schedule: "Bi-weekly intensive sessions",
      prerequisites: ["Minimum 3 years shooting experience", "Educational qualification", "Clean background check"],
      benefits: ["NSSF coaching certification", "Teaching methodologies", "Safety management", "Career development"]
    },
    {
      id: "7",
      title: "Women's Special Training Program",
      excerpt: "Dedicated program for women shooters focusing on skill development and competitive preparation in all disciplines.",
      description: "A supportive environment for women to learn and excel in shooting sports. Covers all disciplines with special attention to technique, confidence building, and competitive preparation.",
      duration: "12 Weeks",
      participants: "15-20 Female Athletes",
      level: "All Levels",
      category: "Women's Program",
      schedule: "Flexible timings, women-only sessions",
      prerequisites: ["Female participants only", "Minimum age 14 years"],
      benefits: ["Supportive environment", "All disciplines covered", "Confidence building", "Competition opportunities"]
    },
    {
      id: "8",
      title: "Para-Shooting Development Program",
      excerpt: "Inclusive training program for differently-abled athletes focusing on adapted techniques and equipment.",
      description: "Specialized program for para-athletes following WSPS (World Shooting Para Sport) guidelines. Adapted equipment, modified techniques, and inclusive coaching approach.",
      duration: "Ongoing",
      participants: "Open enrollment",
      level: "All Levels",
      category: "Para-Shooting",
      schedule: "Customized individual schedules",
      prerequisites: ["Medical assessment", "Disability classification"],
      benefits: ["Adapted equipment", "Specialized coaching", "International pathway", "Paralympic preparation"]
    },
    {
      id: "9",
      title: "Corporate Shooting Experience",
      excerpt: "Team-building program for corporate groups introducing shooting sports in a fun and safe environment.",
      description: "Perfect for corporate team-building events. Learn basic shooting in a controlled environment while building team cohesion and experiencing a unique sport.",
      duration: "1-2 Days",
      participants: "Groups of 10-30",
      level: "Recreational",
      category: "Corporate",
      schedule: "Flexible booking, weekdays/weekends",
      prerequisites: ["Corporate booking required", "Minimum group size 10"],
      benefits: ["Team building", "Unique experience", "Safety training", "Fun activity"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#002B7F] to-[#004A9F] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="font-sans inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <FaArrowLeft />
            <span>Back to Home</span>
          </Link>
          
          <div className="text-center mb-8">
            <p className="text-sm font-semibold uppercase tracking-wider mb-2 text-[#FFD100]">
              Training
            </p>
            <h1 className="font-montserrat text-4xl md:text-5xl font-bold mb-4">
              Our Training Programs
            </h1>
            <p className="font-sans text-lg text-white/90 max-w-2xl mx-auto">
              Professional training programs designed to develop shooting sports excellence at every level
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <article
                key={program.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-[#002B7F] to-[#004A9F] flex items-center justify-center">
                    <span className="text-white text-sm font-semibold px-3 py-1 bg-black/30 rounded-full">
                      {program.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-white/90 text-[#002B7F] text-xs font-bold px-2 py-1 rounded-full">
                      {program.level}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <FaClock className="text-xs" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaUsers className="text-xs" />
                      <span>{program.participants}</span>
                    </div>
                  </div>

                  <h3 className="font-montserrat text-xl font-semibold text-[#002B7F] mb-3 line-clamp-2 group-hover:text-[#001B5F] transition-colors">
                    {program.title}
                  </h3>

                  <p className="font-sans text-gray-600 text-sm mb-4 line-clamp-3">
                    {program.excerpt}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-montserrat text-sm font-semibold text-[#002B7F] mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {program.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="text-xs text-gray-600 flex items-start gap-2">
                          <span className="text-[#FFD100] mt-0.5">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/programs/${program.id}`}
                    className="font-montserrat inline-flex items-center gap-2 text-[#002B7F] hover:text-[#001B5F] font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                  >
                    Learn More
                    <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-montserrat text-3xl font-semibold mb-4" style={{ color: colors.primary.navy }}>
            Ready to Start Your Journey?
          </h2>
          <p className="font-sans text-lg text-gray-600 mb-8">
            Contact us to enroll in any of our training programs or to learn more about customized training options.
          </p>
          <Link
            href="/contact"
            className="font-montserrat inline-flex items-center gap-3 bg-[#002B7F] hover:bg-[#001B5F] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105"
          >
            Contact Us
            <FaArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
}
