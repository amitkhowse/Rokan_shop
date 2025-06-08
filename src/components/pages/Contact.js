import React from "react";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form className="grid grid-cols-1 gap-y-6">
            <div>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                placeholder="Your Name"
                required
                className="block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="Your Email"
                required
                className="block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
              />
            </div>

            <div>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Your Message"
                required
                className="block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
              />
            </div>

            <div>
              <button
                type="submit"
                className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Contact Details */}
          <div className="flex flex-col space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Get in touch</h3>
              <p className="text-gray-600 dark:text-gray-300">
                📍 Address: 123 Market Street, Cityname, Country
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                📞 Phone: +1 234 567 890
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                📧 Email: contact@factionstore.com
              </p>
            </div>

            <div className="h-64 w-full overflow-hidden rounded-lg shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573291234!2d-73.98784492416405!3d40.74844097138988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="ROKAN Location Map"
            ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;