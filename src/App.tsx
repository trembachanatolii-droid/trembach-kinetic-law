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
import BirthInjuries from "./pages/practice-areas/BirthInjuries";
import BirthInjuriesCaseEvaluation from "./pages/BirthInjuriesCaseEvaluation";
import BirthInjuriesCompensationCalculator from "./pages/birth-injuries/BirthInjuriesCompensationCalculator";
import BirthInjuriesMedicalGuidance from "./pages/birth-injuries/BirthInjuriesMedicalGuidance";
import BirthInjuriesLegalGuidance from "./pages/birth-injuries/BirthInjuriesLegalGuidance";
import BirthInjuriesResources from "./pages/birth-injuries/BirthInjuriesResources";
import BirthInjuriesFAQ from "./pages/birth-injuries/BirthInjuriesFAQ";
import ClergyAbuse from "./pages/practice-areas/ClergyAbuse";
import ElderAbuse from "./pages/practice-areas/ElderAbuse";
import ElderAbuseCaseEvaluation from "./pages/ElderAbuseCaseEvaluation";
import ElderAbuseCalculator from "./pages/ElderAbuseCalculator";
import ElderAbuseLegalGuidance from "./pages/ElderAbuseLegalGuidance";
import ElderAbuseResources from "./pages/ElderAbuseResources";
import ClergyAbuseCaseEvaluation from "./pages/ClergyAbuseCaseEvaluation";
import ClergyAbuseCalculator from "./pages/ClergyAbuseCalculator";
import ClergyAbuseLegalGuidance from "./pages/ClergyAbuseLegalGuidance";
import ClergyAbuseResources from "./pages/ClergyAbuseResources";
import SexualAbuse from "./pages/practice-areas/SexualAbuse";
import SexualAbuseCaseEvaluation from "./pages/SexualAbuseCaseEvaluation";
import SexualAbuseCalculator from "./pages/SexualAbuseCalculator";
import SexualAbuseResources from "./pages/SexualAbuseResources";
import SexualAbuseLegalGuidance from "./pages/SexualAbuseLegalGuidance";
import CampLejeune from "./pages/practice-areas/CampLejeune";
import CampLejeuneEvaluation from "./pages/CampLejeuneEvaluation";
import CampLejeuneCalculator from "./pages/CampLejeuneCalculator";
import CampLejeuneResources from "./pages/CampLejeuneResources";
import CampLejeuneGuidance from "./pages/CampLejeuneGuidance";
import MassTorts from "./pages/practice-areas/MassTorts";
import MassTortsCompensationCalculator from "./pages/MassTortsCompensationCalculator";
import MassTortsCaseEvaluation from "./pages/MassTortsCaseEvaluation";
import MassTortsMedicalGuidance from "./pages/MassTortsMedicalGuidance";
import MassTortsEducation from "./pages/MassTortsEducation";
import MassTortsResources from "./pages/MassTortsResources";
import ClassActions from "./pages/practice-areas/ClassActions";
import ClassActionsCaseEvaluation from "./pages/ClassActionsCaseEvaluation";
import ClassActionsCompensationCalculator from "./pages/ClassActionsCompensationCalculator";
import ClassActionsLegalGuidance from "./pages/ClassActionsLegalGuidance";
import ClassActionsResources from "./pages/ClassActionsResources";
import EnvironmentalToxicCaseEvaluation from './pages/EnvironmentalToxicCaseEvaluation';
import EnvironmentalToxicCompensationCalculator from './pages/EnvironmentalToxicCompensationCalculator';
import EnvironmentalToxicLegalGuidance from './pages/EnvironmentalToxicLegalGuidance';
import EnvironmentalToxicResources from './pages/EnvironmentalToxicResources';
import Pharmaceutical from "./pages/practice-areas/Pharmaceutical";
import PharmaceuticalCaseEvaluation from "./pages/PharmaceuticalCaseEvaluation";
import PharmaceuticalCompensationCalculator from "./pages/PharmaceuticalCompensationCalculator";
import PharmaceuticalMedicalGuidance from "./pages/PharmaceuticalMedicalGuidance";
import MedicalDevices from "./pages/practice-areas/MedicalDevices";
import MedicalDevicesCaseEvaluation from "./pages/MedicalDevicesCaseEvaluation";
import MedicalDevicesCompensationCalculator from "./pages/MedicalDevicesCompensationCalculator";
import MedicalDevicesMedicalGuidance from "./pages/MedicalDevicesMedicalGuidance";
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
import WorkplaceInjuriesCaseEvaluation from "./pages/WorkplaceInjuriesCaseEvaluation";
import WorkplaceInjuriesCompensationCalculator from "./pages/WorkplaceInjuriesCompensationCalculator";
import WorkplaceInjuriesMedicalGuidance from "./pages/WorkplaceInjuriesMedicalGuidance";
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
import SpinalCordCaseEvaluation from "./pages/SpinalCordCaseEvaluation";
import SpinalCordCompensationCalculator from "./pages/SpinalCordCompensationCalculator";
import SpinalCordMedicalGuidance from "./pages/SpinalCordMedicalGuidance";
import BurnCaseEvaluation from "./pages/BurnCaseEvaluation";
import BurnCompensationCalculator from "./pages/BurnCompensationCalculator";
import BurnMedicalGuidance from "./pages/BurnMedicalGuidance";
import AmputationCaseEvaluation from "./pages/AmputationCaseEvaluation";
import AmputationCompensationCalculator from "./pages/AmputationCompensationCalculator";
import AmputationMedicalGuidance from "./pages/AmputationMedicalGuidance";
import PFASCaseEvaluation from "./pages/PFASCaseEvaluation";
import PFASExposure from "./pages/practice-areas/PFASExposure";
import PFASCalculator from "./pages/PFASCalculator";
import PFASResources from "./pages/PFASResources";
import PFASGuidance from "./pages/PFASGuidance";
import BenzeneExposure from "./pages/practice-areas/BenzeneExposure";
import BenzeneCaseEvaluation from "./pages/BenzeneCaseEvaluation";
import BenzeneCalculator from "./pages/BenzeneCalculator";
import BenzeneMedicalGuidance from "./pages/BenzeneMedicalGuidance";
import BenzeneLegalGuidance from "./pages/BenzeneLegalGuidance";
import BenzeneEducation from "./pages/BenzeneEducation";
import OpioidLitigation from "./pages/practice-areas/OpioidLitigation";
import OpioidCaseEvaluation from "./pages/OpioidCaseEvaluation";
import OpioidCalculator from "./pages/OpioidCalculator";
import OpioidMedicalGuidance from "./pages/OpioidMedicalGuidance";
import OpioidLegalGuidance from "./pages/OpioidLegalGuidance";
import OpioidEducation from "./pages/OpioidEducation";
import UberLyftAccidents from "./pages/practice-areas/UberLyftAccidents";
import UberLyftCaseEvaluation from "./pages/UberLyftCaseEvaluation";
import UberLyftCompensationCalculator from "./pages/uber-lyft/UberLyftCompensationCalculator";
import UberLyftMedicalGuidance from "./pages/uber-lyft/UberLyftMedicalGuidance";
import UberLyftLegalGuidance from "./pages/uber-lyft/UberLyftLegalGuidance";
import UberLyftFAQ from "./pages/uber-lyft/UberLyftFAQ";
import UberLyftResources from "./pages/uber-lyft/UberLyftResources";

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
            <Route path="/practice-areas/birth-injuries" element={<BirthInjuries />} />
            <Route path="/birth-injuries/case-evaluation" element={<BirthInjuriesCaseEvaluation />} />
            <Route path="/birth-injuries/compensation-calculator" element={<BirthInjuriesCompensationCalculator />} />
            <Route path="/birth-injuries/medical-guidance" element={<BirthInjuriesMedicalGuidance />} />
            <Route path="/birth-injuries/legal-guidance" element={<BirthInjuriesLegalGuidance />} />
            <Route path="/birth-injuries/resources" element={<BirthInjuriesResources />} />
            <Route path="/birth-injuries/faq" element={<BirthInjuriesFAQ />} />
            <Route path="/practice-areas/clergy-abuse" element={<ClergyAbuse />} />
            <Route path="/practice-areas/elder-abuse" element={<ElderAbuse />} />
            <Route path="/elder-abuse-case-evaluation" element={<ElderAbuseCaseEvaluation />} />
            <Route path="/elder-abuse-calculator" element={<ElderAbuseCalculator />} />
            <Route path="/elder-abuse-legal-guidance" element={<ElderAbuseLegalGuidance />} />
            <Route path="/elder-abuse-resources" element={<ElderAbuseResources />} />
            <Route path="/clergy-abuse-case-evaluation" element={<ClergyAbuseCaseEvaluation />} />
            <Route path="/clergy-abuse-calculator" element={<ClergyAbuseCalculator />} />
            <Route path="/clergy-abuse-legal-guidance" element={<ClergyAbuseLegalGuidance />} />
            <Route path="/clergy-abuse-resources" element={<ClergyAbuseResources />} />
            <Route path="/practice-areas/sexual-abuse" element={<SexualAbuse />} />
            <Route path="/sexual-abuse-case-evaluation" element={<SexualAbuseCaseEvaluation />} />
            <Route path="/sexual-abuse-calculator" element={<SexualAbuseCalculator />} />
            <Route path="/sexual-abuse-resources" element={<SexualAbuseResources />} />
            <Route path="/sexual-abuse-legal-guidance" element={<SexualAbuseLegalGuidance />} />
            <Route path="/practice-areas/camp-lejeune" element={<CampLejeune />} />
            <Route path="/camp-lejeune-case-evaluation" element={<CampLejeuneEvaluation />} />
            <Route path="/camp-lejeune-calculator" element={<CampLejeuneCalculator />} />
            <Route path="/practice-areas/mass-torts" element={<MassTorts />} />
            <Route path="/practice-areas/pharmaceutical" element={<Pharmaceutical />} />
            <Route path="/pharmaceutical-case-evaluation" element={<PharmaceuticalCaseEvaluation />} />
            <Route path="/pharmaceutical-compensation-calculator" element={<PharmaceuticalCompensationCalculator />} />
            <Route path="/pharmaceutical-medical-guidance" element={<PharmaceuticalMedicalGuidance />} />
            <Route path="/practice-areas/medical-devices" element={<MedicalDevices />} />
            <Route path="/medical-devices-case-evaluation" element={<MedicalDevicesCaseEvaluation />} />
            <Route path="/medical-devices-compensation-calculator" element={<MedicalDevicesCompensationCalculator />} />
            <Route path="/medical-devices-medical-guidance" element={<MedicalDevicesMedicalGuidance />} />
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
            <Route path="/practice-areas/uber-lyft-accidents" element={<UberLyftAccidents />} />
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

            {/* Spinal Cord Injury Routes */}
            <Route path="/spinal-cord-case-evaluation" element={<SpinalCordCaseEvaluation />} />
            <Route path="/spinal-cord-compensation-calculator" element={<SpinalCordCompensationCalculator />} />
            <Route path="/spinal-cord-medical-guidance" element={<SpinalCordMedicalGuidance />} />

            {/* Burn Injury Routes */}
            <Route path="/burn-case-evaluation" element={<BurnCaseEvaluation />} />
            <Route path="/burn-compensation-calculator" element={<BurnCompensationCalculator />} />
            <Route path="/burn-medical-guidance" element={<BurnMedicalGuidance />} />

            {/* Amputation Injury Routes */}
            <Route path="/amputation-case-evaluation" element={<AmputationCaseEvaluation />} />
            <Route path="/amputation-compensation-calculator" element={<AmputationCompensationCalculator />} />
            <Route path="/amputation-medical-guidance" element={<AmputationMedicalGuidance />} />
        
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
            <Route path="/workplace-injuries-case-evaluation" element={<WorkplaceInjuriesCaseEvaluation />} />
            <Route path="/workplace-injuries-compensation-calculator" element={<WorkplaceInjuriesCompensationCalculator />} />
            <Route path="/workplace-injuries-medical-guidance" element={<WorkplaceInjuriesMedicalGuidance />} />
            <Route path="/dog-bite-case-evaluation" element={<DogBiteCaseEvaluation />} />
            <Route path="/dog-bite-compensation-calculator" element={<DogBiteCompensationCalculator />} />
             <Route path="/dog-bite-medical-guidance" element={<DogBiteMedicalGuidance />} />
             <Route path="/mass-torts-compensation-calculator" element={<MassTortsCompensationCalculator />} />
             <Route path="/mass-torts-case-evaluation" element={<MassTortsCaseEvaluation />} />
             <Route path="/mass-torts-medical-guidance" element={<MassTortsMedicalGuidance />} />
             <Route path="/mass-torts-education" element={<MassTortsEducation />} />
             <Route path="/mass-torts-resources" element={<MassTortsResources />} />
             <Route path="/class-actions" element={<ClassActions />} />
        <Route path="/class-actions-case-evaluation" element={<ClassActionsCaseEvaluation />} />
        <Route path="/class-actions-compensation-calculator" element={<ClassActionsCompensationCalculator />} />
        <Route path="/class-actions-legal-guidance" element={<ClassActionsLegalGuidance />} />
        <Route path="/class-actions-resources" element={<ClassActionsResources />} />
        <Route path="/camp-lejeune-evaluation" element={<CampLejeuneEvaluation />} />
        <Route path="/camp-lejeune-calculator" element={<CampLejeuneCalculator />} />
        <Route path="/camp-lejeune-resources" element={<CampLejeuneResources />} />
        <Route path="/camp-lejeune-guidance" element={<CampLejeuneGuidance />} />
        <Route path="/environmental-toxic-case-evaluation" element={<EnvironmentalToxicCaseEvaluation />} />
        <Route path="/environmental-toxic-compensation-calculator" element={<EnvironmentalToxicCompensationCalculator />} />
        <Route path="/environmental-toxic-legal-guidance" element={<EnvironmentalToxicLegalGuidance />} />
        <Route path="/environmental-toxic-resources" element={<EnvironmentalToxicResources />} />
        {/* Environmental Toxic aliases under practice-areas for internal link parity */}
        <Route path="/practice-areas/environmental-toxic/case-evaluation" element={<EnvironmentalToxicCaseEvaluation />} />
        <Route path="/practice-areas/environmental-toxic/compensation-calculator" element={<EnvironmentalToxicCompensationCalculator />} />
        <Route path="/practice-areas/environmental-toxic/legal-guidance" element={<EnvironmentalToxicLegalGuidance />} />
        <Route path="/practice-areas/environmental-toxic/resources" element={<EnvironmentalToxicResources />} />
        {/* PFAS Exposure Routes */}
        <Route path="/practice-areas/pfas-exposure" element={<PFASExposure />} />
        <Route path="/pfas-case-evaluation" element={<PFASCaseEvaluation />} />
        <Route path="/pfas-calculator" element={<PFASCalculator />} />
        <Route path="/pfas-resources" element={<PFASResources />} />
        <Route path="/pfas-guidance" element={<PFASGuidance />} />
        {/* Benzene Exposure Routes */}
        <Route path="/practice-areas/benzene-exposure" element={<BenzeneExposure />} />
        <Route path="/benzene-case-evaluation" element={<BenzeneCaseEvaluation />} />
        <Route path="/benzene-calculator" element={<BenzeneCalculator />} />
        <Route path="/benzene-medical-guidance" element={<BenzeneMedicalGuidance />} />
        <Route path="/benzene-legal-guidance" element={<BenzeneLegalGuidance />} />
            <Route path="/benzene-education" element={<BenzeneEducation />} />
            <Route path="/practice-areas/opioid-litigation" element={<OpioidLitigation />} />
            <Route path="/opioid-case-evaluation" element={<OpioidCaseEvaluation />} />
            <Route path="/opioid-calculator" element={<OpioidCalculator />} />
            <Route path="/opioid-medical-guidance" element={<OpioidMedicalGuidance />} />
            <Route path="/opioid-legal-guidance" element={<OpioidLegalGuidance />} />
            <Route path="/opioid-education" element={<OpioidEducation />} />
            <Route path="/uber-lyft-case-evaluation" element={<UberLyftCaseEvaluation />} />
            <Route path="/uber-lyft-compensation-calculator" element={<UberLyftCompensationCalculator />} />
            <Route path="/uber-lyft-medical-guidance" element={<UberLyftMedicalGuidance />} />
            <Route path="/uber-lyft-legal-guidance" element={<UberLyftLegalGuidance />} />
            <Route path="/uber-lyft-faq" element={<UberLyftFAQ />} />
            <Route path="/uber-lyft-resources" element={<UberLyftResources />} />
             {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
