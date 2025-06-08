import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: 'The Ultimate Guide to Sustainable Fashion',
      excerpt: 'Learn how to build a sustainable wardrobe without compromising on style.',
      date: 'May 15, 2023',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b',
      category: 'Fashion',
    },
    {
      id: 2,
      title: 'Top 10 Summer Outfit Ideas for 2023',
      excerpt: 'Discover the hottest summer trends and how to style them this season.',
      date: 'April 28, 2023',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891',
      category: 'Trends'
    },
    {
      id: 3,
      title: 'How to Care for Your Denim Collection',
      excerpt: 'Proper denim care can extend the life of your favorite jeans and jackets.',
      date: 'March 10, 2023',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a',
      category: 'Tips'
    },
    {
      id: 4,
      title: 'Minimalist Wardrobe: Less is More',
      excerpt: 'Why a capsule wardrobe might be the solution to your fashion dilemmas.',
      date: 'February 22, 2023',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f',
      category: 'Lifestyle'
    },
    {
      id: 5,
      title: 'The Rise of Gender-Neutral Fashion',
      excerpt: 'Exploring how fashion is breaking traditional gender norms.',
      date: 'January 15, 2023',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1485872299829-c673f5194813',
      category: 'Culture'
    },
    {
      id: 6,
      title: 'Accessorizing 101: Complete Your Look',
      excerpt: 'How the right accessories can elevate any outfit from basic to brilliant.',
      date: 'December 5, 2022',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea',
      category: 'Tips'
    },
  ];

  const categories = ['All', 'Fashion', 'Trends', 'Tips', 'Lifestyle', 'Culture'];

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>ROKAN Journal - Fashion Trends & Tips</title>
        <meta
          name="description"
          content="Discover the latest fashion trends, styling tips, and industry insights from ROKAN Journal."
        />
      </Helmet>
      <div className="bg-gray-50 min-h-screen">
        <div className="container flex flex-col mx-auto px-4 py-12">
          <div className="w-full text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">ROKAN Journal</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the latest fashion trends, styling tips, and industry insights from our team of experts.
            </p>
          </div>

          {/* Categories */}
          <div className="w-full flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full ${
                  category === activeCategory
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-blue-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <motion.div
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={post.image}
                  alt={`${post.title} featured image`}
                  className="w-full h-56 object-cover md:h-64 lg:h-72"
                />
                <div className="p-6">
                  <span className="text-sm text-blue-500 font-semibold">
                    {post.category}
                  </span>
                  <h2 className="text-2xl font-bold text-gray-800 mt-2">{post.title}</h2>
                  <p className="text-gray-600 mt-2">{post.excerpt}</p>
                  <div className="flex items-center mt-4 text-gray-500 text-sm">
                    <FiCalendar className="mr-2" />
                    <span>{post.date}</span>
                    <span className="mx-2">|</span>
                    <FiClock className="mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                  <motion.button
                    type="button"
                    className="mt-4 flex items-center text-blue-600 hover:text-blue-800"
                    whileHover={{ x: 10 }}
                    aria-label={`Read more about ${post.title}`}
                  >
                    Read More
                    <FiArrowRight className="ml-2" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;