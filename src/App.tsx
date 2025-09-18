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
import BicycleAccidents from "./pages/practice-areas/BicycleAccidents";
import MotorcycleAccidents from "./pages/practice-areas/MotorcycleAccidents";
import MotorcycleAccidentsNew from "./pages/practice-areas/MotorcycleAccidentsNew";
import BicycleCaseEvaluation from "./pages/BicycleCaseEvaluation";
import BicycleMedicalGuidance from "./pages/BicycleMedicalGuidance";
import BicycleCompensationCalculator from "./pages/BicycleCompensationCalculator";
import MotorcycleCaseEvaluation from "./pages/MotorcycleCaseEvaluation";
import MotorcycleCompensationCalculator from "./pages/MotorcycleCompensationCalculator";
import MotorcycleMedicalGuidance from "./pages/MotorcycleMedicalGuidance";
import PedestrianAccidents from "./pages/practice-areas/PedestrianAccidents";
import PedestrianCaseEvaluation from "./pages/PedestrianCaseEvaluation";
import PedestrianCompensationCalculator from "./pages/PedestrianCompensationCalculator";
import PedestrianMedicalGuidance from "./pages/PedestrianMedicalGuidance";
import ComingSoon from "./pages/practice-areas/ComingSoon";
import PracticeAreaRouter from "./pages/practice-areas/PracticeAreaRouter";
import CaseEvaluation from "./pages/CaseEvaluation";
import MedicalGuidance from "./pages/MedicalGuidance";
import MedicalMalpracticeCaseEvaluation from "./pages/MedicalMalpracticeCaseEvaluation";
import MedicalMalpracticeCompensationCalculator from "./pages/MedicalMalpracticeCompensationCalculator";
import MedicalMalpracticeMedicalGuidance from "./pages/MedicalMalpracticeMedicalGuidance";
import ScheduleConsultation from "./pages/ScheduleConsultation";
import CompensationCalculator from "./pages/CompensationCalculator";
import SilicosisCaseEvaluation from "./pages/SilicosisCaseEvaluation";
import SilicosisCompensationCalculator from "./pages/SilicosisCompensationCalculator";
import SilicosisMedicalGuidance from "./pages/SilicosisMedicalGuidance";
import PremisesLiabilityCaseEvaluation from "./pages/PremisesLiabilityCaseEvaluation";
import PremisesLiabilityCompensationCalculator from "./pages/PremisesLiabilityCompensationCalculator";
import PremisesLiabilityMedicalGuidance from "./pages/PremisesLiabilityMedicalGuidance";
import DogBiteCaseEvaluation from "./pages/DogBiteCaseEvaluation";
import DogBiteCompensationCalculator from "./pages/DogBiteCompensationCalculator";
import DogBiteMedicalGuidance from "./pages/DogBiteMedicalGuidance";
import WrongfulDeathCaseEvaluation from "./pages/WrongfulDeathCaseEvaluation";
import WrongfulDeathCompensationCalculator from "./pages/WrongfulDeathCompensationCalculator";
import WrongfulDeathMedicalGuidance from "./pages/WrongfulDeathMedicalGuidance";
import ProductLiabilityCaseEvaluation from "./pages/ProductLiabilityCaseEvaluation";
import ProductLiabilityCompensationCalculator from "./pages/ProductLiabilityCompensationCalculator";
import ProductLiabilityMedicalGuidance from "./pages/ProductLiabilityMedicalGuidance";
import ScrollToTop from "./components/ScrollToTop";
import ConstructionCaseEvaluation from "./pages/ConstructionCaseEvaluation";
import ConstructionCompensationCalculator from "./pages/ConstructionCompensationCalculator";
import ConstructionMedicalGuidance from "./pages/ConstructionMedicalGuidance";
import BrainCaseEvaluation from "./pages/BrainCaseEvaluation";
import BrainCompensationCalculator from "./pages/BrainCompensationCalculator";
import BrainMedicalGuidance from "./pages/BrainMedicalGuidance";
import SpinalCordInjuries from "./pages/practice-areas/SpinalCordInjuries";

const queryClient = new QueryClient();

