import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Crown, Star, Award, Medal, Gift, Users, Phone, ExternalLink, CheckCircle2, Gem } from "lucide-react";
import { useNavigate } from "react-router-dom";

const sponsorshipTiers = [
  {
    tier: "Platinum",
    emoji: "💎",
    amount: "₹40,000/-",
    icon: Gem,
    gradient: "from-violet-400 via-purple-500 to-indigo-600",
    bgGradient: "from-violet-500/10 via-purple-500/5 to-indigo-600/10",
    borderColor: "border-violet-500/30",
    glowColor: "shadow-violet-500/20",
    textColor: "text-violet-500",
    subtitle: "Premium Partnership Investment",
    impressions: "40,000+",
    sections: [
      {
        title: "Prime Branding Rights",
        items: [
          'Logo on customized banner in Barn Hall (20ft x 10ft)',
          'Premium banner at college main gate (15,000+ daily exposure)',
          'Logo as "Platinum Sponsor" on all materials',
        ],
      },
      {
        title: "Digital & Print Dominance",
        items: [
          'Logo on ALL promotional materials (posters, certificates, brochures)',
          '5-6 dedicated social media posts & stories',
          'Prominent logo placement on event website',
          'Featured sponsor in all email communications',
        ],
      },
      {
        title: "On-Campus Visibility",
        items: [
          'Logo on event T-shirts - Front/Back (500+ shirts distributed)',
        ],
      },
    ],
  },
  {
    tier: "Gold",
    emoji: "🏆",
    amount: "₹20,000/-",
    icon: Crown,
    gradient: "from-yellow-400 via-amber-500 to-yellow-600",
    bgGradient: "from-yellow-500/10 via-amber-500/5 to-yellow-600/10",
    borderColor: "border-yellow-500/30",
    glowColor: "shadow-yellow-500/20",
    textColor: "text-yellow-500",
    subtitle: "Strategic Partnership Investment",
    impressions: "20,000+",
    sections: [
      {
        title: "Significant Branding",
        items: [
          'Banner at college main gate (shared placement)',
          'Logo as "Gold Sponsor" on materials',
          'Banners at strategic venue points',
          'Logo on event T-shirts - Small placement (200+ shirts)',
        ],
      },
      {
        title: "Prize Association",
        items: [
          'Co-branding on 2 specific event prizes',
          'Brand mention during prize distribution',
        ],
      },
    ],
  },
  {
    tier: "Silver",
    emoji: "🥈",
    amount: "₹10,000/-",
    icon: Star,
    gradient: "from-slate-300 via-gray-400 to-slate-500",
    bgGradient: "from-slate-400/10 via-gray-400/5 to-slate-500/10",
    borderColor: "border-slate-400/30",
    glowColor: "shadow-slate-400/20",
    textColor: "text-slate-400",
    subtitle: "Growth Partnership Investment",
    impressions: "10,000+",
    sections: [
      {
        title: "Branding Benefits",
        items: [
          'Banner near event venue',
          'Logo as "Silver Sponsor"',
        ],
      },
      {
        title: "On-Ground Presence",
        items: [
          'Logo on event T-shirts - Small placement (200+ shirts)',
        ],
      },
      {
        title: "Prize Recognition",
        items: [
          'Co-branding on 1 event prize',
        ],
      },
    ],
  },
  {
    tier: "Bronze",
    emoji: "🥉",
    amount: "₹5,000/-",
    icon: Award,
    gradient: "from-orange-400 via-amber-600 to-orange-700",
    bgGradient: "from-orange-500/10 via-amber-600/5 to-orange-700/10",
    borderColor: "border-orange-500/30",
    glowColor: "shadow-orange-500/20",
    textColor: "text-orange-500",
    subtitle: "Associate Partnership Investment",
    impressions: "",
    sections: [
      {
        title: "Essential Branding",
        items: [
          'Logo as "Bronze Sponsor"',
        ],
      },
      {
        title: "Digital Acknowledgment",
        items: [
          'Logo on event website',
          '1-2 social media mentions',
          'Logo on select posters',
        ],
      },
    ],
  },
];

const additionalTiers = [
  {
    title: "Event Sponsorship",
    description: "Cover the prize money for an entire event",
    icon: Gift,
  },
  {
    title: "Batch/Solo Sponsorship",
    description: "A collective sponsorship by a batch or individually",
    icon: Users,
  },
];

