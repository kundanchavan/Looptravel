import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, Star, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PACKAGES } from '../constants';
import { cn } from '../lib/utils';

export default function Packages() {
  const [activeTab, setActiveTab] = useState<'all' | 'domestic' | 'international'>('all');

  const filteredPackages = activeTab === 'all' 
    ? PACKAGES 
    : PACKAGES.filter(p => p.category === activeTab);

  return (
    <div className="pt-32 pb-24 px-6 bg-gray-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">Curated Tours</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6 font-serif">
            Unforgettable <span className="italic text-blue-500">Packages</span>
          </h1>
          <p className="text-gray-500 leading-relaxed text-lg">
            Choose from our range of hand-picked domestic and international tours designed to provide the ultimate travel experience.
          </p>
        </div>

        {/* Tabs & Filter */}
        <div className="flex flex-col md:row items-center justify-center gap-4 mb-12">
          <div className="bg-white p-1.5 rounded-2xl shadow-sm border border-gray-100 flex gap-2">
            {(['all', 'domestic', 'international'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  'px-6 py-2.5 rounded-xl text-sm font-bold transition-all uppercase tracking-wider',
                  activeTab === tab 
                    ? 'bg-gray-900 text-white shadow-md' 
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredPackages.map((pkg) => (
              <motion.div
                key={pkg.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-[2rem] overflow-hidden shadow-md hover:shadow-2xl transition-all border border-gray-100 flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-gray-900 shadow-sm">
                    {pkg.category === 'domestic' ? 'Domestic' : 'International'}
                  </div>
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <div className="bg-gray-900/40 backdrop-blur text-white px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-blue-300" />
                      {pkg.duration}
                    </div>
                  </div>
                </div>

                <div className="p-8 flex flex-col grow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
                      {pkg.title}
                    </h3>
                    <div className="flex items-center gap-1 text-amber-500 bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-100">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-bold">4.8</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span>Popular Location</span>
                  </div>

                  <p className="text-gray-500 text-sm mb-8 line-clamp-2 leading-relaxed">
                    {pkg.description}
                  </p>

                  <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-400 block uppercase font-bold tracking-wider mb-1">Price per person</span>
                      <span className="text-3xl font-black text-gray-900 tracking-tight">${pkg.price}</span>
                    </div>
                    <Link
                      to={`/package/${pkg.id}`}
                      className="bg-gray-900 text-white w-14 h-14 rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-all group-hover:shadow-lg active:scale-95"
                    >
                      <ArrowRight className="w-6 h-6" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
