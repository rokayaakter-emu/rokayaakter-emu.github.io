import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ResearchInterestsSection from "@/components/ResearchInterestsSection";
import PapersDetailSection from "@/components/PapersDetailSection";
import PublicationsSection from "@/components/PublicationsSection";
import YearbookSection from "@/components/YearbookSection";
import AchievementsSection from "@/components/AchievementsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import InteractiveParticlesBackground from "@/components/InteractiveParticlesBackground";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <InteractiveParticlesBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ResearchInterestsSection />
        <PapersDetailSection />
          {/*<ExperienceSection />*/}
          {/*<ProjectsSection />*/}
          <PublicationsSection />
        <YearbookSection />
        <AchievementsSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </main>
  );
};

export default Index;
