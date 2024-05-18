import { About } from "../components/portfolio/about/About";
import { Hero } from "../components/portfolio/hero/Hero";
import { Skill } from "../components/portfolio/skills/Skill";

export const Portfolio = () => {
  return (
    <div className="h-fit w-full overflow-hidden">
      <Hero />

      <About />
      <Skill />
    </div>
  );
};
