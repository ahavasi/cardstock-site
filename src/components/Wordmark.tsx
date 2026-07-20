import { url } from "../lib/base";
import "./chrome.css";

export function Wordmark({
  size = "md",
  href = "/",
}: {
  size?: "md" | "lg";
  href?: string;
}) {
  return (
    <a className={`wordmark ${size === "lg" ? "wordmark--lg" : ""}`} href={url(href)}>
      <img src={url("cardops-mark.svg")} alt="" width={44} height={44} />
      <span>CardOps</span>
    </a>
  );
}
