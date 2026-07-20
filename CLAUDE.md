# CardOps marketing site

Marketing site for **CardOps** — a pre-launch iOS inventory app for Pokémon card
vendors who sell at shows. **Vite + React + TypeScript** multi-page app
(`index.html`, `privacy.html`, `terms.html` are real entries); motion via
`motion` (Framer Motion). Not a static site anymore — it needs a build.

- **Dev:** `npm run dev` · **Build:** `npm run build` (type-checks, outputs `dist/`)
- **Deploy:** GitHub Actions (`.github/workflows/deploy.yml`) builds and publishes
  `dist/` to GitHub Pages at `https://ahavasi.github.io/cardstock-site/`. Pages
  source is "GitHub Actions". Vite `base` is `/cardstock-site/`; reference public
  assets and internal links through `url()` in `src/lib/base.ts`, never bare `/…`.
- **Source:** `src/pages/` (Home, Privacy, Terms), `src/components/`,
  `src/styles/tokens.css` (brand tokens), `public/` (monogram, icon, og, real
  App Store screenshots in `public/shots/`).

## Design Context

Full strategy: see [PRODUCT.md](PRODUCT.md). Quick reference:

- **Register:** brand (marketing/landing). **Platform:** web.
- **Primary audience:** full-time / serious Pokémon card dealers who sell at shows.
- **Positioning:** the inventory app built for vendors who *sell at shows* —
  offline-first, per-show profit, made for the table not the desk.
- **Personality:** no-nonsense pro tool — dependable, fast, straight-talking.
  Trust and relief, never hype.
- **Brand (pulled from the iOS app):** deep indigo-navy canvas `#1E1B4B`, cream
  card-stock `#FBF8F1`, amber action `#F59E0B`, purple-gradient monogram. Type:
  Archivo (display/body) + Martian Mono (numbers/labels). Uses the app's real
  screenshots and marketing captions.
- **Anti-references (stay out of all four):** generic SaaS template, crypto/hype,
  childish TCG clip-art, corporate/sterile B2B.
- **A11y:** WCAG AA (contrast verified passing); every animation has a
  `prefers-reduced-motion` fallback; scroll reveals always fall back to visible.
