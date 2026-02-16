import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Brain, Gamepad2, Laugh, Puzzle, HelpCircle, Palette, Bug, Lock,
  Trophy, ChevronDown, ChevronUp, Users, Clock, MapPin, Calendar,
  ArrowRight
} from "lucide-react";

interface EventRound {
  name: string;
  details: string[];
}

interface EventData {
  id: string;
  icon: React.ElementType;
  title: string;
  tagline: string;
  description: string;
  teamSize: string;
  prizePool: string;
  fee: string;
  color: string;
  borderColor: string;
  rounds?: EventRound[];
  rules: string[];
  scoring?: string[];
  domains?: string[];
  timeline?: string[];
  prizes?: { label: string; amount: string }[];
}

const events: EventData[] = [
  {
    id: "neuralquest",
    icon: Brain,
    title: "NeuralQuest 2026",
    tagline: "Inter-College ML Hackathon",
    description: "An inter-college Machine Learning hackathon emphasizing analytical thinking, model development, and data-driven problem solving.",
    teamSize: "2–4 members",
    prizePool: "₹5,000+",
    fee: "Free",
    color: "from-violet-500/20 to-purple-500/20",
    borderColor: "hover:border-violet-500/40",
    domains: [
      "Machine Learning & Predictive Analytics",
      "AI Applications",
      "FinTech using Intelligent Systems",
      "Smart Education Platforms",
      "Sustainability & Smart Tech",
      "Open Innovation (any ML idea)"
    ],
    rounds: [
      { name: "Round 1 – Online Proposal", details: ["Submit PPT/PDF (max 50MB)", "23 Feb – 28 Feb 2026"] },
      { name: "Shortlisting", details: ["Top 8–10 teams announced by 2 Mar 2026"] },
      { name: "Final Round – Offline", details: ["6–7 March 2026 at NIT Trichy", "Live development & presentation"] }
    ],
    rules: [
      "Open to all colleges", "No registration fee", "Original work only",
      "No pre-built/plagiarized projects", "Team cannot change after registration",
      "Judges' decision is final"
    ],
    prizes: [
      { label: "Prize Pool", amount: "₹5,000+" },
      { label: "Extras", amount: "Merch, Certificates, Mentorship" }
    ]
  },
  {
    id: "bgmi",
    icon: Gamepad2,
    title: "Online Battle Arena 2026",
    tagline: "BGMI Inter-College Tournament",
    description: "Battlegrounds Mobile India inter-college tournament with qualifier, semi-final, and grand finale rounds.",
    teamSize: "4 players (+1 sub)",
    prizePool: "₹5,000",
    fee: "₹100/team",
    color: "from-red-500/20 to-orange-500/20",
    borderColor: "hover:border-red-500/40",
    rounds: [
      { name: "Qualifier", details: ["All teams in custom rooms", "Up to 25 squads/match", "Top 8–10 qualify"] },
      { name: "Semi-Finals", details: ["2–3 matches", "Top 8–12 advance"] },
      { name: "Grand Finale", details: ["3–4 matches", "Winner by total points"] }
    ],
    scoring: [
      "1st: 15pts | 2nd: 12pts | 3rd: 10pts | 4th: 8pts",
      "5th: 6pts | 6th: 4pts | 7th: 2pts | 8th: 1pt",
      "Each kill = 1 point"
    ],
    rules: [
      "Join on time", "No hacking/cheating/exploits",
      "Mobile only (no emulators)", "Internet issues = your responsibility",
      "Misconduct → disqualification", "Organizers' decisions final"
    ],
    prizes: [
      { label: "Winner", amount: "₹2,500" },
      { label: "Runner-Up", amount: "₹1,500" },
      { label: "Third", amount: "₹500" }
    ]
  },
  {
    id: "techmeme",
    icon: Laugh,
    title: "Tech Meme Challenge",
    tagline: "Code it. Meme it. Win it.",
    description: "An online creativity contest – submit original tech-themed memes about programming life, AI, coding struggles, and funny tech moments.",
    teamSize: "Individual",
    prizePool: "TBA",
    fee: "Free",
    color: "from-yellow-500/20 to-amber-500/20",
    borderColor: "hover:border-yellow-500/40",
    rules: [
      "Open to all college students", "Individual participation",
      "Memes must be original", "Tech/programming themed only",
      "Best & most creative memes win"
    ],
    prizes: [
      { label: "Top Entries", amount: "Cash + Certificates" },
      { label: "Bonus", amount: "Featured on official pages" }
    ]
  },
  {
    id: "headstack",
    icon: Puzzle,
    title: "HeadStack",
    tagline: "Two-Word Tech Guessing Challenge",
    description: "A fast-paced guessing game – one teammate gives only two-word clues while the other guesses tech terms displayed on screen.",
    teamSize: "2 per team",
    prizePool: "₹5,000",
    fee: "Free",
    color: "from-cyan-500/20 to-teal-500/20",
    borderColor: "hover:border-cyan-500/40",
    rounds: [
      { name: "Main Round", details: ["2 minutes per team", "+1 point per correct guess"] },
      { name: "Tie-Breaker", details: ["30-second sudden death", "One wrong clue = elimination"] }
    ],
    rules: [
      "Clue-giver says ONLY two words per clue",
      "Cannot say the term, part of it, rhyming words, or letter hints",
      "Verbal clues only – no gestures or writing",
      "Rule violation = term skipped, no point",
      "Guesser must not see the screen"
    ],
    prizes: [
      { label: "Winner", amount: "₹3,000 + Certificates" },
      { label: "Runner-Up", amount: "₹2,000 + Certificates" }
    ]
  },
  {
    id: "techquiz",
    icon: HelpCircle,
    title: "TechQuiz 2026",
    tagline: "Inter-College Tech Knowledge Challenge",
    description: "A multi-round quiz covering programming, OS, DBMS, networks, algorithms, AI/ML basics, and emerging tech trends.",
    teamSize: "2–3 members",
    prizePool: "₹5,000",
    fee: "Free",
    color: "from-blue-500/20 to-indigo-500/20",
    borderColor: "hover:border-blue-500/40",
    rounds: [
      { name: "Round 1 – MCQs", details: ["Elimination round on core CS topics"] },
      { name: "Round 2 – Rapid Fire", details: ["Quick responses on tech trends"] },
      { name: "Round 3 – Visual & Logic", details: ["Logo ID, code output, puzzles"] },
      { name: "Final – Buzzer Round", details: ["High-intensity Q&A"] }
    ],
    rules: [
      "No phones/internet during event",
      "One spokesperson per round", "Misconduct → disqualification",
      "Quizmaster's decision is final"
    ],
    prizes: [
      { label: "1st", amount: "₹2,500" },
      { label: "2nd", amount: "₹1,500" },
      { label: "3rd", amount: "₹1,000" }
    ]
  },
  {
    id: "vibecoding",
    icon: Palette,
    title: "VibeCoding 2026",
    tagline: "UI/UX & Website Design Challenge",
    description: "Design and build visually appealing, functional websites from a given theme – judged on creativity, UX, and responsiveness.",
    teamSize: "2–4 members",
    prizePool: "₹5,000",
    fee: "Free",
    color: "from-pink-500/20 to-rose-500/20",
    borderColor: "hover:border-pink-500/40",
    rounds: [
      { name: "Stage 1 – Theme", details: ["Receive design brief"] },
      { name: "Stage 2 – UI/UX Planning", details: ["Wireframes & user flows (Figma/Canva)"] },
      { name: "Stage 3 – Build", details: ["Convert to functional website"] },
      { name: "Stage 4 – Present", details: ["Demo to judges"] }
    ],
    rules: [
      "Designs must be created during event only",
      "No pre-built templates", "AI-generated complete designs not allowed",
      "Must explain design choices", "Plagiarism → disqualification"
    ],
    prizes: [
      { label: "1st", amount: "₹2,500" },
      { label: "2nd", amount: "₹1,500" },
      { label: "3rd", amount: "₹1000" }
    ]
  },
  {
    id: "blindcoding",
    icon: Bug,
    title: "Blind Coding Challenge",
    tagline: "Programming & Debugging Competition",
    description: "Test your coding and debugging skills through normal coding, C-language debugging, and a surprise blind coding round.",
    teamSize: "2 members",
    prizePool: "₹5,000",
    fee: "Free",
    color: "from-emerald-500/20 to-green-500/20",
    borderColor: "hover:border-emerald-500/40",
    rounds: [
      { name: "Round 1 – Coding", details: ["45 min, any language", "Correctness + efficiency"] },
      { name: "Round 2 – Debugging", details: ["30 min, C language only", "Find & fix bugs"] },
      { name: "Round 3 – Blind Coding", details: ["Surprise constraints revealed at event"] }
    ],
    rules: [
      "Complete within time limits", "No internet/AI/external help",
      "Plagiarism → disqualification", "Maintain discipline",
      "Judges' decision is final"
    ],
    prizes: [
      { label: "1st", amount: "₹2,500" },
      { label: "2nd", amount: "₹1,500" },
      { label: "3rd", amount: "₹1000" }
    ]
  },
  {
    id: "codelock",
    icon: Lock,
    title: "CodeLock",
    tagline: "The Digital Escape Room",
    description: "Solve 4 QR-code CS puzzles to assemble a master escape key within 15 minutes. Logic, crypto, debugging & pattern analysis.",
    teamSize: "1–2 members",
    prizePool: "Prizes + Certs",
    fee: "Free",
    color: "from-slate-500/20 to-zinc-500/20",
    borderColor: "hover:border-slate-400/40",
    domains: [
      "Logical Reasoning & Algorithms",
      "Data Structures & Patterns",
      "Cryptography & Ciphers",
      "Debugging & Pseudocode"
    ],
    rules: [
      "NIT Trichy students only", "Individual or team of 2",
      "15-minute time limit", "No internet/external help",
      "Ranked by completion time", "Malpractice → disqualification"
    ],
    prizes: [
      { label: "Fastest Escape", amount: "Awards + Certificates" },
      { label: "All Participants", amount: "Certificates" }
    ]
  }
];

