import { useState, useEffect } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const sections = ["home", "about", "skills", "experience", "education", "projects", "contact"];

const SectionNavigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    const updateCurrentSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setCurrentSectionIndex(i);
          break;
        }
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    window.addEventListener("scroll", updateCurrentSection);
    
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("scroll", updateCurrentSection);
    };
  }, []);

  const scrollToSection = (direction: "up" | "down") => {
    let targetIndex = currentSectionIndex;
    
    if (direction === "up" && currentSectionIndex > 0) {
      targetIndex = currentSectionIndex - 1;
    } else if (direction === "down" && currentSectionIndex < sections.length - 1) {
      targetIndex = currentSectionIndex + 1;
    }

    const targetElement = document.getElementById(sections[targetIndex]);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.5, x: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 flex flex-col gap-2"
        >
          <Button
            onClick={() => scrollToSection("up")}
            size="icon"
            disabled={currentSectionIndex === 0}
            className="rounded-full shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground w-12 h-12 transition-transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Scroll to previous section"
          >
            <ArrowUp size={20} />
          </Button>
          <Button
            onClick={() => scrollToSection("down")}
            size="icon"
            disabled={currentSectionIndex === sections.length - 1}
            className="rounded-full shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground w-12 h-12 transition-transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Scroll to next section"
          >
            <ArrowDown size={20} />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SectionNavigation;
