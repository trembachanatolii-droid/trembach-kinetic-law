import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import SEO from '@/components/SEO';
import { blogPosts } from '@/data/blogPosts';

const POSTS_PER_PAGE = 10;

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState('');

  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = blogPosts.slice(startIndex, endIndex);

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
            ? 'bg-primary text-primary-foreground font-semibold'
            : 'bg-white text-foreground hover:bg-gray-100 border border-gray-200'
        }`}
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
    <div className="min-h-screen bg-white">
      <SEO
        title="Blog: Your Legal Resource | Trembach Law Firm, APC"
        description="Expert legal insights, accident prevention tips, and personal injury law guidance from California's trusted injury attorneys. Stay informed with our comprehensive legal blog."
        keywords="personal injury blog, legal insights, California injury law, accident prevention, legal guidance"
        canonical="https://www.trembachlawfirm.com/blog"
      />

      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200 py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-5xl font-bold text-primary mb-4">
            Blog: Your Legal Resource
          </h1>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="space-y-16">
            {currentPosts.map((post, index) => (
              <article
                key={post.id}
                className="flex flex-col md:flex-row gap-8 pb-16 border-b border-gray-200 last:border-0"
              >
                {/* Image */}
                <div className="md:w-[426px] flex-shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-[320px] object-cover rounded-lg"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-start pt-4">
                  <time className="text-base text-foreground mb-3 block">
                    {post.date}
                  </time>

                  <h2 className="text-3xl font-bold text-foreground mb-3 leading-tight">
                    {post.title}
                  </h2>

                  <p className="text-base text-foreground mb-3">
                    Posted in{' '}
                    <Link
                      to="#"
                      className="text-primary hover:underline font-medium"
                    >
                      {post.category}
                    </Link>
                  </p>

                  <p className="text-base text-foreground leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  <Link
                    to="#"
                    className="inline-flex items-center gap-2 text-base text-primary font-semibold hover:gap-3 transition-all group"
                  >
                    Read More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

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

      {/* Newsletter Section */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">
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
              className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base"
            >
              SUBSCRIBE
            </Button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1a1a1a] py-16">
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
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 h-14"
            >
              <Link to="/free-consultation">CALL</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 h-14"
            >
              <Link to="/free-consultation">EMAIL</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Bar */}
      <section className="bg-primary py-6">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-primary-foreground mb-2">
            855-MIKE-WINS (855-374-2832)
          </h3>
          <p className="text-lg text-primary-foreground">
            We're here to help, 24 hours a day, 7 days a week
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;
