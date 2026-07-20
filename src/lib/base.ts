// Deploy base (e.g. "/cardstock-site/" on GitHub Pages, "/" locally).
const BASE = import.meta.env.BASE_URL;

/** Prefix a root-relative asset path or internal link with the deploy base.
 *  url("cardops-mark.svg") -> "/cardstock-site/cardops-mark.svg"
 *  url("/privacy.html")    -> "/cardstock-site/privacy.html"
 *  url("#features")        -> "/cardstock-site/#features" */
export const url = (p: string) => `${BASE}${p.replace(/^\/+/, "")}`;
