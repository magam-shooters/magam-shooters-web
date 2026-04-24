"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { FaArrowLeft, FaCalendar, FaFacebook, FaLinkedin, FaShare, FaTwitter, FaUser } from "react-icons/fa";
import PageHero from "../../components/PageHero";
import { useEffect, useState } from "react";
import { colors } from "@/config";

interface NewsItem {
  _id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  imageUrl?: string;
  category: string;
  content: string;
}

// Sample news data - this would typically come from a CMS or API
// const newsData: { [key: string]: NewsItem } = {
//   "1": {
//     id: "1",
//     title: "NSSF Announces National Championship Results",
//     excerpt: "Outstanding performance by Sri Lankan athletes at the 2026 National Shooting Championship with record-breaking scores.",
//     content: `The National Shooting Sports Federation of Sri Lanka is proud to announce the outstanding results from the 2026 National Shooting Championship held at the Colombo Shooting Club from February 15-18, 2026.

// This year's championship witnessed exceptional performances across all disciplines, with several national records being broken. The event featured over 200 athletes from 25 affiliated clubs across the island, competing in various categories including Air Rifle, Air Pistol, Small Bore Rifle, and Rapid Fire Pistol.

// Notable performances included Samantha Perera's new national record in the Men's 10m Air Rifle with a score of 632.5, surpassing the previous record by 2.3 points. In the Women's category, Nimal Jayasuriya achieved a remarkable 628.1 in the 10m Air Rifle, setting a new benchmark for future competitions.

// The championship also served as the selection event for the upcoming Asian Games, with the top performers earning their spots on the national team. NSSF President commended all participants for their dedication and sportsmanship displayed throughout the event.

// ## Championship Highlights

// ### Record-Breaking Performances
// - **Men's 10m Air Rifle**: Samantha Perera - 632.5 (New National Record)
// - **Women's 10m Air Rifle**: Nimal Jayasuriya - 628.1 (New National Record)
// - **Men's 25m Rapid Fire Pistol**: Kasun Fernando - 591 points
// - **Women's 10m Air Pistol**: Dilani Silva - 587 points

// ### Team Selection Results
// The following athletes have been selected for the national team based on their championship performance:
// 1. Samantha Perera (Men's 10m Air Rifle)
// 2. Nimal Jayasuriya (Women's 10m Air Rifle)
// 3. Kasun Fernando (Men's 25m Rapid Fire Pistol)
// 4. Dilani Silva (Women's 10m Air Pistol)
// 5. Chaminda Rajapakse (Men's 50m Rifle 3 Positions)

// ### Looking Ahead
// The selected athletes will now undergo intensive training preparation for the upcoming Asian Games. Special coaching camps and international exposure events are being planned to ensure optimal preparation for the continental competition.

// The success of this championship demonstrates the growing strength of shooting sports in Sri Lanka and the effectiveness of our development programs across all levels.`,
//     date: "February 20, 2026",
//     author: "NSSF Media Team",
//     image: "/gallery/news-1.jpg",
//     category: "Championships"
//   },
//   "2": {
//     id: "2",
//     title: "New Training Facility Opens in Kandy",
//     excerpt: "State-of-the-art shooting range with Olympic-standard facilities now open for athletes across the Central Province.",
//     content: `The National Shooting Sports Federation of Sri Lanka officially opened its newest training facility in Kandy on February 18, 2026. This state-of-the-art complex represents a significant investment in developing shooting sports infrastructure in the Central Province.

// The new facility features 20 electronic lanes for 10m Air Rifle and Air Pistol, complete with SIUS electronic scoring systems that meet international standards. Additionally, the complex includes a 50m range with 15 lanes for Small Bore Rifle events, making it one of the most comprehensive shooting facilities outside of Colombo.

// ## Facility Features

// ### Indoor Range Specifications
// - **20 electronic lanes** for 10m Air Rifle and Air Pistol
// - **SIUS electronic scoring systems** meeting international standards
// - **Advanced ventilation systems** ensuring optimal air quality
// - **Professional lighting systems** providing consistent illumination
// - **Climate control systems** maintaining ideal shooting conditions

// ### 50m Outdoor Range
// - **15 lanes** for Small Bore Rifle events
// - **Electronic targets** with real-time scoring
// - **Weather protection** for year-round training
// - **Spectator areas** for competitions and events