function App() {
  return (
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
            <Route path="/practice-areas/bicycle-accidents" element={<BicycleAccidents />} />
            <Route path="/practice-areas/motorcycle-accidents" element={<MotorcycleAccidentsNew />} />
            <Route path="/practice-areas/pedestrian-accidents" element={<PedestrianAccidents />} />
            <Route path="/practice-areas/spinal-cord-injuries" element={<SpinalCordInjuries />} />
            <Route path="/practice-areas/coming-soon" element={<ComingSoon />} />
            <Route path="/practice-areas/*" element={<PracticeAreaRouter />} />
          <Route path="/talc-case-evaluation" element={<TalcCaseEvaluation />} />
          <Route path="/talc-compensation-calculator" element={<TalcCompensationCalculator />} />
          <Route path="/talc-medical-guidance" element={<TalcMedicalGuidance />} />
            <Route path="/wrongful-death-case-evaluation" element={<WrongfulDeathCaseEvaluation />} />
            <Route path="/wrongful-death-compensation-calculator" element={<WrongfulDeathCompensationCalculator />} />
            <Route path="/wrongful-death-medical-guidance" element={<WrongfulDeathMedicalGuidance />} />
            
            {/* Construction Accidents Routes */}
            <Route path="/construction-case-evaluation" element={<ConstructionCaseEvaluation />} />
            <Route path="/construction-compensation-calculator" element={<ConstructionCompensationCalculator />} />
            <Route path="/construction-medical-guidance" element={<ConstructionMedicalGuidance />} />

            {/* Brain Injury Routes */}
            <Route path="/brain-case-evaluation" element={<BrainCaseEvaluation />} />
            <Route path="/brain-compensation-calculator" element={<BrainCompensationCalculator />} />
            <Route path="/brain-medical-guidance" element={<BrainMedicalGuidance />} />
        
        {/* Product Liability Routes */}
        <Route path="/product-liability-case-evaluation" element={<ProductLiabilityCaseEvaluation />} />
        <Route path="/product-liability-compensation-calculator" element={<ProductLiabilityCompensationCalculator />} />
        <Route path="/product-liability-medical-guidance" element={<ProductLiabilityMedicalGuidance />} />
              <Route path="/bicycle-case-evaluation" element={<BicycleCaseEvaluation />} />
              <Route path="/bicycle-medical-guidance" element={<BicycleMedicalGuidance />} />
              <Route path="/bicycle-compensation-calculator" element={<BicycleCompensationCalculator />} />
              <Route path="/motorcycle-case-evaluation" element={<MotorcycleCaseEvaluation />} />
            <Route path="/motorcycle-compensation-calculator" element={<MotorcycleCompensationCalculator />} />
            <Route path="/motorcycle-medical-guidance" element={<MotorcycleMedicalGuidance />} />
            <Route path="/pedestrian-case-evaluation" element={<PedestrianCaseEvaluation />} />
            <Route path="/pedestrian-compensation-calculator" element={<PedestrianCompensationCalculator />} />
            <Route path="/pedestrian-medical-guidance" element={<PedestrianMedicalGuidance />} />
            <Route path="/case-evaluation" element={<CaseEvaluation />} />
          <Route path="/medical-guidance" element={<MedicalGuidance />} />
          <Route path="/medical-malpractice-case-evaluation" element={<MedicalMalpracticeCaseEvaluation />} />
          <Route path="/medical-malpractice-compensation-calculator" element={<MedicalMalpracticeCompensationCalculator />} />
          <Route path="/medical-malpractice-medical-guidance" element={<MedicalMalpracticeMedicalGuidance />} />
            <Route path="/schedule-consultation" element={<ScheduleConsultation />} />
            <Route path="/compensation-calculator" element={<CompensationCalculator />} />
            <Route path="/silicosis-case-evaluation" element={<SilicosisCaseEvaluation />} />
            <Route path="/silicosis-compensation-calculator" element={<SilicosisCompensationCalculator />} />
            <Route path="/silicosis-medical-guidance" element={<SilicosisMedicalGuidance />} />
            <Route path="/premises-liability-case-evaluation" element={<PremisesLiabilityCaseEvaluation />} />
            <Route path="/premises-liability-compensation-calculator" element={<PremisesLiabilityCompensationCalculator />} />
            <Route path="/premises-liability-medical-guidance" element={<PremisesLiabilityMedicalGuidance />} />
            <Route path="/dog-bite-case-evaluation" element={<DogBiteCaseEvaluation />} />
            <Route path="/dog-bite-compensation-calculator" element={<DogBiteCompensationCalculator />} />
            <Route path="/dog-bite-medical-guidance" element={<DogBiteMedicalGuidance />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
