import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-subtle">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 bg-gradient-mesh" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 400 + 100,
              height: Math.random() * 400 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 3 === 0 
                ? 'radial-gradient(circle, hsl(262 83% 58% / 0.1) 0%, transparent 70%)'
                : i % 3 === 1
                ? 'radial-gradient(circle, hsl(326 78% 58% / 0.1) 0%, transparent 70%)'
                : 'radial-gradient(circle, hsl(189 94% 50% / 0.1) 0%, transparent 70%)',
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Profile Image Placeholder */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="relative w-36 h-36 mx-auto mb-8"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-primary shadow-glow blur-xl opacity-60 animate-pulse" />
            <div className="relative w-full h-full rounded-full bg-gradient-primary shadow-elegant flex items-center justify-center text-white text-4xl font-bold ring-4 ring-primary/20 ring-offset-4">
              MS
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            MOHAMED SOHAIL S
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl gradient-text font-semibold mb-6"
          >
            Full Stack Web Developer | Data Visualization & AI Enthusiast
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Transforming data and code into intelligent, user-driven digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center mb-8"
          >
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="relative bg-gradient-primary hover:opacity-90 transition-all shadow-colored hover:shadow-glow hover:scale-105 group"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-2 border-primary hover:bg-gradient-primary hover:text-white hover:border-transparent transition-all shadow-card hover:shadow-elegant"
            >
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex gap-4 justify-center"
          >
            <a 
              href="https://www.linkedin.com/in/mohamed-sohail-b24681307" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gradient-to-br from-primary to-accent hover:shadow-glow transition-all hover:scale-110 group relative"
            >
              <Linkedin className="w-6 h-6 text-white relative z-10" />
              <div className="absolute inset-0 rounded-full bg-gradient-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a 
              href="mailto:mohamedsohail176@gmail.com"
              className="p-3 rounded-full bg-gradient-to-br from-accent to-accent-2 hover:shadow-colored transition-all hover:scale-110 group relative"
            >
              <Mail className="w-6 h-6 text-white relative z-10" />
              <div className="absolute inset-0 rounded-full bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 1, y: { repeat: Infinity, duration: 2 } }}
            className="mt-16"
          >
            <ArrowDown className="w-8 h-8 mx-auto text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
