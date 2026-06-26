import { Helmet } from "react-helmet";
import SkillsSection from "@/components/SkillsSection";

const Skills = () => (
  <>
    <Helmet>
      <title>Skills | Rezaan Achmat</title>
      <meta name="description" content="Technical skills and tools Rezaan Achmat works with." />
    </Helmet>
    <div className="pt-24">
      <SkillsSection />
    </div>
  </>
);

export default Skills;
