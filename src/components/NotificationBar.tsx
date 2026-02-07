import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, Calendar, Clock } from "lucide-react";

const announcements = [
  {
    icon: Calendar,
    text: "OPTIMA 2026 Registration Now Open! Early bird deadline: Feb 21st, 2026",
  },
  {
    icon: Clock,
    text: "Event Dates: FEB 21, 2026 | NIT Trichy Campus",
  },
  {
    icon: Bell,
    text: "Prize Pool worth ₹1,00,000+ | Register now to participate in exciting competitions",
  },
  {
    icon: Calendar,
    text: "New this year: AI-powered Optimization Challenge & Hackathon",
  },
];

const NotificationBar = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate announcements for seamless loop
  const duplicatedAnnouncements = [...announcements, ...announcements];

  return (
    <div
      className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-b border-border overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative h-10 flex items-center">
        <motion.div
          className="flex items-center gap-16 whitespace-nowrap"
          animate={{
            x: isPaused ? undefined : [0, "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          style={{ x: isPaused ? undefined : 0 }}
        >
          {duplicatedAnnouncements.map((announcement, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sm text-foreground/90"
            >
              <announcement.icon className="w-4 h-4 text-primary flex-shrink-0" />
              <span>{announcement.text}</span>
              <span className="mx-8 text-primary/50">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default NotificationBar;
