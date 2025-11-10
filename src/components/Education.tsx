import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, School } from "lucide-react";

const educationData = [
  {
    icon: GraduationCap,
    degree: "B.E. Computer Science and Engineering",
    institution: "Easwari Engineering College, Chennai",
    period: "2023 - 2027",
    grade: "CGPA: 8.2",
  },
  {
    icon: School,
    degree: "12th Grade",
    institution: "St. Michaels Academy Matric Hr. Sec. School, Adyar, Chennai",
    period: "2022 - 2023",
    grade: "81%",
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12 rounded-full" />

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative mb-12 md:mb-8 flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 -ml-3 w-6 h-6 rounded-full bg-gradient-primary border-4 border-background z-10" />

                  {/* Content card */}
                  <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <div className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-elegant transition-shadow duration-300">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-gradient-primary">
                          <edu.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg mb-1">{edu.degree}</h3>
                          <p className="text-muted-foreground text-sm mb-2">{edu.institution}</p>
                          <div className="flex flex-wrap gap-2 text-sm">
                            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                              {edu.period}
                            </span>
                            <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">
                              {edu.grade}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
