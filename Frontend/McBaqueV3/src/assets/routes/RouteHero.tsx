import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { Portfolio } from "../pages/Portfolio";

import { Maintenance } from "../pages/Maintenance";

export const RouteHero = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/Portfolio" />} />
        <Route path="/Portfolio" element={<Portfolio />} /> */}

        <Route path="/" element={<Navigate to="/Maintenance" />} />
        <Route path="/Maintenance" element={<Maintenance />} />
        
      </Routes>
    </BrowserRouter>
  );
};
