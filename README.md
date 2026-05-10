# Shubham Rajiwade — Portfolio

Personal portfolio built with React + Vite + Tailwind CSS. Deployed on GitHub Pages.

## Stack
- **Framework**: React 18 + Vite 5
- **Styling**: Tailwind CSS 3
- **Fonts**: JetBrains Mono, Playfair Display, DM Sans
- **Hosting**: GitHub Pages (auto-deploy via GitHub Actions)

## Setup

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

## Deploy to GitHub Pages

### Option A — Automatic (recommended)
1. Push to `main` branch
2. GitHub Actions builds and deploys automatically
3. Enable Pages in repo Settings → Pages → Source: **GitHub Actions**

### Option B — Manual
```bash
npm run deploy
```

## Customization

All content lives in `src/data/portfolio.js` — update your info there without touching components.

To change the GitHub Pages base path, update `vite.config.js`:
```js
base: '/your-repo-name/'
```

## Adding your photo
Replace the placeholder in `src/components/About.jsx` — find the `[ ADD PHOTO ]` div and replace with:
```jsx
<img src="/photo.jpg" alt="Shubham Rajiwade" className="w-full h-full object-cover" />
```
Put `photo.jpg` in the `public/` folder.
