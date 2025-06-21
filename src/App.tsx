
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DiningTypes from "./pages/DiningTypes";
import Search from "./pages/Search";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
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
          <Route path="/dining-types" element={<DiningTypes />} />
          <Route path="/search" element={<Search />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
          {/* Placeholder routes for future implementation */}
          <Route path="/dashboard" element={<div className="pt-20 p-8">User Dashboard - Coming Soon</div>} />
          <Route path="/owner-login" element={<div className="pt-20 p-8">Owner Login - Coming Soon</div>} />
          <Route path="/restaurant/:id" element={<div className="pt-20 p-8">Restaurant Details - Coming Soon</div>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
