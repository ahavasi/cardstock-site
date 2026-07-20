import { Reveal } from "./Reveal";
import { NOTIFY_HREF } from "../lib/site";
import { url } from "../lib/base";
import "./closing.css";

export function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container">
        <Reveal className="final-cta__inner">
          <img
            className="final-cta__mark"
            src={url("cardops-icon.png")}
            alt="CardOps app icon"
            width={66}
            height={66}
          />
          <h2>Be first through the door at launch.</h2>
          <p>
            CardOps is coming to the App Store. Tell me where to reach you and
            I&rsquo;ll send one email the day it goes live. Nothing else.
          </p>
          <a className="btn btn--dark" href={NOTIFY_HREF}>
            Notify me at launch
          </a>
          <span className="final-cta__small">
            iPhone · Pokémon now, more TCGs coming
          </span>
        </Reveal>
      </div>
    </section>
  );
}
