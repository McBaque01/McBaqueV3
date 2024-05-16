import { Cloud } from "./Cloud";
import { HeroContent } from "./HeroContent";
import { NavigationUI } from "./NavigationUI";

export const Hero = () => {
  return (
    <div
      id="Hero"
      className="relative flex h-screen w-full justify-center bg-cblue"
    >
      <div className=" relative h-full w-[80%] pb-[16em]">
        <NavigationUI />
        <HeroContent />
        <Cloud
          classname="w-fit h-fit absolute  top-[9em] 2xl:left-[16em] xl:left-[16em]  left-[90%] transition-all duration-1000"
          direction="left"
          delay={2}
        />
        <Cloud
          classname="w-fit h-fit absolute  top-[30em] -right-[0em] xl:-right-[14em] 2xl:-right-[18em] transition-all duration-1000"
          direction="left"
        />
        <Cloud
          classname="w-fit h-fit absolute  bottom-[4em] -left-[10em] 2xl:-left-[14em] xl:-left-[14em] transition-all duration-1000"
          direction="left"
          delay={3.2}
        />
      </div>
    </div>
  );
};
