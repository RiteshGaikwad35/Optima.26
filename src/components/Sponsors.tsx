import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Crown, Star, Award, Gift, Users, Phone, QrCode, ExternalLink } from "lucide-react";

const sponsorshipTiers = [
  {
    tier: "Gold",
    amount: "₹20,000/-",
    icon: Crown,
    gradient: "from-yellow-400 via-amber-500 to-yellow-600",
    bgGradient: "from-yellow-500/10 via-amber-500/5 to-yellow-600/10",
    borderColor: "border-yellow-500/30",
    glowColor: "shadow-yellow-500/20",
    textColor: "text-yellow-600",
  },
  {
    tier: "Silver",
    amount: "₹10,000/-",
    icon: Star,
    gradient: "from-slate-300 via-gray-400 to-slate-500",
    bgGradient: "from-slate-400/10 via-gray-400/5 to-slate-500/10",
    borderColor: "border-slate-400/30",
    glowColor: "shadow-slate-400/20",
    textColor: "text-slate-500",
  },
  {
    tier: "Bronze",
    amount: "₹5,000/-",
    icon: Award,
    gradient: "from-orange-400 via-amber-600 to-orange-700",
    bgGradient: "from-orange-500/10 via-amber-600/5 to-orange-700/10",
    borderColor: "border-orange-500/30",
    glowColor: "shadow-orange-500/20",
    textColor: "text-orange-600",
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-yellow-500/5 to-transparent rounded-full" />

      <div ref={containerRef} className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
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
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
              Become a Sponsor
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Join us in making OPTIMA 2024 a grand success by becoming a sponsor!
          </p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            We have various sponsorship tiers designed to suit you.
          </p>
        </motion.div>

        {/* Sponsorship Tiers Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Sponsorship Tiers
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Main Tier Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12"
        >
          {sponsorshipTiers.map((tier, index) => (
            <motion.div
              key={tier.tier}
              variants={itemVariants}
              className={`relative group`}
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tier.bgGradient} rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500`} />
              
              {/* Card */}
              <div className={`relative bg-card/95 backdrop-blur-xl rounded-3xl p-8 border-2 ${tier.borderColor} shadow-xl ${tier.glowColor} group-hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2`}>
                {/* Tier Badge */}
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-gradient-to-r ${tier.gradient} shadow-lg`}>
                  <span className="text-white font-bold text-sm uppercase tracking-wider">{tier.tier}</span>
                </div>

                {/* Icon */}
                <div className="mt-6 mb-8 flex justify-center">
                  <div className={`p-5 rounded-2xl bg-gradient-to-br ${tier.bgGradient} border ${tier.borderColor}`}>
                    <tier.icon className={`w-12 h-12 ${tier.textColor}`} />
                  </div>
                </div>

                {/* Amount */}
                <div className="text-center mb-6">
                  <span className={`text-4xl md:text-5xl font-display font-bold bg-gradient-to-r ${tier.gradient} bg-clip-text text-transparent`}>
                    {tier.amount}
                  </span>
                </div>

                {/* Decorative Line */}
                <div className={`h-1 bg-gradient-to-r ${tier.gradient} rounded-full opacity-50`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Tiers */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {additionalTiers.map((tier, index) => (
            <motion.div
              key={tier.title}
              variants={itemVariants}
              className="luxury-card rounded-2xl p-6 group hover:border-primary/30 transition-all duration-500"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:scale-110 transition-transform duration-300">
                  <tier.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-foreground mb-1">
                    {tier.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {tier.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Payment QR Code Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative mb-16"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-3xl blur-xl" />
          <div className="relative glass-card-elevated rounded-3xl p-8 lg:p-12 text-center border border-primary/20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <QrCode className="w-8 h-8 text-primary" />
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                Payment QR Code
              </h3>
            </div>
            
            {/* QR Code Placeholder */}
            <div className="mx-auto w-48 h-48 md:w-56 md:h-56 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-8 border-4 border-primary/20">
              <div className="text-center p-4">
                <QrCode className="w-16 h-16 text-muted-foreground mx-auto mb-2" />
                <span className="text-sm text-muted-foreground">Payment QR Code</span>
              </div>
            </div>

            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              After making the payment, please kindly register yourself to confirm your sponsorship.
            </p>

            <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary via-primary to-accent text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <ExternalLink className="w-5 h-5" />
              Register Your Sponsorship
            </button>
          </div>
        </motion.div>

        {/* Impact Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-12"
        >
          <div className="luxury-card rounded-2xl p-8 lg:p-10 glow-gold">
            <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed">
              Your support will greatly enhance the experience for participants and showcase your commitment to fostering talent in the field!
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
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 p-6 rounded-2xl bg-gradient-to-r from-primary/5 via-transparent to-accent/5 border border-primary/10">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">For any inquiries, please contact us:</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="tel:8639409862" className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors">
                8639409862
              </a>
              <span className="text-muted-foreground">or</span>
              <a href="tel:8008652561" className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors">
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
