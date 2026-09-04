import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Krishii Kalyaan 🌱",
      tech: ["React.js", "JavaScript", "HTML/CSS", "Firebase", "APIs"],
      desc: "Developed a full-stack, responsive web application for agricultural solutions. Integrated RESTful APIs for dynamic data and Firebase for real-time auth."
    },
    {
      title: "Karmphal ⚙️",
      tech: ["React.js", "MySQL", "JavaScript", "HTML/CSS"],
      desc: "Engineered a web platform utilizing React frontend and MySQL backend. Built modular UI components and designed complex database queries."
    },
    {
      title: "Mindwell 🧠",
      tech: ["JavaScript", "HTML/CSS", "Firebase", "APIs"],
      desc: "Built an intuitive, user-centric digital wellness application using modern JS state management and third-party APIs for dynamic content."
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neonCyan">Featured Projects</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-glassBg backdrop-blur-sm rounded-2xl p-6 border border-white/10 flex flex-col h-full group hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] hover:border-neonCyan/40 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neonCyan transition-colors duration-300">{project.title}</h3>
              <p className="text-gray-400 flex-grow mb-6">{project.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-md bg-neonPurple/10 text-neonPurple border border-neonPurple/20">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-white/10 mt-auto">
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <Github className="w-5 h-5" />
                  <span className="text-sm">Code</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-neonCyan transition-colors flex items-center gap-2">
                  <ExternalLink className="w-5 h-5" />
                  <span className="text-sm">Live Demo</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
