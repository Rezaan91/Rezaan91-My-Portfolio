import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

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

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActive(null);
      if (window.location.hash) {
        history.replaceState(null, "", window.location.pathname + window.location.search);
      }
    }
  };

  const Current = active ? registry[active] : null;

  return (
    <Dialog open={!!active} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-6xl w-[95vw] max-h-[90vh] overflow-y-auto p-0 gap-0">
        <DialogTitle className="sr-only">{Current?.label ?? "Section"}</DialogTitle>
        <DialogDescription className="sr-only">{Current?.label ?? ""} section content</DialogDescription>
        {Current && <Current.Component />}
      </DialogContent>
    </Dialog>
  );
};

export default SectionModals;
