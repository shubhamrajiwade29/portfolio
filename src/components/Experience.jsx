import { portfolioData } from '../data/portfolio'
import { FadeUp, FadeIn } from './Animate'

const { experience } = portfolioData

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-parchment-100 relative">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <FadeIn>
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-xs text-gold-500 tracking-[0.3em] uppercase">05 — Experience</span>
            <div className="flex-1 h-px bg-parchment-300" />
          </div>
        </FadeIn>

        <FadeUp>
          <h2 className="font-display text-4xl md:text-5xl font-black text-slate-900 mb-16">
            Career <span className="text-gradient italic">Timeline</span>
          </h2>
        </FadeUp>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-parchment-300 -translate-x-1/2" />
          <div className="flex flex-col gap-0">
            {experience.map((job, i) => {
              const isRight = i % 2 === 0
              const dotColor = job.type === 'current' ? '#C9A84C' : job.company === 'Deloitte' ? '#60A5FA' : '#A8A29E'
              return (
                <FadeUp key={job.company} delay={`delay-${i * 100}`}>
                  <div className={`relative flex gap-8 md:gap-0 pb-12 ${isRight ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-1 w-3 h-3 rounded-full border-2 z-10 shrink-0"
                      style={{ borderColor: dotColor, backgroundColor: dotColor }} />
                    <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] border border-parchment-300 bg-white/80 p-6 card-hover shadow-sm ${isRight ? 'md:mr-8' : 'md:ml-8'}`}>
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h3 className="font-display text-lg font-bold text-slate-900">{job.company}</h3>
                          <div className="font-mono text-sm text-gold-500 mt-0.5">{job.role}</div>
                        </div>
                        {job.type === 'current' && (
                          <span className="font-mono text-[10px] tracking-widest text-gold-500 border border-gold-400/40 px-2 py-0.5">CURRENT</span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-3 mb-4">
                        <span className="font-mono text-xs text-slate-400">{job.period}</span>
                        <span className="font-mono text-xs text-slate-400">·</span>
                        <span className="font-mono text-xs text-slate-400">{job.location}</span>
                      </div>
                      <ul className="flex flex-col gap-2">
                        {job.highlights.map((h, j) => (
                          <li key={j} className="flex gap-3 text-sm text-slate-500 font-body leading-relaxed">
                            <span className="text-gold-400/70 shrink-0 mt-1">▸</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                  </div>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
