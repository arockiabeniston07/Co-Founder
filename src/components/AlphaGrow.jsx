import React from 'react';
import { motion } from 'framer-motion';
import { Building2, TrendingUp, Users, Target } from 'lucide-react';
import alphaGrowBanner from '../assets/alpha_grow_banner.png';

export default function AlphaGrow() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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
      id="alphagrow" 
      className="relative py-28 px-6 overflow-hidden bg-zinc-50/50"
    >
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] glow-spot-gold opacity-10 rounded-full pointer-events-none z-0" />
      
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
              <Building2 size={12} />
              Enterprise
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900"
          >
            Alpha Grow Creation
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-6"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold text-zinc-900 flex items-center gap-2"
            >
              <TrendingUp className="text-[#D4AF37]" size={24} />
              Co-Founder & Chairman
            </motion.h3>
            
            <motion.p variants={itemVariants} className="text-zinc-600 leading-relaxed text-sm md:text-base">
              At Alpha Grow Creation, we specialize in delivering cutting-edge digital solutions tailored to modern business needs. As the Co-Founder and Chairman, my vision is to intertwine technological innovation with robust market strategies to drive exceptional growth.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-zinc-600 leading-relaxed text-sm md:text-base">
              We empower startups and established enterprises alike by providing scalable web applications, insightful analytics, and premium user experiences. Our team is dedicated to pushing the boundaries of what's possible on the web.
            </motion.p>

            <motion.div variants={itemVariants} className="pt-4 flex flex-wrap gap-4">
               <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#D4AF37]/30 shadow-sm">
                 <Users size={16} className="text-[#D4AF37]" />
                 <span className="text-sm font-semibold text-zinc-800">Leadership</span>
               </div>
               <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#D4AF37]/30 shadow-sm">
                 <Target size={16} className="text-[#B8860B]" />
                 <span className="text-sm font-semibold text-zinc-800">Strategic Vision</span>
               </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <a 
                href="https://alphagrowcreation.netlify.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:from-[#B8860B] hover:to-[#D4AF37] shadow-[0_4px_15px_rgba(212,175,55,0.3)] transition-all hover:scale-105"
              >
                Visit Alpha Grow Creation
              </a>
            </motion.div>
          </motion.div>

          {/* Clickable Image Banner */}
          <motion.a
            href="https://alphagrowcreation.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative block w-full rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(212,175,55,0.15)] cursor-pointer group"
          >
            <div className="relative p-[2px] rounded-2xl bg-gradient-to-br from-[#D4AF37]/40 to-[#B8860B]/40 group-hover:from-[#D4AF37] group-hover:to-[#B8860B] transition-colors duration-500">
               <div className="overflow-hidden rounded-xl">
                 <img 
                   src={alphaGrowBanner} 
                   alt="Alpha Grow Creation" 
                   className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-105" 
                 />
               </div>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
