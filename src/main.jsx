import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
// import "./assets";
import ComponentProvider from "./context/datacontext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ComponentProvider>
      <App />
    </ComponentProvider>
  </StrictMode>
);
