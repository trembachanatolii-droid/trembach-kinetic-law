import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { BlogPost } from '@/data/blogPosts';

interface RelatedPostsProps {
  posts: BlogPost[];
  currentCategory: string;
}

export const RelatedPosts: React.FC<RelatedPostsProps> = ({ posts, currentCategory }) => {
  const relatedPosts = posts
    .filter(post => post.category === currentCategory)
    .slice(0, 3);

  if (relatedPosts.length === 0) return null;

  return (
    <section className="py-24 bg-[#f5f5f7]">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4" style={{ color: '#1d1d1f' }}>
          You May Also Like
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          Related articles in {currentCategory}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                  <time>{post.date}</time>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime || '5 min read'}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-[#007AFF] transition-colors">
                  {post.title}
                </h3>
                
                <Link
                  to="#"
                  className="inline-flex items-center gap-2 text-[#007AFF] font-semibold hover:gap-3 transition-all"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
