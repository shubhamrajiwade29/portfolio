import { portfolioData } from '../data/portfolio'
import { FadeUp } from './Animate'

const { skills, superbadges } = portfolioData

export default function Skills() {
  return (
    <section id="skills" className="section section-tint">
      <div className="wrap">
        <FadeUp>
          <h2 className="sec-h">Skills</h2>
          <p className="sec-sub">Salesforce first, with a data and cloud backbone underneath.</p>
          <div className="dgrid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(15rem,1fr))' }}>
            {skills.map((g) => (
              <div className="dcard" key={g.label}>
                <div className="dtype">{g.label}</div>
                <div>{g.items.map((s) => <span className="chip" key={s}>{s}</span>)}</div>
              </div>
            ))}
          </div>
          <div className="dcard" style={{ marginTop: '.9rem' }}>
            <div className="dtype">9 Superbadges</div>
            <div>{superbadges.map((s) => <span className="chip" key={s}>{s}</span>)}</div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