// ### Additional Amenities
// The facility also houses modern amenities including:
// - Equipment storage and maintenance areas
// - Athlete rest and preparation rooms
// - Coaching spaces with video analysis capability
// - Administrative offices
// - Cafeteria and refreshment areas
// - Ample parking facilities

// ## Impact on Regional Development

// This expansion is part of NSSF's broader strategy to decentralize training opportunities and make high-quality facilities accessible to athletes across all provinces. The Kandy facility is expected to serve over 150 registered athletes and will host regional competitions throughout the year.

// The facility will also serve as a hub for the Central Province youth development program, providing local schools and clubs with access to world-class training infrastructure without the need to travel to Colombo.

// Local officials and athletes expressed their appreciation for this development, noting that it will significantly reduce travel costs and time while providing more training opportunities for aspiring shooters in the region.`,
//     date: "February 18, 2026",
//     author: "NSSF Development",
//     image: "/gallery/news-2.jpg",
//     category: "Facilities"
//   },
//   "3": {
//     id: "3",
//     title: "Youth Development Program Expansion",
//     excerpt: "NSSF launches comprehensive youth program across 15 schools to identify and nurture young shooting talent.",
//     content: `The National Shooting Sports Federation has announced a major expansion of its youth development program, partnering with 15 schools across Sri Lanka to introduce shooting sports to students aged 12-18.

// This initiative, launched on February 15, 2026, aims to identify and nurture young talent while promoting discipline, concentration, and mental strength among youth. The program includes basic safety training, fundamental shooting techniques, and character development components.

// ## Program Structure

// ### School Partnerships
// Participating schools include prestigious institutions from major cities across Sri Lanka:

// **Colombo Region:**
// - Royal College, Colombo
// - St. Joseph's College
// - Ladies' College, Colombo

// **Kandy Region:**
// - Trinity College, Kandy
// - Mahamaya Girls' College

// **Galle Region:**
// - Richmond College
// - Southlands College

// **Other Regions:**
// - Ananda College, Colombo
// - Wesley College, Colombo
// - Musaeus College, Colombo
// - St. Anthony's College, Kandy
// - Dharmaraja College, Kandy
// - Mahinda College, Galle
// - Visakha Vidyalaya, Colombo
// - St. Bridget's Convent, Colombo

// ### Training Components

// **Safety First Approach:**
// All students begin with comprehensive safety training covering:
// - Range safety protocols
// - Equipment handling
// - Emergency procedures
// - Personal protective equipment usage

// **Skill Development:**
// Progressive training modules include:
// - Basic shooting stance and position
// - Breathing techniques
// - Sight alignment and picture
// - Trigger control
// - Mental concentration exercises

// **Character Building:**
// Beyond technical skills, the program emphasizes:
// - Discipline and self-control
// - Goal setting and achievement
// - Teamwork and sportsmanship
// - Leadership development
// - Stress management

// ### Equipment and Resources

// Each participating school receives:
// - 10 beginner-friendly air rifles
// - Safety equipment (eye protection, ear protection)
// - Training materials and manuals
// - Portable shooting mats
// - Basic maintenance tools

// ### Coaching Support

// Professional NSSF-certified coaches conduct weekly training sessions at each school. These coaches have been specially trained in youth development and educational methodologies to ensure age-appropriate instruction.

// ## Selection and Advancement

// Promising students will be invited to:
// - Holiday training camps at NSSF facilities
// - Inter-school competitions
// - Advanced coaching sessions
// - Potential national team development pathways

// "This investment in our youth is crucial for the future of shooting sports in Sri Lanka," said the NSSF Youth Development Coordinator. "We're not just training athletes; we're building character and discipline that will benefit these young people throughout their lives."

// The program represents a long-term commitment to grassroots development, with plans to expand to additional schools based on the success of this initial phase.`,
//     date: "February 15, 2026",
//     author: "Youth Development Team",
//     image: "/gallery/news-3.jpg",
//     category: "Youth Programs"
//   },
//   "4": {
//     id: "4",
//     title: "International Coach Workshop Series",
//     excerpt: "World-renowned coaches to conduct technical workshops for Sri Lankan trainers and athletes this March.",
//     content: `The NSSF is pleased to announce an exclusive series of international coaching workshops scheduled for March 2026. These sessions will feature world-renowned coaches from Germany, India, and Australia, bringing cutting-edge training methodologies to Sri Lankan shooting sports.

// The workshop series, running from March 5-12, 2026, will cover advanced techniques in mental preparation, biomechanics, equipment optimization, and competition strategy. These sessions are designed for both coaches and elite athletes looking to enhance their technical knowledge and performance.

