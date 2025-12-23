import React from "react";
import { Routes, Route } from "react-router-dom";
import Muskie from "./pages/muskie/Index1";
import PrivacyPolicy from "./pages/muskie/privacyPolicy";

// Import Scss
import "./theme.scss";

// Import Icon Css
import "./assets/css/materialdesignicons.min.css";

function App() {
  return (
    <Routes>
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/" element={<Muskie />} />
    </Routes>
  );
}

export default App;