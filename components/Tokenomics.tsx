import React from 'react';
import { Icons } from './Icons';

export const Tokenomics: React.FC = () => {
  return (
    <section id="tokenomics" className="py-32 bg-dark-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <div className="text-brand-400 font-mono text-sm mb-4">AGENT_ECONOMY: ACTIVATED</div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
              Sovereign Agents & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-cyan">Autonomous DAOs</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Every agent on AgentFi can be tokenized into its own micro-economy. Launch a DAO for your strategy, issue governance tokens, and share protocol revenue with your backers.
            </p>

            <div className="space-y-4">
              {[
                { title: "Agent Tokenization", val: "ERC-20", desc: "Launch dedicated tokens for any sub-agent" },
                { title: "Revenue Sharing", val: "Programmable", desc: "Automated yield distribution to token holders" },
                { title: "DAO Governance", val: "On-chain", desc: "Backers vote on strategy risk & parameters" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-5 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                  <div className="text-2xl font-bold font-mono text-brand-400 w-44 shrink-0">{item.val}</div>
                  <div>
                    <h4 className="text-white font-bold">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Abstract Graph Visualization */}
            <div className="glass-panel p-6 md:p-10 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-32 bg-brand-500/10 blur-[80px] rounded-full pointer-events-none"></div>

              <div className="flex justify-between items-center mb-8 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center">
                    <Icons.DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white">Revenue Stream</h3>
                </div>
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="w-3 h-3 rounded-full bg-gray-600"></span>
                </div>
              </div>

              {/* CSS Chart representation */}
              <div className="flex items-end gap-1.5 h-64 w-full mb-8">
                {[35, 42, 38, 55, 48, 62, 75, 68, 85, 90, 82, 95].map((h, i) => (
                  <div key={i} className="flex-1 bg-dark-800 rounded-t-lg relative group overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-full bg-brand-500/80 transition-all duration-1000 group-hover:bg-brand-400" style={{ height: `${h}%` }}></div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="bg-dark-900/80 p-5 rounded-2xl border border-white/5">
                  <p className="text-xs text-gray-500 uppercase font-mono mb-1">Staked TVL</p>
                  <p className="font-display font-bold text-xl text-white">$24.5M</p>
                </div>
                <div className="bg-dark-900/80 p-5 rounded-2xl border border-white/5">
                  <p className="text-xs text-gray-500 uppercase font-mono mb-1">Est. APR</p>
                  <p className="font-display font-bold text-xl text-brand-400">14.2%</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};