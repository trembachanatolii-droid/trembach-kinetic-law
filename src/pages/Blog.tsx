import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, ChevronUp, Search, MapPin } from 'lucide-react';
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
import { LazyImage } from '@/components/PerformanceOptimizations';

// Import county images
import losAngelesImg from '@/assets/counties/los-angeles.jpg';
import sanFranciscoImg from '@/assets/counties/san-francisco.jpg';
import sanDiegoImg from '@/assets/counties/san-diego.jpg';
import sacramentoImg from '@/assets/counties/sacramento.jpg';
import fresnoImg from '@/assets/counties/fresno.jpg';
import oaklandImg from '@/assets/counties/oakland.jpg';
import bakersfieldImg from '@/assets/counties/bakersfield.jpg';
import riversideImg from '@/assets/counties/riverside.jpg';

const POSTS_PER_PAGE = 10;

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [countySearch, setCountySearch] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');

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
                      className={`flex flex-col md:flex-row gap-8 pb-20 border-b border-gray-200 last:border-0 transition-all duration-500 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                      }`}
                      style={{ transitionDelay: `${index * 50}ms` }}
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

      {/* All 58 Counties Section - Apple Style with Enhanced Features */}
      <section className="bg-white py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-semibold text-center mb-3 text-[#1d1d1f] tracking-tight">
            All 58 Counties
          </h2>
          <p className="text-2xl md:text-3xl text-center mb-12 text-[#6e6e73] font-light">
            Statewide Representation
          </p>

          {/* Search & Filter */}
          <div className="max-w-3xl mx-auto mb-12 space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#86868b]" />
              <Input
                type="text"
                placeholder="Search by county name..."
                value={countySearch}
                onChange={(e) => setCountySearch(e.target.value)}
                className="pl-12 h-14 text-base rounded-full border-[#d2d2d7] focus:border-[#007AFF] focus:ring-[#007AFF] bg-[#f5f5f7]"
              />
            </div>
            
            <div className="flex justify-center gap-3 flex-wrap">
              {['All', 'Southern CA', 'Central CA', 'Northern CA'].map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedRegion === region
                      ? 'bg-[#007AFF] text-white shadow-lg'
                      : 'bg-[#f5f5f7] text-[#1d1d1f] hover:bg-[#e8e8ed]'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                city: 'Los Angeles',
                county: 'Los Angeles County',
                region: 'Southern CA',
                office: 'By Appointment Only',
                phone: '(818) 123-4567',
                bgImage: losAngelesImg,
                slug: '/practice-areas/car-accidents'
              },
              {
                city: 'San Francisco',
                county: 'San Francisco County',
                region: 'Northern CA',
                office: 'By Appointment Only',
                phone: '(818) 123-4567',
                bgImage: sanFranciscoImg,
                slug: '/practice-areas/car-accidents'
              },
              {
                city: 'San Diego',
                county: 'San Diego County',
                region: 'Southern CA',
                office: 'By Appointment Only',
                phone: '(818) 123-4567',
                bgImage: sanDiegoImg,
                slug: '/practice-areas/car-accidents'
              },
              {
                city: 'Sacramento',
                county: 'Sacramento County',
                region: 'Central CA',
                office: 'By Appointment Only',
                phone: '(818) 123-4567',
                bgImage: sacramentoImg,
                slug: '/practice-areas/car-accidents'
              },
              {
                city: 'Fresno',
                county: 'Fresno County',
                region: 'Central CA',
                office: 'By Appointment Only',
                phone: '(818) 123-4567',
                bgImage: fresnoImg,
                slug: '/practice-areas/car-accidents'
              },
              {
                city: 'Oakland',
                county: 'Alameda County',
                region: 'Northern CA',
                office: 'By Appointment Only',
                phone: '(818) 123-4567',
                bgImage: oaklandImg,
                slug: '/practice-areas/car-accidents'
              },
              {
                city: 'Bakersfield',
                county: 'Kern County',
                region: 'Central CA',
                office: 'By Appointment Only',
                phone: '(818) 123-4567',
                bgImage: bakersfieldImg,
                slug: '/practice-areas/car-accidents'
              },
              {
                city: 'Riverside',
                county: 'Riverside County',
                region: 'Southern CA',
                office: 'By Appointment Only',
                phone: '(818) 123-4567',
                bgImage: riversideImg,
                slug: '/practice-areas/car-accidents'
              }
            ]
              .filter(location => {
                const matchesSearch = location.city.toLowerCase().includes(countySearch.toLowerCase()) ||
                                    location.county.toLowerCase().includes(countySearch.toLowerCase());
                const matchesRegion = selectedRegion === 'All' || location.region === selectedRegion;
                return matchesSearch && matchesRegion;
              })
              .map((location, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 80}ms` }}>
                  {/* Structured Data for Local Business */}
                  <script type="application/ld+json">
                    {JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "LocalBusiness",
                      "name": `Trembach Law Firm - ${location.city}`,
                      "image": location.bgImage,
                      "telephone": location.phone,
                      "areaServed": {
                        "@type": "City",
                        "name": location.county
                      },
                      "priceRange": "No fees unless we win"
                    })}
                  </script>

                  <Link
                    to={location.slug}
                    className="block relative h-[340px] rounded-3xl overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-2xl"
                    style={{
                      boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                    }}
                  >
                    {/* Lazy Loaded Image */}
                    <div className="absolute inset-0">
                      <LazyImage
                        src={location.bgImage}
                        alt={`${location.city} Office - Trembach Law Firm`}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    {/* Lighter Overlay for Better Visibility */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/50 group-hover:from-black/15 group-hover:via-black/25 group-hover:to-black/60 transition-all duration-500"></div>
                    
                    {/* Map Pin Icon */}
                    <div className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-[#007AFF] transition-all duration-300">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 p-7 flex flex-col justify-end text-white">
                      <div className="mb-4">
                        <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-medium mb-3">
                          {location.region}
                        </div>
                        
                        <h3 className="text-4xl font-semibold mb-2 tracking-tight drop-shadow-lg group-hover:text-[#007AFF] transition-colors">
                          {location.city}
                        </h3>
                        
                        {location.office && (
                          <p className="text-base mb-2 font-medium opacity-95 drop-shadow-md">
                            {location.office}
                          </p>
                        )}
                        
                        <p className="text-sm opacity-90 mb-3">{location.county}</p>
                      </div>
                      
                      <div className="space-y-2 text-sm drop-shadow-md mb-4">
                        <p className="font-bold text-lg opacity-100">{location.phone}</p>
                      </div>
                      
                      {/* CTA Arrow */}
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <span className="text-sm font-semibold">Schedule Consultation</span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#007AFF]/20 to-transparent"></div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>

          {/* No Results Message */}
          {[
            {
              city: 'Los Angeles',
              county: 'Los Angeles County',
              region: 'Southern CA'
            }
          ].filter(location => {
            const matchesSearch = location.city.toLowerCase().includes(countySearch.toLowerCase()) ||
                                location.county.toLowerCase().includes(countySearch.toLowerCase());
            const matchesRegion = selectedRegion === 'All' || location.region === selectedRegion;
            return matchesSearch && matchesRegion;
          }).length === 0 && countySearch && (
            <div className="text-center py-12">
              <p className="text-[#6e6e73] text-lg">No counties found. Try a different search term.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer Section - Apple Style */}
      <footer className="bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Main Footer Content */}
          <div className="py-16 border-b border-[#d2d2d7]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Newsletter Column */}
              <div>
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-6">
                  Newsletter Sign Up
                </h3>
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="example@subscribe.com *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12 px-4 text-base bg-white border-[#d2d2d7] focus:border-[#007AFF] focus:ring-[#007AFF]"
                  />
                  <Button
                    type="submit"
                    className="w-full h-12 font-semibold text-base hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: '#007AFF', color: 'white' }}
                  >
                    SUBSCRIBE
                  </Button>
                </form>
              </div>

              {/* Practice Areas Column */}
              <div>
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-6">
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
                        className="text-[#424245] hover:text-[#007AFF] transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      to="/practice-areas"
                      className="text-[#007AFF] hover:text-[#0051D5] transition-colors text-sm font-semibold flex items-center gap-2"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      See all 50 practice areas <ArrowRight className="w-4 h-4" />
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Column */}
              <div>
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-6">
                  Contact Us
                </h3>
                <div className="space-y-4 mb-6">
                  <p className="text-[#424245] text-base">
                    <span className="font-semibold text-[#1d1d1f]">Phone:</span> (800) 555-0000
                  </p>
                  <p className="text-[#424245] text-sm">
                    24 hours a day, 7 days a week
                  </p>
                </div>
                
                <div className="space-y-3">
                  <Link
                    to="/practice-areas"
                    className="flex items-center gap-2 text-[#007AFF] hover:text-[#0051D5] transition-colors text-sm font-medium"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Cases We Handle <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    to="/about"
                    className="flex items-center gap-2 text-[#007AFF] hover:text-[#0051D5] transition-colors text-sm font-medium"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Meet Your Team <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Legal Section - Apple Style */}
          <div className="bg-[#f5f5f7] -mx-6 px-6 py-8">
            <div className="max-w-[1400px] mx-auto">
              <p className="text-[#86868b] text-xs leading-relaxed mb-6">
                The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship. Reviews, testimonials, endorsements, and results contained herein do not constitute a guarantee, warranty, or prediction of outcomes for your case matter.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <Link to="/privacy-policy" className="text-[#06c] hover:underline text-xs">
                  Privacy Policy
                </Link>
              </div>
              
              <p className="text-[#86868b] text-xs">
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
