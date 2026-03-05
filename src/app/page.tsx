import { IMAGES } from "@/config/images";
import AffiliatedClubsCarousel from "./components/AffiliatedClubsCarousel";
import CompetitionResults from "./components/CompetitionResults";
import CouncilMembers from "./components/CouncilMembers";
// import Features from "./components/Features";
import { colors } from "@/config";
import HeroSection from "./components/HeroSection";
import InternationalCalendar from "./components/InternationalCalendar";
import MatchesCalendar from "./components/MatchesCalendar";
import NewsSection from "./components/NewsSection";
import Records from "./components/Records";
import TrainingPrograms from "./components/TrainingPrograms";

export default function Home() {
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
          IMAGES.HERO_GOLF_3,
        ]}
      ></HeroSection>

      {/* Features Section (Replaced) */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-center mb-16">
            <p
              className="text-sm font-montserrat font-semibold uppercase tracking-wider mb-2"
              style={{ color: colors.primary.blue }}
            >
              Welcome
            </p>
            <h2
              className="text-4xl md:text-5xl font-montserrat font-bold mb-4"
              style={{ color: colors.primary.navy }}
            >
              NSSF Sri Lanka
            </h2>
          </div>
          <p className="text-lg text-gray-700 text-justify font-sans">
            The National Shooting Sport Federation of Sri Lanka (NSSF-SL) was
            founded on 12th July 2007 in order to govern all shooting
            disciplines coming under the purview of the International Shooting
            Sport Federation (ISSF).
            <br />
            <br />
            The newly formed federation was officially registered under the
            Ministry of Sports in Sri Lanka on 25th March 2011 and is a full
            member of the National Olympic Committee of Sri Lanka (NOC). The
            National Shooting Sport Federation of Sri Lanka is also duly
            affiliated to International Shooting Sport Federation (ISSF), Asian
            Shooting Confederation (ASC), Commonwealth Shooting Federation (CSF)
            and South Asian Shooting Confederation (SASC).
          </p>
        </div>
      </section>

      <CouncilMembers />
      <AffiliatedClubsCarousel />
      <MatchesCalendar />
      <InternationalCalendar />
      <TrainingPrograms />
      <Records />
      <CompetitionResults />
      <NewsSection />

    </div>
  );
}
