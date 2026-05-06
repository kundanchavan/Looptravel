import React from 'react';
import { motion } from 'motion/react';
import { Compass, Heart, Users, Target, Globe } from 'lucide-react';

export default function About() {
  const team = [
    { name: 'Marcus Chen', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' },
    { name: 'Elena Rodriguez', role: 'Head of Experiences', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400' },
    { name: 'David Smith', role: 'Travel Curator', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400' },
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="bg-gray-900 py-32 px-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 select-none pointer-events-none">
          <img src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&q=80&w=1000" alt="Abstract Travel" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-900" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl"
          >
            <span className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8">
              We travel to <span className="italic font-serif text-blue-400 font-normal">evolve</span>, not to escape.
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Founded in 2012, Loop Travells began with a simple mission: to reconnect people with the planet through authentic, curated experiences that transcend traditional tourism. 
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-6">
            <div className="w-16 h-16 bg-blue-600 rounded-[2rem] flex items-center justify-center text-white shadow-xl shadow-blue-500/20">
              <Compass className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Purposeful Discovery</h3>
            <p className="text-gray-600 leading-relaxed">We don't just visit places; we engage with them. Every itinerary is designed to bridge cultures and create mutual understanding.</p>
          </div>
          <div className="space-y-6">
            <div className="w-16 h-16 bg-pink-600 rounded-[2rem] flex items-center justify-center text-white shadow-xl shadow-pink-500/20">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Passionate Care</h3>
            <p className="text-gray-600 leading-relaxed">Our concierge team is available 24/7. From the moment you book until you return home, your comfort is our priority.</p>
          </div>
          <div className="space-y-6">
            <div className="w-16 h-16 bg-emerald-600 rounded-[2rem] flex items-center justify-center text-white shadow-xl shadow-emerald-500/20">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Curated Detail</h3>
            <p className="text-gray-600 leading-relaxed">We vet every hotel, route, and guide. If it's not excellent, it's not in your Loop Travells package.</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:row items-end justify-between gap-6 mb-20">
            <div>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">Meet the Minds</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                The experts behind <span className="italic font-serif text-blue-500">your</span> journey
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 bg-white rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden mb-8 relative">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h4>
                <p className="text-blue-600 font-semibold">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6 max-w-7xl mx-auto flex flex-wrap justify-center gap-12 md:gap-24 text-center">
        <div>
          <div className="text-6xl font-black text-gray-900 mb-2">12+</div>
          <div className="text-xs uppercase tracking-widest font-bold text-gray-500">Years of Experience</div>
        </div>
        <div>
          <div className="text-6xl font-black text-gray-900 mb-2">15k</div>
          <div className="text-xs uppercase tracking-widest font-bold text-gray-500">Happy Travelers</div>
        </div>
        <div>
          <div className="text-6xl font-black text-gray-900 mb-2">450+</div>
          <div className="text-xs uppercase tracking-widest font-bold text-gray-500">Curated Tours</div>
        </div>
        <div>
          <div className="text-6xl font-black text-gray-900 mb-2">24/7</div>
          <div className="text-xs uppercase tracking-widest font-bold text-gray-500">Support Availability</div>
        </div>
      </section>
    </div>
  );
}
