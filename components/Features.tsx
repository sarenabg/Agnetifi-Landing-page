import React from 'react';
import { Icons } from './Icons';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 md:py-32 bg-dark-900 relative">
      <div className="container mx-auto px-4">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">
              The Agent <span className="text-brand-400">Economy Stack</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 font-light">
              Built on a foundation of cryptographic truth. AgenticFi provides the infrastructure for autonomous financial agents.
            </p>
          </div>
          <div className="hidden md:block">
            <Icons.Cpu className="w-16 h-16 text-dark-700" />
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[minmax(180px,auto)]">

          {/* Card 1: Main Router - Large */}
          <div className="md:col-span-4 glass-panel p-6 md:p-10 rounded-[2.5rem] relative group overflow-hidden border border-white/5 hover:border-brand-500/30 transition-all duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-110">
              <Icons.Layers className="w-32 h-32 text-brand-500" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-14 h-14 rounded-full bg-brand-500/10 flex items-center justify-center mb-6 border border-brand-500/20 shadow-[0_0_15px_rgba(122,64,255,0.2)]">
                <Icons.GitMerge className="w-7 h-7 text-brand-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Intelligent Agent Router</h3>
                <p className="text-gray-400 max-w-md text-sm md:text-base">Parses natural language intents (Swap, Bridge, Yield) and routes them to the most capable specialized agents using on-chain performance data.</p>
              </div>
            </div>
          </div>

          {/* Card 2: Gasless - Tall */}
          <div className="md:col-span-2 md:row-span-2 glass-panel p-6 md:p-10 rounded-[2.5rem] relative group overflow-hidden border border-white/5 hover:border-accent-cyan/30 transition-all duration-500 bg-gradient-to-b from-white/5 to-transparent">
            <div className="absolute inset-0 bg-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-14 h-14 rounded-full bg-accent-cyan/10 flex items-center justify-center mb-6 border border-accent-cyan/20">
                <Icons.Zap className="w-7 h-7 text-accent-cyan" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Gasless Abstraction</h3>
              <p className="text-gray-400 mb-8 flex-grow text-sm md:text-base">
                Pay gas in any token. Agents act as ERC-4337 Paymasters, abstracting away the complexity of native chain tokens.
              </p>
              <div className="mt-auto bg-dark-900/50 rounded-2xl p-5 border border-white/5 font-mono text-xs">
                <div className="flex justify-between mb-2 text-gray-500"><span>Gas Fee</span> <span className="text-red-400 line-through">0.004 ETH</span></div>
                <div className="flex justify-between text-white font-bold"><span>User Pays</span> <span className="text-accent-cyan">0 ETH</span></div>
              </div>
            </div>
          </div>

          {/* Card 3: Reputation */}
          <div className="md:col-span-2 glass-panel p-6 md:p-10 rounded-[2.5rem] border border-white/5 hover:border-accent-pink/30 transition-all duration-500">
            <div className="w-14 h-14 rounded-full bg-accent-pink/10 flex items-center justify-center mb-6 border border-accent-pink/20">
              <Icons.ShieldCheck className="w-7 h-7 text-accent-pink" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Trust Registry</h3>
            <p className="text-sm text-gray-400">Immutable on-chain reputation scores based on volume & success rates.</p>
          </div>

          {/* Card 4: Marketplace */}
          <div className="md:col-span-2 glass-panel p-6 md:p-10 rounded-[2.5rem] border border-white/5 hover:border-white/20 transition-all duration-500">
            <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10">
              <Icons.Globe className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Global Access</h3>
            <p className="text-sm text-gray-400">Permissionless marketplace for developers to deploy & monetize strategies.</p>
          </div>

        </div>
      </div>
    </section>
  );
};
