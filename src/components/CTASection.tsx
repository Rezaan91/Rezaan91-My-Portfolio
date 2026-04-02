import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="glass-card rounded-2xl p-10 md:p-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              <span className="gradient-text">Let's Work Together</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full mb-8" />
            
            <p className="text-foreground text-lg leading-relaxed mb-4">
              I'm currently open to junior frontend, full-stack, or UI/UX opportunities where I can contribute, learn, and grow.
            </p>
            <p className="text-foreground text-lg leading-relaxed">
              If you're looking for someone who can combine development with design thinking to build user-focused digital experiences, feel free to reach out.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
