import { portfolioData } from '../data/portfolio'
import { FadeUp } from './Animate'

const { about } = portfolioData

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <FadeUp>
          <h2 className="sec-h">Where Salesforce Meets Data</h2>
          <div className="about" style={{ marginTop: '1.2rem' }}>
            {about.map((para, i) => <p key={i}>{para}</p>)}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
