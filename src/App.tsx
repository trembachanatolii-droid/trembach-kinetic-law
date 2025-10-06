import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import Blog from "./pages/Blog";

// Blog Category Pages
import AutoAccidentsBlog from "./pages/blog/AutoAccidents";
import BrainInjuriesBlog from "./pages/blog/BrainInjuries";
import MedicalMalpracticeBlog from "./pages/blog/MedicalMalpractice";
import MotorcycleAccidentsBlog from "./pages/blog/MotorcycleAccidents";
import TruckAccidentsBlog from "./pages/blog/TruckAccidents";
import PedestrianAccidentsBlog from "./pages/blog/PedestrianAccidents";
import BicycleAccidentsBlog from "./pages/blog/BicycleAccidents";
import WorkplaceInjuriesBlog from "./pages/blog/WorkplaceInjuries";
import CompensationBlog from "./pages/blog/Compensation";
import CatastrophicInjuriesBlog from "./pages/blog/CatastrophicInjuries";
import InsuranceClaimsBlog from "./pages/blog/InsuranceClaims";
import WrongfulDeathBlog from "./pages/blog/WrongfulDeath";
import PremisesLiabilityBlog from "./pages/blog/PremisesLiability";
import AccidentResponseBlog from "./pages/blog/AccidentResponse";
import EvidenceBlog from "./pages/blog/Evidence";
import SettlementStrategyBlog from "./pages/blog/SettlementStrategy";
import ProductLiabilityBlog from "./pages/blog/ProductLiability";
import RideshareAccidentsBlog from "./pages/blog/RideshareAccidents";
import ElderAbuseBlog from "./pages/blog/ElderAbuse";
import DogBitesBlog from "./pages/blog/DogBites";
import SlipAndFallBlog from "./pages/blog/SlipAndFall";
import SpinalCordInjuriesBlog from "./pages/blog/SpinalCordInjuries";
import AboutPage from "./pages/About";
import PracticeAreasOverview from "./pages/PracticeAreasOverview";
import FreeConsultation from "./pages/FreeConsultation";
import MesotheliomaAsbestos from "./pages/practice-areas/MesotheliomaAsbestos";
import Defamation from "./pages/practice-areas/Defamation";
import DefamationCaseEvaluation from "./pages/practice-areas/defamation/CaseEvaluation";
import DefamationCompensationCalculator from "./pages/practice-areas/defamation/CompensationCalculator";
import DefamationLegalGuidance from "./pages/practice-areas/defamation/LegalGuidance";
import GeneralPersonalInjury from "./pages/practice-areas/GeneralPersonalInjury";
import PersonalInjuryCaseEvaluation from "./pages/practice-areas/general-personal-injury/CaseEvaluation";
import PersonalInjuryCompensationCalculator from "./pages/practice-areas/general-personal-injury/CompensationCalculator";
import PersonalInjuryLegalGuidance from "./pages/practice-areas/general-personal-injury/LegalGuidance";
import CraneAccidents from "./pages/practice-areas/CraneAccidents";
import CraneAccidentsCaseEvaluation from "./pages/practice-areas/crane-accidents/CaseEvaluation";
import CraneAccidentsCompensationCalculator from "./pages/practice-areas/crane-accidents/CompensationCalculator";
import CraneAccidentsLegalGuidance from "./pages/practice-areas/crane-accidents/LegalGuidance";
import CraneAccidentsMedicalGuidance from "./pages/practice-areas/crane-accidents/MedicalGuidance";
import HearingLoss from "./pages/practice-areas/HearingLoss";
import HearingLossCaseEvaluation from "./pages/practice-areas/hearing-loss/CaseEvaluation";
import HearingLossCompensationCalculator from "./pages/practice-areas/hearing-loss/CompensationCalculator";
import HearingLossLegalGuidance from "./pages/practice-areas/hearing-loss/LegalGuidance";
import HearingLossMedicalGuidance from "./pages/practice-areas/hearing-loss/MedicalGuidance";
import Electrocution from "./pages/practice-areas/Electrocution";
import Explosions from "./pages/practice-areas/Explosions";
import ExplosionsCaseEvaluation from "./pages/practice-areas/explosions/CaseEvaluation";
import ExplosionsCompensationCalculator from "./pages/practice-areas/explosions/CompensationCalculator";
import ExplosionsLegalGuidance from "./pages/practice-areas/explosions/LegalGuidance";
import ExplosionsMedicalGuidance from "./pages/practice-areas/explosions/MedicalGuidance";
import ExplosionsTreatmentCenters from "./pages/practice-areas/explosions/TreatmentCenters";
import ExplosionsSupportGroups from "./pages/practice-areas/explosions/SupportGroups";
import ElectrocutionCaseEvaluation from "./pages/practice-areas/electrocution/CaseEvaluation";
import ElectrocutionCompensationCalculator from "./pages/practice-areas/electrocution/CompensationCalculator";
import ElectrocutionLegalGuidance from "./pages/practice-areas/electrocution/LegalGuidance";
import ElectrocutionMedicalGuidance from "./pages/practice-areas/electrocution/MedicalGuidance";
import BusAccidents from "./pages/practice-areas/BusAccidents";
import BusAccidentCaseEvaluation from "./pages/practice-areas/bus-accident/CaseEvaluation";
import BusAccidentCompensationCalculator from "./pages/practice-areas/bus-accident/CompensationCalculator";
import BusAccidentFAQ from "./pages/practice-areas/bus-accident/FAQ";
import BusAccidentLegalGuidance from "./pages/practice-areas/bus-accident/LegalGuidance";
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
import SilicosisInjuries from "./pages/practice-areas/SilicosisInjuries";
import TalcBabyPowderCancer from "./pages/practice-areas/TalcBabyPowderCancer";
import TalcCaseEvaluation from "./pages/TalcCaseEvaluation";
import TalcCompensationCalculator from "./pages/TalcCompensationCalculator";
import TalcMedicalGuidance from "./pages/TalcMedicalGuidance";
import BicycleAccidents from "./pages/practice-areas/BicycleAccidents";
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
import UberLyftCaseEvaluation from "./pages/uber-lyft/UberLyftCaseEvaluation";
import UberLyftCompensationCalculator from "./pages/uber-lyft/UberLyftCompensationCalculator";
import UberLyftMedicalGuidance from "./pages/uber-lyft/UberLyftMedicalGuidance";
import UberLyftLegalGuidance from "./pages/uber-lyft/UberLyftLegalGuidance";
import CarAccidentCaseEvaluation from "./pages/practice-areas/car-accidents/CaseEvaluation";
import CarAccidentCompensationCalculator from "./pages/practice-areas/car-accidents/CompensationCalculator";
import CarAccidentLegalGuidance from "./pages/practice-areas/car-accidents/LegalGuidance";
import CarAccidentMedicalGuidance from "./pages/practice-areas/car-accidents/MedicalGuidance";
import UberLyftInsuranceClaims from "./pages/uber-lyft/UberLyftInsuranceClaims";
import UberLyftDriverScreening from "./pages/uber-lyft/UberLyftDriverScreening";
import UberLyftAppSafety from "./pages/uber-lyft/UberLyftAppSafety";
import UberLyftPassengerRights from "./pages/uber-lyft/UberLyftPassengerRights";
import UberLyftFAQ from "./pages/uber-lyft/UberLyftFAQ";
import UberLyftResources from "./pages/uber-lyft/UberLyftResources";
import AviationAccidents from "./pages/practice-areas/AviationAccidents";
import AviationCaseEvaluation from "./pages/practice-areas/aviation/AviationCaseEvaluation";
import AviationCompensationCalculator from "./pages/practice-areas/aviation/AviationCompensationCalculator";
import AviationFAQ from "./pages/practice-areas/aviation/AviationFAQ";
import AviationLegalGuidance from "./pages/practice-areas/aviation/AviationLegalGuidance";
import AviationMedicalGuidance from "./pages/practice-areas/aviation/AviationMedicalGuidance";
import AviationResources from "./pages/practice-areas/aviation/AviationResources";
import MaritimeAccidents from "./pages/practice-areas/MaritimeAccidents";
import MaritimeCaseEvaluation from "./pages/practice-areas/maritime/MaritimeCaseEvaluation";
import MaritimeCompensationCalculator from "./pages/practice-areas/maritime/MaritimeCompensationCalculator";
import MaritimeLegalGuidance from "./pages/practice-areas/maritime/MaritimeLegalGuidance";
import MaritimeMedicalGuidance from "./pages/practice-areas/maritime/MaritimeMedicalGuidance";
import SwimmingPoolAccidents from "./pages/practice-areas/SwimmingPoolAccidents";
import SwimmingPoolCaseEvaluation from "./pages/practice-areas/swimming-pool/SwimmingPoolCaseEvaluation";
import SwimmingPoolCompensationCalculator from "./pages/practice-areas/swimming-pool/SwimmingPoolCompensationCalculator";
import SwimmingPoolResources from "./pages/practice-areas/swimming-pool/SwimmingPoolResources";
import SwimmingPoolFAQ from "./pages/practice-areas/swimming-pool/SwimmingPoolFAQ";
import AmusementParkInjuries from "./pages/practice-areas/AmusementParkInjuries";
import AmusementParkFAQ from "./pages/practice-areas/amusement-parks/AmusementParkFAQ";
import AmusementParkResources from "./pages/practice-areas/amusement-parks/AmusementParkResources";
import AmusementParkCaseEvaluation from "./pages/practice-areas/amusement-parks/AmusementParkCaseEvaluation";
import AmusementParkCompensationCalculator from "./pages/practice-areas/amusement-parks/AmusementParkCompensationCalculator";
import AmusementParkMedicalGuidance from "./pages/practice-areas/amusement-parks/AmusementParkMedicalGuidance";
import AmusementParkLegalGuidance from "./pages/practice-areas/amusement-parks/AmusementParkLegalGuidance";
import MaritimeEducation from "./pages/practice-areas/maritime/MaritimeEducation";
import VisionLoss from "./pages/practice-areas/VisionLoss";
import VisionLossCaseEvaluation from "./pages/practice-areas/vision-loss/CaseEvaluation";
import VisionLossCompensationCalculator from "./pages/practice-areas/vision-loss/CompensationCalculator";
import VisionLossLegalGuidance from "./pages/practice-areas/vision-loss/LegalGuidance";
import VisionLossMedicalGuidance from "./pages/practice-areas/vision-loss/MedicalGuidance";
import Paralysis from "./pages/practice-areas/Paralysis";
import CivilRights from "./pages/practice-areas/CivilRights";
import RetailAccidents from "./pages/practice-areas/RetailAccidents";
import RetailCaseEvaluation from "./pages/practice-areas/retail-accidents/CaseEvaluation";
import RetailCompensationCalculator from "./pages/practice-areas/retail-accidents/CompensationCalculator";
import RetailLegalGuidance from "./pages/practice-areas/retail-accidents/LegalGuidance";
import CivilRightsCaseEvaluation from "./pages/practice-areas/civil-rights/CaseEvaluation";
import CivilRightsCompensationCalculator from "./pages/practice-areas/civil-rights/CompensationCalculator";
import CivilRightsLegalGuidance from "./pages/practice-areas/civil-rights/LegalGuidance";
import ParalysisCaseEvaluation from "./pages/practice-areas/paralysis/CaseEvaluation";
import LegalRepresentation from "./pages/insurance-insights/LegalRepresentation";
import EvidencePreservation from "./pages/insurance-insights/EvidencePreservation";
import MedicalEvaluation from "./pages/insurance-insights/MedicalEvaluation";

