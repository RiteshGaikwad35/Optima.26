import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RegisterSponsorship from "./pages/RegisterSponsorship";
import RegisterEvent from "./pages/RegisterEvent";
import AdminPanel from "./pages/AdminPanel";
import AdminEvents from "./pages/AdminEvents";
import AdminSponsors from "./pages/AdminSponsors";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/register-sponsorship" element={<RegisterSponsorship />} />
          <Route path="/register-event" element={<RegisterEvent />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/admin/events" element={<AdminEvents />} />
          <Route path="/admin/sponsors" element={<AdminSponsors />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
