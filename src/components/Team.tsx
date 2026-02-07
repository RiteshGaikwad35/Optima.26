import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin, Mail, Github } from "lucide-react";

/* ----------------------------------------
   DATA
---------------------------------------- */

const facultyAdvisor = {
  name: "Dr. B. Janet",
  subtitle: "Department of Computer Applications",
  image: "/team/janet.jpeg",
};

const teamMembers = [
  {
    name: "Arjun",
    role: "Executive",
    subtitle: "M.Sc Computer Science",
    image: "/team/arjun.jpeg",
    email: "arjunchaudhary682@gmail.com",
    linkedin:"https://www.linkedin.com/in/arjun-chaudhary-482399185/"
  },
  {
    name: "Vibhor",
    role: "Core Member",
    subtitle: "M.Sc Computer Science",
    image: "/team/vibhor.jpeg",
    linkedin:"https://www.linkedin.com/in/vibhor-thakur-5a298337a/",
    email:"thakur4vibhor@gmail.com"
  },
  {
    name: "Shamas",
    role: "Public Representative",
    subtitle: "M.Sc Computer Science",
    image: "/team/shamas.jpeg",
    linkedin: "https://www.linkedin.com/in/shammas-ca-973a48317/",
    email:"shammasca16@gmail.com",
    github:"https://github.com/shammasca313grabs-dot",
  },
  {
    name: "Shuvrajyoti",
    role: "Core Member",
    subtitle: "M.Sc Computer Science",
    image: "/team/shbhu.jpeg",
    linkedin:"https://www.linkedin.com/in/shuvrajyotin/",
    github: "https://github.com/wolfang666",
  },
  {
    name: "Akriti Jaiswal",
    role: "Core Member",
    subtitle: "M.Tech Data Analytics",
    image: "/team/akrit.jpeg",
    linkedin: "https://www.linkedin.com/in/akriti-jaiswal-760834232/",
    email:"akritijofficial@gmail.com",
  },
];

/* ----------------------------------------
   TEAM CARD
---------------------------------------- */

const TeamCard = ({ member }) => {
  return (
    <div className="glass-card rounded-2xl p-6 text-center group card-hover">
      {/* Avatar */}
      <div className="relative w-32 h-32 mx-auto mb-6">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
        <img
          src={member.image}
          alt={member.name}
          className="relative w-full h-full object-cover rounded-full ring-4 ring-border group-hover:ring-primary/50 transition-all"
        />
      </div>

      {/* Name */}
      <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition">
        {member.name}
      </h3>

      {/* Role */}
      <p className="text-primary text-sm font-medium">
        {member.role}
      </p>

      {/* Subtitle */}
      {member.subtitle && (
        <p className="text-muted-foreground text-base mt-1 mb-4">
          {member.subtitle}
        </p>
      )}

      {/* Social Icons (optional) */}
      <div className="flex justify-center gap-3">
        {member.linkedin && (
          <a href={member.linkedin} className="p-2 rounded-full glass-card hover:text-primary">
            <Linkedin className="w-4 h-4" />
          </a>
        )}
        {member.email && (
          <a href={member.email} className="p-2 rounded-full glass-card hover:text-primary">
            <Mail className="w-4 h-4" />
          </a>
        )}
        {member.github && (
          <a href={member.github} className="p-2 rounded-full glass-card hover:text-primary">
            <Github className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
};

/* ----------------------------------------
   FACULTY ADVISOR CARD (GRAY THEME)
---------------------------------------- */

const FacultyAdvisorCard = ({ member }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="relative max-w-md w-full"
    >
      {/* Soft Gray Glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-gray-400/20 via-gray-500/20 to-gray-600/20 blur-3xl rounded-3xl" />

      <div className="relative glass-card rounded-3xl p-8 text-center border border-gray-500/30">
        {/* Badge */}
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold tracking-wide rounded-full 
        bg-gradient-to-r from-gray-400 to-gray-600 text-white shadow-lg">
          FACULTY ADVISOR
        </span>

        {/* Avatar */}
        <div className="relative w-40 h-40 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-400 via-gray-500 to-gray-700 blur-xl opacity-80" />
          <img
            src={member.image}
            alt={member.name}
            className="relative w-full h-full object-cover rounded-full ring-4 ring-gray-400/60"
          />
        </div>

        {/* Info */}
        <h3 className="text-2xl font-bold mb-1">
          {member.name}
        </h3>

        <p className="text-sm font-semibold text-gray-300">
          {member.role}
        </p>

        {/* Subtitle */}
        {member.subtitle && (
          <p className="text-base text-muted-foreground mt-1 mb-4">
            {member.subtitle}
          </p>
        )}

        {/* Social Icons (optional) */}
        <div className="flex justify-center gap-4">
          {member.linkedin && (
            <a href={member.linkedin} className="p-2 rounded-full glass-card hover:text-gray-300">
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {member.email && (
            <a href={member.email} className="p-2 rounded-full glass-card hover:text-gray-300">
              <Mail className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

/* ----------------------------------------
   MAIN COMPONENT
---------------------------------------- */

const Team = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <motion.section className="section-container relative overflow-hidden">
      <div ref={containerRef} className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="section-title">Our Team</h2>
          <p className="text-lg text-muted-foreground">
            Meet the people behind this project.
          </p>
        </div>

        {/* Faculty Advisor */}
        <div className="flex justify-center mb-24">
          <FacultyAdvisorCard member={facultyAdvisor} />
        </div>

        {/* Team Members */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Team;
