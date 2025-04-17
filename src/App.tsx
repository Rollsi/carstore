import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Car } from 'lucide-react';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
        <nav className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <Link to="/" className="flex items-center space-x-2">
                <Car className="h-8 w-8 text-indigo-500" />
                <span className="text-2xl font-bold text-white">AutoElite</span>
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex space-x-8 text-gray-300"
            >
              <Link to="/inventory" className="hover:text-indigo-500 transition-colors">Inventory</Link>
              <Link to="/contact" className="hover:text-indigo-500 transition-colors">Contact</Link>
              <Link to="/" className="hover:text-indigo-500 transition-colors">About</Link>
              <Link to="/" className="hover:text-indigo-500 transition-colors">Services</Link>
            </motion.div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;