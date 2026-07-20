import { Reveal, RevealItem } from "./Reveal";
import { IconChevron } from "./icons";
import "./Faq.css";

// Answers the belief-ladder trust questions (offline, data loss, ownership,
// catalog, portability, price) that the rest of the page only implies.
const FAQS = [
  {
    q: "Does it really work with no signal?",
    a: "Yes. Show Mode is offline-first — searching your inventory, ringing up sales, and logging trades and buys all run on the device. Nothing waits on the network, so the packed hall with the bars at zero is exactly when it keeps working. Everything syncs the moment you're back online.",
  },
  {
    q: "What happens to my sales if the app closes, or I lose my phone?",
    a: "Nothing is lost. Every sale, trade, and buy saves to the device as you go and — with iCloud on — syncs through your own private iCloud (Apple's CloudKit). A new phone on the same Apple account picks up right where you left off.",
  },
  {
    q: "Do I need an account? Who can see my data?",
    a: "No account, ever — we never ask for a name, email, or password. Your inventory lives on your device and in your private iCloud, not on our servers. We can't read it, and we don't sell or share anything.",
  },
  {
    q: "Which cards and TCGs does the scanner cover?",
    a: "20,000+ Pokémon cards today, matched on-device by the camera against the full catalog. More TCGs are on the way.",
  },
  {
    q: "Can I get my data in and out?",
    a: "Yes. CSV import and export, both directions — bring your existing spreadsheet in, and take everything back out whenever you want. It's your data; no lock-in.",
  },
  {
    q: "What will it cost, and when does it launch?",
    a: "CardOps launches soon for iPhone. It's free to download and try, with a pro subscription that unlocks the full toolkit for full-time vendors. Exact pricing lands at launch.",
  },
];

export function FaqSection() {
  return (
    <section className="faq section" id="faq">
      <div className="container">
        <Reveal className="faq__head">
          <h2>Questions dealers ask.</h2>
        </Reveal>
        <Reveal className="faq__list" stagger as="ul">
          {FAQS.map((f) => (
            <RevealItem className="faq__item" key={f.q} as="li">
              <details className="faq__d">
                <summary className="faq__q">
                  <span>{f.q}</span>
                  <IconChevron className="faq__chev" width={20} height={20} />
                </summary>
                <div className="faq__a">
                  <p>{f.a}</p>
                </div>
              </details>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
