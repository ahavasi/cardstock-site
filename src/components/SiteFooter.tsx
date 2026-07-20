import { Wordmark } from "./Wordmark";
import { SUPPORT_HREF } from "../lib/site";
import "./chrome.css";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div>
            <Wordmark />
            <p className="site-footer__tag">
              The inventory app for Pokémon card vendors who sell at shows. Scan,
              price, and run your table — offline.
            </p>
          </div>
          <nav className="site-footer__links" aria-label="Footer">
            <a href="/#features">Features</a>
            <a href="/#reliability">Offline</a>
            <a href={SUPPORT_HREF}>Support</a>
            <a href="/privacy.html">Privacy</a>
            <a href="/terms.html">Terms</a>
          </nav>
        </div>
        <div className="site-footer__legal">
          <span>© 2026 Andre Havasi. Coming soon to the App Store.</span>
          <span>
            CardOps is an independent tool and is not produced by, affiliated
            with, sponsored by, or endorsed by any trading-card publisher,
            marketplace, or grading company. Pokémon and Pokémon card names are
            trademarks of Nintendo, Creatures Inc., GAME FREAK inc., and The
            Pokémon Company.
          </span>
        </div>
      </div>
    </footer>
  );
}
