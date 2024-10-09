import React from "react";
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
      <Analytics />
    </React.StrictMode>
  </BrowserRouter>,
);
