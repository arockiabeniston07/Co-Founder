import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, Terminal } from 'lucide-react';
import profileImg from '../assets/arockia_profile.jpg';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };

  return (
    <section 
      id="about" 
      className="relative py-28 px-6 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] glow-spot-gold opacity-15 rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] glow-spot-champagne opacity-10 rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="flex justify-center"
          >
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7E7CE]/30 border border-[#D4AF37]/30 text-xs text-[#D4AF37] font-semibold uppercase tracking-wider">
              <User size={12} />
              About Me
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900"
          >
            Who I Am
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] mx-auto rounded-full"
          />
        </div>

        {/* Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-center items-center gap-6"
          >
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative group w-full max-w-sm"
            >
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#B8860B] opacity-20 blur-xl group-hover:opacity-40 transition duration-500 animate-pulse"></div>
              
              {/* Glass Profile Card */}
              <div className="relative bg-white rounded-2xl overflow-hidden text-left shadow-[0_10px_30px_rgba(212,175,55,0.1)] border border-[#D4AF37]/20">
                {/* Photo container */}
                <div className="relative h-80 overflow-hidden bg-zinc-50">
                  <img
                    src={profileImg}
                    alt="AROCKIA BENISTON V"
                    className="w-full h-full object-cover object-[center_top] group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent" />
                  
                  {/* Floating category badge */}
                  <div className="absolute bottom-4 left-4 bg-white/95 px-3 py-1 rounded-md border border-[#D4AF37]/30 text-[10px] font-mono text-zinc-600">
                    BENISTON.V // PROFILE
                  </div>
                </div>

                {/* Info and statistics */}
                <div className="p-6 space-y-4 bg-white">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 leading-tight">AROCKIA BENISTON V</h3>
                    <p className="text-xs text-zinc-500 font-mono mt-1">Tech Entrepreneur & Developer</p>
                  </div>

                  <div className="h-[1px] bg-zinc-100" />

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="flex flex-col p-2.5 bg-zinc-50 rounded border border-zinc-100 font-mono">
                      <span className="text-[10px] text-zinc-500">Role</span>
                      <span className="text-zinc-900 font-semibold mt-0.5 text-[11px]">Co-Founder & Chairman</span>
                    </div>
                    <div className="flex flex-col p-2.5 bg-zinc-50 rounded border border-zinc-100 font-mono">
                      <span className="text-[10px] text-zinc-500">Company</span>
                      <span className="text-zinc-900 font-semibold mt-0.5 text-[11px]">Alpha Grow Creation</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#F7E7CE]/50 to-[#D4AF37]/20 border border-[#D4AF37]/30 shadow-[0_4px_15px_rgba(212,175,55,0.15)] text-sm font-semibold text-zinc-800 tracking-wide"
            >
              <Terminal size={16} className="text-[#D4AF37]" />
              Visionary Leader
            </motion.div>
          </motion.div>

          {/* Right Column - Narrative Biography */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-7 text-left space-y-6"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl md:text-3xl font-bold text-zinc-900 flex items-center gap-2 mb-2"
            >
              <Award className="text-[#D4AF37]" size={28} />
              Journey & Passion
            </motion.h3>

            <div className="space-y-6">
              <motion.p 
                variants={itemVariants}
                className="text-zinc-600 leading-relaxed text-[15px] md:text-base tracking-wide"
              >
                Hi, I’m Arockia Beniston V. I embrace a dual identity: a passionate <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B8860B] font-semibold drop-shadow-[0_2px_4px_rgba(212,175,55,0.2)]">Web Developer</span> and the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B8860B] font-semibold drop-shadow-[0_2px_4px_rgba(212,175,55,0.2)]">Co-Founder & Chairman</span> of Alpha Grow Creation.
              </motion.p>

              <motion.p 
                variants={itemVariants}
                className="text-zinc-600 leading-relaxed text-[15px] md:text-base tracking-wide"
              >
                My technical journey involves building modern, responsive, and highly interactive web applications. By mastering technologies like <span className="text-[#D4AF37] font-semibold">React</span>, <span className="text-[#D4AF37] font-semibold">Python</span>, and scalable databases, I bridge the gap between complex backend systems and premium user interfaces.
              </motion.p>

              <motion.p 
                variants={itemVariants}
                className="text-zinc-600 leading-relaxed text-[15px] md:text-base tracking-wide"
              >
                At Alpha Grow Creation, I lead a team dedicated to innovative digital solutions and strategic market growth. My role as Chairman involves not just technical oversight, but steering our company's mission to empower businesses through state-of-the-art technology.
              </motion.p>

              <motion.p 
                variants={itemVariants}
                className="text-zinc-600 leading-relaxed text-[15px] md:text-base tracking-wide"
              >
                My ultimate goal is to merge entrepreneurial vision with cutting-edge software development to create impactful, real-world solutions that leave a lasting mark on the industry.
              </motion.p>
            </div>

            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4"
            >
              <div className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 shrink-0 animate-pulse"></span>
                <div>
                  <h4 className="font-semibold text-zinc-900 text-sm">Strategic Leadership</h4>
                  <p className="text-xs text-zinc-500 mt-1">Guiding Alpha Grow Creation towards new horizons.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B] mt-2 shrink-0 animate-pulse"></span>
                <div>
                  <h4 className="font-semibold text-zinc-900 text-sm">Technical Excellence</h4>
                  <p className="text-xs text-zinc-500 mt-1">Building immersive, high-performance web applications.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
