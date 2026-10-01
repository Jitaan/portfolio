import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Resume from "./Resume.jsx";

// const navigationEntry = performance.getEntriesByType("navigation")[0];
// const isReload = navigationEntry?.type === "reload";

// if (isReload && window.location.pathname !== "/") {
//   window.history.replaceState(null, "", "/");
// }

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {window.location.pathname === "/resume" ? <Resume /> : <App />}
  </StrictMode>,
);
