import { motion } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';

const Categories = () => {
  const categories = [
    {
      name: 'Men',
      subcategories: ['T-Shirts', 'Shirts', 'Jeans', 'Jackets', 'Activewear'],
      image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9'
    },
    {
      name: 'Women',
      subcategories: ['Dresses', 'Tops', 'Skirts', 'Jeans', 'Activewear'],
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b'
    },
    {
      name: 'Accessories',
      subcategories: ['Bags', 'Watches', 'Jewelry', 'Hats', 'Sunglasses'],
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea'
    },
    {
      name: 'Footwear',
      subcategories: ['Sneakers', 'Boots', 'Sandals', 'Formal', 'Athletic'],
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff'
    },
    {
      name: 'Kids',
      subcategories: ['Boys', 'Girls', 'Baby', 'Toys', 'Accessories'],
      image: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308'
    },
    {
      name: 'Home & Living',
      subcategories: ['Bedding', 'Bath', 'Decor', 'Kitchen', 'Furniture'],
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba'
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Shop by Category</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative rounded-xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-20 transition"></div>
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white">{category.name}</h2>
                  <div className="mt-2">
                    {category.subcategories.slice(0, 3).map(sub => (
                      <span key={sub} className="inline-block bg-white bg-opacity-20 text-white text-sm px-2 py-1 rounded mr-2 mb-2">
                        {sub}
                      </span>
                    ))}
                    {category.subcategories.length > 3 && (
                      <span className="inline-block bg-white bg-opacity-20 text-white text-sm px-2 py-1 rounded">
                        +{category.subcategories.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                <a 
                  href={`/shop?category=${category.name.toLowerCase()}`}
                  className="flex items-center text-white font-medium group-hover:underline"
                >
                  Shop Now <FiChevronRight className="ml-1 group-hover:translate-x-1 transition" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;