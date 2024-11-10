import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Abdi from "./Pages/Abdi";
import AbdiPrivacyPolicy from "./Pages/AbdiPrivacyPolicy";

import "./App.css";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "90%", margin: "auto" }}>

      <Routes>
        {/* Route for Home */}
        <Route path="/" element={<Home />} />

        {/* Route for Abdi */}
        <Route path="abdi" element={<Abdi />} />

        {/* Route for Abdi Privacy Policy */}
        <Route path="abdi/privacy" element={<AbdiPrivacyPolicy />} />
      </Routes>

    </div>
  );
}

export default App;
