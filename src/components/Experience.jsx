import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const EXPERIENCES = [
  {
    id: 1,
    role: 'Co-Founder & Chairman',
    company: 'Alpha Grow Creation',
    period: '2023 - Present',
    description: 'Leading strategic vision and technical innovation to deliver cutting-edge digital solutions. Overseeing cross-functional teams to build scalable web applications and empowering businesses with modern tech.',
    color: 'from-[#D4AF37] to-[#B8860B]',
    iconColor: 'text-[#D4AF37]'
  },
  {
    id: 2,
    role: 'Full Stack Development Intern',
    company: 'Gateway Software Solutions',
    period: '2023 - 2023',
    description: 'Gained practical hands-on experience in both frontend and backend development. Worked on building responsive UI components and integrating RESTful APIs to deliver robust web solutions.',
    color: 'from-[#D4AF37] to-[#B8860B]',
    iconColor: 'text-[#D4AF37]'
  }
];

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };

  return (
    <section 
      id="experience" 
      className="relative py-28 px-6 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="flex justify-center"
          >
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7E7CE]/30 border border-[#D4AF37]/30 text-xs text-[#D4AF37] font-semibold uppercase tracking-wider">
              <Briefcase size={12} />
              Career Path
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900"
          >
            Professional Experience
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] mx-auto rounded-full"
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="relative border-l border-[#D4AF37]/20 ml-4 md:ml-8 space-y-12"
        >
          {EXPERIENCES.map((exp) => (
            <motion.div key={exp.id} variants={itemVariants} className="relative pl-8 md:pl-12">
              {/* Timeline dot */}
              <div className={`absolute left-0 -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-gradient-to-br ${exp.color} border-[3px] border-white shadow-[0_0_10px_currentColor] ${exp.iconColor}`} />
              
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#D4AF37]/30 shadow-sm hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] hover:border-[#D4AF37]/60 transition-all duration-300 group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-zinc-900 group-hover:text-[#D4AF37] transition-colors">{exp.role}</h3>
                    <p className={`text-sm font-semibold mt-1 ${exp.iconColor}`}>{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 w-fit">
                    <Calendar size={14} className="text-zinc-500" />
                    <span className="text-xs font-mono text-zinc-600">{exp.period}</span>
                  </div>
                </div>
                <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
