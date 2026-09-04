import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile.jpg';

const Navbar = () => {
  const navLinks = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

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
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
