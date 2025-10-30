import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MedicalMalpractice from './MedicalMalpractice';
import MesotheliomaAsbestos from './MesotheliomaAsbestos';
import MedicalDevices from './MedicalDevices';
import ComingSoon from './ComingSoon';
import AmputationInjuries from './AmputationInjuries';
import SilicosisInjuries from './SilicosisInjuries';
import TalcBabyPowderCancer from './TalcBabyPowderCancer';
import CarAccidentsNew from './CarAccidentsNew';
import TruckAccidentsNew from './TruckAccidentsNew';
import MotorcycleAccidentsNew from './MotorcycleAccidentsNew';
import PedestrianAccidents from './PedestrianAccidents';
import BicycleAccidents from './BicycleAccidents';
import SlipFallAccidents from './SlipFallAccidents';
import DogBitesAnimalAttacks from './DogBitesAnimalAttacks';
import PremisesLiability from './PremisesLiability';
import ProductLiability from './ProductLiability';
import ConstructionAccidents from './ConstructionAccidents';
import WrongfulDeath from './WrongfulDeath';
import BrainInjuries from './BrainInjuries';
import BurnInjuries from './BurnInjuries';
import WorkplaceInjuries from './WorkplaceInjuries';
import ClassActions from './ClassActions';
import EnvironmentalToxic from './EnvironmentalToxic';
import Paralysis from './Paralysis';
import ParalysisCaseEvaluation from './paralysis/CaseEvaluation';
import ParalysisCompensationCalculator from './paralysis/CompensationCalculator';
import ParalysisLegalGuidance from './paralysis/LegalGuidance';
import ParalysisMedicalGuidance from './paralysis/MedicalGuidance';

const PracticeAreaRouter = () => {
  return (
    <Routes>
      <Route path="mesothelioma-asbestos" element={<MesotheliomaAsbestos />} />
      <Route path="medical-devices" element={<MedicalDevices />} />
      <Route path="medical-malpractice" element={<MedicalMalpractice />} />
      <Route path="silicosis-injuries" element={<SilicosisInjuries />} />
      <Route path="talc-baby-powder-cancer" element={<TalcBabyPowderCancer />} />
      <Route path="car-accidents" element={<CarAccidentsNew />} />
      <Route path="truck-18-wheeler-accidents" element={<TruckAccidentsNew />} />
      <Route path="motorcycle-accidents" element={<MotorcycleAccidentsNew />} />
      <Route path="pedestrian-accidents" element={<PedestrianAccidents />} />
      <Route path="bicycle-accidents" element={<BicycleAccidents />} />
      
      <Route path="slip-and-fall-accidents" element={<SlipFallAccidents />} />
      <Route path="dog-bites-animal-attacks" element={<DogBitesAnimalAttacks />} />
      <Route path="premises-liability" element={<PremisesLiability />} />
      <Route path="product-liability" element={<ProductLiability />} />
      <Route path="construction-accidents" element={<ConstructionAccidents />} />
      <Route path="brain-injuries" element={<BrainInjuries />} />
      <Route path="burn-injuries" element={<BurnInjuries />} />
      <Route path="wrongful-death" element={<WrongfulDeath />} />
      <Route path="amputation-injuries" element={<AmputationInjuries />} />
      <Route path="amputation" element={<AmputationInjuries />} />
      <Route path="workplace-injuries" element={<WorkplaceInjuries />} />
      <Route path="class-actions" element={<ClassActions />} />
      <Route path="environmental-toxic" element={<EnvironmentalToxic />} />
            <Route path="paralysis" element={<Paralysis />} />
            <Route path="paralysis/case-evaluation" element={<ParalysisCaseEvaluation />} />
            <Route path="paralysis/compensation-calculator" element={<ParalysisCompensationCalculator />} />
            <Route path="paralysis/legal-guidance" element={<ParalysisLegalGuidance />} />
            <Route path="paralysis/medical-guidance" element={<ParalysisMedicalGuidance />} />
            <Route path="*" element={<ComingSoon />} />
    </Routes>
  );
};

export default PracticeAreaRouter;