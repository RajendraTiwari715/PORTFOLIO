import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code2 className="w-8 h-8 text-neonCyan mb-4" />,
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js"]
    },
    {
      title: "Backend & Databases",
      icon: <Database className="w-8 h-8 text-neonPurple mb-4" />,
      skills: ["MySQL", "Firebase", "RESTful APIs"]
    },
    {
      title: "Tools",
      icon: <Wrench className="w-8 h-8 text-green-400 mb-4" />,
      skills: ["Git/GitHub", "Figma"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPurple to-white">Technical Arsenal</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-glassBg backdrop-blur-md rounded-2xl p-8 border border-white/5 hover:border-neonCyan/30 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                {category.icon}
                <h3 className="text-2xl font-semibold mb-6 text-white">{category.title}</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-4 py-2 rounded-full bg-white/5 text-gray-300 border border-white/10 hover:border-neonCyan hover:text-neonCyan transition-colors duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
