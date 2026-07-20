import { type ReactNode } from "react";
import { Wordmark } from "../components/Wordmark";
import { SiteFooter } from "../components/SiteFooter";
import { url } from "../lib/base";
import "./Legal.css";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="legal">
      <div className="legal__top">
        <div className="container legal__top-row">
          <Wordmark href="/" />
          <a className="legal__back" href={url("/")}>
            ← Back to CardOps
          </a>
        </div>
      </div>
      <div className="container legal__hero">
        <h1>{title}</h1>
        <p className="legal__updated">{updated}</p>
      </div>
      <article className="container legal__body">{children}</article>
      <SiteFooter />
    </div>
  );
}
