import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, Calendar, Clock, Instagram } from "lucide-react";

const announcements = [
  {
    icon: Calendar,
    text: "OPTIMA 2026 Registration Now Open! Early bird deadline: Feb 21st, 2026",
  },
  {
    icon: Clock,
    text: "Event Dates: Dates Announced soon. Follow us on Instagram to stay updated",
    link: "https://www.instagram.com/optima_nitt/",
    linkIcon: Instagram,
  },
  {
    icon: Calendar,
    text: "New this year: AI-powered Optimization Challenge & Hackathon",
  },
];

const NotificationBar = () => {
  const [isPaused, setIsPaused] = useState(false);

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
        >
          {duplicatedAnnouncements.map((announcement, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sm text-foreground/90"
            >
              <announcement.icon className="w-4 h-4 text-primary flex-shrink-0" />
              
              <span>{announcement.text}</span>

              {announcement.link && announcement.linkIcon && (
                <a
                  href={announcement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-primary hover:text-accent transition-colors duration-200"
                >
                  <announcement.linkIcon className="w-4 h-4" />
                  <span className="underline">Insta</span>
                </a>
              )}

              <span className="mx-8 text-primary/50">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default NotificationBar;
