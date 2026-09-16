import { CheckCircle, Star } from 'lucide-react'

const APPROACHES = [
  {
    name: 'Traditional Forecasting',
    question: '"What are we likely to sell?"',
    description: 'Estimates future demand using historical sales data. Tells operators what customers may buy — but does not convert this into a production quantity.',
    highlight: false,
  },
  {
    name: 'Waste Measurement',
    question: '"What did we waste?"',
    description: 'Tracks and analyses food waste after it occurs. Helps businesses understand their waste patterns retrospectively.',
    highlight: false,
    example: 'Winnow / Leanpath focus on measuring food waste after it occurs.',
  },
  {
    name: 'Surplus Resale',
    question: '"How can we sell what is left?"',
    description: 'Helps businesses recover value from surplus food that was already over-produced. Does not address the production decision itself.',
    highlight: false,
    example: 'Too Good To Go helps businesses recover value from surplus food.',
  },
  {
    name: 'WasteWise',
    question: '"What should we actually produce before waste occurs?"',
    description: 'Converts demand forecasts into waste-aware production quantities — before food is prepared. Considers waste risk, shelf life, batch size and product economics to generate an actionable recommendation.',
    highlight: true,
    badge: 'WasteWise Approach',
  },
]

export default function WhyWasteWise() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12 reveal">
          <span className="badge-forest inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Why WasteWise
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1a3a2a] mb-4">
            Different from Every Existing Approach
          </h2>
          <p className="text-[#4a5568] leading-relaxed">
            WasteWise is not simply a forecasting tool, a waste tracker or a surplus-resale platform. It focuses on the production decision itself — before any food is prepared.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 reveal">
          {APPROACHES.map((approach) => (
            <div
              key={approach.name}
              className={`rounded-2xl p-6 flex flex-col feature-card ${
                approach.highlight
                  ? 'pricing-highlight text-white'
                  : 'bg-[#f9f5ee] border border-[#e8e0d0]'
              }`}
            >
              {approach.highlight && (
                <div className="flex items-center gap-1.5 mb-4">
                  <Star size={14} className="text-[#c9a84c]" fill="currentColor" />
                  <span className="text-[#c9a84c] text-xs font-bold uppercase tracking-wide">
                    {approach.badge}
                  </span>
                </div>
              )}

              <h3
                className={`text-base font-bold mb-2 ${
                  approach.highlight ? 'text-white' : 'text-[#1a3a2a]'
                }`}
              >
                {approach.name}
              </h3>

              <p
                className={`text-sm font-semibold mb-3 ${
                  approach.highlight ? 'text-[#c9a84c]' : 'text-[#2d5a3d]'
                }`}
              >
                {approach.question}
              </p>

              <p
                className={`text-sm leading-relaxed flex-1 ${
                  approach.highlight ? 'text-white/80' : 'text-[#4a5568]'
                }`}
              >
                {approach.description}
              </p>

              {approach.example && (
                <p className="text-xs text-[#718096] mt-4 italic border-t border-[#e8e0d0] pt-3">
                  {approach.example}
                </p>
              )}

              {approach.highlight && (
                <div className="mt-5 pt-4 border-t border-white/20">
                  {[
                    'Operates before waste occurs',
                    'Actionable quantity per product',
                    'Explainable recommendation',
                  ].map((point) => (
                    <div key={point} className="flex items-center gap-2 mt-2">
                      <CheckCircle size={13} className="text-[#c9a84c] shrink-0" />
                      <span className="text-white/80 text-xs">{point}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-[#718096] mt-6 italic max-w-2xl mx-auto">
          Competitor references are provided for context only and are based on publicly available positioning. WasteWise does not make unsupported claims about competitor products.
        </p>
      </div>
    </section>
  )
}
