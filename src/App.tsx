import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import CustomCursor from "./components/CustomCursor";
import MesotheliomaAsbestos from "./pages/practice-areas/MesotheliomaAsbestos";
import CarAccidents from "./pages/practice-areas/CarAccidents";
import TruckAccidents from "./pages/practice-areas/TruckAccidents";
import MedicalMalpractice from "./pages/practice-areas/MedicalMalpractice";
import PracticeAreaRouter from "./pages/practice-areas/PracticeAreaRouter";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CustomCursor />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/practice-areas/mesothelioma-asbestos" element={<MesotheliomaAsbestos />} />
          <Route path="/practice-areas/car-accidents" element={<CarAccidents />} />
          <Route path="/practice-areas/truck-18-wheeler" element={<TruckAccidents />} />
          <Route path="/practice-areas/medical-malpractice" element={<MedicalMalpractice />} />
          <Route path="/practice-areas/*" element={<PracticeAreaRouter />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
