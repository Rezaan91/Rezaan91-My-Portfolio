import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WelcomeModal from "@/components/WelcomeModal";
import ChatBot from "@/components/ChatBot";
import SectionModals from "@/components/SectionModals";
// Portfolio page

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
        <meta property="og:url" content="https://rezaan-achmat-my-portfolio.netlify.app/" />
        <link rel="canonical" href="https://rezaan-achmat-my-portfolio.netlify.app/" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <CTASection />
        </main>
        <Footer />
        <SectionModals />
        <WelcomeModal />
        <ChatBot />
      </div>
    </>
  );
};

export default Index;
