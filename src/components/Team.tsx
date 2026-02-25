import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin, Mail, Github, Crown } from "lucide-react";


const facultyAdvisor = {
  name: "Dr. B. Janet",
  role: "Faculty Advisor",
  subtitle: "Department of Computer Applications",
  image: "/team/janet.jpeg",
};

const teamMembers = [
  {
    name: "Vibhor Thakur",
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
    name: "Arjun Chaudhary",
    role: "Executive Lead",
    subtitle: "M.Sc Computer Science",
    image: "/team/arjun.jpeg",
    email: "arjunchaudhary682@gmail.com",
    linkedin: "https://www.linkedin.com/in/arjun-chaudhary-482399185/",
  },
  {
    name: "Muhammed Shammas CA",
    role: "PR Lead",
    subtitle: "M.Sc Computer Science",
    image: "/team/shamas.jpeg",
    linkedin: "https://www.linkedin.com/in/shammas-ca-973a48317/",
    email: "shammasca16@gmail.com",
    github: "https://github.com/shammasca313grabs-dot",
  },
  {
    name: "Amal Waghas E",
    role: "Design Lead",
    subtitle: "M.Tech Data Analytics",
    image: "/team/Amal.jpeg",
    linkedin: "https://www.linkedin.com/in/amal-waghas-e/",
    email: "ewaghasamal@gmail.com",
  },
  {
    name: "Abhinaba Mandal",
    role: "PR Lead",
    subtitle: "M.Tech Data Analytics",
    image: "/team/abhinab.jpeg",
    linkedin: "https://www.linkedin.com/in/abhinaba-mandal-292766185/",
    email: "abhinabamandal2001@gmail.com",
  },
  {
    name: "Sundram Patel",
    role: "Core Member",
    subtitle: "M.Tech Data Analytics",
    image: "/team/sundram.jpeg",
    linkedin: "https://www.linkedin.com/in/sundram-patel-sp/",
    email: " sundrampatel140102@gmail.com",
  },
];



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
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};



const TeamCard = ({ member }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    
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
    if (cardRef.current) {
      cardRef.current.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      className="glass-card rounded-3xl p-6 sm:p-8 text-center shadow-xl
                 w-full sm:w-[320px] h-auto sm:h-[480px]
                 flex flex-col justify-between
                 transition-all duration-300"
    >
      {/* Avatar */}
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br 
                        from-primary to-accent blur-2xl opacity-40 animate-pulse" />
        <img
          src={member.image}
          alt={member.name}
          className="relative w-full h-full object-cover rounded-full ring-4 ring-border"
        />
      </div>

      {/* Info */}
      <div className="mt-4 sm:mt-0">
        <h3 className="text-lg sm:text-xl font-semibold mt-4 sm:mt-6">{member.name}</h3>

        <p className="text-primary text-sm font-semibold">
          {member.role === "Technical Lead" ? (
            <span className="flex items-center justify-center gap-1">
              {member.role}
            </span>
          ) : (
            member.role
          )}
        </p>

        <p className="text-muted-foreground mt-1 text-xs sm:text-sm">
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



const PremiumSection = ({ title, children }) => {
  return (
    <div className="relative mb-16 sm:mb-32">
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r 
                      from-primary via-accent to-primary 
                      blur-xl opacity-60 animate-pulse" />

      <div className="relative glass-card rounded-3xl p-6 sm:p-12 lg:p-16 border border-white/10 shadow-2xl">
        <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-16 text-primary">
          {title}
        </h3>
        {children}
      </div>
    </div>
  );
};



const FacultyAdvisorCard = ({ member }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative max-w-2xl mx-auto mb-16 sm:mb-32"
    >
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r 
                      from-primary via-accent to-primary 
                      blur-xl opacity-70 animate-pulse" />

      <div className="relative glass-card rounded-3xl p-8 sm:p-12 text-center shadow-2xl">
        <span className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 
                         px-4 sm:px-6 py-1.5 sm:py-2 text-xs font-semibold tracking-wider 
                         rounded-full bg-gradient-to-r 
                         from-primary to-accent text-white shadow-lg">
          FACULTY ADVISOR
        </span>

        <div className="relative w-40 h-40 sm:w-56 sm:h-56 mx-auto mb-6 sm:mb-8">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br 
                          from-primary to-accent blur-3xl opacity-50 animate-pulse" />
          <img
            src={member.image}
            alt={member.name}
            className="relative w-full h-full object-cover rounded-full ring-4 ring-primary/50"
          />
        </div>

        <h3 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r 
                       from-primary to-accent bg-clip-text text-transparent">
          {member.name}
        </h3>

        <p className="text-base sm:text-lg font-semibold text-primary mt-2">
          {member.role}
        </p>

        <p className="text-sm sm:text-base text-muted-foreground mt-2">
          {member.subtitle}
        </p>
      </div>
    </motion.div>
  );
};


const Team = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const coreMembers = teamMembers.filter(
    (m) => m.role === "Core Member"
  );

  const technicalLead = teamMembers.filter(
    (m) => m.role === "Technical Lead"
  );

  const others = teamMembers.filter(
    (m) => m.role !== "Technical Lead" && m.role !== "Core Member"
  );

  return (
    <section className="section-container relative overflow-hidden py-12 sm:py-24">
      <div ref={containerRef} className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-24">
          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl">Our Team</h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-2">
            Meet the people behind this project.
          </p>
        </div>

        {/* Faculty */}
        <FacultyAdvisorCard member={facultyAdvisor} />

        {/* Core Committee */}
        <PremiumSection title="Core Committee">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-12 justify-items-center"
          >
            {coreMembers.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </motion.div>
        </PremiumSection>

        {/* Technical Lead - Separate Section */}
        <PremiumSection title="Technical Lead">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex justify-center"
          >
            {technicalLead.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </motion.div>
        </PremiumSection>

        {/* Other Members */}
        <PremiumSection title="Team Leaders">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-12 justify-items-center"
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
