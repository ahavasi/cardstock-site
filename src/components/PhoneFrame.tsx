import { type ReactNode, type CSSProperties } from "react";
import { url } from "../lib/base";
import "./PhoneFrame.css";

type Props = {
  src: string;
  alt: string;
  /** Optional fixed max width (px). Omit to let section CSS drive --frame-w. */
  width?: number;
  priority?: boolean;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

/** A real App Store screenshot composited inside the real iPhone device frame. */
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
  const loading = priority ? "eager" : "lazy";
  return (
    <div className={`frame ${className ?? ""}`} style={frameStyle}>
      <img
        className="frame__shot"
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
      />
      <img
        className="frame__device"
        src={url("iphone-frame.png")}
        alt=""
        aria-hidden="true"
        loading={loading}
        decoding="async"
      />
      {children ? <div className="frame__overlay">{children}</div> : null}
    </div>
  );
}
