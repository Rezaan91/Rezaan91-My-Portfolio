import { Helmet } from "react-helmet";
import EducationSection from "@/components/EducationSection";

const Education = () => (
  <>
    <Helmet>
      <title>Education | Rezaan Achmat</title>
      <meta name="description" content="Educational background and certifications of Rezaan Achmat." />
    </Helmet>
    <div className="pt-24">
      <EducationSection />
    </div>
  </>
);

export default Education;
