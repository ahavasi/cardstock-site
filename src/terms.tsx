import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Terms } from "./pages/Terms";
import "./styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Terms />
  </StrictMode>,
);
