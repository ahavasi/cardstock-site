import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { reveal, staggerParent } from "../lib/anim";

type Tag = "div" | "section" | "ul" | "li" | "header";

type Props = {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  staggerDelay?: number;
  as?: Tag;
};

/** In-view reveal that can NEVER strand content hidden. Content shows on
 *  intersection, on a backstop timer, or immediately under reduced motion —
 *  so headless renderers, background tabs, and crawlers still see the content. */
export function Reveal({
  children,
  className,
  stagger = false,
  staggerDelay = 0,
  as = "div",
}: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (reduce) return; // plain, always-visible render handles this case
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    let done = false;
    const show = () => {
      if (done) return;
      done = true;
      setShown(true);
    };
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          show();
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    // Backstop: if the observer never delivers a frame, reveal anyway.
    const t = window.setTimeout(show, 1400);
    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, [reduce]);

  // Reduced motion: render a plain, fully-visible element (no gating at all).
  if (reduce) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  const MotionTag = motion[as];
  return (
    <MotionTag
      ref={ref as never}
      className={className}
      initial="hidden"
      animate={shown ? "show" : "hidden"}
      variants={stagger ? staggerParent(0.07, staggerDelay) : reveal}
    >
      {children}
    </MotionTag>
  );
}

/** A single staggered child; pair inside <Reveal stagger>. */
export function RevealItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];
  if (reduce) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }
  return (
    <MotionTag className={className} variants={reveal}>
      {children}
    </MotionTag>
  );
}
