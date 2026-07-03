import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layers, FileCode, Terminal, Cpu, Grid, Database, Award } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const SKILLS = [
  {
    name: 'HTML',
    category: 'Frontend',
    icon: Code,
    color: 'from-[#F7E7CE] to-[#D4AF37]',
    glowColor: 'rgba(212,175,55,0.4)',
    borderColor: 'group-hover:border-[#D4AF37]/50',
    level: '75%',
  },
  {
    name: 'CSS',
    category: 'Frontend',
    icon: Layers,
    color: 'from-[#D4AF37] to-[#B8860B]',
    glowColor: 'rgba(184,134,11,0.4)',
    borderColor: 'group-hover:border-[#B8860B]/50',
    level: '70%',
  },
  {
    name: 'JavaScript',
    category: 'Frontend',
    icon: FileCode,
    color: 'from-[#F7E7CE] to-[#B8860B]',
    glowColor: 'rgba(212,175,55,0.4)',
    borderColor: 'group-hover:border-[#D4AF37]/50',
    level: '65%',
  },
  {
    name: 'React',
    category: 'Frontend',
    icon: Cpu,
    color: 'from-[#D4AF37] to-[#D4AF37]',
    glowColor: 'rgba(212,175,55,0.4)',
    borderColor: 'group-hover:border-[#D4AF37]/50',
    level: '75%',
  },
  {
    name: 'Bootstrap',
    category: 'Frontend',
    icon: Grid,
    color: 'from-[#B8860B] to-[#D4AF37]',
    glowColor: 'rgba(184,134,11,0.4)',
    borderColor: 'group-hover:border-[#B8860B]/50',
    level: '70%',
  },
  {
    name: 'SQL',
    category: 'Backend',
    icon: Database,
    color: 'from-[#F7E7CE] to-[#D4AF37]',
    glowColor: 'rgba(212,175,55,0.4)',
    borderColor: 'group-hover:border-[#D4AF37]/50',
    level: '65%',
  },
  {
    name: 'Python',
    category: 'Backend',
    icon: Terminal,
    color: 'from-[#D4AF37] to-[#B8860B]',
    glowColor: 'rgba(184,134,11,0.4)',
    borderColor: 'group-hover:border-[#B8860B]/50',
    level: '75%',
  },
  {
    name: 'Git',
    category: 'Tools',
    icon: GithubIcon,
    color: 'from-[#B8860B] to-[#F7E7CE]',
    glowColor: 'rgba(212,175,55,0.4)',
    borderColor: 'group-hover:border-[#D4AF37]/50',
    level: '70%',
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 },
    },
  };

  return (
    <section 
      id="skills" 
      className="relative py-28 px-6 overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] glow-spot-champagne opacity-10 rounded-full pointer-events-none z-0" />
      <div className="absolute top-10 left-10 w-[300px] h-[300px] glow-spot-gold opacity-10 rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="flex justify-center"
          >
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7E7CE]/30 border border-[#D4AF37]/30 text-xs text-[#D4AF37] font-semibold uppercase tracking-wider">
              <Award size={12} />
              My Abilities
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 font-sans"
          >
            Technical Skillset
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] mx-auto rounded-full"
          />
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {SKILLS.map((skill, index) => {
            const Icon = skill.icon;
            
            // Random floating transition parameters to make them float independently
            const floatingDelay = index * 0.15;
            const floatingDuration = 3 + (index % 3);

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  y: {
                    duration: floatingDuration,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: floatingDelay
                  }
                }}
                whileHover={{ 
                  scale: 1.04,
                  rotateX: 3,
                  rotateY: -3,
                  boxShadow: `0 0 25px ${skill.glowColor}`,
                  borderColor: 'rgba(255, 255, 255, 0.2)'
                }}
                className={`group relative bg-white rounded-2xl p-6 text-left flex flex-col justify-between h-48 cursor-pointer border border-[#D4AF37]/20 shadow-sm transition-all duration-300 ${skill.borderColor}`}
                style={{ perspective: 1000 }}
              >
                {/* Background glow hover effect */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, ${skill.glowColor} 0%, transparent 70%)`
                  }}
                />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    {/* Icon container with spinning rotation & pulse on hover */}
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-white shadow-[0_4px_15px_rgba(212,175,55,0.2)] group-hover:rotate-[360deg] transition-transform duration-700 ease-out`}>
                      <Icon size={24} className="group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest bg-zinc-50 px-2 py-0.5 rounded border border-zinc-200">
                      {skill.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-zinc-900 mb-2 tracking-wide font-sans">
                    {skill.name}
                  </h3>
                </div>

                {/* Level indicators to represent premium feel */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500">
                    <span>Proficiency</span>
                    <span className="text-zinc-800 font-semibold">{skill.level}</span>
                  </div>
                  <div className="w-full h-1.5 bg-zinc-200 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                      className={`h-full bg-gradient-to-r ${skill.color}`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
