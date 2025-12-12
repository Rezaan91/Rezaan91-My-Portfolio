import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { GraduationCap, Award, BookOpen, Mic, PenLine, Brain } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import educationBg from "@/assets/education-bg.png";

const education = [
  {
    title: "Full Stack Development Certificate",
    institution: "FNB App Academy",
    period: "2025",
    icon: GraduationCap,
    status: "Completed",
    level: "Professional Certificate",
  },
  {
    title: "Diploma in Business Management",
    institution: "Damelin Mowbray Campus",
    period: "2016-2018",
    icon: Award,
    status: "Completed",
    level: "NQF Level 6",
  },
  {
    title: "National Certificate: Banking",
    institution: "Damelin",
    period: "2021-2022",
    icon: BookOpen,
    status: "Completed",
    level: "NQF Level 5",
  },
  {
    title: "IT Technical Support",
    institution: "CTU Training Solutions",
    period: "2019-2020",
    icon: BookOpen,
    status: "Completed",
    level: "NQF Level 4",
  },
  {
    title: "Project Management",
    institution: "Professional Certification",
    period: "2022-2025",
    icon: Award,
    status: "Completed",
    level: "NQF Level 3 & 4",
  },
  {
    title: "Generic Management",
    institution: "OMNI HR Consulting & Others",
    period: "2018-2023",
    icon: BookOpen,
    status: "Completed",
    level: "NQF Level 3, 4 & 5",
  },
  {
    title: "Conflict Management",
    institution: "Professional Training",
    period: "2024",
    icon: Brain,
    status: "Completed",
    level: "NQF Level 5",
  },
  {
    title: "Matric Equivalent",
    institution: "Epilepsy South Africa – SESTO",
    period: "2015",
    icon: GraduationCap,
    status: "Completed",
    level: "NQF Level 4",
  },
];

const shortCourses = [
  {
    title: "Executive Power Speaking Program",
    icon: Mic,
    topics: "Vocal usage, body language, speech construction, audience awareness",
    year: "2024",
  },
  {
    title: "Business Writing Program",
    icon: PenLine,
    topics: "Clarity, concision, persuasion writing, reader-centered writing",
    year: "2024",
  },
  {
    title: "Emotional Intelligence Program",
    icon: Brain,
    topics: "Self-awareness, self-regulation, social skills, decision-making",
    year: "2024",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 pointer-events-none"
        style={{ backgroundImage: `url(${educationBg})` }}
      />
      <div className="absolute inset-0 bg-background/70 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Education & Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A foundation of continuous learning and professional development
          </p>
        </motion.div>

        {/* Main Education Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {education.map((edu, index) => (
                <CarouselItem key={edu.title} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card rounded-xl p-6 h-full hover:scale-105 transition-transform duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary">
                        {edu.level}
                      </span>
                      <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                        <edu.icon size={20} />
                      </div>
                    </div>

                    <h3 className="font-display font-semibold text-lg mb-2 leading-tight">{edu.title}</h3>
                    <p className="text-primary text-sm mb-1">{edu.institution}</p>
                    <p className="text-muted-foreground text-xs mb-3">{edu.period}</p>

                    <span className="inline-flex items-center gap-1 text-xs text-green-400">
                      <span className="w-2 h-2 rounded-full bg-green-400" />
                      {edu.status}
                    </span>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 glass-button border-0" />
            <CarouselNext className="hidden md:flex -right-12 glass-button border-0" />
          </Carousel>
        </motion.div>

        {/* Professional Development Courses */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-display font-bold text-center mb-8">
            Professional Development
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {shortCourses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="glass-card rounded-xl p-5 hover:scale-105 transition-transform duration-300 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-secondary/20 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                    <course.icon size={18} />
                  </div>
                  <span className="text-xs text-muted-foreground">{course.year}</span>
                </div>
                <h4 className="font-display font-semibold text-sm mb-2">{course.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{course.topics}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
