import { motion } from 'framer-motion';
import { Code2, Database, Terminal, Sparkles } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      subtitle: "UI & Client-Side",
      icon: <Code2 className="w-6 h-6 text-neonCyan" />,
      accentColor: "border-neonCyan/30 group-hover:border-neonCyan/60",
      glowColor: "group-hover:shadow-[0_0_30px_rgba(0,240,255,0.18)]",
      skills: [
        "React.js",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Tailwind CSS"
      ]
    },
    {
      title: "Backend & Databases",
      subtitle: "Server Logic & Data Persistence",
      icon: <Database className="w-6 h-6 text-neonPurple" />,
      accentColor: "border-neonPurple/30 group-hover:border-neonPurple/60",
      glowColor: "group-hover:shadow-[0_0_30px_rgba(176,38,255,0.18)]",
      skills: [
        "Python",
        "Node.js",
        "MySQL",
        "Firebase",
        "RESTful APIs"
      ]
    },
    {
      title: "Tools",
      subtitle: "Development & Version Control",
      icon: <Terminal className="w-6 h-6 text-emerald-400" />,
      accentColor: "border-emerald-400/30 group-hover:border-emerald-400/60",
      glowColor: "group-hover:shadow-[0_0_30px_rgba(52,211,153,0.18)]",
      skills: [
        "Git",
        "GitHub",
        "VS Code"
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-white/[0.01]">
      {/* Background ambient glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[280px] bg-neonPurple/10 rounded-full blur-[140px]" />
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neonCyan/10 border border-neonCyan/30 text-neonCyan text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-neonCyan" />
            <span>Technical Capabilities</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPurple via-white to-neonCyan">
              Technical Arsenal
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Core technologies and tools I work with daily to build full-stack web applications.
          </p>
        </motion.div>

        {/* 3-Column Skill Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`p-7 sm:p-8 rounded-2xl bg-glassBg backdrop-blur-md border ${category.accentColor} ${category.glowColor} transition-all duration-300 flex flex-col justify-between group shadow-lg`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-neonCyan transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-xs text-gray-500 font-mono">
                      {category.subtitle}
                    </p>
                  </div>
                </div>

                <div className="w-full border-t border-white/5 my-5" />

                {/* Skills Pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 text-xs font-medium rounded-lg bg-white/5 text-gray-300 border border-white/10 hover:border-neonCyan/40 hover:text-white hover:bg-white/10 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer indicator */}
              <div className="pt-5 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-500 font-mono">
                <span>Working Knowledge</span>
                <span className="text-neonCyan">●</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
