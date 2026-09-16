import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const PLANS = [
  {
    name: 'Starter',
    price: '£79',
    period: 'per user / month',
    target: 'Independent fresh-food operators',
    highlight: false,
    features: [
      'Designed for independent fresh-food operators',
      'Product-level production intelligence',
      'Waste-aware production recommendations',
      'Production and waste visibility',
    ],
  },
  {
    name: 'Professional',
    price: '£149',
    period: 'per user / month',
    target: 'Growing fresh-food operations',
    highlight: true,
    badge: 'Recommended',
    features: [
      'Designed for growing fresh-food operations',
      'Product-level forecasting',
      'Production planning support',
      'Waste-aware production guidance',
    ],
  },
  {
    name: 'Growth',
    price: '£349',
    period: 'per account / month',
    target: 'Multi-site operators (3–10 sites)',
    highlight: false,
    features: [
      'Designed for multi-site operators',
      'Wider operational visibility',
      'Suitable for expanding food businesses',
      'Multi-site use case',
    ],
  },
]

const PROGRESSION = [
  {
    plan: 'Starter',
    y1: '£79', y2: '£83', y3: '£89',
    unit: 'per user/month',
  },
  {
    plan: 'Professional',
    y1: '£149', y2: '£157', y3: '£169',
    unit: 'per user/month',
  },
  {
    plan: 'Growth',
    y1: '£349', y2: '£369', y3: '£399',
    unit: 'per account/month',
  },
  {
    plan: 'Onboarding',
    y1: '£9', y2: '£11', y3: '£13',
    unit: 'per user/month',
  },
]

const scrollTo = (id) => {
  const el = document.querySelector(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 72
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

export default function MarketPricing() {
  const [showProgression, setShowProgression] = useState(false)

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-[#f9f5ee] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center mb-12 reveal">
          <span className="badge-forest inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Market Pricing
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1a3a2a] mb-4">
            Simple Pricing Built for<br />Fresh-Food Businesses
          </h2>
          <p className="text-[#4a5568] text-lg">
            Production intelligence without enterprise hardware or enterprise complexity.
          </p>
        </div>

        {/* Market validation strip */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-12 reveal">
          <p className="text-center text-sm font-semibold text-[#718096] mb-5">
            From our early market-validation survey of 30 UK fresh-food businesses:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { value: '53%', label: 'use manager intuition for production decisions' },
              { value: '83%', label: 'experience unsold stock at least sometimes' },
              { value: '93%', label: 'would adopt or consider WasteWise' },
              { value: '47%', label: 'consider £50–£99/month acceptable' },
            ].map((s) => (
              <div key={s.value}>
                <p className="text-2xl font-extrabold text-[#2d5a3d]">{s.value}</p>
                <p className="text-xs text-[#4a5568] mt-1">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-[#718096] mt-5 italic">
            Early WasteWise market-validation survey — 30 UK fresh-food businesses
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`reveal feature-card rounded-2xl p-7 flex flex-col ${
                plan.highlight
                  ? 'pricing-highlight text-white'
                  : 'bg-white border border-gray-200'
              }`}
            >
              {plan.badge && (
                <div className="mb-4">
                  <span className="bg-[#c9a84c] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              <p className={`text-sm font-semibold mb-1 ${plan.highlight ? 'text-white/70' : 'text-[#718096]'}`}>
                {plan.name}
              </p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className={`text-5xl font-extrabold ${plan.highlight ? 'text-white' : 'text-[#1a3a2a]'}`}>
                  {plan.price}
                </span>
              </div>
              <p className={`text-sm mb-1 ${plan.highlight ? 'text-white/60' : 'text-[#718096]'}`}>
                {plan.period}
              </p>
              <p className={`text-xs mb-6 ${plan.highlight ? 'text-[#c9a84c]' : 'text-[#2d5a3d]'}`}>
                {plan.target}
              </p>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span
                      className={`mt-1 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                        plan.highlight ? 'bg-white/20' : 'bg-[#f0faf5] border border-[#2d5a3d]/15'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${plan.highlight ? 'bg-[#c9a84c]' : 'bg-[#2d5a3d]'}`} />
                    </span>
                    <span className={`text-sm ${plan.highlight ? 'text-white/80' : 'text-[#4a5568]'}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => scrollTo('#request-pilot')}
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                  plan.highlight
                    ? 'bg-[#c9a84c] hover:bg-[#e0c172] text-white'
                    : 'bg-[#2d5a3d] hover:bg-[#1a3a2a] text-white'
                }`}
              >
                Request a Pilot
              </button>
            </div>
          ))}
        </div>

        {/* Onboarding charge */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-center mb-8 reveal">
          <p className="text-amber-800 font-semibold text-sm">
            Modelled onboarding charge: <strong>£9 per user/month</strong> in Year 1
          </p>
          <p className="text-amber-700 text-xs mt-1">
            This is in addition to the plan price. Onboarding charge reflects the Year 1 business model.
          </p>
        </div>

        {/* Pricing progression toggle */}
        <div className="reveal">
          <button
            onClick={() => setShowProgression(!showProgression)}
            className="flex items-center gap-2 mx-auto text-sm font-semibold text-[#2d5a3d] hover:text-[#1a3a2a] transition-colors"
          >
            {showProgression ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            {showProgression ? 'Hide' : 'View'} Modelled Pricing Progression (Years 1–3)
          </button>

          {showProgression && (
            <div className="mt-6 bg-white border border-gray-200 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#f9f5ee] border-b border-gray-200">
                      <th className="text-left px-6 py-3 text-[#1a3a2a] font-bold">Plan</th>
                      <th className="px-6 py-3 text-[#2d5a3d] font-bold">Year 1</th>
                      <th className="px-6 py-3 text-[#2d5a3d] font-bold">Year 2</th>
                      <th className="px-6 py-3 text-[#2d5a3d] font-bold">Year 3</th>
                      <th className="px-6 py-3 text-[#718096] font-medium">Basis</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PROGRESSION.map((row, i) => (
                      <tr key={row.plan} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f9f5ee]/50'}>
                        <td className="px-6 py-3 font-semibold text-[#1a3a2a]">{row.plan}</td>
                        <td className="px-6 py-3 text-center font-bold text-[#2d5a3d]">{row.y1}</td>
                        <td className="px-6 py-3 text-center text-[#4a5568]">{row.y2}</td>
                        <td className="px-6 py-3 text-center text-[#4a5568]">{row.y3}</td>
                        <td className="px-6 py-3 text-center text-xs text-[#718096]">{row.unit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-[#718096] text-center p-4 border-t border-gray-100">
                Pricing progression is modelled based on the business plan. Year 1 pricing shown on the cards above.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
