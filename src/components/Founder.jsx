import { GraduationCap, Coffee, Utensils, BarChart2 } from 'lucide-react'

const CREDENTIALS = [
  {
    icon: GraduationCap,
    title: 'MSc Data Science & Analytics',
    subtitle: 'University of Westminster',
  },
  {
    icon: BarChart2,
    title: 'Computer Engineering Background',
    subtitle: 'Data analysis & forecasting',
  },
  {
    icon: Coffee,
    title: 'Gelato Master',
    subtitle: 'Amorino — premium gelato brand',
  },
  {
    icon: Utensils,
    title: 'QSR Food Operations',
    subtitle: "McDonald's — high-volume food service",
  },
]

export default function Founder() {
  return (
    <section className="py-20 bg-[#f9f5ee] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div className="reveal">
            <span className="badge-forest inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Founder
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1a3a2a] mb-5">
              Built by Someone Who Knows<br />
              <span className="text-[#2d5a3d]">Both the Data and the Kitchen</span>
            </h2>
            <p className="text-[#4a5568] text-lg leading-relaxed mb-6">
              WasteWise was founded by <strong className="text-[#1a3a2a]">Biral Prajapati</strong>, who brings together a technical background in Data Science and Computer Engineering with first-hand experience in fresh-food operations.
            </p>
            <p className="text-[#4a5568] leading-relaxed mb-6">
              Having worked as a Gelato Master at Amorino and in QSR food operations at McDonald's, Biral has personally experienced the daily challenge of deciding how much perishable food to prepare — often without reliable data to guide those decisions.
            </p>
            <p className="text-[#4a5568] leading-relaxed">
              Her MSc in Data Science and Analytics from the University of Westminster, combined with a Computer Engineering background and data-analysis experience, gave her the tools to start building a better solution.
            </p>
          </div>

          {/* Right — Founder card */}
          <div className="reveal reveal-delay-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              {/* Avatar */}
              <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-[#2d5a3d] flex items-center justify-center shadow-md">
                  <span className="text-white text-2xl font-extrabold">BP</span>
                </div>
                <div>
                  <p className="text-xl font-bold text-[#1a3a2a]">Biral Prajapati</p>
                  <p className="text-[#718096] text-sm">Founder, WasteWise</p>
                  <p className="text-[#c9a84c] text-xs font-medium mt-0.5">Data Scientist · Food Operator</p>
                </div>
              </div>

              {/* Credentials */}
              <div className="space-y-4">
                {CREDENTIALS.map(({ icon: Icon, title, subtitle }) => (
                  <div key={title} className="flex items-start gap-4 p-3 rounded-xl hover:bg-[#f9f5ee] transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-[#f0faf5] border border-[#2d5a3d]/10 flex items-center justify-center shrink-0">
                      <Icon size={17} className="text-[#2d5a3d]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1a3a2a]">{title}</p>
                      <p className="text-xs text-[#718096]">{subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
