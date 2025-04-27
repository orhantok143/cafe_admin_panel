import React,{ StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "leaflet/dist/leaflet.css";
import "flowbite";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <React.Suspense fallback={<div>Loading...</div>}>
      <App />
    </React.Suspense>
  </StrictMode>
);
