import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const posts = [
  {
    id: 1,
    title: '10 Essential Nutrients Your Body Needs Daily',
    excerpt: 'Discover the key vitamins and minerals that support optimal health and how to incorporate them into your diet.',
    image: '/images/blog-nutrition.jpg',
    category: 'Nutrition',
    date: 'Dec 15, 2024',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'The Science Behind Quality Sleep and Recovery',
    excerpt: 'Learn how proper sleep impacts muscle recovery, cognitive function, and overall wellness.',
    image: '/images/blog-sleep.jpg',
    category: 'Wellness',
    date: 'Dec 12, 2024',
    readTime: '7 min read'
  },
  {
    id: 3,
    title: 'Maximizing Your Workout Results with Proper Nutrition',
    excerpt: 'Expert tips on pre and post-workout nutrition, supplement timing, and meal planning.',
    image: '/images/blog-fitness.jpg',
    category: 'Fitness',
    date: 'Dec 10, 2024',
    readTime: '6 min read'
  }
];

export default function BlogSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="font-['Nunito'] font-bold text-3xl sm:text-4xl text-[#333333]">
              Health & Wellness Blog
            </h2>
            <p className="text-gray-600 mt-2">Expert insights for your health journey</p>
          </div>
          <Link
            to="/blog"
            className="hidden sm:flex items-center gap-2 text-[#00BCD4] font-semibold hover:text-[#76C442] transition-colors"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#00BCD4] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-['Nunito'] font-bold text-lg text-[#333333] mb-2 group-hover:text-[#00BCD4] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="sm:hidden mt-8 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[#00BCD4] font-semibold"
          >
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
