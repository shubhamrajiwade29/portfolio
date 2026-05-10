import { useState, useEffect } from 'react'

const links = ['About', 'Skills', 'Projects', 'Experience', 'Certifications', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-parchment-50/90 backdrop-blur-md border-b border-parchment-300' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-center">
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="font-mono text-xs tracking-widest uppercase text-slate-500 hover:text-slate-900 transition-colors"
            >
              {link}
            </button>
          ))}
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-1 ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-slate-800 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-px bg-slate-800 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-slate-800 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-parchment-50/95 backdrop-blur-md border-t border-parchment-300 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="font-mono text-xs tracking-widest uppercase text-slate-500 hover:text-gold-500 text-left transition-colors"
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
