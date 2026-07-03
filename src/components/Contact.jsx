import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, ArrowUpRight, MessageCircle, Send } from 'lucide-react';
import { LinkedinIcon } from './SocialIcons';

export default function Contact() {
  const emailAddress = 'arockiabeniston26@gmail.com';
  const whatsappNumber = '7812888729';
  const whatsappUrl = `https://wa.me/91${whatsappNumber}`;
  const mailtoUrl = `mailto:${emailAddress}`;
  const linkedinUrl = 'https://www.linkedin.com/in/arockia-beniston-v/';

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section 
      id="contact" 
      className="relative py-28 px-6 overflow-hidden"
    >
      {/* Background glow spots */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] glow-spot-gold opacity-10 rounded-full pointer-events-none z-0" />
      <div className="absolute top-1/3 right-1/10 w-[500px] h-[500px] glow-spot-champagne opacity-10 rounded-full pointer-events-none z-0" />

      {/* Floating communication icons in background */}
      <div className="absolute top-1/4 right-1/12 animate-float pointer-events-none opacity-5 text-[#D4AF37] hidden lg:block">
        <MessageSquare size={50} />
      </div>
      <div className="absolute bottom-1/4 left-1/12 animate-float-slow pointer-events-none opacity-5 text-[#B8860B] hidden lg:block">
        <Mail size={45} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7E7CE]/30 border border-[#D4AF37]/30 text-xs text-[#D4AF37] font-semibold uppercase tracking-wider">
              <MessageCircle size={12} />
              Connect With Me
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 font-sans"
          >
            Let's Start A Conversation
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] mx-auto rounded-full"
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-zinc-600 text-sm md:text-base max-w-lg mx-auto leading-relaxed pt-2"
          >
            Have a project idea, collaboration, or opportunity? Let’s connect and build something amazing together.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#B8860B] opacity-10 blur-lg group-hover:opacity-20 transition duration-500"></div>
            <div className="relative bg-white rounded-2xl p-8 border border-[#D4AF37]/30 shadow-sm hover:shadow-[0_10px_30px_rgba(212,175,55,0.1)] group-hover:border-[#D4AF37]/60 transition-all duration-300">
              <h3 className="text-xl font-bold text-zinc-900 tracking-wide mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-[#D4AF37]/50 focus:ring-1 focus:ring-[#D4AF37]/50 transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-[#D4AF37]/50 focus:ring-1 focus:ring-[#D4AF37]/50 transition-all"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    rows="4"
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-[#D4AF37]/50 focus:ring-1 focus:ring-[#D4AF37]/50 transition-all resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:from-[#B8860B] hover:to-[#D4AF37] text-xs font-bold text-white tracking-widest uppercase transition-all duration-300 shadow-[0_4px_15px_rgba(212,175,55,0.3)] hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send size={14} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </motion.div>

          {/* Direct Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-6"
          >
            {/* Email Link */}
            <div className="relative group">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#B8860B] opacity-10 blur-lg group-hover:opacity-20 transition duration-500 animate-pulse"></div>
              <div className="relative bg-white rounded-2xl p-6 border border-[#D4AF37]/30 shadow-sm hover:shadow-[0_4px_15px_rgba(212,175,55,0.1)] group-hover:border-[#D4AF37]/60 transition-all duration-300 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F7E7CE]/50 to-[#D4AF37]/20 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shadow-[0_4px_10px_rgba(212,175,55,0.1)]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900 tracking-wide">Direct Email</h4>
                    <p className="text-xs text-zinc-500 font-mono mt-1">{emailAddress}</p>
                  </div>
                </div>
                <a
                  href={mailtoUrl}
                  className="p-3 rounded-xl bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-white border border-[#D4AF37]/30 transition-all cursor-pointer"
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>

            {/* LinkedIn Link */}
            <div className="relative group">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#B8860B] opacity-10 blur-lg group-hover:opacity-20 transition duration-500"></div>
              <div className="relative bg-white rounded-2xl p-6 border border-[#D4AF37]/30 shadow-sm hover:shadow-[0_4px_15px_rgba(212,175,55,0.1)] group-hover:border-[#D4AF37]/60 transition-all duration-300 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F7E7CE]/50 to-[#D4AF37]/20 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shadow-[0_4px_10px_rgba(212,175,55,0.1)]">
                    <LinkedinIcon size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900 tracking-wide">LinkedIn</h4>
                    <p className="text-xs text-zinc-500 font-mono mt-1">Connect professionally</p>
                  </div>
                </div>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-white border border-[#D4AF37]/30 transition-all cursor-pointer"
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>

            {/* WhatsApp Link */}
            <div className="relative group">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#B8860B] opacity-10 blur-lg group-hover:opacity-20 transition duration-500"></div>
              <div className="relative bg-white rounded-2xl p-6 border border-[#D4AF37]/30 shadow-sm hover:shadow-[0_4px_15px_rgba(212,175,55,0.1)] group-hover:border-[#D4AF37]/60 transition-all duration-300 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F7E7CE]/50 to-[#D4AF37]/20 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shadow-[0_4px_10px_rgba(212,175,55,0.1)]">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900 tracking-wide">WhatsApp</h4>
                    <p className="text-xs text-zinc-500 font-mono mt-1">+91 {whatsappNumber}</p>
                  </div>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-white border border-[#D4AF37]/30 transition-all cursor-pointer"
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Small Terminal Meta Info */}
        <div className="mt-16 text-center text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
          SYSTEM_TRANSMISSION // ACTIVE_CONNECTIVITY_PORTS_ENGAGED // PORTFOLIO_V4.0
        </div>
      </div>
    </section>
  );
}
