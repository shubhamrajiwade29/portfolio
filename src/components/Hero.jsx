import { useEffect, useState } from 'react'
import { portfolioData } from '../data/portfolio'

const { personal } = portfolioData

const ROLES = [
  'Salesforce Developer',
  'Salesforce Consultant',
  'Salesforce Administrator',
  'Salesforce Analyst',
]

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = ROLES[roleIdx]
    let timeout
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
      } else {
        timeout = setTimeout(() => setTyping(false), 2000)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
      } else {
        setRoleIdx((i) => (i + 1) % ROLES.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIdx])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center grid-bg py-20"
    >
      {/* Warm ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-gold-400/8 blur-[140px] pointer-events-none" />

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-gold-400/40" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-gold-400/40" />

      {/* Open to work */}
      <div className="absolute top-20 right-8 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <span className="font-mono text-xs text-slate-500 tracking-widest">OPEN TO WORK</span>
      </div>

      {/* Main content */}
      <div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        style={{ overflow: 'visible' }}
      >

        {/* Name */}
        <h1
          className="font-display font-black leading-[0.9] mb-6 pb-8 opacity-0 animate-fade-up animate-delay-100"
          style={{ overflow: 'visible', clipPath: 'none' }}
        >
          <span className="block text-[clamp(3.5rem,12vw,5rem)] text-slate-900">
            Shubham
          </span>
          <span
            className="block text-[clamp(3.5rem,12vw,5rem)] text-gradient italic"
            style={{
              lineHeight: '1.3',
              paddingBottom: '0.2em',
              paddingLeft: '0.15em',
              marginLeft: '-0.15em',
              display: 'block',
              overflow: 'visible',
              clipPath: 'none',
            }}
          >
            Rajiwade
          </span>
        </h1>

        {/* Typewriter */}
        <div
          className="h-12 flex items-center justify-center mb-6 opacity-0 animate-fade-up animate-delay-200"
          style={{ overflow: 'visible' }}
        >
          <span className="font-mono text-xl md:text-2xl text-slate-700 whitespace-nowrap">
            {displayed}
            <span className="animate-blink text-gold-400">|</span>
          </span>
        </div>

        {/* Tagline */}
        <p className="font-body text-base md:text-lg text-slate-500 max-w-xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-up animate-delay-300">
          {personal.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-16 opacity-0 animate-fade-up animate-delay-400">
          <button
            onClick={() => scrollTo('projects')}
            className="group relative px-7 py-3 bg-slate-900 text-parchment-50 font-mono text-sm font-bold tracking-widest uppercase overflow-hidden transition-transform hover:scale-105"
          >
            <span className="relative z-10">View Projects</span>
            <span className="absolute inset-0 bg-gold-500 translate-y-full group-hover:translate-y-0 transition-transform duration-200" />
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="px-7 py-3 border border-gold-400/60 text-gold-500 font-mono text-sm tracking-widest uppercase hover:bg-gold-400/10 transition-colors"
          >
            Contact Me
          </button>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 border border-parchment-300 text-slate-500 font-mono text-sm tracking-widest uppercase hover:border-slate-400 hover:text-slate-900 transition-colors"
          >
            GitHub
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto opacity-0 animate-fade-up animate-delay-500 mb-8">
          {[
            { value: '4', label: 'IT Experience', suffix: 'yr' },
            { value: '5', label: 'Salesforce Certs', suffix: 'x' },
            { value: '7', label: 'Projects Shipped', suffix: '' },
          ].map(({ value, label, suffix }) => (
            <div key={label} className="border border-parchment-300 bg-white/60 py-4 px-2 text-center shadow-sm">
              <div className="font-mono font-bold text-2xl text-gold-500">
                {value}<span className="text-sm opacity-60">{suffix}</span>
              </div>
              <div className="font-mono text-xs text-slate-400 mt-1 leading-tight">{label}</div>
            </div>
          ))}
        </div>

      </div>

      {/* Scroll line */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-px h-10 bg-gradient-to-b from-slate-400 to-transparent animate-bounce mx-auto" />
      </div>
    </section>
  )
}
