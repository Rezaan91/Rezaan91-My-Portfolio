import { Helmet } from "react-helmet";
import ExperienceSection from "@/components/ExperienceSection";

const Experience = () => (
  <>
    <Helmet>
      <title>Experience | Rezaan Achmat</title>
      <meta name="description" content="Professional experience and roles of Rezaan Achmat." />
    </Helmet>
    <div className="pt-24">
      <ExperienceSection />
    </div>
  </>
);

export default Experience;
