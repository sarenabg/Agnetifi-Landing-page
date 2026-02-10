import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ArchitectureDiagram } from './components/ArchitectureDiagram';
import { Marketplace } from './components/Marketplace';
import { Tokenomics } from './components/Tokenomics';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-dark-900 text-white selection:bg-brand-500/30 selection:text-brand-200 relative">
      {/* Global Noise Overlay */}
      <div className="fixed inset-0 bg-noise opacity-[0.03] pointer-events-none z-50 mix-blend-overlay"></div>
      
      <Navbar />
      <Hero />
      <Features />
      <ArchitectureDiagram />
      <Marketplace />
      <Tokenomics />
      <Footer />
    </main>
  );
};

export default App;