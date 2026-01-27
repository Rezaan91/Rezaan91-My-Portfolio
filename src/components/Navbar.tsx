import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { useActiveSection } from "@/hooks/use-active-section";

const navLinks = [
  { name: "Home", href: "#home", id: "home", color: "text-primary", activeColor: "bg-primary/10" },
  { name: "About", href: "#about", id: "about", color: "text-accent", activeColor: "bg-accent/10" },
  { name: "Skills", href: "#skills", id: "skills", color: "text-secondary-foreground", activeColor: "bg-secondary/30" },
  { name: "Projects", href: "#projects", id: "projects", color: "text-primary", activeColor: "bg-primary/10" },
  { name: "Experience", href: "#experience", id: "experience", color: "text-accent", activeColor: "bg-accent/10" },
  { name: "Education", href: "#education", id: "education", color: "text-secondary-foreground", activeColor: "bg-secondary/30" },
  { name: "Contact", href: "#contact", id: "contact", color: "text-primary", activeColor: "bg-primary/10" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a 
          href="#home" 
          onClick={(e) => handleSmoothScroll(e, '#home')}
          className="text-2xl font-display font-bold gradient-text md:w-32"
        >
          RA
        </a>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex items-center justify-center gap-1 flex-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={`px-4 py-2 text-sm font-medium ${link.color} hover:opacity-80 transition-all duration-300 relative group rounded-md ${
                  isActive ? link.activeColor : ""
                }`}
              >
                {link.name}
                <motion.span 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-current"
                  initial={{ width: 0 }}
                  animate={{ width: isActive ? "75%" : 0 }}
                  transition={{ duration: 0.3 }}
                />
                {!isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-current group-hover:w-3/4 transition-all duration-300" />
                )}
              </a>
            );
          })}
        </div>

        <div className="hidden md:flex items-center justify-end gap-3 md:w-32">
          <Button variant="glass" asChild>
            <a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}>Get in Touch</a>
          </Button>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card mt-2 mx-4 rounded-lg overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className={`px-4 py-3 font-medium ${link.color} hover:opacity-80 rounded-lg transition-all ${
                      isActive ? `${link.activeColor} font-semibold` : "hover:bg-muted/50"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <Button variant="glass" className="mt-2" asChild>
                <a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}>Get in Touch</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
