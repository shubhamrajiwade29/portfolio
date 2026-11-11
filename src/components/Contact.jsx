import { portfolioData } from '../data/portfolio'

const { personal } = portfolioData

export default function Contact() {
  return (
    <>
      <section id="contact" className="section section-tint contact">
        <div className="wrap">
          <h2>Let's <span className="grad-text">connect</span></h2>
          <p className="sec-sub">Open to Salesforce Developer, Consultant &amp; Administrator roles for full-time from January 2027 — especially healthcare and financial services.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center' }}>
            <a className="m" href={`mailto:${personal.email}`}>{personal.email} →</a>
            <a className="m" href={personal.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn →</a>
            <a className="m" href={personal.github} target="_blank" rel="noopener noreferrer">GitHub →</a>
          </div>
        </div>
      </section>
      <footer className="foot"><div className="wrap">© 2026 Shubham Rajiwade · Salesforce Developer</div></footer>
    </>
  )
}
