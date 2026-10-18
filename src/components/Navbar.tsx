import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Github, Menu, X, Trophy } from 'lucide-react';
import profilePic from '../assets/profile.jpg';
import resumePdf from '../assets/Rajendra_Tiwari_Resume.pdf';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Hackathons', href: '#hackathons', isHighlight: true },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

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
          <div className="flex-shrink-0 cursor-pointer flex items-center gap-3" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src={profilePic} 
              alt="Rajendra Tiwari" 
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-neonCyan shadow-[0_0_10px_rgba(0,240,255,0.5)] hover:shadow-[0_0_15px_rgba(0,240,255,0.8)] transition-shadow duration-300"
            />
            <span className="hidden sm:inline-block font-bold text-sm tracking-wide text-white hover:text-neonCyan transition-colors">
              Rajendra Tiwari
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`transition-colors duration-300 text-sm font-medium flex items-center gap-1.5 ${
                    link.isHighlight 
                      ? 'text-neonCyan hover:text-white font-semibold' 
                      : 'text-gray-300 hover:text-neonCyan'
                  }`}
                >
                  {link.isHighlight && <Trophy className="w-3.5 h-3.5 text-yellow-400" />}
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          {/* Desktop Right Side (Socials & Resume Button) */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="https://linkedin.com/in/rajendra-tiwari-" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white hover:scale-110 transition-all"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/RajendraTiwari715" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white hover:scale-110 transition-all"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-transparent border border-neonCyan text-neonCyan hover:bg-neonCyan hover:text-darkBg transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.5)] hover:shadow-[0_0_25px_rgba(0,240,255,0.8)] font-semibold text-sm"
            >
              Resume
            </a>
          </div>

          {/* Mobile & Tablet Right Side */}
          <div className="flex lg:hidden items-center space-x-3">
            <a 
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 text-xs rounded-full bg-transparent border border-neonCyan text-neonCyan hover:bg-neonCyan hover:text-darkBg transition-all duration-300 shadow-[0_0_10px_rgba(0,240,255,0.5)] font-semibold"
            >
              Resume
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-neonCyan transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-neonCyan" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-darkBg/95 border-b border-white/10 backdrop-blur-2xl overflow-hidden px-4 pt-3 pb-6 shadow-2xl"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                    link.isHighlight
                      ? 'bg-neonCyan/10 text-neonCyan border border-neonCyan/20'
                      : 'text-gray-300 hover:bg-white/5 hover:text-neonCyan'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {link.isHighlight && <Trophy className="w-4 h-4 text-yellow-400" />}
                    {link.name}
                  </span>
                  <span className="text-xs text-gray-600">→</span>
                </a>
              ))}

              <div className="flex items-center gap-4 pt-4 border-t border-white/10 justify-center">
                <a 
                  href="https://linkedin.com/in/rajendra-tiwari-" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-xs text-gray-400 hover:text-white"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <span className="text-gray-700">|</span>
                <a 
                  href="https://github.com/RajendraTiwari715" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-xs text-gray-400 hover:text-white"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
