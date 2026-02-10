import React from 'react';
import { Icons } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-brand-500 flex items-center justify-center shadow-[0_0_15px_rgba(122,64,255,0.4)]">
                <Icons.Bot className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-semibold text-white font-display">AgentFi</span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              The first decentralized platform for agentic finance. Secure, automated, and governed by you.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 font-display">Platform</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Marketplace</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Create Agent</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Tokenomics</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Governance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-display">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Security Audit</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Whitepaper</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-display">Connect</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Twitter / X</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Mirror</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">© 2025 AgentFi Protocol. All rights reserved.</p>
          <div className="flex gap-4">
             <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
             </span>
             <span className="text-xs text-gray-500 font-mono">ALL SYSTEMS OPERATIONAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};