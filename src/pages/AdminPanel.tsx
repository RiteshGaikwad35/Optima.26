import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search, Users, Handshake, RefreshCw } from "lucide-react";
import { useNavigate } from "react-router-dom";

type EventReg = {
  id: string;
  full_name: string;
  mobile: string;
  email: string | null;
  branch: string | null;
  college: string | null;
  year_of_study: string | null;
  event_id: string;
  event_name: string | null;
  created_at: string;
};

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

const AdminPanel = () => {
  const navigate = useNavigate();
  const [eventRegs, setEventRegs] = useState<EventReg[]>([]);
  const [sponsorRegs, setSponsorRegs] = useState<SponsorReg[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState<"events" | "sponsors">("events");

  const fetchData = async () => {
    setLoading(true);
    const [evRes, spRes] = await Promise.all([
      supabase.from("event_registrations").select("*").order("created_at", { ascending: false }),
      supabase.from("sponsorship_registrations").select("*").order("created_at", { ascending: false }),
    ]);
    if (evRes.data) setEventRegs(evRes.data);
    if (spRes.data) setSponsorRegs(spRes.data);
    setLoading(false);
  };

  useEffect(() => { fetchData(); }, []);

  const filteredEvents = eventRegs.filter((r) =>
    !search ||
    r.full_name.toLowerCase().includes(search.toLowerCase()) ||
    r.mobile.includes(search) ||
    r.email?.toLowerCase().includes(search.toLowerCase())
  );

  const filteredSponsors = sponsorRegs.filter((r) =>
    !search ||
    r.full_name.toLowerCase().includes(search.toLowerCase()) ||
    r.mobile.includes(search) ||
    r.email?.toLowerCase().includes(search.toLowerCase())
  );

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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="rounded-xl border border-border bg-card p-4 flex items-center gap-3">
            <Users className="w-8 h-8 text-accent" />
            <div>
              <p className="text-2xl font-bold">{eventRegs.length}</p>
              <p className="text-sm text-muted-foreground">Event Registrations</p>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-4 flex items-center gap-3">
            <Handshake className="w-8 h-8 text-primary" />
            <div>
              <p className="text-2xl font-bold">{sponsorRegs.length}</p>
              <p className="text-sm text-muted-foreground">Sponsorship Registrations</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by name, mobile, or email..." className="pl-10" />
          </div>
          <div className="flex gap-2">
            {(["events", "sponsors"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  tab === t ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {t === "events" ? "Events" : "Sponsors"}
              </button>
            ))}
            <button onClick={fetchData} className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          {tab === "events" ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Mobile</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Branch</TableHead>
                  <TableHead>College</TableHead>
                  <TableHead>Year</TableHead>
                  <TableHead>Event</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow><TableCell colSpan={8} className="text-center py-8 text-muted-foreground">Loading...</TableCell></TableRow>
                ) : filteredEvents.length === 0 ? (
                  <TableRow><TableCell colSpan={8} className="text-center py-8 text-muted-foreground">No event registrations found.</TableCell></TableRow>
                ) : (
                  filteredEvents.map((r) => (
                    <TableRow key={r.id}>
                      <TableCell className="font-medium">{r.full_name}</TableCell>
                      <TableCell>{r.mobile}</TableCell>
                      <TableCell>{r.email || "—"}</TableCell>
                      <TableCell>{r.branch || "—"}</TableCell>
                      <TableCell>{r.college || "—"}</TableCell>
                      <TableCell>{r.year_of_study || "—"}</TableCell>
                      <TableCell>{r.event_name || r.event_id}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">{new Date(r.created_at).toLocaleDateString()}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
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
                  <TableRow><TableCell colSpan={8} className="text-center py-8 text-muted-foreground">Loading...</TableCell></TableRow>
                ) : filteredSponsors.length === 0 ? (
                  <TableRow><TableCell colSpan={8} className="text-center py-8 text-muted-foreground">No sponsorship registrations found.</TableCell></TableRow>
                ) : (
                  filteredSponsors.map((r) => (
                    <TableRow key={r.id}>
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
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
