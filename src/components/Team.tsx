import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin, Mail, Github, Crown } from "lucide-react";

/* ----------------------------------------
   DATA
---------------------------------------- */

const facultyAdvisor = {
  name: "Dr. B. Janet",
  role: "Faculty Advisor",
  subtitle: "Department of Computer Applications",
  image: "/team/janet.jpeg",
};

const teamMembers = [
  {
    name: "Vibhor",
    role: "Core Member",
    subtitle: "M.Sc Computer Science",
    image: "/team/vibhor.jpeg",
    linkedin: "https://www.linkedin.com/in/vibhor-thakur-5a298337a/",
    email: "thakur4vibhor@gmail.com",
  },
  {
    name: "Shuvrajyoti Nath Mohajohn",
    role: "Core Member",
    subtitle: "M.Sc Computer Science",
    image: "/team/shbhu.jpeg",
    linkedin: "https://www.linkedin.com/in/shuvrajyotin/",
    email: "shuvra.mohajohn@gmail.com",
    github: "https://github.com/wolfang666",
  },
  
  {
    name: "Akriti Jaiswal",
    role: "Core Member",
    subtitle: "M.Tech Data Analytics",
    image: "/team/akrit.jpeg",
    linkedin: "https://www.linkedin.com/in/akriti-jaiswal-760834232/",
    email: "akritijofficial@gmail.com",
  },
  {
    name: "Ritesh Gaikwad",
    role: "Technical Lead",
    subtitle: "M.Sc Computer Science",
    image: "/team/ritesh.jpeg",
    linkedin: "https://www.linkedin.com/in/ritesh-gaikwad-048642249/",
    email: "riteshgaikwad43546@gmail.com",
    github: "https://github.com/RiteshGaikwad35",
  },
  {
    name: "Arjun",
    role: "Executive",
    subtitle: "M.Sc Computer Science",
    image: "/team/arjun.jpeg",
    email: "arjunchaudhary682@gmail.com",
    linkedin: "https://www.linkedin.com/in/arjun-chaudhary-482399185/",
  },
  {
    name: "Shamas",
    role: "Public Representative",
    subtitle: "M.Sc Computer Science",
    image: "/team/shamas.jpeg",
    linkedin: "https://www.linkedin.com/in/shammas-ca-973a48317/",
    email: "shammasca16@gmail.com",
    github: "https://github.com/shammasca313grabs-dot",
  },
];

/* ----------------------------------------
   ANIMATION VARIANTS
---------------------------------------- */

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ----------------------------------------
   TEAM CARD (Equal Size + 3D Tilt)
---------------------------------------- */

const TeamCard = ({ member }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const rotateX = -(e.clientY - rect.top - rect.height / 2) / 20;
    const rotateY = (e.clientX - rect.left - rect.width / 2) / 20;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
    `;
  };

  const resetTilt = () => {
    cardRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <motion.div
      variants={cardVariants}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      className="glass-card rounded-3xl p-8 text-center shadow-xl
                 w-[320px] h-[480px]
                 flex flex-col justify-between
                 transition-all duration-300"
    >
      {/* Avatar */}
      <div className="relative w-40 h-40 mx-auto">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br 
                        from-primary to-accent blur-2xl opacity-40 animate-pulse" />
        <img
          src={member.image}
          alt={member.name}
          className="relative w-full h-full object-cover rounded-full ring-4 ring-border"
        />
      </div>

      {/* Info */}
      <div>
        <h3 className="text-xl font-semibold mt-6">{member.name}</h3>

        <p className="text-primary text-sm font-semibold">
          {member.role === "Technical Lead" ? (
            <span className="flex items-center justify-center gap-1">
              {member.role}
            </span>
          ) : (
            member.role
          )}
        </p>

        <p className="text-muted-foreground mt-1 text-sm">
          {member.subtitle}
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-4 mt-4">
        {member.linkedin && (
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
            className="p-2 rounded-full glass-card hover:text-primary transition">
            <Linkedin className="w-4 h-4" />
          </a>
        )}
        {member.email && (
          <a href={`mailto:${member.email}`} target="_blank" rel="noopener noreferrer"
            className="p-2 rounded-full glass-card hover:text-primary transition">
            <Mail className="w-4 h-4" />
          </a>
        )}
        {member.github && (
          <a href={member.github} target="_blank" rel="noopener noreferrer"
            className="p-2 rounded-full glass-card hover:text-primary transition">
            <Github className="w-4 h-4" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

/* ----------------------------------------
   PREMIUM SECTION WRAPPER
---------------------------------------- */

const PremiumSection = ({ title, children }) => {
  return (
    <div className="relative mb-32">
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r 
                      from-primary via-accent to-primary 
                      blur-xl opacity-60 animate-pulse" />

      <div className="relative glass-card rounded-3xl p-16 border border-white/10 shadow-2xl">
        <h3 className="text-3xl font-bold text-center mb-16 text-primary">
          {title}
        </h3>
        {children}
      </div>
    </div>
  );
};

/* ----------------------------------------
   PREMIUM FACULTY CARD
---------------------------------------- */

const FacultyAdvisorCard = ({ member }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative max-w-2xl mx-auto mb-32"
    >
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r 
                      from-primary via-accent to-primary 
                      blur-xl opacity-70 animate-pulse" />

      <div className="relative glass-card rounded-3xl p-12 text-center shadow-2xl">
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 
                         px-6 py-2 text-xs font-semibold tracking-wider 
                         rounded-full bg-gradient-to-r 
                         from-primary to-accent text-white shadow-lg">
          FACULTY ADVISOR
        </span>

        <div className="relative w-56 h-56 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br 
                          from-primary to-accent blur-3xl opacity-50 animate-pulse" />
          <img
            src={member.image}
            alt={member.name}
            className="relative w-full h-full object-cover rounded-full ring-4 ring-primary/50"
          />
        </div>

        <h3 className="text-4xl font-bold bg-gradient-to-r 
                       from-primary to-accent bg-clip-text text-transparent">
          {member.name}
        </h3>

        <p className="text-lg font-semibold text-primary mt-2">
          {member.role}
        </p>

        <p className="text-muted-foreground mt-2">
          {member.subtitle}
        </p>
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

  const coreCommittee = teamMembers.filter(
    (m) => m.role === "Technical Lead" || m.role === "Core Member"
  );

  const others = teamMembers.filter(
    (m) => m.role !== "Technical Lead" && m.role !== "Core Member"
  );

  return (
    <section className="section-container relative overflow-hidden py-24">
      <div ref={containerRef} className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="section-title">Our Team</h2>
          <p className="text-lg text-muted-foreground">
            Meet the people behind this project.
          </p>
        </div>

        {/* Faculty */}
        <FacultyAdvisorCard member={facultyAdvisor} />

        {/* Core Committee - ONE LINE */}
        <PremiumSection title="Core Committee">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex justify-center gap-12 flex-nowrap overflow-x-auto pb-4"
          >
            {coreCommittee.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </motion.div>
        </PremiumSection>

        {/* Other Members */}
        <PremiumSection title="Members">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-wrap justify-center gap-12"
          >
            {others.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </motion.div>
        </PremiumSection>

      </div>
    </section>
  );
};

export default Team;
