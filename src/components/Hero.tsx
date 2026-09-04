import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile.jpg';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Full Stack Developer";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Futuristic Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-neonPurple opacity-20 blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left mt-8 md:mt-0">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonCyan to-neonPurple">Rajendra Tiwari</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl md:text-3xl font-medium text-gray-300 mb-6 h-10 md:h-auto"
          >
            {text}<span className="animate-pulse">_</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto md:mx-0"
          >
            Turning complex problems into elegant, scalable, and responsive web solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row justify-center md:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-neonPurple text-white font-bold hover:bg-opacity-90 transition-all duration-300 shadow-[0_0_15px_rgba(176,38,255,0.6)] hover:shadow-[0_0_30px_rgba(176,38,255,0.8)] hover:-translate-y-1"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-transparent border-2 border-gray-500 text-gray-300 font-bold hover:border-neonCyan hover:text-neonCyan transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:-translate-y-1"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative group">
            {/* Animated glowing border effect */}
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-neonCyan to-neonPurple opacity-70 blur-lg group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-glow"></div>

            {/* Image Container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[2rem] overflow-hidden border-2 border-white/10 bg-glassBg">
              <img
                src={profilePic}
                alt="Rajendra Tiwari"
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
