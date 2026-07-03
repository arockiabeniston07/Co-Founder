import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import smartCropImg from '../assets/smart_crop_mockup.png';

const PROJECTS = [
  {
    id: 1,
    title: 'Smart Crop Recommendation System',
    description: 'An intelligent machine-learning framework designed to analyze soil parameters (N, P, K, pH) and weather conditions to recommend the highest yielding crop for farmers.',
    image: smartCropImg,
    tags: ['React.js', 'Python', 'Machine Learning', 'SQL'],
    github: 'https://github.com/arockiabeniston07',
    demo: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Leo Cafe – Online Cafe Website',
    description: 'A modern and fully responsive online cafe website with an attractive UI, smooth animations, and an interactive user experience. Features beautifully designed menu sections and modern layouts.',
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000&auto=format&fit=crop',
    tags: ['HTML', 'CSS', 'JavaScript', 'React'],
    github: 'https://github.com/arockiabeniston07/LEO_CAFE',
    demo: 'https://leocafeonline.netlify.app/',
    featured: true,
  },
  {
    id: 3,
    title: 'Alpha Grow Dashboard',
    description: 'A powerful dashboard built for Alpha Grow Creation with modern UI and real-time functionality',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/arockiabeniston07/alpha',
    demo: 'https://alphagrowcreation.netlify.app/',
    featured: true,
  }
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };

  return (
    <section 
      id="projects" 
      className="relative py-28 px-6 overflow-hidden"
    >
      <div className="absolute top-1/3 left-1/10 w-[500px] h-[500px] glow-spot-gold opacity-10 rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] glow-spot-champagne opacity-10 rounded-full pointer-events-none z-0" />

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
              <FolderGit2 size={12} />
              Portfolio
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900"
          >
            Projects
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] mx-auto rounded-full"
          />
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 shadow-[0_10px_30px_rgba(212,175,55,0.1)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.2)] transition-all duration-300"
            >
              {/* Image Preview */}
              <div className="relative h-48 sm:h-56 overflow-hidden bg-zinc-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
                <div className="absolute inset-0 bg-[#D4AF37]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-600 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 rounded-md bg-zinc-50 border border-[#D4AF37]/20 text-[10px] font-mono text-zinc-600 group-hover:border-[#D4AF37]/50 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-zinc-200">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#D4AF37]/10 hover:bg-[#D4AF37] border border-[#D4AF37]/30 hover:border-[#D4AF37] text-[#D4AF37] hover:text-white text-xs font-semibold transition-all duration-300"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white hover:bg-zinc-50 border border-zinc-200 hover:border-[#D4AF37]/50 text-zinc-700 text-xs font-semibold transition-all duration-300"
                  >
                    <GithubIcon size={14} />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
