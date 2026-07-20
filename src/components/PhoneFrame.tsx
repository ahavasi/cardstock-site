import { type ReactNode, type CSSProperties } from "react";
import "./PhoneFrame.css";

type Props = {
  /** Pre-baked framed screenshot (screenshot already composited in the device). */
  src: string;
  alt: string;
  /** Optional fixed max width (px). Omit to let section CSS drive --frame-w. */
  width?: number;
  priority?: boolean;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

/** A real App Store screenshot, pre-composited inside the iPhone frame
 *  (see design/bake-frames.sh). Rendered as a single transparent image. */
export function PhoneFrame({
  src,
  alt,
  width,
  priority = false,
  children,
  className,
  style,
}: Props) {
  const frameStyle: CSSProperties = {
    ...(width ? { ["--frame-w" as string]: `${width}px` } : {}),
    ...style,
  };
  return (
    <div className={`frame ${className ?? ""}`} style={frameStyle}>
      <img
        className="frame__img"
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
      {children ? <div className="frame__overlay">{children}</div> : null}
    </div>
  );
}
