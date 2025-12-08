import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32 relative bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Let's connect and discuss how I can contribute to your team or project
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-display font-semibold text-xl mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:rezaan91@gmail.com"
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">rezaan91@gmail.com</p>
                    </div>
                  </a>

                  <a 
                    href="https://www.linkedin.com/in/rezaan-achmat-59050774/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <Linkedin size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">LinkedIn</p>
                      <p className="font-medium">Rezaan Achmat</p>
                    </div>
                  </a>

                  <a 
                    href="https://github.com/Rezaan91"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="p-3 rounded-lg bg-secondary/20 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                      <Github size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">GitHub</p>
                      <p className="font-medium">Rezaan91</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-3 rounded-lg">
                    <div className="p-3 rounded-lg bg-muted text-muted-foreground">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">South Africa</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col justify-center"
            >
              <div className="glass-card rounded-xl p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center">
                  <Send size={28} className="text-foreground" />
                </div>
                
                <h3 className="font-display font-semibold text-2xl mb-4">
                  Ready to Collaborate?
                </h3>
                
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm currently looking for new opportunities. Whether you have a project 
                  in mind or just want to chat, feel free to reach out!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" asChild>
                    <a href="mailto:rezaan91@gmail.com">
                      <Mail size={18} />
                      Send Email
                    </a>
                  </Button>
                  <Button variant="glass" size="lg" asChild>
                    <a 
                      href="https://www.linkedin.com/in/rezaan-achmat-59050774/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={18} />
                      Connect
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
