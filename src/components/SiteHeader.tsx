import { useEffect, useState } from "react";
import { Wordmark } from "./Wordmark";
import { NOTIFY_HREF } from "../lib/site";
import "./chrome.css";

/** Sticky header, transparent over the navy hero, frosted once scrolled. */
export function SiteHeader() {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header site-header--dark ${stuck ? "is-stuck" : ""}`}>
      <div className="container site-header__row">
        <Wordmark />
        <a className="site-header__cta" href={NOTIFY_HREF}>
          Notify me
        </a>
      </div>
    </header>
  );
}
