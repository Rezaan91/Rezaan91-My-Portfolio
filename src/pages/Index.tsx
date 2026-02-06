import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SectionNavigation from "@/components/SectionNavigation";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Rezaan Achmat | Full Stack Developer Portfolio</title>
        <meta 
          name="description" 
          content="Rezaan Achmat - Aspiring Software & Web Developer, IT Support specialist, and Digital Problem-Solver. Explore my portfolio showcasing skills in JavaScript, React, Node.js, and UI/UX." 
        />
        <meta name="keywords" content="Rezaan Achmat, Full Stack Developer, Web Developer, React, JavaScript, Portfolio, South Africa" />
        <meta property="og:title" content="Rezaan Achmat | Full Stack Developer Portfolio" />
        <meta property="og:description" content="Full Stack Developer with a passion for building innovative solutions. Skilled in JavaScript, React, Node.js, and UI/UX design." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://rezaan-portfolio.lovable.app" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <EducationSection />
          <ContactSection />
        </main>
        <Footer />
        <SectionNavigation />
      </div>
    </>
  );
};

export default Index;
