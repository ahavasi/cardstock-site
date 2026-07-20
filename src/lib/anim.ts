// Shared motion language. Ease-out-expo everywhere (confident, decisive — no
// bounce/elastic, per impeccable motion rules).
export const EASE_EXPO = [0.16, 1, 0.3, 1] as const;
export const EASE_QUART = [0.25, 1, 0.5, 1] as const;

// Standard in-view reveal for content blocks. Subtle; never the source of truth
// for whether content exists (reduced-motion renders the final state).
export const reveal = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_EXPO },
  },
};

// Stagger container for sibling lists (legitimate list rhythm, capped delays).
export const staggerParent = (stagger = 0.07, delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

export const VIEWPORT = { once: true, margin: "-12% 0px -8% 0px" } as const;
