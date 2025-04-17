import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Shield, Star, Clock, DollarSign, Settings, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  const featuredCars = [
    {
      name: "Mercedes-Benz S-Class",
      price: "89,900",
      image: "/carstore/a/mercedes-s-class.png",
      specs: "4.0L V8 • 496 HP • Automatic"
    },
    {
      name: "BMW M4 Competition",
      price: "74,500",
      image: "/carstore/a/bmw-m4.jpg",
      specs: "3.0L I6 • 503 HP • Manual"
    },
    {
      name: "Porsche 911 GT3",
      price: "161,100",
      image: "/carstore/a/porsche-911.jpg",
      specs: "4.0L Flat-6 • 502 HP • PDK"
    },
    {
      name: "Tesla Model S Plaid",
      price: "119,990",
      image: "https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg",
      specs: "Electric • 1,020 HP • Automatic"
    }
  ];

  return (
    <main className="container mx-auto px-6 py-16">
      {/* Hero Content */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="md:w-1/2"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Find Your Perfect <span className="text-indigo-500">Drive</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Discover premium vehicles with our curated selection of luxury and performance cars.
          </p>
          <div className="flex space-x-4">
            <Link to="/inventory">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-indigo-600 text-white px-8 py-4 rounded-lg flex items-center space-x-2 hover:bg-indigo-700 transition-colors"
              >
                <span>Browse Inventory</span>
                <ChevronRight className="h-5 w-5" />
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-indigo-500 text-indigo-500 px-8 py-4 rounded-lg flex items-center space-x-2 hover:bg-indigo-500 hover:text-white transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>Contact Sales</span>
              </motion.button>
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="md:w-1/2 mt-12 md:mt-0"
        >
          <img 
            src="/carstore/a/hero-car.png"
            alt="Luxury Car"
            className="rounded-lg shadow-2xl w-full h-auto object-cover"
          />
        </motion.div>
      </div>

      {/* Features Section */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24"
      >
        <div className="bg-slate-800/50 p-8 rounded-lg backdrop-blur-sm hover:bg-slate-800/60 transition-colors">
          <Shield className="h-12 w-12 text-indigo-500 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Verified Vehicles</h3>
          <p className="text-gray-400">Every car in our inventory undergoes rigorous inspection and verification.</p>
        </div>

        <div className="bg-slate-800/50 p-8 rounded-lg backdrop-blur-sm hover:bg-slate-800/60 transition-colors">
          <Star className="h-12 w-12 text-indigo-500 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Premium Selection</h3>
          <p className="text-gray-400">Curated collection of luxury and performance vehicles for discerning buyers.</p>
        </div>

        <div className="bg-slate-800/50 p-8 rounded-lg backdrop-blur-sm hover:bg-slate-800/60 transition-colors">
          <Clock className="h-12 w-12 text-indigo-500 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Quick Process</h3>
          <p className="text-gray-400">Streamlined buying process to get you on the road faster.</p>
        </div>
      </motion.div>

      {/* Featured Cars Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-32"
      >
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Vehicles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCars.map((car, index) => (
            <motion.div
              key={car.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="bg-slate-800/50 rounded-lg overflow-hidden backdrop-blur-sm hover:transform hover:scale-105 transition-transform duration-300"
            >
              <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{car.name}</h3>
                <div className="flex items-center text-indigo-500 mb-2">
                  <DollarSign className="h-5 w-5 mr-1" />
                  <span className="font-bold">{car.price}</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Settings className="h-4 w-4 mr-2" />
                  <span className="text-sm">{car.specs}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-32 mb-16"
      >
        <h2 className="text-4xl font-bold text-white mb-12 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-slate-800/50 p-8 rounded-lg backdrop-blur-sm"
          >
            <div className="flex items-center mb-4">
              <img
                src="/carstore/a/testimonial-1.jpg"
                alt="James Wilson"
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <div>
                <h4 className="text-white font-bold">James Wilson</h4>
                <p className="text-gray-400">BMW M4 Owner</p>
              </div>
            </div>
            <p className="text-gray-300 italic">"The entire process was seamless. From selection to purchase, AutoElite provided exceptional service. My M4 is everything I dreamed of and more."</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-slate-800/50 p-8 rounded-lg backdrop-blur-sm"
          >
            <div className="flex items-center mb-4">
              <img
                src="/carstore/a/testimonial-2.jpg"
                alt="Sarah Chen"
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <div>
                <h4 className="text-white font-bold">Sarah Chen</h4>
                <p className="text-gray-400">Porsche 911 Owner</p>
              </div>
            </div>
            <p className="text-gray-300 italic">"AutoElite's attention to detail and customer service is unmatched. They helped me find the perfect Porsche that exceeded all my expectations."</p>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}

export default Home;