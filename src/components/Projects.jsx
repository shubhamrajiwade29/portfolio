import { portfolioData } from '../data/portfolio'
import { FadeUp } from './Animate'

const { salesforceProjects, dataProjects, productProjects } = portfolioData

function SfCard({ p }) {
  return (
    <div className={`fcard ${p.flagship ? 'flag' : ''}`}>
      <div className="top">
        <div><div className="org">{p.org}</div><h3>{p.title}</h3></div>
        <span className="ftag">{p.flagship ? 'Flagship · ' : ''}{p.tag}</span>
      </div>
      <div className="fgrid">
        <div><div className="fk">Problem</div><div className="fv">{p.problem}</div></div>
        <div><div className="fk">Built</div><div className="fv">{p.built}</div></div>
        <div><div className="fk">Impact</div><div className="fv imp">{p.impact}</div></div>
        <div><div className="fk">Tech</div><div>{p.tech.map((t) => <span className="chip" key={t}>{t}</span>)}</div></div>
      </div>
    </div>
  )
}

function ProductCard({ p }) {
  return (
    <div className="fcard">
      <div className="top">
        <div><div className="org">{p.subtitle}</div><h3>{p.title}</h3></div>
        <span className="ftag">{p.type}</span>
      </div>
      <p className="fv" style={{ marginBottom: '.9rem' }}>{p.description}</p>
      <div className="fgrid">
        <div><div className="fk">Problem</div><div className="fv">{p.problem}</div></div>
        <div>
          <div className="fk">My role · {p.role}</div>
          <ul className="fv" style={{ paddingLeft: '1rem', listStyle: 'disc' }}>{p.rolePoints.map((r) => <li key={r}>{r}</li>)}</ul>
        </div>
      </div>
      <div className="creds" style={{ marginTop: '1.1rem', padding: '.9rem 1.4rem', gap: '1.8rem' }}>
        {p.metrics.map((m) => (
          <div className="cred" key={m.label}><div className="n" style={{ fontSize: '1.3rem' }}>{m.value}</div><div className="l">{m.label}</div></div>
        ))}
      </div>
      <div style={{ marginTop: '.8rem' }}>{p.tags.map((t) => <span className="chip" key={t}>{t}</span>)}</div>
    </div>
  )
}

export default function Projects() {
  return (
    <>
      <section id="sf" className="section section-tint">
        <div className="wrap">
          <FadeUp>
            <span className="lead-chip">Lead practice</span>
            <h2 className="sec-h">Salesforce case studies</h2>
            <p className="sec-sub">Enterprise CRM across Health Cloud, FSC and Service Cloud — real client and clinical engagements.</p>
            <div className="feat">{salesforceProjects.map((p) => <SfCard key={p.title} p={p} />)}</div>
          </FadeUp>
        </div>
      </section>

      <section id="data" className="section">
        <div className="wrap">
          <FadeUp>
            <h2 className="sec-h">Data, analytics &amp; AI</h2>
            <p className="sec-sub">Independent projects — the data foundation behind the platform work.</p>
            <div className="dgrid">
              {dataProjects.map((p) => (
                <div className="dcard" key={p.title}>
                  <div className="dtype">{p.type}</div>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div>{p.tags.map((t) => <span className="chip" key={t}>{t}</span>)}</div>
                  <div className="dlinks">
                    {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>}
                    {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer">Live ↗</a>}
                    {!p.github && !p.live && <span className="soon">Links coming soon</span>}
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <section id="product" className="section section-tint">
        <div className="wrap">
          <FadeUp>
            <h2 className="sec-h">Product &amp; strategy</h2>
            <p className="sec-sub">Graduate coursework leading product and project management at Northeastern.</p>
            <div className="feat">{productProjects.map((p) => <ProductCard key={p.title} p={p} />)}</div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
