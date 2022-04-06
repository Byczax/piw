import React from "react";
import "./styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";

const container =
  ((
    <React.StrictMode>
      <App />
    </React.StrictMode>
  ),
  document.getElementById("root"));
const root = createRoot(container);
root.render(<App tab="home" />);

reportWebVitals();
