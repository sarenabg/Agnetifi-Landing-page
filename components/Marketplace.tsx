import React from 'react';
import { Icons } from './Icons';
import { AgentProps } from '../types';

const AgentCard: React.FC<AgentProps> = ({ name, category, reputation, tvl, apy, description, tags }) => {
  return (
    <div className="relative group">
      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500 to-accent-pink rounded-[2rem] opacity-0 group-hover:opacity-40 blur transition duration-500"></div>

      <div className="relative bg-dark-800 rounded-[1.8rem] p-1 h-full">
        <div className="bg-dark-900 rounded-[1.7rem] p-7 h-full border border-white/5 flex flex-col">

          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center shadow-inner">
                <span className="font-display font-bold text-xl text-white">{name.charAt(0)}</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white font-display leading-tight">{name}</h4>
                <span className="text-[10px] text-brand-400 uppercase tracking-widest font-mono">{category}</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></div>
              <span className="text-xs font-mono font-bold text-white">{reputation}</span>
            </div>
          </div>

          <p className="text-sm text-gray-400 mb-8 leading-relaxed flex-grow">
            {description}
          </p>

          <div className="grid grid-cols-2 gap-3 mb-8">
            <div className="bg-dark-800 p-4 rounded-2xl border border-white/5">
              <div className="text-[10px] text-gray-500 uppercase font-mono mb-1">TVL</div>
              <div className="text-sm font-bold text-white font-mono">{tvl}</div>
            </div>
            <div className="bg-dark-800 p-4 rounded-2xl border border-white/5">
              <div className="text-[10px] text-gray-500 uppercase font-mono mb-1">APY</div>
              <div className="text-sm font-bold text-brand-400 font-mono">{apy}</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag, i) => (
              <span key={i} className="text-[10px] px-3 py-1.5 rounded-full bg-white/5 text-gray-400 border border-white/5 font-mono">
                #{tag}
              </span>
            ))}
          </div>

          <button className="w-full py-4 bg-white text-black rounded-2xl font-bold text-sm hover:bg-brand-500 hover:text-white transition-all flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Deploy Agent
          </button>
        </div>
      </div>
    </div>
  );
};

export const Marketplace: React.FC = () => {
  const agents: AgentProps[] = [
    {
      name: "YieldMax Pro",
      category: "Yield Optimizer",
      reputation: 98,
      tvl: "$14.2M",
      apy: "18.2%",
      description: "Aggressive yield farming strategy across Base and Arbitrum lending markets. Auto-compounding every hour.",
      tags: ["Degen", "Lending", "Auto"]
    },
    {
      name: "Sniper Alpha",
      category: "DEX Aggregator",
      reputation: 94,
      tvl: "$45M Vol",
      apy: "N/A",
      description: "MEV-protected execution for large size swaps. Splits orders across Uniswap, Curve, and Balancer.",
      tags: ["MEV-Guard", "Swap", "Zero-Slip"]
    },
    {
      name: "BridgeRunner",
      category: "Infrastructure",
      reputation: 99,
      tvl: "$120M Vol",
      apy: "N/A",
      description: "The fastest route between L2s. Optimizes for speed over cost. Uses Across and Stargate underneath.",
      tags: ["Bridge", "Fast", "Stable"]
    }
  ];

  return (
    <section id="marketplace" className="py-24 bg-dark-900 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white">Agent Marketplace</h2>
            <p className="text-gray-400 max-w-xl">
              Verified autonomous agents ready to deploy. Audit reports and performance history stored on IPFS.
            </p>
          </div>
          <button className="text-white border-b border-brand-400 pb-0.5 hover:text-brand-400 hover:border-white transition-colors text-sm font-mono uppercase tracking-wider">
            View All 42 Agents
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {agents.map((agent, index) => (
            <div key={index} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] flex">
              <AgentCard {...agent} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};