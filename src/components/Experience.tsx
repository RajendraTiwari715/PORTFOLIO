import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Backend Project Lead",
      organization: "Neo Tech Developer Club",
      project: "College ERP System",
      type: "Student Leadership & Development",
      bullets: [
        "Leading backend development for the college Enterprise Resource Planning (ERP) platform to organize student and departmental records.",
        "Designed and normalized relational database schemas in MySQL to manage student profiles, courses, and faculty data efficiently.",
        "Built RESTful API endpoints using Node.js and Express to handle CRUD operations and establish reliable server-client communication.",
        "Collaborated with frontend teammates via Git and helped mentor junior club members on structured coding practices."
      ],
      tech: ["React.js", "MySQL", "JavaScript", "Node.js", "Express.js", "RESTful APIs", "Git"]
    },
    {
      role: "Full-Stack Project Developer",
      organization: "Academic Projects & Hackathons",
      project: "Web Applications & DISHAVERSE Hackathon",
      type: "Full-Stack Development",
      bullets: [
        "Won the WINNER title at the DISHAVERSE Inter-College Hackathon with team 'THE LOGIC SYNDICATE' in a 6-hour build sprint.",
        "Developed Hellicare, a prototype for rural healthcare referral coordination, facility matching, and ambulance tracking.",
        "Engineered PashuDhan, a gaushala monitoring and stray livestock management application to keep track of stray cattle and shelter capacity.",
        "Integrated dynamic RESTful APIs and browser local storage to ensure smooth offline data persistence and responsive user interfaces."
      ],
      tech: ["React.js", "JavaScript", "Tailwind CSS", "Firebase", "MySQL", "REST APIs"]
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-white/[0.02]">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 left-10 w-80 h-80 bg-neonCyan/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold mb-3">
            <Briefcase className="w-3.5 h-3.5 text-neonCyan" />
            <span>Practical Experience</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonCyan via-white to-neonPurple">
              Experience & Projects
            </span>
          </h2>
        </motion.div>

        {/* Experience Timeline Grid */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -4 }}
              className="bg-glassBg backdrop-blur-md rounded-3xl p-6 sm:p-9 border border-white/10 hover:border-neonCyan/40 hover:shadow-[0_0_30px_rgba(0,240,255,0.12)] transition-all duration-300"
            >
              <div className="mb-6">
                
                {/* Role & Org */}
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-neonCyan/15 text-neonCyan border border-neonCyan/30">
                      {exp.type}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {exp.role}
                  </h3>
                  <p className="text-base text-neonPurple font-semibold mt-0.5">
                    {exp.organization} • <span className="text-gray-300">{exp.project}</span>
                  </p>
                </div>

              </div>

              {/* Bullet Points */}
              <div className="space-y-2.5 mb-6">
                {exp.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-gray-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-neonCyan flex-shrink-0 mt-1" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Technologies Pills */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-2">
                  Technologies:
                </span>
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
