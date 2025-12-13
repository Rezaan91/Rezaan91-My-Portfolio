import { motion } from "framer-motion";
import { Code, Briefcase, GraduationCap, Heart } from "lucide-react";
import aboutBg from "@/assets/about-bg.png";

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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-8 md:p-12 mb-12"
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Welcome to my portfolio! I'm Rezaan, a Full Stack Developer with a passion 
              for building innovative solutions. With a strong foundation in both technical 
              and business skills, I bring a unique perspective to software development.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey spans from IT Technical Support to Full Stack Development, 
              complemented by certifications in Project Management and Business Administration. 
              I thrive on creating user-centered applications that solve real-world problems 
              while delivering exceptional experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
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
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