const EventCard = ({ event, index, isInView }: { event: EventData; index: number; isInView: boolean }) => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`glass-card rounded-2xl overflow-hidden group ${event.borderColor} transition-all duration-500 card-hover`}
    >
      {/* Card Header */}
      <div className={`p-6 bg-gradient-to-br ${event.color} relative`}>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-background/30 backdrop-blur-sm flex items-center justify-center">
              <event.icon className="w-6 h-6 text-foreground" />
            </div>
            <div>
              <h3 className="text-lg font-display font-bold text-foreground">{event.title}</h3>
              <p className="text-xs text-muted-foreground">{event.tagline}</p>
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{event.description}</p>

        {/* Quick Stats */}
        <div className="flex flex-wrap gap-3 mt-4">
          <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-background/20 backdrop-blur-sm text-foreground">
            <Users className="w-3 h-3" /> {event.teamSize}
          </span>
          <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-background/20 backdrop-blur-sm text-foreground">
            <Trophy className="w-3 h-3" /> {event.prizePool}
          </span>
          <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-background/20 backdrop-blur-sm text-foreground">
            Fee: {event.fee}
          </span>
        </div>
      </div>

      {/* Expandable Details */}
      <div className="px-6 pb-4">
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-between py-3 text-sm font-medium text-primary hover:text-accent transition-colors"
        >
          <span>{expanded ? "Hide Details" : "View Rules & Details"}</span>
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="space-y-4 pb-4 text-sm">
                {/* Rounds */}
                {event.rounds && (
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-primary" /> Rounds
                    </h4>
                    <div className="space-y-2">
                      {event.rounds.map((r, i) => (
                        <div key={i} className="pl-3 border-l-2 border-primary/20">
                          <p className="font-medium text-foreground">{r.name}</p>
                          {r.details.map((d, j) => (
                            <p key={j} className="text-muted-foreground text-xs">{d}</p>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Domains */}
                {event.domains && (
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Domains</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {event.domains.map((d, i) => (
                        <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{d}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Scoring */}
                {event.scoring && (
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Scoring</h4>
                    {event.scoring.map((s, i) => (
                      <p key={i} className="text-muted-foreground text-xs">{s}</p>
                    ))}
                  </div>
                )}

                {/* Rules */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Rules</h4>
                  <ul className="space-y-1">
                    {event.rules.map((r, i) => (
                      <li key={i} className="text-muted-foreground text-xs flex items-start gap-1.5">
                        <span className="text-primary mt-0.5">✓</span> {r}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Prizes */}
                {event.prizes && (
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-1.5">
                      <Trophy className="w-3.5 h-3.5 text-primary" /> Prizes
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {event.prizes.map((p, i) => (
                        <div key={i} className="bg-primary/5 rounded-lg px-3 py-2 text-center">
                          <p className="text-xs text-muted-foreground">{p.label}</p>
                          <p className="font-semibold text-foreground text-sm">{p.amount}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Register Button */}
        <button
          onClick={() => navigate(`/register-event?event=${event.id}`)}
          className="w-full py-2.5 rounded-xl bg-gradient-to-r from-primary to-accent text-card font-semibold text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2"
        >
          Register <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

const Events = () => {
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
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div ref={containerRef} className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-primary font-medium mb-4">
            OPTIMA 2026
          </span>
          <h2 className="section-title">Featured Events</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            8 exciting competitions spanning ML, gaming, design, quizzing, and more.
            Click any event to explore details and register.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Events;
