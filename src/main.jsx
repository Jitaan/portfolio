import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Resume from "./Resume.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {window.location.pathname === "/resume" ? <Resume /> : <App />}
  </StrictMode>,
);
