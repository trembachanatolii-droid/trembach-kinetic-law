import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { blogPosts } from '@/data/blogPosts';

const MotorcycleAccidents = () => {
  const currentCategory = 'Motor Vehicle Accidents';
  
  return (
    <>
      <SEO 
        title="Motorcycle Accident Claims in California: Protecting Riders' Rights | Trembach Law"
        description="Understanding motorcycle accident laws, common causes, injuries, and your rights as a rider. Expert legal representation for California motorcycle accidents from Trembach Law Firm."
        keywords="motorcycle accident, bike crash, motorcycle injury, rider rights, California motorcycle law, lane splitting, motorcycle accident attorney"
        canonical="https://www.trembachlawfirm.com/blog/motorcycle-accidents"
      />
      
      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/90 to-[#0051D5]/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80"
            alt="Motorcycle accident legal representation"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Motorcycle Accident Claims in California: Protecting Riders' Rights
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                October 24, 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                13 min read
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
              Motorcycle riders face unique dangers on California roads. When accidents occur, riders often suffer catastrophic injuries due to lack of physical protection. Understanding your rights is crucial for obtaining fair compensation.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Why Motorcycle Accidents Are So Dangerous</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Lack of Protection</h3>
            <p className="text-gray-700 mb-6">
              Unlike car occupants protected by airbags, seat belts, and metal frames, motorcyclists have minimal protection:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>No physical barrier:</strong> Direct impact with vehicles or pavement</li>
              <li><strong>High-speed exposure:</strong> Greater risk of ejection from motorcycle</li>
              <li><strong>Road contact:</strong> Sliding across pavement causes severe road rash</li>
              <li><strong>Multiple impact points:</strong> Riders can strike multiple objects</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Visibility Issues</h3>
            <p className="text-gray-700 mb-6">
              Motorcycles are less visible to other drivers due to:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Smaller profile compared to cars and trucks</li>
              <li>Blind spots in other vehicles</li>
              <li>Driver inattention and distraction</li>
              <li>Poor lighting conditions</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common Causes of Motorcycle Accidents</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Left-Turn Collisions</h3>
            <p className="text-gray-700 mb-6">
              The most common type of motorcycle accident occurs when a vehicle makes a left turn in front of an oncoming motorcycle. The driver either:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Failed to see the motorcycle approaching</li>
              <li>Misjudged the motorcycle's speed and distance</li>
              <li>Violated the motorcyclist's right of way</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Lane Changes and Merging</h3>
            <p className="text-gray-700 mb-6">
              Drivers changing lanes without checking blind spots frequently collide with motorcycles:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Failure to signal lane changes</li>
              <li>Not checking blind spots</li>
              <li>Sudden lane changes without warning</li>
              <li>Distracted driving while merging</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Road Hazards</h3>
            <p className="text-gray-700 mb-6">
              Conditions that pose minor issues for cars can be deadly for motorcyclists:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Potholes and uneven pavement:</strong> Can cause loss of control</li>
              <li><strong>Gravel and debris:</strong> Reduces traction and stability</li>
              <li><strong>Oil and fluid spills:</strong> Creates slippery surfaces</li>
              <li><strong>Railroad tracks and metal plates:</strong> Slippery when wet</li>
              <li><strong>Construction zones:</strong> Uneven surfaces and unexpected hazards</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">California Lane Splitting Laws</h2>
            <p className="text-gray-700 mb-6">
              California is one of the few states where lane splitting (riding between lanes of traffic) is legal. However, this doesn't mean riders can split lanes recklessly.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Safe Lane Splitting Guidelines</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Travel at safe speeds relative to traffic</li>
              <li>Avoid lane splitting when traffic is moving above 30 mph</li>
              <li>Don't exceed traffic speed by more than 10 mph</li>
              <li>Use extreme caution in bad weather or poor visibility</li>
              <li>Be extra alert at intersections</li>
            </ul>

            <div className="bg-[#007AFF]/5 border-l-4 border-[#007AFF] p-8 my-12 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dedicated Motorcycle Accident Representation</h3>
              <p className="text-gray-700 mb-6">
                Motorcycle accident cases require attorneys who understand the unique challenges riders face, including bias, complex injury patterns, and technical riding issues. Our firm has successfully represented numerous motorcycle accident victims throughout California.
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

export default MotorcycleAccidents;
