import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./assets/styles/index.scss";
import ComponentProvider from "./context/datacontext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ComponentProvider>
      <App />
    </ComponentProvider>
  </StrictMode>
);