// ## Featured International Coaches

// ### Dr. Wolfgang Mueller (Germany)
// **Olympic Medalist and Master Coach**
// - Former Olympic Gold Medalist in 10m Air Rifle
// - 20+ years of international coaching experience
// - Specializes in precision shooting techniques and equipment optimization
// - Current coach of the German national team

// **Workshop Focus:** Advanced shooting techniques, equipment tuning, and performance analysis

// ### Rajesh Patel (India)
// **Rapid Fire Specialist**
// - Former Asian Games Gold Medalist
// - Expert in rapid-fire pistol events
// - Developer of innovative training methodologies
// - Coach of multiple international medalists

// **Workshop Focus:** Rapid fire techniques, timing strategies, and competition preparation

// ### Sarah Thompson (Australia)
// **Sports Psychology Expert**
// - PhD in Sports Psychology
// - Performance consultant for Olympic teams
// - Specialist in mental conditioning for precision sports
// - Author of "The Champion's Mind"

// **Workshop Focus:** Mental preparation, stress management, and competition psychology

// ## Workshop Schedule and Content

// ### Week 1: March 5-8, 2026
// **Technical Skills Development**
// - Day 1: Advanced shooting positions and stability
// - Day 2: Equipment optimization and tuning
// - Day 3: Shot analysis and correction techniques
// - Day 4: Competition simulation and pressure training

// ### Week 2: March 9-12, 2026
// **Mental Performance and Strategy**
// - Day 1: Sports psychology fundamentals
// - Day 2: Pre-competition preparation routines
// - Day 3: Managing competition pressure
// - Day 4: Long-term athlete development

// ## Participant Selection

// ### Priority Registration:
// 1. **National Team Members** - Automatic inclusion
// 2. **Certified Coaches** - NSSF-certified instructors
// 3. **Junior Elite Athletes** - Top performers under 21
// 4. **Club Coaches** - Representatives from affiliated clubs

// ### Selection Criteria:
// - Current performance level and potential
// - Commitment to implementing learned techniques
// - Role in developing other athletes
// - Recommendation from coaches or officials

// ## Venue and Facilities

// Workshops will be held at the National Shooting Center in Colombo, featuring:
// - State-of-the-art ranges for practical sessions
// - Modern classroom facilities for theoretical components
// - Video analysis equipment for technique review
// - Electronic scoring systems for immediate feedback

// ## Expected Outcomes

// Participants will gain:
// - Advanced technical knowledge from international experts
// - Modern training methodologies and techniques
// - Updated competition strategies
// - Certification of workshop completion
// - Networking opportunities with international coaches
// - Access to continued mentoring programs

// ## Investment in Excellence

// This initiative represents NSSF's commitment to bringing international best practices to Sri Lankan shooting sports. By exposing our coaches and athletes to world-class knowledge and techniques, we aim to accelerate the development of our sport and improve international competitiveness.

// The workshop series is made possible through partnerships with international federations and represents a significant investment in the technical development of Sri Lankan shooting sports.

// Registration opens February 25, 2026, with limited seats available to ensure personalized attention and maximum learning benefit for all participants.`,
//     date: "February 12, 2026",
//     author: "Technical Committee",
//     image: "/gallery/news-4.jpg",
//     category: "Training"
//   },
//   "5": {
//     id: "5",
//     title: "Asian Games Qualification Update",
//     excerpt: "Five Sri Lankan shooters secure qualification spots for the upcoming Asian Games following excellent performances.",
//     content: `Five talented Sri Lankan shooters have successfully secured their qualification spots for the upcoming Asian Games, following a series of excellent performances at recent international and national competitions.

// The qualified athletes include Samantha Perera (Men's 10m Air Rifle), Nimal Jayasuriya (Women's 10m Air Rifle), Kasun Fernando (Men's 25m Rapid Fire Pistol), Dilani Silva (Women's 10m Air Pistol), and Chaminda Rajapakse (Men's 50m Rifle 3 Positions).

// ## Qualified Athletes Profile

// ### Samantha Perera - Men's 10m Air Rifle
// **Age:** 28 | **Club:** Colombo Shooting Club
// - **Qualification Score:** 632.5 (New National Record)
// - **International Experience:** 3 Asian Championships, 2 Commonwealth Games
// - **Notable Achievement:** Bronze Medal at 2025 Asian Championships
// - **Current World Ranking:** #45

