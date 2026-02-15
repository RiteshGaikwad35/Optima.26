import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search, Handshake, RefreshCw, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import AdminLogin from "@/components/AdminLogin";

type SponsorReg = {
  id: string;
  full_name: string;
  mobile: string;
  email: string | null;
  company_name: string | null;
  is_company: boolean | null;
  sponsorship_type: string;
  payment_screenshot_url: string | null;
  payment_status: string | null;
  created_at: string;
};

const AdminSponsors = () => {
  const navigate = useNavigate();
  const auth = useAdminAuth();
  const [regs, setRegs] = useState<SponsorReg[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    setLoading(true);
    const { data } = await supabase.from("sponsorship_registrations").select("*").order("created_at", { ascending: false });
    if (data) setRegs(data);
    setLoading(false);
  };

  useEffect(() => {
    if (auth.isAuthenticated) fetchData();
  }, [auth.isAuthenticated]);

  const filtered = regs.filter((r) =>
    !search ||
    r.full_name.toLowerCase().includes(search.toLowerCase()) ||
    r.mobile.includes(search) ||
    r.email?.toLowerCase().includes(search.toLowerCase())
  );

  if (auth.authLoading) {
    return <div className="min-h-screen bg-background flex items-center justify-center"><RefreshCw className="w-8 h-8 animate-spin text-primary" /></div>;
  }

  if (!auth.isAuthenticated) {
    return <AdminLogin title="Sponsor Admin Login" loginEmail={auth.loginEmail} setLoginEmail={auth.setLoginEmail} loginPassword={auth.loginPassword} setLoginPassword={auth.setLoginPassword} loginLoading={auth.loginLoading} handleLogin={auth.handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate("/")} className="p-2 rounded-xl hover:bg-secondary transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <Handshake className="w-6 h-6 text-primary" />
            <h1 className="font-bold text-lg sm:text-xl">Sponsorship Registrations</h1>
          </div>
          <Button variant="outline" size="sm" onClick={auth.handleLogout}>
            <LogOut className="w-4 h-4 mr-2" /> Logout
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="rounded-xl border border-border bg-card p-4 flex items-center gap-3 mb-6">
          <Handshake className="w-8 h-8 text-primary" />
          <div>
            <p className="text-2xl font-bold">{regs.length}</p>
            <p className="text-sm text-muted-foreground">Total Sponsorship Registrations</p>
          </div>
        </div>

        <div className="flex gap-3 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by name, mobile, or email..." className="pl-10" />
          </div>
          <button onClick={fetchData} className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          </button>
        </div>

        <div className="rounded-xl border border-border bg-card overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>#</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Mobile</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Payment</TableHead>
                <TableHead>Screenshot</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow><TableCell colSpan={9} className="text-center py-8 text-muted-foreground">Loading...</TableCell></TableRow>
              ) : filtered.length === 0 ? (
                <TableRow><TableCell colSpan={9} className="text-center py-8 text-muted-foreground">No sponsorship registrations found.</TableCell></TableRow>
              ) : (
                filtered.map((r, i) => (
                  <TableRow key={r.id}>
                    <TableCell className="text-muted-foreground">{i + 1}</TableCell>
                    <TableCell className="font-medium">{r.full_name}</TableCell>
                    <TableCell>{r.mobile}</TableCell>
                    <TableCell>{r.email || "—"}</TableCell>
                    <TableCell>{r.company_name || "Individual"}</TableCell>
                    <TableCell>{r.sponsorship_type}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        r.payment_status === "verified" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"
                      }`}>
                        {r.payment_status || "pending"}
                      </span>
                    </TableCell>
                    <TableCell>
                      {r.payment_screenshot_url ? (
                        <a href={r.payment_screenshot_url} target="_blank" rel="noopener noreferrer" className="text-primary underline text-sm">View</a>
                      ) : "—"}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">{new Date(r.created_at).toLocaleDateString()}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default AdminSponsors;
