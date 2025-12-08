import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Briefcase, Building, Users, FileText, Phone, Heart } from "lucide-react";

const experiences = [
  {
    title: "Executive Assistant",
    company: "Madrassa Tu Li Mauqeen",
    period: "2017-2021, 2023-Present",
    icon: FileText,
    responsibilities: [
      "Content creation and management",
      "Filing and data entry",
      "Typing and minutes of meetings",
      "Administrative task coordination",
    ],
    type: "Current",
  },
  {
    title: "Trainee – Project Management Theory",
    company: "Nthuse Foundation – De Beers Marine",
    period: "2024-2025",
    icon: Briefcase,
    responsibilities: [
      "Managed projects scope and time",
      "Cost and quality management",
      "Resources and communications",
      "Risk and procurement handling",
    ],
    type: "Recent",
  },
  {
    title: "Content Design Intern",
    company: "Activate Academy",
    period: "2022-2023",
    icon: Building,
    responsibilities: [
      "Created and optimized content",
      "Managed content across platforms",
      "Content strategy development",
      "Digital marketing support",
    ],
    type: "Previous",
  },
  {
    title: "Data Capturing and Analysis",
    company: "R and E and VANS LOGISTICS PTY Ltd.",
    period: "2021-2022",
    icon: FileText,
    responsibilities: [
      "Data capturing and verification",
      "Query verification",
      "Statistics review",
      "Business decision support",
    ],
    type: "Previous",
  },
  {
    title: "Remote Recruitment & Customer Care Agent",
    company: "Rustim Ariefdien Consultants Pty.",
    period: "2018",
    icon: Phone,
    responsibilities: [
      "Recruitment process coordination",
      "Candidate communications",
      "Customer service delivery",
      "Remote work management",
    ],
    type: "Previous",
  },
  {
    title: "Student Assistant (Volunteer)",
    company: "Damelin",
    period: "2016",
    icon: Heart,
    responsibilities: [
      "Assisted visually impaired student",
      "Assignment support",
      "Device assistance",
      "Academic guidance",
    ],
    type: "Volunteer",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-32 relative bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A timeline of professional roles showcasing growth and diverse experience
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
              {experiences.map((exp, index) => (
                <CarouselItem key={`${exp.title}-${exp.company}`} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card rounded-xl p-6 h-full hover:scale-105 transition-transform duration-300 group"
                  >
                    {/* Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 text-xs rounded-full ${
                        exp.type === "Current" 
                          ? "bg-primary/20 text-primary" 
                          : exp.type === "Recent"
                          ? "bg-accent/20 text-accent"
                          : exp.type === "Volunteer"
                          ? "bg-secondary/20 text-secondary"
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {exp.type}
                      </span>
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <exp.icon size={20} />
                      </div>
                    </div>

                    <h3 className="font-display font-semibold text-lg mb-1">{exp.title}</h3>
                    <p className="text-primary text-sm mb-1">{exp.company}</p>
                    <p className="text-muted-foreground text-xs mb-4">{exp.period}</p>

                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp) => (
                        <li key={resp} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          {resp}
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

export default ExperienceSection;