// ### Nimal Jayasuriya - Women's 10m Air Rifle
// **Age:** 24 | **Club:** Kandy Rifle Club
// - **Qualification Score:** 628.1 (New National Record)
// - **International Experience:** 2 Asian Championships, 1 World Championship
// - **Notable Achievement:** 5th place at 2025 World Championships
// - **Current World Ranking:** #38

// ### Kasun Fernando - Men's 25m Rapid Fire Pistol
// **Age:** 31 | **Club:** Police Sports Club
// - **Qualification Score:** 591 points
// - **International Experience:** 4 Asian Championships, 3 Commonwealth Games
// - **Notable Achievement:** Silver Medal at 2024 Commonwealth Games
// - **Current World Ranking:** #22

// ### Dilani Silva - Women's 10m Air Pistol
// **Age:** 26 | **Club:** Army Shooting Club
// - **Qualification Score:** 587 points
// - **International Experience:** 3 Asian Championships, 2 World Cups
// - **Notable Achievement:** Gold Medal at 2025 South Asian Games
// - **Current World Ranking:** #51

// ### Chaminda Rajapakse - Men's 50m Rifle 3 Positions
// **Age:** 29 | **Club:** Navy Shooting Club
// - **Qualification Score:** 1185 points
// - **International Experience:** 2 Asian Championships, 1 Olympic Games
// - **Notable Achievement:** 6th place at Tokyo Olympics
// - **Current World Ranking:** #33

// ## Qualification Process

// The selection process was highly competitive, with over 30 athletes vying for the limited spots available. The qualification criteria included:

// ### Performance Standards
// - Achievement of Minimum Qualification Scores (MQS) set by Asian Shooting Confederation
// - Consistent performance across multiple competitions
// - International competition experience
// - Demonstrated ability to perform under pressure

// ### Selection Events
// Athletes were evaluated based on performances at:
// - 2026 National Championship
// - International competitions in 2025-2026
// - Selection trials conducted in January 2026
// - Regional competitions and shoots

// ## Team Preparation Plan

// The qualified team will undergo comprehensive preparation including:

// ### Training Camps
// - **Intensive Training Camp:** March 2026 (3 weeks)
// - **International Exposure:** Competition in India and Malaysia
// - **Final Preparation:** 2 weeks before Asian Games

// ### Support Team
// - **Head Coach:** Former Olympic medalist as team leader
// - **Technical Coach:** Specialist for each discipline
// - **Sports Psychologist:** Mental preparation specialist
// - **Physiotherapist:** Injury prevention and recovery
// - **Team Manager:** Logistics and administration

// ### Equipment and Technology
// - Latest competition-grade equipment for each athlete
// - Video analysis technology for technique refinement
// - Electronic training systems for immediate feedback
// - Comprehensive backup equipment and spare parts

// ## Goals and Expectations

// **Team Targets:**
// - Medal contention in at least 2 events
// - Personal best performances from all athletes
// - Top 8 finishes across all events
// - Setting new national records

// **Individual Goals:**
// Each athlete has set specific performance targets based on current world rankings and recent form, with realistic medal aspirations in their strongest events.

// ## Federation Support

// NSSF President stated: "We are incredibly proud of these five athletes who have earned their places through dedication, hard work, and exceptional skill. They represent the best of Sri Lankan shooting sports and we're confident they will make our nation proud at the Asian Games."

// The federation has committed full support including:
// - Complete funding for preparation and travel
// - Access to best available coaching and facilities
// - Comprehensive support team
// - Performance bonuses for medal achievements

// This qualification success marks a significant milestone for Sri Lankan shooting sports and represents the culmination of years of systematic development and investment in athlete preparation.`,
//     date: "February 10, 2026",
//     author: "Selection Committee",
//     image: "/gallery/news-5.jpg",
//     category: "International"
//   },
//   "6": {
//     id: "6",
//     title: "Equipment Modernization Initiative",
//     excerpt: "NSSF invests in cutting-edge electronic scoring systems and training equipment across all affiliated clubs.",
//     content: `The National Shooting Sports Federation has announced a comprehensive equipment modernization initiative, investing in cutting-edge electronic scoring systems and training equipment across all affiliated clubs.

// This Rs. 50 million investment includes the installation of SIUS electronic targets at 12 major clubs, upgrading existing mechanical systems to provide real-time scoring and analysis capabilities. The new systems offer precise shot placement data, statistical analysis, and training feedback that was previously unavailable.

