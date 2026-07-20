import { IconApple } from "./icons";
import "./AppStoreBadge.css";

type Props = {
  href: string;
  /** "light" = white badge (for dark backgrounds), "dark" = black badge. */
  variant?: "light" | "dark";
  /** Top line above "App Store". App is pre-launch, so this is not "Download on the". */
  eyebrow?: string;
  className?: string;
};

/** Apple App Store badge, pre-launch wording. The official "Download on the App
 *  Store" badge is reserved for live apps, so we render a "Coming Soon" variant
 *  that follows the same visual grammar (Apple logo + two-line lockup). */
export function AppStoreBadge({
  href,
  variant = "dark",
  eyebrow = "Coming Soon on the",
  className,
}: Props) {
  return (
    <a
      className={`appstore-badge appstore-badge--${variant} ${className ?? ""}`}
      href={href}
      aria-label={`${eyebrow} App Store`}
    >
      <IconApple className="appstore-badge__logo" />
      <span className="appstore-badge__text">
        <span className="appstore-badge__eyebrow">{eyebrow}</span>
        <span className="appstore-badge__store">App Store</span>
      </span>
    </a>
  );
}
