const STATS = [
  { value: '£3.2bn', label: 'Estimated annual UK hospitality & food-service waste cost' },
  { value: '93%', label: 'Would adopt or consider WasteWise in early survey' },
  { value: '80%', label: 'Rate food-waste reduction as very or extremely important' },
  { value: '63%', label: 'Interested in participating in a future pilot programme' },
]

export default function StatsStrip() {
  return (
    <section className="bg-[#f9f5ee] border-y border-[#e8e0d0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="text-center reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <p className="text-3xl sm:text-4xl font-extrabold text-[#2d5a3d] mb-1">{stat.value}</p>
              <p className="text-sm text-[#4a5568] leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-[#718096] mt-6 italic">
          Early WasteWise market validation — 30 UK fresh-food businesses surveyed
        </p>
      </div>
    </section>
  )
}
