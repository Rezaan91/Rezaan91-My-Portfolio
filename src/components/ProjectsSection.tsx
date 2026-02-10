import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Rocket, Shield, Bus, BarChart3, Smartphone, Sparkles } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import projectsBg from "@/assets/projects-bg.png";

const projects = [
  {
    title: "FNB App Academy",
    description: "Full Stack Development training program focusing on modern web technologies, React, Node.js, and best practices in software development.",
    icon: Rocket,
    tags: ["React", "Node.js", "JavaScript", "Full Stack"],
    color: "from-primary to-accent",
    repoUrl: "https://github.com/Rezaan91/FNB-App-Academy",
    demoUrl: "",
  },
  {
    title: "Avengers",
    description: "Interactive web application project showcasing frontend development skills with dynamic content and engaging user interface design.",
    icon: Sparkles,
    tags: ["HTML", "CSS", "JavaScript", "UI/UX"],
    color: "from-accent to-secondary",
    repoUrl: "https://github.com/Rezaan91/Avengers",
    demoUrl: "",
  },
  {
    title: "PineCityZoo",
    description: "Zoo management web application featuring interactive exhibits, visitor information, and responsive design principles.",
    icon: Smartphone,
    tags: ["React", "Responsive Design", "UX"],
    color: "from-primary to-secondary",
    repoUrl: "https://github.com/Rezaan91/PineCityZoo",
    demoUrl: "",
  },
  {
    title: "Bias Audit Report",
    description: "Comprehensive analysis project focusing on identifying and documenting biases in systems with detailed reporting capabilities.",
    icon: Shield,
    tags: ["Data Analysis", "Reporting", "Documentation"],
    color: "from-accent to-primary",
    repoUrl: "https://github.com/Rezaan91/Bias-Audit-Report",
    demoUrl: "",
  },
  {
    title: "Golden Arrow Mobile App",
    description: "Mobile application concept for public transportation, featuring route planning, schedules, and real-time updates.",
    icon: Bus,
    tags: ["Mobile", "UI/UX", "Transportation"],
    color: "from-secondary to-accent",
    repoUrl: "https://github.com/Rezaan91/Golden-Arrow-Mobile-App",
    demoUrl: "",
  },
  {
    title: "Sentiment Analysis Dashboard",
    description: "Data visualization dashboard for analyzing sentiment patterns with interactive charts and real-time data processing.",
    icon: BarChart3,
    tags: ["Data Viz", "Analytics", "Dashboard"],
    color: "from-primary to-accent",
    repoUrl: "https://github.com/Rezaan91/Sentiment-Analysis-Dashboard",
    demoUrl: "",
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={sectionRef} id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 pointer-events-none scale-110"
        style={{ backgroundImage: `url(${projectsBg})`, y }}
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
            <span className="gradient-text">Projects & Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A showcase of my development projects demonstrating skills in web and mobile application development
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={project.title} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -8,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    className="glass-card rounded-xl overflow-hidden h-full group cursor-pointer"
                  >
                    {/* Project Header */}
                    <div className={`h-32 bg-gradient-to-br ${project.color} p-6 flex items-center justify-center relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-background/20 group-hover:bg-background/10 transition-colors duration-300" />
                      <motion.div
                        whileHover={{ rotate: 12, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <project.icon size={48} className="text-foreground relative z-10" />
                      </motion.div>
                    </div>
                    
                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="font-display font-semibold text-xl mb-3 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <motion.span 
                            key={tag} 
                            className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: tagIndex * 0.05 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-3">
                        <Button variant="glass" size="sm" asChild className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                            <Github size={16} />
                            Code
                          </a>
                        </Button>
                        {project.demoUrl && (
                          <Button variant="glass" size="sm" asChild className="group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink size={16} />
                              Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 glass-button border-0" />
            <CarouselNext className="hidden md:flex -right-12 glass-button border-0" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
