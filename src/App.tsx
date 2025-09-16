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
import SilicosisInjuries from "./pages/practice-areas/SilicosisInjuries";
import TalcBabyPowder from "./pages/practice-areas/TalcBabyPowder";
import MotorcycleAccidents from "./pages/practice-areas/MotorcycleAccidents";
import ComingSoon from "./pages/practice-areas/ComingSoon";
import PracticeAreaRouter from "./pages/practice-areas/PracticeAreaRouter";
import CaseEvaluation from "./pages/CaseEvaluation";
import MedicalGuidance from "./pages/MedicalGuidance";
import ScheduleConsultation from "./pages/ScheduleConsultation";
import CompensationCalculator from "./pages/CompensationCalculator";
import LosAngeles from "./pages/locations/LosAngeles";
import SanFrancisco from "./pages/locations/SanFrancisco";
import Blog from "./pages/Blog";
import MagneticCursor from "./components/MagneticCursor";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CustomCursor />
      <MagneticCursor />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/practice-areas/mesothelioma-asbestos" element={<MesotheliomaAsbestos />} />
          <Route path="/practice-areas/car-accidents" element={<CarAccidents />} />
          <Route path="/practice-areas/truck-18-wheeler" element={<TruckAccidents />} />
          <Route path="/practice-areas/medical-malpractice" element={<MedicalMalpractice />} />
          <Route path="/practice-areas/silicosis-injuries" element={<SilicosisInjuries />} />
          <Route path="/practice-areas/talc-baby-powder-cancer" element={<TalcBabyPowder />} />
          <Route path="/practice-areas/motorcycle-accidents" element={<MotorcycleAccidents />} />
          <Route path="/practice-areas/coming-soon" element={<ComingSoon />} />
          <Route path="/practice-areas/*" element={<PracticeAreaRouter />} />
          <Route path="/case-evaluation" element={<CaseEvaluation />} />
          <Route path="/medical-guidance" element={<MedicalGuidance />} />
          <Route path="/schedule-consultation" element={<ScheduleConsultation />} />
          <Route path="/compensation-calculator" element={<CompensationCalculator />} />
          <Route path="/locations/los-angeles" element={<LosAngeles />} />
          <Route path="/locations/san-francisco" element={<SanFrancisco />} />
          <Route path="/blog" element={<Blog />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
