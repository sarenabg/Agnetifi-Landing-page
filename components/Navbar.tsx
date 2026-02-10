import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed w-full z-50 top-4 md:top-6 px-4 pointer-events-none">
      <nav className={`mx-auto max-w-5xl transition-all duration-300 pointer-events-auto rounded-[2rem] border ${isScrolled || isOpen ? 'bg-dark-900/90 backdrop-blur-xl border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]' : 'bg-transparent border-transparent'}`}>
        <div className="flex flex-wrap items-center justify-between px-6 py-3">

          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-brand-400/50 group-hover:bg-brand-400/10 transition-colors">
              <Icons.Bot className="w-6 h-6 text-brand-400" />
            </div>
            <span className="self-center text-lg font-bold whitespace-nowrap text-white tracking-tight font-display">Agent<span className="text-brand-400">Fi</span></span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 bg-white/5 rounded-full px-2 py-1 border border-white/5">
            {['Features', 'Architecture', 'Marketplace', 'Tokenomics'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="px-5 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all">
                {item}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <button className="hidden md:block text-xs font-mono text-gray-400 hover:text-white transition-colors">
              DOCS
            </button>
            <button type="button" className="text-white bg-brand-500 hover:bg-brand-400 font-bold rounded-full text-sm px-6 py-2.5 text-center transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(122,64,255,0.4)]">
              Launch App
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center p-2 justify-center text-gray-400 rounded-2xl md:hidden hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <Icons.X className="w-6 h-6" /> : <Icons.Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden border-t border-white/10 p-4 bg-dark-900/95 backdrop-blur-xl rounded-b-[2rem] mx-2 mb-2 animate-in slide-in-from-top-4 duration-200">
            <ul className="flex flex-col space-y-4 text-center">
              <li><a href="#features" onClick={() => setIsOpen(false)} className="block py-2 text-gray-300 hover:text-brand-400 font-medium">Features</a></li>
              <li><a href="#architecture" onClick={() => setIsOpen(false)} className="block py-2 text-gray-300 hover:text-brand-400 font-medium">Architecture</a></li>
              <li><a href="#marketplace" onClick={() => setIsOpen(false)} className="block py-2 text-gray-300 hover:text-brand-400 font-medium">Marketplace</a></li>
              <li><a href="#tokenomics" onClick={() => setIsOpen(false)} className="block py-2 text-gray-300 hover:text-brand-400 font-medium">Tokenomics</a></li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};