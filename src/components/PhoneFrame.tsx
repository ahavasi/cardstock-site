import { type ReactNode, type CSSProperties } from "react";
import "./PhoneFrame.css";

type Props = {
  src: string;
  alt: string;
  width?: number;
  priority?: boolean;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

/** Device frame wrapping a real App Store screenshot. */
export function PhoneFrame({
  src,
  alt,
  width = 300,
  priority = false,
  children,
  className,
  style,
}: Props) {
  return (
    <div
      className={`frame ${className ?? ""}`}
      style={{ ["--frame-w" as string]: `${width}px`, ...style }}
    >
      <span className="frame__notch" aria-hidden="true" />
      <div className="frame__screen">
        <img
          className="frame__shot"
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
        />
      </div>
      {children ? <div className="frame__overlay">{children}</div> : null}
    </div>
  );
}
