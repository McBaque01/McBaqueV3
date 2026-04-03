import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


import { Maintenance } from "../pages/Maintenance";
import { Portfolio } from "../pages/Portfolio";

export const RouteHero = () => {

    const isMaintenance = true; 
  return (
    <BrowserRouter>
      <Routes>

       {isMaintenance ? (
          <>
            <Route path="/Maintenance" element={<Maintenance />} />
            <Route path="*" element={<Navigate to="/Maintenance" />} />
          </>
        ) : (
          <>
             <Route path="/" element={<Navigate to="/Portfolio" />} />
            <Route path="/Portfolio" element={<Portfolio />} />

          </>
        )}


        {/* <Route path="/" element={<Navigate to="/Portfolio" />} />
        <Route path="/Portfolio" element={<Portfolio />} /> */}

        {/* <Route path="/" element={<Navigate to="/Maintenance" />} />
        <Route path="/Maintenance" element={<Maintenance />} /> */}

      </Routes>
    </BrowserRouter>
  );
};
