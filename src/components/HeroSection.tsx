import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import backgroundImage from "@/assets/background.png";
import professionalPhoto from "@/assets/professional-photo.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-[0_0_60px_hsla(174,60%,45%,0.3)]">
              <img
                src={professionalPhoto}
                alt="Rezaan Achmat"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute inset-0 -m-3 rounded-full border-2 border-dashed border-accent/30 animate-spin" style={{ animationDuration: "30s" }} />
          </motion.div>

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left max-w-xl"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-primary font-medium mb-4"
            >
              Hello, I'm
            </motion.p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              <span className="gradient-text">Rezaan Achmat</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
              Aspiring Software & Web Developer | IT Support | Digital Problem-Solver
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Full Stack Developer with a passion for building innovative solutions. 
              Skilled in JavaScript, React, Node.js, and UI/UX design.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button variant="hero" asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/Rezaan91"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button p-3 rounded-full hover:scale-110 transition-transform"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/rezaan-achmat-59050774/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button p-3 rounded-full hover:scale-110 transition-transform"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:rezaan91@gmail.com"
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
      </div>
    </section>
  );
};

export default HeroSection;