const Sponsors = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="section-container relative overflow-hidden"
    >
      {/* Premium Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-yellow-500/10 to-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/5 rounded-full blur-3xl" />

      <div ref={containerRef} className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-yellow-500/20 via-amber-500/10 to-yellow-500/20 border border-yellow-500/30 mb-6"
          >
            <Crown className="w-5 h-5 text-yellow-600" />
            <span className="text-sm font-semibold text-yellow-700">Premium Partnership</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
              Sponsorship Packages
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Join us in making OPTIMA 2026 a grand success by becoming a sponsor!
          </p>
        </motion.div>

        {/* Tier Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8 sm:mb-12"
        >
          {sponsorshipTiers.map((tier) => (
            <motion.div
              key={tier.tier}
              variants={itemVariants}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tier.bgGradient} rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500`} />

              <div className={`relative bg-card/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border-2 ${tier.borderColor} shadow-xl ${tier.glowColor} group-hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.01] group-hover:-translate-y-1 h-full`}>
                {/* Tier Badge */}
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-gradient-to-r ${tier.gradient} shadow-lg`}>
                  <span className="text-white font-bold text-sm uppercase tracking-wider">
                    {tier.tier} Sponsor {tier.emoji}
                  </span>
                </div>

                {/* Subtitle */}
                <p className={`text-center text-sm mt-4 mb-2 ${tier.textColor} font-medium`}>
                  {tier.subtitle}
                </p>

                {/* Amount */}
                <div className="text-center mb-5">
                  <span className={`text-3xl sm:text-4xl md:text-5xl font-display font-bold bg-gradient-to-r ${tier.gradient} bg-clip-text text-transparent`}>
                    {tier.amount}
                  </span>
                </div>

                {/* Decorative Line */}
                <div className={`h-1 bg-gradient-to-r ${tier.gradient} rounded-full opacity-50 mb-5`} />

                {/* Benefits Sections */}
                <div className="space-y-4">
                  {tier.sections.map((section, sIdx) => (
                    <div key={sIdx}>
                      <h4 className={`font-display font-bold text-sm uppercase tracking-wider ${tier.textColor} mb-2`}>
                        {section.title}
                      </h4>
                      <ul className="space-y-1.5">
                        {section.items.map((item, iIdx) => (
                          <li key={iIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${tier.textColor}`} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Impressions */}
                {tier.impressions && (
                  <div className={`mt-5 pt-4 border-t ${tier.borderColor}`}>
                    <p className={`text-center font-display font-bold text-sm ${tier.textColor}`}>
                      Estimated Brand Impressions: {tier.impressions}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Tiers */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-16"
        >
          {additionalTiers.map((tier) => (
            <motion.div
              key={tier.title}
              variants={itemVariants}
              className="luxury-card rounded-xl sm:rounded-2xl p-4 sm:p-6 group hover:border-primary/30 transition-all duration-500"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <tier.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-display font-bold text-base sm:text-lg text-foreground mb-0.5 sm:mb-1">
                    {tier.title}
                  </h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    {tier.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Register Sponsorship CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative mb-10 sm:mb-16"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-3xl blur-xl" />
          <div className="relative glass-card-elevated rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 text-center border border-primary/20">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Ready to Partner with Us?
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mb-6 px-2">
              Click below to view the payment QR code and register your sponsorship.
            </p>

            <button
              onClick={() => navigate("/register-sponsorship")}
              className="inline-flex items-center gap-2 px-5 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-primary via-primary to-accent text-white text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
              Register Sponsorship
            </button>
          </div>
        </motion.div>

        {/* Impact Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="luxury-card rounded-xl sm:rounded-2xl p-5 sm:p-8 lg:p-10 glow-gold">
            <p className="text-base sm:text-lg md:text-xl text-foreground font-medium leading-relaxed">
              Your support will greatly enhance the experience for participants!
            </p>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-primary/5 via-transparent to-accent/5 border border-primary/10">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <span className="text-sm sm:text-base text-muted-foreground">For inquiries, contact us:</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
              <a href="tel:8639409862" className="text-base sm:text-lg font-semibold text-primary hover:text-primary/80 transition-colors">
                8639409862
              </a>
              <span className="text-muted-foreground hidden sm:inline">or</span>
              <a href="tel:8008652561" className="text-base sm:text-lg font-semibold text-primary hover:text-primary/80 transition-colors">
                8008652561
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Sponsors;
