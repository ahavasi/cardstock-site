import { Reveal, RevealItem } from "./Reveal";
import { IconWifiOff, IconScan, IconCoins, IconShield } from "./icons";
import "./closing.css";

const BELIEFS = [
  {
    icon: IconWifiOff,
    title: "Offline-first, always",
    body: "Works with the wifi off. Selling, trading, and buying never stop when the hall fills up.",
  },
  {
    icon: IconScan,
    title: "A scanner you can trust",
    body: "On-device recognition across a 20,000+ Pokémon catalog. Fast, accurate, and private.",
  },
  {
    icon: IconCoins,
    title: "Real numbers, not busywork",
    body: "Per-show profit, fees, and ROI a spreadsheet or binder can't give you.",
  },
  {
    icon: IconShield,
    title: "Your data stays yours",
    body: "No account, ever. CSV in and out, synced through your own private iCloud.",
  },
];

export function BeliefStrip() {
  return (
    <section className="beliefs section">
      <div className="container">
        <Reveal className="beliefs__head">
          <p className="eyebrow">Why dealers switch</p>
          <h2>Built for the people who actually work the table.</h2>
        </Reveal>
        <Reveal className="beliefs__grid" stagger>
          {BELIEFS.map((b) => (
            <RevealItem className="belief" key={b.title}>
              <span className="belief__ic">
                <b.icon width={22} height={22} />
              </span>
              <h3>{b.title}</h3>
              <p>{b.body}</p>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
