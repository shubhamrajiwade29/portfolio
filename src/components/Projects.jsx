import { useState } from 'react'
import { portfolioData } from '../data/portfolio'
import { FadeUp, FadeIn } from './Animate'

const { dataProjects, productProjects } = portfolioData

const TYPE_COLORS = {
  'Data Science': 'text-emerald-700 border-emerald-300 bg-emerald-50',
  'Analytics': 'text-blue-700 border-blue-300 bg-blue-50',
  'Data Engineering': 'text-purple-700 border-purple-300 bg-purple-50',
  'Project Management': 'text-gold-500 border-gold-400/40 bg-amber-50',
  'Product Management': 'text-pink-700 border-pink-300 bg-pink-50',
}

function DataProjectCard({ project, index }) {
  return (
    <FadeUp delay={`delay-${(index % 2) * 100}`}>
      <div className="border border-parchment-300 bg-white/80 p-6 flex flex-col card-hover h-full shadow-sm">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <div className={`inline-block font-mono text-[10px] tracking-widest uppercase px-2 py-0.5 border mb-3 ${TYPE_COLORS[project.type] || 'text-slate-500 border-slate-300'}`}>
              {project.type}
            </div>
            <h3 className="font-display text-xl font-bold text-slate-900 leading-snug">{project.title}</h3>
          </div>
          <div className="font-mono text-2xl text-parchment-300 font-bold shrink-0">0{index + 1}</div>
        </div>
        <p className="font-body text-sm text-slate-500 leading-relaxed mb-5 flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span key={tag} className="font-mono text-[10px] tracking-widest text-slate-500 bg-parchment-100 px-2 py-0.5 border border-parchment-300">{tag}</span>
          ))}
        </div>
        <div className="flex gap-4 pt-4 border-t border-parchment-200">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="font-mono text-xs text-slate-500 tracking-widest uppercase hover:text-slate-900 transition-colors flex items-center gap-1.5">
              <span className="w-3 h-3 border border-current rounded-full flex items-center justify-center text-[8px]">↗</span>GitHub
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="font-mono text-xs text-gold-500 tracking-widest uppercase hover:text-gold-600 transition-colors flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-gold-400" />Live Demo
            </a>
          )}
          {!project.github && !project.live && (
            <span className="font-mono text-xs text-slate-400 tracking-widest">Links coming soon</span>
          )}
        </div>
      </div>
    </FadeUp>
  )
}

function ProductProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <FadeUp delay={`delay-${index * 150}`}>
      <div className="border border-parchment-300 bg-white/80 flex flex-col card-hover shadow-sm">
        {/* Header */}
        <div className="p-6 pb-4">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className={`inline-block font-mono text-[10px] tracking-widest uppercase px-2 py-0.5 border ${TYPE_COLORS[project.type]}`}>
              {project.type}
            </div>
            <div className="font-mono text-2xl text-parchment-300 font-bold shrink-0">0{index + 1}</div>
          </div>
          <h3 className="font-display text-xl font-bold text-slate-900 leading-snug mb-1">{project.title}</h3>
          <p className="font-mono text-[10px] text-slate-400 tracking-widest uppercase mb-4">{project.subtitle}</p>
          <p className="font-body text-sm text-slate-500 leading-relaxed">{project.description}</p>
        </div>

        {/* Metrics row */}
        <div className="grid grid-cols-4 border-t border-parchment-200">
          {project.metrics.map((m) => (
            <div key={m.label} className="py-3 px-3 text-center border-r border-parchment-200 last:border-r-0">
              <div className="font-mono font-bold text-sm text-gold-500">{m.value}</div>
              <div className="font-mono text-[9px] text-slate-400 mt-0.5 leading-tight">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Expandable detail */}
        {expanded && (
          <div className="border-t border-parchment-200 p-6 flex flex-col gap-6 bg-parchment-50/60">
            <div>
              <div className="font-mono text-[10px] text-slate-400 tracking-widest uppercase mb-2">The Problem</div>
              <p className="font-body text-sm text-slate-500 leading-relaxed border-l-2 border-gold-400/40 pl-3">{project.problem}</p>
            </div>
            <div>
              <div className="font-mono text-[10px] text-slate-400 tracking-widest uppercase mb-2">My Role — {project.role}</div>
              <ul className="flex flex-col gap-1.5">
                {project.rolePoints.map((point, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-500 font-body leading-relaxed">
                    <span className="text-gold-400/80 shrink-0">▸</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="font-mono text-[10px] tracking-widest text-slate-500 bg-parchment-100 px-2 py-0.5 border border-parchment-300">{tag}</span>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="px-6 py-4 border-t border-parchment-200 flex items-center justify-between">
          <button
            onClick={() => setExpanded(!expanded)}
            className="font-mono text-xs text-gold-500 tracking-widest uppercase hover:opacity-70 transition-opacity flex items-center gap-2"
          >
            {expanded ? 'Show Less ↑' : 'View Case Study ↓'}
          </button>
          <div className="flex gap-4">
            <span className="font-mono text-xs text-slate-400 tracking-widest uppercase">NEU · {project.subtitle.split('·')[0].trim()}</span>
          </div>
        </div>
      </div>
    </FadeUp>
  )
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState('data')

  return (
    <section id="projects" className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-xs text-gold-500 tracking-[0.3em] uppercase">04 — Projects</span>
            <div className="flex-1 h-px bg-parchment-300" />
          </div>
        </FadeIn>

        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <h2 className="font-display text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Work That <br /><span className="text-gradient italic">Shipped</span>
            </h2>
            <a href="https://github.com/shubhamrajiwade29" target="_blank" rel="noopener noreferrer"
              className="font-mono text-xs text-slate-500 tracking-widest uppercase border-b border-slate-300 hover:text-slate-900 hover:border-slate-500 pb-0.5 transition-all whitespace-nowrap">
              All Repos on GitHub ↗
            </a>
          </div>
        </FadeUp>

        {/* Tabs */}
        <FadeUp delay="delay-100">
          <div className="flex gap-0 border-b border-parchment-300 mb-10">
            {[
              { id: 'data', label: 'Data & Analytics', count: dataProjects.length },
              { id: 'product', label: 'Product & Strategy', count: productProjects.length },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`font-mono text-xs tracking-widest uppercase px-5 py-3 border-b-2 -mb-px transition-all flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'text-gold-500 border-gold-400'
                    : 'text-slate-400 border-transparent hover:text-slate-600'
                }`}
              >
                {tab.label}
                <span className={`text-[9px] px-1.5 py-0.5 rounded-full ${
                  activeTab === tab.id ? 'bg-gold-400/15 text-gold-500' : 'bg-parchment-200 text-slate-400'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </FadeUp>

        {/* Data Tab */}
        {activeTab === 'data' && (
          <div className="grid md:grid-cols-2 gap-6">
            {dataProjects.map((project, i) => (
              <DataProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        )}

        {/* Product Tab */}
        {activeTab === 'product' && (
          <div className="flex flex-col gap-6">
            {productProjects.map((project, i) => (
              <ProductProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
