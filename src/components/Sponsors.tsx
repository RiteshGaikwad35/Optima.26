import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Crown, Star, Award, Gift, Users, Phone, ExternalLink, CheckCircle2, Gem, ChevronDown, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const sponsorshipTiers = [
  {
    tier: "Platinum",
    emoji: "",
    amount: "₹40,000/-",
    icon: Gem,
    gradient: "from-violet-400 via-purple-500 to-indigo-600",
    bgGradient: "from-violet-500/10 via-purple-500/5 to-indigo-600/10",
    borderColor: "border-violet-500/30",
    glowColor: "shadow-violet-500/20",
    textColor: "text-violet-400",
    ringColor: "ring-violet-500/40",
    subtitle: "Premium Partnership Investment",
    impressions: "40,000+",
    tagline: "Maximum visibility & brand dominance",
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
    emoji: "",
    amount: "₹20,000/-",
    icon: Crown,
    gradient: "from-yellow-400 via-amber-500 to-yellow-600",
    bgGradient: "from-yellow-500/10 via-amber-500/5 to-yellow-600/10",
    borderColor: "border-yellow-500/30",
    glowColor: "shadow-yellow-500/20",
    textColor: "text-yellow-400",
    ringColor: "ring-yellow-500/40",
    subtitle: "Strategic Partnership Investment",
    impressions: "20,000+",
    tagline: "Strategic branding & prize association",
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
    emoji: "",
    amount: "₹10,000/-",
    icon: Star,
    gradient: "from-slate-300 via-gray-400 to-slate-500",
    bgGradient: "from-slate-400/10 via-gray-400/5 to-slate-500/10",
    borderColor: "border-slate-400/30",
    glowColor: "shadow-slate-400/20",
    textColor: "text-slate-300",
    ringColor: "ring-slate-400/40",
    subtitle: "Growth Partnership Investment",
    impressions: "10,000+",
    tagline: "Growing visibility & on-ground presence",
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
    emoji: "",
    amount: "₹5,000/-",
    icon: Award,
    gradient: "from-orange-400 via-amber-600 to-orange-700",
    bgGradient: "from-orange-500/10 via-amber-600/5 to-orange-700/10",
    borderColor: "border-orange-500/30",
    glowColor: "shadow-orange-500/20",
    textColor: "text-orange-400",
    ringColor: "ring-orange-500/40",
    subtitle: "Associate Partnership Investment",
    impressions: "",
    tagline: "Digital acknowledgment & brand presence",
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
];

const Sponsors = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  const navigate = useNavigate();
  const [expandedTier, setExpandedTier] = useState<string | null>(null);

  const toggleTier = (tier: string) => {
    setExpandedTier(expandedTier === tier ? null : tier);
  };

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

        {/* Tier Cards - Compact with reveal */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-8 sm:mb-12"
        >
          {sponsorshipTiers.map((tier) => {
            const isExpanded = expandedTier === tier.tier;
            const TierIcon = tier.icon;
            const benefitCount = tier.sections.reduce((acc, s) => acc + s.items.length, 0);

            return (
              <motion.div
                key={tier.tier}
                variants={itemVariants}
                layout
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${tier.bgGradient} rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500`} />

                <motion.div
                  layout
                  className={`relative bg-card/95 backdrop-blur-xl rounded-2xl border-2 ${tier.borderColor} shadow-xl ${tier.glowColor} group-hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer`}
                  onClick={() => toggleTier(tier.tier)}
                >
                  {/* Compact Card Face */}
                  <div className="p-5 sm:p-6 text-center">
                    {/* Icon with glow */}
                    <div className={`relative mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${tier.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <TierIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tier.gradient} opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-500`} />
                    </div>

                    {/* Tier name + emoji */}
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-1">
                      {tier.tier} {tier.emoji}
                    </h3>

                    {/* Price */}
                    <div className={`text-2xl sm:text-3xl font-display font-bold bg-gradient-to-r ${tier.gradient} bg-clip-text text-transparent mb-2`}>
                      {tier.amount}
                    </div>

                    {/* Tagline */}
                    <p className="text-xs sm:text-sm text-muted-foreground mb-4 line-clamp-2">
                      {tier.tagline}
                    </p>

                    {/* Impressions badge */}
                    {tier.impressions && (
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${tier.borderColor} border bg-gradient-to-r ${tier.bgGradient} mb-4`}>
                        <span className={`text-xs font-semibold ${tier.textColor}`}>
                          {tier.impressions} impressions
                        </span>
                      </div>
                    )}

                    {/* Reveal button */}
                    <div className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl ${isExpanded ? `bg-gradient-to-r ${tier.gradient} text-white` : `border ${tier.borderColor} ${tier.textColor}`} transition-all duration-300 text-sm font-semibold`}>
                      <Eye className="w-4 h-4" />
                      <span>{isExpanded ? 'Hide' : 'View'} {benefitCount} Benefits</span>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Expandable Benefits */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className={`px-5 pb-5 border-t ${tier.borderColor}`}>
                          <div className="pt-4 space-y-4">
                            {tier.sections.map((section, sIdx) => (
                              <div key={sIdx}>
                                <h4 className={`font-display font-bold text-xs uppercase tracking-widest ${tier.textColor} mb-2`}>
                                  {section.title}
                                </h4>
                                <ul className="space-y-1.5">
                                  {section.items.map((item, iIdx) => (
                                    <motion.li
                                      key={iIdx}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: sIdx * 0.1 + iIdx * 0.05 }}
                                      className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground"
                                    >
                                      <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${tier.textColor}`} />
                                      <span>{item}</span>
                                    </motion.li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
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
