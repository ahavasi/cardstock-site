import { Reveal, RevealItem } from "./Reveal";
import "./closing.css";

// Ordered claims — the offline promise leads (it's the reason a dealer downloads).
const BELIEFS = [
  {
    title: "Offline-first, always",
    body: "Works with the wifi off. Selling, trading, and buying never stop when the hall fills up and the bars hit zero.",
  },
  {
    title: "A scanner you can trust",
    body: "On-device recognition across a 20,000+ Pokémon catalog. Fast, accurate, and private.",
  },
  {
    title: "Real numbers, not busywork",
    body: "Per-show profit, fees, and ROI, totaled as you sell — not reconstructed after teardown.",
  },
  {
    title: "Your data stays yours",
    body: "No account, ever. CSV in and out, synced through your own private iCloud.",
  },
];

export function BeliefStrip() {
  return (
    <section className="beliefs section">
      <div className="container">
        <Reveal className="beliefs__head">
          <h2>Built for the people who actually work the table.</h2>
        </Reveal>
        <Reveal className="beliefs__list" stagger>
          {BELIEFS.map((b, i) => (
            <RevealItem
              className={`belief ${i === 0 ? "belief--lead" : ""}`}
              key={b.title}
            >
              <span className="belief__no" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="belief__text">
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