// ## Investment Breakdown

// ### Electronic Scoring Systems - Rs. 35 Million
// **SIUS Electronic Targets:**
// - 120 electronic lanes across 12 facilities
// - Real-time scoring and shot analysis
// - Statistical tracking and performance data
// - Integration with training software
// - Remote monitoring capabilities

// **Installation Schedule:**
// - **Phase 1 (March 2026):** National Shooting Center, Colombo
// - **Phase 2 (April 2026):** Police Sports Club, Army Club, Navy Club
// - **Phase 3 (May 2026):** Kandy Rifle Club, Galle Rifle Club
// - **Phase 4 (June 2026):** Regional clubs across provinces

// ### Competition Equipment - Rs. 10 Million
// **Air Rifles and Pistols:**
// - 50 Feinwerkbau air rifles (latest models)
// - 30 Steyr air pistols (competition grade)
// - Complete accessories and maintenance kits
// - Spare parts inventory for 2 years

// ### Safety and Infrastructure - Rs. 5 Million
// **Safety Upgrades:**
// - Advanced ventilation systems for all ranges
// - LED lighting systems providing optimal illumination
// - Enhanced security systems with access control
// - Fire safety and emergency response equipment

// ## Technology Features

// ### SIUS Electronic Target System
// **Advanced Capabilities:**
// - Precision measurement to 0.1mm accuracy
// - Instant shot registration and display
// - Shot history and pattern analysis
// - Training mode with feedback options
// - Competition mode with official protocols

// **Data Analytics:**
// - Performance tracking over time
// - Shot group analysis
// - Strength and weakness identification
// - Progress monitoring and reporting
// - Comparative analysis with other shooters

// ### Training Software Integration
// **Features:**
// - Individual athlete profiles
// - Training session recording
// - Progress tracking and analysis
// - Coach feedback and communication tools
// - Performance comparison and benchmarking

// ## Benefits for Athletes

// ### Enhanced Training Quality
// - **Immediate Feedback:** Instant shot placement and scoring
// - **Detailed Analysis:** Comprehensive performance statistics
// - **Progress Tracking:** Long-term development monitoring
// - **Consistency Training:** Pattern analysis and improvement suggestions

// ### Competition Preparation
// - **Realistic Simulation:** Training with competition-standard equipment
// - **Pressure Training:** Timed sessions and competition scenarios
// - **Performance Optimization:** Data-driven technique refinement
// - **Mental Preparation:** Familiarity with international-standard systems

// ## Club Implementation

// ### Training Programs
// Comprehensive training will be provided to:
// - **Range Officers:** System operation and maintenance
// - **Coaches:** Data interpretation and athlete guidance
// - **Athletes:** System usage and feature utilization
// - **Technical Staff:** Troubleshooting and basic repairs

// ### Support Structure
// - **Technical Hotline:** 24/7 support for system issues
// - **Regular Maintenance:** Scheduled service and calibration
// - **Software Updates:** Continuous feature enhancements
// - **Hardware Warranty:** Comprehensive coverage and replacement

// ## Long-term Impact

// ### Athlete Development
// This modernization is expected to:
// - Accelerate athlete skill development
// - Improve training efficiency and effectiveness
// - Enhance competition preparedness
// - Increase international competitiveness

// ### Club Operations
// Benefits for affiliated clubs include:
// - Attractive facilities for member retention
// - Ability to host higher-level competitions
// - Improved coaching capabilities
// - Enhanced reputation and prestige

// ## International Standards

// The new equipment meets all international federation requirements:
// - **ISSF Approved:** All systems certified for official competition
// - **Asian Federation Compliant:** Meets regional championship standards
// - **Olympic Standard:** Equipment used in Olympic competitions
// - **World Championship Grade:** Suitable for highest level events

// ## Future Expansion

// Based on the success of this initiative, NSSF plans:
// - Extension to all affiliated clubs by 2028
// - Integration of virtual training systems
// - Development of mobile training units
// - Establishment of equipment lending program for smaller clubs

// NSSF Technical Director commented: "This investment represents our commitment to providing world-class facilities and equipment to our athletes. Modern equipment not only improves training quality but also helps athletes transition more easily to international competitions where similar systems are standard."

// The initiative positions Sri Lankan shooting sports infrastructure among the most advanced in the South Asian region and demonstrates NSSF's commitment to excellence in athlete development and preparation.`,
//     date: "February 8, 2026",
//     author: "Technical Department",
//     image: "/gallery/news-6.jpg",
//     category: "Technology"
//   }
// };

