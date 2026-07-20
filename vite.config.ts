import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Multi-page app: three real HTML entries so /privacy.html and /terms.html
// keep clean URLs and work on any static host without SPA-fallback config.
// Paths are root-relative; Vite resolves them from the project root.
export default defineConfig({
  // Project is served from https://ahavasi.github.io/cardstock-site/
  base: "/cardstock-site/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        privacy: "privacy.html",
        terms: "terms.html",
      },
    },
  },
});
