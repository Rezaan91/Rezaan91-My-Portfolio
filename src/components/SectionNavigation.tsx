import { useState, useEffect, useCallback } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const sections = ["home", "about", "skills", "projects", "experience", "education", "contact"];

const SectionNavigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const updateCurrentSection = useCallback(() => {
    if (isScrolling) return;
    
    const viewportMiddle = window.scrollY + window.innerHeight / 3;
    
    let bestIndex = 0;
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el && el.offsetTop <= viewportMiddle) {
        bestIndex = i;
        break;
      }
    }
    setCurrentSectionIndex(bestIndex);
  }, [isScrolling]);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
      updateCurrentSection();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [updateCurrentSection]);

  const scrollToSection = (direction: "up" | "down") => {
    if (isScrolling) return;

    let targetIndex = currentSectionIndex;
    if (direction === "up" && currentSectionIndex > 0) {
      targetIndex = currentSectionIndex - 1;
    } else if (direction === "down" && currentSectionIndex < sections.length - 1) {
      targetIndex = currentSectionIndex + 1;
    }

    if (targetIndex === currentSectionIndex) return;

    const targetElement = document.getElementById(sections[targetIndex]);
    if (!targetElement) return;

    setIsScrolling(true);
    setCurrentSectionIndex(targetIndex);

    const targetTop = targetElement.offsetTop;
    window.scrollTo({ top: targetTop, behavior: "smooth" });

    // Wait for scroll to finish before allowing updates again
    setTimeout(() => {
      setIsScrolling(false);
    }, 800);
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
