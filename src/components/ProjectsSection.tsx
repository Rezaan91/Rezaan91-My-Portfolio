import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Rocket, Shield, Bus, BarChart3, Smartphone, Sparkles } from "lucide-react";

const projects = [
  {
    title: "FNB App Academy",
    description: "Full Stack Development training program focusing on modern web technologies, React, Node.js, and best practices in software development.",
    icon: Rocket,
    tags: ["React", "Node.js", "JavaScript", "Full Stack"],
    color: "from-primary to-accent",
  },
  {
    title: "Avengers",
    description: "Interactive web application project showcasing frontend development skills with dynamic content and engaging user interface design.",
    icon: Sparkles,
    tags: ["HTML", "CSS", "JavaScript", "UI/UX"],
    color: "from-accent to-secondary",
  },
  {
    title: "PineCityZoo",
    description: "Zoo management web application featuring interactive exhibits, visitor information, and responsive design principles.",
    icon: Smartphone,
    tags: ["React", "Responsive Design", "UX"],
    color: "from-primary to-secondary",
  },
  {
    title: "Bias Audit Report",
    description: "Comprehensive analysis project focusing on identifying and documenting biases in systems with detailed reporting capabilities.",
    icon: Shield,
    tags: ["Data Analysis", "Reporting", "Documentation"],
    color: "from-accent to-primary",
  },
  {
    title: "Golden Arrow Mobile App",
    description: "Mobile application concept for public transportation, featuring route planning, schedules, and real-time updates.",
    icon: Bus,
    tags: ["Mobile", "UI/UX", "Transportation"],
    color: "from-secondary to-accent",
  },
  {
    title: "Sentiment Analysis Dashboard",
    description: "Data visualization dashboard for analyzing sentiment patterns with interactive charts and real-time data processing.",
    icon: BarChart3,
    tags: ["Data Viz", "Analytics", "Dashboard"],
    color: "from-primary to-accent",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
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
                    className="glass-card rounded-xl overflow-hidden h-full group hover:scale-105 transition-transform duration-300"
                  >
                    {/* Project Header */}
                    <div className={`h-32 bg-gradient-to-br ${project.color} p-6 flex items-center justify-center relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-background/20" />
                      <project.icon size={48} className="text-foreground relative z-10" />
                    </div>
                    
                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="font-display font-semibold text-xl mb-3">{project.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-3">
                        <Button variant="glass" size="sm" asChild>
                          <a href="https://github.com/Rezaan91" target="_blank" rel="noopener noreferrer">
                            <Github size={16} />
                            Code
                          </a>
                        </Button>
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
