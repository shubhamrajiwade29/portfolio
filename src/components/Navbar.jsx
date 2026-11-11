const links = [
  ['About', 'about'],
  ['Salesforce', 'sf'],
  ['Data & AI', 'data'],
  ['Product', 'product'],
  ['Experience', 'exp'],
  ['Certifications', 'certs'],
  ['Contact', 'contact'],
]

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-in">
        <span className="nav-brand grad-text">Shubham R.</span>
        <div className="nav-links">
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`}>{label}</a>
          ))}
        </div>
      </div>
    </nav>
  )
}
