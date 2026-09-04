import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonCyan to-white">About Me</span>
          </h2>

          <div className="bg-glassBg backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-justify md:text-center">
              I am a detail-oriented Full Stack Developer currently pursuing my B.Tech in Computer Science and Engineering at Shri Rawatpura Sarkar University. I specialize in building responsive web applications from the ground up—blending seamless React frontends with robust Firebase and MySQL backends. I thrive in dynamic tech environments where I can build impactful, scalable solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
