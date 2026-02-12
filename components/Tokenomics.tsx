import React from 'react';

const comparisonRows = [
  {
    capability: 'DeFi-native focus',
    olas: 'No (generic purpose)',
    virtuals: 'No (entertainment-first)',
    theoriq: 'Yes',
    agenticfi: 'Yes',
  },
  {
    capability: 'Competitive intent marketplace',
    olas: 'No',
    virtuals: 'No',
    theoriq: 'No',
    agenticfi: 'Yes',
  },
  {
    capability: 'On-chain reputation',
    olas: 'No',
    virtuals: 'No',
    theoriq: 'No',
    agenticfi: 'Yes (ERC-8004)',
  },
  {
    capability: 'Performance-backed tokenization',
    olas: 'No',
    virtuals: 'Speculation-led',
    theoriq: 'No',
    agenticfi: 'Yes',
  },
  {
    capability: 'Progressive trust modes',
    olas: 'No',
    virtuals: 'No',
    theoriq: 'No',
    agenticfi: 'Yes',
  },
  {
    capability: 'Cross-chain coverage',
    olas: '9 chains',
    virtuals: '3 chains',
    theoriq: 'ETH only',
    agenticfi: '6 chains',
  },
  {
    capability: 'Manual + Autonomous + CLI',
    olas: 'No',
    virtuals: 'No',
    theoriq: 'No',
    agenticfi: 'Yes',
  },
];

const roadmap = [
  {
    week: 'Weeks 1-4',
    items: [
      'Marketplace UI completion',
      'Intent auction system live',
      'Yield optimizer hardening',
      'Staking and slashing activation',
    ],
  },
  {
    week: 'Weeks 5-8',
    items: [
      'Multi-agent orchestration',
      'Circuit breakers and insurance pool',
      'Gasless transactions and trading agents',
      'Prediction market agent rollout',
    ],
  },
  {
    week: 'Weeks 9-12',
    items: [
      'Performance benchmark suite',
      'Privacy layer delivery',
      'Agent-to-agent commerce protocol',
      'Enterprise API and full autonomous suite',
    ],
  },
];

const revenueScenarios = [
  { volume: '$10M / day', annualized: '$365K' },
  { volume: '$100M / day', annualized: '$3.65M' },
  { volume: '$500M / day', annualized: '$18.25M' },
];

