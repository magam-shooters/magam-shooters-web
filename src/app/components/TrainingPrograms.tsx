import { colors } from '@/config';
import Link from "next/link";
import { FaArrowRight, FaClock, FaUsers } from "react-icons/fa";


interface TrainingProgram {
  id: string;
  title: string;
  excerpt: string;
  duration: string;
  participants: string;
  image: string;
  category: string;
}

const TrainingPrograms = () => {
  // Sample training program data
  const programs: TrainingProgram[] = [
    {
      id: "1",
      title: "Beginner Rifle Training Program",
      excerpt: "Foundation program covering safety, basic techniques, and marksmanship fundamentals for newcomers to rifle shooting.",
      duration: "8 Weeks",
      participants: "15-20 Students",
      image: "/gallery/training-1.jpg",
      category: "Rifle"
    },
    {
      id: "2", 
      title: "Advanced Pistol Shooting Course",
      excerpt: "Intensive training for experienced shooters focusing on precision, speed, and competitive shooting techniques.",
      duration: "12 Weeks",
      participants: "10-15 Students",
      image: "/gallery/training-2.jpg",
      category: "Pistol"
    },
    {
      id: "3",
      title: "Youth Development Program",
      excerpt: "Comprehensive program designed specifically for young athletes aged 12-18 covering all shooting disciplines.",
      duration: "6 Months",
      participants: "20-25 Students",
      image: "/gallery/training-3.jpg",
      category: "Youth"
    },
    {
      id: "4",
      title: "Olympic Preparation Training",
      excerpt: "Elite-level training program for athletes preparing for international competitions and Olympic qualifications.",
      duration: "Ongoing",
      participants: "Selected Athletes",
      image: "/gallery/training-4.jpg",
      category: "Elite"
    },
    {
      id: "5",
      title: "Shotgun Fundamentals Course",
      excerpt: "Complete introduction to trap and skeet shooting with focus on technique, stance, and target tracking.",
      duration: "10 Weeks",
      participants: "12-18 Students",
      image: "/gallery/training-5.jpg",
      category: "Shotgun"
    },
    {
      id: "6",
      title: "Coach Certification Program",
      excerpt: "Professional development course for aspiring coaches covering technical knowledge, safety, and teaching methodologies.",
      duration: "16 Weeks",
      participants: "8-12 Coaches",
      image: "/gallery/training-6.jpg",
      category: "Coaching"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
           <div className="text-center mb-16">
          <p className="text-sm font-montserrat font-semibold uppercase tracking-wider mb-2" style={{ color: colors.primary.blue }}>
            Our Training Programs
          </p>
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4" style={{ color: colors.primary.navy }}>
            Training Programs for All Levels
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            World-class training programs designed to develop champions at every level
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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
                    {program.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3 font-sans">
                  <div className="flex items-center gap-1">
                    <FaClock className="text-xs" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaUsers className="text-xs" />
                    <span>{program.participants}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-montserrat font-bold text-[#002B7F] mb-3 line-clamp-2 group-hover:text-[#001B5F] transition-colors">
                  {program.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 font-sans">
                  {program.excerpt}
                </p>
                
                <Link
                  href={`/programs/${program.id}`}
                  className="inline-flex items-center gap-2 text-[#002B7F] hover:text-[#001B5F] font-montserrat font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                >
                  Learn More
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/programs"
            className="inline-flex items-center gap-3 bg-[#002B7F] hover:bg-[#001B5F] text-white font-montserrat font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105"
          >
            View All Programs
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrainingPrograms;
