import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 shadow-md backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-9 h-9 rounded-lg bg-teal-900/30 flex items-center justify-center mr-2">
              <Shield className="w-5 h-5 text-teal-400" />
            </div>
            <span className="text-xl font-bold text-white">Cypher<span className="text-teal-400">Nexsus</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/' ? 'text-teal-400' : 'text-slate-300 hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/dashboard" 
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/dashboard' ? 'text-teal-400' : 'text-slate-300 hover:text-white'
              }`}
            >
              Platform Demo
            </Link>
            <a href="#features" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Investor Info
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center text-slate-300 hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-slate-900 border-b border-slate-800"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container-custom py-4 space-y-3">
            <Link 
              to="/" 
              className={`block py-2 text-base font-medium ${
                location.pathname === '/' ? 'text-teal-400' : 'text-slate-300 hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/dashboard" 
              className={`block py-2 text-base font-medium ${
                location.pathname === '/dashboard' ? 'text-teal-400' : 'text-slate-300 hover:text-white'
              }`}
            >
              Platform Demo
            </Link>
            <a 
              href="#features" 
              className="block py-2 text-base font-medium text-slate-300 hover:text-white"
            >
              Features
            </a>
            <a 
              href="#" 
              className="block py-2 text-base font-medium text-slate-300 hover:text-white"
            >
              Investor Info
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;