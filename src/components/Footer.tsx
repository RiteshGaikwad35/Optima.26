import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface FooterProps {
  onSectionChange?: (section: string) => void;
}

const Footer = ({ onSectionChange }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-10 pb-4 overflow-hidden bg-secondary/30">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80px] h-[180px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-4 mb-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-center text-sm text-muted-foreground"
          >
            <p>
              © {currentYear} OPTIMA — Department of Computer Applications, NIT Trichy.
              All rights reserved.
            </p>
          </motion.div>

          <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="text-center"
>
  <a
    href="https://www.linkedin.com/in/ritesh-gaikwad-048642249/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex items-center gap-2
      text-2xl md:text-3xl
      font-premium font-semibold
      tracking-wide
      bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500
      bg-clip-text text-transparent
      hover:scale-105
      transition-all duration-300
    "
  >
    Built by Ritesh
    <ExternalLink className="w-5 h-5 text-primary" />
  </a>
</motion.div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