export default function NewsArticle() {
  const params = useParams();
  const newsId = params.id as string;
  //const news = [newsId];


  const [newsdata, setNewsdata] = useState<NewsItem | null>(null);

  useEffect(() => {
    fetch(`/api/news/${newsId}`)
      .then((res) => res.json())
      .then((data) => {
        setNewsdata(data);
      })
      .catch(() => { });
  }, [newsId]);


  if (!newsdata) {
    return (
      <div>
        <PageHero
          title="News Not Found"
          description="The requested news article could not be found."
        />

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-sans text-2xl font-semibold text-gray-800 mb-4">Article Not Found</h1>
            <p className="font-sans text-gray-600 mb-8">The news article you're looking for doesn't exist or may have been removed.</p>
            <Link
              href="/news"
              className="font-sans inline-flex items-center gap-2 bg-[#002B7F] hover:bg-[#001B5F] text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              <FaArrowLeft />
              Back to News
            </Link>
          </div>
        </section>
      </div>
    );
  }
  const hasImage = !!newsdata.imageUrl;
  return (
    <div>

      <PageHero
        title={newsdata.title}
        description={newsdata.excerpt}
      />

      <article className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
              <span className="bg-[#002B7F] text-white px-3 py-1 rounded-full text-xs font-semibold">
                {newsdata.category}
              </span>
              <div className="flex items-center gap-1">
                <FaCalendar className="text-xs" />
                <span>{newsdata.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaUser className="text-xs" />
                <span>{newsdata.author}</span>
              </div>
            </div>

            {/* Featured Image Placeholder */}
            {/* <div className="w-full h-64 sm:h-80 lg:h-96  rounded-xl flex items-center justify-center mb-8"
            style={{
                   background: `linear-gradient(145deg, ${colors.primary.navy} 0%, ${colors.primary.blue} 100%)`,
                    }}>
                      
              <span className="text-white text-lg font-semibold px-4 py-2 bg-black/30 rounded-full">
                {newsdata.category} News
              </span>
            </div>
          </div> */}
            <div className="w-full h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden mb-8 relative">
              {hasImage ? (
                <img
                  src={newsdata.imageUrl}
                  alt={newsdata.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{
                    background: `linear-gradient(145deg, ${colors.primary.navy} 0%, ${colors.primary.blue} 100%)`,
                  }}
                >
                  <span className="text-white text-lg font-semibold px-4 py-2 bg-black/30 rounded-full">
                    {newsdata.category} News
                  </span>
                </div>
              )}
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <div className="font-sans text-gray-700 leading-relaxed whitespace-pre-line">
                {newsdata.content}
              </div>
            </div>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <FaShare className="text-gray-600" />
                  <span className="font-sans text-gray-700 font-medium">Share this article:</span>
                  <div className="flex items-center gap-3">
                    <button className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors">
                      <FaFacebook />
                    </button>
                    <button className="p-2 bg-sky-500 hover:bg-sky-600 text-white rounded-full transition-colors">
                      <FaTwitter />
                    </button>
                    <button className="p-2 bg-blue-700 hover:bg-blue-800 text-white rounded-full transition-colors">
                      <FaLinkedin />
                    </button>
                  </div>
                </div>

                <Link
                  href="/news"
                  className="font-sans inline-flex items-center gap-2 text-[#002B7F] hover:text-[#001B5F] font-semibold transition-colors"
                >
                  <FaArrowLeft />
                  Back to All News
                </Link>
              </div>
            </div>

            {/* Related Articles
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="font-sans text-2xl font-semibold text-[#002B7F] mb-6">Related News</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.values(newsdata)
                .filter(item => item.id !== newsdata._id && item.category === newsdata.category)
                .slice(0, 2)
                .map((relatedNews) => (
                  <Link
                    key={relatedNews.id}
                    href={`/news/${relatedNews.id}`}
                    className="block bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow p-6"
                  >
                    <div className="font-sans text-sm text-gray-500 mb-2">{relatedNews.date}</div>
                    <h4 className="font-sans font-semibold text-[#002B7F] mb-2 line-clamp-2">{relatedNews.title}</h4>
                    <p className="font-sans text-gray-600 text-sm line-clamp-2">{relatedNews.excerpt}</p>
                  </Link>
                ))}
            </div>
          </div> */}
          </div>
          </div>
      </article>
    </div>
  );
}