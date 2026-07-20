import { motion, useReducedMotion } from "motion/react";
import { EASE_EXPO } from "../lib/anim";
import { NOTIFY_HREF } from "../lib/site";
import { PhoneFrame } from "./PhoneFrame";
import { CountUp } from "./CountUp";
import { IconArrow, IconCheck } from "./icons";
import { url } from "../lib/base";
import "./Hero.css";

const copyParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_EXPO } },
};

export function Hero() {
  const reduce = useReducedMotion();
  const Copy = reduce ? "div" : motion.div;
  const Item = reduce ? "div" : motion.div;
  const copyProps = reduce
    ? {}
    : { variants: copyParent, initial: "hidden", animate: "show" };
  const itemProps = reduce ? {} : { variants: item };

  const chip = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 10, scale: 0.9 },
          animate: { opacity: 1, y: 0, scale: 1 },
          transition: { duration: 0.5, ease: EASE_EXPO, delay },
        };

  return (
    <header className="hero">
      <div className="hero__aurora" aria-hidden="true" />
      <div className="container hero__grid">
        <Copy className="hero__copy" {...copyProps}>
          <Item className="hero__badge" {...itemProps}>
            <span className="hero__badge-dot" aria-hidden="true" />
            Coming soon · <b>App&nbsp;Store</b>
          </Item>

          <motion.h1 {...itemProps}>
            Sell Pokémon cards at shows.{" "}
            <span className="mark">Even when the wifi dies.</span>
          </motion.h1>

          <Item className="hero__lead" {...itemProps}>
            CardOps is the inventory app for card vendors. Scan a card, know what
            it cost and what it&rsquo;s worth, and run your whole table
            offline&nbsp;— then see exactly what the show made.
          </Item>

          <Item className="hero__cta" {...itemProps}>
            <a className="btn btn--primary" href={NOTIFY_HREF}>
              Notify me at launch
            </a>
            <a className="btn btn--ghost" href="#features">
              See it in action
              <IconArrow className="btn__arrow" width={18} height={18} />
            </a>
          </Item>

          <Item className="hero__trust" {...itemProps}>
            <span>
              <IconCheck width={16} height={16} />
              20,000+ Pokémon cards — more TCGs coming
            </span>
            <span>
              <IconCheck width={16} height={16} />
              No account. Your data stays yours.
            </span>
          </Item>
        </Copy>

        <div className="hero__stage">
          <PhoneFrame
            src={url("shots/shot-showmode.png")}
            alt="CardOps Show Mode: a fast selling screen listing Pokémon cards — Charizard, Giratina VSTAR, Umbreon VMAX — each with live market prices and a one-tap Sell button."
            priority
          >
            <motion.span className="chip chip--offline" {...chip(0.8)}>
              <span className="chip__dot" aria-hidden="true" />
              Wi-Fi off · still selling
            </motion.span>
            <motion.span className="chip chip--profit" {...chip(1.15)}>
              Today&nbsp;<b><CountUp to={318} prefix="+$" /></b>
            </motion.span>
          </PhoneFrame>
        </div>
      </div>
    </header>
  );
}
