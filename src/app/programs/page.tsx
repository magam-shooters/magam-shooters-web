import { colors } from "@/config";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight, FaClock, FaUsers } from "react-icons/fa";
import PageHero from "../components/PageHero";

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

const compactSummary = (text: string, maxWords = 10) => {
  const words = text.trim().split(/\s+/);
  if (words.length <= maxWords) return text;
  return `${words.slice(0, maxWords).join(" ")}...`;
};

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
      {/* <section className="bg-linear-to-br from-[#002B7F] to-[#004A9F] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="font-sans inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <FaArrowLeft />
            <span>Back to Home</span>
          </Link>

          <div className="text-center mb-8">
            <p className="text-sm font-semibold uppercase tracking-wider mb-2 text-white/90">
              Training
            </p>
            <h1 className="font-sans text-4xl md:text-5xl font-bold mb-4">
              Our Training Programs
            </h1>
            <p className="font-sans text-lg text-white/90 max-w-2xl mx-auto">
              Professional training programs designed to develop shooting sports excellence at every level
            </p>
          </div>
        </div>
      </section> */}
      <PageHero
        title="Training Programs"
        subtitle="Our Training Programs"
        description="World-class training programs designed to develop champions at every level"
      />

      {/* Programs Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <article
                key={program.id}
                className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_12px_30px_rgba(2,6,23,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(2,6,23,0.22)]"
              >
                <div className="relative h-56 p-2">
                  <div className="relative h-full w-full  rounded-2xl border-4 border-white overflow-hidden "
                   style={{
                      background: `linear-gradient(145deg, ${colors.primary.navy} 0%, ${colors.primary.blue} 100%)`,
                    }}
                  >
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white_0%,transparent_45%),radial-gradient(circle_at_80%_70%,white_0%,transparent_35%)]" />

                    <div className="relative z-10 flex h-full items-center justify-center px-4 text-center">
                      <span className="rounded-full bg-black/30 px-3 py-1 text-sm font-semibold text-white">
                        {program.category}
                      </span>
                    </div>

                    <span
                      className="absolute top-5 right-5 rounded-full px-3 py-1 text-[11px] font-bold tracking-wide uppercase"
                      style={{ backgroundColor: "#FFD100", color: "#002B7F" }}
                    >
                      {program.category}
                    </span>

                    <span className="absolute top-5 left-5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#002B7F]">
                      {program.level}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 p-4">

                  <h3 className="min-h-6 text-base md:text-lg font-sans font-extrabold leading-tight line-clamp-2 transition-colors text-[#002B7F]">
                    {program.title}
                  </h3>
                  <div className="flex items-center justify-between gap-2 text-xs font-sans text-slate-600">


                    <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 font-semibold">
                      <FaClock className="text-xs" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 font-semibold">
                      <FaUsers className="text-xs" />
                      <span>{program.participants}</span>
                    </div>
                  </div>

                  {/* <h3 className="min-h-6 text-base md:text-lg font-sans font-extrabold leading-tight line-clamp-2 transition-colors text-[#002B7F]">
                    {program.title}
                  </h3> */}

                  <p className="font-sans text-xs md:text-sm leading-5 text-slate-600 line-clamp-2">
                    {compactSummary(program.excerpt)}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {program.benefits.slice(0, 2).map((benefit, index) => (
                      <span
                        key={index}
                        className="max-w-full truncate rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700"
                        title={benefit}
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/programs/${program.id}`}
                    className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#FFD100] py-2.5 text-sm font-bold tracking-wide text-[#002B7F] transition-all duration-300 hover:brightness-95 hover:shadow-md active:scale-[0.99]"
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
          <h2 className="font-sans text-3xl font-semibold mb-4" style={{ color: colors.primary.navy }}>
            Ready to Start Your Journey?
          </h2>
          <p className="font-sans text-lg text-gray-600 mb-8">
            Contact us to enroll in any of our training programs or to learn more about customized training options.
          </p>
          <Link
            href="/contact"
            className="font-sans inline-flex items-center gap-3 bg-[#002B7F] hover:bg-[#001B5F] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105"
          >
            Contact Us
            <FaArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
}

