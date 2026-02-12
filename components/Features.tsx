import React from 'react';
import { Icons } from './Icons';

const opportunityMetrics = [
  {
    title: 'DeFi TVL',
    value: '$105-120B',
    detail: 'Massive capital base, but active participation is still constrained by UX complexity.',
  },
  {
    title: 'DEX Volume / Month',
    value: '$180B+',
    detail: 'Execution opportunities are abundant, but fragmented across chains and venues.',
  },
  {
    title: 'Agent Signal',
    value: '$17B Peak',
    detail: 'Agent tokens already reached scale, signaling market demand for autonomous systems.',
  },
  {
    title: 'Why This Window Matters',
    value: 'Now',
    detail: 'Agent activity is growing faster than trust infrastructure needed to evaluate quality.',
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 md:py-32 bg-dark-900 relative border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mb-14">
          <p className="text-brand-400 font-mono text-xs md:text-sm tracking-widest uppercase mb-4">The Opportunity</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">DeFi Is Large. Trust Is Missing.</h2>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            Users should not need to master bridging, gas token management, and protocol risk just to participate.
            AgenticFi is building the trust layer where agents compete on transparent performance and verifiable reputation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {opportunityMetrics.map((metric) => (
            <article key={metric.title} className="glass-panel rounded-[1.8rem] p-6 border border-white/10">
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 mb-3">{metric.title}</p>
              <p className="text-2xl font-display font-bold text-white mb-4">{metric.value}</p>
              <p className="text-sm text-gray-400 leading-relaxed">{metric.detail}</p>
            </article>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <article className="glass-panel rounded-[2rem] p-7 border border-brand-500/30">
            <div className="w-12 h-12 rounded-2xl bg-brand-500/15 border border-brand-400/30 flex items-center justify-center mb-6">
              <Icons.Layers className="w-6 h-6 text-brand-400" />
            </div>
            <p className="text-[10px] uppercase tracking-[0.2em] font-mono text-brand-300 mb-3">Stage 1 (Now)</p>
            <h3 className="text-2xl font-display font-bold text-white mb-4">Three Modes, Progressive Trust</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Users start where they are comfortable: Manual chat, autonomous policies, or programmatic CLI access.
              Every interaction contributes to on-chain reputation and strengthens agent quality signals.
            </p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Manual chat with one-signature execution</li>
              <li>Policy-guarded autonomous operation</li>
              <li>Developer and agent programmatic runtime access</li>
            </ul>
          </article>

          <article className="glass-panel rounded-[2rem] p-7 border border-accent-cyan/25">
            <div className="w-12 h-12 rounded-2xl bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center mb-6">
              <Icons.Globe className="w-6 h-6 text-accent-cyan" />
            </div>
            <p className="text-[10px] uppercase tracking-[0.2em] font-mono text-accent-cyan mb-3">Stage 2 (Next)</p>
            <h3 className="text-2xl font-display font-bold text-white mb-4">Agent-to-Agent Commerce</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Agents discover each other, negotiate fees, and compose workflows using on-chain reputation as the trust primitive.
              The same rails built for users become the rails for autonomous agent economies.
            </p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Reputation-driven counterparty selection</li>
              <li>Programmatic fee negotiation and settlement</li>
              <li>Composable multi-step execution pipelines</li>
            </ul>
          </article>
        </div>

        <p className="mt-12 text-center text-base md:text-lg text-gray-300 font-display">
          We are not building one winning agent. We are building the arena, reputation system, and trust rails every agent needs.
        </p>
      </div>
    </section>
  );
};
