import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

type Props = {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
  /** format the running integer value (e.g. thousands separators) */
  format?: (n: number) => string;
};

// ease-out-expo companion for the raw value ramp
const easeOutExpo = (t: number) =>
  t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

/** Tabular number that ramps up the first time it scrolls into view.
 *  Reduced motion / no-JS shows the final value immediately. */
export function CountUp({
  to,
  prefix = "",
  suffix = "",
  duration = 1.1,
  className,
  format = (n) => n.toLocaleString("en-US"),
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? to : 0);

  useEffect(() => {
    if (reduce) {
      setValue(to);
      return;
    }
    if (!inView) {
      // Backstop: if it never scrolls into view (headless, bg tab), show final.
      const t = window.setTimeout(() => setValue(to), 1600);
      return () => window.clearTimeout(t);
    }
    let raf = 0;
    let startTs: number | null = null;
    const ms = duration * 1000;
    const tick = (ts: number) => {
      if (startTs === null) startTs = ts;
      const p = Math.min(1, (ts - startTs) / ms);
      setValue(Math.round(easeOutExpo(p) * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {format(value)}
      {suffix}
    </span>
  );
}
