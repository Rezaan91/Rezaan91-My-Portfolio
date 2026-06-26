import { Helmet } from "react-helmet";
import AboutSection from "@/components/AboutSection";

const About = () => (
  <>
    <Helmet>
      <title>About | Rezaan Achmat</title>
      <meta name="description" content="About Rezaan Achmat — full-stack developer with UI/UX background, building UM Tech CG." />
    </Helmet>
    <div className="pt-24">
      <AboutSection />
    </div>
  </>
);

export default About;
