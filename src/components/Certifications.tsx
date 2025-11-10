import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";

const certificationsData = [
  {
    title: "Introduction to Internet of Things",
    issuer: "IIT Kharagpur",
  },
  {
    title: "CSS3 Certification",
    issuer: "Infosys",
  },
  {
    title: "HTML5 Certification",
    issuer: "Infosys",
  },
  {
    title: "Python Essentials",
    issuer: "Cisco Networking Academy",
  },
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {certificationsData.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className="relative glass-card rounded-xl p-6 shadow-card border border-border h-full transition-all duration-300 hover:shadow-colored hover:border-accent/40 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-accent via-accent to-orange-500 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 shadow-colored">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1 group-hover:gradient-text transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
