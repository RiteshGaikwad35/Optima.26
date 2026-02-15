import { useNavigate } from "react-router-dom";
import { Users, Handshake, ArrowLeft, RefreshCw, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import AdminLogin from "@/components/AdminLogin";

const AdminPanel = () => {
  const navigate = useNavigate();
  const auth = useAdminAuth();

  if (auth.authLoading) {
    return <div className="min-h-screen bg-background flex items-center justify-center"><RefreshCw className="w-8 h-8 animate-spin text-primary" /></div>;
  }

  if (!auth.isAuthenticated) {
    return <AdminLogin title="Admin Login" loginEmail={auth.loginEmail} setLoginEmail={auth.setLoginEmail} loginPassword={auth.loginPassword} setLoginPassword={auth.setLoginPassword} loginLoading={auth.loginLoading} handleLogin={auth.handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate("/")} className="p-2 rounded-xl hover:bg-secondary transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="font-bold text-lg sm:text-xl">Admin Panel</h1>
          </div>
          <Button variant="outline" size="sm" onClick={auth.handleLogout}>
            <LogOut className="w-4 h-4 mr-2" /> Logout
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-center mb-8 text-muted-foreground">Select a panel to manage</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <button
            onClick={() => navigate("/admin/events")}
            className="rounded-2xl border border-border bg-card p-8 flex flex-col items-center gap-4 hover:border-accent hover:shadow-lg transition-all group"
          >
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <Users className="w-8 h-8 text-accent" />
            </div>
            <div className="text-center">
              <p className="text-lg font-bold">Event Registrations</p>
              <p className="text-sm text-muted-foreground mt-1">View & manage event sign-ups</p>
            </div>
          </button>

          <button
            onClick={() => navigate("/admin/sponsors")}
            className="rounded-2xl border border-border bg-card p-8 flex flex-col items-center gap-4 hover:border-primary hover:shadow-lg transition-all group"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Handshake className="w-8 h-8 text-primary" />
            </div>
            <div className="text-center">
              <p className="text-lg font-bold">Sponsorship Registrations</p>
              <p className="text-sm text-muted-foreground mt-1">View & manage sponsor data</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
