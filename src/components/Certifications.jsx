import { portfolioData } from '../data/portfolio'
import { FadeUp } from './Animate'

const { certifications, personal } = portfolioData
const activeCount = certifications.filter((c) => c.status === 'active').length

export default function Certifications() {
  return (
    <section id="certs" className="section">
      <div className="wrap">
        <FadeUp>
          <h2 className="sec-h">Certifications</h2>
          <p className="sec-sub">{certifications.length} Salesforce certifications earned · {activeCount} active. <a href={personal.trailblazer} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--violet)', fontWeight: 600 }}>Verify on Trailblazer ↗</a></p>
          <div className="cgrid">
            {certifications.map((c) => {
              const expired = c.status === 'expired'
              return (
                <div className={`ccard ${expired ? 'exp' : ''}`} key={c.name}>
                  <div className="cbadge">{c.badge}</div>
                  <div className="cname">{c.name}</div>
                  <div className="cyear">{c.year}</div>
                  <span className={`cstatus ${expired ? 'exp' : 'active'}`}>{expired ? 'Expired' : 'Active'}</span>
                  {c.verify
                    ? <a className="cverify" href={import.meta.env.BASE_URL + c.verify} target="_blank" rel="noopener noreferrer">Verify ↗</a>
                    : <a className="cverify" href={personal.trailblazer} target="_blank" rel="noopener noreferrer">On Trailblazer ↗</a>}
                </div>
              )
            })}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
