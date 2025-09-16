import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import SchemaMarkup from '@/components/SchemaMarkup';

gsap.registerPlugin(ScrollTrigger);

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
}

const Blog = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'New California Mesothelioma Compensation Laws Take Effect 2024',
      excerpt: 'Important changes to California mesothelioma compensation laws provide additional protections for victims and their families. Learn how these changes affect your rights.',
      author: 'Legal Team',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Legal Updates',
      image: '/api/placeholder/400/250',
      slug: 'california-mesothelioma-laws-2024'
    },
    {
      id: '2',
      title: 'Record $50 Million Mesothelioma Verdict in Los Angeles',
      excerpt: 'A Los Angeles jury awarded $50 million to a Navy veteran who developed mesothelioma from asbestos exposure during military service.',
      author: 'Case Results Team',
      date: '2024-01-10',
      readTime: '4 min read',
      category: 'Case Results',
      image: '/api/placeholder/400/250',
      slug: 'record-mesothelioma-verdict-los-angeles'
    },
    {
      id: '3',
      title: 'Asbestos Trust Fund Updates: What Victims Need to Know',
      excerpt: 'Recent changes to major asbestos trust funds affect claim processing and payment percentages. Get the latest information on trust fund status.',
      author: 'Trust Fund Experts',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Trust Funds',
      image: '/api/placeholder/400/250',
      slug: 'asbestos-trust-fund-updates-2024'
    },
    {
      id: '4',
      title: 'Early Detection: New Mesothelioma Screening Guidelines',
      excerpt: 'Medical experts release new guidelines for early mesothelioma detection in high-risk populations, potentially improving treatment outcomes.',
      author: 'Medical Advisory Board',
      date: '2023-12-28',
      readTime: '7 min read',
      category: 'Medical News',
      image: '/api/placeholder/400/250',
      slug: 'mesothelioma-screening-guidelines'
    },
    {
      id: '5',
      title: 'California Silicosis Epidemic: Legal Rights for Stone Workers',
      excerpt: 'The silicosis epidemic among engineered stone workers continues to grow. Learn about your legal rights and available compensation.',
      author: 'Occupational Health Team',
      date: '2023-12-20',
      readTime: '5 min read',
      category: 'Silicosis',
      image: '/api/placeholder/400/250',
      slug: 'california-silicosis-epidemic-legal-rights'
    },
    {
      id: '6',
      title: 'Talc Litigation Update: Major Settlement Announcements',
      excerpt: 'Recent developments in talc cancer litigation include significant settlements and new scientific evidence linking talc to ovarian cancer.',
      author: 'Product Liability Team',
      date: '2023-12-15',
      readTime: '4 min read',
      category: 'Product Liability',
      image: '/api/placeholder/400/250',
      slug: 'talc-litigation-settlement-update'
    }
  ];

  const schemaData = {
    title: 'Legal News & Updates - Trembach Law Firm',
    description: 'Stay informed about mesothelioma law, asbestos litigation, and personal injury legal developments in California.',
    image: '/api/placeholder/1200/630',
    datePublished: '2024-01-15',
    dateModified: '2024-01-15'
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll('.blog-card');
    
    gsap.fromTo(cards,
      { 
        opacity: 0,
        y: 50,
        scale: 0.95
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup type="article" data={schemaData} />
      
      {/* Header Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-6">
          {/* Go Back Button */}
          <div className="mb-8">
            <Button 
              variant="ghost" 
              onClick={() => window.history.back()}
              className="flex items-center gap-2 hover:bg-primary/10"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </Button>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-foreground">
              Legal News & Updates
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Stay informed about the latest developments in mesothelioma law, 
              asbestos litigation, and personal injury legal news in California.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section ref={sectionRef} className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={post.id}
                className="blog-card group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => window.location.href = `/blog/${post.slug}`}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <CardHeader>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                    Read More 
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Stay Updated on Legal Developments
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to receive important updates about mesothelioma law, 
              case results, and changes that could affect your rights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="px-4 py-3 border border-border rounded-lg flex-1 max-w-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="magnetic px-8 py-3">
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">
            Need Legal Help? Don't Wait
          </h2>
          <p className="text-xl mb-8">
            If you or a loved one has been diagnosed with mesothelioma or another 
            asbestos-related disease, contact us for a free consultation.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button 
              size="lg" 
              className="magnetic bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-4"
              onClick={() => window.location.href = '/case-evaluation'}
            >
              Free Case Evaluation
            </Button>
            <Button 
              size="lg" 
              className="magnetic bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold px-8 py-4 transition-all duration-300"
              onClick={() => window.location.href = 'tel:8559851234'}
            >
              Call (855) 985-1234
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;