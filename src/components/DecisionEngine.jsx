import { ArrowRight } from 'lucide-react'

const ENGINE_NODES = [
  {
    id: 1,
    label: 'Production DNA',
    desc: 'Shelf life · Batch size · Cost · Margin',
    color: '#2d5a3d',
  },
  {
    id: 2,
    label: 'Waste-Sensitive Optimisation',
    desc: 'Waste cost · Waste history · Risk weighting',
    color: '#3d7a6e',
  },
  {
    id: 3,
    label: 'Prediction-to-Production Conversion',
    desc: 'Forecast → Recommended quantity',
    color: '#2d5a3d',
  },
  {
    id: 4,
    label: 'Shelf-Life-Weighted Forecasting',
    desc: 'Short-life products weighted differently',
    color: '#3d7a6e',
  },
  {
    id: 5,
    label: 'Stockout–Waste Balancing',
    desc: 'Risk tolerance · Margin protection',
    color: '#2d5a3d',
  },
  {
    id: 6,
    label: 'Adaptive Waste Memory',
    desc: 'Learns from recorded daily waste',
    color: '#3d7a6e',
  },
]

export default function DecisionEngine() {
  return (
    <section className="py-20 bg-[#1a3a2a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 bg-white/10 text-white/70 border border-white/20">
            Under the Hood
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
            The WasteWise Production Decision Engine
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Six integrated components work together to convert raw data into tomorrow's practical production recommendation.
          </p>
        </div>

        {/* Engine visual */}
        <div className="reveal">
          {/* Input nodes */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {ENGINE_NODES.map((node, i) => (
              <div
                key={node.id}
                className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#c9a84c]/20 border border-[#c9a84c]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[#c9a84c] font-bold text-sm">{node.id}</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{node.label}</p>
                    <p className="text-white/50 text-xs mt-1">{node.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrow converging */}
          <div className="flex justify-center mb-8">
            <div className="flex flex-col items-center gap-2">
              <div className="flex gap-4 items-center">
                {[0,1,2].map(i => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <div className="w-px h-8 bg-gradient-to-b from-white/20 to-[#c9a84c]/60" />
                  </div>
                ))}
              </div>
              <div className="w-64 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/60 to-transparent" />
              <div className="w-px h-8 bg-gradient-to-b from-[#c9a84c]/60 to-[#c9a84c]" />
              <ArrowRight size={20} className="text-[#c9a84c] rotate-90" />
            </div>
          </div>

          {/* Output */}
          <div className="max-w-lg mx-auto">
            <div className="bg-[#c9a84c] rounded-2xl p-6 text-center shadow-xl">
              <p className="text-white/80 text-xs font-semibold uppercase tracking-widest mb-2">Engine Output</p>
              <p className="text-white text-2xl font-extrabold">Tomorrow's Production Recommendation</p>
              <p className="text-white/80 text-sm mt-2">
                A single, actionable quantity per product — with a plain-language reason.
              </p>
              <div className="mt-4 bg-white/20 rounded-xl p-4">
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <p className="text-white/70 text-xs">What to make</p>
                    <p className="text-white font-bold text-sm mt-1">40 croissants</p>
                  </div>
                  <div className="border-x border-white/20">
                    <p className="text-white/70 text-xs">Why</p>
                    <p className="text-white font-bold text-sm mt-1">Past waste data</p>
                  </div>
                  <div>
                    <p className="text-white/70 text-xs">Saving</p>
                    <p className="text-white font-bold text-sm mt-1">~15 items</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
