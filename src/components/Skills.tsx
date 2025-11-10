import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Globe, BarChart3 } from "lucide-react";

const skillsData = [
  {
    icon: Code2,
    category: "Programming Languages",
    skills: ["Python", "Java", "C", "C++"],
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Database,
    category: "Database Tools",
    skills: ["MySQL", "MongoDB", "Excel"],
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Globe,
    category: "Web Development",
    skills: ["HTML", "CSS"],
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: BarChart3,
    category: "Data Visualization & Tools",
    skills: ["Power BI", "AI-based tools"],
    color: "from-cyan-500 to-cyan-600",
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {skillsData.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className="bg-card rounded-xl p-6 shadow-card border border-border h-full transition-all duration-300 hover:shadow-elegant">
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="font-bold text-lg mb-3">{skill.category}</h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {skill.skills.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-muted text-foreground text-sm rounded-full border border-border"
                      >
                        {item}
                      </span>
                    ))}
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

export default Skills;
