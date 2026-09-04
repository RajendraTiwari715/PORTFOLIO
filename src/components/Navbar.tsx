import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import profilePic from '../assets/profile.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 bg-glassBg backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <img 
              src={profilePic} 
              alt="Rajendra Tiwari" 
              className="w-12 h-12 rounded-full object-cover border-2 border-neonCyan shadow-[0_0_10px_rgba(0,240,255,0.5)] hover:shadow-[0_0_15px_rgba(0,240,255,0.8)] transition-shadow duration-300"
            />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-300 hover:text-neonCyan transition-colors duration-300 text-sm font-medium"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <a
              href="/Rajendra_Tiwari_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bg-transparent border border-neonCyan text-neonCyan hover:bg-neonCyan hover:text-darkBg transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.5)] hover:shadow-[0_0_25px_rgba(0,240,255,0.8)] font-semibold"
            >
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-darkBg/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col items-center">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-neonCyan block px-3 py-4 rounded-md text-lg font-medium w-full text-center"
                >
                  {link}
                </a>
              ))}
              <a
                href="/Rajendra_Tiwari_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-4 px-8 py-3 rounded-full bg-transparent border-2 border-neonCyan text-neonCyan hover:bg-neonCyan hover:text-darkBg transition-all duration-300 font-bold"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
