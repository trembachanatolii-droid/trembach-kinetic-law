import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { blogPosts } from '@/data/blogPosts';

const DogBites = () => {
  const currentCategory = 'Premises Liability';
  
  return (
    <>
      <SEO 
        title="California Dog Bite Laws: Owner Liability and Your Rights | Trembach Law"
        description="Understand California's strict liability dog bite laws, what compensation is available, and how to protect your rights after a dog attack."
        keywords="dog bite, dog attack, California dog bite law, strict liability, dog owner liability, animal attack, dog bite injury, dog bite attorney"
        canonical="https://www.trembachlawfirm.com/blog/dog-bites"
      />
      
      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/90 to-[#0051D5]/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80"
            alt="Dog bite injury and legal protection"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              California Dog Bite Laws: Owner Liability and Your Rights
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                October 29, 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                11 min read
              </span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-[#007AFF] hover:text-[#0051D5] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Dog bites can cause serious physical injuries, emotional trauma, and financial hardship. California's strict liability laws protect victims by holding dog owners accountable regardless of the animal's history.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">California's Strict Liability Law</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Civil Code Section 3342</h3>
            <p className="text-gray-700 mb-6">
              California Civil Code Section 3342 imposes strict liability on dog owners for bite injuries. This means:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>No "one bite" rule:</strong> Owner is liable even if dog has never bitten before</li>
              <li><strong>No proof of negligence required:</strong> Victim doesn't need to prove owner was careless</li>
              <li><strong>Owner knowledge irrelevant:</strong> Liability exists even if owner had no reason to know dog was dangerous</li>
              <li><strong>Applies in public and private spaces:</strong> Covers bites occurring anywhere victim is lawfully present</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">When You're Lawfully Present</h3>
            <p className="text-gray-700 mb-6">
              Strict liability applies when the victim was:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>In a public place (sidewalk, park, etc.)</li>
              <li>Lawfully on private property (invited guest, mail carrier, utility worker)</li>
              <li>Performing official duties (police officer, firefighter)</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common Dog Bite Injuries</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Physical Injuries</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Puncture wounds:</strong> Deep wounds from dog's teeth requiring stitches or surgery</li>
              <li><strong>Lacerations:</strong> Tearing injuries that may damage muscles, nerves, and tendons</li>
              <li><strong>Infections:</strong> Bacteria from dog's mouth can cause serious infections including sepsis</li>
              <li><strong>Nerve damage:</strong> Permanent loss of sensation or mobility</li>
              <li><strong>Broken bones:</strong> Fractures from large dog attacks</li>
              <li><strong>Facial injuries:</strong> Especially common in children, often requiring reconstructive surgery</li>
              <li><strong>Scarring and disfigurement:</strong> Permanent cosmetic damage</li>
              <li><strong>Eye injuries:</strong> Can result in vision loss or blindness</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Disease Risks</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Rabies:</strong> Fatal if not treated immediately after exposure</li>
              <li><strong>Tetanus:</strong> Bacterial infection affecting nervous system</li>
              <li><strong>Sepsis:</strong> Life-threatening response to infection</li>
              <li><strong>MRSA:</strong> Antibiotic-resistant bacterial infection</li>
              <li><strong>Pasteurella:</strong> Common bacterial infection from dog bites</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Psychological Trauma</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Post-traumatic stress disorder (PTSD):</strong> Flashbacks, nightmares, anxiety</li>
              <li><strong>Cynophobia:</strong> Extreme fear of dogs</li>
              <li><strong>Anxiety and depression:</strong> Lasting emotional impacts</li>
              <li><strong>Sleep disturbances:</strong> Difficulty sleeping due to trauma</li>
              <li><strong>Social withdrawal:</strong> Avoiding activities due to fear</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Children and Dog Bites</h2>
            <p className="text-gray-700 mb-6">
              Children are disproportionately affected by dog bites:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Children under 10 suffer nearly half of all dog bite injuries</li>
              <li>Children are more likely to suffer facial and head injuries</li>
              <li>Injuries can cause lasting psychological trauma</li>
              <li>Scarring may require multiple surgeries as child grows</li>
              <li>Social and emotional development may be affected</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Immediate Steps After a Dog Bite</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Medical Care</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Seek immediate medical attention:</strong> Even minor bites can become infected</li>
              <li><strong>Clean the wound:</strong> Rinse with soap and water</li>
              <li><strong>Apply pressure:</strong> Control bleeding with clean cloth</li>
              <li><strong>Document injuries:</strong> Take photos of wounds</li>
              <li><strong>Get rabies information:</strong> Determine if dog has current vaccination</li>
              <li><strong>Follow up care:</strong> Attend all appointments, complete antibiotics</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Report the Incident</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Call animal control:</strong> Report the bite to local authorities</li>
              <li><strong>File police report:</strong> Creates official record of incident</li>
              <li><strong>Obtain owner information:</strong> Name, address, phone number, insurance</li>
              <li><strong>Get dog information:</strong> Breed, name, vaccination records</li>
              <li><strong>Identify witnesses:</strong> Get contact information for anyone who saw attack</li>
            </ul>

            <div className="bg-[#007AFF]/5 border-l-4 border-[#007AFF] p-8 my-12 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Experienced Dog Bite Representation</h3>
              <p className="text-gray-700 mb-6">
                Dog bite cases require prompt action to preserve evidence and protect your rights. Our firm has successfully represented numerous dog bite victims throughout California, securing compensation for medical expenses, scarring, and emotional trauma.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-[#007AFF] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0051D5] transition-all shadow-lg hover:shadow-xl"
              >
                Free Consultation
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
              <RelatedPosts posts={blogPosts} currentCategory={currentCategory} />
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default DogBites;
