import React from 'react';

const contracts = [
  { name: 'ERC8004IdentityRegistry', purpose: 'ERC-8004 identity NFTs with IPFS metadata and signature-based wallet updates.' },
  { name: 'ERC8004ReputationRegistry', purpose: 'On-chain success rate, volume, fees, unique users, and feedback recording.' },
  { name: 'AgentFractionalizationVault', purpose: 'Locks identity NFTs and mints ERC-20 share tokens for fractional ownership.' },
  { name: 'AgentShareToken', purpose: 'ERC-20 + Permit + Votes with revenue distribution and governance rights.' },
  { name: 'AgentGovernor', purpose: 'Per-agent DAO governance with configurable quorum, delay, and voting periods.' },
  { name: 'FeeCollector', purpose: 'Splits fees across owner, treasury, and share-token holder distributions.' },
];

const integrations = [
  'Uniswap V3',
  '0x Protocol',
  'Aave V3',
  'Compound V3',
  'Spark',
  'Fluid',
  'LI.FI',
  'DefiLlama',
  'Privy',
];

const chains = ['Ethereum', 'Base', 'Arbitrum', 'Optimism', 'Polygon', 'Base Sepolia'];

const routerWeights = [
  { label: 'Reputation', value: '40%' },
  { label: 'Fee', value: '25%' },
  { label: 'User Preference', value: '20%' },
  { label: 'Historical Performance', value: '15%' },
];

export const Marketplace: React.FC = () => {
  return (
    <section id="marketplace" className="py-24 md:py-32 bg-dark-900 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mb-12">
          <p className="text-brand-400 font-mono text-xs md:text-sm tracking-widest uppercase mb-4">What We Have Built</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">Live Platform, Not a Whitepaper</h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Production deployment includes 10 live agents across 6 chains, a 16-contract trust stack,
            and the infrastructure required for reputation-driven agent competition.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[
            { label: 'Production Agents', value: '10' },
            { label: 'Smart Contracts', value: '16' },
            { label: 'Supported Chains', value: '6' },
            { label: 'SDK/API Surface', value: '40+ Endpoints' },
          ].map((item) => (
            <div key={item.label} className="glass-panel rounded-2xl p-4 border border-white/10">
              <p className="text-[11px] uppercase tracking-wider text-gray-500 font-mono mb-2">{item.label}</p>
              <p className="text-xl md:text-2xl font-display font-bold text-white">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-10">
          <article className="glass-panel rounded-[2rem] p-7 border border-white/10">
            <h3 className="text-2xl font-display font-bold text-white mb-5">Core Contract Stack</h3>
            <div className="space-y-4">
              {contracts.map((contract) => (
                <div key={contract.name} className="p-4 rounded-2xl bg-dark-800/80 border border-white/5">
                  <p className="text-sm font-mono text-brand-300 mb-2">{contract.name}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{contract.purpose}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="glass-panel rounded-[2rem] p-7 border border-brand-500/25">
            <h3 className="text-2xl font-display font-bold text-white mb-5">Execution & Trust Infrastructure</h3>

            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-mono mb-3">Integrations</p>
              <div className="flex flex-wrap gap-2">
                {integrations.map((integration) => (
                  <span key={integration} className="text-[11px] px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300">
                    {integration}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-mono mb-3">Chain Coverage</p>
              <div className="flex flex-wrap gap-2">
                {chains.map((chain) => (
                  <span key={chain} className="text-[11px] px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/25 text-brand-200">
                    {chain}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-mono mb-3">Agent Router Weights</p>
              <div className="space-y-3">
                {routerWeights.map((weight) => (
                  <div key={weight.label} className="flex items-center justify-between rounded-xl bg-dark-800/80 border border-white/5 p-3">
                    <span className="text-sm text-gray-300">{weight.label}</span>
                    <span className="text-sm font-mono text-white">{weight.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>

        <article className="glass-panel rounded-[2rem] p-7 border border-accent-cyan/30">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Why This Position Is Defensible</h3>
          <p className="text-gray-400 leading-relaxed mb-5">
            Solver network effects improve execution quality as more agents join. Reputation data compounds and cannot be copied overnight.
            ERC-8004 identity alignment positions AgenticFi inside an emerging standard, while Stage 2 reuses the exact same trust primitives.
          </p>
          <p className="text-sm text-gray-500">
            In practical terms: more agents lead to better routing, better routing attracts more users, and each interaction strengthens reputation quality for the next cycle.
          </p>
        </article>
      </div>
    </section>
  );
};
