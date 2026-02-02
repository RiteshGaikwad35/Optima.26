import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Instagram, Twitter, Linkedin, Youtube, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Events", href: "#events" },
    { name: "Gallery", href: "#gallery" },
    { name: "Archive", href: "#archive" },
    { name: "Team", href: "#team" },
  ];

  return (
    <footer className="relative pt-24 pb-8 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-display font-bold gradient-text mb-4">OPTIMA</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Where Optimization Meets Innovation. The flagship technical event of the 
              Department of Computer Applications, NIT Trichy.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-2.5 rounded-full glass-card hover:bg-primary/20 hover:text-primary transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-display font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-display font-semibold text-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:optima@nitt.edu"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-3"
                >
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  optima@nitt.edu
                </a>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-3"
                >
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Department of Computer Applications,<br />
                  NIT Trichy, Tamil Nadu 620015
                </span>
              </li>
            </ul>
          </motion.div>

          {/* NIT Trichy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-display font-semibold text-foreground mb-6">NIT Trichy</h4>
            <div className="glass-card rounded-xl p-4 mb-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/5/52/National_Institute_of_Technology%2C_Tiruchirappalli_Logo.svg/1200px-National_Institute_of_Technology%2C_Tiruchirappalli_Logo.svg.png"
                alt="NIT Trichy"
                className="h-16 object-contain mx-auto mb-3"
              />
              <p className="text-sm text-muted-foreground text-center">
                National Institute of Technology, Tiruchirappalli
              </p>
            </div>
            <a
              href="https://www.nitt.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-primary hover:text-accent transition-colors text-sm"
            >
              Visit Official Website
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm text-muted-foreground"
        >
          <p>
            © {currentYear} OPTIMA — Department of Computer Applications, NIT Trichy.
            All rights reserved.
          </p>
          <p className="mt-2">
            Made with <span className="text-primary">♥</span> for the spirit of innovation.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
