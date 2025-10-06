import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import SEO from '@/components/SEO';

const SlipAndFall: React.FC = () => {
  return (
    <>
      <SEO
        title="Slip and Fall Accidents: Your Rights and Legal Options | Trembach Law"
        description="Comprehensive guide to slip and fall accident claims in California. Learn about liability, premises responsibility, common causes, and how to protect your rights after a fall injury."
        keywords="slip and fall, premises liability, fall accidents, California injury law, property owner negligence, accident compensation"
        canonical="https://www.trembachlawfirm.com/blog/slip-and-fall"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Slip and Fall Accidents: Your Rights and Legal Options
            </h1>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-300">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                December 22, 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                12 min read
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
              Slip and fall accidents are among the most common causes of personal injury in California. 
              Whether at a grocery store, restaurant, workplace, or private property, these accidents can 
              result in serious injuries and significant medical expenses. Understanding your rights and 
              the liability of property owners is crucial for protecting your interests.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              What Constitutes a Slip and Fall Case?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A slip and fall case arises when someone is injured due to a dangerous condition on someone 
              else's property. However, not every fall creates legal liability. To have a valid claim, you 
              must prove that:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="text-muted-foreground">The property owner knew or should have known about the dangerous condition</li>
              <li className="text-muted-foreground">The property owner failed to address or warn about the hazard</li>
              <li className="text-muted-foreground">The dangerous condition directly caused your injuries</li>
              <li className="text-muted-foreground">You were lawfully on the property when the accident occurred</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              Common Causes of Slip and Fall Accidents
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Understanding what creates dangerous conditions can help establish liability:
            </p>
            
            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              Wet or Slippery Surfaces
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Spills, recently mopped floors without warning signs, rain-tracked entrances, and leaking 
              fixtures create hazardous walking surfaces. Property owners must promptly clean spills and 
              provide adequate warnings.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              Uneven Walking Surfaces
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Cracked sidewalks, potholes in parking lots, loose floorboards, and torn carpeting create 
              tripping hazards. Regular maintenance and repairs are the property owner's responsibility.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              Poor Lighting Conditions
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Inadequate lighting in stairwells, parking garages, hallways, and entryways prevents visitors 
              from seeing and avoiding hazards. Proper illumination is essential for safety.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              Weather-Related Hazards
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Ice, snow accumulation, wet leaves, and storm debris create seasonal dangers. Property owners 
              must take reasonable steps to address weather-related hazards promptly.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              Types of Properties and Liability
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Liability varies depending on the type of property and your status as a visitor:
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              Commercial Properties
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Businesses owe customers the highest duty of care. This includes retail stores, restaurants, 
              hotels, office buildings, and entertainment venues. They must regularly inspect for hazards, 
              maintain safe conditions, and promptly address any dangers.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              Private Residences
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Homeowners must keep their property reasonably safe for invited guests. This includes 
              maintaining walkways, stairs, and common areas in safe condition.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
              Government Property
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Claims against government entities have special rules and shorter deadlines. You typically 
              have only six months to file a claim against a California government entity.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              Common Injuries from Slip and Fall Accidents
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              These accidents can cause serious injuries requiring extensive treatment:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="text-muted-foreground"><strong>Fractures and broken bones</strong> - especially hips, wrists, and ankles</li>
              <li className="text-muted-foreground"><strong>Head injuries and concussions</strong> - from striking the ground or objects</li>
              <li className="text-muted-foreground"><strong>Spinal cord injuries</strong> - potentially causing paralysis</li>
              <li className="text-muted-foreground"><strong>Soft tissue damage</strong> - sprains, strains, and torn ligaments</li>
              <li className="text-muted-foreground"><strong>Back and neck injuries</strong> - including herniated discs</li>
              <li className="text-muted-foreground"><strong>Shoulder injuries</strong> - rotator cuff tears and dislocations</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              Proving Your Slip and Fall Case
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Success in a slip and fall case requires strong evidence:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="text-muted-foreground"><strong>Photograph the scene</strong> - capture the hazard, lighting conditions, and surrounding area</li>
              <li className="text-muted-foreground"><strong>Document your injuries</strong> - take photos and keep all medical records</li>
              <li className="text-muted-foreground"><strong>Identify witnesses</strong> - get contact information from anyone who saw the accident</li>
              <li className="text-muted-foreground"><strong>Report the incident</strong> - file an official report with the property owner or manager</li>
              <li className="text-muted-foreground"><strong>Preserve evidence</strong> - keep the shoes and clothing you wore during the fall</li>
              <li className="text-muted-foreground"><strong>Track your damages</strong> - maintain records of medical expenses and lost wages</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              Comparative Negligence in California
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              California follows a "pure comparative negligence" rule. This means your compensation can 
              be reduced by your percentage of fault, but you can still recover damages even if you're 
              partially at fault. For example, if you were texting while walking and didn't notice a 
              warning sign, you might be found 30% at fault. Your total damages would be reduced by 30%, 
              but you can still collect the remaining 70%.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              Dealing with Insurance Companies
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Property owners' insurance companies often try to minimize payouts through various tactics:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="text-muted-foreground">Claiming you were at fault for not watching where you were going</li>
              <li className="text-muted-foreground">Arguing the hazard was "open and obvious" so you should have avoided it</li>
              <li className="text-muted-foreground">Suggesting your injuries existed before the fall</li>
              <li className="text-muted-foreground">Offering quick settlements before the full extent of injuries is known</li>
              <li className="text-muted-foreground">Requesting recorded statements to use against you later</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              Time Limits for Filing Claims
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              In California, you generally have two years from the date of your fall to file a lawsuit. 
              However, claims against government entities must be filed within six months. Acting quickly 
              is important because evidence can disappear, witnesses' memories fade, and surveillance 
              footage may be deleted.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              What Compensation Can You Recover?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Successful slip and fall claims can recover various types of damages:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="text-muted-foreground"><strong>Medical expenses</strong> - emergency treatment, surgery, rehabilitation, and future care</li>
              <li className="text-muted-foreground"><strong>Lost wages</strong> - income lost during recovery and reduced earning capacity</li>
              <li className="text-muted-foreground"><strong>Pain and suffering</strong> - physical pain and emotional distress</li>
              <li className="text-muted-foreground"><strong>Loss of enjoyment</strong> - inability to participate in activities you once enjoyed</li>
              <li className="text-muted-foreground"><strong>Property damage</strong> - damaged clothing, phones, or other belongings</li>
            </ul>

            <div className="bg-primary/5 border-l-4 border-primary p-6 my-12 rounded-r">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Free Consultation - No Fees Unless We Win
              </h3>
              <p className="text-muted-foreground mb-4">
                If you've been injured in a slip and fall accident, time is critical. Our experienced 
                premises liability attorneys will investigate your case, preserve evidence, and fight for 
                the compensation you deserve. We work on contingency, so you pay nothing unless we win.
              </p>
              <Link 
                to="/contact" 
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Get Your Free Case Review
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
              Related Articles
            </h2>
            <div className="grid gap-4 mb-8">
              <Link to="/blog/premises-liability" className="text-primary hover:text-primary/80 transition-colors">
                → Understanding Premises Liability Laws in California
              </Link>
              <Link to="/blog/evidence" className="text-primary hover:text-primary/80 transition-colors">
                → How to Preserve Evidence After an Accident
              </Link>
              <Link to="/blog/insurance-claims" className="text-primary hover:text-primary/80 transition-colors">
                → Dealing with Insurance Companies: What You Need to Know
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default SlipAndFall;