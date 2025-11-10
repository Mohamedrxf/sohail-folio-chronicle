import { motion } from "framer-motion";
import { ArrowUp, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background py-12 relative">
      {/* Back to top button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute -top-6 left-1/2 -translate-x-1/2"
      >
        <Button
          onClick={scrollToTop}
          size="icon"
          className="rounded-full w-12 h-12 bg-gradient-secondary hover:opacity-90 shadow-glow hover:shadow-colored hover:scale-110 transition-all"
        >
          <ArrowUp className="w-6 h-6 text-white" />
        </Button>
      </motion.div>

      <div className="container mx-auto px-4">
        <div className="text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold mb-4"
          >
            Mohamed Sohail S
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-background/80 mb-6"
          >
            Full Stack Web Developer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-4 justify-center mb-8"
          >
            <a
              href="https://www.linkedin.com/in/mohamed-sohail-b24681307"
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-3 rounded-full bg-gradient-primary hover:shadow-glow transition-all hover:scale-110 group"
            >
              <Linkedin className="w-5 h-5 text-white relative z-10" />
              <div className="absolute inset-0 rounded-full bg-gradient-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="mailto:mohamedsohail176@gmail.com"
              className="relative p-3 rounded-full bg-gradient-accent hover:shadow-colored transition-all hover:scale-110 group"
            >
              <Mail className="w-5 h-5 text-white relative z-10" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-2 to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-8 border-t border-background/20"
          >
            <p className="text-background/60 text-sm">
              © 2025 Mohamed Sohail S | All Rights Reserved
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
