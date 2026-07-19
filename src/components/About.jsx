import { portfolioData } from '../data/portfolio'
import { FadeUp, SlideIn, FadeIn } from './Animate'

const { personal, about } = portfolioData

export default function About() {
  return (
    <section id="about" className="py-28 px-6 relative bg-white/50">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-xs text-gold-500 tracking-[0.3em] uppercase">02 — About</span>
            <div className="flex-1 h-px bg-parchment-300" />
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <SlideIn className="relative order-2 md:order-1">
            <div className="relative w-full max-w-sm mx-auto md:mx-0">
              {/* Offset frame */}
              <div className="absolute -top-3 -left-3 w-full h-full border border-gold-400/40" />
              <div className="relative border border-parchment-300 overflow-hidden shadow-lg" style={{ aspectRatio: '4/5' }}>
                <img
                  src="/portfolio/profile.jpg"
                  alt="Shubham Rajiwade"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-parchment-50/20 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 w-6 h-6 border-l border-t border-gold-400/60" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-r border-b border-gold-400/60" />
              </div>
              {/* Location tag */}
              <div className="absolute -bottom-4 -right-4 bg-slate-900 text-parchment-50 px-3 py-1">
                <span className="font-mono text-xs font-bold tracking-widest">{personal.location}</span>
              </div>
            </div>
          </SlideIn>

          {/* Text */}
          <div className="order-1 md:order-2">
            <FadeUp>
              <h2 className="font-display text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                The Data Guy <br />
                <span className="text-gradient italic">Who Knows CRM</span>
              </h2>
            </FadeUp>
            <FadeUp delay="delay-100">
              {about.split('\n\n').map((para, i) => (
                <p key={i} className="text-slate-600 leading-relaxed mb-4 font-body text-base">{para}</p>
              ))}
            </FadeUp>
            <FadeUp delay="delay-200">
              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  { label: 'Education', value: personal.education },
                  { label: 'Currently', value: personal.currentRole },
                  { label: 'Previously', value: 'Deloitte · TCS' },
                  { label: 'Target Roles', value: 'Data Analyst · CRM Analytics · Data Engineering' },
                ].map(({ label, value }) => (
                  <div key={label} className="border-l-2 border-gold-400/50 pl-3">
                    <div className="font-mono text-[10px] text-slate-400 tracking-widest uppercase">{label}</div>
                    <div className="font-body text-sm text-slate-700 mt-0.5">{value}</div>
                  </div>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay="delay-300">
              <div className="mt-8 flex gap-4">
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
                  className="font-mono text-xs text-gold-500 tracking-widest uppercase border-b border-gold-400/40 hover:border-gold-500 pb-0.5 transition-colors">
                  LinkedIn ↗
                </a>
                <a href={personal.github} target="_blank" rel="noopener noreferrer"
                  className="font-mono text-xs text-slate-500 tracking-widest uppercase border-b border-slate-300 hover:border-slate-500 hover:text-slate-900 pb-0.5 transition-colors">
                  GitHub ↗
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  )
}
