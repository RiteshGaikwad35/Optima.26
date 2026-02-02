import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isEventLive, setIsEventLive] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();

      if (difference <= 0) {
        setIsEventLive(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="countdown-card group">
      <div className="relative overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="block text-4xl md:text-5xl lg:text-6xl font-display font-bold gradient-text"
          >
            {value.toString().padStart(2, "0")}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mt-2 block">
        {label}
      </span>
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/10 to-accent/10 pointer-events-none" />
    </div>
  );

  if (isEventLive) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card rounded-2xl p-8 max-w-md mx-auto text-center glow-primary"
      >
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2"
        >
          🎉 OPTIMA is Live!
        </motion.div>
        <p className="text-muted-foreground">Join us now for an amazing experience</p>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-sm md:text-base text-muted-foreground uppercase tracking-widest mb-6">
        Event Starts In
      </h3>
      <div className="flex gap-3 md:gap-4 lg:gap-6">
        <TimeUnit value={timeLeft.days} label="Days" />
        <div className="text-3xl md:text-4xl text-primary font-bold self-center animate-pulse-glow">:</div>
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <div className="text-3xl md:text-4xl text-primary font-bold self-center animate-pulse-glow">:</div>
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <div className="text-3xl md:text-4xl text-primary font-bold self-center animate-pulse-glow hidden sm:block">:</div>
        <div className="hidden sm:block">
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
