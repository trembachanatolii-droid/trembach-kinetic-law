import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  Stethoscope, 
  Heart, 
  Brain, 
  Bone, 
  Zap, 
  Flame, 
  Wind, 
  Eye,
  ChevronDown, 
  ChevronUp, 
  Phone, 
  FileText, 
  AlertTriangle, 
  CheckCircle,
  Clock,
  Shield,
  HardHat,
  DollarSign,
  MessageCircle,
  Mail,
  Activity,
  Users,
  Clipboard
} from 'lucide-react';
import heroBackground from '@/assets/construction-medical-guidance-hero.jpg';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';

const ConstructionMedicalGuidance: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const medicalTopics = [
    {
      id: 'traumatic-brain-injuries',
      title: 'Traumatic Brain Injuries (TBI)',
      icon: Brain,
      summary: 'Falls from heights and struck-by accidents cause devastating brain injuries affecting cognitive function, memory, and physical abilities.',
      content: `
        <h3>Understanding Construction-Related Brain Injuries</h3>
        
        <p>Traumatic brain injuries from construction accidents are among the most serious and life-altering injuries. Falls from scaffolding, ladders, roofs, and being struck by falling objects or equipment are the primary causes. Even "mild" concussions can have lasting effects that insurance companies often minimize.</p>
        
        <h4>Types of Construction TBI:</h4>
        <ul>
          <li><strong>Closed Head Injuries:</strong> Impact without skull fracture - most common in falls</li>
          <li><strong>Open Head Injuries:</strong> Penetrating wounds from debris or tools</li>
          <li><strong>Coup-Contrecoup:</strong> Brain injury at impact site and opposite side</li>
          <li><strong>Diffuse Axonal Injury:</strong> Widespread brain damage from violent shaking</li>
        </ul>
        
        <h4>Immediate Symptoms to Watch For:</h4>
        <ul>
          <li>Loss of consciousness (any duration)</li>
          <li>Confusion, disorientation, memory problems</li>
          <li>Severe headaches that worsen</li>
          <li>Repeated vomiting or nausea</li>
          <li>Seizures or convulsions</li>
          <li>Unusual agitation or combativeness</li>
          <li>Slurred speech or coordination problems</li>
          <li>Changes in pupil size or response</li>
        </ul>
        
        <h4>Long-term Effects and Complications:</h4>
        <ul>
          <li><strong>Cognitive Deficits:</strong> Problems with memory, attention, processing speed</li>
          <li><strong>Executive Function:</strong> Difficulty with planning, decision-making, judgment</li>
          <li><strong>Personality Changes:</strong> Irritability, depression, anxiety, mood swings</li>
          <li><strong>Physical Symptoms:</strong> Chronic headaches, dizziness, fatigue</li>
          <li><strong>Sensory Problems:</strong> Vision, hearing, taste, or smell changes</li>
          <li><strong>Sleep Disorders:</strong> Insomnia, excessive sleepiness, altered sleep patterns</li>
        </ul>
        
        <h4>Medical Documentation Critical for Legal Claims:</h4>
        <ul>
          <li>Initial CT scans and MRIs showing injury extent</li>
          <li>Neuropsychological testing documenting cognitive deficits</li>
          <li>Glasgow Coma Scale scores from accident scene</li>
          <li>Post-traumatic amnesia duration</li>
          <li>Functional capacity evaluations</li>
          <li>Neurologist and neuropsychologist reports</li>
          <li>Occupational therapy assessments</li>
          <li>Family member statements about personality changes</li>
        </ul>
        
        <h4>Treatment and Rehabilitation:</h4>
        <p>TBI treatment typically involves acute medical care, rehabilitation services, and long-term support. Costs can reach millions for severe cases requiring lifetime care. Physical therapy, occupational therapy, speech therapy, and cognitive rehabilitation are often necessary. Many patients require ongoing psychiatric care for depression and anxiety.</p>
        
        <h4>Legal Considerations:</h4>
        <p>Construction TBI cases often involve multiple liable parties: general contractors failing to provide fall protection, equipment manufacturers with defective safety gear, and property owners maintaining dangerous conditions. OSHA violations frequently contribute to these accidents. Our experience reveals how insurance companies minimize brain injuries - we counter with comprehensive medical evidence and expert testimony.</p>
      `
    },
    {
      id: 'spinal-cord-injuries',
      title: 'Spinal Cord Injuries and Paralysis',
      icon: Activity,
      summary: 'Paralysis from construction accidents demands millions in lifetime care including 24/7 attendant care and extensive medical equipment.',
      content: `
        <h3>Construction Spinal Cord Injuries</h3>
        
        <p>Spinal cord injuries from construction accidents are catastrophic, often resulting in permanent paralysis. Falls from heights, being struck by heavy objects, and trench collapses are common causes. These injuries require immediate emergency treatment and lifelong medical care.</p>
        
        <h4>Types of Spinal Cord Injuries:</h4>
        <ul>
          <li><strong>Complete Injuries:</strong> Total loss of sensation and movement below injury level</li>
          <li><strong>Incomplete Injuries:</strong> Some sensation or movement remains below injury</li>
          <li><strong>Tetraplegia (Quadriplegia):</strong> Paralysis of arms, hands, trunk, legs</li>
          <li><strong>Paraplegia:</strong> Paralysis of trunk, legs, and pelvic organs</li>
        </ul>
        
        <h4>Levels of Injury and Function:</h4>
        <ul>
          <li><strong>C1-C3 (High Cervical):</strong> Requires ventilator, minimal voluntary function</li>
          <li><strong>C4-C5:</strong> Some shoulder/bicep function, needs full-time care</li>
          <li><strong>C6-C7:</strong> Wrist extension, may drive modified vehicle</li>
          <li><strong>C8-T1:</strong> Hand function, more independence possible</li>
          <li><strong>T2-T12 (Thoracic):</strong> Normal arm function, wheelchair for mobility</li>
          <li><strong>L1-S5 (Lumbar/Sacral):</strong> May walk with braces/assistive devices</li>
        </ul>
        
        <h4>Emergency Treatment Protocol:</h4>
        <ul>
          <li>Immediate spinal immobilization at accident scene</li>
          <li>High-dose corticosteroids if administered within 8 hours</li>
          <li>Surgical decompression and stabilization</li>
          <li>Prevention of secondary injury complications</li>
        </ul>
        
        <h4>Lifetime Care Requirements:</h4>
        <ul>
          <li><strong>Personal Care:</strong> 24/7 attendant care for high-level injuries</li>
          <li><strong>Medical Equipment:</strong> Wheelchairs, bed systems, ventilators</li>
          <li><strong>Home Modifications:</strong> Wheelchair accessibility, lifts, ramps</li>
          <li><strong>Transportation:</strong> Modified vehicles with hand controls</li>
          <li><strong>Medical Supplies:</strong> Catheters, medications, wound care</li>
          <li><strong>Therapy Services:</strong> Physical, occupational, psychological</li>
        </ul>
        
        <h4>Secondary Health Complications:</h4>
        <ul>
          <li>Pressure sores requiring wound care and surgery</li>
          <li>Respiratory infections and pneumonia</li>
          <li>Urinary tract infections and kidney problems</li>
          <li>Blood clots and circulation issues</li>
          <li>Autonomic dysreflexia (life-threatening condition)</li>
          <li>Depression and psychological adjustment disorders</li>
          <li>Spasticity and pain management needs</li>
        </ul>
        
        <h4>Life Care Planning and Costs:</h4>
        <p>Lifetime costs for spinal cord injuries range from $1-5 million depending on injury level and age at injury. Young quadriplegics face the highest lifetime costs. Life care planners calculate specific needs including medical care, attendant services, equipment replacement, home modifications, and transportation needs.</p>
        
        <h4>Legal Recovery Considerations:</h4>
        <p>Spinal cord injury cases require pursuing maximum compensation from all liable parties. Construction sites often involve multiple defendants with substantial insurance coverage. We work with leading spinal cord specialists and life care planners to document lifetime needs. These cases often warrant the highest settlements given the catastrophic nature and lifetime costs involved.</p>
      `
    },
    {
      id: 'crush-injuries-amputations',
      title: 'Crush Injuries and Traumatic Amputations',
      icon: Bone,
      summary: 'Caught-in/between accidents cause traumatic amputations and severe crush injuries requiring extensive reconstruction and prosthetics.',
      content: `
        <h3>Construction Crush Injuries and Amputations</h3>
        
        <p>Crush injuries and traumatic amputations from construction accidents are devastating and often result from caught-in/between accidents involving heavy machinery, equipment, or structural collapses. These injuries require immediate emergency treatment and often multiple surgeries.</p>
        
        <h4>Common Causes in Construction:</h4>
        <ul>
          <li>Caught between heavy equipment and structures</li>
          <li>Machinery entanglement (conveyor belts, mixers, saws)</li>
          <li>Trench or building collapses</li>
          <li>Falling objects crushing limbs</li>
          <li>Vehicle accidents on construction sites</li>
          <li>Hydraulic equipment failures</li>
        </ul>
        
        <h4>Types of Crush Injuries:</h4>
        <ul>
          <li><strong>Simple Crush:</strong> Soft tissue damage without fractures</li>
          <li><strong>Complex Crush:</strong> Multiple tissue types damaged</li>
          <li><strong>Crush Syndrome:</strong> Systemic complications from muscle breakdown</li>
          <li><strong>Compartment Syndrome:</strong> Swelling cutting off blood supply</li>
          <li><strong>Traumatic Amputation:</strong> Complete or partial limb loss</li>
        </ul>
        
        <h4>Immediate Medical Treatment:</h4>
        <ul>
          <li>Emergency room trauma evaluation</li>
          <li>Surgical debridement of damaged tissue</li>
          <li>Vascular repair to restore blood flow</li>
          <li>Bone stabilization with pins, plates, or rods</li>
          <li>Infection prevention with antibiotics</li>
          <li>Pain management protocols</li>
        </ul>
        
        <h4>Amputation Levels and Functional Impact:</h4>
        <ul>
          <li><strong>Finger/Partial Hand:</strong> Affects grip strength and dexterity</li>
          <li><strong>Below-Elbow:</strong> Maintains elbow function, good prosthetic outcomes</li>
          <li><strong>Above-Elbow:</strong> More complex prosthetics required</li>
          <li><strong>Below-Knee:</strong> Walking with prosthetics typically possible</li>
          <li><strong>Above-Knee:</strong> Greater energy expenditure, balance challenges</li>
          <li><strong>Multiple Limb:</strong> Requires extensive rehabilitation and adaptation</li>
        </ul>
        
        <h4>Prosthetic Considerations and Costs:</h4>
        <ul>
          <li><strong>Initial Prosthetic:</strong> $20,000-$100,000+ depending on technology</li>
          <li><strong>Replacement Schedule:</strong> Every 3-5 years for active users</li>
          <li><strong>Multiple Prosthetics:</strong> Work, recreational, backup devices needed</li>
          <li><strong>Advanced Technology:</strong> Myoelectric, computerized components</li>
          <li><strong>Maintenance:</strong> Regular adjustments and repairs required</li>
        </ul>
        
        <h4>Complications and Long-term Issues:</h4>
        <ul>
          <li>Phantom limb pain requiring pain management</li>
          <li>Residual limb problems (skin breakdown, bone spurs)</li>
          <li>Joint problems from altered biomechanics</li>
          <li>Increased risk of falls and secondary injuries</li>
          <li>Psychological adjustment and depression</li>
          <li>Vocational challenges and career limitations</li>
        </ul>
        
        <h4>Rehabilitation Process:</h4>
        <ul>
          <li>Physical therapy for strength and mobility</li>
          <li>Occupational therapy for daily living skills</li>
          <li>Prosthetic training and gait analysis</li>
          <li>Psychological counseling for adjustment</li>
          <li>Vocational rehabilitation for work adaptation</li>
          <li>Driver training for vehicle modifications</li>
        </ul>
        
        <h4>Legal Documentation Needs:</h4>
        <ul>
          <li>Emergency room records showing injury severity</li>
          <li>Surgical reports and photos of injuries</li>
          <li>Prosthetist evaluations and recommendations</li>
          <li>Functional capacity evaluations</li>
          <li>Vocational expert opinions on work limitations</li>
          <li>Life care plans for lifetime prosthetic needs</li>
          <li>Psychological evaluations documenting adjustment</li>
        </ul>
        
        <h4>Compensation Considerations:</h4>
        <p>Amputation cases require comprehensive damage calculations including medical expenses, prosthetic costs, lost earning capacity, pain and suffering, and diminished quality of life. Construction amputations often involve equipment defects, safety violations, and multiple liable parties, increasing recovery potential.</p>
      `
    },
    {
      id: 'burn-injuries',
      title: 'Burn Injuries and Chemical Exposures',
      icon: Flame,
      summary: 'Electrical burns, chemical exposures, and fires cause excruciating injuries requiring multiple surgeries and extensive rehabilitation.',
      content: `
        <h3>Construction Burn Injuries</h3>
        
        <p>Burn injuries from construction accidents are particularly devastating, often involving electrical contact, chemical exposures, fires, and explosions. These injuries require specialized treatment and often result in permanent scarring and disability.</p>
        
        <h4>Types of Construction Burns:</h4>
        <ul>
          <li><strong>Electrical Burns:</strong> Contact with power lines, faulty wiring, equipment</li>
          <li><strong>Chemical Burns:</strong> Acid, alkali, or toxic chemical contact</li>
          <li><strong>Thermal Burns:</strong> Fire, hot surfaces, steam, welding</li>
          <li><strong>Flash Burns:</strong> Explosions, arc flash from electrical equipment</li>
          <li><strong>Contact Burns:</strong> Hot pipes, equipment, asphalt</li>
        </ul>
        
        <h4>Burn Depth Classification:</h4>
        <ul>
          <li><strong>First-Degree:</strong> Superficial, red skin, painful but heals without scarring</li>
          <li><strong>Second-Degree Superficial:</strong> Blisters, very painful, minimal scarring</li>
          <li><strong>Second-Degree Deep:</strong> White or red, less pain, may require grafting</li>
          <li><strong>Third-Degree:</strong> Full thickness, leathery appearance, requires grafting</li>
          <li><strong>Fourth-Degree:</strong> Into muscle/bone, may require amputation</li>
        </ul>
        
        <h4>Electrical Burn Specifics:</h4>
        <ul>
          <li>Entry and exit wounds may appear minor but cause massive internal damage</li>
          <li>Cardiac monitoring required due to rhythm disturbances</li>
          <li>Neurological damage including peripheral nerve injury</li>
          <li>Kidney damage from muscle breakdown proteins</li>
          <li>Compartment syndrome from tissue swelling</li>
          <li>Long-term neurological and psychological effects</li>
        </ul>
        
        <h4>Chemical Burn Treatment:</h4>
        <ul>
          <li>Immediate copious water irrigation (except certain chemicals)</li>
          <li>Remove contaminated clothing and jewelry</li>
          <li>Identify specific chemical for appropriate treatment</li>
          <li>Systemic effects monitoring (respiratory, cardiac)</li>
          <li>Specialized burn center treatment for severe exposures</li>
        </ul>
        
        <h4>Emergency Treatment Protocol:</h4>
        <ul>
          <li>Remove from source and ensure scene safety</li>
          <li>Assess airway for inhalation injury</li>
          <li>Large bore IV access for fluid resuscitation</li>
          <li>Pain management with appropriate medications</li>
          <li>Tetanus prophylaxis</li>
          <li>Transfer to burn center if meeting criteria</li>
        </ul>
        
        <h4>Burn Center Criteria:</h4>
        <ul>
          <li>Second-degree burns >10% body surface area</li>
          <li>Third-degree burns >5% body surface area</li>
          <li>Burns to face, hands, feet, genitals, joints</li>
          <li>Electrical or chemical burns</li>
          <li>Inhalation injury</li>
          <li>Burns with other trauma</li>
        </ul>
        
        <h4>Surgical Treatment:</h4>
        <ul>
          <li><strong>Debridement:</strong> Removal of dead tissue</li>
          <li><strong>Escharotomy:</strong> Incisions to relieve pressure</li>
          <li><strong>Skin Grafting:</strong> Split-thickness or full-thickness grafts</li>
          <li><strong>Flap Reconstruction:</strong> For complex wounds</li>
          <li><strong>Scar Revision:</strong> Multiple procedures over years</li>
        </ul>
        
        <h4>Long-term Complications:</h4>
        <ul>
          <li>Hypertrophic scarring and keloid formation</li>
          <li>Contractures limiting joint mobility</li>
          <li>Chronic pain and itching</li>
          <li>Infection and wound breakdown</li>
          <li>Heat intolerance and thermoregulation problems</li>
          <li>Psychological trauma and depression</li>
          <li>Social stigma from visible scarring</li>
        </ul>
        
        <h4>Rehabilitation Requirements:</h4>
        <ul>
          <li>Physical therapy for range of motion and strength</li>
          <li>Occupational therapy for daily living skills</li>
          <li>Pressure garments and splinting</li>
          <li>Psychological counseling for trauma and adjustment</li>
          <li>Vocational rehabilitation for work reentry</li>
          <li>Pain management programs</li>
        </ul>
        
        <h4>Compensation Factors:</h4>
        <ul>
          <li>Extensive medical costs including multiple surgeries</li>
          <li>Lost wages during lengthy recovery periods</li>
          <li>Reduced earning capacity from disabilities</li>
          <li>Pain and suffering from excruciating injuries</li>
          <li>Disfigurement and scarring impacts</li>
          <li>Psychological trauma and counseling needs</li>
          <li>Life care costs for ongoing treatment</li>
        </ul>
        
        <h4>Legal Considerations:</h4>
        <p>Construction burn cases often involve safety violations, defective equipment, and inadequate training. Multiple parties may be liable including contractors, equipment manufacturers, and chemical suppliers. OSHA standards for electrical safety, hazard communication, and fire prevention frequently apply. Expert testimony from burn specialists, plastic surgeons, and life care planners is essential for maximum recovery.</p>
      `
    },
    {
      id: 'respiratory-injuries',
      title: 'Respiratory Injuries and Toxic Exposures',
      icon: Wind,
      summary: 'Silica dust, asbestos, and chemical exposures cause serious lung diseases requiring lifetime monitoring and treatment.',
      content: `
        <h3>Construction Respiratory Injuries</h3>
        
        <p>Respiratory injuries from construction work include both acute exposures causing immediate symptoms and chronic diseases developing from repeated exposure to hazardous substances. California leads the nation in occupational lung disease cases, particularly silicosis.</p>
        
        <h4>Common Construction Respiratory Hazards:</h4>
        <ul>
          <li><strong>Silica Dust:</strong> From cutting, grinding concrete, stone, engineered stone</li>
          <li><strong>Asbestos:</strong> Renovation of older buildings, insulation work</li>
          <li><strong>Chemical Vapors:</strong> Solvents, adhesives, coatings, welding fumes</li>
          <li><strong>Particulates:</strong> Wood dust, metal particles, cement dust</li>
          <li><strong>Mold and Fungi:</strong> Demolition of water-damaged buildings</li>
        </ul>
        
        <h4>Silicosis - The Hidden Killer:</h4>
        <ul>
          <li><strong>Acute Silicosis:</strong> High exposure, symptoms within weeks to months</li>
          <li><strong>Accelerated Silicosis:</strong> 5-10 years exposure, progressive scarring</li>
          <li><strong>Chronic Silicosis:</strong> 15+ years exposure, slowly progressive</li>
          <li><strong>Engineered Stone:</strong> Very high silica content, causing rapid disease</li>
        </ul>
        
        <h4>Silicosis Symptoms and Progression:</h4>
        <ul>
          <li>Shortness of breath, initially with exertion</li>
          <li>Persistent dry cough</li>
          <li>Chest pain and tightness</li>
          <li>Fatigue and weakness</li>
          <li>Weight loss and loss of appetite</li>
          <li>Progressive respiratory failure</li>
          <li>Increased risk of lung cancer and tuberculosis</li>
        </ul>
        
        <h4>Asbestos-Related Diseases:</h4>
        <ul>
          <li><strong>Asbestosis:</strong> Lung scarring from asbestos fibers</li>
          <li><strong>Mesothelioma:</strong> Cancer of lung/abdomen lining</li>
          <li><strong>Lung Cancer:</strong> Especially with smoking history</li>
          <li><strong>Pleural Plaques:</strong> Scarring of lung lining</li>
          <li><strong>Pleural Effusion:</strong> Fluid around lungs</li>
        </ul>
        
        <h4>Chemical Exposure Effects:</h4>
        <ul>
          <li>Chemical pneumonitis from inhaling irritants</li>
          <li>Occupational asthma from sensitizing chemicals</li>
          <li>Hypersensitivity pneumonitis (allergic reaction)</li>
          <li>Reactive airways dysfunction syndrome</li>
          <li>Chronic obstructive pulmonary disease (COPD)</li>
        </ul>
        
        <h4>Diagnostic Testing:</h4>
        <ul>
          <li><strong>Chest X-rays:</strong> Show lung scarring patterns</li>
          <li><strong>High-Resolution CT:</strong> Detailed lung imaging</li>
          <li><strong>Pulmonary Function Tests:</strong> Measure breathing capacity</li>
          <li><strong>Bronchoscopy:</strong> Direct lung examination</li>
          <li><strong>Lung Biopsy:</strong> Tissue analysis for diagnosis</li>
          <li><strong>Biomarkers:</strong> Blood tests for exposure</li>
        </ul>
        
        <h4>Treatment and Management:</h4>
        <ul>
          <li>Remove from exposure source immediately</li>
          <li>Bronchodilators for breathing improvement</li>
          <li>Anti-inflammatory medications</li>
          <li>Oxygen therapy for severe cases</li>
          <li>Lung transplant for end-stage disease</li>
          <li>Supportive care and symptom management</li>
          <li>Regular monitoring for progression</li>
        </ul>
        
        <h4>OSHA Standards and Violations:</h4>
        <ul>
          <li>Permissible exposure limits for hazardous substances</li>
          <li>Required respiratory protection programs</li>
          <li>Medical surveillance for exposed workers</li>
          <li>Engineering controls to reduce exposure</li>
          <li>Hazard communication and worker training</li>
          <li>Personal protective equipment requirements</li>
        </ul>
        
        <h4>Legal Documentation:</h4>
        <ul>
          <li>Occupational history documenting exposures</li>
          <li>Medical records showing disease progression</li>
          <li>Pulmonary function test results</li>
          <li>Chest imaging studies (X-rays, CT scans)</li>
          <li>Pathology reports from biopsies</li>
          <li>Industrial hygiene exposure assessments</li>
          <li>OSHA inspection reports and citations</li>
        </ul>
        
        <h4>Compensation Considerations:</h4>
        <ul>
          <li>Progressive nature requires lifetime medical monitoring</li>
          <li>Lost earning capacity from breathing limitations</li>
          <li>Extensive medical costs including potential transplant</li>
          <li>Pain and suffering from chronic illness</li>
          <li>Shortened life expectancy</li>
          <li>Family impact and loss of consortium</li>
        </ul>
        
        <h4>Multiple Defendant Strategy:</h4>
        <p>Respiratory disease cases often involve multiple defendants: employers who failed to provide protection, general contractors responsible for site safety, manufacturers of products containing hazardous materials, and suppliers who failed to warn of dangers. California's multi-employer worksite doctrine allows pursuing all parties whose violations contributed to exposure.</p>
        
        <h4>Latency Period Challenges:</h4>
        <p>Many respiratory diseases have long latency periods between exposure and symptoms. California's discovery rule allows claims when the disease is diagnosed and linked to occupational exposure. Preserving employment records, witness testimony, and expert opinions about exposure sources is crucial for these complex cases.</p>
      `
    },
    {
      id: 'electrocution-injuries',
      title: 'Electrocution and Electrical Injuries',
      icon: Zap,
      summary: 'Electrical injuries cause cardiac arrest, severe burns, neurological damage, and long-term health complications.',
      content: `
        <h3>Construction Electrocution Injuries</h3>
        
        <p>Electrical injuries in construction are particularly dangerous, often causing internal damage not immediately visible. Contact with power lines, faulty wiring, and defective equipment causes hundreds of construction electrocutions annually in California.</p>
        
        <h4>Types of Electrical Contact:</h4>
        <ul>
          <li><strong>Direct Contact:</strong> Touching energized equipment or wiring</li>
          <li><strong>Arc Flash:</strong> Electrical explosion causing severe burns</li>
          <li><strong>Ground Fault:</strong> Current through body to ground</li>
          <li><strong>Step Potential:</strong> Walking through electrical field</li>
          <li><strong>Touch Potential:</strong> Touching energized object</li>
          <li><strong>Lightning Strike:</strong> During outdoor construction</li>
        </ul>
        
        <h4>Immediate Effects of Electrocution:</h4>
        <ul>
          <li>Cardiac arrest requiring immediate CPR</li>
          <li>Respiratory arrest from nerve damage</li>
          <li>Loss of consciousness</li>
          <li>Muscle contractions preventing release</li>
          <li>Entry and exit burn wounds</li>
          <li>Internal organ damage</li>
          <li>Spinal cord injury from falls</li>
        </ul>
        
        <h4>Electrical Burn Characteristics:</h4>
        <ul>
          <li>Entry wounds often small but exit wounds larger</li>
          <li>Internal tissue damage extensive ("cooked from inside")</li>
          <li>Muscle, nerve, and blood vessel damage</li>
          <li>Bone heating causing fractures</li>
          <li>Progressive tissue death requiring amputation</li>
          <li>Deep burns requiring multiple surgeries</li>
        </ul>
        
        <h4>Cardiac Effects:</h4>
        <ul>
          <li>Ventricular fibrillation (fatal rhythm)</li>
          <li>Cardiac arrest requiring defibrillation</li>
          <li>Arrhythmias (irregular heartbeats)</li>
          <li>Myocardial damage (heart muscle injury)</li>
          <li>Long-term cardiac monitoring required</li>
          <li>Delayed cardiac complications</li>
        </ul>
        
        <h4>Neurological Complications:</h4>
        <ul>
          <li>Loss of consciousness and seizures</li>
          <li>Peripheral nerve damage causing weakness</li>
          <li>Spinal cord injury from electrical current</li>
          <li>Memory problems and cognitive impairment</li>
          <li>Chronic pain syndromes</li>
          <li>Psychological trauma and PTSD</li>
          <li>Sleep disorders and depression</li>
        </ul>
        
        <h4>Emergency Treatment:</h4>
        <ul>
          <li>Ensure power source is disconnected safely</li>
          <li>Check for pulse and breathing, start CPR</li>
          <li>Treat for spinal injury (immobilize)</li>
          <li>Cardiac monitoring for rhythm disturbances</li>
          <li>IV fluids for burn shock</li>
          <li>Pain management</li>
          <li>Transfer to burn center if indicated</li>
        </ul>
        
        <h4>Hospital Treatment:</h4>
        <ul>
          <li>Continuous cardiac monitoring 24-48 hours</li>
          <li>Laboratory tests for muscle breakdown</li>
          <li>Kidney function monitoring</li>
          <li>Neurological assessment</li>
          <li>Burn wound care and debridement</li>
          <li>Surgical repair of damaged tissues</li>
          <li>Hyperbaric oxygen therapy for some cases</li>
        </ul>
        
        <h4>Long-term Complications:</h4>
        <ul>
          <li>Chronic pain and nerve damage</li>
          <li>Cataracts developing months later</li>
          <li>Hearing loss from acoustic trauma</li>
          <li>Personality changes and memory problems</li>
          <li>Depression and anxiety disorders</li>
          <li>Reduced work capacity</li>
          <li>Increased risk of cardiac problems</li>
        </ul>
        
        <h4>OSHA Electrical Safety Standards:</h4>
        <ul>
          <li>Ground-fault circuit interrupters (GFCIs) required</li>
          <li>Lockout/tagout procedures for electrical work</li>
          <li>Minimum approach distances from power lines</li>
          <li>Personal protective equipment requirements</li>
          <li>Training requirements for electrical hazards</li>
          <li>Qualified person requirements for electrical work</li>
        </ul>
        
        <h4>Common Violations Leading to Electrocutions:</h4>
        <ul>
          <li>Missing or defective GFCI protection</li>
          <li>Inadequate lockout/tagout procedures</li>
          <li>Working too close to power lines</li>
          <li>Using damaged electrical equipment</li>
          <li>Inadequate grounding of equipment</li>
          <li>Lack of proper training</li>
          <li>Failure to de-energize circuits</li>
        </ul>
        
        <h4>Medical Documentation for Legal Cases:</h4>
        <ul>
          <li>Emergency room records showing injury severity</li>
          <li>Cardiac monitoring strips and test results</li>
          <li>Burn photos and documentation</li>
          <li>Neurological examination findings</li>
          <li>Neuropsychological testing for cognitive effects</li>
          <li>Expert witness testimony on electrical injuries</li>
          <li>Long-term follow-up documenting complications</li>
        </ul>
        
        <h4>Legal Liability Issues:</h4>
        <ul>
          <li>General contractors responsible for site electrical safety</li>
          <li>Electrical contractors for faulty installations</li>
          <li>Equipment manufacturers for defective products</li>
          <li>Utility companies for inadequate warnings</li>
          <li>Property owners for dangerous conditions</li>
          <li>Multiple defendants often involved</li>
        </ul>
        
        <h4>Compensation Factors:</h4>
        <p>Electrocution cases involve extensive medical treatment, long-term complications, and significant pain and suffering. Many victims cannot return to construction work due to neurological effects and chronic pain. Life care planning addresses ongoing medical needs, psychiatric treatment, and reduced earning capacity. These cases often result in substantial settlements due to the severity of injuries and clear safety violations.</p>
      `
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Construction Accident Medical Guidance | Injury Information & Treatment"
        description="Comprehensive medical guidance for construction accident injuries. Learn about treatment options, recovery processes, and medical documentation for legal claims in California."
      />
      
      <GoBack fallbackPath="/practice-areas/construction-accidents" className="top-20 z-[60]" />

      {/* Hero Section */}
      <section 
        className="relative pt-20 pb-16 bg-gradient-to-r from-primary/95 to-primary/85 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Stethoscope className="w-4 h-4 mr-2" />
                Medical Expert Guidance
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Heart className="w-4 h-4 mr-2" />
                Comprehensive Care
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <CheckCircle className="w-4 h-4 mr-2" />
                Legal Documentation
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Construction Accident <span className="text-accent">Medical Guidance</span>
            </h1>
            
            <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Comprehensive medical information for construction accident injuries. Understanding your injuries, treatment options, and recovery process is crucial for both your health and legal claim.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5" />
                <span>Brain Injury Guide</span>
              </div>
              <div className="flex items-center gap-2">
                <Bone className="w-5 h-5" />
                <span>Fracture Treatment</span>
              </div>
              <div className="flex items-center gap-2">
                <Wind className="w-5 h-5" />
                <span>Respiratory Health</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3 space-y-6">
              {medicalTopics.map((topic) => (
                <Card key={topic.id} className="overflow-hidden">
                  <Collapsible>
                    <CollapsibleTrigger 
                      onClick={() => toggleSection(topic.id)}
                      className="w-full"
                    >
                      <CardHeader className="hover:bg-gray-50 transition-colors cursor-pointer">
                        <CardTitle className="flex items-center justify-between text-left">
                          <div className="flex items-center gap-3">
                            <div className="bg-primary/10 p-2 rounded-lg">
                              <topic.icon className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold">{topic.title}</h3>
                              <p className="text-sm text-muted-foreground font-normal mt-1">
                                {topic.summary}
                              </p>
                            </div>
                          </div>
                          {expandedSections[topic.id] ? (
                            <ChevronUp className="w-5 h-5 text-primary" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-primary" />
                          )}
                        </CardTitle>
                      </CardHeader>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="pt-0">
                        <div 
                          className="prose prose-lg max-w-none text-muted-foreground"
                          dangerouslySetInnerHTML={{ __html: topic.content }}
                        />
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              ))}
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-6">
              <Card className="bg-red-50 border-red-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-800">
                    <Phone className="w-5 h-5" />
                    Emergency Medical Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-red-700">
                    If you're experiencing a medical emergency:
                  </p>
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700"
                    onClick={() => window.location.href = 'tel:911'}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call 911 Now
                  </Button>
                  <p className="text-sm text-red-600">
                    For construction accident legal emergencies:
                  </p>
                  <Button 
                    variant="outline"
                    className="w-full border-red-300 text-red-700 hover:bg-red-50"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call (818) 123-4567
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-primary text-white">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    className="w-full bg-white text-primary hover:bg-gray-100"
                    onClick={() => window.location.href = '/construction-case-evaluation'}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Start Case Evaluation
                  </Button>
                  <Button 
                    className="w-full bg-green-600 text-white hover:bg-green-700"
                    onClick={() => window.location.href = '/construction-compensation-calculator'}
                  >
                    <DollarSign className="w-4 h-4 mr-2" />
                    Calculate Compensation
                  </Button>
                  <Button 
                    className="w-full bg-blue-600 text-white hover:bg-blue-700"
                    onClick={() => {
                      document.getElementById('medical-guidance')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    24/7 Live Chat
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clipboard className="w-5 h-5" />
                    Medical Documentation Checklist
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Emergency room records and reports</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>X-rays, CT scans, and MRI results</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Surgery reports and operative notes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Physical therapy progress notes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Specialist consultation reports</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Pain medication prescriptions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Work restrictions and disability forms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Insurance authorizations and denials</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Why Medical Documentation Matters
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>• <strong>Proves Injury Severity:</strong> Detailed records show the full extent of your injuries</p>
                  <p>• <strong>Links to Accident:</strong> Medical records connect your injuries to the construction accident</p>
                  <p>• <strong>Treatment Costs:</strong> Documents all medical expenses for compensation</p>
                  <p>• <strong>Future Needs:</strong> Helps calculate ongoing medical care requirements</p>
                  <p>• <strong>Work Limitations:</strong> Shows how injuries affect your ability to work</p>
                  <p>• <strong>Pain and Suffering:</strong> Medical evidence supports non-economic damages</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-orange-600" />
                    Safety Resources
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>• <strong>Cal/OSHA:</strong> California workplace safety regulations</p>
                  <p>• <strong>NIOSH:</strong> Construction safety guidelines</p>
                  <p>• <strong>Workers' Rights:</strong> Know your right to a safe workplace</p>
                  <p>• <strong>Reporting:</strong> How to report unsafe conditions</p>
                  <p>• <strong>Training:</strong> Required safety training programs</p>
                  <p>• <strong>PPE:</strong> Personal protective equipment requirements</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-red-600" />
                    Time-Sensitive Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-red-700">
                  <p>• <strong>Immediate:</strong> Seek medical attention</p>
                  <p>• <strong>24-48 Hours:</strong> Document accident details</p>
                  <p>• <strong>7 Days:</strong> Report to workers' compensation</p>
                  <p>• <strong>30 Days:</strong> Formal accident report required</p>
                  <p>• <strong>6 Months:</strong> Government claim deadline</p>
                  <p>• <strong>2 Years:</strong> Personal injury lawsuit deadline</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionMedicalGuidance;