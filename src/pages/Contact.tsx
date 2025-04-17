import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-6 py-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-800/50 p-8 rounded-lg backdrop-blur-sm"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2" htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2" htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2" htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="+251 91 234 5678"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Tell us about your dream car..."
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-indigo-700 transition-colors"
            >
              <Send className="h-5 w-5" />
              <span>Send Message</span>
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-gray-300">
                <Phone className="h-6 w-6 text-indigo-500" />
                <span>+251 91 234 5678</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-300">
                <Mail className="h-6 w-6 text-indigo-500" />
                <span>contact@autoelite.com</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-300">
                <MapPin className="h-6 w-6 text-indigo-500" />
                <span>123 Luxury Lane, Beverly Hills, CA 90210</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-300">
                <Clock className="h-6 w-6 text-indigo-500" />
                <span>Mon-Sat: 9:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 p-8 rounded-lg backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">Schedule a Visit</h3>
            <p className="text-gray-300 mb-6">
              Want to see our vehicles in person? Schedule a visit to our showroom and one of our specialists will be happy to assist you.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Book Appointment
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Contact;