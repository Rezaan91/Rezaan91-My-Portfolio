import { motion } from "framer-motion";
import { Code, Briefcase, GraduationCap, Heart, Rocket, Monitor, Wrench, Server, Brain } from "lucide-react";
import aboutBg from "@/assets/about-bg.png";
import professionalPhoto from "@/assets/professional-photo.jpg";

const beliefs = [
  "Good design is not decoration — it's how things work",
  "Clean code is just as important as clean UI",
  "Technology should simplify, not complicate",
  "The best products solve real problems",
];

const buildingItems = [
  { icon: Monitor, label: "Asset Monitoring Platforms" },
  { icon: Wrench, label: "Workflow & Developer Tools" },
  { icon: Server, label: "API-Driven Systems" },
  { icon: Brain, label: "Future AI Integration" },
];

const highlights = [
  {
    icon: Code,
    title: "Full Stack Development",
    description: "Proficient in JavaScript, React, Node.js, and modern web technologies",
  },
  {
    icon: Briefcase,
    title: "Project Management",
    description: "NQF 4 certified with experience in scope, time, cost, and quality management",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description: "FNB App Academy graduate with multiple certifications and diplomas",
  },
  {
    icon: Heart,
    title: "Problem Solver",
    description: "Passionate about creating innovative digital solutions that make a difference",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 pointer-events-none scale-110"
        style={{ backgroundImage: `url(${aboutBg})` }}
      />
      <div className="absolute inset-0 bg-background/60 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Intro Card with Photo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-8 md:p-12 mb-12"
          >
            <div className="flex flex-col items-center gap-8">
              <div className="relative">
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/30 shadow-[0_0_60px_hsla(174,60%,45%,0.3)]">
                  <img
                    src={professionalPhoto}
                    alt="Rezaan Achmat"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute inset-0 -m-3 rounded-full border-2 border-dashed border-accent/30 animate-spin" style={{ animationDuration: "30s" }} />
              </div>

              <div className="text-lg text-foreground leading-relaxed text-center space-y-4">
                <p>
                  I'm a frontend developer with a strong foundation in UI/UX design and full-stack development, focused on building digital experiences that are both functional and meaningful. I enjoy turning ideas into real-world applications that solve problems and deliver intuitive user experiences.
                </p>
                <p>
                  My journey into tech started with graphic design, where I developed a deep understanding of visual communication and user interaction. That foundation led me into development, where I began building web applications using JavaScript and Python—bridging the gap between design and functionality.
                </p>
                <p>
                  Today, I work at the intersection of design and development. I don't just build interfaces—I design experiences. I focus on usability, responsiveness, and clean architecture to create products that feel seamless, perform well, and look refined.
                </p>
                <p>
                  I'm currently building <span className="text-primary font-semibold">UM Tech CG</span>, where I develop scalable platforms, developer tools, and data-driven systems aimed at solving real-world challenges. My goal is to create technology that improves workflows, simplifies processes, and evolves into intelligent, impactful solutions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* My Story — Narrative Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card rounded-2xl p-8 md:p-12 mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold text-center mb-8">
              <span className="gradient-text">My Story</span>
            </h3>
            <div className="max-w-2xl mx-auto text-center space-y-5 text-foreground leading-relaxed">
              <p className="text-lg">
                I didn't start as a developer — I started as a designer.
              </p>
              <p>
                My entry into tech came through graphic design, where I learned how people see, feel, and interact with visuals. That foundation shaped how I think: every interface tells a story, and every detail influences the user experience.
              </p>
              <p className="text-muted-foreground italic">
                But design alone wasn't enough.<br />
                I wanted to build the ideas I imagined.
              </p>
              <p>
                So I moved into development, teaching myself how to turn concepts into real, working applications using JavaScript and Python. What started as curiosity quickly became a focus: creating digital products that don't just look good, but actually solve problems.
              </p>
              <motion.p
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl font-display font-bold text-primary py-4"
              >
                Today, I work at the intersection of design and development.
              </motion.p>
              <p>
                I build responsive, user-focused web applications with a strong emphasis on usability, clean structure, and performance. I think about the full experience — from the first interaction to the smallest detail — because great products aren't just built, they're designed with intention.
              </p>
            </div>
          </motion.div>

          {/* UM Tech CG Vision Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="rounded-2xl p-8 md:p-12 mb-12 bg-card/80 border border-border/50 shadow-xl relative overflow-hidden"
          >
            {/* Subtle gradient accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary" />
            <div className="text-center mb-8">
              <span className="text-2xl mb-2 block">🚀</span>
              <h3 className="text-2xl md:text-3xl font-display font-bold">
                <span className="gradient-text">Where I'm Going — UM Tech CG</span>
              </h3>
            </div>
            <div className="max-w-2xl mx-auto text-center space-y-5 text-foreground leading-relaxed mb-8">
              <p>
                I'm currently building <span className="text-primary font-semibold">UM Tech CG</span>, a long-term vision to create scalable, real-world digital solutions.
              </p>
              <p className="font-medium italic text-muted-foreground">
                This isn't just about projects — it's about building systems that matter.
              </p>
              <p>
                From asset monitoring platforms to workflow tools and API-driven services, my goal is to develop technology that helps people and businesses operate smarter. Over time, I'm working toward integrating data and AI into these systems to create more intelligent, adaptive platforms.
              </p>
              <p>
                <span className="text-primary font-semibold">UM Tech CG</span> is where my ideas evolve into products,<br />
                and where I'm building the future I want to work in.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {buildingItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-background/50 border border-border/30 hover:border-primary/40 transition-colors"
                >
                  <item.icon size={24} className="text-primary" />
                  <span className="text-sm font-medium text-center">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="glass-card rounded-xl p-6 hover:scale-105 transition-transform duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Closing — What I Believe */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <h3 className="text-xl md:text-2xl font-display font-bold mb-6">
              ⚡ <span className="gradient-text">What I Believe</span>
            </h3>
            <div className="max-w-xl mx-auto space-y-3 mb-8">
              {beliefs.map((belief, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="text-foreground flex items-center gap-3 justify-center"
                >
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  {belief}
                </motion.p>
              ))}
            </div>
            <p className="text-muted-foreground italic text-lg">
              "I'm always building, learning, and pushing toward creating technology that makes a real difference."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
