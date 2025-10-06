import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import SEO from '@/components/SEO';
import { blogPosts } from '@/data/blogPosts';
import { BlogSearch } from '@/components/blog/BlogSearch';
import { CategoryFilter } from '@/components/blog/CategoryFilter';
import { SocialShare } from '@/components/blog/SocialShare';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { Breadcrumbs } from '@/components/blog/Breadcrumbs';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const POSTS_PER_PAGE = 10;

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(blogPosts.map(post => post.category)));
    return uniqueCategories.sort();
  }, []);

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  // Scroll to top listener
  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribe:', email);
    setEmail('');
  };

  const renderPaginationButton = (page: number | string) => {
    if (page === '...') {
      return (
        <span key={page} className="px-3 py-2 text-muted-foreground">
          ...
        </span>
      );
    }

    const pageNum = page as number;
    return (
      <button
        key={page}
        onClick={() => setCurrentPage(pageNum)}
        className={`px-4 py-2 rounded-md transition-colors ${
          currentPage === pageNum
            ? 'font-semibold text-white'
            : 'bg-white text-foreground hover:bg-gray-100 border border-gray-200'
        }`}
        style={currentPage === pageNum ? { backgroundColor: '#007AFF' } : {}}
      >
        {page}
      </button>
    );
  };

  const getPaginationRange = () => {
    const range: (number | string)[] = [];
    const showEllipsis = totalPages > 7;

    if (!showEllipsis) {
      for (let i = 1; i <= totalPages; i++) {
        range.push(i);
      }
    } else {
      if (currentPage <= 3) {
        range.push(1, 2, 3, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        range.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
      } else {
        range.push(1, '...', currentPage, '...', totalPages);
      }
    }

    return range;
  };

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <SEO
        title="Blog: Your Legal Resource | Trembach Law Firm, APC"
        description="Expert legal insights, accident prevention tips, and personal injury law guidance from California's trusted injury attorneys. Stay informed with our comprehensive legal blog."
        keywords="personal injury blog, legal insights, California injury law, accident prevention, legal guidance"
        canonical="https://www.trembachlawfirm.com/blog"
      />

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Trembach Law Firm Legal Blog",
          "description": "Expert legal insights and personal injury law guidance",
          "url": "https://www.trembachlawfirm.com/blog",
          "publisher": {
            "@type": "Organization",
            "name": "Trembach Law Firm, APC",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.trembachlawfirm.com/logo.png"
            }
          }
        })}
      </script>

      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200 py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Blog' }
          ]} />
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: '#007AFF' }}>
            Blog: Your Legal Resource
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Expert legal insights, accident prevention tips, and personal injury law guidance from California's trusted injury attorneys.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-[#f5f5f7] py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <BlogSearch value={searchQuery} onChange={setSearchQuery} />
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          {currentPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-2xl text-gray-600">No articles found matching your criteria.</p>
              <Button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="mt-6 bg-[#007AFF] hover:bg-[#0051D5] text-white"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="space-y-20">
              {currentPosts.map((post, index) => {
                const BlogPostCard = () => {
                  const { ref, isVisible } = useScrollAnimation();
                  
                  return (
                    <article
                      ref={ref}
                      key={post.id}
                      className={`flex flex-col md:flex-row gap-8 pb-20 border-b border-gray-200 last:border-0 transition-all duration-700 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      {/* Structured Data for each post */}
                      <script type="application/ld+json">
                        {JSON.stringify({
                          "@context": "https://schema.org",
                          "@type": "BlogPosting",
                          "headline": post.title,
                          "description": post.excerpt,
                          "image": post.image,
                          "datePublished": post.date,
                          "author": {
                            "@type": "Organization",
                            "name": post.author || "Trembach Law Firm, APC"
                          }
                        })}
                      </script>

                      {/* Image */}
                      <div className="md:w-[426px] flex-shrink-0 overflow-hidden rounded-2xl group">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-[320px] object-cover transform group-hover:scale-105 transition-transform duration-500 shadow-lg"
                          loading="lazy"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex flex-col justify-start pt-4">
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                          <time dateTime={post.date}>{post.date}</time>
                          {post.readTime && (
                            <>
                              <span>•</span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {post.readTime}
                              </span>
                            </>
                          )}
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight hover:text-[#007AFF] transition-colors">
                          {post.title}
                        </h2>

                        <p className="text-sm font-medium mb-4">
                          Posted in{' '}
                          <button
                            onClick={() => setSelectedCategory(post.category)}
                            className="hover:underline font-semibold text-[#007AFF]"
                          >
                            {post.category}
                          </button>
                        </p>

                        <p className="text-base text-gray-700 leading-relaxed mb-6">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between mt-auto">
                          <Link
                            to="#"
                            className="inline-flex items-center gap-2 text-base font-semibold hover:gap-3 transition-all group text-[#007AFF]"
                          >
                            Read More
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </Link>

                          <SocialShare
                            url={`https://www.trembachlawfirm.com/blog/${post.slug}`}
                            title={post.title}
                          />
                        </div>
                      </div>
                    </article>
                  );
                };
                
                return <BlogPostCard key={post.id} />;
              })}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-start gap-2 mt-12">
              {getPaginationRange().map((page) => renderPaginationButton(page))}
              {currentPage < totalPages && (
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-md hover:bg-gray-100 transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Related Posts */}
      {currentPosts.length > 0 && (
        <RelatedPosts
          posts={blogPosts}
          currentCategory={currentPosts[0].category}
        />
      )}

      {/* Newsletter Section */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#007AFF' }}>
            Newsletter Sign Up
          </h2>
          <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
            Never miss out on the latest updates! Get important legal insights, fun
            event information, and more. Sign up today and stay connected!
          </p>

          <form
            onSubmit={handleSubscribe}
            className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4"
          >
            <Input
              type="email"
              placeholder="example@subscribe.com *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 px-4 text-base border-gray-300"
            />
            <Button
              type="submit"
              className="h-12 px-8 font-semibold text-base text-white hover:opacity-90"
              style={{ backgroundColor: '#007AFF' }}
            >
              SUBSCRIBE
            </Button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, #007AFF 0%, #0051D5 100%)' }}>
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Get a FREE Case Evaluation Today!
          </h2>
          <p className="text-xl text-white mb-8">
            You Pay Nothing Unless We Win Your Case — Guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white hover:bg-white/90 text-lg px-8 h-14 font-semibold"
              style={{ color: '#007AFF' }}
            >
              <Link to="/free-consultation">CALL</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white hover:bg-white/90 text-lg px-8 h-14 font-semibold"
              style={{ color: '#007AFF' }}
            >
              <Link to="/free-consultation">EMAIL</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* All 58 Counties Section */}
      <section className="bg-[#f5f5f7] py-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ color: '#1d1d1f' }}>
            All 58 Counties
          </h2>
          <p className="text-2xl text-center mb-16" style={{ color: '#1d1d1f' }}>
            Statewide Representation
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                city: 'Los Angeles',
                office: 'Main Office',
                address: '27001 Agoura Road, Suite 350',
                cityState: 'Calabasas, CA 91301',
                phone: '(800) 555-0000',
                bgImage: 'https://images.unsplash.com/photo-1534190239940-9ba8944ea261?auto=format&fit=crop&w=800&q=80'
              },
              {
                city: 'San Francisco',
                office: 'By Appointment Only',
                phone: '(800) 555-0000',
                bgImage: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80'
              },
              {
                city: 'San Diego',
                office: 'By Appointment Only',
                phone: '(800) 555-0000',
                bgImage: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=800&q=80'
              },
              {
                city: 'Sacramento',
                office: 'By Appointment Only',
                phone: '(800) 555-0000',
                bgImage: 'https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?auto=format&fit=crop&w=800&q=80'
              },
              {
                city: 'Fresno',
                office: 'By Appointment Only',
                phone: '(800) 555-0000',
                bgImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80'
              },
              {
                city: 'Oakland',
                office: 'By Appointment Only',
                phone: '(800) 555-0000',
                bgImage: 'https://images.unsplash.com/photo-1568632234157-ce7aecd03d0d?auto=format&fit=crop&w=800&q=80'
              },
              {
                city: 'Bakersfield',
                office: 'By Appointment Only',
                phone: '(800) 555-0000',
                bgImage: 'https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?auto=format&fit=crop&w=800&q=80'
              },
              {
                city: 'Riverside',
                office: 'By Appointment Only',
                phone: '(800) 555-0000',
                bgImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80'
              }
            ].map((location, index) => (
              <div
                key={index}
                className="relative h-[280px] rounded-2xl overflow-hidden group cursor-pointer shadow-lg"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${location.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 p-6 flex flex-col justify-start text-white">
                  <h3 className="text-3xl font-bold mb-1">{location.city}</h3>
                  {location.office && (
                    <p className="text-sm mb-4 opacity-90">({location.office})</p>
                  )}
                  
                  <div className="space-y-1 text-sm">
                    {location.address && (
                      <>
                        <p className="font-medium">{location.address}</p>
                        <p className="font-medium">{location.cityState}</p>
                      </>
                    )}
                    <p className="font-bold mt-3 text-base">{location.phone}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-16" style={{ background: 'linear-gradient(135deg, #007AFF 0%, #0051D5 100%)' }}>
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Newsletter Column */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Newsletter Sign Up
              </h3>
              <form onSubmit={handleSubscribe} className="space-y-4">
                <Input
                  type="email"
                  placeholder="example@subscribe.com *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 px-4 text-base bg-white"
                />
                <Button
                  type="submit"
                  className="w-full h-12 font-semibold text-base hover:bg-white/90"
                  style={{ backgroundColor: '#ffffff', color: '#007AFF' }}
                >
                  SUBSCRIBE
                </Button>
              </form>
            </div>

            {/* Practice Areas Column */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Practice Areas
              </h3>
              <ul className="space-y-3">
                {[
                  { label: 'Car Accident Lawyers', href: '/practice-areas/car-accidents' },
                  { label: 'Dog Bite Lawyers', href: '/practice-areas/dog-bites' },
                  { label: 'Bicycle Accident Lawyers', href: '/practice-areas/bicycle-accidents' },
                  { label: 'Motorcycle Accident Lawyers', href: '/practice-areas/motorcycle-accidents' },
                  { label: 'Pedestrian Accident Lawyers', href: '/practice-areas/pedestrian-accidents' },
                  { label: 'Truck Accident Lawyers', href: '/practice-areas/truck-accidents' },
                  { label: 'Wrongful Death Lawyers', href: '/practice-areas/wrongful-death' }
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-white hover:text-white transition-colors text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/practice-areas"
                    className="text-white hover:text-white transition-colors text-base font-semibold flex items-center gap-2"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    See all 50 practice areas <ArrowRight className="w-4 h-4" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Us
              </h3>
              <div className="space-y-4 mb-6">
                <p className="text-white text-lg">
                  <span className="font-bold">Phone:</span> (800) 555-0000
                </p>
                <p className="text-white text-base">
                  24 hours a day, 7 days a week
                </p>
              </div>
              
              <div className="space-y-3">
                <Link
                  to="/practice-areas"
                  className="flex items-center gap-2 text-white hover:text-white transition-colors text-base font-medium"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Cases We Handle <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="flex items-center gap-2 text-white hover:text-white transition-colors text-base font-medium"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Meet Your Team <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8">
            <div className="bg-[#f5f5f7] -mx-6 px-6 py-8 rounded-t-2xl">
              <p className="text-[#86868b] text-xs leading-relaxed">
                The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship. Reviews, testimonials, endorsements, and results contained herein do not constitute a guarantee, warranty, or prediction of outcomes for your case matter.
              </p>
              
              <div className="flex flex-wrap items-center gap-3 mt-4 text-xs">
                <Link to="/privacy-policy" className="text-[#06c] hover:underline">
                  Privacy Policy
                </Link>
              </div>
              
              <p className="text-[#86868b] text-xs mt-4">
                Copyright © 2025 - Trembach Law Firm, APC. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-[#007AFF] text-white rounded-full shadow-2xl hover:bg-[#0051D5] transition-all duration-300 transform hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default Blog;
