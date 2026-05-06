import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  return (
    <div className="pt-32 pb-24 px-6 bg-gray-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">Get in touch</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6 font-serif">
            Let's plan your <span className="italic text-blue-500">Dream</span> trip
          </h1>
          <p className="text-gray-500 leading-relaxed text-lg">
            Have questions or ready to book? Our travel experts are here to help you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border border-gray-100"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 transition-all text-gray-900 font-medium"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 transition-all text-gray-900 font-medium"
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Your Message</label>
                <textarea
                  className="w-full bg-gray-50 border-none rounded-3xl px-6 py-4 focus:ring-2 focus:ring-blue-500 transition-all text-gray-900 font-medium min-h-[200px]"
                  placeholder="Tell us about the trip you're envisioning..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                />
              </div>
              <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-lg active:scale-95 flex items-center justify-center gap-3">
                Send Inquiry <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>

          {/* Info Panels */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-900 p-8 rounded-[2.5rem] text-white shadow-lg flex flex-col gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Our Studio</h4>
                  <p className="text-white/60 text-sm">123 Adventure Way, NYC</p>
                </div>
              </div>
              <div className="bg-blue-600 p-8 rounded-[2.5rem] text-white shadow-lg flex flex-col gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">WhatsApp Us</h4>
                  <p className="text-white/80 text-sm">Instant support: +1 234 567</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-gray-400 text-xs uppercase font-bold tracking-widest mb-1">Call Us</h4>
                  <p className="text-gray-900 font-bold text-lg">+1 (555) 000-TRAVEL</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-600 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-gray-400 text-xs uppercase font-bold tracking-widest mb-1">Email Us</h4>
                  <p className="text-gray-900 font-bold text-lg">hello@looptravells.com</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video w-full rounded-[3rem] overflow-hidden shadow-inner border border-gray-100 relative group">
              <img 
                src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1000" 
                alt="Map Background" 
                className="w-full h-full object-cover grayscale opacity-40" 
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white px-8 py-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-red-500" />
                  <span className="font-bold text-gray-900">Find us on Maps</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
