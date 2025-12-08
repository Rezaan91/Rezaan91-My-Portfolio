import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Monitor, FileSpreadsheet, PenTool, MessageSquare, FolderKanban, Code, Database, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Microsoft Office",
    icon: Monitor,
    skills: [
      "Word - Creating, editing, formatting documents",
      "Excel - Advanced data analysis & formulas",
      "PowerPoint - Engaging presentations",
      "Outlook - Email management",
    ],
  },
  {
    title: "Google Suite",
    icon: FileSpreadsheet,
    skills: [
      "Google Drive - Secure file storage & sharing",
      "Google Docs - Collaborative documents",
      "Google Sheets - Data analysis & visualization",
    ],
  },
  {
    title: "Development Tools",
    icon: Code,
    skills: [
      "JavaScript & TypeScript",
      "React & Node.js",
      "HTML5 & CSS3",
      "UI/UX Design Principles",
    ],
  },
  {
    title: "Design & CRM",
    icon: PenTool,
    skills: [
      "Zoho CRM - Contact & sales tracking",
      "Canva - Graphics & infographics",
      "Data visualization",
      "Content creation",
    ],
  },
  {
    title: "Data Management",
    icon: Database,
    skills: [
      "Database management",
      "Data entry & verification",
      "Statistical analysis",
      "Accuracy & attention to detail",
    ],
  },
  {
    title: "Communication",
    icon: MessageSquare,
    skills: [
      "Zoom & Microsoft Teams",
      "Professional writing",
      "Public speaking",
      "Stakeholder communication",
    ],
  },
  {
    title: "Project Management",
    icon: FolderKanban,
    skills: [
      "Scope & time management",
      "Cost & quality control",
      "Risk management",
      "Resource & procurement",
    ],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: [
      "Emotional intelligence",
      "Conflict resolution",
      "Team collaboration",
      "Adaptability",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32 relative bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit combining technical proficiency with strong soft skills
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
              {skillCategories.map((category, index) => (
                <CarouselItem key={category.title} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card rounded-xl p-6 h-full hover:scale-105 transition-transform duration-300 group"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                        <category.icon size={24} />
                      </div>
                      <h3 className="font-display font-semibold text-lg">{category.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {category.skills.map((skill) => (
                        <li key={skill} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {skill}
                        </li>
                      ))}
                    </ul>
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

export default SkillsSection;
