import "./App.css";
import { RouteHero } from "./assets/routes/RouteHero";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
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
      </Helmet>
      <RouteHero />
    </>
  );
}

export default App;
