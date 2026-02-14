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
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.3 }}
  className="text-center"
>
  <a
    href="https://www.linkedin.com/in/ritesh-gaikwad-048642249/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex items-center gap-1.5
      text-sm md:text-base
      font-medium
      text-muted-foreground
      hover:text-primary
      transition-colors duration-300
      tracking-wide
    "
  >
    Built by Ritesh
    <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
  </a>
</motion.div>

         

        </div>
      </div>
    </footer>
  );
};

export default Footer;
