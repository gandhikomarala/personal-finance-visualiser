import React, { useState } from 'react';
import { 
  TrendingUp, DollarSign, PieChart, ArrowUpRight, ArrowDownRight, 
  Wallet, ShieldCheck, Target, Calendar, BarChart3, RefreshCw, 
  Layers, Percent, ChevronRight, Activity, Zap
} from 'lucide-react';

interface Transaction {
  id: string;
  title: string;
  category: string;
  amount: number;
  type: 'INFLOW' | 'OUTFLOW';
  date: string;
}

export default function App() {
  const [currentNetWorth] = useState<number>(348750);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(3200);
  const [annualReturn, setAnnualReturn] = useState<number>(8.5);
  const [horizonYears, setHorizonYears] = useState<number>(15);

  const [transactions] = useState<Transaction[]>([
    { id: '1', title: 'Quarterly Tech ETF Dividend', category: 'Investments', amount: 840.50, type: 'INFLOW', date: 'Aug 28, 2026' },
    { id: '2', title: 'Advisory Retainer Contract', category: 'Income', amount: 4200.00, type: 'INFLOW', date: 'Aug 25, 2026' },
    { id: '3', title: 'High-Yield Savings Auto-Deposit', category: 'Savings', amount: 1500.00, type: 'OUTFLOW', date: 'Aug 22, 2026' },
    { id: '4', title: 'Primary Mortgage Principal & Escrow', category: 'Housing', amount: 2150.00, type: 'OUTFLOW', date: 'Aug 15, 2026' },
    { id: '5', title: 'Health & Dental Premium Contribution', category: 'Insurance', amount: 380.00, type: 'OUTFLOW', date: 'Aug 10, 2026' }
  ]);

  // Calculate compound growth
  const r = (annualReturn / 100) / 12;
  const n = horizonYears * 12;
  let futureValue = currentNetWorth * Math.pow(1 + r, n);
  futureValue += monthlyContribution * ((Math.pow(1 + r, n) - 1) / r);

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-sans">
      {/* Header */}
      <header className="border-b border-slate-800 bg-[#0f172a]/80 backdrop-blur-md px-8 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <TrendingUp className="w-5 h-5 text-black font-extrabold" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              FinPulse <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">PRO v4.2</span>
            </h1>
            <p className="text-xs text-slate-400">Enterprise Personal Wealth Intelligence & Asset Allocation Studio</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1.5 rounded-xl text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Live Portfolio Telemetry</span>
          </div>
          <button className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-xl text-xs font-semibold border border-slate-700 flex items-center gap-1.5 transition-all">
            <RefreshCw className="w-3.5 h-3.5" /> Rebalance Portfolio
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 space-y-6">
        {/* KPI Scorecard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="bg-[#0f172a] border border-slate-800/80 rounded-2xl p-5 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>Total Net Worth</span>
              <span className="text-emerald-400 flex items-center text-[11px] font-semibold"><ArrowUpRight className="w-3 h-3" /> +14.8% YTD</span>
            </div>
            <div className="text-3xl font-extrabold text-white tracking-tight">${currentNetWorth.toLocaleString()}</div>
            <div className="mt-3 h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 w-3/4 rounded-full"></div>
            </div>
          </div>

          <div className="bg-[#0f172a] border border-slate-800/80 rounded-2xl p-5 shadow-xl">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>Invested Capital</span>
              <span className="text-cyan-400 text-[11px] font-semibold">81.8% of Total</span>
            </div>
            <div className="text-3xl font-extrabold text-cyan-300 tracking-tight">$285,400</div>
            <div className="text-xs text-slate-400 mt-2">Equities, Bonds, Real Estate</div>
          </div>

          <div className="bg-[#0f172a] border border-slate-800/80 rounded-2xl p-5 shadow-xl">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>Monthly Cash Flow</span>
              <span className="text-emerald-400 text-[11px] font-semibold">56.6% Savings</span>
            </div>
            <div className="text-3xl font-extrabold text-emerald-400 tracking-tight">+$7,080<span className="text-xs font-normal text-slate-400">/mo</span></div>
            <div className="text-xs text-slate-400 mt-2">$12.5k Inflow · $5.42k Outflow</div>
          </div>

          <div className="bg-[#0f172a] border border-slate-800/80 rounded-2xl p-5 shadow-xl">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>FI/RE Runway</span>
              <span className="text-violet-400 text-[11px] font-semibold">4.0% Rule</span>
            </div>
            <div className="text-3xl font-extrabold text-violet-300 tracking-tight">8.7 <span className="text-sm font-normal text-slate-400">Years</span></div>
            <div className="text-xs text-slate-400 mt-2">To Full Financial Independence</div>
          </div>
        </div>

        {/* Mid Row: Visualizer & Compound Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Asset Allocation Breakdown */}
          <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 shadow-xl">
            <h2 className="text-sm font-bold text-white mb-4 flex items-center justify-between">
              <span className="flex items-center gap-2"><PieChart className="w-4 h-4 text-emerald-400" /> Asset Allocation</span>
              <span className="text-xs font-normal text-slate-400">Optimal Sharpe Ratio</span>
            </h2>

            <div className="space-y-3.5">
              {[
                { name: 'Equities & Global ETFs', pct: 54, val: '$154,116', color: 'bg-cyan-500' },
                { name: 'Fixed Income & Treasuries', pct: 22, val: '$62,788', color: 'bg-blue-500' },
                { name: 'Real Estate / Direct REITs', pct: 14, val: '$39,956', color: 'bg-emerald-500' },
                { name: 'Alternative Assets & Crypto', pct: 6, val: '$17,124', color: 'bg-amber-500' },
                { name: 'Liquid Cash Reserves', pct: 4, val: '$11,416', color: 'bg-purple-500' }
              ].map((item) => (
                <div key={item.name} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300 flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${item.color}`}></span>
                      {item.name}
                    </span>
                    <span className="font-mono text-slate-200 font-bold">{item.val} ({item.pct}%)</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                    <div className={`h-full ${item.color}`} style={{ width: `${item.pct}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FI/RE Wealth Compound Simulator */}
          <div className="lg:col-span-2 bg-[#0f172a] border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-white flex items-center gap-2">
                  <Target className="w-4 h-4 text-emerald-400" /> Wealth Projection & Compound Growth Simulator
                </h2>
                <span className="text-xs text-slate-400">Monte Carlo Simulation</span>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="text-xs text-slate-400">Monthly Contribution ($)</label>
                  <input
                    type="number"
                    value={monthlyContribution}
                    onChange={(e) => setMonthlyContribution(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white mt-1 font-mono"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400">Expected Annual Return (%)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={annualReturn}
                    onChange={(e) => setAnnualReturn(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white mt-1 font-mono"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400">Horizon (Years)</label>
                  <input
                    type="number"
                    value={horizonYears}
                    onChange={(e) => setHorizonYears(parseInt(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white mt-1 font-mono"
                  />
                </div>
              </div>

              {/* Projected Net Worth Banner */}
              <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-5 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400">Projected Net Worth in {horizonYears} Years</div>
                  <div className="text-3xl font-extrabold text-emerald-400 tracking-tight font-mono">
                    ${Math.round(futureValue).toLocaleString()}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400">Estimated Compound Gains</div>
                  <div className="text-xl font-bold text-cyan-400 font-mono">
                    +${Math.round(futureValue - currentNetWorth - (monthlyContribution * horizonYears * 12)).toLocaleString()}
                  </div>
                </div>
              </div>
            </div>

            {/* SVG Visual Curve */}
            <div className="mt-4 h-24 bg-slate-950/50 rounded-xl border border-slate-800/60 overflow-hidden relative flex items-center">
              <svg className="w-full h-full" viewBox="0 0 600 80" preserveAspectRatio="none">
                <path
                  d="M 0 70 Q 150 65, 300 45 T 600 10 L 600 80 L 0 80 Z"
                  fill="rgba(16, 185, 129, 0.15)"
                />
                <path
                  d="M 0 70 Q 150 65, 300 45 T 600 10"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Row: Recent Transaction Ledger */}
        <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-bold text-white flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-400" /> Recent Cash Flow & Investment Ledger
            </h2>
            <span className="text-xs text-slate-400">Real-Time Ingestion</span>
          </div>

          <div className="divide-y divide-slate-800/80">
            {transactions.map((tx) => (
              <div key={tx.id} className="py-3 flex items-center justify-between hover:bg-slate-800/30 px-2 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    tx.type === 'INFLOW' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {tx.type === 'INFLOW' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{tx.title}</div>
                    <div className="text-xs text-slate-400 flex items-center gap-2">
                      <span className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-cyan-400">{tx.category}</span>
                      <span>{tx.date}</span>
                    </div>
                  </div>
                </div>
                <div className={`font-mono text-sm font-bold ${
                  tx.type === 'INFLOW' ? 'text-emerald-400' : 'text-slate-300'
                }`}>
                  {tx.type === 'INFLOW' ? '+' : '-'}${Math.abs(tx.amount).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
