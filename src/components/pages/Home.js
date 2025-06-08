import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { FaStar, FaShippingFast, FaShieldAlt, FaTags } from 'react-icons/fa';

const Home = () => {
  const featuredProducts = [
    { id: 1, name: 'Premium Denim Jacket', price: 89.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea' },
    { id: 2, name: 'Classic White Sneakers', price: 65.50, rating: 4.6, image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28' },
    { id: 3, name: 'Minimalist Leather Watch', price: 120.00, rating: 4.9, image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49' },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-900 to-purple-800 py-32">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl text-center mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Elevate Your Style with ROKAN</h1>
            <p className="text-xl text-gray-200 mb-8">
              Discover premium fashion that combines comfort, quality, and timeless design
            </p>
            <button className="bg-white text-indigo-800 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition flex items-center mx-auto">
              Shop Now <FiArrowRight className="ml-2" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm flex items-center">
            <div className="bg-indigo-100 p-3 rounded-full mr-4">
              <FaShippingFast className="text-indigo-600 text-xl" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Free Shipping</h3>
              <p className="text-gray-600 text-sm">On orders over $50</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm flex items-center">
            <div className="bg-indigo-100 p-3 rounded-full mr-4">
              <FaShieldAlt className="text-indigo-600 text-xl" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Secure Payment</h3>
              <p className="text-gray-600 text-sm">100% protected</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm flex items-center">
            <div className="bg-indigo-100 p-3 rounded-full mr-4">
              <FaTags className="text-indigo-600 text-xl" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Seasonal Sales</h3>
              <p className="text-gray-600 text-sm">Up to 50% off</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm flex items-center">
            <div className="bg-indigo-100 p-3 rounded-full mr-4">
              <FaStar className="text-indigo-600 text-xl" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Premium Quality</h3>
              <p className="text-gray-600 text-sm">Guaranteed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
          <a href="/shop" className="text-indigo-600 hover:text-indigo-800 flex items-center">
            View All <FiArrowRight className="ml-1" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <motion.div 
              key={product.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="h-64 bg-gray-200 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm font-medium">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center mt-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(product.rating) ? 'fill-current' : 'fill-current opacity-30'} />
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm ml-2">{product.rating}</span>
                </div>
                <button className="mt-4 w-full bg-gray-100 hover:bg-indigo-600 hover:text-white text-gray-800 py-2 rounded-lg transition">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Categories Preview */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Men', 'Women', 'Accessories', 'Footwear'].map((category, index) => (
            <motion.div
              key={category}
              whileHover={{ scale: 1.03 }}
              className="relative rounded-xl overflow-hidden h-48 cursor-pointer"
            >
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <img 
                src={`https://source.unsplash.com/random/300x300?${category.toLowerCase()},fashion&${index}`}
                alt={category}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-xl font-bold">{category}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;