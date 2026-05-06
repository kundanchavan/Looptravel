import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, Calendar, Users, ArrowRight, ShieldCheck, Globe, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PACKAGES } from '../constants';
import { cn } from '../lib/utils';

import { CardStack } from '../components/ui/card-stack';

export default function Home() {
  const [search, setSearch] = useState({ destination: '', date: '', guests: '1' });

  const featuredItems = PACKAGES.filter(p => p.featured).map(pkg => ({
    id: pkg.id,
    title: pkg.title,
    description: pkg.description,
    imageSrc: pkg.image,
    href: `/package/${pkg.id}`,
    tag: pkg.category === 'domestic' ? 'Domestic' : 'International'
  }));

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 1, scale: 1.05 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1506929113670-bc4389c58b5c?auto=format&fit=crop&q=80&w=2000"
            alt="Hero Background"
            className="w-full h-full object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          {/* Floating Images */}
          <div className="absolute inset-0 pointer-events-none select-none overflow-visible">
            {[
              {
                src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400",
                className: "absolute -top-24 -left-48 w-32 h-44 md:w-48 md:h-64 rounded-3xl rotate-[-12deg] hidden lg:block",
                duration: 4
              },
              {
                src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=400",
                className: "absolute top-10 -right-56 w-36 h-48 md:w-52 md:h-64 rounded-3xl rotate-[15deg] hidden lg:block",
                duration: 5
              },
              {
                src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&q=80&w=400",
                className: "absolute -bottom-20 -left-64 w-40 h-40 md:w-56 md:h-56 rounded-full rotate-[8deg] hidden lg:block",
                duration: 6
              },
              {
                src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=400",
                className: "absolute -bottom-32 -right-48 w-44 h-56 md:w-64 md:h-80 rounded-3xl rotate-[-10deg] hidden lg:block",
                duration: 5.5
              }
            ].map((img, i) => (
              <motion.div
                key={i}
                className={img.className}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ 
                  opacity: 0.6, 
                  scale: 1, 
                  y: [20, -10, 20],
                }}
                transition={{
                  opacity: { duration: 1, delay: 0.5 + i * 0.2 },
                  scale: { duration: 1, delay: 0.5 + i * 0.2 },
                  y: {
                    duration: img.duration,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <img src={img.src} alt="" className="w-full h-full object-cover rounded-[inherit] shadow-2xl border-4 border-white/20" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.3
                }
              }
            }}
          >
            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-8xl font-bold tracking-tight mb-6 leading-[1.1]"
            >
              Explore the World <br />
              <span className="text-blue-400">One Adventure</span> at a Time
            </motion.h1>
            
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12"
            >
              Discover breathtaking destinations, curated experiences, and unforgettable memories with Loop Travells.
            </motion.p>

            {/* Float-up Search Bar */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="relative rounded-3xl shadow-2xl max-w-4xl mx-auto overflow-hidden group"
            >
              {/* Image Background for Search Bar */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1200" 
                  alt="Search background" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 backdrop-blur-xl" />
              </div>

              <div className="relative z-10 p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-start px-4 py-2 border-r border-white/10">
                  <span className="text-[10px] uppercase tracking-widest text-white/60 mb-1 flex items-center gap-1 font-bold">
                    <MapPin className="w-3 h-3" /> Destination
                  </span>
                  <input
                    type="text"
                    placeholder="Where to?"
                    className="bg-transparent border-none text-white placeholder:text-white/40 focus:ring-0 w-full font-medium"
                    value={search.destination}
                    onChange={(e) => setSearch({ ...search, destination: e.target.value })}
                  />
                </div>
                <div className="flex flex-col items-start px-4 py-2 border-r border-white/10">
                  <span className="text-[10px] uppercase tracking-widest text-white/60 mb-1 flex items-center gap-1 font-bold">
                    <Calendar className="w-3 h-3" /> Date
                  </span>
                  <input
                    type="date"
                    className="bg-transparent border-none text-white focus:ring-0 w-full font-medium [color-scheme:dark]"
                    value={search.date}
                    onChange={(e) => setSearch({ ...search, date: e.target.value })}
                  />
                </div>
                <div className="flex flex-col items-start px-4 py-2 border-r border-white/10">
                  <span className="text-[10px] uppercase tracking-widest text-white/60 mb-1 flex items-center gap-1 font-bold">
                    <Users className="w-3 h-3" /> Guests
                  </span>
                  <select
                    className="bg-transparent border-none text-white focus:ring-0 w-full font-medium appearance-none cursor-pointer"
                    value={search.guests}
                    onChange={(e) => setSearch({ ...search, guests: e.target.value })}
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="4">4+ People</option>
                  </select>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-2xl flex items-center justify-center gap-2 font-bold transition-all transform active:scale-95 py-4 md:py-0">
                  <Search className="w-5 h-5" />
                  Search
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:row items-end justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">Top Destinations</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Popular <span className="italic font-serif text-blue-500">Pickups</span> for you
            </h2>
          </div>
          <Link to="/packages" className="group flex items-center gap-2 text-gray-600 font-semibold hover:text-blue-600 transition-colors">
            View All Packages <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <CardStack
            items={featuredItems}
            autoAdvance
            intervalMs={4000}
            cardWidth={700}
            cardHeight={400}
            overlap={0.55}
            perspectivePx={1500}
            depthPx={100}
            className="max-w-7xl mx-auto"
          />
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-[2rem] overflow-hidden aspect-square shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1000"
                alt="Travel Experience"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating stats block */}
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl z-20 max-w-[240px] border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 overflow-hidden">15k+</div>
                  <div className="text-xs text-gray-500 font-medium">Happy Travelers</div>
                </div>
              </div>
              <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 w-[85%]" />
              </div>
            </div>
          </div>

          <div>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">Why Choose Loop Travells</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
              Crafting <span className="italic font-serif text-blue-500">Unforgettable</span> Memories Since 2012
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center shrink-0">
                  <Globe className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Global Network</h4>
                  <p className="text-gray-500 leading-relaxed">Access to exclusive destinations and partnerships worldwide, ensuring you get the best local insights.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-7 h-7 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Safe & Reliable</h4>
                  <p className="text-gray-500 leading-relaxed">Your safety is our priority. We work with verified partners and offer 24/7 support during your journey.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center shrink-0">
                  <Star className="w-7 h-7 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Premium Experience</h4>
                  <p className="text-gray-500 leading-relaxed">From luxury transfers to curated boutique stays, we handle every detail so you can just enjoy.</p>
                </div>
              </div>
            </div>

            <button className="mt-12 bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all">
              Discover Our Story
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 text-center max-w-5xl mx-auto">
        <div className="bg-blue-600 rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
          {/* Abstract blobs */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-black/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Ready to start your next <br className="hidden md:block" /> great adventure?
            </h2>
            <p className="text-white/80 mb-12 text-lg max-w-xl mx-auto leading-relaxed">
              Join 15,000+ travelers who have already explored the world with us. Get exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border border-white/20 text-white placeholder:text-white/60 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-white/40 grow text-lg"
              />
              <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
