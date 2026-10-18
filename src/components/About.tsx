import { motion } from 'framer-motion';
import { Layers, ShieldCheck, Code2, GraduationCap, Trophy, Laptop } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Laptop className="w-6 h-6 text-neonCyan" />,
      title: "Practical Learning",
      desc: "Applying computer science fundamentals directly into functional web prototypes, focusing on solving real-world challenges through hands-on development."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-neonPurple" />,
      title: "Clean Coding Habits",
      desc: "Writing structured, readable, and modular code with disciplined Git version control, reusable components, and clear database schemas."
    },
    {
      icon: <Layers className="w-6 h-6 text-cyan-400" />,
      title: "Full-Stack Mindset",
      desc: "Bridging clean user interfaces in React with solid backend logic, reliable RESTful API communication, and relational databases in MySQL."
    }
  ];

  const quickStats = [
    {
      icon: <GraduationCap className="w-5 h-5 text-neonCyan" />,
      title: "B.Tech CSE",
      subtitle: "Shri Rawatpura Sarkar University"
    },
    {
      icon: <Code2 className="w-5 h-5 text-neonPurple" />,
      title: "Full-Stack Development",
      subtitle: "React, Node.js & MySQL"
    },
    {
      icon: <Trophy className="w-5 h-5 text-yellow-400" />,
      title: "Hackathon Winner",
      subtitle: "DISAHAVERSE Inter-College"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-neonCyan/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 -right-40 w-80 h-80 bg-neonPurple/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold mb-3">
            <span>Background & Mindset</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonCyan via-white to-neonPurple">
              About Me
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            A grounded look at my academic background, technical interests, and engineering approach.
          </p>
        </motion.div>

        {/* Bio & Academic Profile Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">

          {/* Main Bio Card (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-glassBg backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-white/10 hover:border-neonCyan/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Passionate About Building Real-World Web Applications
              </h3>

              <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed">
                <p>
                  I am a <span className="text-white font-semibold">B.Tech Computer Science student</span> at <span className="text-neonCyan font-semibold">Shri Rawatpura Sarkar University</span> with a strong interest in full-stack web development.
                </p>
                <p>
                  My approach to software engineering centers on practical learning and disciplined coding habits. I enjoy developing end-to-end web applications—crafting responsive, accessible user interfaces using <span className="text-neonCyan font-medium">React and Tailwind CSS</span>, and architecting structured relational backends with <span className="text-neonPurple font-medium">MySQL, Node.js, and Python</span>.
                </p>
                <p>
                  Whether leading backend efforts for our college ERP system or working under strict time constraints in hackathons, I focus on writing clear, maintainable code and solving real user problems effectively.
                </p>
              </div>
            </div>

            {/* Quick Badges inside bio card */}
            <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center gap-2.5">
              <span className="text-xs font-mono text-neonCyan bg-neonCyan/10 px-3 py-1 rounded-md border border-neonCyan/20">
                Full-Stack Web Dev
              </span>
              <span className="text-xs font-mono text-neonPurple bg-neonPurple/10 px-3 py-1 rounded-md border border-neonPurple/20">
                Database Design & MySQL
              </span>
              <span className="text-xs font-mono text-gray-300 bg-white/5 px-3 py-1 rounded-md border border-white/10">
                RESTful API Architecture
              </span>
            </div>
          </motion.div>

          {/* Academic & Experience Metric Cards (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between gap-4"
          >
            {quickStats.map((stat) => (
              <motion.div
                key={stat.title}
                whileHover={{ scale: 1.02, x: 4 }}
                transition={{ duration: 0.2 }}
                className="flex-1 p-6 rounded-2xl bg-glassBg backdrop-blur-md border border-white/10 hover:border-neonPurple/40 transition-all duration-300 flex items-center gap-5 shadow-lg"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 shadow-inner">
                  {stat.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-0.5">
                    {stat.title}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {stat.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* 3 Core Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="p-7 rounded-2xl bg-glassBg backdrop-blur-md border border-white/10 hover:border-neonCyan/40 hover:shadow-[0_0_25px_rgba(0,240,255,0.12)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:bg-neonCyan/10 group-hover:border-neonCyan/30 transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-2.5 group-hover:text-neonCyan transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5">
                <span className="text-[11px] font-mono text-gray-500 uppercase tracking-wider group-hover:text-neonCyan/80 transition-colors">
                  Core Principle
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
