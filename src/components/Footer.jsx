import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, LeetCodeIcon } from './SocialIcons';

const SOCIALS = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/arockia-beniston-v/',
    icon: LinkedinIcon,
    hoverClass: 'hover:text-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:border-blue-500/30'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/arockiabeniston07',
    icon: GithubIcon,
    hoverClass: 'hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:border-white/30'
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/arockiabeniston/',
    icon: LeetCodeIcon,
    hoverClass: 'hover:text-yellow-500 hover:shadow-[0_0_15px_rgba(234,179,8,0.5)] hover:border-yellow-500/30'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/__.benzzz.___/',
    icon: InstagramIcon,
    hoverClass: 'instagram-gradient-svg hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] hover:border-pink-500/30'
  }
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative border-t border-zinc-200 bg-white py-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Logo and signature */}
        <div className="text-center md:text-left space-y-1">
          <div className="font-mono font-bold text-lg text-zinc-900 group cursor-pointer transition-colors hover:text-[#D4AF37]" onClick={scrollToTop}>
            AROCKIA BENISTON V
          </div>
          <p className="text-[10px] md:text-xs font-mono text-zinc-500 uppercase tracking-wider">
            Web Developer & Co-Founder // Portfolio V4.0
          </p>
        </div>

        {/* Animated Social Icon Row */}
        <div className="flex items-center gap-4">
          {SOCIALS.map((soc) => {
            const Icon = soc.icon;
            return (
              <a
                key={soc.name}
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={soc.name}
                className={`w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-600 transition-all duration-300 ${soc.hoverClass}`}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1 text-[10px] font-mono tracking-widest text-zinc-500 hover:text-[#D4AF37] uppercase cursor-pointer transition-colors p-1"
        >
          <span>Top</span>
          <ArrowUp size={12} />
        </button>
      </div>

      {/* Copyright Note */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-zinc-200 flex flex-col sm:flex-row justify-between items-center text-[10px] md:text-xs text-zinc-500 gap-4">
        <div>
          &copy; {new Date().getFullYear()} Arockia Beniston V. All rights reserved.
        </div>
        <div className="flex items-center gap-1 font-mono">
          Built with passion <Heart size={10} className="text-red-500 fill-red-500" />
        </div>
      </div>
    </footer>
  );
}
