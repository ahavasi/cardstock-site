import { type ComponentType, type SVGProps } from "react";
import { PhoneFrame } from "./PhoneFrame";
import { Reveal, RevealItem } from "./Reveal";
import { IconChart, IconScan, IconCoins, IconBag } from "./icons";
import { url } from "../lib/base";
import "./FeatureShowcase.css";

type Row = {
  shot: string;
  alt: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  kicker: string;
  title: string;
  body: string;
};

// Captions echo the app's own App Store marketing copy.
const ROWS: Row[] = [
  {
    shot: "home",
    alt: "CardOps home dashboard showing today's sales, this show's profit, and total inventory value.",
    icon: IconChart,
    kicker: "The dashboard",
    title: "Your whole operation, at a glance.",
    body: "Open the app and today's sales, this show's profit, and what your inventory is worth are right there. Always current, no spreadsheet to reconcile.",
  },
  {
    shot: "inventory",
    alt: "CardOps inventory list: every Pokémon card in stock with its live market price.",
    icon: IconScan,
    kicker: "Inventory + scanner",
    title: "Every card, scanned and priced.",
    body: "Point the camera at a card and on-device recognition adds it in seconds, matched against a 20,000+ Pokémon catalog and a live value. Your whole stock, in your pocket.",
  },
  {
    shot: "card",
    alt: "CardOps card detail with live market value and a price-history trend chart.",
    icon: IconChart,
    kicker: "Market values",
    title: "Live prices for every printing.",
    body: "Real market values and trend history by set and condition, so you price with the market instead of guessing. Never leave money on the table.",
  },
  {
    shot: "insights",
    alt: "CardOps insights screen breaking down profit, fees, and cash flow.",
    icon: IconCoins,
    kicker: "Profit + insights",
    title: "Know your profit, price paid to cash out.",
    body: "Per-show sales, fees, buys, and cash flow: see which shows actually made money and where your real margin is. The numbers a binder can't give you.",
  },
];

const GALLERY: { shot: string; label: string; sub: string; alt: string }[] = [
  {
    shot: "showdetail",
    label: "Every show, by the numbers",
    sub: "Profit, fees, and cash flow",
    alt: "CardOps show detail with per-show profit and expenses.",
  },
  {
    shot: "showcase",
    label: "Show off your grails",
    sub: "Holographic and rarity-aware",
    alt: "CardOps showcase of graded and holographic Pokémon cards.",
  },
  {
    shot: "rarity",
    label: "Spot the chase cards",
    sub: "Rarity and live value at a glance",
    alt: "CardOps rarity view highlighting chase cards by value.",
  },
  {
    shot: "calendar",
    label: "Never miss a show",
    sub: "Your season at a glance",
    alt: "CardOps calendar of upcoming card shows.",
  },
];

export function FeatureShowcase() {
  return (
    <section className="showcase section" id="features">
      <div className="container">
        <Reveal className="showcase__head">
          <p className="eyebrow">Everything the table needs</p>
          <h2>One app, from scan to sold to settled.</h2>
          <p>
            Built with a vendor's day in mind: capture stock fast, sell it
            without friction, and know exactly what each show made.
          </p>
        </Reveal>

        {ROWS.map((r, i) => (
          <Reveal
            key={r.shot}
            className={`feature-row ${i % 2 === 1 ? "feature-row--flip" : ""}`}
            stagger
          >
            <RevealItem className="feature-row__media">
              <PhoneFrame src={url(`shots/shot-${r.shot}.png`)} alt={r.alt} />
            </RevealItem>
            <RevealItem className="feature-row__copy">
              <span className="feature-row__kicker">
                <span className="ic">
                  <r.icon width={19} height={19} />
                </span>
                {r.kicker}
              </span>
              <h3>{r.title}</h3>
              <p>{r.body}</p>
            </RevealItem>
          </Reveal>
        ))}

        <div className="gallery">
          <Reveal className="gallery__head">
            <span className="feature-row__kicker">
              <span className="ic">
                <IconBag width={19} height={19} />
              </span>
              And the rest of the season
            </span>
            <h3>More of what CardOps does</h3>
          </Reveal>
          <Reveal className="gallery__grid" stagger>
            {GALLERY.map((g) => (
              <RevealItem className="gallery__item" key={g.shot}>
                <PhoneFrame src={url(`shots/shot-${g.shot}.png`)} alt={g.alt} />
                <span className="gallery__label">
                  {g.label}
                  <span>{g.sub}</span>
                </span>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
