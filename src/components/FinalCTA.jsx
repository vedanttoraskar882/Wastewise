import { ChevronRight } from 'lucide-react'

const scrollTo = (id) => {
  const el = document.querySelector(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 72
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

export default function FinalCTA() {
  return (
    <section className="py-20 bg-[#f9f5ee] border-t border-[#e8e0d0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
        <span className="badge-forest inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          Get Started
        </span>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1a3a2a] mb-5">
          Make Tomorrow's Production<br />Decision With More Confidence.
        </h2>
        <p className="text-[#4a5568] text-xl mb-10">
          Reduce guesswork. Protect your margin. Make the right amount.
        </p>
        <button
          onClick={() => scrollTo('#request-pilot')}
          className="inline-flex items-center gap-2 bg-[#2d5a3d] hover:bg-[#1a3a2a] text-white font-bold px-10 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl text-base"
        >
          Request a Pilot
          <ChevronRight size={20} />
        </button>
        <p className="mt-4 text-sm text-[#718096]">No account or payment required to register your interest.</p>
      </div>
    </section>
  )
}
