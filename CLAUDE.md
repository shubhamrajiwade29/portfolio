# CLAUDE.md

Project memory for Claude Code. Read this first every session.

## What this is

Shubham Rajiwade's personal portfolio site. Single-page React app, deployed to GitHub Pages.

- **Stack:** React 18 + Vite 5 + Tailwind CSS 3, Framer Motion for animation, icons via `lucide-react`
- **Content is data-driven:** almost everything visible on the site comes from `src/data/portfolio.js`. Edit that file to change content — do NOT hardcode content into components.
- **Design system:** see `.claude/skills/frontend-design/SKILL.md` before touching any component styling or adding new UI — it documents the color/type/spacing/motion tokens so new work doesn't drift from the existing "editorial parchment" look.

## Commands

```bash
npm install      # first-time setup
npm run dev      # local dev server (Vite)
npm run build    # production build → dist/
npm run preview  # preview the production build
npm run deploy   # gh-pages -d dist (manual deploy path)
```

## Deploy

- Auto-deploys to GitHub Pages via `.github/workflows/deploy.yml` on every push to `main` (also manual `workflow_dispatch`). Node 20, `npm ci` → `npm run build` → Pages.
- `vite.config.js` has `base: '/portfolio/'` — this MUST match the GitHub repo name. If the repo is renamed, update `base` or the deployed CSS/JS 404s.

## Architecture

- `src/App.jsx` — app shell, composes the sections in order.
- `src/components/` — one component per section: `Hero`, `About`, `Skills`, `Experience`, `Projects`, `Certifications`, `Contact`, `Navbar`. `Animate.jsx` exports the reveal-on-scroll wrappers (`FadeUp`, `FadeIn`, `SlideIn`, `ScaleIn`) plus `NumberTicker` (count-up stat), all built on Framer Motion's `whileInView`/`useInView` — use these instead of writing a new `motion.div` inline.
- `src/data/portfolio.js` — SINGLE SOURCE OF TRUTH for content: `personal`, `about`, `skills`, `certifications`, `experience`, `dataProjects`, `productProjects`.
- `public/profile.jpg` — profile photo.

### Data-driven conventions (important)

- **Experience timeline** renders from `experience[]`. Each entry has a `type` field: `'current'` shows a gold dot + "CURRENT" badge; `'past'` shows a neutral gray dot and no badge. To move a role to past, just flip `type` — no component edits needed.
- **Projects** render "Links coming soon" automatically when both `github` and `live` are `null`. To publish links, fill those fields.

## House rules

- Prefer editing `src/data/portfolio.js` over touching components. Only change components when the request is genuinely structural/visual.
- Don't reorder or restyle sections unless asked.
- Ask before changing role titles, dates, or status wording — these are Shubham's call.
- Keep the `vite.config.js` `base` in sync with the repo name.

## Owner facts (source of truth)

- Name: Shubham Rajiwade — Boston, MA
- Email: rajiwade.s@northeastern.edu
- GitHub: github.com/shubhamrajiwade29 · LinkedIn: linkedin.com/in/shubhamrajiwade
- Education: MSEM @ Northeastern University (grad Dec 2026)
- Background: 4 yrs Salesforce/CRM (Deloitte, TCS) → now Salesforce Dev + Analytics Engineering; 5 Salesforce certifications; most recently a Data Analyst co-op at Mass General Brigham (veteran support program, Jan–Jul 2026, now past). Open to full-time from Jan 2027, after MSEM.
