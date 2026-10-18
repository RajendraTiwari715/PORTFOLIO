import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Layers, ArrowUpRight, Code2, CheckCircle2 } from 'lucide-react';
import { projectsData, ProjectItem } from '../data/portfolioData';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Full Stack', 'Systems', 'Web Apps'];

  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-neonPurple/10 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-neonCyan/10 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold mb-3">
            <Code2 className="w-3.5 h-3.5 text-neonCyan" />
            <span>Production Systems & Applications</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neonCyan to-neonPurple">
              Featured Projects
            </span>
          </h2>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-neonCyan text-darkBg shadow-[0_0_18px_rgba(0,240,255,0.6)] scale-105'
                      : 'bg-glassBg text-gray-400 border border-white/10 hover:text-white hover:border-white/20'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project: ProjectItem, index: number) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl bg-glassBg backdrop-blur-md border border-white/10 hover:border-neonCyan/50 transition-all duration-300 flex flex-col h-full overflow-hidden shadow-lg hover:shadow-[0_0_35px_rgba(0,240,255,0.18)]"
              >
                {/* Image Container with Hover Zoom */}
                <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-black/60">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-85 group-hover:opacity-100"
                  />
                  
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-darkBg via-transparent to-black/30 pointer-events-none" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 text-[11px] font-bold tracking-wide rounded-md bg-darkBg/80 backdrop-blur-md text-neonCyan border border-neonCyan/30 shadow-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Role Badge */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-neonPurple/20 backdrop-blur-md text-white border border-neonPurple/40">
                      {project.roleBadge}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-grow">
                  
                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-neonCyan transition-colors duration-300 flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-neonCyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    {project.desc}
                  </p>

                  {/* Bullet Points */}
                  {project.highlights && (
                    <div className="space-y-1.5 mb-5">
                      {project.highlights.map((h, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-neonCyan flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-neonPurple/10 text-neonPurple border border-neonPurple/20 hover:border-neonPurple/40 hover:bg-neonPurple/20 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Explicit Action Buttons */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10 mt-auto">
                    {/* Explicit GitHub Repository Button */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-white/10 hover:bg-white text-white hover:text-darkBg font-semibold text-xs transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub Repo</span>
                    </a>

                    {/* Explicit Live Demo Button */}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-neonCyan/10 hover:bg-neonCyan text-neonCyan hover:text-darkBg border border-neonCyan/30 hover:border-neonCyan font-semibold text-xs transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(0,240,255,0.5)]"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>

                    {project.architectureUrl && (
                      <a
                        href={project.architectureUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Architecture & Docs"
                        className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white border border-white/10 transition-colors"
                      >
                        <Layers className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All on GitHub Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <a
            href="https://github.com/RajendraTiwari715"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-glassBg border border-neonCyan/30 text-neonCyan hover:bg-neonCyan hover:text-darkBg transition-all duration-300 font-semibold text-sm shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)]"
          >
            <Github className="w-4 h-4" />
            <span>Explore More Repositories on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
