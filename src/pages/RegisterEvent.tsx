import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Send, CheckCircle, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const eventNames: Record<string, string> = {
  neuralquest: "NeuralQuest 2026 – ML Hackathon",
  bgmi: "Online Battle Arena 2026 – BGMI",
  techmeme: "Tech Meme Challenge",
  headstack: "HeadStack – Tech Guessing",
  techquiz: "TechQuiz 2026",
  vibecoding: "VibeCoding 2026 – UI/UX Challenge",
  blindcoding: "Blind Coding Challenge",
  codelock: "CodeLock – Digital Escape Room",
};

const RegisterEvent = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const eventId = searchParams.get("event") || "";
  const eventName = eventNames[eventId] || "Event";

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    branch: "",
    college: "",
    year: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.mobile || !form.email || !form.branch) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.from("event_registrations").insert({
        full_name: form.name,
        mobile: form.mobile,
        email: form.email,
        branch: form.branch,
        college: form.college || null,
        year_of_study: form.year || null,
        event_id: eventId,
        event_name: eventName,
      });
      if (error) throw error;
      setSubmitted(true);
      toast({ title: "Registration submitted successfully!" });
    } catch (err: any) {
      toast({ title: "Registration failed", description: err.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="glass-card rounded-2xl p-10 text-center max-w-md w-full"
        >
          <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-display font-bold text-foreground mb-2">Registered!</h2>
          <p className="text-muted-foreground mb-2">You've registered for <strong>{eventName}</strong>.</p>
          <p className="text-muted-foreground text-sm mb-6">We'll reach out via email with further details.</p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-card font-semibold hover:scale-105 transition-transform"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-10 max-w-lg">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-2xl p-8"
        >
          <h1 className="text-2xl font-display font-bold text-foreground mb-1">Register</h1>
          <p className="text-primary font-medium mb-6">{eventName}</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Full Name *</label>
              <Input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Mobile Number *</label>
              <Input name="mobile" value={form.mobile} onChange={handleChange} placeholder="10-digit mobile" type="tel" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Email *</label>
              <Input name="email" value={form.email} onChange={handleChange} placeholder="you@college.edu" type="email" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Branch / Department *</label>
              <Input name="branch" value={form.branch} onChange={handleChange} placeholder="e.g. Computer Applications" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">College / University</label>
              <Input name="college" value={form.college} onChange={handleChange} placeholder="Your institution" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Year of Study</label>
              <select
                name="year"
                value={form.year}
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Select year</option>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
                <option value="5">5th Year / PG</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-card font-semibold text-base hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-50"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              {loading ? "Submitting..." : "Submit Registration"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default RegisterEvent;
