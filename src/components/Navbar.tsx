import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github } from 'lucide-react';
import profilePic from '../assets/profile.jpg';
import resumePdf from '../assets/Rajendra_Tiwari_Resume.pdf';

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
          
          {/* Logo / Profile Pic */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <img 
              src={profilePic} 
              alt="Rajendra Tiwari" 
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-neonCyan shadow-[0_0_10px_rgba(0,240,255,0.5)] hover:shadow-[0_0_15px_rgba(0,240,255,0.8)] transition-shadow duration-300"
            />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-baseline space-x-8">
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
          
          {/* Desktop Resume Button */}
          <div className="hidden md:block">
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bg-transparent border border-neonCyan text-neonCyan hover:bg-neonCyan hover:text-darkBg transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.5)] hover:shadow-[0_0_25px_rgba(0,240,255,0.8)] font-semibold"
            >
              Resume
            </a>
          </div>

          {/* Mobile Right Side (Icons & Resume) */}
          <div className="flex md:hidden items-center space-x-4">
            <a href="https://linkedin.com/in/rajendra-tiwari-" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/RajendraTiwari715" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 text-sm rounded-full bg-transparent border border-neonCyan text-neonCyan hover:bg-neonCyan hover:text-darkBg transition-all duration-300 shadow-[0_0_10px_rgba(0,240,255,0.5)] font-semibold"
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
