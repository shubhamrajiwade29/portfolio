import { portfolioData } from '../data/portfolio'
import { FadeUp } from './Animate'

const { experience } = portfolioData

export default function Experience() {
  return (
    <section id="exp" className="section section-tint">
      <div className="wrap">
        <FadeUp>
          <h2 className="sec-h">Experience</h2>
          <div className="tl" style={{ marginTop: '1.4rem' }}>
            {experience.map((j) => (
              <div className="tn" key={j.company + j.period}>
                <div className="th">
                  <div><h3>{j.company}</h3><div className="role">{j.role}</div></div>
                  <div className="meta">{j.period} · {j.location}</div>
                </div>
                <ul>{j.highlights.map((h, i) => <li key={i}>{h}</li>)}</ul>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
