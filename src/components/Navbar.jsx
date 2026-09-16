import { useState, useEffect } from 'react'
import { Menu, X, Leaf } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Platform', href: '#platform' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Market Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMobile = () => setMobileOpen(false)

  const handleNav = (e, href) => {
    e.preventDefault()
    closeMobile()
    const el = document.querySelector(href)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleNav(e, '#home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-[#2d5a3d] flex items-center justify-center group-hover:bg-[#1a3a2a] transition-colors">
              <Leaf size={16} className="text-[#c9a84c]" />
            </div>
            <span
              className={`text-xl font-bold tracking-tight transition-colors ${
                scrolled ? 'text-[#1a3a2a]' : 'text-white'
              }`}
            >
              WasteWise
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className={`text-sm font-medium transition-colors hover:text-[#c9a84c] ${
                  scrolled ? 'text-[#1f2937]' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="#request-pilot"
              onClick={(e) => handleNav(e, '#request-pilot')}
              className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#e0c172] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Request a Pilot
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden p-2 rounded-md transition-colors ${
              scrolled ? 'text-[#1f2937]' : 'text-white'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="block px-3 py-2.5 text-[#1f2937] font-medium rounded-lg hover:bg-[#f9f5ee] hover:text-[#2d5a3d] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#request-pilot"
                onClick={(e) => handleNav(e, '#request-pilot')}
                className="block w-full text-center bg-[#2d5a3d] hover:bg-[#1a3a2a] text-white font-semibold px-5 py-3 rounded-xl transition-colors"
              >
                Request a Pilot
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
