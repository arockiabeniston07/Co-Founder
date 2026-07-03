import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import customLogo from '../assets/logo.png';

const NAV_LINKS = [
  { name: 'Home', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'Alpha Grow', id: 'alphagrow' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Experience', id: 'experience' },
  { name: 'Certificates', id: 'certificates' },
  { name: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map(link => document.getElementById(link.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 150; // navbar offset + extra padding

      let currentActive = NAV_LINKS[0].id;
      for (const section of sections) {
        if (section.offsetTop <= scrollPosition) {
          currentActive = section.id;
        }
      }

      // If user is at the absolute bottom of the page, select the last section
      if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 100) {
        currentActive = NAV_LINKS[NAV_LINKS.length - 1].id;
      }

      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-[#D4AF37]/20 py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, 'hero')}
          className="flex items-center gap-[10px] group"
        >
          <img 
            src={customLogo} 
            alt="AB Logo" 
            className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 ease-in-out group-hover:scale-105" 
          />
          <span className="font-sans font-bold text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 to-zinc-600 group-hover:from-[#D4AF37] group-hover:to-[#B8860B] transition-colors duration-300">
            AROCKIA BENISTON V
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`relative py-2 text-sm font-medium tracking-wide transition-colors ${
                  isActive ? 'text-zinc-900' : 'text-zinc-500 hover:text-zinc-900'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#F7E7CE] to-[#D4AF37] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile Nav Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-[#D4AF37]/20 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 transition-all focus:outline-none relative z-50 shadow-sm"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-2xl flex flex-col justify-center items-center z-40"
          >
            <nav className="flex flex-col items-center gap-8 text-center">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`text-2xl font-semibold tracking-wide ${
                    activeSection === link.id
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B8860B]'
                      : 'text-zinc-500 hover:text-zinc-900'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
