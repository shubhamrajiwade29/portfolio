# CLAUDE.md

## ▶ START HERE (run this first)
This repo is a ready-to-build handoff. Do the work in this order:
1. Read this whole file.
2. **Content pass** — apply sections A–C2 (titles → Analyst (Co-op) / Analyst – Salesforce Developer; 9 superbadges + Agentblazer Innovator; SF-forward bullets from `reference/…Resume_Master.pdf`; the `salesforceProjects` case-study array + two-track Projects; About copy C2; skills reorder; certifications already corrected in `src/data/portfolio.js` with `status`+`verify`).
3. **Design pass** — restyle components + `tailwind.config.js` + `index.css` to the FINAL DESIGN spec, matching `design-reference/vibrant-duo-FINAL.html` (Vibrant Duo, light, centered hero, full name "Shubham Sudhir Rajiwade", the 6-point polish checklist, Certifications section with Verify links to `public/certs/*`).
4. `npm install` → `npm run build` to confirm it compiles. Fix anything that doesn't.
5. Commit + push to `main` (auto-deploys to GitHub Pages).
6. Separately, update the `shubhamrajiwade29` profile README: 9 superbadges, Agentblazer Innovator 2026, and "Agentforce Sales Consultant" (not Sales Cloud Consultant).

Bundled for you: `reference/` (master resume), `design-reference/` (visual target), `public/certs/` (cert PDFs).
Ask Shubham for his Trailblazer profile URL to upgrade cert Verify links from PDFs to official Salesforce verification.

---


Project memory for Claude Code. Read this first every session.

## What this is

Shubham Rajiwade's personal portfolio site. Single-page React app, deployed to GitHub Pages.

- **Stack:** React 18 + Vite 5 + Tailwind CSS 3, icons via `lucide-react`
- **Content is data-driven:** most visible content comes from `src/data/portfolio.js`. Some copy is hardcoded in components (see "Hardcoded copy" below).
- **Design:** parchment + gold + slate editorial theme; Playfair Display (display), DM Sans (body), JetBrains Mono (mono).

## Strategic goal (READ THIS — drives every content decision)

Make the portfolio **Salesforce-led** while still **showing the data / analytics / AI range** underneath.
Salesforce is the rarest, most-credentialed card (5 certs, 9 superbadges, ~4 yrs) and should read first;
the data/AI work (dbt, Snowflake, GenAI, the 7 GitHub repos) is the breadth that makes him a *bridge* candidate and stays visible, second.

Resumes flex per job; the portfolio is one public page, so it takes a fixed Salesforce-forward stance.

## Commands

```bash
npm install      # first-time setup
npm run dev      # local dev server (Vite)
npm run build    # production build → dist/   (RUN THIS before pushing, to confirm it compiles)
npm run preview  # preview the production build
npm run deploy   # gh-pages -d dist (manual deploy path)
```

## Deploy

- Auto-deploys to GitHub Pages via `.github/workflows/deploy.yml` on push to `main` (Node 20, `npm ci` → build → Pages).
- `vite.config.js` has `base: '/portfolio/'` — MUST match the GitHub repo name or deployed CSS/JS 404s.

## Architecture

- `src/App.jsx` — app shell, composes sections in order.
- `src/components/` — `Hero`, `About`, `Skills`, `Experience`, `Projects`, `Certifications`, `Contact`, `Navbar`, `Animate.jsx` (scroll-reveal wrapper).
- `src/hooks/useInView.js` — IntersectionObserver hook for animations.
- `src/data/portfolio.js` — content source: `personal`, `about`, `skills`, `certifications`, `experience`, `dataProjects`, `productProjects`.
- `public/profile.jpg` — profile photo.

### Data-driven conventions
- **Experience** renders from `experience[]`; `type: 'current'` = gold dot + CURRENT badge, `type: 'past'` = gray dot. Flip `type` to move a role to past.
- **Projects** show "Links coming soon" when both `github` and `live` are `null`.

---

## ✅ Already applied (DONE — do not redo)

`src/data/portfolio.js`:
- `personal.title` → "Salesforce Developer & Analytics Engineer"
- `personal.currentRole` → "MSEM @ Northeastern · Open to Full-Time (Jan 2027)"
- Experience titles: MGB "Data Analyst Co-op · Salesforce Health Cloud" (past, Jan–Jul 2026) · Deloitte "Analyst · Salesforce & Analytics Engineering" · TCS "Assistant Systems Engineer · Salesforce & CRM" (Aug 2020–Oct 2021)
- `dataProjects` → 7 real GitHub repos with correct links (see Owner facts for the repo list)

