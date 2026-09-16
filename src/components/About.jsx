import { X, TrendingDown, Brain, Database } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <span className="badge-forest inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            The Problem
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1a3a2a] mb-5">
            Built to Replace the<br />Daily Production Guess
          </h2>
          <p className="text-lg text-[#4a5568] leading-relaxed">
            Every fresh-food operator faces the same daily decision — before customers arrive. Make too much, and food is wasted. Make too little, and revenue is lost. Most businesses still rely on intuition.
          </p>
        </div>

        {/* Survey callout */}
        <div className="bg-[#f9f5ee] border border-[#e8e0d0] rounded-2xl p-6 mb-16 reveal">
          <p className="text-center text-sm text-[#718096] mb-5 font-medium">
            From our early market-validation survey of 30 UK fresh-food businesses:
          </p>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { value: '53%', label: 'use manager intuition for production decisions' },
              { value: '83%', label: 'experience unsold stock at least sometimes' },
              { value: '80%', label: 'consider reducing food waste very or extremely important' },
            ].map((s) => (
              <div key={s.value}>
                <p className="text-3xl font-extrabold text-[#2d5a3d]">{s.value}</p>
                <p className="text-sm text-[#4a5568] mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cost of the problem */}
        <div className="grid md:grid-cols-2 gap-6 mb-20 reveal">
          <div className="rounded-2xl border-2 border-red-100 bg-red-50 p-7">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                <X size={20} className="text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-red-800">Produce Too Much</h3>
            </div>
            <ul className="space-y-3">
              {[
                'Food is wasted and ingredient costs are lost',
                'Labour costs are wasted on over-production',
                'Margins are reduced on every unsold item',
                'Disposal costs increase',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-red-700 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border-2 border-amber-100 bg-amber-50 p-7">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                <TrendingDown size={20} className="text-amber-700" />
              </div>
              <h3 className="text-xl font-bold text-amber-800">Produce Too Little</h3>
            </div>
            <ul className="space-y-3">
              {[
                'Products sell out and revenue is lost',
                'Customers may be disappointed or turned away',
                'Businesses miss sales opportunities',
                'Reputation for reliability suffers',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-amber-800 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Comparison: Traditional vs WasteWise */}
        <div className="reveal">
          <h3 className="text-2xl font-bold text-center text-[#1a3a2a] mb-10">
            How WasteWise Changes the Decision
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Traditional */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-7">
              <div className="flex items-center gap-2 mb-5">
                <Database size={18} className="text-gray-400" />
                <p className="text-base font-bold text-gray-600 uppercase tracking-wide text-xs">Traditional Approach</p>
              </div>
              <div className="space-y-3 mb-6">
                {[
                  'Historical sales averages',
                  'Manager experience & intuition',
                  'Basic POS reports',
                  'Guesswork',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-4 text-center">
                <p className="text-gray-500 text-sm mb-1">Result</p>
                <p className="text-base font-bold text-gray-700">Overproduction or stockouts</p>
              </div>
            </div>

            {/* WasteWise */}
            <div className="rounded-2xl border-2 border-[#2d5a3d] bg-[#f0faf5] p-7 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-[#2d5a3d] text-white text-xs font-bold px-4 py-1 rounded-full">WasteWise</span>
              </div>
              <div className="flex items-center gap-2 mb-5 mt-2">
                <Brain size={18} className="text-[#2d5a3d]" />
                <p className="text-base font-bold text-[#2d5a3d] uppercase tracking-wide text-xs">Waste-Aware Intelligence</p>
              </div>
              <div className="space-y-3 mb-6">
                {[
                  'Product sales history & demand patterns',
                  'Waste history & recent waste records',
                  'Shelf life & batch-size constraints',
                  'Weather, events & seasonality',
                  'Product economics & stockout risk',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2d5a3d] shrink-0" />
                    <span className="text-sm text-[#2d5a3d]">{item}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-[#2d5a3d]/20 pt-4 text-center">
                <p className="text-[#2d5a3d]/60 text-sm mb-1">Result</p>
                <p className="text-base font-bold text-[#1a3a2a]">Waste-aware production recommendation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
