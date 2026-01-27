import { useState, useEffect } from "react";

const sectionIds = ["home", "about", "skills", "projects", "experience", "education", "contact"];

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(handleIntersect, {
          rootMargin: "-40% 0px -40% 0px",
          threshold: 0,
        });
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return activeSection;
};
