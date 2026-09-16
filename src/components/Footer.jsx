import { Leaf } from 'lucide-react'

const handleNav = (e, href) => {
  e.preventDefault()
  const el = document.querySelector(href)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 72
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

export default function Footer() {
  return (
    <footer className="bg-[#1a3a2a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#2d5a3d] border border-white/10 flex items-center justify-center">
                <Leaf size={16} className="text-[#c9a84c]" />
              </div>
              <span className="text-xl font-bold tracking-tight">WasteWise</span>
            </div>
            <p className="text-[#c9a84c] text-sm font-medium mb-3">Make the right amount. Every day.</p>
            <p className="text-white/50 text-sm leading-relaxed">
              AI-powered production intelligence helping fresh-food businesses reduce avoidable waste before it happens.
            </p>
          </div>

          {/* Platform */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Platform</p>
            <ul className="space-y-2.5">
              {[
                { label: 'Platform', href: '#platform' },
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'Market Pricing', href: '#pricing' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={(e) => handleNav(e, href)}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Company</p>
            <ul className="space-y-2.5">
              {[
                { label: 'About', href: '#about' },
                { label: 'Founder', href: '#about' },
                { label: 'FAQ', href: '#faq' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={(e) => handleNav(e, href)}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Legal</p>
            <ul className="space-y-2.5">
              {[
                { label: 'Privacy Policy', href: '#' },
                { label: 'Terms', href: '#' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © WasteWise. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Built for UK fresh-food SMEs · AI-powered production intelligence
          </p>
        </div>
      </div>
    </footer>
  )
}
