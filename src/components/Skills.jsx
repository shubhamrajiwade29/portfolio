import { portfolioData } from '../data/portfolio'
import { FadeUp, FadeIn, ScaleIn } from './Animate'

const { skills } = portfolioData

const SKILL_GROUPS = [
  { label: 'Data & Analytics', key: 'data', icon: '◈' },
  { label: 'Cloud & Engineering', key: 'cloud', icon: '◉' },
  { label: 'Salesforce', key: 'salesforce', icon: '◆' },
  { label: 'Tools & Frameworks', key: 'tools', icon: '◇' },
]

const PROFICIENCY = {
  SQL: 90, Python: 80, Tableau: 85, 'Power BI': 75, dbt: 65, Pandas: 78, Matplotlib: 72,
  AWS: 65, 'Azure (ADF + Databricks)': 70, 'GitHub Actions': 68, Snowflake: 60,
  'Sales Cloud': 90, 'Service Cloud': 85, 'Experience Cloud': 80, 'Flow Builder': 88, 'Apex (basics)': 60, SOQL: 85,
  React: 70, Vite: 65, FastAPI: 68, MySQL: 82, Excel: 85, Figma: 55,
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-parchment-100 relative">
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <FadeIn>
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-xs text-gold-500 tracking-[0.3em] uppercase">03 — Skills</span>
            <div className="flex-1 h-px bg-parchment-300" />
          </div>
        </FadeIn>

        <FadeUp>
          <h2 className="font-display text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Technical <span className="text-gradient italic">Arsenal</span>
          </h2>
          <p className="font-body text-slate-500 mb-16 max-w-xl">
            5 Salesforce certifications. A Python + SQL backbone. Cloud-native analytics experience.
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-6">
          {SKILL_GROUPS.map(({ label, key, icon }, i) => (
            <FadeUp key={key} delay={`delay-${i * 100}`}>
              <div className="border border-parchment-300 bg-white/80 p-6 card-hover h-full shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-gold-500 text-lg">{icon}</span>
                  <span className="font-mono text-xs tracking-[0.2em] text-slate-500 uppercase">{label}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills[key].map((skill) => {
                    const pct = PROFICIENCY[skill] || 70
                    return (
                      <div key={skill} className="relative group px-3 py-1.5 border border-parchment-300 hover:border-gold-400/60 bg-parchment-50 transition-all cursor-default">
                        <span className="font-mono text-xs text-slate-600 group-hover:text-gold-500 transition-colors">{skill}</span>
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-900 border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <div className="w-20 h-1 bg-slate-600">
                              <div className="h-full bg-gold-400" style={{ width: `${pct}%` }} />
                            </div>
                            <span className="font-mono text-[10px] text-gold-400">{pct}%</span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
