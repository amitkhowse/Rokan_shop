import { useState } from 'react';
import { FiFilter, FiX, FiStar, FiShoppingCart } from 'react-icons/fi';
import { FaStar, FaRegStar } from 'react-icons/fa';

const Shop = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 500]);

  const products = [
    { id: 1, name: 'Classic White T-Shirt', price: 29.99, category: 'Men', rating: 4.5, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab' },
    { id: 2, name: 'Slim Fit Jeans', price: 59.99, category: 'Women', rating: 4.2, image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a' },
    { id: 3, name: 'Leather Crossbody Bag', price: 89.99, category: 'Accessories', rating: 4.8, image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7' },
    { id: 4, name: 'Running Sneakers', price: 79.99, category: 'Footwear', rating: 4.6, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff' },
    { id: 5, name: 'Wool Winter Coat', price: 199.99, category: 'Women', rating: 4.9, image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9' },
    { id: 6, name: 'Casual Blazer', price: 129.99, category: 'Men', rating: 4.3, image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e4' },
    { id: 7, name: 'Silk Scarf', price: 39.99, category: 'Accessories', rating: 4.7, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea' },
    { id: 8, name: 'Canvas Backpack', price: 49.99, category: 'Accessories', rating: 4.4, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62' },
  ];

  const categories = ['All', 'Men', 'Women', 'Accessories', 'Footwear'];

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesPrice;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile Filters Button */}
          <button 
            onClick={() => setShowFilters(true)}
            className="md:hidden flex items-center justify-center bg-white py-3 px-4 rounded-lg shadow-sm border border-gray-200"
          >
            <FiFilter className="mr-2" /> Filters
          </button>

          {/* Filters Sidebar */}
          <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden ${showFilters ? 'block' : 'hidden'}`}>
            <div className="absolute right-0 top-0 h-full w-4/5 bg-white p-6 overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Filters</h3>
                <button onClick={() => setShowFilters(false)}>
                  <FiX size={24} />
                </button>
              </div>
              
              <div className="mb-8">
                <h4 className="font-medium text-gray-800 mb-3">Categories</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`block w-full text-left px-3 py-2 rounded ${activeCategory === category ? 'bg-indigo-100 text-indigo-800' : 'hover:bg-gray-100'}`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-medium text-gray-800 mb-3">Price Range</h4>
                <div className="px-2">
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between mt-2">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setShowFilters(false)}
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium"
              >
                Apply Filters
              </button>
            </div>
          </div>

          {/* Desktop Filters */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-xl shadow-sm sticky top-4">
              <h3 className="text-lg font-bold mb-6">Filters</h3>
              
              <div className="mb-8">
                <h4 className="font-medium text-gray-800 mb-3">Categories</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`block w-full text-left px-3 py-2 rounded ${activeCategory === category ? 'bg-indigo-100 text-indigo-800' : 'hover:bg-gray-100'}`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-medium text-gray-800 mb-3">Price Range</h4>
                <div className="px-2">
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between mt-2">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                {activeCategory === 'All' ? 'All Products' : activeCategory}
                <span className="text-gray-500 text-sm font-normal ml-2">({filteredProducts.length} items)</span>
              </h2>
              <div className="flex items-center">
                <select className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Customer Rating</option>
                </select>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                <h3 className="text-lg font-medium text-gray-800 mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your filters to find what you're looking for</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
                    <div className="h-48 bg-gray-200 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-gray-800">{product.name}</h3>
                        <span className="font-semibold text-indigo-600">${product.price.toFixed(2)}</span>
                      </div>
                      <div className="flex items-center mt-2">
                        <div className="flex text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            i < Math.floor(product.rating) ? 
                              <FaStar key={i} className="fill-current" size={14} /> : 
                              <FaRegStar key={i} className="fill-current" size={14} />
                          ))}
                        </div>
                        <span className="text-gray-500 text-sm ml-1">{product.rating}</span>
                      </div>
                      <button className="mt-4 w-full flex items-center justify-center bg-gray-100 hover:bg-indigo-600 hover:text-white text-gray-800 py-2 rounded-lg transition">
                        <FiShoppingCart className="mr-2" /> Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;