import { ArrowDown, ChevronRight, TrendingDown, AlertTriangle, CheckCircle } from 'lucide-react'

const scrollTo = (id) => {
  const el = document.querySelector(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 72
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

function RiskBadge({ level }) {
  const map = {
    High: 'bg-red-100 text-red-700',
    Medium: 'bg-amber-100 text-amber-700',
    Low: 'bg-green-100 text-green-700',
  }
  return (
    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${map[level]}`}>
      {level}
    </span>
  )
}

function ProductRow({ name, forecast, recommended, adjustment, reason, weatherImpact, shelfLife, riskLevel, unit = '' }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-all">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-white font-semibold text-sm">{name}</p>
          {reason && <p className="text-white/60 text-xs mt-1 leading-snug">{reason}</p>}
        </div>
        <RiskBadge level={riskLevel} />
      </div>
      <div className="grid grid-cols-3 gap-2 mt-3">
        <div className="text-center">
          <p className="text-white/50 text-xs">Forecast</p>
          <p className="text-white/80 font-semibold text-sm">{forecast}{unit}</p>
        </div>
        <div className="text-center border-x border-white/10">
          <p className="text-white/50 text-xs">Recommended</p>
          <p className="text-[#c9a84c] font-bold text-sm">{recommended}{unit}</p>
        </div>
        <div className="text-center">
          <p className="text-white/50 text-xs">{weatherImpact ? 'Weather' : shelfLife ? 'Shelf Life' : 'Adjust'}</p>
          <p className="text-white/80 font-semibold text-sm">
            {weatherImpact || shelfLife || adjustment}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen hero-bg flex items-center overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-20 -left-20 w-80 h-80 rounded-full bg-[#c9a84c]/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/3 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-28 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div className="animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse-gentle" />
              <span className="text-white/80 text-sm font-medium">AI-Powered Production Intelligence</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Stop Guessing<br />
              <span className="text-[#c9a84c]">Tomorrow's</span><br />
              Production.
            </h1>

            <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-4">
              WasteWise tells fresh-food businesses what to prepare, how much to make, and why — helping reduce avoidable waste before it happens.
            </p>

            <p className="text-white/60 text-base mb-8">
              AI-powered production intelligence for cafés, bakeries, gelato shops, dessert businesses, cloud kitchens and other fresh-food operators.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => scrollTo('#request-pilot')}
                className="inline-flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#e0c172] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl text-base"
              >
                Request a Pilot
                <ChevronRight size={18} />
              </button>
              <button
                onClick={() => scrollTo('#how-it-works')}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 text-base"
              >
                See How It Works
                <ArrowDown size={16} />
              </button>
            </div>

            {/* Key proof points */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              {[
                { icon: TrendingDown, text: 'Reduce avoidable waste' },
                { icon: CheckCircle, text: 'Actionable quantities, not just charts' },
                { icon: AlertTriangle, text: 'No expensive hardware needed' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon size={15} className="text-[#c9a84c] shrink-0" />
                  <span className="text-white/70 text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Dashboard Mockup */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="mockup-glow rounded-2xl overflow-hidden bg-[#122a1e] border border-white/10">
              {/* Mockup header bar */}
              <div className="bg-[#0e2118] px-4 py-3 flex items-center gap-2 border-b border-white/10">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-amber-400/70" />
                  <span className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-white/40 text-xs font-medium">WasteWise — Production Plan</span>
                </div>
              </div>

              {/* Mockup content */}
              <div className="p-4 sm:p-5">
                {/* Date header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-widest">Tomorrow's Production Plan</p>
                    <p className="text-white font-semibold text-sm mt-0.5">Tuesday, 16 September 2026</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/50 text-xs">Weather Forecast</p>
                    <p className="text-white/80 text-sm font-medium">☁️ 14°C · Overcast</p>
                  </div>
                </div>

                {/* Summary chips */}
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="text-xs bg-[#c9a84c]/20 text-[#c9a84c] border border-[#c9a84c]/30 rounded-full px-3 py-1 font-medium">
                    3 products · Waste risk detected
                  </span>
                  <span className="text-xs bg-white/10 text-white/60 rounded-full px-3 py-1">
                    Avg. waste reduction: ~18%
                  </span>
                </div>

                <div className="space-y-3">
                  <ProductRow
                    name="Almond Croissants"
                    forecast={50}
                    recommended={40}
                    adjustment="-15"
                    riskLevel="High"
                    reason="Similar weekday · Lower recent demand · Higher recent waste"
                  />
                  <ProductRow
                    name="Pistachio Gelato"
                    forecast="13 trays"
                    recommended="12 trays"
                    weatherImpact="+8%"
                    riskLevel="Medium"
                    reason="Cold forecast reduces demand · Weather adjustment applied"
                    unit=""
                  />
                  <ProductRow
                    name="Fresh Sandwiches"
                    forecast={36}
                    recommended={32}
                    shelfLife="1 day"
                    riskLevel="Medium"
                    reason="Short shelf life · Moderate stockout risk · Tuesday pattern"
                  />
                </div>

                {/* Bottom bar */}
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                  <p className="text-white/40 text-xs">Recommendations are explainable · Updated daily</p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#7aaa8f] animate-pulse" />
                    <span className="text-white/40 text-xs">Live</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown size={20} className="text-white/40" />
      </div>
    </section>
  )
}
