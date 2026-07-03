import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AlphaGrow from './components/AlphaGrow';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import BackgroundGlow from './components/BackgroundGlow';
import Particles from './components/Particles';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="relative min-h-screen bg-white text-zinc-800 overflow-x-hidden font-sans selection:bg-[#D4AF37]/30 selection:text-[#333]">
      <CustomCursor />
      <ScrollProgress />
      
      {/* Background visual components */}
      <BackgroundGlow />
      <Particles />
      {/* Technology grid blueprint line pattern */}
      <div className="fixed inset-0 tech-grid opacity-30 pointer-events-none z-0" />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <Hero />
          <About />
          <AlphaGrow />
          <Skills />
          <Projects />
          <Experience />
          <Certificates />
          <Contact />
          <Resume />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
