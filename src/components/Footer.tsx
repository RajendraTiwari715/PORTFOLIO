import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Send, CheckCircle2, User, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    
    // Simulate submission delay then open mailto
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.open(`mailto:rajendratiwari715@gmail.com?subject=${subject}&body=${body}`, '_blank');
    }, 500);
  };

  return (
    <section id="contact" className="relative border-t border-white/10 bg-black/60 pt-24 pb-12 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-neonCyan rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-neonPurple rounded-full blur-[140px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold mb-3">
            <Mail className="w-3.5 h-3.5 text-neonCyan" />
            <span>Get In Touch</span>
          </div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white"
          >
            Let's Connect & <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonCyan to-neonPurple">Collaborate.</span>
          </motion.h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            I am always open to discussing new opportunities, full-stack projects, or technical conversations. Feel free to reach out.
          </p>
        </div>

        {/* Contact Grid: Details + Working Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto mb-20 items-start">
          
          {/* Left Column: Location & Email Info (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-7 rounded-3xl bg-glassBg backdrop-blur-md border border-white/10 shadow-xl space-y-6">
              
              <h3 className="text-2xl font-bold text-white mb-2">
                Contact Details
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                You can reach me directly via email, submit the contact form, or connect through LinkedIn and GitHub.
              </p>

              {/* Email Card */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-neonCyan/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-neonCyan/10 flex items-center justify-center flex-shrink-0 text-neonCyan">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block">Email</span>
                  <a 
                    href="mailto:rajendratiwari715@gmail.com" 
                    className="text-white hover:text-neonCyan font-medium text-sm sm:text-base transition-colors"
                  >
                    rajendratiwari715@gmail.com
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-neonPurple/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-neonPurple/10 flex items-center justify-center flex-shrink-0 text-neonPurple">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block">Location</span>
                  <span className="text-white font-medium text-sm sm:text-base">
                    Raipur, Chhattisgarh
                  </span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block mb-3">
                  Online Profiles
                </span>
                <div className="flex items-center gap-3">
                  <a 
                    href="https://linkedin.com/in/rajendra-tiwari-" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-neonCyan/15 text-gray-300 hover:text-neonCyan border border-white/10 hover:border-neonCyan/40 transition-all text-xs font-semibold"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>

                  <a 
                    href="https://github.com/RajendraTiwari715" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white border border-white/10 hover:border-white/30 transition-all text-xs font-semibold"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Simple Working Contact Form (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="p-7 sm:p-9 rounded-3xl bg-glassBg backdrop-blur-md border border-white/10 shadow-2xl relative">
              
              <h3 className="text-2xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-sm text-gray-400 mb-6">
                Fill in the details below to drop me a quick message.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 px-6 rounded-2xl bg-neonCyan/10 border border-neonCyan/30 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-neonCyan/20 text-neonCyan flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Message Ready!
                  </h4>
                  <p className="text-sm text-gray-300 max-w-md mx-auto mb-6">
                    Thank you, <strong className="text-neonCyan">{formData.name}</strong>. Your message has been prepared for dispatch. If your email client didn't open automatically, feel free to email me directly at rajendratiwari715@gmail.com.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="px-6 py-2 rounded-full text-xs font-semibold bg-white/10 hover:bg-white text-white hover:text-darkBg transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <label className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-2">
                      Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-neonCyan focus:ring-1 focus:ring-neonCyan transition-all"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        required
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-neonCyan focus:ring-1 focus:ring-neonCyan transition-all"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <div className="absolute top-3.5 left-3.5 pointer-events-none text-gray-500">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <textarea
                        required
                        rows={4}
                        placeholder="Your message here..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-neonCyan focus:ring-1 focus:ring-neonCyan transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-neonCyan to-neonPurple text-white font-bold text-sm hover:opacity-90 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Send</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </motion.div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/10 text-sm text-gray-500">
          <p className="mb-4 sm:mb-0">
            © {new Date().getFullYear()} <strong className="text-gray-300">Rajendra Tiwari</strong>. All rights reserved.
          </p>
          
          <div className="flex items-center gap-5">
            <a 
              href="https://linkedin.com/in/rajendra-tiwari-" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-neonCyan hover:scale-110 transition-all"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/RajendraTiwari715" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white hover:scale-110 transition-all"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Footer;
