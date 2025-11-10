import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, Users, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projectsData = [
  {
    icon: BarChart3,
    title: "Data Visualization Dashboard",
    description: "Developed an interactive dashboard using Python, Pandas, Matplotlib, and Plotly.",
    features: [
      "Displayed real-world datasets like COVID-19 cases and stock prices",
      "Integrated with Flask for web deployment",
      "Live data updates and interactive visualizations",
    ],
    tech: ["Python", "Pandas", "Matplotlib", "Plotly", "Flask"],
  },
  {
    icon: Users,
    title: "Student Management System",
    description: "Built a database-driven system using Python and MySQL.",
    features: [
      "CRUD operations for managing student details",
      "Attendance and grades management",
      "Optimized performance using SQL joins and normalization",
    ],
    tech: ["Python", "MySQL", "SQL"],
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12 rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group"
              >
                <div className="relative glass-card rounded-2xl p-8 shadow-card border-2 border-border h-full transition-all duration-300 hover:shadow-glow hover:border-transparent overflow-hidden group-hover:scale-[1.02]">
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-accent-2/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -inset-1 bg-gradient-primary opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-colored">
                      <project.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground mb-4">{project.description}</p>

                    <div className="space-y-2 mb-6">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <p className="text-sm text-foreground/80">{feature}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-xs rounded-full font-medium border border-primary/30 hover:border-primary hover:shadow-colored transition-all hover:scale-105 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Button variant="outline" size="sm" className="group/btn border-2 border-primary/40 hover:bg-gradient-primary hover:text-white hover:border-transparent">
                      View Details
                      <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
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

export default Projects;