export const Tokenomics: React.FC = () => {
  return (
    <section id="tokenomics" className="py-24 md:py-32 bg-dark-800 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mb-12">
          <p className="text-brand-400 font-mono text-xs md:text-sm tracking-widest uppercase mb-4">Go To Market</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">Positioning, Monetization, and Roadmap</h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Manual chat is the wedge, autonomous execution drives retention, and CLI composability expands developer and
            agent adoption. Revenue is generated through platform and performance fees, with additional marketplace and API layers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
          <div className="glass-panel rounded-2xl p-5 border border-white/10">
            <p className="text-[11px] uppercase tracking-widest text-gray-500 font-mono mb-2">Mode 1</p>
            <p className="text-lg font-display font-bold text-white mb-2">Manual Chat (Wedge)</p>
            <p className="text-sm text-gray-400">Lowest trust threshold; captures first-time users with intent-based execution.</p>
          </div>
          <div className="glass-panel rounded-2xl p-5 border border-white/10">
            <p className="text-[11px] uppercase tracking-widest text-gray-500 font-mono mb-2">Mode 2</p>
            <p className="text-lg font-display font-bold text-white mb-2">Autonomous Yield (Retention)</p>
            <p className="text-sm text-gray-400">Continuous policy-guarded portfolio operation increases stickiness and activity.</p>
          </div>
          <div className="glass-panel rounded-2xl p-5 border border-white/10">
            <p className="text-[11px] uppercase tracking-widest text-gray-500 font-mono mb-2">Mode 3</p>
            <p className="text-lg font-display font-bold text-white mb-2">CLI Runtime (Growth)</p>
            <p className="text-sm text-gray-400">Composable agent runtime accelerates ecosystem and partner integrations.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-10">
          <article className="glass-panel rounded-[2rem] p-7 border border-brand-500/30 overflow-x-auto">
            <h3 className="text-2xl font-display font-bold text-white mb-5">Why Us, Not Them</h3>
            <table className="w-full min-w-[740px] text-sm">
              <thead>
                <tr className="text-left text-gray-400 border-b border-white/10">
                  <th className="py-3 pr-3 font-mono text-[11px] uppercase tracking-wider">Capability</th>
                  <th className="py-3 pr-3">Olas</th>
                  <th className="py-3 pr-3">Virtuals</th>
                  <th className="py-3 pr-3">Theoriq</th>
                  <th className="py-3">AgenticFi</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.capability} className="border-b border-white/5">
                    <td className="py-3 pr-3 text-gray-300">{row.capability}</td>
                    <td className="py-3 pr-3 text-gray-500">{row.olas}</td>
                    <td className="py-3 pr-3 text-gray-500">{row.virtuals}</td>
                    <td className="py-3 pr-3 text-gray-500">{row.theoriq}</td>
                    <td className="py-3 text-brand-200 font-medium">{row.agenticfi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>

          <article className="glass-panel rounded-[2rem] p-7 border border-accent-cyan/30">
            <h3 className="text-2xl font-display font-bold text-white mb-5">Revenue Model</h3>
            <div className="space-y-4 mb-6">
              <div className="rounded-2xl border border-white/10 bg-dark-900/60 p-4">
                <p className="text-[11px] uppercase tracking-widest font-mono text-gray-500 mb-2">Protocol Fees</p>
                <p className="text-white font-semibold">20% platform fee on all agent fees</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-dark-900/60 p-4">
                <p className="text-[11px] uppercase tracking-widest font-mono text-gray-500 mb-2">Autonomous Fees</p>
                <p className="text-white font-semibold">10% performance fee on autonomous yield</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-dark-900/60 p-4">
                <p className="text-[11px] uppercase tracking-widest font-mono text-gray-500 mb-2">Expansion</p>
                <p className="text-white font-semibold">Featured listings, verification, enterprise API, white-label SDK</p>
              </div>
            </div>

            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-400 border-b border-white/10">
                  <th className="py-2 pr-3 font-mono text-[11px] uppercase tracking-wider">Daily Volume</th>
                  <th className="py-2">Annualized Revenue</th>
                </tr>
              </thead>
              <tbody>
                {revenueScenarios.map((scenario) => (
                  <tr key={scenario.volume} className="border-b border-white/5">
                    <td className="py-3 pr-3 text-gray-300">{scenario.volume}</td>
                    <td className="py-3 text-white font-medium">{scenario.annualized}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
          {roadmap.map((phase) => (
            <article key={phase.week} className="glass-panel rounded-[2rem] p-6 border border-white/10">
              <p className="text-[11px] uppercase tracking-widest font-mono text-brand-300 mb-3">{phase.week}</p>
              <ul className="space-y-2 text-sm text-gray-300">
                {phase.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-brand-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <article className="glass-panel rounded-[2rem] p-7 border border-white/10">
          <h3 className="text-2xl font-display font-bold text-white mb-4">12-Month Targets</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-white/10 bg-dark-900/60 p-5">
              <p className="text-[11px] uppercase tracking-widest font-mono text-gray-500 mb-2">3 Months</p>
              <p className="text-white font-semibold mb-1">$5M TVL • 15+ agents</p>
              <p className="text-xs text-gray-500">Platform integration and go-live completion.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-dark-900/60 p-5">
              <p className="text-[11px] uppercase tracking-widest font-mono text-gray-500 mb-2">6 Months</p>
              <p className="text-white font-semibold mb-1">$50M TVL • 30+ agents</p>
              <p className="text-xs text-gray-500">Targeting $500K run-rate with stronger retention loops.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-dark-900/60 p-5">
              <p className="text-[11px] uppercase tracking-widest font-mono text-gray-500 mb-2">12 Months</p>
              <p className="text-white font-semibold mb-1">$500M TVL • 200+ agents</p>
              <p className="text-xs text-gray-500">Targeting $5M+ annualized revenue trajectory.</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
