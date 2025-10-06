import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { blogPosts } from '@/data/blogPosts';

const DogBites = () => {
  const currentCategory = 'Animal Attacks';
  
  return (
    <>
      <SEO 
        title="Dog Bite Laws in California: Owner Liability and Your Rights | Trembach Law"
        description="Understanding California's strict liability dog bite laws, owner responsibilities, and how to protect your rights after a dog attack. Expert legal guidance from Trembach Law Firm."
        keywords="dog bite lawyer, California dog attack, strict liability, animal attack attorney, dog owner liability, bite injury claim"
        canonical="https://www.trembachlawfirm.com/blog/dog-bites"
      />
      
      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/90 to-[#0051D5]/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80"
            alt="Dog bite injury legal representation"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Dog Bite Laws in California: Owner Liability and Your Rights
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                December 31, 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                10 min read
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
              California has some of the strictest dog bite laws in the nation, designed to protect victims and hold owners accountable. Understanding these laws is crucial if you've been injured by a dog attack.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">California's Strict Liability Law</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Under California Civil Code Section 3342, dog owners are strictly liable for injuries caused by their dogs. This means the owner is responsible regardless of whether the dog has shown aggressive tendencies before or whether the owner was negligent. The victim doesn't need to prove the owner knew the dog was dangerous.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">When Strict Liability Applies</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              California's strict liability law applies when:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Public or Lawful Private Property:</strong> The victim was in a public place or lawfully on private property</li>
              <li><strong>No Provocation:</strong> The victim did not provoke the dog</li>
              <li><strong>Direct Bite:</strong> The injury resulted from a dog bite (not just scratches or knockdowns)</li>
              <li><strong>Ownership:</strong> The defendant owned or had control of the dog</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common Dog Bite Injuries</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Dog attacks can cause severe injuries including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li>Puncture wounds and lacerations requiring stitches or surgery</li>
              <li>Nerve damage affecting sensation and movement</li>
              <li>Broken bones from powerful bites</li>
              <li>Facial scarring and disfigurement</li>
              <li>Infections including rabies and tetanus</li>
              <li>Psychological trauma and PTSD, especially in children</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Defenses Dog Owners May Use</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Despite strict liability, owners may argue:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Provocation:</strong> The victim provoked the dog through teasing, hitting, or threatening behavior</li>
              <li><strong>Trespassing:</strong> The victim was not lawfully on the property where the bite occurred</li>
              <li><strong>Assumption of Risk:</strong> In cases involving veterinarians, groomers, or dog trainers who knowingly work with dogs</li>
              <li><strong>No Ownership:</strong> The defendant didn't own or control the dog</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Other Types of Dog-Related Injuries</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Not all dog injuries involve bites. You may have a claim for:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Knockdown Injuries:</strong> When a dog jumps on someone causing them to fall</li>
              <li><strong>Bicycle Accidents:</strong> Dogs chasing cyclists causing crashes</li>
              <li><strong>Scratches and Clawing:</strong> May require proof of negligence rather than strict liability</li>
              <li><strong>Attack on Another Pet:</strong> Veterinary bills and emotional distress from attacks on your animal</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Children and Dog Bites</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Children are particularly vulnerable to dog attacks and often suffer more severe injuries, especially to the face and head. California law provides special protections for child victims, and courts generally do not find that young children provoked a dog, even if they were playing roughly.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Steps to Take After a Dog Bite</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Immediate actions can protect your health and legal rights:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li>Seek immediate medical attention, even for seemingly minor bites</li>
              <li>Report the incident to local animal control or police</li>
              <li>Document the scene with photos of injuries and location</li>
              <li>Get contact information from the dog owner and any witnesses</li>
              <li>Keep records of all medical treatment and expenses</li>
              <li>Avoid discussing fault with the dog owner or their insurance</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Compensation for Dog Bite Victims</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Victims may recover damages for:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li>Medical expenses including emergency care, surgery, and reconstructive procedures</li>
              <li>Lost wages if unable to work during recovery</li>
              <li>Pain and suffering from physical injuries</li>
              <li>Emotional distress and psychological counseling</li>
              <li>Scarring and disfigurement, especially on visible areas</li>
              <li>Future medical care for ongoing treatment</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Homeowner's Insurance Coverage</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Most dog bite claims are covered by the owner's homeowner's or renter's insurance policy. These policies typically cover liability for dog bites up to the policy limits, which often range from $100,000 to $300,000. However, some insurance companies exclude certain breeds or have special requirements for coverage.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Statute of Limitations</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              In California, you have two years from the date of the dog bite to file a personal injury lawsuit. For injuries to minors, the statute of limitations may be tolled (paused) until they turn 18, but it's best to act quickly to preserve evidence and witness testimony.
            </p>

            <div className="bg-[#007AFF]/5 border-l-4 border-[#007AFF] p-8 my-12 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Trembach Law Firm?</h3>
              <p className="text-gray-700 mb-6">
                Dog bite cases require understanding of both strict liability and negligence law. Our attorneys have extensive experience handling animal attack cases and fighting for maximum compensation for our clients' injuries.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-[#007AFF] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0051D5] transition-all shadow-lg hover:shadow-xl"
              >
                Schedule Free Consultation
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