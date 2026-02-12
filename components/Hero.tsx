import React, { useEffect, useState } from 'react';
import { Icons } from './Icons';

const TypingEffect = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 32);

    return () => clearInterval(timer);
  }, [text]);

  return (
    <span className="font-mono text-xs sm:text-sm text-white font-medium break-words">
      {displayText}
      <span className="animate-pulse text-brand-400">_</span>
    </span>
  );
};

export const Hero: React.FC = () => {
  const [step, setStep] = useState(0);
  const [rotationX, setRotationX] = useState(12);
  const terminalRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!terminalRef.current) return;
      const rect = terminalRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const centerY = viewportHeight / 2;
      const elementCenterY = rect.top + rect.height / 2;
      const distanceFromCenter = elementCenterY - centerY;
      const maxDistance = viewportHeight / 2;
      const normalizedDistance = Math.max(0, Math.min(1, distanceFromCenter / maxDistance));

      setRotationX(normalizedDistance * 12);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sequence = [
      { time: 700, action: () => setStep(1) },
      { time: 2600, action: () => setStep(2) },
      { time: 4200, action: () => setStep(3) },
    ];

    const timeouts = sequence.map(({ time, action }) => setTimeout(action, time));
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <section className="relative pt-32 pb-28 md:pt-40 md:pb-40 overflow-hidden min-h-screen flex flex-col items-center justify-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-64 h-64 md:w-96 md:h-96 bg-brand-500/20 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-[20%] right-[20%] w-64 h-64 md:w-96 md:h-96 bg-accent-pink/10 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 grid-bg opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-300 text-[10px] md:text-xs font-mono mb-8 hover:bg-white/10 transition-colors cursor-default">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse"></span>
            LIVE: 10 AGENTS • 16 CONTRACTS • 6 CHAINS
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight mb-8 text-white">
            Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-white to-accent-cyan">Trust Layer</span>
            <br />
            for the On-Chain Agent Economy
          </h1>

          <p className="text-base md:text-xl text-gray-400 mb-10 max-w-3xl leading-relaxed px-4">
            DeFi is massive, but too complex for most users. AgenticFi turns intent into execution across Manual, Autonomous,
            and CLI modes, with verifiable on-chain reputation at the core.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0">
            <a
              href="#architecture"
              className="group relative flex items-center justify-center gap-2 px-8 py-4 bg-brand-500 text-white rounded-full font-bold hover:bg-brand-400 transition-all overflow-hidden shadow-[0_0_20px_rgba(122,64,255,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Product Modes
                <Icons.ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="#marketplace"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-semibold hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm"
            >
              <Icons.Terminal className="w-5 h-5 text-gray-400" />
              View What Is Live
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-14 px-2 sm:px-0">
          {[
            { label: 'DeFi TVL', value: '$105-120B' },
            { label: 'DEX Volume / Month', value: '$180B+' },
            { label: 'Peak Agent Token MCap', value: '$17B' },
            { label: 'AI Trading Share (2026-27)', value: '~95%' },
          ].map((item) => (
            <div key={item.label} className="glass-panel rounded-2xl p-4 border border-white/10 text-left">
              <p className="text-[11px] uppercase tracking-widest text-gray-500 font-mono mb-2">{item.label}</p>
              <p className="text-xl font-display font-bold text-white">{item.value}</p>
            </div>
          ))}
        </div>

        <div ref={terminalRef} className="max-w-3xl mx-auto perspective-1000 px-2 sm:px-4">
          <div
            className="glass-panel rounded-[2rem] p-1 shadow-2xl border-t border-white/10 transition-transform duration-100 ease-out"
            style={{ transform: `rotateX(${rotationX}deg)` }}
          >
            <div className="bg-dark-900/90 rounded-[1.9rem] overflow-hidden border border-white/5">
              <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500 uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                  TrustRouter_v2.ts
                </div>
              </div>

              <div className="p-4 sm:p-8 h-[410px] flex flex-col justify-end space-y-6 relative overflow-hidden bg-gradient-to-b from-dark-900 to-black/50">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>

                <div className="space-y-6 z-10">
                  <div className={`flex gap-3 sm:gap-4 items-start ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-500`}>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-2xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-[10px] sm:text-xs font-bold text-brand-400 font-mono">USR</span>
                    </div>
                    <div className="bg-brand-500/5 border border-brand-500/20 rounded-3xl rounded-tl-none p-4 sm:p-5 max-w-[85%] shadow-lg backdrop-blur-md">
                      {step >= 1 && <TypingEffect text="Deploy 10 ETH conservatively and keep all approvals scoped to trusted contracts only." />}
                    </div>
                  </div>

                  <div className={`flex gap-3 sm:gap-4 items-start ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-500`}>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(122,64,255,0.2)]">
                      <Icons.Bot className="w-5 h-5 sm:w-6 sm:h-6 text-brand-400" />
                    </div>
                    <div className="space-y-3 w-full max-w-[90%]">
                      <div className="flex items-center gap-2 text-xs text-brand-400 font-mono pl-2">
                        <Icons.Loader2 className="w-3 h-3 animate-spin" />
                        <span>Scoring agents by reputation, fee, and historical performance...</span>
                      </div>

                      <div className={`bg-dark-800/90 border border-brand-500/30 rounded-3xl p-4 sm:p-5 backdrop-blur-sm ${step >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} transition-all duration-500 shadow-xl`}>
                        <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-3">
                          <span className="text-xs font-bold text-white uppercase tracking-wider">Execution Plan</span>
                          <span className="text-[10px] bg-brand-500/20 text-brand-400 px-2 py-1 rounded-lg font-mono border border-brand-500/20">Risk: Low</span>
                        </div>
                        <div className="space-y-3 font-mono text-xs">
                          <div className="flex justify-between text-gray-400">
                            <span>1. Route to top scored yield venue</span>
                            <span className="text-white">Score 94</span>
                          </div>
                          <div className="flex justify-between text-gray-400">
                            <span>2. Apply allowlist + spend policy</span>
                            <span className="text-white">Policy Locked</span>
                          </div>
                          <div className="flex justify-between text-gray-400">
                            <span>3. Start 6h autonomous checks</span>
                            <span className="text-brand-400 font-bold">Enabled</span>
                          </div>
                        </div>
                        <button className="w-full mt-4 bg-brand-500 hover:bg-brand-400 text-white text-xs font-bold py-3 rounded-xl transition-colors border border-brand-400/20 shadow-lg">
                          Confirm Plan
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 border-t border-white/5 bg-dark-800">
                <div className="flex items-center gap-3 bg-dark-900 border border-white/5 rounded-2xl px-5 py-3 shadow-inner">
                  <Icons.Command className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-400 font-mono">Manual mode active. CLI and autonomous policies available.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
