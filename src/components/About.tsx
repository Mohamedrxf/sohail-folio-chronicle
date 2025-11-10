import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12 rounded-full" />

          <div className="bg-card rounded-2xl shadow-card p-8 md:p-12 border border-border">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed text-center">
              Full Stack Developer passionate about building{" "}
              <span className="font-semibold text-primary">dynamic</span>,{" "}
              <span className="font-semibold text-accent">responsive</span>, and{" "}
              <span className="font-semibold text-primary">efficient</span> web applications. 
              Experienced in front-end and back-end development, data integration, and data visualization. 
              Always eager to learn and explore emerging technologies to create innovative digital solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
