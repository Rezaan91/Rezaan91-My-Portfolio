import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import { User, Code2, Briefcase, GraduationCap, FolderKanban, Mail } from "lucide-react";

type ItemKey = "about" | "skills" | "projects" | "experience" | "education" | "contact";

const items: { key: ItemKey; label: string; Icon: typeof User; Component: () => JSX.Element }[] = [
  { key: "about", label: "About", Icon: User, Component: AboutSection },
  { key: "skills", label: "Skills", Icon: Code2, Component: SkillsSection },
  { key: "projects", label: "Projects", Icon: FolderKanban, Component: ProjectsSection },
  { key: "experience", label: "Experience", Icon: Briefcase, Component: ExperienceSection },
  { key: "education", label: "Education", Icon: GraduationCap, Component: EducationSection },
  { key: "contact", label: "Contact", Icon: Mail, Component: ContactSection },
];

const SectionsAccordion = () => {
  const [value, setValue] = useState<string>("");

  // Open a panel when the URL hash changes (e.g., navbar link clicks)
  useEffect(() => {
    const openFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (items.some((i) => i.key === hash)) {
        setValue(hash);
        // Scroll the opened panel into view after expansion animation
        requestAnimationFrame(() => {
          setTimeout(() => {
            const el = document.getElementById(hash);
            el?.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 250);
        });
      }
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  const handleChange = (next: string) => {
    setValue(next);
    if (next) {
      requestAnimationFrame(() => {
        setTimeout(() => {
          const el = document.getElementById(next);
          el?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 250);
      });
    }
  };

  return (
    <section className="relative py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <Accordion
          type="single"
          collapsible
          value={value}
          onValueChange={handleChange}
          className="space-y-4"
        >
          {items.map(({ key, label, Icon, Component }) => (
            <AccordionItem
              key={key}
              value={key}
              id={key}
              className="scroll-mt-24 border border-border/60 rounded-2xl bg-card/70 backdrop-blur-md shadow-sm overflow-hidden transition-all hover:shadow-md hover:border-primary/40"
            >
              <AccordionTrigger className="px-6 py-5 md:px-8 md:py-6 text-left hover:no-underline group">
                <span className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary group-hover:from-primary/25 group-hover:to-accent/25 transition-colors">
                    <Icon size={20} />
                  </span>
                  <span className="text-lg md:text-2xl font-semibold tracking-tight">
                    {label}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-0 pb-0">
                <div className="border-t border-border/60">
                  <Component />
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default SectionsAccordion;
