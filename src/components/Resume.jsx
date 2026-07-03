import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';

export default function Resume() {
  return (
    <section 
      id="resume" 
      className="relative py-20 px-6 overflow-hidden border-t border-zinc-200 bg-zinc-50/50"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] glow-spot-gold opacity-10 rounded-full pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto relative z-10 text-center space-y-8">
        
        {/* Header */}
        <div className="space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7E7CE]/30 border border-[#D4AF37]/30 text-xs text-[#D4AF37] font-semibold uppercase tracking-wider">
              <FileText size={12} />
              Credentials
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-zinc-900"
          >
            Download My Resume
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-zinc-600 text-sm md:text-base max-w-lg mx-auto"
          >
            Get a comprehensive overview of my experience, coursework, technical capabilities, and project parameters.
          </motion.p>
        </div>

        {/* Action Button Area */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative group">
            {/* Glowing Ring */}
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#B8860B] opacity-15 blur group-hover:opacity-30 transition duration-300"></div>
            
            <a
              href="/Arockia_Beniston_V_Resume_Updated.pdf"
              download="Arockia_Beniston_V_Resume_Updated.pdf"
              className="relative px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] border border-[#D4AF37]/30 hover:from-[#B8860B] hover:to-[#D4AF37] text-white rounded-lg font-semibold tracking-wider text-xs md:text-sm flex items-center gap-3 select-none transition-all duration-300 cursor-pointer min-w-[240px] justify-center overflow-hidden hover:scale-105 active:scale-98 shadow-[0_4px_15px_rgba(212,175,55,0.3)] hover:shadow-[0_8px_25px_rgba(212,175,55,0.4)]"
            >
              <Download size={16} />
              DOWNLOAD RESUME
            </a>
          </div>
          
          <span className="text-[10px] font-mono text-zinc-400 mt-4 uppercase tracking-widest">
            AROCKIA_BENISTON_V_RESUME_UPDATED.PDF // 212 KB
          </span>
        </div>
      </div>
    </section>
  );
}

