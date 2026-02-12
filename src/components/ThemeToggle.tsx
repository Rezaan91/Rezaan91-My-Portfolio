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
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handler = () => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 6000);
    };
    window.addEventListener("showThemeTooltip", handler);
    return () => window.removeEventListener("showThemeTooltip", handler);
  }, []);

  const handleClick = () => {
    toggleTheme();
    setShowTooltip(false);
  };

  return (
    <TooltipProvider>
      <Tooltip open={showTooltip}>
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
          className="bg-card border-primary/30 text-foreground px-4 py-3 max-w-[280px]"
        >
          <div className="flex items-start gap-2">
            <span className="text-primary mt-0.5">↑</span>
            <div>
              <p className="text-sm font-bold">Theme Toggle 🎨</p>
              <p className="text-xs text-muted-foreground mt-2">
                I've added a light and dark mode feature for your viewing comfort.
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                You can toggle between themes anytime using the sun/moon icon in the navigation bar. Your preference will be saved for future visits.
              </p>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ThemeToggle;
