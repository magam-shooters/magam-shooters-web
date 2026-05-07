import { colors } from "@/config";
import { FaBullseye, FaGlobe, FaHandshake, FaHeart, FaShieldAlt, FaUsers } from "react-icons/fa";
import ModernSectionHeader from "../components/ModernSectionHeader";
import PageHero from "../components/PageHero";

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
        subtitle="Leading Sri Lanka's Shooting Sports"
        description="The National Shooting Sports Federation of Sri Lanka - Championing excellence in competitive shooting since its establishment"
      />

      {/* Federation Profile Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <ModernSectionHeader
            className="mb-10"
            subtitle="About NSSF-SL"
            title="Our Federation"
          />

          <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="space-y-5">
              <p className="font-sans text-gray-700 text-base leading-relaxed">
                <span className="font-semibold" style={{ color: colors.primary.navy }}>The National Shooting Sport Federation of Sri Lanka (NSSF-SL)</span> was founded on 
                12th July 2007 in order to govern all shooting disciplines coming under the purview of the International Shooting Sport Federation 
                (ISSF).
              </p>

              <p className="font-sans text-gray-700 text-base leading-relaxed">
                The newly formed federation was officially registered under the Ministry of Sports in Sri Lanka on 25th March 2011 and is a full 
                member of the National Olympic Committee of Sri Lanka (NOC). The National Shooting Sport Federation of Sri Lanka is also duly 
                affiliated to International Shooting Sport Federation (ISSF), Asian Shooting Confederation (ASC), Commonwealth Shooting Federation 
                (CSF) and South Asian Shooting Confederation (SASC).
              </p>

              <p className="font-sans text-gray-700 text-base leading-relaxed">
                Sri Lanka was represented in Olympic shooting sports since 1964. However, the first Olympic Quota place in shooting sport was obtained in 2013.
              </p>

              <p className="font-sans text-gray-700 text-base leading-relaxed">
                The NSSF-SL has been responsible for growing the population of children in the sport through the school shooting association which is duly affiliated to the NSSF-SL.
                The number today stands at approximately 7500 athletes. The main reason for this growth has been the parents encouraging their children into the sport because they noticed that the children involved in the shooting sport with the NSSF-SL developed,
              </p>

              <ul className="grid gap-2 sm:grid-cols-2 mt-1">
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full" style={{ backgroundColor: colors.primary.blue }} />
                  <span className="font-sans text-gray-700 text-base">Very high level of concentration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full" style={{ backgroundColor: colors.primary.blue }} />
                  <span className="font-sans text-gray-700 text-base">Became highly organized and methodical</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full" style={{ backgroundColor: colors.primary.blue }} />
                  <span className="font-sans text-gray-700 text-base">Extremely respectful and courteous</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full" style={{ backgroundColor: colors.primary.blue }} />
                  <span className="font-sans text-gray-700 text-base">Very responsible</span>
                </li>
              </ul>

              <p className="font-sans text-gray-700 text-base leading-relaxed">
                Due to the training vested upon them by the coaches and officials of the NSSF-SL.
              </p>

              <div className="pt-3">
                <p className="font-sans text-gray-800 text-base leading-relaxed">
                  <span className="font-semibold" style={{ color: colors.primary.navy }}>Logo</span>
                </p>
              </div>

              <p className="font-sans text-gray-700 text-base leading-relaxed">
                While the NSSF-SL will continue to strive for medals in the international arena with the pinnacle being a Medal at the Olympics it will continue to produce high quality youth who will enter society to complement the countries transformation and development towards fairness in society and prosperity to all.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

