import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonCyan to-white">About Me</span>
          </motion.h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Decorative/Abstract Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full relative"
          >
            <div className="relative w-full h-[400px] bg-glassBg backdrop-blur-lg rounded-3xl border border-white/5 overflow-hidden group hover:border-neonCyan/30 transition-colors duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
              {/* Animated abstract shapes inside */}
              <motion.div 
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-20 -left-20 w-64 h-64 bg-neonCyan/20 rounded-full blur-[60px]"
              ></motion.div>
              <motion.div 
                animate={{ rotate: -360, scale: [1, 1.2, 1] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-20 -right-20 w-80 h-80 bg-neonPurple/20 rounded-full blur-[80px]"
              ></motion.div>
              
              <div className="absolute inset-0 flex flex-col justify-center p-8 z-10">
                <h3 className="text-3xl font-bold text-white mb-6">Building The Future.</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-neonCyan/10 flex items-center justify-center border border-neonCyan/30">
                      <span className="text-neonCyan font-bold text-xl">1+</span>
                    </div>
                    <span className="text-gray-300 font-medium">Years of Coding Experience</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-neonPurple/10 flex items-center justify-center border border-neonPurple/30">
                      <span className="text-neonPurple font-bold text-xl">10+</span>
                    </div>
                    <span className="text-gray-300 font-medium">Projects Completed</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6"
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-justify">
              I am a detail-oriented Full Stack Developer currently pursuing my B.Tech in Computer Science and Engineering at Shri Rawatpura Sarkar University. 
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-justify">
              I specialize in building responsive web applications from the ground up—blending seamless <span className="text-neonCyan font-semibold">React frontends</span> with robust <span className="text-neonPurple font-semibold">Firebase and MySQL backends</span>. 
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-justify">
              I thrive in dynamic tech environments where I can build impactful, scalable solutions that solve real-world problems.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
