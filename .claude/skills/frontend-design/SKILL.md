---
name: frontend-design
description: Design system rules for this portfolio (colors, type, spacing, motion, component patterns). Use whenever adding or editing UI in src/components/ or touching tailwind.config.js/index.css, so new work matches the existing "editorial parchment" aesthetic instead of drifting toward generic AI-template look.
---

# Frontend Design System — Shubham's Portfolio

This site's aesthetic is a warm, editorial, "old paper meets terminal" look —
not a generic dark-mode SaaS template. Every UI change should read as part of
the same system as what's already built. When in doubt, open an existing
component (`Hero.jsx`, `Projects.jsx`) and match its patterns rather than
inventing new ones.

## Color tokens (tailwind.config.js)

Use only these — never raw hex, never Tailwind's default `gray`/`blue`/`red` palettes for structural UI:

- **gold** (400/500/600) — accents, CTAs, active states, the one "pop" color. `gold-400` for subtle borders/glows, `gold-500` for text/icons that need to read as "brand."
- **parchment** (50/100/200/300/400) — the entire light background system. `parchment-50` is the page background; `parchment-300` is the default border color; `parchment-100/200` for subtle fills.
- **slate** (400–900) — all body text and dark UI. `slate-900` for headings/primary buttons, `slate-500` for secondary/muted text, `slate-400` for the quietest labels.
- Category accent colors (used sparingly, e.g. `TYPE_COLORS` in Projects.jsx) — `emerald`, `blue`, `purple`, `pink` — only for tag/badge chips that categorize content, never for primary UI.

Don't reach for `amber`/`ink`/`ghost` aliases in new code — they exist only for backward compatibility with older markup.

## Typography

Three font families, each with a fixed job — never mix their roles:

- **`font-display`** (Playfair Display, serif) — headings only. Pair a bold weight with an `italic` accent span for the "gradient" word (see `.text-gradient` in index.css) — this two-tone heading is the site's signature move (e.g. "Where Salesforce / *Meets Data*").
- **`font-mono`** (JetBrains Mono) — all labels, nav, buttons, tags, section numbers ("04 — Projects"), stats. Always `tracking-widest uppercase text-xs` or `text-sm` for these — mono text is never body copy.
- **`font-body`** (DM Sans) — paragraph copy only. `text-slate-500` or `text-slate-600`, `leading-relaxed`.

Scale: hero name uses `clamp(3.5rem,12vw,5rem)`; section headings are `text-4xl md:text-5xl font-black`; body copy is `text-sm`/`text-base`. Don't introduce new arbitrary sizes — reuse these.

## Spacing

Sections use `py-28 px-6` with `max-w-6xl mx-auto` (or `max-w-5xl`/`max-w-2xl` for narrower content blocks). Card padding is `p-6`. Gaps between grid/flex items are `gap-4` or `gap-6`. Stick to Tailwind's default 4px scale — no custom spacing values.

Every section opens with the same header pattern:
```jsx
<FadeIn>
  <div className="flex items-center gap-4 mb-16">
    <span className="font-mono text-xs text-gold-500 tracking-[0.3em] uppercase">0N — Section Name</span>
    <div className="flex-1 h-px bg-parchment-300" />
  </div>
</FadeIn>
```
Reuse this exactly for any new section — don't design a new section header style.

## Motion (Framer Motion)

All scroll-reveal animation goes through `src/components/Animate.jsx` (`FadeUp`, `FadeIn`, `SlideIn`, `ScaleIn`) — never write a raw `motion.div` with `whileInView` inline when one of these already does the job. They share one easing curve (`[0.16, 1, 0.3, 1]`, an "ease-out-expo" feel) and `viewport={{ once: true }}` — don't invent a different curve elsewhere, it'll read as inconsistent.

For interactive elements (buttons, cards), use `whileHover`/`whileTap` directly on a `motion.*` element:
- Buttons: `whileHover={{ scale: 1.05 }}`, `whileTap={{ scale: 0.97 }}`, `transition={{ duration: 0.2 }}`.
- Cards: `whileHover={{ y: -6, borderColor: 'rgba(201, 168, 76, 0.5)', boxShadow: '0 12px 40px rgba(28, 25, 23, 0.08)' }}`, `transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}` — this is the site's one "card lift" pattern, defined originally as the `.card-hover` CSS utility. Prefer the Framer Motion version for new cards; the CSS class still exists for older components (`Skills.jsx`, `Experience.jsx`, `Certifications.jsx`) and doesn't need migrating unless you're already touching that file.

Delay prop convention: components accept `delay="delay-N"` (N in ms as a string, e.g. `"delay-200"`) purely for legacy compatibility — `Animate.jsx` parses the number back out. New code can pass this same string format to stay consistent with existing call sites.

## Component patterns

- **Buttons**: primary = solid `bg-slate-900 text-parchment-50`; secondary = outlined `border-gold-400/60 text-gold-500`; tertiary = outlined `border-parchment-300 text-slate-500`. All buttons are `font-mono text-sm tracking-widest uppercase px-7 py-3` — no rounded corners, no soft drop shadows on buttons themselves.
- **Cards**: `border border-parchment-300 bg-white/80 shadow-sm`, sharp corners (no `rounded-*`), lift on hover per the Motion section above.
- **Badges/tags**: `font-mono text-[10px] tracking-widest uppercase px-2 py-0.5 border` with a category-specific color from `TYPE_COLORS`-style maps.
- **Corners are square.** This entire design system uses zero border radius anywhere (buttons, cards, badges, stat tiles). Don't introduce `rounded-lg`/`rounded-full` except for the small decorative dots (`w-1.5 h-1.5 rounded-full`) and profile photo circle.

## Avoid the generic AI aesthetic

Things that would clash with this system and should be treated as red flags in a review:
- Purple/blue gradient hero backgrounds, glassmorphism, or neon glows — this site's "glow" is a soft warm `gold-400/8` blur, used sparingly.
- Rounded-corner cards with heavy drop shadows — this system is flat and square-cornered with a hairline border instead.
- Emoji as UI icons — this site uses inline SVG-free unicode glyphs (✉, ⌥, ↗, ▸) or none at all, styled via `font-mono`.
- Centered-everything layouts with no editorial hierarchy — headings here are always asymmetric (`text-4xl md:text-5xl`, left-aligned within their section) except the Hero, which is the one intentionally centered section.
- Dark mode — this site is intentionally light/parchment-only; don't add a dark theme toggle unless explicitly asked.
