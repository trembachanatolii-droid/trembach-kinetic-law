import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { blogPosts } from '@/data/blogPosts';

const IntersectionAccidents = () => {
  const currentCategory = 'Motor Vehicle Accidents';
  
  return (
    <>
      <SEO 
        title="Intersection Accidents in California: Establishing Liability | Trembach Law"
        description="Understanding right-of-way rules, common intersection crash causes, and proving fault. Expert legal representation for California intersection accidents."
        keywords="intersection accident, t-bone collision, right of way, red light accident, stop sign violation, California traffic law, intersection crash attorney"
        canonical="https://www.trembachlawfirm.com/blog/intersection-accidents"
      />
      
      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/90 to-[#0051D5]/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80"
            alt="Intersection accident legal guidance"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Intersection Accidents: Establishing Liability in California
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                October 25, 2025
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
              Intersections are among the most dangerous locations on California roads. With multiple vehicles crossing paths, confusion over right-of-way, and split-second decisions, intersection accidents often result in serious injuries and disputed liability.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Why Intersections Are So Dangerous</h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Conflict points:</strong> Multiple paths where vehicles can collide</li>
              <li><strong>Right-of-way confusion:</strong> Drivers uncertain who should proceed</li>
              <li><strong>High impact angles:</strong> Side-impact collisions are common</li>
              <li><strong>Limited visibility:</strong> Obstructions blocking driver's view</li>
              <li><strong>Multiple decisions:</strong> Drivers processing complex scenarios quickly</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common Types of Intersection Accidents</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">T-Bone (Side-Impact) Collisions</h3>
            <p className="text-gray-700 mb-6">
              One vehicle strikes the side of another, typically when:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Driver runs a red light or stop sign</li>
              <li>Driver fails to yield right-of-way</li>
              <li>Driver makes an illegal turn</li>
              <li>Particularly dangerous as less protection on vehicle sides</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Left-Turn Accidents</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Turning vehicle misjudges oncoming traffic speed</li>
              <li>Driver turns on yellow or red light</li>
              <li>Failure to yield to oncoming vehicles</li>
              <li>Turning driver typically at fault unless unusual circumstances</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Rear-End at Intersections</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Following vehicle doesn't stop in time</li>
              <li>Driver distracted while stopped at light</li>
              <li>Sudden stops causing chain reactions</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">California Right-of-Way Rules</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Controlled Intersections (Traffic Signals)</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Green light:</strong> Right-of-way to proceed, but must yield to vehicles lawfully in intersection</li>
              <li><strong>Yellow light:</strong> Stop if safe to do so; don't enter if cannot clear</li>
              <li><strong>Red light:</strong> Complete stop required; right turn allowed after stop unless prohibited</li>
              <li><strong>Left turns:</strong> Must yield to oncoming traffic</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Stop Signs</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Four-way stop:</strong> First to arrive proceeds first; if simultaneous, rightmost vehicle has right-of-way</li>
              <li><strong>Two-way stop:</strong> Through traffic has right-of-way</li>
              <li><strong>Complete stop required:</strong> Must stop behind limit line</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Proving Fault in Intersection Accidents</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Critical Evidence</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Traffic camera footage:</strong> Red light and intersection cameras</li>
              <li><strong>Witness statements:</strong> Other drivers, pedestrians, nearby businesses</li>
              <li><strong>Vehicle damage:</strong> Impact points indicate collision dynamics</li>
              <li><strong>Police report:</strong> Officer's determination of fault</li>
              <li><strong>Traffic citations:</strong> Tickets issued at scene</li>
              <li><strong>Signal timing records:</strong> Light cycle data from traffic department</li>
            </ul>

            <div className="bg-[#007AFF]/5 border-l-4 border-[#007AFF] p-8 my-12 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Skilled Intersection Accident Representation</h3>
              <p className="text-gray-700 mb-6">
                Intersection accidents often involve disputed liability and complex traffic law questions. Our firm has successfully represented numerous clients injured in intersection collisions throughout California.
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
              <RelatedPosts posts={blogPosts} currentCategory={currentCategory} currentPostId="intersection-accidents" />
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default IntersectionAccidents;
