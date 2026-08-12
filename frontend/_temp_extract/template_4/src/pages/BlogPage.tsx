import { Link } from 'react-router-dom';
import { ArrowRight, Clock, User } from 'lucide-react';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    id: 1,
    slug: 'essential-nutrients-guide',
    title: '10 Essential Nutrients Your Body Needs Daily',
    excerpt: 'Discover the key vitamins and minerals that support optimal health and how to incorporate them into your diet through food and supplements. Learn about the importance of each nutrient and signs of deficiency to watch for.',
    image: '/images/blog-nutrition.jpg',
    category: 'Nutrition',
    date: 'Dec 15, 2024',
    readTime: '5 min read',
    author: 'Dr. Sarah Chen',
    content: `
      <p>Maintaining optimal health requires a balanced intake of essential nutrients. Here are the top 10 nutrients your body needs daily:</p>
      
      <h3>1. Vitamin D</h3>
      <p>Often called the "sunshine vitamin," Vitamin D is crucial for bone health, immune function, and mood regulation. Many people are deficient, especially those who live in northern climates.</p>
      
      <h3>2. Omega-3 Fatty Acids</h3>
      <p>These essential fats support heart health, brain function, and reduce inflammation. Found in fatty fish, walnuts, and flaxseeds.</p>
      
      <h3>3. Magnesium</h3>
      <p>Involved in over 300 enzymatic reactions, magnesium supports muscle function, energy production, and nervous system health.</p>
      
      <h3>4. Vitamin B12</h3>
      <p>Essential for nerve function and red blood cell formation. Vegetarians and vegans should pay special attention to B12 intake.</p>
      
      <h3>5. Iron</h3>
      <p>Critical for oxygen transport throughout the body. Iron deficiency can lead to fatigue and weakened immunity.</p>
    `
  },
  {
    id: 2,
    slug: 'sleep-science-recovery',
    title: 'The Science Behind Quality Sleep and Recovery',
    excerpt: 'Learn how proper sleep impacts muscle recovery, cognitive function, and overall wellness, plus tips for improving your sleep quality naturally.',
    image: '/images/blog-sleep.jpg',
    category: 'Wellness',
    date: 'Dec 12, 2024',
    readTime: '7 min read',
    author: 'Dr. Michael Torres',
    content: `
      <p>Sleep is one of the most powerful tools for recovery and overall health. Here's what the science tells us about quality sleep:</p>
      
      <h3>The Sleep Cycle</h3>
      <p>During sleep, your body cycles through different stages, each serving unique purposes. Deep sleep is crucial for physical recovery, while REM sleep supports cognitive function and memory consolidation.</p>
      
      <h3>Impact on Recovery</h3>
      <p>Growth hormone is primarily released during deep sleep, making it essential for muscle repair and growth. Poor sleep can significantly impact athletic performance and recovery time.</p>
      
      <h3>Tips for Better Sleep</h3>
      <ul>
        <li>Maintain a consistent sleep schedule</li>
        <li>Limit blue light exposure before bed</li>
        <li>Keep your bedroom cool and dark</li>
        <li>Consider natural sleep aids like magnesium or melatonin</li>
      </ul>
    `
  },
  {
    id: 3,
    slug: 'workout-nutrition-guide',
    title: 'Maximizing Your Workout Results with Proper Nutrition',
    excerpt: 'Expert tips on pre and post-workout nutrition, supplement timing, and meal planning to get the most out of your fitness routine.',
    image: '/images/blog-fitness.jpg',
    category: 'Fitness',
    date: 'Dec 10, 2024',
    readTime: '6 min read',
    author: 'Coach James Wilson',
    content: `
      <p>What you eat before and after your workout can significantly impact your results. Here's your complete guide to workout nutrition:</p>
      
      <h3>Pre-Workout Nutrition</h3>
      <p>Consume a balanced meal 2-3 hours before exercise, or a lighter snack 30-60 minutes prior. Focus on easily digestible carbohydrates and moderate protein.</p>
      
      <h3>Post-Workout Recovery</h3>
      <p>Within 30-60 minutes after exercise, consume protein to support muscle repair and carbohydrates to replenish glycogen stores.</p>
      
      <h3>Key Supplements</h3>
      <ul>
        <li>Whey protein for fast-absorbing post-workout recovery</li>
        <li>BCAAs for intra-workout support</li>
        <li>Creatine for strength and power</li>
      </ul>
    `
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#00BCD4]/5 via-white to-[#76C442]/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-['Nunito'] font-black text-4xl sm:text-5xl text-[#333333] mb-4">
              Health & Wellness Blog
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Expert insights, tips, and guides to support your journey to optimal health
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid lg:grid-cols-2 gap-8 bg-gray-50 rounded-3xl overflow-hidden"
          >
            <img
              src={blogPosts[0].image}
              alt={blogPosts[0].title}
              className="w-full h-80 lg:h-full object-cover"
            />
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <span className="inline-block bg-[#00BCD4] text-white text-sm font-bold px-3 py-1 rounded-full mb-4 w-fit">
                {blogPosts[0].category}
              </span>
              <h2 className="font-['Nunito'] font-bold text-2xl sm:text-3xl text-[#333333] mb-4">
                {blogPosts[0].title}
              </h2>
              <p className="text-gray-600 mb-6">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {blogPosts[0].author}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {blogPosts[0].readTime}
                </div>
              </div>
              <Link
                to="#"
                className="inline-flex items-center gap-2 text-[#00BCD4] font-semibold hover:text-[#76C442] transition-colors"
              >
                Read Full Article <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.article>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-['Nunito'] font-bold text-2xl text-[#333333] mb-8">All Articles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-[#00BCD4] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-['Nunito'] font-bold text-lg text-[#333333] mb-2 group-hover:text-[#00BCD4] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    to="#"
                    className="inline-flex items-center gap-2 text-[#00BCD4] font-semibold text-sm hover:text-[#76C442] transition-colors"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
