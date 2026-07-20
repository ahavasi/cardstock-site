import { motion, useReducedMotion } from "motion/react";
import { EASE_EXPO, VIEWPORT } from "../lib/anim";
import { Reveal } from "./Reveal";
import { IconWifiOff, IconBolt, IconShield } from "./icons";
import "./ReliabilityBeat.css";

const BARS = [0.9, 0.66, 0.42, 0.2]; // resting (collapsed) heights — signal dying

function SignalDrop() {
  const reduce = useReducedMotion();
  return (
    <div className="sigcard">
      <div className="sigcard__top">
        <span>Convention hall · 6pm</span>
        <span>Signal</span>
      </div>
      <div className="sigcard__bars" aria-hidden="true">
        {BARS.map((h, i) => (
          <motion.span
            key={i}
            className="sigcard__bar"
            style={{ height: "100%" }}
            initial={reduce ? { scaleY: h } : { scaleY: 1 }}
            whileInView={{ scaleY: h }}
            viewport={VIEWPORT}
            transition={{
              duration: 0.55,
              ease: EASE_EXPO,
              delay: reduce ? 0 : 0.15 + i * 0.12,
            }}
          />
        ))}
      </div>
      <div className="sigcard__status">
        <span className="sigcard__tag">OFFLINE · STILL SELLING</span>
        <span className="sigcard__note">
          Sales keep saving <b>locally</b>. Sync when you&rsquo;re back.
        </span>
      </div>
    </div>
  );
}

export function ReliabilityBeat() {
  return (
    <section className="reliability section" id="reliability">
      <div className="container reliability__grid">
        <Reveal>
          <p className="eyebrow">Built for dead zones</p>
          <h2>
            Convention-hall wifi drops. <em>Your table keeps running.</em>
          </h2>
          <p className="reliability__lead">
            Show Mode is offline-first. Search your whole inventory, ring up
            sales, log trades and buys. Instantly, on the device, with the room
            packed and the bars at zero. Everything syncs the moment
            you&rsquo;re back online.
          </p>
          <ul className="proof">
            <li>
              <span className="proof__ic">
                <IconBolt width={20} height={20} />
              </span>
              Instant search across 20,000+ Pokémon cards. No spinner, no signal
            </li>
            <li>
              <span className="proof__ic">
                <IconWifiOff width={20} height={20} />
              </span>
              One-tap sales, trades, and buys that never wait on the network
            </li>
            <li>
              <span className="proof__ic">
                <IconShield width={20} height={20} />
              </span>
              Nothing lost if you close the app: it&rsquo;s saved on your device
            </li>
          </ul>
        </Reveal>

        <Reveal>
          <SignalDrop />
        </Reveal>
      </div>
    </section>
  );
}
