import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin, Mail, Github } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Faculty Advisor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&face",
    linkedin: "#",
    email: "#",
  },
  {
    name: "Ananya Sharma",
    role: "Event Coordinator",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&face",
    linkedin: "#",
    email: "#",
    github: "#",
  },
  {
    name: "Vikram Patel",
    role: "Technical Lead",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&face",
    linkedin: "#",
    email: "#",
    github: "#",
  },
  {
    name: "Priya Menon",
    role: "Design Lead",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&face",
    linkedin: "#",
    email: "#",
  },
  {
    name: "Arjun Reddy",
    role: "Marketing Head",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&face",
    linkedin: "#",
    email: "#",
  },
  {
    name: "Sneha Krishnan",
    role: "Sponsorship Lead",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&face",
    linkedin: "#",
    email: "#",
  },
];

const Team = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="section-container relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div ref={containerRef} className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-primary font-medium mb-4">
            The Minds Behind OPTIMA
          </span>
          <h2 className="section-title">Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet the dedicated individuals who work tirelessly to make OPTIMA 
            an unforgettable experience for all participants.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center group card-hover"
            >
              {/* Avatar */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="relative w-full h-full object-cover rounded-full ring-4 ring-border group-hover:ring-primary/50 transition-all duration-300"
                />
              </div>

              {/* Info */}
              <h3 className="text-xl font-display font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <p className="text-primary text-sm font-medium mb-4">{member.role}</p>

              {/* Social Links */}
              <div className="flex justify-center gap-3">
                <a
                  href={member.linkedin}
                  className="p-2 rounded-full glass-card hover:bg-primary/20 hover:text-primary transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={member.email}
                  className="p-2 rounded-full glass-card hover:bg-primary/20 hover:text-primary transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                </a>
                {member.github && (
                  <a
                    href={member.github}
                    className="p-2 rounded-full glass-card hover:bg-primary/20 hover:text-primary transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Team;