Components:
- `Hero.jsx` ROLES typewriter → Salesforce Developer · Analytics Engineer · Data Analyst · Data Engineer · BI Engineer
- `Hero.jsx` stat → "7 Projects Shipped"
- `About.jsx` heading → "Where Salesforce / Meets Data"; Target Roles fact → "Salesforce Dev · Analytics Engineer"
- `Contact.jsx` blurb → "Targeting Salesforce and Analytics Engineering roles for full-time from Jan 2027…" (co-op line removed)
- `index.html` meta description → "Salesforce Developer & Analytics Engineer"

---

## 🔨 TODO next session — Salesforce-forward restructure

### A. Factual updates (quick, do first)
1. Titles → match Shubham's master resume:
   - MGB → **"Analyst (Co-op)"**  (he standardized on this; "Co-op" in parens, clarified verbally if asked)
   - Deloitte → **"Analyst – Salesforce Developer"**
   - TCS → keep **"Assistant Systems Engineer"** (plural, per official service certificate; resume uses singular — plural is the verifiable one). Keep the "· Salesforce & CRM" suffix if desired.
2. **Superbadges: 9** (CONFIRMED by Shubham — was 7): Apex, LWC, FSC, Process Automation, Security, Reports & Dashboards, Business Admin, Prompt Builder Templates, Agentforce Service Agents. (FSC = "Financial Services Cloud Specialist" when named.)
3. Add **"Agentblazer Innovator 2026"** (CONFIRMED — upgraded from Champion) — About or Certifications area.
4. Certifications stay **5**: Platform Developer I, Administrator, Sales Cloud Consultant, Platform App Builder, JavaScript Developer I.

### B. Experience bullets → Salesforce-forward (rewrite all three)
Source = master resume (`Shubham_Rajiwade_Salesforce_Resume_Master_Dev.pdf`). Keep **honest framing: "contributed to", not "led"** for Deloitte (Analyst level). Trim to 3–4 punchy bullets per role (portfolio cards ≠ full resume).

- **MGB (Analyst (Co-op)):** Health Cloud legacy→Salesforce migration (field mapping, SQL cleaning, Data Loader, post-load validation) · Health Cloud patient-data tool used by 30+ clinicians (React + FastAPI over Health Cloud staged in SQL Server) · decade of clinical data in SQL/Python + 10+ Tableau dashboards for the annual program evaluation.
- **Deloitte (Analyst – Salesforce Developer):** contributed to 3 full life-cycle implementations (reqs→go-live→hypercare) across banking/FS/healthcare, ~30% manual-effort cut · Flow automation, validation rules, approval processes, custom LWC, data model, RBAC · REST/SOAP + MuleSoft + Platform Events integrations, 500K+ monthly transactions · bulkified Apex (classes/triggers/batch) + LWC/Aura/Visualforce incl. FSC & OmniStudio · mentored 6+ joiners, coding standards.
- **TCS (Assistant Systems Engineer):** administered Sales & Service Cloud (users, profiles, permission sets, roles, queues, FLS), built Flows/custom objects, 20+ CRM enhancements (+12% satisfaction) · optimized SOQL/reports/dashboards (+30% perf, −25% reporting effort) · Apex helper + test classes, production support.

### C. NEW "Salesforce & CRM" section (the core restructure)
His 7 GitHub repos are ALL data/analytics — none are Salesforce. So the Salesforce section is **case-study cards** (problem → built → impact → tech), NOT repo links. This is honest and stronger than code links for enterprise SF work. Design a distinct card style from the GitHub cards (no "GitHub/Live" footer; show a "Tech" row and an "Impact" row instead).

Restructure Projects into **two labeled tracks, Salesforce first:**
1. **Salesforce & CRM** (new, leads) — 3 case studies, MGB flagship pulled to top:
   - **MGB — Health Cloud Patient-Data Tool (flagship):** scattered patient records across Health Cloud tabs → end-to-end full-stack tool (React + FastAPI REST over Health Cloud staged in SQL Server, node-graph patient-relationship views) → used by 30+ clinicians, faster record navigation → Health Cloud, React, FastAPI, SQL Server, REST.
   - **Deloitte — Enterprise Salesforce Implementations:** banking/FS/healthcare clients needing full CRM builds → contributed to 3 full life-cycle implementations; Apex/LWC/Flows, legacy→FSC migration, MuleSoft/REST/SOAP (500K+ monthly txns), RBAC → ~30% manual-effort cut, mentored 6+ → Apex, LWC, FSC, OmniStudio, MuleSoft, Platform Events.
   - **TCS — Sales/Service Cloud Admin & Enhancements:** → admin + 20+ CRM enhancements (Flows/Apex/custom objects), SOQL/report optimization → +12% satisfaction, +30% query perf, −25% reporting → Sales Cloud, Service Cloud, Apex, Flows, SOQL.
2. **Data, Analytics & AI** (existing 7 repos) — unchanged, now second.

