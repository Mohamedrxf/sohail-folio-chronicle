import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const responsibilities = [
    "Worked on end-to-end web application design, development, and deployment.",
    "Built responsive user interfaces, handled database integration, and ensured smooth front-end to back-end communication.",
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12 rounded-full" />

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative glass-card rounded-2xl p-8 shadow-glow border-2 border-primary/20 hover:border-accent/40 transition-all duration-500 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
              <div className="absolute -inset-1 bg-gradient-secondary opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-gradient-secondary group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-glow">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 group-hover:gradient-text transition-all">Full Stack Web Development Intern</h3>
                    <p className="text-xl text-primary font-semibold mb-3">CodTech IT Solutions</p>
                    
                    <div className="flex flex-wrap gap-4 text-muted-foreground mb-6">
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent-2/10 border border-accent-2/20">
                        <MapPin className="w-4 h-4 text-accent-2" />
                        <span>Hyderabad, India</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                        <Calendar className="w-4 h-4 text-accent" />
                        <span>May 2025 - June 2025</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {responsibilities.map((responsibility, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-accent-2 mt-2 flex-shrink-0" />
                          <p className="text-foreground/90">{responsibility}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
