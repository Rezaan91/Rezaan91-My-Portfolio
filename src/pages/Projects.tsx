import { Helmet } from "react-helmet";
import ProjectsSection from "@/components/ProjectsSection";

const Projects = () => (
  <>
    <Helmet>
      <title>Projects | Rezaan Achmat</title>
      <meta name="description" content="Featured projects by Rezaan Achmat including TrackSuite, UM-Tech-BizActivate and Watt Wallet Buddy." />
    </Helmet>
    <div className="pt-24">
      <ProjectsSection />
    </div>
  </>
);

export default Projects;
