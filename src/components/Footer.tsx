import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <section id="contact" className="relative border-t border-white/10 bg-black/50 pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-neonCyan rounded-full blur-[120px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Let's Build Something <span className="text-neonCyan">Awesome.</span>
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Currently looking for new opportunities and open to exciting projects. My inbox is always open!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            whileHover={{ y: -5 }}
            className="flex flex-col items-center p-6 bg-glassBg rounded-2xl border border-white/5"
          >
            <div className="w-12 h-12 rounded-full bg-neonPurple/20 flex items-center justify-center mb-4">
              <Mail className="text-neonPurple w-6 h-6" />
            </div>
            <h3 className="text-white font-medium mb-2">Email</h3>
            <a href="mailto:rajendratiwari715@gmail.com" className="text-gray-400 hover:text-neonCyan transition-colors">
              rajendratiwari715@gmail.com
            </a>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="flex flex-col items-center p-6 bg-glassBg rounded-2xl border border-white/5"
          >
            <div className="w-12 h-12 rounded-full bg-neonCyan/20 flex items-center justify-center mb-4">
              <Phone className="text-neonCyan w-6 h-6" />
            </div>
            <h3 className="text-white font-medium mb-2">Phone</h3>
            <a href="tel:+919407784182" className="text-gray-400 hover:text-neonCyan transition-colors">
              +91 9407784182
            </a>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="flex flex-col items-center p-6 bg-glassBg rounded-2xl border border-white/5"
          >
            <div className="w-12 h-12 rounded-full bg-neonPurple/20 flex items-center justify-center mb-4">
              <MapPin className="text-neonPurple w-6 h-6" />
            </div>
            <h3 className="text-white font-medium mb-2">Location</h3>
            <span className="text-gray-400">
              Raipur, Chhattisgarh
            </span>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
          <p className="text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} Rajendra Tiwari. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="https://linkedin.com/in/rajendra-tiwari-" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/RajendraTiwari715" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