Implementation note: add a `salesforceProjects` (case-study shape: `title, org, problem, built, impact, tech[]`) array to `portfolio.js`, and update `Projects.jsx` to render the two tracks (tabs or stacked sections, Salesforce first). Keep `productProjects` or fold in — Shubham's call.

### C2. About copy (CONFIRMED — use this exact text, from Shubham's LinkedIn)
Heading stays "Where Salesforce / Meets Data". Use these four paragraphs (drop the LinkedIn "Core skills" line and email — Skills/Contact sections cover them). Target Roles fact → "Salesforce Dev · Consultant · Admin".

1. Salesforce Developer with 4+ years across Sales, Service, and Health Cloud — specializing in Health Cloud and financial services. Builds with Apex, LWC, Flows, OmniStudio, and REST/SOAP + MuleSoft integrations, backed by 5 certifications, 9 superbadges (incl. Financial Services Cloud Specialist), and Agentblazer Innovator 2026.
2. At Deloitte USI, took 3 full life-cycle implementations from requirements through go-live and hypercare for banking, financial-services, and healthcare clients — Apex/LWC/Flow solutions, REST/SOAP + MuleSoft integrations, role-based security, releases via Git, Salesforce DX, and Copado; mentored 6+ new joiners.
3. Most recently at Mass General Brigham, contributed to a legacy-database migration into Health Cloud and built a Health Cloud patient-data tool (React + FastAPI, AI-assisted) bringing scattered records into one view for 30+ clinicians; analyzed a decade of clinical data with SQL and Python and built Tableau dashboards for the annual program evaluation.
4. Outside work, builds data and AI projects — a dbt/Snowflake pipeline and a GenAI analytics project comparing cost and performance across 188 LLMs — keeping Salesforce work grounded in strong data fundamentals.

### D. Supporting reorders
- **Skills:** reorder so the **Salesforce group leads** (Admin/Config · Clouds incl. Health/FSC · Apex/LWC/integrations · Agentforce), Data/Analytics/Cloud second. Mirror the resume's skill order. Consider adding an "AI & Agentforce (hands-on)" group: Agentforce Builder, Prompt Builder templates, RAG grounding, invocable Apex.
- **Navbar:** add a "Salesforce" link/anchor before "Projects" (or rename Projects track labels).
- **About:** keep "Where Salesforce Meets Data" + bridge framing; ensure copy leads Salesforce.

### E. Leave OFF
- The **Salesforce Analyst – RSO (Northeastern, Feb–Aug 2025)** role. Shubham's rule: only for senior/lead-titled postings. A public page can't apply that rule selectively, so omit it here.

### F. Later (after site is live) — project thumbnails
Add a `thumbnail` field per project + `<img>` at top of each card (16:9), images in `public/thumbnails/`, graceful fallback. Images are Shubham's to provide (real dashboard screenshots for data projects; designed title cards for SF/GenAI). Don't block the restructure on this.

---

## Two repos (Claude Code can push both)

1. **`portfolio`** — this repo. Apply A–E above, `npm run build` to verify, push to `main`.
2. **`shubhamrajiwade29`** (profile README repo) — already updated live by Shubham, BUT still needs: superbadges **7 → 9**, add **Agentblazer Innovator 2026**, and MGB title aligned to "Analyst (Co-op)" if changed here. Keep profile README and portfolio consistent.

## House rules
- Prefer `src/data/portfolio.js` for content; touch components for the structural work in C/D.
- **Honesty:** keep "contributed to" (not "led") for Deloitte; metrics are Shubham's own claims — don't inflate. MGB payroll title was "Student Intern"; "Analyst (Co-op)" is the functional title used everywhere, clarified verbally if asked.
- Ask before changing titles, dates, or status wording — Shubham's call.
- Keep `vite.config.js` `base` in sync with the repo name.

## Owner facts (source of truth)
- Shubham Rajiwade — Boston, MA · rajiwade.s@northeastern.edu · 857-351-9031
- GitHub github.com/shubhamrajiwade29 · LinkedIn linkedin.com/in/shubhamrajiwade · Tableau public.tableau.com/app/profile/shubham.rajiwade/vizzes
- MSEM @ Northeastern (GPA 3.7, grad Dec 2026) · B.E. IT, Univ. of Mumbai (3.7, 2020)
- ~4 yrs Salesforce/CRM: Deloitte USI (Oct 2021–Aug 2024), TCS (Aug 2020–Oct 2021); MGB co-op (Jan–Jul 2026)
- 5 Salesforce certs, 9 superbadges, Agentblazer Innovator 2026
- Work auth: F-1 through Dec 23 2026, OPT target start ~Jan 12 2027 ("Open to Full-Time Jan 2027")
- 7 GitHub repos: llm-performance-adoption-analytics · healthcare-claims-denial-analysis · ecommerce-dbt-snowflake · hospital-readmission-risk · ecommerce-azure-analytics · patient-data-dashboard · suffolk-county-zip-analysis

