import { About } from "../components/portfolio/about/About";
import { Hero } from "../components/portfolio/hero/Hero";
import { Skill } from "../components/portfolio/skills/Skill";
import { ContactUI } from "../components/portfolio/contact/ContactUI";
export const Portfolio = () => {
  return (
    <div className="h-fit w-full overflow-hidden">
      <Hero />
      <About />
      <Skill />
      <ContactUI />
    </div>
  );
};
