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
import CarAccidentsNew from "./pages/practice-areas/CarAccidentsNew";
import CarCaseEvaluation from "./pages/CarCaseEvaluation";
import CarMedicalGuidance from "./pages/CarMedicalGuidance";
import CarCompensationCalculator from "./pages/CarCompensationCalculator";
import TruckAccidentsNew from "./pages/practice-areas/TruckAccidentsNew";
import MedicalMalpractice from "./pages/practice-areas/MedicalMalpractice";
import SilicosisInjuries from "./pages/practice-areas/SilicosisInjuries";
import TalcBabyPowderCancer from "./pages/practice-areas/TalcBabyPowderCancer";
import TalcCaseEvaluation from "./pages/TalcCaseEvaluation";
import TalcCompensationCalculator from "./pages/TalcCompensationCalculator";
import TalcMedicalGuidance from "./pages/TalcMedicalGuidance";
import MotorcycleAccidents from "./pages/practice-areas/MotorcycleAccidents";
import MotorcycleAccidentsNew from "./pages/practice-areas/MotorcycleAccidentsNew";
import MotorcycleCaseEvaluation from "./pages/MotorcycleCaseEvaluation";
import MotorcycleCompensationCalculator from "./pages/MotorcycleCompensationCalculator";
import MotorcycleMedicalGuidance from "./pages/MotorcycleMedicalGuidance";
import ComingSoon from "./pages/practice-areas/ComingSoon";
import PracticeAreaRouter from "./pages/practice-areas/PracticeAreaRouter";
import CaseEvaluation from "./pages/CaseEvaluation";
import MedicalGuidance from "./pages/MedicalGuidance";
import ScheduleConsultation from "./pages/ScheduleConsultation";
import CompensationCalculator from "./pages/CompensationCalculator";
import SilicosisCaseEvaluation from "./pages/SilicosisCaseEvaluation";
import SilicosisCompensationCalculator from "./pages/SilicosisCompensationCalculator";
import SilicosisMedicalGuidance from "./pages/SilicosisMedicalGuidance";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CustomCursor />
      <BrowserRouter>
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/practice-areas/mesothelioma-asbestos" element={<MesotheliomaAsbestos />} />
          <Route path="/practice-areas/car-accidents" element={<CarAccidentsNew />} />
      <Route path="/car-case-evaluation" element={<CarCaseEvaluation />} />
      <Route path="/car-medical-guidance" element={<CarMedicalGuidance />} />
      <Route path="/car-compensation-calculator" element={<CarCompensationCalculator />} />
          <Route path="/practice-areas/truck-18-wheeler" element={<TruckAccidentsNew />} />
          <Route path="/practice-areas/medical-malpractice" element={<MedicalMalpractice />} />
          <Route path="/practice-areas/silicosis-injuries" element={<SilicosisInjuries />} />
          <Route path="/practice-areas/talc-baby-powder-cancer" element={<TalcBabyPowderCancer />} />
          <Route path="/practice-areas/motorcycle-accidents" element={<MotorcycleAccidentsNew />} />
          <Route path="/practice-areas/coming-soon" element={<ComingSoon />} />
          <Route path="/practice-areas/*" element={<PracticeAreaRouter />} />
          <Route path="/talc-case-evaluation" element={<TalcCaseEvaluation />} />
          <Route path="/talc-compensation-calculator" element={<TalcCompensationCalculator />} />
          <Route path="/talc-medical-guidance" element={<TalcMedicalGuidance />} />
          <Route path="/motorcycle-case-evaluation" element={<MotorcycleCaseEvaluation />} />
          <Route path="/motorcycle-compensation-calculator" element={<MotorcycleCompensationCalculator />} />
          <Route path="/motorcycle-medical-guidance" element={<MotorcycleMedicalGuidance />} />
          <Route path="/case-evaluation" element={<CaseEvaluation />} />
          <Route path="/medical-guidance" element={<MedicalGuidance />} />
          <Route path="/schedule-consultation" element={<ScheduleConsultation />} />
          <Route path="/compensation-calculator" element={<CompensationCalculator />} />
          <Route path="/silicosis-case-evaluation" element={<SilicosisCaseEvaluation />} />
          <Route path="/silicosis-compensation-calculator" element={<SilicosisCompensationCalculator />} />
          <Route path="/silicosis-medical-guidance" element={<SilicosisMedicalGuidance />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
