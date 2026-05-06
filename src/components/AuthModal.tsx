import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Lock, User } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export default function AuthModal() {
  const { isAuthModalOpen, setIsAuthModalOpen, login } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email);
  };

  return (
    <AnimatePresence>
      {isAuthModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsAuthModalOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-md rounded-[2.5rem] p-10 shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6">
              <button 
                onClick={() => setIsAuthModalOpen(false)}
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {isLogin ? 'Welcome Back' : 'Join the Loop'}
              </h2>
              <p className="text-gray-500">
                {isLogin ? 'Start your next adventure today' : 'Create an account to save explorations'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-4">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      className="w-full bg-gray-50 border-none rounded-2xl pl-14 pr-6 py-4 focus:ring-2 focus:ring-blue-500 transition-all text-gray-900 font-medium"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>
              )}
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-4">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    className="w-full bg-gray-50 border-none rounded-2xl pl-14 pr-6 py-4 focus:ring-2 focus:ring-blue-500 transition-all text-gray-900 font-medium"
                    placeholder="hello@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-4">Password</label>
                <div className="relative">
                  <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    className="w-full bg-gray-50 border-none rounded-2xl pl-14 pr-6 py-4 focus:ring-2 focus:ring-blue-500 transition-all text-gray-900 font-medium"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <button className="w-full bg-gray-900 text-white py-5 rounded-2xl font-black text-xl hover:bg-blue-600 transition-all shadow-lg active:scale-95">
                {isLogin ? 'Sign In' : 'Create Account'}
              </button>
            </form>

            <div className="mt-10 text-center">
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="text-gray-500 text-sm font-medium hover:text-blue-600 transition-colors"
              >
                {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Log in'}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
