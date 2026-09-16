import { Settings, Upload, BarChart2, Calculator, RotateCcw } from 'lucide-react'

const STEPS = [
  {
    number: '01',
    icon: Settings,
    title: 'Set Up Your Products',
    description:
      'Configure each product once with its operational profile. This information helps WasteWise understand the constraints that affect how much you should produce.',
    fields: ['Product name', 'Shelf life', 'Preparation time', 'Minimum batch size', 'Cost per unit', 'Margin'],
    colour: '#2d5a3d',
  },
  {
    number: '02',
    icon: Upload,
    title: 'Add Your Sales & Waste Data',
    description:
      'Begin with your existing CSV sales history and manual waste records. Contextual information such as weather, holidays and events can also be added to improve recommendations.',
    fields: ['CSV sales history', 'Manual waste records', 'Weather context', 'Holiday & event flags'],
    note: 'POS integrations planned for a future phase.',
    colour: '#3d7a6e',
  },
  {
    number: '03',
    icon: BarChart2,
    title: 'Forecast Product Demand',
    description:
      'WasteWise analyses product-level historical and contextual information to estimate expected demand for each product individually.',
    fields: ['Day-of-week patterns', 'Seasonal trends', 'Weather effects', 'Holiday adjustments', 'Event signals'],
    colour: '#2d5a3d',
  },
  {
    number: '04',
    icon: Calculator,
    title: 'Calculate What You Should Produce',
    description:
      'The production engine converts expected demand into a recommended quantity — considering waste risk, shelf life, batch constraints, margin and stockout tolerance.',
    example: { forecast: 50, recommended: 42, reason: 'Short shelf life + higher recent waste + moderate stockout risk' },
    colour: '#3d7a6e',
  },
  {
    number: '05',
    icon: RotateCcw,
    title: "Improve Tomorrow's Recommendation",
    description:
      "At the end of each day, record actual sales and waste. WasteWise compares forecast vs actual, using the result to improve future recommendations.",
    loop: ['Forecast', 'Produce', 'Sell', 'Record Waste', 'Learn', 'Improve Tomorrow'],
    colour: '#2d5a3d',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#f9f5ee] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center mb-16 reveal">
          <span className="badge-forest inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            How It Works
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1a3a2a] mb-5">
            From Your Daily Data to<br />Tomorrow's Production Plan
          </h2>
          <p className="text-[#4a5568] text-lg">
            Five straightforward steps take you from basic operational data to a practical, waste-aware production recommendation.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-3xl mx-auto space-y-4">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="reveal bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-[#2d5a3d]/30 transition-all shadow-sm"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start gap-5 p-6">
                  {/* Step number + icon */}
                  <div className="shrink-0 flex flex-col items-center gap-2">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: step.colour }}
                    >
                      <Icon size={20} className="text-white" />
                    </div>
                    {i < STEPS.length - 1 && (
                      <div className="w-px flex-1 min-h-4 step-line opacity-30" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-[#718096] uppercase tracking-widest">{step.number}</span>
                      <h3 className="text-lg font-bold text-[#1a3a2a]">{step.title}</h3>
                    </div>
                    <p className="text-[#4a5568] text-sm leading-relaxed mb-4">{step.description}</p>

                    {/* Fields list */}
                    {step.fields && (
                      <div className="flex flex-wrap gap-2">
                        {step.fields.map((f) => (
                          <span
                            key={f}
                            className="text-xs bg-[#f0faf5] border border-[#2d5a3d]/15 text-[#2d5a3d] rounded-full px-3 py-1"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Note */}
                    {step.note && (
                      <p className="text-xs text-[#718096] mt-3 italic">{step.note}</p>
                    )}

                    {/* Recommendation example */}
                    {step.example && (
                      <div className="mt-4 bg-[#f0faf5] border border-[#2d5a3d]/15 rounded-xl p-4">
                        <p className="text-xs font-semibold text-[#718096] uppercase tracking-wide mb-3">Example</p>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-xs text-[#718096]">Forecast demand</p>
                            <p className="text-base font-bold text-[#4a5568]">{step.example.forecast} units</p>
                          </div>
                          <div>
                            <p className="text-xs text-[#718096]">Recommended production</p>
                            <p className="text-base font-bold text-[#2d5a3d]">{step.example.recommended} units</p>
                          </div>
                        </div>
                        <p className="text-xs text-[#718096] mt-3 italic">"{step.example.reason}"</p>
                      </div>
                    )}

                    {/* Learning loop */}
                    {step.loop && (
                      <div className="mt-4 flex flex-wrap items-center gap-2">
                        {step.loop.map((item, j) => (
                          <div key={item} className="flex items-center gap-2">
                            <span className="bg-[#2d5a3d] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                              {item}
                            </span>
                            {j < step.loop.length - 1 && (
                              <span className="text-[#2d5a3d] font-bold text-sm">→</span>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
