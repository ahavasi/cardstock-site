import { type SVGProps } from "react";

// One coherent line-icon set: 24-grid, 1.8 stroke, round caps, currentColor.
const base = (p: SVGProps<SVGSVGElement>) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...p,
});

export const IconScan = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2" />
    <path d="M8 9.5A1.5 1.5 0 0 1 9.5 8h5A1.5 1.5 0 0 1 16 9.5v5A1.5 1.5 0 0 1 14.5 16h-5A1.5 1.5 0 0 1 8 14.5z" />
  </svg>
);

export const IconWifiOff = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M2 4l18 18" />
    <path d="M8.5 15.5a5 5 0 0 1 6 0" />
    <path d="M5 12a10 10 0 0 1 3.3-2.2M19 12a10 10 0 0 0-6.5-2.9" />
    <path d="M1.8 8.6A15 15 0 0 1 6 6M22.2 8.6a15 15 0 0 0-5-2.8" />
    <path d="M11.9 19h.1" />
  </svg>
);

export const IconChart = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M4 20V4M4 20h16" />
    <path d="M8 16l3.5-4 3 2.5L20 8" />
    <path d="M20 12V8h-4" />
  </svg>
);

export const IconGrid = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
    <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
    <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
    <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
  </svg>
);

export const IconBag = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M6 8h12l-1 11a2 2 0 0 1-2 1.8H9a2 2 0 0 1-2-1.8z" />
    <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
  </svg>
);

export const IconChecklist = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M9 5h9M9 12h9M9 19h9" />
    <path d="M4 5l1 1 1.5-2M4 12l1 1 1.5-2M4 19l1 1 1.5-2" />
  </svg>
);

export const IconCoins = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <ellipse cx="8.5" cy="7" rx="5.5" ry="3" />
    <path d="M3 7v4c0 1.7 2.5 3 5.5 3s5.5-1.3 5.5-3V7" />
    <path d="M10 14.3v2.7c0 1.7 2.5 3 5.5 3s5.5-1.3 5.5-3v-4c0-1.5-1.9-2.7-4.5-3" />
  </svg>
);

export const IconCsv = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M13 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z" />
    <path d="M13 3v6h6" />
    <path d="M8.5 13v4M8.5 13H10M8.5 15h1.2M13 13v4l1.4-2.2L15.8 17v-4" />
  </svg>
);

export const IconShield = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M12 3l7 2.5v5.5c0 4.5-3 7.8-7 9.5-4-1.7-7-5-7-9.5V5.5z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const IconCheck = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M4 12.5l4.5 4.5L20 6" />
  </svg>
);

export const IconArrow = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M5 12h13M12 5l7 7-7 7" />
  </svg>
);

export const IconBolt = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M13 3L5 13h6l-1 8 8-10h-6z" />
  </svg>
);

// Apple logomark — filled, currentColor. Not part of the line-icon set.
export const IconApple = (p: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...p}
  >
    <path d="M17.05 12.04c-.03-2.6 2.12-3.85 2.22-3.91-1.21-1.77-3.1-2.01-3.77-2.04-1.6-.16-3.13.94-3.94.94-.82 0-2.06-.92-3.4-.9-1.75.03-3.36 1.02-4.26 2.58-1.82 3.16-.47 7.83 1.3 10.4.86 1.25 1.89 2.66 3.23 2.61 1.3-.05 1.79-.84 3.36-.84 1.56 0 2.01.84 3.38.81 1.4-.02 2.28-1.28 3.13-2.54.98-1.46 1.39-2.87 1.41-2.94-.03-.01-2.71-1.04-2.74-4.12z" />
    <path d="M14.69 4.54c.72-.87 1.2-2.08 1.07-3.28-1.03.04-2.28.69-3.02 1.56-.66.77-1.24 2-1.08 3.18 1.15.09 2.32-.59 3.03-1.46z" />
  </svg>
);
