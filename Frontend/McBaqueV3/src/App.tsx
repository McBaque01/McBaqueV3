import "./App.css";
import { RouteHero } from "./assets/routes/RouteHero";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <>
    <HelmetProvider>
      <Helmet>
          <style>{`
            /* Your critical CSS goes here */
            body { 
              font-family: Arial, sans-serif; 
            }
            h1 {
              font-size: 3em; /* Assuming this is part of your critical styles */
            }
            /* Add other critical styles as needed */
          `}</style>
           <title>Mc Baque - Portfolio</title>
            <meta name="description" content="Explore Mc Baque portfolio showcasing his expertise in React, Node.js, and MongoDB." />
            <meta name="keywords" content="Mc Baque,Mark John Baque,Mc Baque Portfolio,Mark John Baque Portfolio, McBaqueV3" />
            <meta name="author" content="Mark John Baque, Mc Baque" />
      
        </Helmet>
        <RouteHero />
        <SpeedInsights />
      </HelmetProvider>
    </>
  );
}

export default App;
