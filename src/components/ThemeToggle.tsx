import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const hasSeenThemeIntro = localStorage.getItem("hasSeenThemeIntro");
    if (!hasSeenThemeIntro) {
      setShowIntro(true);
      // Auto-hide after 5 seconds
      const timer = setTimeout(() => {
        setShowIntro(false);
        localStorage.setItem("hasSeenThemeIntro", "true");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClick = () => {
    toggleTheme();
    if (showIntro) {
      setShowIntro(false);
      localStorage.setItem("hasSeenThemeIntro", "true");
    }
  };

  return (
    <TooltipProvider>
      <Tooltip open={showIntro}>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClick}
            className="relative glass-button rounded-full overflow-hidden"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === "light" ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 90, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <Sun size={18} className="text-amber-500" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: -90, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <Moon size={18} className="text-blue-400" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </TooltipTrigger>
        <TooltipContent 
          side="bottom" 
          className="bg-card border-primary/30 text-foreground px-4 py-2 max-w-[200px]"
        >
          <p className="text-sm font-medium">🌗 Theme Toggle</p>
          <p className="text-xs text-muted-foreground mt-1">
            Click to switch between light and dark mode!
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ThemeToggle;
