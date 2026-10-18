import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowRight, Mail } from 'lucide-react';
import profilePic from '../assets/profile.jpg';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Full-Stack Developer";

  const coreSkills = [
    "React.js",
    "JavaScript",
    "Python",
    "Tailwind CSS",
    "MySQL"
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 pb-16">
      {/* Background Grid Pattern & Ambient Glows */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:28px_28px]"></div>
        <div className="absolute left-1/4 top-1/4 -z-10 h-[320px] w-[320px] rounded-full bg-neonCyan/15 blur-[120px]"></div>
        <div className="absolute right-1/4 bottom-1/4 -z-10 h-[320px] w-[320px] rounded-full bg-neonPurple/20 blur-[130px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">

        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">



          {/* Name Header */}
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonCyan via-white to-neonPurple">
              Rajendra Tiwari
            </span>
          </motion.h1>

          {/* Dynamic Role Title */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-200 mb-5 font-mono h-10 flex items-center justify-center lg:justify-start"
          >
            <span className="text-neonCyan">{text}</span>
            <span className="text-neonPurple animate-pulse ml-1">_</span>
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-lg sm:text-xl text-gray-300 mb-7 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
          >
            "Turning complex problems into elegant, scalable, and responsive web solutions with modern technologies and clean architecture."
          </motion.p>

          {/* Clean Tech Stack Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-8 max-w-xl mx-auto lg:mx-0"
          >
            {coreSkills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-xs font-medium rounded-lg bg-glassBg border border-white/10 text-gray-200 hover:border-neonCyan/40 hover:text-neonCyan transition-all duration-200 shadow-sm cursor-default"
              >
                {skill}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons & Clickable Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5"
          >
            {/* Primary Action Buttons */}
            <div className="flex items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neonPurple text-white font-semibold text-sm hover:bg-opacity-90 transition-all duration-300 shadow-[0_0_20px_rgba(176,38,255,0.5)] hover:shadow-[0_0_30px_rgba(176,38,255,0.7)] hover:-translate-y-0.5"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-glassBg border border-white/15 text-gray-200 font-semibold text-sm hover:border-neonCyan hover:text-neonCyan hover:bg-neonCyan/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Clickable Social Media Icons (GitHub & LinkedIn) */}
            <div className="flex items-center gap-2.5 pt-2 sm:pt-0 border-t sm:border-t-0 sm:border-l border-white/10 sm:pl-4">
              <a
                href="https://github.com/RajendraTiwari715"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-neonCyan/40 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-300 hover:-translate-y-0.5"
                title="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://linkedin.com/in/rajendra-tiwari-"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-neonCyan hover:bg-neonCyan/10 hover:border-neonCyan/40 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-300 hover:-translate-y-0.5"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

          </motion.div>
        </div>

        {/* Profile Picture Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -12, 0]
          }}
          transition={{
            duration: 0.9,
            type: "spring",
            bounce: 0.3,
            y: {
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="flex-1 flex justify-center lg:justify-end"
        >
          <div className="relative group perspective-1000">
            {/* Animated glowing border backdrop */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-2.5 rounded-[2.5rem] bg-gradient-to-r from-neonCyan via-neonPurple to-neonCyan opacity-50 blur-xl group-hover:opacity-80 transition duration-1000"
            />

            {/* Image Container with 3D hover effect */}
            <motion.div
              whileHover={{ scale: 1.02, rotateX: 3, rotateY: -3 }}
              className="relative w-64 h-[22rem] sm:w-[300px] sm:h-[400px] md:w-[330px] md:h-[430px] rounded-[2rem] overflow-hidden border-2 border-white/20 bg-glassBg shadow-[0_0_40px_rgba(176,38,255,0.3)]"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <img
                src={profilePic}
                alt="Rajendra Tiwari - Full-Stack Developer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-darkBg/50 via-transparent to-white/10 pointer-events-none" />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
