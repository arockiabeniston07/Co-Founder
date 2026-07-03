import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, X, Download, ZoomIn, ZoomOut } from 'lucide-react';
import fullStackCert from '../assets/full_stack_certificate.jpg';
import pythonDataAnalysisCert from '../assets/python_data_analysis.png';
import ncicitPresentationCert from '../assets/certificates/ncicit-presentation.png';

const CERTIFICATES = [
  {
    id: 1,
    title: 'Full Stack Development',
    issuer: 'Gateway Software Solutions',
    date: 'June 2025',
    fileUrl: fullStackCert,
    fileType: 'image'
  },
  {
    id: 2,
    title: 'Certificate of Presentation – NCICIT \'26',
    issuer: 'Smart Crop Recommendation System (Mini Project)',
    date: 'April 2026',
    fileUrl: ncicitPresentationCert,
    fileType: 'image'
  },
  {
    id: 3,
    title: 'Python Data Analysis & Visualization Masterclass',
    issuer: 'Udemy Certification',
    date: 'February 2025',
    fileUrl: pythonDataAnalysisCert,
    fileType: 'image'
  }
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const openModal = (cert) => {
    if (cert.fileUrl) {
      setSelectedCert(cert);
      setZoomLevel(1);
    }
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  const handleZoomIn = (e) => {
    e.stopPropagation();
    setZoomLevel(prev => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = (e) => {
    e.stopPropagation();
    setZoomLevel(prev => Math.max(prev - 0.5, 0.5));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };

  return (
    <section 
      id="certificates" 
      className="relative py-28 px-6 overflow-hidden bg-zinc-50/50"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="flex justify-center"
          >
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7E7CE]/30 border border-[#D4AF37]/30 text-xs text-[#D4AF37] font-semibold uppercase tracking-wider">
              <Award size={12} />
              Achievements
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900"
          >
            Certificates
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
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {CERTIFICATES.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              onClick={() => openModal(cert)}
              className={`group relative bg-white rounded-2xl p-6 border border-[#D4AF37]/30 shadow-[0_4px_15px_rgba(212,175,55,0.05)] transition-all duration-300 ${cert.fileUrl ? 'cursor-pointer hover:border-[#D4AF37]/60 hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)]' : ''}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-[#B8860B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full pointer-events-none">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F7E7CE]/50 to-[#D4AF37]/20 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-6">
                  <Award size={24} />
                </div>
                
                <h3 className="text-xl font-bold text-zinc-900 mb-2">{cert.title}</h3>
                <p className="text-sm text-zinc-600 mb-4">{cert.issuer}</p>
                
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-zinc-200 pointer-events-auto">
                  <span className="text-xs font-mono text-zinc-500">{cert.date}</span>
                  {cert.fileUrl ? (
                    <button 
                      onClick={(e) => { e.stopPropagation(); openModal(cert); }}
                      className="text-xs text-[#D4AF37] font-semibold hover:text-[#B8860B] transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      View Certificate <ExternalLink size={14} />
                    </button>
                  ) : (
                    <span className="text-xs text-zinc-400">Pending</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Full-screen Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-8"
          >
            {/* Modal Controls (Close button) */}
            <div className="absolute top-6 right-6 flex items-center gap-4 z-50">
              <button 
                onClick={(e) => { e.stopPropagation(); closeModal(); }}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-xl overflow-hidden shadow-2xl flex flex-col border border-[#D4AF37]/20"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-zinc-200 bg-zinc-50/90 z-10">
                <div>
                  <h3 className="text-lg font-bold text-zinc-900">{selectedCert.title}</h3>
                  <p className="text-xs text-zinc-600">{selectedCert.issuer}</p>
                </div>
                <div className="flex items-center gap-2 md:gap-4">
                  <div className="flex items-center bg-white rounded-lg border border-zinc-200 overflow-hidden shadow-sm">
                    <button onClick={handleZoomOut} className="p-2 hover:bg-zinc-50 text-zinc-600 hover:text-[#D4AF37] transition-colors" aria-label="Zoom out">
                      <ZoomOut size={16} />
                    </button>
                    <span className="text-xs font-mono text-zinc-600 w-12 text-center select-none">{Math.round(zoomLevel * 100)}%</span>
                    <button onClick={handleZoomIn} className="p-2 hover:bg-zinc-50 text-zinc-600 hover:text-[#D4AF37] transition-colors" aria-label="Zoom in">
                      <ZoomIn size={16} />
                    </button>
                  </div>
                  
                  <div className="w-px h-6 bg-zinc-200 hidden md:block" />
                  
                  <a 
                    href={selectedCert.fileUrl} 
                    download={`${selectedCert.title.replace(/\s+/g, '_')}_Certificate`}
                    className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:from-[#B8860B] hover:to-[#D4AF37] text-white rounded-lg transition-colors text-sm font-semibold shadow-[0_4px_15px_rgba(212,175,55,0.3)]"
                  >
                    <Download size={16} />
                    <span className="hidden sm:inline">Download</span>
                  </a>
                </div>
              </div>
              
              {/* Image/PDF Container */}
              <div className="flex-1 overflow-auto flex items-center justify-center p-4 bg-zinc-100 custom-scrollbar relative">
                {selectedCert.fileType === 'image' ? (
                  <motion.img 
                    src={selectedCert.fileUrl} 
                    alt={`${selectedCert.title} Certificate`}
                    animate={{ scale: zoomLevel }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    className="max-w-full max-h-full object-contain rounded shadow-2xl origin-center"
                    draggable={false}
                  />
                ) : (
                  <iframe 
                    src={selectedCert.fileUrl} 
                    className="w-full h-full rounded shadow-2xl bg-white"
                    title={`${selectedCert.title} Certificate`}
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
