import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-white/[0.02]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonCyan to-neonPurple">Experience</span>
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-neonCyan/30 pl-8 ml-4 md:ml-0 md:pl-0 md:border-l-0">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-neonCyan via-neonPurple to-transparent -translate-x-1/2 shadow-[0_0_10px_#00f0ff]"></div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mb-12 md:w-1/2 md:pr-12 md:ml-0"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[41px] md:-right-[21px] md:left-auto top-2 w-5 h-5 rounded-full bg-darkBg border-4 border-neonCyan shadow-[0_0_15px_#00f0ff] z-10"></div>

            <div className="bg-glassBg backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-neonCyan/50 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-2">
                <Briefcase className="text-neonCyan w-5 h-5" />
                <h3 className="text-2xl font-bold text-white">Backend Project Lead</h3>
              </div>
              <h4 className="text-lg text-neonPurple font-medium mb-1">College ERP System</h4>
              <p className="text-gray-400 text-sm mb-4">Neo Tech Developer Club | Present</p>

              <ul className="list-disc list-outside ml-5 text-gray-300 space-y-2">
                <li>Leading the backend development efforts for the college Enterprise Resource Planning (ERP) system, ensuring secure and efficient data flow.</li>
                <li>Designing and optimizing database schemas using MySQL to manage diverse university data sets.</li>
                <li>Collaborating with frontend developers to seamlessly integrate APIs and establish robust server-client communication.</li>
                <li>Mentoring junior club members in coding best practices and problem-solving techniques.</li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
