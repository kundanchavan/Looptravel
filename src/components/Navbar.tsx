import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Compass, User, LogOut } from 'lucide-react';
import { cn } from '../lib/utils';
import { useAuth } from '../hooks/useAuth';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user, logout, setIsAuthModalOpen } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Packages', path: '/packages' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Compass className={cn('w-8 h-8', scrolled ? 'text-blue-600' : 'text-white')} />
          <span className={cn('text-2xl font-bold tracking-tight', scrolled ? 'text-gray-900' : 'text-white')}>
            Loop<span className="text-blue-500">Travells</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium transition-colors hover:text-blue-500',
                scrolled
                  ? location.pathname === link.path ? 'text-blue-600' : 'text-gray-600'
                  : location.pathname === link.path ? 'text-blue-400' : 'text-white/90'
              )}
            >
              {link.name}
            </Link>
          ))}
          
          {user ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <User className="w-4 h-4" />
                </div>
                <span className={cn('text-sm font-semibold', scrolled ? 'text-gray-900' : 'text-white')}>
                  {user.name}
                </span>
              </div>
              <button 
                onClick={logout}
                className={cn(
                  'p-2 rounded-full transition-colors',
                  scrolled ? 'hover:bg-gray-100 text-gray-600' : 'hover:bg-white/10 text-white'
                )}
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <button 
              onClick={() => setIsAuthModalOpen(true)}
              className={cn(
                'px-5 py-2 rounded-full text-sm font-semibold transition-all',
                scrolled 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-white text-gray-900 hover:bg-gray-100'
              )}
            >
              Login
            </button>
          )}
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={scrolled ? 'text-gray-900' : 'text-white'} />
          ) : (
            <Menu className={scrolled ? 'text-gray-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t md:hidden flex flex-col p-6 gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-lg font-medium py-2 border-b border-gray-50',
                  location.pathname === link.path ? 'text-blue-600' : 'text-gray-600'
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            {user ? (
              <div className="flex flex-col gap-4 mt-4">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <User className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-gray-900">{user.name}</span>
                </div>
                <button 
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="bg-gray-100 text-gray-600 px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
                >
                  <LogOut className="w-5 h-5" /> Logout
                </button>
              </div>
            ) : (
              <button 
                onClick={() => {
                  setIsAuthModalOpen(true);
                  setIsOpen(false);
                }}
                className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold mt-4"
              >
                Login
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