import TrialExperience from "./pages/insurance-insights/TrialExperience";
import StatuteLimitations from "./pages/insurance-insights/StatuteLimitations";
import ParalysisCompensationCalculator from "./pages/practice-areas/paralysis/CompensationCalculator";
import ParalysisLegalGuidance from "./pages/practice-areas/paralysis/LegalGuidance";
import ParalysisMedicalGuidance from "./pages/practice-areas/paralysis/MedicalGuidance";
import ScaffoldingFalls from "./pages/practice-areas/ScaffoldingFalls";
import ScaffoldingFallsCaseEvaluation from "./pages/practice-areas/scaffolding-falls/CaseEvaluation";
import ScaffoldingFallsCompensationCalculator from "./pages/practice-areas/scaffolding-falls/CompensationCalculator";
import ScaffoldingFallsLegalGuidance from "./pages/practice-areas/scaffolding-falls/LegalGuidance";
import RailroadAccidents from "./pages/practice-areas/RailroadAccidents";
import RailroadAccidentsCaseEvaluation from "./pages/practice-areas/railroad-accidents/CaseEvaluation";
import RailroadAccidentsCompensationCalculator from "./pages/practice-areas/railroad-accidents/CompensationCalculator";
import RailroadAccidentsLegalGuidance from "./pages/practice-areas/railroad-accidents/LegalGuidance";
import RailroadAccidentsResources from "./pages/practice-areas/railroad-accidents/Resources";
import RailroadAccidentsMedicalGuidance from "./pages/practice-areas/railroad-accidents/MedicalGuidance";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CalculatorHub from "./pages/CalculatorHub";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          
          <Navigation />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/free-consultation" element={<FreeConsultation />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/calculators" element={<CalculatorHub />} />
            <Route path="/practice-areas" element={<PracticeAreasOverview />} />
            <Route path="/practice-areas/mesothelioma-asbestos" element={<MesotheliomaAsbestos />} />
            <Route path="/practice-areas/defamation" element={<Defamation />} />
            <Route path="/practice-areas/defamation/case-evaluation" element={<DefamationCaseEvaluation />} />
            <Route path="/practice-areas/defamation/compensation-calculator" element={<DefamationCompensationCalculator />} />
            <Route path="/practice-areas/defamation/legal-guidance" element={<DefamationLegalGuidance />} />
            
            <Route path="/practice-areas/general-personal-injury" element={<GeneralPersonalInjury />} />
            <Route path="/practice-areas/general-personal-injury/case-evaluation" element={<PersonalInjuryCaseEvaluation />} />
            <Route path="/practice-areas/general-personal-injury/compensation-calculator" element={<PersonalInjuryCompensationCalculator />} />
            <Route path="/practice-areas/general-personal-injury/legal-guidance" element={<PersonalInjuryLegalGuidance />} />
            <Route path="/practice-areas/crane-accidents" element={<CraneAccidents />} />
            <Route path="/practice-areas/crane-accidents/case-evaluation" element={<CraneAccidentsCaseEvaluation />} />
            <Route path="/practice-areas/crane-accidents/compensation-calculator" element={<CraneAccidentsCompensationCalculator />} />
            <Route path="/practice-areas/crane-accidents/legal-guidance" element={<CraneAccidentsLegalGuidance />} />
            <Route path="/practice-areas/crane-accidents/medical-guidance" element={<CraneAccidentsMedicalGuidance />} />
            <Route path="/practice-areas/hearing-loss" element={<HearingLoss />} />
            <Route path="/practice-areas/hearing-loss/case-evaluation" element={<HearingLossCaseEvaluation />} />
            <Route path="/practice-areas/hearing-loss/compensation-calculator" element={<HearingLossCompensationCalculator />} />
            <Route path="/practice-areas/hearing-loss/legal-guidance" element={<HearingLossLegalGuidance />} />
            <Route path="/practice-areas/hearing-loss/medical-guidance" element={<HearingLossMedicalGuidance />} />
            <Route path="/practice-areas/electrocution" element={<Electrocution />} />
          <Route path="/practice-areas/explosions" element={<Explosions />} />
          <Route path="/practice-areas/explosions/case-evaluation" element={<ExplosionsCaseEvaluation />} />
          <Route path="/practice-areas/explosions/compensation-calculator" element={<ExplosionsCompensationCalculator />} />
          <Route path="/practice-areas/explosions/legal-guidance" element={<ExplosionsLegalGuidance />} />
          <Route path="/practice-areas/explosions/medical-guidance" element={<ExplosionsMedicalGuidance />} />
          <Route path="/practice-areas/explosions/treatment-centers" element={<ExplosionsTreatmentCenters />} />
          <Route path="/practice-areas/explosions/support-groups" element={<ExplosionsSupportGroups />} />
            <Route path="/practice-areas/electrocution/case-evaluation" element={<ElectrocutionCaseEvaluation />} />
            <Route path="/practice-areas/electrocution/compensation-calculator" element={<ElectrocutionCompensationCalculator />} />
        <Route path="/practice-areas/electrocution/legal-guidance" element={<ElectrocutionLegalGuidance />} />
        <Route path="/practice-areas/electrocution/medical-guidance" element={<ElectrocutionMedicalGuidance />} />
            <Route path="/practice-areas/bus-accidents" element={<BusAccidents />} />
            <Route path="/practice-areas/aviation-accidents" element={<AviationAccidents />} />
            <Route path="/aviation/case-evaluation" element={<AviationCaseEvaluation />} />
            <Route path="/aviation/compensation-calculator" element={<AviationCompensationCalculator />} />
            <Route path="/aviation/faq" element={<AviationFAQ />} />
            <Route path="/aviation/legal-guidance" element={<AviationLegalGuidance />} />
            <Route path="/aviation/medical-guidance" element={<AviationMedicalGuidance />} />
            <Route path="/aviation/resources" element={<AviationResources />} />
            <Route path="/practice-areas/maritime-accidents" element={<MaritimeAccidents />} />
            <Route path="/maritime/case-evaluation" element={<MaritimeCaseEvaluation />} />
            <Route path="/maritime/compensation-calculator" element={<MaritimeCompensationCalculator />} />
            <Route path="/maritime/legal-guidance" element={<MaritimeLegalGuidance />} />
            <Route path="/maritime/medical-guidance" element={<MaritimeMedicalGuidance />} />
            <Route path="/maritime/education" element={<MaritimeEducation />} />
            {/* Swimming Pool Routes */}
            <Route path="/practice-areas/swimming-pool-accidents" element={<SwimmingPoolAccidents />} />
            <Route path="/practice-areas/amusement-parks" element={<AmusementParkInjuries />} />
            <Route path="/practice-areas/amusement-parks/case-evaluation" element={<AmusementParkCaseEvaluation />} />
            <Route path="/practice-areas/amusement-parks/compensation-calculator" element={<AmusementParkCompensationCalculator />} />
            <Route path="/practice-areas/amusement-parks/medical-guidance" element={<AmusementParkMedicalGuidance />} />
            <Route path="/practice-areas/amusement-parks/legal-guidance" element={<AmusementParkLegalGuidance />} />
            <Route path="/practice-areas/amusement-parks/resources" element={<AmusementParkResources />} />
            <Route path="/practice-areas/amusement-parks/faq" element={<AmusementParkFAQ />} />
            
            {/* Vision Loss Routes */}
            <Route path="/practice-areas/vision-loss" element={<VisionLoss />} />
            <Route path="/practice-areas/vision-loss/case-evaluation" element={<VisionLossCaseEvaluation />} />
            <Route path="/practice-areas/vision-loss/compensation-calculator" element={<VisionLossCompensationCalculator />} />
            <Route path="/practice-areas/vision-loss/legal-guidance" element={<VisionLossLegalGuidance />} />
            <Route path="/practice-areas/vision-loss/medical-guidance" element={<VisionLossMedicalGuidance />} />
            <Route path="/practice-areas/swimming-pool/case-evaluation" element={<SwimmingPoolCaseEvaluation />} />
            <Route path="/practice-areas/swimming-pool/compensation-calculator" element={<SwimmingPoolCompensationCalculator />} />
            <Route path="/practice-areas/swimming-pool/resources" element={<SwimmingPoolResources />} />
            <Route path="/practice-areas/swimming-pool/faq" element={<SwimmingPoolFAQ />} />
            <Route path="/schedule-consultation" element={<ScheduleConsultation />} />
            <Route path="/bus-accident/case-evaluation" element={<BusAccidentCaseEvaluation />} />
            <Route path="/bus-accident/compensation-calculator" element={<BusAccidentCompensationCalculator />} />
            <Route path="/bus-accident/faq" element={<BusAccidentFAQ />} />
            <Route path="/bus-accident/legal-guidance" element={<BusAccidentLegalGuidance />} />
            <Route path="/practice-areas/uber-lyft-accidents" element={<UberLyftAccidents />} />
            <Route path="/practice-areas/uber-lyft-accidents/case-evaluation" element={<UberLyftCaseEvaluation />} />
            <Route path="/practice-areas/uber-lyft-accidents/compensation-calculator" element={<UberLyftCompensationCalculator />} />
            <Route path="/practice-areas/uber-lyft-accidents/legal-guidance" element={<UberLyftLegalGuidance />} />
            <Route path="/practice-areas/uber-lyft-accidents/medical-guidance" element={<UberLyftMedicalGuidance />} />
            <Route path="/uber-lyft/compensation-calculator" element={<UberLyftCompensationCalculator />} />
            <Route path="/uber-lyft/legal-guidance" element={<UberLyftLegalGuidance />} />
            <Route path="/uber-lyft/medical-guidance" element={<UberLyftMedicalGuidance />} />
            <Route path="/uber-lyft/resources" element={<UberLyftResources />} />
            <Route path="/uber-lyft/case-evaluation" element={<UberLyftCaseEvaluation />} />
            <Route path="/uber-lyft/insurance-claims" element={<UberLyftInsuranceClaims />} />
            <Route path="/uber-lyft/driver-screening" element={<UberLyftDriverScreening />} />
            <Route path="/uber-lyft/app-safety" element={<UberLyftAppSafety />} />
            <Route path="/uber-lyft/passenger-rights" element={<UberLyftPassengerRights />} />
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
            <Route path="/practice-areas/car-accidents/case-evaluation" element={<CarAccidentCaseEvaluation />} />
            <Route path="/practice-areas/car-accidents/compensation-calculator" element={<CarAccidentCompensationCalculator />} />
            <Route path="/practice-areas/car-accidents/legal-guidance" element={<CarAccidentLegalGuidance />} />
            <Route path="/practice-areas/car-accidents/medical-guidance" element={<CarAccidentMedicalGuidance />} />
        <Route path="/car-case-evaluation" element={<CarCaseEvaluation />} />
        <Route path="/car-medical-guidance" element={<CarMedicalGuidance />} />
        <Route path="/car-compensation-calculator" element={<CarCompensationCalculator />} />
            <Route path="/practice-areas/truck-18-wheeler" element={<TruckAccidentsNew />} />
            <Route path="/practice-areas/medical-malpractice" element={<ComingSoon />} />
            <Route path="/practice-areas/silicosis-injuries" element={<SilicosisInjuries />} />
            <Route path="/practice-areas/talc-baby-powder-cancer" element={<TalcBabyPowderCancer />} />
            <Route path="/practice-areas/bicycle-accidents" element={<BicycleAccidents />} />
            <Route path="/practice-areas/motorcycle-accidents" element={<MotorcycleAccidentsNew />} />
            <Route path="/practice-areas/pedestrian-accidents" element={<PedestrianAccidents />} />
            <Route path="/practice-areas/uber-lyft-accidents" element={<UberLyftAccidents />} />
            <Route path="/practice-areas/spinal-cord-injuries" element={<SpinalCordInjuries />} />
            <Route path="/practice-areas/coming-soon" element={<ComingSoon />} />
            <Route path="/practice-areas/*" element={<PracticeAreaRouter />} />
            
            {/* Insurance Insights Routes */}
            <Route path="/legal-representation" element={<LegalRepresentation />} />
            <Route path="/evidence-preservation" element={<EvidencePreservation />} />
            <Route path="/medical-evaluation" element={<MedicalEvaluation />} />
            
            <Route path="/trial-experience" element={<TrialExperience />} />
            <Route path="/statute-limitations" element={<StatuteLimitations />} />
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
             
             {/* Paralysis Routes */}
            <Route path="/practice-areas/paralysis" element={<Paralysis />} />
            <Route path="/practice-areas/civil-rights" element={<CivilRights />} />
            <Route path="/practice-areas/retail-accidents" element={<RetailAccidents />} />
            <Route path="/practice-areas/retail-accidents/case-evaluation" element={<RetailCaseEvaluation />} />
            <Route path="/practice-areas/retail-accidents/compensation-calculator" element={<RetailCompensationCalculator />} />
            <Route path="/practice-areas/retail-accidents/legal-guidance" element={<RetailLegalGuidance />} />
            <Route path="/practice-areas/civil-rights/case-evaluation" element={<CivilRightsCaseEvaluation />} />
            <Route path="/practice-areas/civil-rights/compensation-calculator" element={<CivilRightsCompensationCalculator />} />
            <Route path="/practice-areas/civil-rights/legal-guidance" element={<CivilRightsLegalGuidance />} />
            <Route path="/practice-areas/paralysis/case-evaluation" element={<ParalysisCaseEvaluation />} />
            <Route path="/practice-areas/paralysis/compensation-calculator" element={<ParalysisCompensationCalculator />} />
            <Route path="/practice-areas/paralysis/legal-guidance" element={<ParalysisLegalGuidance />} />
            <Route path="/practice-areas/paralysis/medical-guidance" element={<ParalysisMedicalGuidance />} />
            
            {/* Scaffolding Falls Routes */}
            <Route path="/practice-areas/scaffolding-falls" element={<ScaffoldingFalls />} />
            <Route path="/practice-areas/scaffolding-falls/case-evaluation" element={<ScaffoldingFallsCaseEvaluation />} />
            <Route path="/practice-areas/scaffolding-falls/compensation-calculator" element={<ScaffoldingFallsCompensationCalculator />} />
            <Route path="/practice-areas/scaffolding-falls/legal-guidance" element={<ScaffoldingFallsLegalGuidance />} />
            
            {/* Railroad Accidents Routes */}
            <Route path="/practice-areas/railroad-accidents" element={<RailroadAccidents />} />
            <Route path="/practice-areas/railroad-accidents/case-evaluation" element={<RailroadAccidentsCaseEvaluation />} />
            <Route path="/practice-areas/railroad-accidents/compensation-calculator" element={<RailroadAccidentsCompensationCalculator />} />
            <Route path="/practice-areas/railroad-accidents/legal-guidance" element={<RailroadAccidentsLegalGuidance />} />
            <Route path="/practice-areas/railroad-accidents/resources" element={<RailroadAccidentsResources />} />
            <Route path="/practice-areas/railroad-accidents/medical-guidance" element={<RailroadAccidentsMedicalGuidance />} />
            
            {/* Paralysis Routes also need to be in PracticeAreaRouter */}
            <Route path="/practice-areas/*" element={<PracticeAreaRouter />} />
            
            {/* Blog Route */}
            <Route path="/blog" element={<Blog />} />
          
            {/* Blog Category Pages */}
            <Route path="/blog/auto-accidents" element={<AutoAccidentsBlog />} />
            <Route path="/blog/brain-injuries" element={<BrainInjuriesBlog />} />
            <Route path="/blog/medical-malpractice" element={<MedicalMalpracticeBlog />} />
            <Route path="/blog/motorcycle-accidents" element={<MotorcycleAccidentsBlog />} />
            <Route path="/blog/truck-accidents" element={<TruckAccidentsBlog />} />
            <Route path="/blog/pedestrian-accidents" element={<PedestrianAccidentsBlog />} />
            <Route path="/blog/bicycle-accidents" element={<BicycleAccidentsBlog />} />
            <Route path="/blog/workplace-injuries" element={<WorkplaceInjuriesBlog />} />
            {/* Placeholder routes - will be implemented */}
            <Route path="/blog/accident-response" element={<AccidentResponseBlog />} />
            <Route path="/blog/animal-attacks" element={<DogBitesBlog />} />
            <Route path="/blog/dog-bites" element={<DogBitesBlog />} />
            <Route path="/blog/slip-and-fall" element={<SlipAndFallBlog />} />
            <Route path="/blog/spinal-cord-injuries" element={<SpinalCordInjuriesBlog />} />
            <Route path="/blog/auto-safety" element={<AutoAccidentsBlog />} />
            <Route path="/blog/case-protection" element={<AutoAccidentsBlog />} />
            <Route path="/blog/case-resolution" element={<AutoAccidentsBlog />} />
            <Route path="/blog/case-strategy" element={<AutoAccidentsBlog />} />
            <Route path="/blog/catastrophic-injuries" element={<CatastrophicInjuriesBlog />} />
            <Route path="/blog/common-injuries" element={<AutoAccidentsBlog />} />
            <Route path="/blog/compensation" element={<CompensationBlog />} />
            <Route path="/blog/complex-litigation" element={<AutoAccidentsBlog />} />
            <Route path="/blog/damages-calculation" element={<AutoAccidentsBlog />} />
            <Route path="/blog/elder-abuse" element={<ElderAbuseBlog />} />
            <Route path="/blog/emotional-trauma" element={<AutoAccidentsBlog />} />
            <Route path="/blog/evidence" element={<EvidenceBlog />} />
            <Route path="/blog/family-impact" element={<AutoAccidentsBlog />} />
            <Route path="/blog/government-liability" element={<AutoAccidentsBlog />} />
            <Route path="/blog/insurance-claims" element={<InsuranceClaimsBlog />} />
            <Route path="/blog/insurance-coverage" element={<AutoAccidentsBlog />} />
            <Route path="/blog/insurance-defense" element={<AutoAccidentsBlog />} />
            <Route path="/blog/legal-concepts" element={<AutoAccidentsBlog />} />
            <Route path="/blog/legal-deadlines" element={<AutoAccidentsBlog />} />
            <Route path="/blog/legal-education" element={<AutoAccidentsBlog />} />
            <Route path="/blog/legal-fees" element={<AutoAccidentsBlog />} />
            <Route path="/blog/legal-guidance" element={<AutoAccidentsBlog />} />
            <Route path="/blog/legal-insights" element={<AutoAccidentsBlog />} />
            <Route path="/blog/legal-process" element={<AutoAccidentsBlog />} />
            <Route path="/blog/legal-remedies" element={<AutoAccidentsBlog />} />
            <Route path="/blog/legal-strategy" element={<AutoAccidentsBlog />} />
            <Route path="/blog/premises-liability" element={<PremisesLiabilityBlog />} />
            <Route path="/blog/product-liability" element={<ProductLiabilityBlog />} />
            <Route path="/blog/rideshare-accidents" element={<RideshareAccidentsBlog />} />
            <Route path="/blog/government-liability" element={<AutoAccidentsBlog />} />
            <Route path="/blog/insurance-claims" element={<InsuranceClaimsBlog />} />
            <Route path="/blog/insurance-coverage" element={<AutoAccidentsBlog />} />
            <Route path="/blog/insurance-defense" element={<AutoAccidentsBlog />} />
            <Route path="/blog/legal-concepts" element={<AutoAccidentsBlog />} />
            <Route path="/blog/legal-deadlines" element={<AutoAccidentsBlog />} />
            <Route path="/blog/legal-education" element={<AutoAccidentsBlog />} />
            <Route path="/blog/legal-fees" element={<AutoAccidentsBlog />} />
            <Route path="/blog/legal-guidance" element={<AutoAccidentsBlog />} />
            <Route path="/blog/legal-insights" element={<AutoAccidentsBlog />} />
            <Route path="/blog/legal-process" element={<AutoAccidentsBlog />} />
            <Route path="/blog/legal-remedies" element={<AutoAccidentsBlog />} />
            <Route path="/blog/legal-strategy" element={<AutoAccidentsBlog />} />
            <Route path="/blog/premises-liability" element={<PremisesLiabilityBlog />} />
            <Route path="/blog/product-liability" element={<AutoAccidentsBlog />} />
            <Route path="/blog/rideshare-accidents" element={<AutoAccidentsBlog />} />
            <Route path="/blog/serious-injuries" element={<AutoAccidentsBlog />} />
            <Route path="/blog/settlement-strategy" element={<SettlementStrategyBlog />} />
            <Route path="/blog/wrongful-death" element={<WrongfulDeathBlog />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
