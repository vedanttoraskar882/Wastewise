import {
  ClipboardList,
  TrendingUp,
  AlertOctagon,
  Cloud,
  RefreshCw,
  LayoutDashboard,
  Star,
} from 'lucide-react'

const FEATURES = [
  {
    icon: ClipboardList,
    title: 'Product Production Profiles',
    highlight: false,
    description:
      'Each product gets its own operational profile — shelf life, preparation time, minimum batch size, cost and margin. A sandwich with a one-day shelf life should not be planned the same way as a product that remains sellable for three days.',
    example: {
      label: 'Example profile',
      items: [
        { key: 'Product', value: 'Almond Croissant' },
        { key: 'Shelf Life', value: '1 day' },
        { key: 'Batch Size', value: '12 units' },
        { key: 'Margin', value: '68%' },
      ],
    },
  },
  {
    icon: TrendingUp,
    title: 'Product-Level Demand Forecasting',
    highlight: false,
    description:
      'WasteWise forecasts demand individually for each product — not just total store revenue or footfall. A gelato shop can see that pistachio and chocolate are both high on Saturdays, while a seasonal flavour is not.',
    example: {
      label: 'Saturday forecast',
      items: [
        { key: 'Pistachio Gelato', value: 'High demand' },
        { key: 'Chocolate Gelato', value: 'High demand' },
        { key: 'Seasonal Flavour', value: 'Low demand' },
      ],
    },
  },
  {
    icon: AlertOctagon,
    title: 'Waste-Aware Production Recommendations',
    highlight: true,
    description:
      'This is the core innovation. WasteWise does not just forecast what customers may buy — it translates forecast demand into a recommended production quantity, taking waste cost, shelf life, batch size, margin and stockout risk into account.',
    example: {
      label: 'Recommendation example',
      items: [
        { key: 'Forecast demand', value: '55 croissants' },
        { key: 'Recommended', value: '40 croissants' },
        { key: 'Reason', value: 'Similar days → 12–15 unsold' },
        { key: 'Saving', value: '15 items of waste' },
      ],
    },
  },
  {
    icon: Cloud,
    title: 'Weather & Event Intelligence',
    highlight: false,
    description:
      'Production recommendations consider temperature, rainfall, day of week, public holidays, school holidays, local events, tourism seasons and other contextual patterns. Cold rainy weather may reduce gelato demand and increase demand for hot pastries.',
    example: {
      label: 'Contextual signals',
      items: [
        { key: 'Weather', value: '☁️ 11°C · Rain' },
        { key: 'Cold desserts', value: '↓ Reduced' },
        { key: 'Hot pastries', value: '↑ Increased' },
        { key: 'Day pattern', value: 'Tuesday' },
      ],
    },
  },
  {
    icon: RefreshCw,
    title: 'Adaptive Waste Learning',
    highlight: false,
    description:
      "Staff record what remains unsold at the end of each day. WasteWise compares forecast demand, actual sales and actual waste — creating a learning loop that makes tomorrow's recommendation more accurate.",
    example: {
      label: 'Learning loop',
      items: [
        { key: 'Forecast', value: '50 units' },
        { key: 'Actual sales', value: '38 units' },
        { key: 'Waste recorded', value: '12 units' },
        { key: 'Next recommendation', value: '↓ Adjusted' },
      ],
    },
  },
  {
    icon: LayoutDashboard,
    title: 'Savings & Multi-Site Intelligence',
    highlight: false,
    description:
      'WasteWise shows the potential financial savings from improved production decisions. For multi-site operators, the platform can compare locations — helping identify which branch regularly generates more waste than others.',
    example: {
      label: 'Multi-site view',
      items: [
        { key: 'Site A (London)', value: 'Waste: Low' },
        { key: 'Site B (Brighton)', value: 'Waste: High ⚠️' },
        { key: 'Site C (Bristol)', value: 'Waste: Medium' },
      ],
    },
  },
]

export default function Platform() {
  return (
    <section id="platform" className="py-20 lg:py-28 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center mb-16 reveal">
          <span className="badge-forest inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Platform
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1a3a2a] mb-5">
            Production Intelligence<br />Built for Fresh Food
          </h2>
          <p className="text-[#4a5568] text-lg leading-relaxed">
            Every feature supports one decision: what should you prepare tomorrow, how much should you make, and why?
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className={`feature-card reveal rounded-2xl border p-7 flex flex-col ${
                  feature.highlight
                    ? 'border-[#2d5a3d] bg-[#f0faf5] col-span-full lg:col-span-1 lg:row-span-1'
                    : 'border-gray-100 bg-white hover:border-[#2d5a3d]/30'
                }`}
                style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
              >
                {/* Icon + badge */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                      feature.highlight
                        ? 'bg-[#2d5a3d]'
                        : 'bg-[#f0faf5] border border-[#2d5a3d]/10'
                    }`}
                  >
                    <Icon size={20} className={feature.highlight ? 'text-white' : 'text-[#2d5a3d]'} />
                  </div>
                  {feature.highlight && (
                    <span className="flex items-center gap-1 text-xs font-bold text-[#c9a84c] bg-[#c9a84c]/10 border border-[#c9a84c]/20 px-2.5 py-1 rounded-full">
                      <Star size={11} fill="currentColor" /> Core Innovation
                    </span>
                  )}
                </div>

                <h3
                  className={`text-lg font-bold mb-3 ${
                    feature.highlight ? 'text-[#1a3a2a]' : 'text-[#1a3a2a]'
                  }`}
                >
                  {feature.title}
                </h3>
                <p className="text-[#4a5568] text-sm leading-relaxed mb-5 flex-1">{feature.description}</p>

                {/* Example mini-card */}
                {feature.example && (
                  <div
                    className={`rounded-xl p-4 ${
                      feature.highlight ? 'bg-white border border-[#2d5a3d]/15' : 'bg-[#f9f5ee] border border-[#e8e0d0]'
                    }`}
                  >
                    <p className="text-xs font-semibold text-[#718096] uppercase tracking-wide mb-3">
                      {feature.example.label}
                    </p>
                    <div className="space-y-1.5">
                      {feature.example.items.map(({ key, value }) => (
                        <div key={key} className="flex items-center justify-between">
                          <span className="text-xs text-[#718096]">{key}</span>
                          <span
                            className={`text-xs font-semibold ${
                              feature.highlight ? 'text-[#2d5a3d]' : 'text-[#1a3a2a]'
                            }`}
                          >
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