---

## 🎨 FINAL DESIGN DECISION (chosen — build to this)

Direction: **Vibrant Duo, light, centered hero.** Visual target bundled in this repo at
`design-reference/vibrant-duo-FINAL.html` — build the React/Tailwind version to match it.
(The current components still use the OLD parchment/gold theme — that theme is being replaced.)

**Name:** display the full name **"Shubham Sudhir Rajiwade"** in the hero.

**Design tokens**
- Background `#FFFFFF`; soft surface `#F7F7FC`; ink `#14152A`; muted `#55586F`; faint `#8C8FA8`; border `#EBEBF4`.
- Brand gradient: `linear-gradient(105deg,#2563EB,#7C3AED 55%,#DB2777)` (blue → violet → pink). Use it on the name, section-header underlines, primary buttons, stat numbers, timeline spine, flagship-card tint.
- Accent solids: blue `#2563EB`, violet `#7C3AED`, pink `#DB2777`.
- Fonts: **Space Grotesk** (headings, letter-spacing −.02em) + **Inter** (body). Load from Google Fonts.

**Layout notes**
- Hero: **centered** — availability pill, gradient name, Salesforce typewriter (4 roles: Salesforce Developer · Consultant · Administrator · Analyst), tagline, two buttons, and a centered credential row (4+ yrs · 5 certs · 9 superbadges · Agentblazer Innovator).
- Section headers: heading with a gradient underline (`border-image`), optional small "lead-chip" label above (used sparingly, not an all-caps eyebrow on every section).
- Salesforce case studies = feature cards (Problem / Built / Impact / Tech), flagship (MGB) tinted with a soft gradient wash.
- Data & AI projects = lighter secondary grid.
- Experience = timeline with a gradient spine.
- Soft radial blue/violet glow blooms behind the hero on the white canvas.
- Light mode only (no dark toggle) for the chosen direction.

**Two build tasks for this session (in order):**
1. Apply the content TODOs in sections A–D above (titles, 9 superbadges + Agentblazer, SF-forward bullets, the new `salesforceProjects` case-study array + two-track Projects, skills reorder, About copy C2).
2. Restyle the components + `tailwind.config.js` + `index.css` to the Vibrant Duo tokens above, matching `design-reference/vibrant-duo-FINAL.html`. Then `npm run build` to confirm it compiles, and push to `main`.

**Also (separate repo):** update the `shubhamrajiwade29` profile README — 9 superbadges, Agentblazer Innovator 2026.

### 🎨 Visual polish checklist (build to the IMPROVED version, not a flat gradient)
The first demo was good but flat. The bundled `design-reference/vibrant-duo-FINAL.html` now includes these — match them:
1. **Hero anchor:** circular profile photo (gradient ring) centered above the name, so the hero isn't empty space.
2. **Spend the gradient sparingly:** gradient on the name + primary button only; stat numbers and most accents are solid violet. The gradient should feel like a highlight, not wallpaper.
3. **Section rhythm:** alternate white and a soft lavender tint (`--tint:#f8f7fe`) between sections for depth.
4. **Credential band:** the 4+/5/9/Innovator row is a tinted, bordered, shadowed band (not floating text) — it's the strongest selling point, treat it as designed.
5. **Motion:** one staggered fade-up on hero load + the typewriter; nothing scattered. Respect `prefers-reduced-motion`.
6. **Depth:** layered soft shadows, generous radius, radial blue/violet glow blooms behind the hero.
7. **Profile photo appears once — in the hero** (circular, gradient ring). The About section is single-column text, no photo.

### Certifications (CORRECTED — match Trailhead exactly; verifiable)
Real certs (from Shubham's cert PDFs + Trailhead): **Platform Developer I** (Jul 2021), **Administrator** (Dec 2021), **Platform App Builder** (Jan 2022), **Agentforce Sales Consultant** (Feb 2023, *not* "Sales Cloud Consultant" — fix this everywhere incl. resume/README), **JavaScript Developer I** (EXPIRED 2025). `portfolio.js` `certifications[]` now carries `status` + `verify`.
- Present all 5; JS shown with an "Expired" label (not hidden). Headline/stat: "5 certifications earned · 4 active".
- **Links:** the 4 active certs link to bundled PDFs in `public/certs/` via `verify` (render href as `import.meta.env.BASE_URL + cert.verify`). JS `verify:null` → no link.
- **Better, if Shubham provides it:** swap the PDF links for official Salesforce verification URLs (his public Trailblazer profile, or per-cert sforce.co/verifycerts links) — authoritative proof. PDFs can stay as a download fallback.
- Build a Certifications section (see design-reference) with badge, name, year, status pill, and a "Verify ↗" link.
