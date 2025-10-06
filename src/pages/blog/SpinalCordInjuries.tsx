import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import SEO from '@/components/SEO';

const SpinalCordInjuries: React.FC = () => {
  return (
    <>
      <SEO
        title="Spinal Cord Injury Claims: Your Complete Legal Guide | Trembach Law"
        description="Comprehensive guide to spinal cord injury cases in California. Learn about paralysis, medical treatment, lifetime care costs, and securing maximum compensation for spinal injuries."
        keywords="spinal cord injury, paralysis, quadriplegia, paraplegia, California injury lawyer, spinal trauma, disability compensation"
        canonical="https://www.trembachlawfirm.com/blog/spinal-cord-injuries"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Spinal Cord Injury Claims: Your Complete Legal Guide
            </h1>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-300">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                December 28, 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                15 min read
              </span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-6 py-16">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Spinal cord injuries are among the most devastating injuries a person can suffer, often resulting 
              in permanent paralysis and requiring lifetime medical care. The financial, physical, and emotional 
              impact on victims and their families is immeasurable. Understanding your legal rights and the full 
              scope of compensation available is critical to securing the resources needed for long-term care and 
              quality of life.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              Understanding Spinal Cord Injuries
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The spinal cord is a bundle of nerves that carries signals between the brain and the rest of the 
              body. When the spinal cord is damaged, those signals can be interrupted, resulting in loss of 
              function below the injury site. The severity and effects depend on the location and completeness 
              of the injury.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              Complete vs. Incomplete Injuries
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A complete spinal cord injury means there is no function below the level of injury—no movement 
              and no sensation. An incomplete injury means some function remains below the injury level. The 
              distinction significantly impacts prognosis, treatment needs, and compensation calculations.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              Levels of Injury
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The location of the injury on the spine determines which body parts are affected:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="text-muted-foreground"><strong>Cervical (C1-C8)</strong> - neck area; can affect arms, hands, and breathing; may result in quadriplegia</li>
              <li className="text-muted-foreground"><strong>Thoracic (T1-T12)</strong> - upper back; typically affects trunk and legs; results in paraplegia</li>
              <li className="text-muted-foreground"><strong>Lumbar (L1-L5)</strong> - lower back; affects legs and hips</li>
              <li className="text-muted-foreground"><strong>Sacral (S1-S5)</strong> - pelvic area; affects hips, legs, and bowel/bladder function</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              Common Causes of Spinal Cord Injuries
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Most spinal cord injuries result from preventable accidents caused by someone else's negligence:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="text-muted-foreground"><strong>Motor vehicle accidents</strong> - car crashes, motorcycle accidents, truck collisions</li>
              <li className="text-muted-foreground"><strong>Falls</strong> - construction falls, slip and falls, falls from heights</li>
              <li className="text-muted-foreground"><strong>Workplace accidents</strong> - industrial accidents, construction incidents</li>
              <li className="text-muted-foreground"><strong>Sports and recreation</strong> - diving accidents, contact sports injuries</li>
              <li className="text-muted-foreground"><strong>Acts of violence</strong> - gunshot wounds, assaults</li>
              <li className="text-muted-foreground"><strong>Medical malpractice</strong> - surgical errors, delayed diagnosis</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              Immediate and Long-Term Effects
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Spinal cord injuries affect virtually every aspect of a person's life, with complications extending 
              far beyond paralysis.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              Physical Effects
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground">Loss of movement (paralysis)</li>
              <li className="text-muted-foreground">Loss of sensation, including touch and temperature</li>
              <li className="text-muted-foreground">Loss of bowel and bladder control</li>
              <li className="text-muted-foreground">Sexual dysfunction and fertility issues</li>
              <li className="text-muted-foreground">Breathing difficulties requiring ventilator support</li>
              <li className="text-muted-foreground">Chronic pain and pressure sores</li>
              <li className="text-muted-foreground">Muscle spasms and spasticity</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              Secondary Complications
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground">Blood clots and deep vein thrombosis</li>
              <li className="text-muted-foreground">Respiratory infections and pneumonia</li>
              <li className="text-muted-foreground">Pressure ulcers (bedsores)</li>
              <li className="text-muted-foreground">Urinary tract infections</li>
              <li className="text-muted-foreground">Circulatory problems and heart disease</li>
              <li className="text-muted-foreground">Osteoporosis and bone loss</li>
              <li className="text-muted-foreground">Autonomic dysreflexia (dangerous blood pressure spikes)</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              Psychological and Emotional Impact
            </h3>
            <ul className="space-y-3 mb-8">
              <li className="text-muted-foreground">Depression and anxiety</li>
              <li className="text-muted-foreground">Post-traumatic stress disorder (PTSD)</li>
              <li className="text-muted-foreground">Loss of independence and identity</li>
              <li className="text-muted-foreground">Relationship and family stress</li>
              <li className="text-muted-foreground">Social isolation</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              Medical Treatment and Rehabilitation
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Spinal cord injuries require immediate emergency treatment followed by extensive, ongoing care 
              that continues for the rest of the patient's life.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              Emergency and Acute Care
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground">Spinal stabilization to prevent further damage</li>
              <li className="text-muted-foreground">Surgery to remove bone fragments, herniated disks, or fractured vertebrae</li>
              <li className="text-muted-foreground">Medications to reduce inflammation and prevent complications</li>
              <li className="text-muted-foreground">Respiratory support and monitoring</li>
              <li className="text-muted-foreground">Intensive care unit treatment</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              Rehabilitation and Ongoing Care
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground"><strong>Physical therapy</strong> - maintain muscle tone, prevent contractures, maximize remaining function</li>
              <li className="text-muted-foreground"><strong>Occupational therapy</strong> - learn adaptive techniques for daily activities</li>
              <li className="text-muted-foreground"><strong>Respiratory therapy</strong> - strengthen breathing muscles, manage ventilator needs</li>
              <li className="text-muted-foreground"><strong>Psychological counseling</strong> - address mental health and adjustment</li>
              <li className="text-muted-foreground"><strong>Pain management</strong> - medications, nerve blocks, alternative therapies</li>
              <li className="text-muted-foreground"><strong>Bowel and bladder management programs</strong></li>
              <li className="text-muted-foreground"><strong>Sexual health counseling</strong></li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              Assistive Devices and Technology
            </h3>
            <ul className="space-y-3 mb-8">
              <li className="text-muted-foreground">Wheelchairs (manual and motorized)</li>
              <li className="text-muted-foreground">Modified vehicles with hand controls</li>
              <li className="text-muted-foreground">Computer access technology and voice recognition</li>
              <li className="text-muted-foreground">Environmental control systems</li>
              <li className="text-muted-foreground">Mobility aids and transfer equipment</li>
              <li className="text-muted-foreground">Pressure-relieving cushions and mattresses</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              Lifetime Cost of Spinal Cord Injuries
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The financial impact of a spinal cord injury is staggering. According to the National Spinal Cord 
              Injury Statistical Center, the average lifetime costs can range from $1.5 million to over $5 million, 
              depending on the severity and level of injury.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              First-Year Expenses
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground">High tetraplegia (C1-C4): $1.1+ million</li>
              <li className="text-muted-foreground">Low tetraplegia (C5-C8): $770,000+</li>
              <li className="text-muted-foreground">Paraplegia: $520,000+</li>
              <li className="text-muted-foreground">Incomplete injury at any level: $350,000+</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              Annual Ongoing Costs
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground">High tetraplegia: $195,000+ per year</li>
              <li className="text-muted-foreground">Low tetraplegia: $115,000+ per year</li>
              <li className="text-muted-foreground">Paraplegia: $70,000+ per year</li>
              <li className="text-muted-foreground">Incomplete injury: $45,000+ per year</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              Additional Lifetime Expenses
            </h3>
            <ul className="space-y-3 mb-8">
              <li className="text-muted-foreground">Home modifications (wheelchair ramps, widened doorways, accessible bathrooms)</li>
              <li className="text-muted-foreground">Vehicle modifications</li>
              <li className="text-muted-foreground">In-home care and personal assistance</li>
              <li className="text-muted-foreground">Medical equipment replacement</li>
              <li className="text-muted-foreground">Lost wages and earning capacity</li>
              <li className="text-muted-foreground">Ongoing medical care and complications</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              Proving Liability in Spinal Cord Injury Cases
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              To recover compensation, you must prove that another party's negligence caused your spinal cord 
              injury. This requires thorough investigation and expert testimony.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              Key Evidence to Gather
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground">Accident scene photographs and videos</li>
              <li className="text-muted-foreground">Police reports and incident reports</li>
              <li className="text-muted-foreground">Witness statements</li>
              <li className="text-muted-foreground">Complete medical records and imaging studies</li>
              <li className="text-muted-foreground">Employment records showing lost income</li>
              <li className="text-muted-foreground">Expert reconstructions of the accident</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              Expert Witnesses Required
            </h3>
            <ul className="space-y-3 mb-8">
              <li className="text-muted-foreground"><strong>Spinal cord injury specialists</strong> - explain the medical aspects</li>
              <li className="text-muted-foreground"><strong>Life care planners</strong> - document lifetime care needs and costs</li>
              <li className="text-muted-foreground"><strong>Vocational experts</strong> - calculate lost earning capacity</li>
              <li className="text-muted-foreground"><strong>Economic experts</strong> - quantify total financial losses</li>
              <li className="text-muted-foreground"><strong>Accident reconstruction specialists</strong> - establish how injury occurred</li>
              <li className="text-muted-foreground"><strong>Rehabilitation specialists</strong> - testify about ongoing needs</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              Types of Compensation Available
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Spinal cord injury cases typically result in some of the highest settlements and verdicts in 
              personal injury law due to the catastrophic nature of these injuries.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              Economic Damages
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground">All past and future medical expenses</li>
              <li className="text-muted-foreground">In-home nursing care and personal assistance</li>
              <li className="text-muted-foreground">Lost wages and lost earning capacity</li>
              <li className="text-muted-foreground">Home and vehicle modifications</li>
              <li className="text-muted-foreground">Medical equipment and assistive devices</li>
              <li className="text-muted-foreground">Ongoing therapy and rehabilitation</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              Non-Economic Damages
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground">Pain and suffering</li>
              <li className="text-muted-foreground">Loss of enjoyment of life</li>
              <li className="text-muted-foreground">Emotional distress and mental anguish</li>
              <li className="text-muted-foreground">Loss of companionship and consortium</li>
              <li className="text-muted-foreground">Permanent disability and disfigurement</li>
              <li className="text-muted-foreground">Loss of independence</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              Punitive Damages
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              In cases involving gross negligence or intentional misconduct, California law allows for punitive 
              damages designed to punish the defendant and deter similar conduct. These damages can significantly 
              increase the total recovery.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              Why You Need a Specialized Spinal Cord Injury Attorney
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Spinal cord injury cases are among the most complex in all of personal injury law. They require 
              attorneys with specific experience in catastrophic injuries who:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="text-muted-foreground">Understand the medical complexities of spinal injuries</li>
              <li className="text-muted-foreground">Have relationships with qualified medical experts</li>
              <li className="text-muted-foreground">Know how to accurately calculate lifetime care costs</li>
              <li className="text-muted-foreground">Can present complex medical testimony to juries</li>
              <li className="text-muted-foreground">Have the resources to take cases to trial if necessary</li>
              <li className="text-muted-foreground">Won't settle for less than full compensation</li>
            </ul>

            <div className="bg-primary/5 border-l-4 border-primary p-6 my-12 rounded-r">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Free Consultation for Spinal Cord Injury Cases
              </h3>
              <p className="text-muted-foreground mb-4">
                If you or a loved one has suffered a spinal cord injury, you need attorneys who understand the 
                devastating impact and know how to fight for maximum compensation. We work with leading medical 
                experts to build the strongest possible case. Our spinal injury lawyers work on contingency—
                you pay nothing unless we win.
              </p>
              <Link 
                to="/contact" 
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Get Your Free Case Evaluation
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              Related Articles
            </h2>
            <div className="grid gap-4 mb-8">
              <Link to="/blog/catastrophic-injuries" className="text-primary hover:text-primary/80 transition-colors">
                → Understanding Catastrophic Injury Claims
              </Link>
              <Link to="/blog/brain-injuries" className="text-primary hover:text-primary/80 transition-colors">
                → Traumatic Brain Injuries: Legal Rights and Compensation
              </Link>
              <Link to="/blog/compensation" className="text-primary hover:text-primary/80 transition-colors">
                → Maximizing Your Personal Injury Compensation
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default SpinalCordInjuries;