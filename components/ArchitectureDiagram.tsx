import React from 'react';

export const ArchitectureDiagram: React.FC = () => {
  return (
    <section id="architecture" className="py-20 md:py-32 bg-dark-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">System Architecture</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A modular stack designed for autonomous financial execution. <br className="hidden md:block" />
            From natural language intent to on-chain finality.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical connection line (Desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-accent-pink/0 via-brand-500/50 to-accent-cyan/0 transform -translate-x-1/2 hidden md:block"></div>

          <div className="flex flex-col gap-8 md:gap-12 relative z-10">

            {/* Layer 1: User (Pink Theme) */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-pink/20 to-brand-500/20 rounded-[2rem] opacity-50 group-hover:opacity-100 blur transition duration-500"></div>
              <div className="bg-dark-900 border border-white/10 rounded-[2rem] p-6 md:p-10 relative">
                <div className="absolute right-full top-1/2 -translate-y-1/2 -rotate-90 origin-right mr-12 text-xs font-mono text-accent-pink tracking-[0.3em] font-bold hidden xl:block whitespace-nowrap">INTERFACE</div>
                <h3 className="text-sm font-mono text-accent-pink mb-6 text-center uppercase tracking-widest">User Layer</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/[0.03] p-6 rounded-2xl text-center border border-white/5 hover:border-accent-pink/40 hover:bg-accent-pink/5 transition-all duration-300 group/item">
                    <div className="mb-3 flex justify-center"><div className="w-2 h-2 rounded-full bg-accent-pink shadow-[0_0_10px_#ec4899]"></div></div>
                    <span className="font-display font-bold text-lg text-white">Chat Interface</span>
                    <p className="text-xs text-gray-500 mt-2 font-mono">Natural Language Processing</p>
                  </div>
                  <div className="bg-white/[0.03] p-6 rounded-2xl text-center border border-white/5 hover:border-accent-pink/40 hover:bg-accent-pink/5 transition-all duration-300 group/item">
                    <div className="mb-3 flex justify-center"><div className="w-2 h-2 rounded-full bg-accent-pink shadow-[0_0_10px_#ec4899]"></div></div>
                    <span className="font-display font-bold text-lg text-white">Dashboard</span>
                    <p className="text-xs text-gray-500 mt-2 font-mono">Real-time Monitoring</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Down Arrow */}
            <div className="flex justify-center -my-4 relative z-20">
              <div className="bg-dark-800 p-3 rounded-2xl border border-white/10 shadow-lg text-gray-500">
                <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
              </div>
            </div>

            {/* Layer 2: Core (Purple Theme - Primary) */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-500/30 to-brand-600/30 rounded-[2rem] opacity-75 blur-md transition duration-500"></div>
              <div className="bg-dark-900 border border-brand-500/40 rounded-[2rem] p-6 md:p-10 relative shadow-[inset_0_0_40px_rgba(122,64,255,0.05)]">
                <div className="absolute right-full top-1/2 -translate-y-1/2 -rotate-90 origin-right mr-12 text-xs font-mono text-brand-400 tracking-[0.3em] font-bold hidden xl:block whitespace-nowrap">CORE</div>
                <h3 className="text-sm font-mono text-brand-400 mb-6 text-center uppercase tracking-widest flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse"></span> Orchestration Layer
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  <div className="bg-brand-500/10 p-5 rounded-2xl text-center border border-brand-500/20 backdrop-blur-sm">
                    <div className="text-white font-bold mb-1">Intent Parser</div>
                    <div className="text-[10px] text-brand-300 font-mono">LLM &rarr; JSON</div>
                  </div>
                  <div className="bg-brand-500/20 p-6 rounded-2xl text-center border border-brand-500/40 shadow-[0_0_30px_rgba(122,64,255,0.15)] transform md:scale-105 z-10">
                    <div className="text-white font-bold text-lg mb-1">Agent Router</div>
                    <div className="text-[10px] text-brand-200 font-mono">Optimal Path Finding</div>
                  </div>
                  <div className="bg-brand-500/10 p-5 rounded-2xl text-center border border-brand-500/20 backdrop-blur-sm">
                    <div className="text-white font-bold mb-1">Reputation Registry</div>
                    <div className="text-[10px] text-brand-300 font-mono">On-chain Trust</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Down Arrow */}
            <div className="flex justify-center -my-4 relative z-20">
              <div className="bg-dark-800 p-3 rounded-2xl border border-white/10 shadow-lg text-gray-500">
                <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
              </div>
            </div>

            {/* Layer 3: Agents (Cyan Theme) */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-cyan/20 to-blue-600/20 rounded-[2rem] opacity-50 group-hover:opacity-100 blur transition duration-500"></div>
              <div className="bg-dark-900 border border-white/10 rounded-[2rem] p-6 md:p-10 relative">
                <div className="absolute right-full top-1/2 -translate-y-1/2 -rotate-90 origin-right mr-12 text-xs font-mono text-accent-cyan tracking-[0.3em] font-bold hidden xl:block whitespace-nowrap">WORKERS</div>
                <h3 className="text-sm font-mono text-accent-cyan mb-6 text-center uppercase tracking-widest">Agent Layer</h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'Yield Agent', icon: '🌾' },
                    { name: 'Swap Agent', icon: '🔄' },
                    { name: 'Bridge Agent', icon: '🌉' },
                    { name: 'Custom Agents', icon: '⚡' }
                  ].map((agent, i) => (
                    <div key={i} className="bg-white/[0.03] p-4 rounded-2xl text-center border border-white/5 hover:border-accent-cyan/40 hover:bg-accent-cyan/5 transition-all duration-300 hover:-translate-y-1">
                      <div className="text-2xl mb-2">{agent.icon}</div>
                      <div className="text-sm font-semibold text-gray-200">{agent.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Down Arrow */}
            <div className="flex justify-center -my-4 relative z-20">
              <div className="bg-dark-800 p-3 rounded-2xl border border-white/10 shadow-lg text-gray-500">
                <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
              </div>
            </div>

            {/* Layer 4: Blockchain (Dark Gradient) */}
            <div className="bg-gradient-to-r from-dark-900 via-dark-800 to-dark-900 border border-white/5 rounded-[2rem] p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
              <h3 className="text-sm font-mono text-gray-500 mb-4 relative z-10">SETTLEMENT LAYER</h3>
              <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-gray-400 font-semibold text-sm relative z-10">
                <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div> Base</span>
                <span className="hidden md:inline text-gray-700">|</span>
                <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-400"></div> Arbitrum</span>
                <span className="hidden md:inline text-gray-700">|</span>
                <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-500"></div> Optimism</span>
                <span className="hidden md:inline text-gray-700">|</span>
                <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-brand-500"></div> Ethereum</span>
                <span className="hidden md:inline text-gray-700">|</span>
                <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-teal-400"></div> Solana</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};