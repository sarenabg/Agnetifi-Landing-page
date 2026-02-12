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
    }, 40);
    return () => clearInterval(timer);
  }, [text]);

  return <span className="font-mono text-xs sm:text-sm text-white font-medium break-words">{displayText}<span className="animate-pulse text-brand-400">_</span></span>;
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

      // Calculate rotation based on distance from center
      // When at center or above, rotation is 0.
      // When at bottom, rotation is 12.
      const distanceFromCenter = elementCenterY - centerY;
      const maxDistance = viewportHeight / 2;
      const normalizedDistance = Math.max(0, Math.min(1, distanceFromCenter / maxDistance));

      setRotationX(normalizedDistance * 12);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sequence = [
      { time: 800, action: () => setStep(1) },
      { time: 3000, action: () => setStep(2) },
      { time: 4500, action: () => setStep(3) },
    ];

    let timeouts: ReturnType<typeof setTimeout>[] = [];
    sequence.forEach(({ time, action }) => {
      timeouts.push(setTimeout(action, time));
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <section className="relative pt-32 pb-32 md:pt-40 md:pb-48 overflow-hidden min-h-screen flex flex-col items-center justify-center">
      {/* Background FX */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-64 h-64 md:w-96 md:h-96 bg-brand-500/20 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-[20%] right-[20%] w-64 h-64 md:w-96 md:h-96 bg-accent-pink/10 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 grid-bg opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-16">

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-300 text-[10px] md:text-xs font-mono mb-8 hover:bg-white/10 transition-colors cursor-default">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse"></span>
            V2.0 LIVE ON MAINNET
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight mb-8 text-white">
            The Operating System <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-white to-accent-cyan">For DeFi Agents</span>
          </h1>

          <p className="text-base md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed px-4">
            Orchestrate complex on-chain strategies with natural language.
            <span className="text-gray-200 block sm:inline"> Zero friction. Gasless execution. Pure alpha.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0">
            <button className="group relative flex items-center justify-center gap-2 px-8 py-4 bg-brand-500 text-white rounded-full font-bold hover:bg-brand-400 transition-all overflow-hidden shadow-[0_0_20px_rgba(122,64,255,0.4)]">
              <span className="relative z-10 flex items-center gap-2">Launch App <Icons.ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
            </button>
            <button className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-semibold hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm">
              <Icons.Terminal className="w-5 h-5 text-gray-400" /> Documentation
            </button>
          </div>
        </div>

        {/* Floating Interface */}
        <div ref={terminalRef} className="max-w-3xl mx-auto perspective-1000 px-2 sm:px-4">
          <div
            className="glass-panel rounded-[2rem] p-1 shadow-2xl border-t border-white/10 transition-transform duration-100 ease-out"
            style={{ transform: `rotateX(${rotationX}deg)` }}
          >
            <div className="bg-dark-900/90 rounded-[1.9rem] overflow-hidden border border-white/5">

              {/* Terminal Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500 uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                  Orchestrator_Main.ts
                </div>
              </div>

              {/* Chat Content */}
              <div className="p-4 sm:p-8 h-[420px] flex flex-col justify-end space-y-6 relative overflow-hidden bg-gradient-to-b from-dark-900 to-black/50">
                {/* Background Grid inside terminal */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>

                {/* Messages */}
                <div className="space-y-6 z-10">
                  <div className={`flex gap-3 sm:gap-4 items-start ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-500`}>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-2xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-[10px] sm:text-xs font-bold text-brand-400 font-mono">USR</span>
                    </div>
                    <div className="bg-brand-500/5 border border-brand-500/20 rounded-3xl rounded-tl-none p-4 sm:p-5 max-w-[85%] shadow-lg backdrop-blur-md">
                      {step >= 1 && <TypingEffect text="Bridge 10 ETH to Base, swap for DEGEN, and supply to the highest yield Morpho vault." />}
                    </div>
                  </div>

                  <div className={`flex gap-3 sm:gap-4 items-start ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-500`}>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(122,64,255,0.2)]">
                      <Icons.Bot className="w-5 h-5 sm:w-6 sm:h-6 text-brand-400" />
                    </div>
                    <div className="space-y-3 w-full max-w-[90%]">
                      <div className="flex items-center gap-2 text-xs text-brand-400 font-mono pl-2">
                        <Icons.Loader2 className="w-3 h-3 animate-spin" />
                        <span>Simulating execution paths...</span>
                      </div>

                      {/* Interactive Card */}
                      <div className={`bg-dark-800/90 border border-brand-500/30 rounded-3xl p-4 sm:p-5 backdrop-blur-sm ${step >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} transition-all duration-500 shadow-xl`}>
                        <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-3">
                          <span className="text-xs font-bold text-white uppercase tracking-wider">Execution Plan</span>
                          <span className="text-[10px] bg-brand-500/20 text-brand-400 px-2 py-1 rounded-lg font-mono border border-brand-500/20">Est. APY: 12.4%</span>
                        </div>
                        <div className="space-y-3 font-mono text-xs">
                          <div className="flex justify-between text-gray-400">
                            <span>1. Bridge (Across)</span>
                            <span className="text-white">~2 mins</span>
                          </div>
                          <div className="flex justify-between text-gray-400">
                            <span>2. Swap (Aerodrome)</span>
                            <span className="text-white">0.05% slip</span>
                          </div>
                          <div className="flex justify-between text-gray-400">
                            <span>3. Deposit (Morpho)</span>
                            <span className="text-brand-400 font-bold">Gasless</span>
                          </div>
                        </div>
                        <button className="w-full mt-4 bg-brand-500 hover:bg-brand-400 text-white text-xs font-bold py-3 rounded-xl transition-colors border border-brand-400/20 shadow-lg">
                          Confirm Execution
                        </button>
                      </div>

                    </div>
                  </div>
                </div>

              </div>

              {/* Input Bar */}
              <div className="p-3 border-t border-white/5 bg-dark-800">
                <div className="flex items-center gap-3 bg-dark-900 border border-white/5 rounded-2xl px-5 py-3 shadow-inner">
                  <Icons.Command className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-400 font-mono">Waiting for input...</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};