import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  ShieldCheck, 
  Database, 
  Code2, 
  Cloud, 
  Terminal, 
  Calendar, 
  CheckCircle,
  FileBadge
} from 'lucide-react';
import { certificationsData, CertificationItem } from '../data/portfolioData';

const Certifications: React.FC = () => {
  const getIcon = (iconType?: string) => {
    switch (iconType) {
      case 'database':
        return <Database className="w-5 h-5 text-neonCyan" />;
      case 'code':
        return <Code2 className="w-5 h-5 text-neonPurple" />;
      case 'cloud':
        return <Cloud className="w-5 h-5 text-cyan-400" />;
      case 'terminal':
        return <Terminal className="w-5 h-5 text-green-400" />;
      default:
        return <FileBadge className="w-5 h-5 text-yellow-400" />;
    }
  };

  return (
    <section id="certificates" className="py-24 relative overflow-hidden bg-white/[0.01]">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-neonCyan/10 rounded-full blur-[140px]" />
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neonPurple/10 border border-neonPurple/30 text-neonPurple text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-neonPurple" />
            <span>Validated Technical Competence</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPurple via-white to-neonCyan">
              Certifications & Credentials
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Professional industry certifications validating core competencies in full-stack architecture, relational database engineering, and modern cloud ecosystems.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {certificationsData.map((cert: CertificationItem, index: number) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="bg-glassBg backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-neonPurple/50 hover:shadow-[0_0_30px_rgba(176,38,255,0.18)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header row: Icon, Issuer & Credential Badge */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-neonCyan/40 group-hover:bg-neonCyan/10 transition-colors">
                      {getIcon(cert.iconType)}
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-neonCyan block">
                        {cert.issuer}
                      </span>
                      <span className="text-xs text-gray-500 font-mono flex items-center gap-1 mt-0.5">
                        <Calendar className="w-3 h-3" />
                        Issued {cert.issueDate}
                      </span>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold bg-white/5 text-gray-400 border border-white/10 group-hover:text-neonPurple group-hover:border-neonPurple/30 transition-colors">
                    ID: {cert.credentialId}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neonPurple transition-colors duration-300">
                  {cert.title}
                </h3>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 text-gray-300 border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Action Button */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Verified Credential</span>
                </div>

                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-neonPurple/20 text-xs font-semibold text-gray-300 hover:text-white border border-white/10 hover:border-neonPurple/40 transition-all duration-200"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-white" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
