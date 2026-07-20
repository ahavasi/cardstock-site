# CardOps marketing site

Marketing site for **CardOps** — the pre-launch iOS inventory app for Pokémon
card vendors. Built with Vite + React + TypeScript, with motion via `motion`
(Framer Motion). Brand and imagery (monogram, App Store screenshots, marketing
captions) are pulled from the CardOps iOS project.

## Develop

```bash
npm install
npm run dev        # local dev server
```

## Build & deploy

This is now a **built** site (no longer plain static files). Deploy the
generated `dist/` folder to any static host.

```bash
npm run build      # type-checks, then outputs dist/
npm run preview    # serve the production build locally
```

It's a multi-page app — `dist/` contains `index.html`, `privacy.html`, and
`terms.html`, so the existing App Store privacy/terms URLs keep working with no
server-side routing config.

## Structure

- `src/pages/` — `Home`, `Privacy`, `Terms`
- `src/components/` — Hero, ReliabilityBeat, FeatureShowcase, BeliefStrip,
  FinalCTA, PhoneFrame, chrome (header/footer/wordmark), Reveal (scroll reveals
  that always fall back to visible), CountUp
- `src/styles/` — `tokens.css` (brand: indigo-navy / cream / amber, OKLCH) and
  `global.css`
- `public/` — monogram, app icon, OG image, and resized real screenshots

Strategy and brand context live in `PRODUCT.md`. Legal copy in the Privacy /
Terms pages is reproduced verbatim from the app's reviewed policies.
