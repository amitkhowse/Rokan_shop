import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { BsTelephone } from 'react-icons/bs';
import { HiLocationMarker } from 'react-icons/hi';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Categories', href: '/categories' },
    { name: 'Blog', href: '/blog' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const customerService = [
    { name: 'FAQs', href: '/faq' },
    { name: 'Shipping Policy', href: '/shipping' },
    { name: 'Return Policy', href: '/returns' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Track Order', href: '/track-order' },
  ];

  const categories = [
    { name: 'Men', href: '/shop?category=men' },
    { name: 'Women', href: '/shop?category=women' },
    { name: 'Accessories', href: '/shop?category=accessories' },
    { name: 'Footwear', href: '/shop?category=footwear' },
    { name: 'New Arrivals', href: '/shop?new=true' },
    { name: 'Sale', href: '/shop?sale=true' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About ROKAN */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">ROKAN</h3>
            <p className="mb-6">
              Your premier destination for fashion-forward clothing and accessories. We bring you the latest trends with quality craftsmanship.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaPinterest size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Customer Service</h3>
            <ul className="space-y-3">
              {customerService.map((service) => (
                <li key={service.name}>
                  <a href={service.href} className="hover:text-white transition">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <HiLocationMarker className="text-gray-400 mt-1 mr-3 flex-shrink-0" />
                <span>123 Fashion Avenue, Trend District, ROKAN City, FC 10001</span>
              </li>
              <li className="flex items-center">
                <BsTelephone className="text-gray-400 mr-3" />
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center">
                <IoMdMail className="text-gray-400 mr-3" />
                <span>support@rokanshop.com</span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-white font-medium mb-3">Newsletter</h4>
              <p className="text-sm mb-3">
                Subscribe to get updates on new arrivals and special offers.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-900"
                />
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-r-md transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="container mx-auto px-4">

        <div className=" w-full border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} ROKAN. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <img src="https://via.placeholder.com/40x25" alt="Visa" className="h-6" />
              <img src="https://via.placeholder.com/40x25" alt="Mastercard" className="h-6" />
              <img src="https://via.placeholder.com/40x25" alt="American Express" className="h-6" />
              <img src="https://via.placeholder.com/40x25" alt="PayPal" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;