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
          className="relative overflow-hidden border-0 px-5 py-3 max-w-[220px] rounded-xl shadow-lg animate-in fade-in-0 zoom-in-95 duration-300"
          style={{
            background: 'linear-gradient(135deg, hsl(174, 60%, 40%) 0%, hsl(306, 58%, 45%) 100%)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-1">
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                className="text-lg"
              >
                🌗
              </motion.span>
              <p className="text-sm font-semibold text-white">Theme Toggle</p>
            </div>
            <p className="text-xs text-white/85 leading-relaxed">
              Click to switch between light and dark mode!
            </p>
          </div>
          <motion.div 
            className="absolute -bottom-1 -right-1 w-16 h-16 rounded-full bg-white/10 blur-xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ThemeToggle;
