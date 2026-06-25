import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";

type Key = "about" | "skills" | "projects" | "experience" | "education" | "contact";

const registry: Record<Key, { label: string; Component: () => JSX.Element }> = {
  about: { label: "About", Component: AboutSection },
  skills: { label: "Skills", Component: SkillsSection },
  projects: { label: "Projects", Component: ProjectsSection },
  experience: { label: "Experience", Component: ExperienceSection },
  education: { label: "Education", Component: EducationSection },
  contact: { label: "Contact", Component: ContactSection },
};

const SectionModals = () => {
  const [active, setActive] = useState<Key | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sync = () => {
      const hash = window.location.hash.replace("#", "") as Key;
      if (hash && hash in registry) setActive(hash);
      else setActive(null);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  useEffect(() => {
    if (active && containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [active]);

  const close = () => {
    setActive(null);
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  };

  if (!active) return null;
  const Current = registry[active];

  return (
    <section ref={containerRef} className="relative w-full bg-background">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 pt-8">
        <h2 className="text-2xl font-semibold text-foreground">{Current.label}</h2>
        <button
          onClick={close}
          aria-label="Close section"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-5 w-5" />
          Close
        </button>
      </div>
      <Current.Component />
    </section>
  );
};

export default SectionModals;
