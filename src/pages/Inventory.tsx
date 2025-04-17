import { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Settings, Filter, Search, Tag } from 'lucide-react';

function Inventory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('all');
  const [category, setCategory] = useState('all');

  const cars = [
    {
      name: "Mercedes-Benz S-Class",
      price: "89,900",
      image: "/carstore/a/mercedes-s-class.png",
      specs: "4.0L V8 • 496 HP • Automatic",
      category: "luxury",
      status: "Available"
    },
    {
      name: "BMW M4 Competition",
      price: "74,500",
      image: "/carstore/a/bmw-m4.jpg",
      specs: "3.0L I6 • 503 HP • Manual",
      category: "sports",
      status: "Available"
    },
    {
      name: "Porsche 911 GT3",
      price: "161,100",
      image: "/carstore/a/porsche-911.jpg",
      specs: "4.0L Flat-6 • 502 HP • PDK",
      category: "sports",
      status: "Reserved"
    },
    {
      name: "Audi RS e-tron GT",
      price: "139,900",
      image: "/carstore/a/pexels-photo-170811.jpg",
      specs: "Electric • 637 HP • Automatic",
      category: "electric",
      status: "Available"
    },
    {
      name: "Lamborghini Huracán",
      price: "206,295",
      image: "/carstore/a/hero-car.png",
      specs: "5.2L V10 • 630 HP • Automatic",
      category: "supercar",
      status: "Available"
    },
    {
      name: "Tesla Model S Plaid",
      price: "119,990",
      image: "https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg",
      specs: "Electric • 1,020 HP • Automatic",
      category: "electric",
      status: "Sold"
    }
  ];

  const filteredCars = cars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = priceRange === 'all' || 
      (priceRange === 'under100k' && parseInt(car.price.replace(/,/g, '')) < 100000) ||
      (priceRange === 'over100k' && parseInt(car.price.replace(/,/g, '')) >= 100000);
    const matchesCategory = category === 'all' || car.category === category;
    return matchesSearch && matchesPrice && matchesCategory;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-6 py-12"
    >
      <h1 className="text-4xl font-bold text-white mb-8">Available Inventory</h1>
      
      {/* Filters */}
      <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search vehicles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="text-gray-400 h-5 w-5" />
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="bg-slate-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="all">All Prices</option>
                <option value="under100k">Under $100,000</option>
                <option value="over100k">$100,000+</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <Tag className="text-gray-400 h-5 w-5" />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="bg-slate-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="all">All Categories</option>
                <option value="luxury">Luxury</option>
                <option value="sports">Sports</option>
                <option value="electric">Electric</option>
                <option value="supercar">Supercar</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Cars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCars.map((car, index) => (
          <motion.div
            key={car.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-slate-800/50 rounded-lg overflow-hidden backdrop-blur-sm hover:transform hover:scale-105 transition-transform duration-300"
          >
            <div className="relative">
              <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
              <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${
                car.status === 'Available' ? 'bg-green-500' :
                car.status === 'Reserved' ? 'bg-yellow-500' :
                'bg-red-500'
              } text-white`}>
                {car.status}
              </div>
            </div>
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
              <div className="mt-2">
                <span className="inline-block px-2 py-1 text-xs font-semibold bg-slate-700 text-gray-300 rounded">
                  {car.category.charAt(0).toUpperCase() + car.category.slice(1)}
                </span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`mt-4 w-full py-2 rounded-lg transition-colors ${
                  car.status === 'Available' 
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    : 'bg-slate-700 text-gray-400 cursor-not-allowed'
                }`}
                disabled={car.status !== 'Available'}
              >
                {car.status === 'Available' ? 'View Details' : car.status}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Inventory;