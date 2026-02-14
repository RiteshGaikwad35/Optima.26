import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search, Users, Handshake, RefreshCw } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Registration = {
  id: string;
  registration_type: string;
  full_name: string | null;
  whatsapp_number: string;
  email_id: string | null;
  college_name: string;
  district: string | null;
  education: string | null;
  selected_competitions: string[] | null;
  team_competition: string | null;
  payment_status: string | null;
  payment_screenshot_url: string | null;
  created_at: string;
};

const AdminPanel = () => {
  const navigate = useNavigate();
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "event" | "sponsorship">("all");

  const fetchData = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("registrations")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error && data) setRegistrations(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filtered = registrations.filter((r) => {
    const matchesFilter = filter === "all" || r.registration_type === filter;
    const matchesSearch =
      !search ||
      r.full_name?.toLowerCase().includes(search.toLowerCase()) ||
      r.whatsapp_number.includes(search) ||
      r.email_id?.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const eventCount = registrations.filter((r) => r.registration_type === "event").length;
  const sponsorCount = registrations.filter((r) => r.registration_type === "sponsorship").length;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate("/")} className="p-2 rounded-xl hover:bg-secondary transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="font-display font-bold text-lg sm:text-xl">Admin Panel</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="rounded-xl border border-border bg-card p-4 flex items-center gap-3">
            <Users className="w-8 h-8 text-primary" />
            <div>
              <p className="text-2xl font-bold">{registrations.length}</p>
              <p className="text-sm text-muted-foreground">Total Registrations</p>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-4 flex items-center gap-3">
            <Users className="w-8 h-8 text-accent" />
            <div>
              <p className="text-2xl font-bold">{eventCount}</p>
              <p className="text-sm text-muted-foreground">Event Registrations</p>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-4 flex items-center gap-3">
            <Handshake className="w-8 h-8 text-primary" />
            <div>
              <p className="text-2xl font-bold">{sponsorCount}</p>
              <p className="text-sm text-muted-foreground">Sponsorship Registrations</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, mobile, or email..."
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            {(["all", "event", "sponsorship"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === f ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
            <button onClick={fetchData} className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Mobile</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>College / Company</TableHead>
                <TableHead>Details</TableHead>
                <TableHead>Payment</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                    Loading...
                  </TableCell>
                </TableRow>
              ) : filtered.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                    No registrations found.
                  </TableCell>
                </TableRow>
              ) : (
                filtered.map((r) => (
                  <TableRow key={r.id}>
                    <TableCell className="font-medium">{r.full_name || "—"}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        r.registration_type === "event" ? "bg-accent/20 text-accent" : "bg-primary/20 text-primary"
                      }`}>
                        {r.registration_type}
                      </span>
                    </TableCell>
                    <TableCell>{r.whatsapp_number}</TableCell>
                    <TableCell>{r.email_id || "—"}</TableCell>
                    <TableCell>{r.college_name}</TableCell>
                    <TableCell className="text-sm">
                      {r.registration_type === "event"
                        ? r.selected_competitions?.join(", ") || "—"
                        : r.team_competition || "—"}
                    </TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        r.payment_status === "verified" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"
                      }`}>
                        {r.payment_status || "pending"}
                      </span>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {new Date(r.created_at).toLocaleDateString()}
                    </TableCell>
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

export default AdminPanel;
