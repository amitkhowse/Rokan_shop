import { useState } from 'react';
import { FiHeart, FiShare2, FiShoppingCart, FiChevronLeft } from 'react-icons/fi';
import { FaStar, FaRegStar, FaCheck } from 'react-icons/fa';

const Product = () => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [isWishlist, setIsWishlist] = useState(false);

  const product = {
    id: 1,
    name: 'Premium Denim Jacket',
    price: 89.99,
    originalPrice: 120.00,
    rating: 4.8,
    reviewCount: 124,
    description: 'This premium denim jacket features a classic fit with modern details. Made from 100% organic cotton with reinforced stitching for durability.',
    details: [
      '100% Organic Cotton',
      'Reinforced stitching',
      'Classic fit',
      'Machine wash cold',
      'Made in USA'
    ],
    colors: ['Blue', 'Black', 'Light Wash'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea'
    ]
  };

  const relatedProducts = [
    { id: 2, name: 'Slim Fit Jeans', price: 59.99, image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a' },
    { id: 3, name: 'Casual T-Shirt', price: 29.99, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab' },
    { id: 4, name: 'Canvas Backpack', price: 49.99, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <button className="flex items-center text-gray-600 hover:text-indigo-600 mb-6">
          <FiChevronLeft className="mr-1" /> Back to Shop
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-4">
              <div className="h-96 bg-gray-200 overflow-hidden">
                <img 
                  src={product.images[activeImage]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`h-24 bg-gray-200 rounded-md overflow-hidden ${activeImage === index ? 'ring-2 ring-indigo-500' : ''}`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="flex justify-between items-start">
              <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
              <button 
                onClick={() => setIsWishlist(!isWishlist)}
                className={`p-2 rounded-full ${isWishlist ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
              >
                <FiHeart className={isWishlist ? 'fill-current' : ''} size={20} />
              </button>
            </div>

            <div className="flex items-center mt-2 mb-4">
              <div className="flex text-amber-400 mr-2">
                {[...Array(5)].map((_, i) => (
                  i < Math.floor(product.rating) ? 
                    <FaStar key={i} className="fill-current" size={16} /> : 
                    <FaRegStar key={i} className="fill-current" size={16} />
                ))}
              </div>
              <span className="text-gray-600 text-sm">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <div className="mb-6">
              <span className="text-2xl font-bold text-indigo-600">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-gray-400 line-through ml-2">${product.originalPrice.toFixed(2)}</span>
              )}
              {product.originalPrice && (
                <span className="bg-red-100 text-red-800 text-xs font-medium ml-2 px-2 py-0.5 rounded">
                  {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                </span>
              )}
            </div>

            <p className="text-gray-600 mb-8">{product.description}</p>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-800 mb-2">Color</h3>
              <div className="flex space-x-2">
                {product.colors.map(color => (
                  <button
                    key={color}
                    className="px-4 py-2 border border-gray-300 rounded-md hover:border-indigo-500 hover:text-indigo-600"
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-800 mb-2">Size</h3>
              <div className="flex space-x-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 flex items-center justify-center border rounded-md ${selectedSize === size ? 'border-indigo-500 bg-indigo-50 text-indigo-600' : 'border-gray-300 hover:border-gray-400'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="font-medium text-gray-800 mb-2">Quantity</h3>
              <div className="flex items-center">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-l-md hover:bg-gray-100"
                >
                  -
                </button>
                <div className="w-16 h-10 flex items-center justify-center border-t border-b border-gray-300">
                  {quantity}
                </div>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-r-md hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center">
                <FiShoppingCart className="mr-2" /> Add to Cart
              </button>
              <button className="flex-1 bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50 py-3 px-6 rounded-lg font-medium">
                Buy Now
              </button>
            </div>

            {/* Share Button */}
            <button className="mt-4 flex items-center text-gray-600 hover:text-indigo-600">
              <FiShare2 className="mr-2" /> Share
            </button>
          </div>
        </div>

        {/* Product Details */}
        <div className="mt-16 bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Product Details</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.details.map((detail, index) => (
              <li key={index} className="flex items-start">
                <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-600">{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-xl font-bold text-gray-800 mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map(product => (
              <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-800 mb-1">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-indigo-600">${product.price.toFixed(2)}</span>
                    <button className="text-gray-400 hover:text-indigo-600">
                      <FiHeart size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;