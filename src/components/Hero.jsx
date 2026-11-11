import { useEffect, useState } from 'react'
import { portfolioData } from '../data/portfolio'

const { personal, credentials } = portfolioData

const ROLES = ['Salesforce Developer', 'Salesforce Consultant', 'Salesforce Administrator', 'Salesforce Analyst']

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = ROLES[roleIdx]
    let t
    if (typing) {
      if (displayed.length < current.length) t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 68)
      else t = setTimeout(() => setTyping(false), 1700)
    } else if (displayed.length > 0) {
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 34)
    } else {
      setRoleIdx((i) => (i + 1) % ROLES.length)
      setTyping(true)
    }
    return () => clearTimeout(t)
  }, [displayed, typing, roleIdx])

  return (
    <header className="hero">
      <div className="wrap hero-in">
        <div className="hero-av" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}profile.jpg)` }} role="img" aria-label="Shubham Rajiwade" />
        <div><span className="avail"><span className="dot" /> Open to full-time · Jan 2027</span></div>
        <h1 className="grad-text">{personal.name}</h1>
        <div className="role"><span>{displayed}</span><span className="cur">▌</span></div>
        <p className="lead">{personal.tagline}</p>
        <div className="btns">
          <a className="btn btn-grad" href="#sf">View Salesforce work</a>
          <a className="btn btn-ghost" href="#data">Data &amp; AI projects</a>
          <a className="btn btn-ghost" href={personal.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="btn btn-ghost" href={personal.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div className="creds">
          {credentials.map((c) => (
            <div className="cred" key={c.label}><div className="n">{c.value}</div><div className="l">{c.label}</div></div>
          ))}
        </div>
      </div>
    </header>
  )
}
