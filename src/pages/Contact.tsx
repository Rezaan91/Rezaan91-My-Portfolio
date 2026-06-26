import { Helmet } from "react-helmet";
import ContactSection from "@/components/ContactSection";

const Contact = () => (
  <>
    <Helmet>
      <title>Contact | Rezaan Achmat</title>
      <meta name="description" content="Get in touch with Rezaan Achmat." />
    </Helmet>
    <div className="pt-24">
      <ContactSection />
    </div>
  </>
);

export default Contact;
