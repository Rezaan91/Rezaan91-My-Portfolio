import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "#home", color: "text-primary" },
  { name: "About", href: "#about", color: "text-accent" },
  { name: "Skills", href: "#skills", color: "text-secondary-foreground" },
  { name: "Projects", href: "#projects", color: "text-primary" },
  { name: "Experience", href: "#experience", color: "text-accent" },
  { name: "Education", href: "#education", color: "text-secondary-foreground" },
  { name: "Contact", href: "#contact", color: "text-primary" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver to track active section
  useEffect(() => {
    const sectionIds = navLinks.map(link => link.href.replace('#', ''));
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
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
          className="text-2xl font-display font-bold gradient-text"
        >
          RA
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 relative">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={`px-4 py-2 text-sm font-medium ${link.color} hover:opacity-80 transition-all duration-300 relative group`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavBubble"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-current transition-all duration-300 ${
                  isActive ? 'w-3/4' : 'w-0 group-hover:w-3/4'
                }`} />
              </a>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-3">
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
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className={`px-4 py-3 font-medium ${link.color} hover:opacity-80 rounded-lg transition-all relative ${
                      isActive ? 'bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30' : 'hover:bg-muted/50'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavBubbleMobile"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-full bg-current"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
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
