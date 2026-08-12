import { Link } from 'react-router-dom';
import { ArrowRight, Clock, User } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: "5 Natural Ways to Deodorize Your Home Without Chemicals",
    excerpt: "Learn how to use simple household ingredients to eliminate odors instead of just masking them with synthetic fragrances.",
    category: "Tips & Tricks",
    date: "Oct 12, 2023",
    readTime: "4 min read",
    image: "/images/hero.jpg"
  },
  {
    id: 2,
    title: "The Ultimate Spring Cleaning Checklist: Room by Room",
    excerpt: "Tackle spring cleaning efficiently with our comprehensive guide to deep cleaning every corner of your house.",
    category: "Guides",
    date: "Mar 05, 2023",
    readTime: "8 min read",
    image: "/images/kitchen.jpg"
  },
  {
    id: 3,
    title: "Why Plant-Based Cleaners Work Just as Well as Bleach",
    excerpt: "The science behind natural surfactants and why you don't need harsh chemicals to achieve a spotless, sanitized home.",
    category: "Science",
    date: "Jan 22, 2023",
    readTime: "6 min read",
    image: "/images/bathroom.jpg"
  }
];

const Blog = () => {
  return (
    <div className="bg-light-grey min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900 mb-4">Cleaning Tips & Insights</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">Expert advice on maintaining a spotless, healthy home using natural methods and products.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-teal-600">
                  {article.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.date}</span>
                  <span className="flex items-center gap-1"><User className="w-3 h-3" /> {article.readTime}</span>
                </div>
                
                <h2 className="text-xl font-heading font-bold text-gray-900 mb-3 leading-tight hover:text-teal-500 transition-colors cursor-pointer">
                  {article.title}
                </h2>
                
                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  {article.excerpt}
                </p>
                
                <button className="text-teal-500 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all mt-auto w-fit">
                  Read Article <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter promo inside blog */}
        <div className="mt-20 bg-teal-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between border border-teal-100">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">Want more cleaning hacks?</h3>
            <p className="text-gray-600">Get our latest articles and exclusive product discounts delivered straight to your inbox.</p>
          </div>
          <div className="md:w-1/2 w-full max-w-md">
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button 
                type="submit" 
                className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Blog;