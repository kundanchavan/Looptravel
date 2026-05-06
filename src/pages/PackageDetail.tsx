import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PACKAGES } from '../constants';
import { 
  Clock, MapPin, Users, CheckCircle2, XCircle, 
  ArrowLeft, Calendar, Share2, Heart, ShieldCheck,
  Plane, Hotel, Coffee
} from 'lucide-react';

export default function PackageDetail() {
  const { id } = useParams();
  const pkg = PACKAGES.find(p => p.id === id);

  if (!pkg) {
    return (
      <div className="pt-32 pb-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Package not found</h2>
        <Link to="/packages" className="text-blue-600 font-bold hover:underline">Return to all packages</Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Header / Banner */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        <div className="absolute bottom-12 left-0 right-0 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:row items-end justify-between gap-6">
            <div className="text-white max-w-2xl">
              <Link to="/packages" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 uppercase tracking-widest font-bold text-xs">
                <ArrowLeft className="w-4 h-4" /> Back to Explorations
              </Link>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">{pkg.title}</h1>
              <div className="flex flex-wrap gap-6 text-sm text-white/90">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span className="font-semibold">{pkg.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="font-semibold">Boutique Stays & Tours</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span className="font-semibold">Groups up to 10</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <button className="w-12 h-12 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-white border border-white/20 hover:bg-white hover:text-gray-900 transition-all">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-white border border-white/20 hover:bg-white hover:text-red-500 transition-all">
                <Heart className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Experience Overview</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{pkg.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <div className="p-6 bg-gray-50 rounded-3xl text-center">
                  <Plane className="w-6 h-6 mx-auto mb-3 text-blue-600" />
                  <span className="text-sm font-bold text-gray-900">Flights Incl.</span>
                </div>
                <div className="p-6 bg-gray-50 rounded-3xl text-center">
                  <Hotel className="w-6 h-6 mx-auto mb-3 text-blue-600" />
                  <span className="text-sm font-bold text-gray-900">4-Star Stays</span>
                </div>
                <div className="p-6 bg-gray-50 rounded-3xl text-center">
                  <Coffee className="w-6 h-6 mx-auto mb-3 text-blue-600" />
                  <span className="text-sm font-bold text-gray-900">Breakfasts</span>
                </div>
                <div className="p-6 bg-gray-50 rounded-3xl text-center">
                  <ShieldCheck className="w-6 h-6 mx-auto mb-3 text-blue-600" />
                  <span className="text-sm font-bold text-gray-900">Verified Partner</span>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-4">
                The <span className="italic font-serif text-blue-600">Journey</span>
              </h2>
              <div className="space-y-6 relative before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-100">
                {pkg.itinerary.map((step, idx) => (
                  <div key={idx} className="relative pl-12">
                    <div className="absolute left-0 top-0 w-9 h-9 bg-white border-2 border-blue-600 rounded-full flex items-center justify-center font-bold text-sm text-blue-600 z-10">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Day {idx + 1}</h4>
                      <p className="text-gray-600 leading-relaxed">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section className="bg-emerald-50/30 p-8 rounded-[2.5rem] border border-emerald-100">
                <h3 className="text-xl font-bold text-emerald-900 mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" /> Inclusions
                </h3>
                <ul className="space-y-4">
                  {pkg.inclusions.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-emerald-800 text-sm font-medium">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="bg-red-50/30 p-8 rounded-[2.5rem] border border-red-100">
                <h3 className="text-xl font-bold text-red-900 mb-6 flex items-center gap-2">
                  <XCircle className="w-5 h-5" /> Exclusions
                </h3>
                <ul className="space-y-4">
                  {pkg.exclusions.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-red-800 text-sm font-medium">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-gray-900 rounded-[2.5rem] p-10 text-white shadow-2xl overflow-hidden">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <div className="mb-8">
                  <span className="text-blue-400 uppercase tracking-widest font-bold text-xs block mb-2">Total investment</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-black tracking-tight">${pkg.price}</span>
                    <span className="text-gray-400">/ traveler</span>
                  </div>
                </div>

                <div className="space-y-6 mb-10">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-white/50">Select Date</label>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-blue-400" />
                      <span className="font-medium">Aug 15 - Aug 22, 2024</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-white/50">Travelers</label>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-blue-400" />
                        <span className="font-medium">2 Adults</span>
                      </div>
                      <button className="text-xs uppercase tracking-widest font-bold text-blue-400">Change</button>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-lg active:scale-95 flex items-center justify-center gap-3 mb-6">
                  Confirm Booking
                </button>
                
                <p className="text-center text-white/40 text-xs leading-relaxed">
                  Secure checkout powered by Stripe. <br /> No hidden fees or unexpected taxes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
