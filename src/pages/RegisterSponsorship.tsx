import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, QrCode, Upload, Send, User, Phone, Mail, Building2, Tag, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const sponsorshipTypes = ["Platinum - ₹40,000", "Gold - ₹20,000", "Silver - ₹10,000", "Bronze - ₹5,000", "Event Sponsorship", "Batch/Solo Sponsorship"];

const RegisterSponsorship = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isCompany, setIsCompany] = useState(false);
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    sponsorshipType: "",
    companyName: "",
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) {
      setFileName(f.name);
      setFile(f);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile || !formData.email || !formData.sponsorshipType) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      let screenshotUrl: string | null = null;

      // Upload payment screenshot if provided
      if (file) {
        const fileExt = file.name.split(".").pop();
        const filePath = `sponsorship/${Date.now()}.${fileExt}`;
        const { error: uploadError } = await supabase.storage
          .from("payment-screenshots")
          .upload(filePath, file);
        if (uploadError) throw uploadError;
        const { data: urlData } = supabase.storage
          .from("payment-screenshots")
          .getPublicUrl(filePath);
        screenshotUrl = urlData.publicUrl;
      }

      const { error } = await supabase.from("registrations").insert({
        registration_type: "sponsorship",
        full_name: formData.name,
        whatsapp_number: formData.mobile,
        email_id: formData.email,
        college_name: isCompany ? formData.companyName : "Individual",
        team_competition: formData.sponsorshipType,
        payment_screenshot_url: screenshotUrl,
      });
      if (error) throw error;

      toast({ title: "Sponsorship registration submitted!" });
      navigate("/");
    } catch (err: any) {
      toast({ title: "Submission failed", description: err.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex items-center gap-3">
          <button
            onClick={() => navigate("/")}
            className="p-2 rounded-xl hover:bg-secondary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="font-display font-bold text-lg sm:text-xl">Register Sponsorship</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 sm:py-12 max-w-2xl">
        {/* QR Code Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card-elevated rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center mb-8 border border-primary/20"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <QrCode className="w-6 h-6 text-primary" />
            <h2 className="text-xl sm:text-2xl font-display font-bold">Payment QR Code</h2>
          </div>
          <div className="mx-auto w-48 h-48 sm:w-56 sm:h-56 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-4 border-4 border-primary/20">
            <div className="text-center p-4">
              <QrCode className="w-16 h-16 text-muted-foreground mx-auto mb-2" />
              <span className="text-sm text-muted-foreground">Scan to Pay</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Scan the QR code to make payment, then fill the form below.
          </p>
        </motion.div>

        {/* Registration Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card-elevated rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-primary/20"
        >
          <h2 className="text-xl sm:text-2xl font-display font-bold text-center mb-6">
            Register for Sponsorship
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 flex items-center gap-2">
                <User className="w-4 h-4 text-primary" /> Full Name
              </label>
              <Input name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" required />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" /> Mobile Number
              </label>
              <Input name="mobile" value={formData.mobile} onChange={handleChange} type="tel" placeholder="Enter mobile number" required />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" /> Email ID
              </label>
              <Input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Enter email address" required />
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border/50">
              <input type="checkbox" id="isCompany" checked={isCompany} onChange={(e) => setIsCompany(e.target.checked)} className="w-4 h-4 accent-primary rounded" />
              <label htmlFor="isCompany" className="text-sm font-medium text-foreground flex items-center gap-2 cursor-pointer">
                <Building2 className="w-4 h-4 text-primary" /> Company Sponsorship
              </label>
            </div>

            {isCompany && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
                <label className="text-sm font-medium text-foreground mb-1.5 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-primary" /> Company Name
                </label>
                <Input name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Enter company name" required={isCompany} />
              </motion.div>
            )}

            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 flex items-center gap-2">
                <Tag className="w-4 h-4 text-primary" /> Sponsorship Type
              </label>
              <select name="sponsorshipType" value={formData.sponsorshipType} onChange={handleChange} required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                <option value="">Select sponsorship type</option>
                {sponsorshipTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 flex items-center gap-2">
                <Upload className="w-4 h-4 text-primary" /> Payment Screenshot
              </label>
              <label className="flex items-center justify-center gap-3 w-full h-28 rounded-xl border-2 border-dashed border-primary/30 bg-secondary/30 cursor-pointer hover:border-primary/50 hover:bg-secondary/50 transition-all">
                <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                {fileName ? (
                  <span className="text-sm text-foreground font-medium">{fileName}</span>
                ) : (
                  <div className="text-center">
                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-1" />
                    <span className="text-sm text-muted-foreground">Click to upload screenshot</span>
                  </div>
                )}
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3 sm:py-4 rounded-full bg-gradient-to-r from-primary via-primary to-accent text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50"
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

export default RegisterSponsorship;
