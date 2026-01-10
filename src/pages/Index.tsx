import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import AnnouncementsSection from "@/components/home/AnnouncementsSection";
import ProblemSection from "@/components/home/ProblemSection";
import SolutionSection from "@/components/home/SolutionSection";
import ClinicsSection from "@/components/home/ClinicsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AnnouncementsSection />
        <ProblemSection />
        <ClinicsSection />
        <SolutionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
