import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import backgroundImage from "@/assets/background.png";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background Image with Overlay */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-[120%] object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background/90" />
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      <motion.div className="container mx-auto px-4 z-10" style={{ opacity }}>
        <div className="flex flex-col items-center justify-center gap-12">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-xl"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-primary font-medium mb-4"
            >
              Hi, I'm
            </motion.p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              <span className="gradient-text">Rezaan Achmat</span>
            </h1>
            
            <p className="text-lg md:text-xl text-foreground mb-6 leading-relaxed font-medium">
              Frontend Developer | UI/UX Designer
            </p>
            
            <p className="text-foreground mb-8 leading-relaxed max-w-lg mx-auto">
              I build responsive, user-focused web applications that combine clean code with intuitive design. With a background in both full-stack development and graphic design, I focus on creating digital experiences that are not only functional, but visually engaging and easy to use.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center mb-8">
              <Button variant="hero" asChild>
                <a href="#projects">
                  View My Work
                  <ArrowDown size={18} className="ml-2" />
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center">
              <a
                href="https://github.com/Rezaan91"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open GitHub profile"
                title="GitHub"
                className="glass-button p-3 rounded-full hover:scale-110 transition-transform"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/rezaan-achmat-59050774/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LinkedIn profile"
                title="LinkedIn"
                className="glass-button p-3 rounded-full hover:scale-110 transition-transform"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:rezaan91@gmail.com"
                aria-label="Send email to rezaan91@gmail.com"
                title="Email"
                className="glass-button p-3 rounded-full hover:scale-110 transition-transform"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-sm">Scroll Down</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
