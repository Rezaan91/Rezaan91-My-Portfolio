import { Helmet } from "react-helmet";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Rezaan Achmat | Full Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Rezaan Achmat - Full-Stack Developer & UI/UX Designer. Builder behind Ubuntu Mzansi Tech."
        />
        <meta name="keywords" content="Rezaan Achmat, Full Stack Developer, Web Developer, React, JavaScript, Portfolio, South Africa" />
        <meta property="og:title" content="Rezaan Achmat | Full Stack Developer Portfolio" />
        <meta property="og:description" content="Full Stack Developer with a passion for building innovative solutions." />
        <meta property="og:type" content="website" />
      </Helmet>
      <HeroSection />
      <CTASection />
    </>
  );
};

export default Index;
