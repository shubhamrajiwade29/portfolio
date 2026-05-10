import { portfolioData } from '../data/portfolio'
import { FadeUp, FadeIn, ScaleIn } from './Animate'

const { certifications } = portfolioData

const BADGE_GRADIENTS = [
  'from-amber-400 to-amber-600',
  'from-blue-400 to-blue-600',
  'from-emerald-400 to-emerald-600',
  'from-purple-400 to-purple-600',
  'from-rose-400 to-rose-600',
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-xs text-gold-500 tracking-[0.3em] uppercase">06 — Certifications</span>
            <div className="flex-1 h-px bg-parchment-300" />
          </div>
        </FadeIn>

        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Salesforce <br /><span className="text-gradient italic">Certified × 5</span>
            </h2>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-5 gap-4">
          {certifications.map((cert, i) => (
            <ScaleIn key={cert.name} delay={`delay-${i * 100}`}>
              <div className="border border-parchment-300 bg-white/80 p-5 flex flex-col items-center text-center card-hover group h-full shadow-sm">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${BADGE_GRADIENTS[i]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                  <span className="font-mono font-black text-xs text-white tracking-wider">{cert.badge}</span>
                </div>
                <div className="font-mono text-[10px] text-slate-400 tracking-widest mb-2 uppercase">Salesforce</div>
                <div className="font-display font-bold text-slate-800 text-sm leading-tight mb-2">{cert.name}</div>
                <div className="font-mono text-xs text-gold-500 mt-auto pt-3 border-t border-parchment-200 w-full text-center">{cert.year}</div>
              </div>
            </ScaleIn>
          ))}
        </div>

        <FadeUp delay="delay-500">
          <div className="mt-8 border border-gold-400/30 bg-amber-50/60 p-5 flex flex-col md:flex-row items-center gap-4 justify-between">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {certifications.map((cert, i) => (
                  <div key={cert.badge} className={`w-7 h-7 rounded-full bg-gradient-to-br ${BADGE_GRADIENTS[i]} border-2 border-parchment-50 flex items-center justify-center`}>
                    <span className="font-mono text-[8px] text-white font-bold">{cert.badge}</span>
                  </div>
                ))}
              </div>
              <span className="font-body text-sm text-slate-700">Trailhead Ranger · 5 Active Certifications</span>
            </div>
            <a href="https://trailblazer.salesforce.com/" target="_blank" rel="noopener noreferrer"
              className="font-mono text-xs text-gold-500 tracking-widest uppercase border-b border-gold-400/40 hover:border-gold-500 transition-colors">
              Verify on Trailhead ↗
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
