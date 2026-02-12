import React from 'react';
import { Icons } from './Icons';

const manualAgents = [
  'Swap Agent',
  'Send Agent',
  'Bridge Agent',
  'Yield Opportunity Agent',
  'Rebalancing Agent',
  'Analytics Agent',
  'Security Agent',
  'Token Deployer Agent',
  'NFT Mint Agent',
  'Approval Manager Agent',
];

const autonomousControls = [
  'Privy server wallets per user for continuous automation',
  'Contract + method allowlists and recipient whitelists',
  'Per-transaction and daily USD spending caps',
  '6-hour run cadence, retry with backoff, and auto-pause on repeated failures',
  'Conservative, Moderate, and Aggressive policy templates',
];

const cliCapabilities = [
  'Interactive chat with multi-turn context',
  'Direct intent execution with chain, gas, and recipient controls',
  'Execution plans and transaction previews before signing',
  'Interop operations: status, policy updates, rebalances, withdraws',
  'HTTP-accessible runtime for external agents and apps',
];

export const ArchitectureDiagram: React.FC = () => {
  return (
    <section id="architecture" className="py-20 md:py-32 bg-dark-800 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mb-14">
          <p className="text-brand-400 font-mono text-xs md:text-sm tracking-widest uppercase mb-4">The Product</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Three Modes of Interaction</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            From one-click chat execution to 24/7 autonomous management to full programmatic access,
            each mode is designed to progressively increase power without sacrificing trust.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <article className="glass-panel rounded-[2rem] p-7 border border-brand-500/30">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-brand-500/15 border border-brand-400/30 flex items-center justify-center">
                <Icons.MessageSquare className="w-5 h-5 text-brand-300" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] font-mono text-brand-300">Mode 1</p>
                <h3 className="text-2xl font-display font-bold text-white">Manual (Chat)</h3>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Users describe intent in plain English. Agents compete to execute based on best route, risk, and price.
              The user signs once and avoids direct contract-level complexity.
            </p>
            <div className="mb-5">
              <p className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-3">10 production agents live</p>
              <div className="flex flex-wrap gap-2">
                {manualAgents.map((agent) => (
                  <span key={agent} className="text-[11px] px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300">
                    {agent}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-xs text-gray-500">Marketplace discovery, ERC-8004 identity, and IPFS feedback connect execution with long-term reputation.</p>
          </article>

          <article className="glass-panel rounded-[2rem] p-7 border border-accent-cyan/25">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center">
                <Icons.Cpu className="w-5 h-5 text-accent-cyan" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] font-mono text-accent-cyan">Mode 2</p>
                <h3 className="text-2xl font-display font-bold text-white">Autonomous</h3>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Users set preferences once. Agents run continuously with policy-enforced boundaries and auditable controls.
              Yield management is live with deterministic scoring and operational safeguards.
            </p>
            <ul className="space-y-2 text-sm text-gray-300 mb-5">
              {autonomousControls.map((control) => (
                <li key={control} className="flex gap-2">
                  <span className="text-accent-cyan">•</span>
                  <span>{control}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-500">Upcoming autonomous agents: trading, prediction markets, airdrop finding, and opportunity discovery.</p>
          </article>

          <article className="glass-panel rounded-[2rem] p-7 border border-accent-pink/30">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-accent-pink/10 border border-accent-pink/30 flex items-center justify-center">
                <Icons.Terminal className="w-5 h-5 text-accent-pink" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] font-mono text-accent-pink">Mode 3</p>
                <h3 className="text-2xl font-display font-bold text-white">CLI Runtime</h3>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              A composable runtime for humans and external agents. This mode unlocks programmatic coordination,
              turning agent capabilities into building blocks for larger autonomous systems.
            </p>
            <ul className="space-y-2 text-sm text-gray-300 mb-5">
              {cliCapabilities.map((capability) => (
                <li key={capability} className="flex gap-2">
                  <span className="text-accent-pink">•</span>
                  <span>{capability}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-500">This is the bridge to Stage 2, where agents discover and hire each other autonomously.</p>
          </article>
        </div>
      </div>
    </section>
  );
};
