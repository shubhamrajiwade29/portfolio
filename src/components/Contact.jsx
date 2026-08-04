import { portfolioData } from '../data/portfolio'
import { FadeUp, FadeIn } from './Animate'

const { personal } = portfolioData

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-parchment-100 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gold-400/8 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <FadeIn>
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-xs text-gold-500 tracking-[0.3em] uppercase">07 — Contact</span>
            <div className="flex-1 h-px bg-parchment-300" />
          </div>
        </FadeIn>

        <div className="max-w-2xl">
          <FadeUp>
            <h2 className="font-display text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] mb-8">
              Let's <br /><span className="text-gradient italic">Connect</span>
            </h2>
          </FadeUp>

          <FadeUp delay="delay-100">
            <p className="font-body text-slate-500 text-lg leading-relaxed mb-12">
              Targeting <strong className="text-slate-800">Salesforce</strong> and <strong className="text-slate-800">Analytics Engineering</strong> roles for full-time from Jan 2027, after my MS at Northeastern. Open to contract work and conversations now.
            </p>
          </FadeUp>

          <div className="flex flex-col gap-4">
            {[
              { icon: '✉', label: 'Email', value: personal.email, href: `mailto:${personal.email}`, color: 'text-gold-500' },
              { icon: 'in', label: 'LinkedIn', value: 'linkedin.com/in/shubhamrajiwade', href: personal.linkedin, color: 'text-blue-600' },
              { icon: '⌥', label: 'GitHub', value: 'github.com/shubhamrajiwade29', href: personal.github, color: 'text-slate-600' },
            ].map((item, i) => (
              <FadeUp key={item.label} delay={`delay-${(i + 2) * 100}`}>
                <a href={item.href} target={item.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
                  className="group flex items-center justify-between border border-parchment-300 bg-white/80 px-6 py-4 hover:border-gold-400/50 hover:shadow-md transition-all">
                  <div className="flex items-center gap-4">
                    <span className={`font-mono text-lg ${item.color}`}>{item.icon}</span>
                    <div>
                      <div className="font-mono text-xs text-slate-400 tracking-widest uppercase mb-0.5">{item.label}</div>
                      <div className="font-body text-slate-700">{item.value}</div>
                    </div>
                  </div>
                  <span className="text-slate-300 group-hover:text-gold-400 group-hover:translate-x-1 transition-all">→</span>
                </a>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative mt-24 pt-8 border-t border-parchment-300 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-mono text-xs text-slate-400">© 2026 Shubham Rajiwade · Built with React + Vite + Tailwind</span>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
          <span className="font-mono text-xs text-slate-400">Available for opportunities</span>
        </div>
      </div>
    </section>
  )
}
