import { motion } from 'framer-motion';
import { 
  Trophy, 
  Github, 
  ExternalLink, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  Zap, 
  Users, 
  ShieldCheck,
  Target,
  Clock,
  MapPin
} from 'lucide-react';
import { hackathonSpotlight, additionalHackathons } from '../data/portfolioData';

const Hackathons: React.FC = () => {
  return (
    <section id="hackathons" className="py-24 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-neonCyan/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-neonPurple/15 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          {/* Glowing Trophy Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neonCyan/10 border border-neonCyan/30 text-neonCyan shadow-[0_0_20px_rgba(0,240,255,0.3)] mb-4">
            <Trophy className="w-4 h-4 animate-bounce text-yellow-400" />
            <span className="text-xs uppercase tracking-wider font-semibold">Hackathon Victory</span>
            <Sparkles className="w-3.5 h-3.5 text-neonCyan" />
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neonCyan to-neonPurple">
              Hackathon Wins & Spotlight
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Practical problem solving, rapid web development, and effective teamwork delivered during competitive inter-college hackathons.
          </p>
        </motion.div>

        {/* --------------------------------------------------------------- */}
        {/* MAIN SPOTLIGHT BENTO CARD (DISAHAVERSE WINNER)                  */}
        {/* --------------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl bg-glassBg backdrop-blur-xl border-2 border-neonCyan/40 p-6 md:p-10 shadow-[0_0_50px_rgba(0,240,255,0.18)] hover:shadow-[0_0_70px_rgba(0,240,255,0.25)] transition-all duration-500 mb-12 group overflow-hidden"
        >
          {/* Top highlight glow banner */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-neonCyan via-neonPurple to-neonCyan" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              
              {/* Meta Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mb-5">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-yellow-500/15 text-yellow-300 border border-yellow-500/40 flex items-center gap-1.5 shadow-[0_0_15px_rgba(234,179,8,0.3)]">
                  <Trophy className="w-4 h-4 text-yellow-400" />
                  {hackathonSpotlight.badge}
                </span>

                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-neonPurple/15 text-neonPurple border border-neonPurple/30 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {hackathonSpotlight.venue}
                </span>

                <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-300 border border-white/10 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-neonCyan" />
                  {hackathonSpotlight.sprintDuration}
                </span>
              </div>

              {/* Hackathon Name & Project Built Title */}
              <div className="mb-6">
                <span className="text-xs font-mono font-semibold uppercase tracking-widest text-neonCyan mb-1 block">
                  {hackathonSpotlight.hackathonName}
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white group-hover:text-neonCyan transition-colors duration-300">
                  {hackathonSpotlight.title}
                </h3>
                <p className="text-lg text-neonPurple font-semibold mt-1 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-neonCyan" />
                  Project Built: <span className="text-white font-bold">{hackathonSpotlight.projectName}</span>
                </p>
              </div>

              {/* Team Syndicate Shoutout Box */}
              <div className="mb-6 p-4 rounded-xl bg-neonPurple/10 border border-neonPurple/30 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-neonPurple uppercase tracking-wider mb-2">
                  <Users className="w-4 h-4 text-neonCyan" />
                  <span>Team: {hackathonSpotlight.teamName}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {hackathonSpotlight.teammates.map((member) => (
                    <span 
                      key={member}
                      className="px-2.5 py-1 text-xs font-medium rounded-lg bg-black/40 text-gray-200 border border-white/15"
                    >
                      {member}
                    </span>
                  ))}
                </div>
              </div>

              {/* Problem Statement Box */}
              <div className="mb-6 p-4 rounded-xl bg-black/40 border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-xs font-mono text-neonCyan uppercase tracking-wide mb-1.5">
                  <Target className="w-4 h-4 text-neonCyan" />
                  <span>Problem Statement Solved</span>
                </div>
                <p className="text-sm text-gray-300 italic leading-relaxed">
                  "{hackathonSpotlight.problemStatement}"
                </p>
              </div>

              {/* Solution & Impact Summary */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                  Impact & Solution Summary
                </h4>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {hackathonSpotlight.impactSummary}
                </p>
              </div>

              {/* Key Highlights */}
              {hackathonSpotlight.keyAchievements && (
                <div className="mb-6 space-y-2">
                  {hackathonSpotlight.keyAchievements.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-neonCyan flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Stack Pills */}
              <div className="mb-8">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2.5">
                  Tech Stack Utilized:
                </span>
                <div className="flex flex-wrap gap-2">
                  {hackathonSpotlight.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-lg bg-neonCyan/10 text-neonCyan border border-neonCyan/25 hover:border-neonCyan hover:bg-neonCyan/20 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                <a
                  href={hackathonSpotlight.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-darkBg font-bold text-sm hover:bg-neonCyan hover:shadow-[0_0_20px_rgba(0,240,255,0.7)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Github className="w-4 h-4" />
                  <span>View GitHub Repo</span>
                </a>

                <a
                  href={hackathonSpotlight.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-transparent border border-neonPurple text-white font-semibold text-sm hover:bg-neonPurple/20 hover:border-neonPurple hover:shadow-[0_0_20px_rgba(176,38,255,0.4)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Award className="w-4 h-4 text-neonPurple" />
                  <span>Certificate / Proof (LinkedIn)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                </a>

                {hackathonSpotlight.liveDemoUrl && (
                  <a
                    href={hackathonSpotlight.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm text-gray-300 hover:text-neonCyan transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Project Demo</span>
                  </a>
                )}
              </div>

            </div>

            {/* Right Media & Stats Column (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Media Card Showcase with Real Stage Photo */}
              <div className="relative rounded-2xl overflow-hidden border border-white/20 bg-gradient-to-br from-black/90 via-slate-900 to-purple-950/50 shadow-2xl group/media">
                
                {/* Stage Photo with Hover Zoom & Clickable LinkedIn Link */}
                <a 
                  href={hackathonSpotlight.certificateUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block relative overflow-hidden group/img cursor-pointer"
                  title="Click to view winning post on LinkedIn"
                >
                  <img
                    src={hackathonSpotlight.imageUrl}
                    alt="DISAHAVERSE Hackathon Winner Team The Logic Syndicate at Shri Balaji Disha College"
                    className="w-full aspect-[4/3] object-cover object-center group-hover/img:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle Gradient & Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-darkBg via-darkBg/10 to-transparent opacity-50 group-hover/img:opacity-20 transition-opacity duration-300" />
                  
                  {/* Floating Top-Right LinkedIn Badge */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-full bg-darkBg/80 backdrop-blur-md text-neonCyan border border-neonCyan/40 shadow-lg group-hover/img:bg-neonCyan group-hover/img:text-darkBg transition-all duration-300">
                      <span>View LinkedIn Post</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  {/* Bottom Caption Pill */}
                  <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between">
                    <span className="text-xs font-bold text-white px-3 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/15 flex items-center gap-1.5 shadow-md">
                      <Trophy className="w-3.5 h-3.5 text-yellow-400" />
                      Winning Moment at Stage
                    </span>
                    <span className="text-[11px] font-mono text-neonCyan px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/15">
                      Shri Balaji Disha College
                    </span>
                  </div>
                </a>

                {/* Card Sub-content: Accolade and Team Banner */}
                <div className="p-3.5 sm:p-4 flex flex-wrap items-center justify-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-yellow-500/15 text-yellow-300 text-xs font-extrabold border border-yellow-500/30 flex items-center gap-1">
                    <Trophy className="w-3.5 h-3.5 text-yellow-400" />
                    WINNER
                  </span>
                  <span className="px-3 py-1 rounded-full bg-neonPurple/20 text-neonPurple text-xs font-bold border border-neonPurple/30">
                    Team: {hackathonSpotlight.teamName}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-gray-300 text-xs font-medium border border-white/10">
                    Shri Balaji Disha College
                  </span>
                </div>
              </div>

              {/* Bento Grid Stats */}
              {hackathonSpotlight.stats && (
                <div className="grid grid-cols-2 gap-3">
                  {hackathonSpotlight.stats.map((stat) => (
                    <motion.div
                      key={stat.label}
                      whileHover={{ scale: 1.03 }}
                      className="p-4 rounded-xl bg-glassBg border border-white/10 hover:border-neonCyan/40 transition-all duration-300 flex flex-col justify-center"
                    >
                      <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-neonCyan to-white">
                        {stat.value}
                      </span>
                      <span className="text-xs text-gray-400 font-medium mt-1">
                        {stat.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              )}

            </div>

          </div>
        </motion.div>

        {/* --------------------------------------------------------------- */}
        {/* SECONDARY BENTO CARDS (Rendered if additional hackathons exist) */}
        {/* --------------------------------------------------------------- */}
        {additionalHackathons.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-neonPurple" />
              More Hackathon Recognitions
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {additionalHackathons.map((hack, index) => (
                <motion.div
                  key={hack.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ y: -6 }}
                  className="bg-glassBg backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-neonPurple/50 hover:shadow-[0_0_25px_rgba(176,38,255,0.2)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-white border border-white/15 flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-neonCyan" />
                        {hack.badge}
                      </span>
                      <span className="text-xs text-gray-400 font-mono">
                        {hack.hackathonName}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-white mb-1 group-hover:text-neonPurple transition-colors">
                      {hack.title}
                    </h4>
                    <p className="text-xs text-neonCyan font-semibold mb-3">
                      Project: {hack.projectName} • {hack.role}
                    </p>

                    <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                      {hack.impactSummary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {hack.techStack.map(t => (
                        <span key={t} className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-white/5 text-gray-300 border border-white/10">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <a
                      href={hack.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                    <a
                      href={hack.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-neonCyan transition-colors flex items-center gap-1.5 text-xs font-semibold"
                    >
                      <ShieldCheck className="w-4 h-4" />
                      <span>Proof / Certificate</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Hackathons;
