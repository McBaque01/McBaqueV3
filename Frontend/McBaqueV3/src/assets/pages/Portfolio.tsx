import { About } from "../components/portfolio/about/About";
import { Hero } from "../components/portfolio/hero/Hero";

export const Portfolio = () => {
  return (
    <div className="h-fit w-full overflow-hidden bg-slate-900">
      <Hero />

      <About />
    </div>
  );
};
