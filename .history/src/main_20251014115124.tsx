import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/reset.css";
import "./css/index.css";
import App from "./App";

const rootElement = document.getElementById("root") as HTMLDivElement | null;
if (!rootElement) {
  throw new Error("Elemento #root não encontrado.");
}
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
