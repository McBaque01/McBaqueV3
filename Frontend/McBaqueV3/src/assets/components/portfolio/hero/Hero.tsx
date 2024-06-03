import { Cloud } from "./Cloud";
import { HeroContent } from "./HeroContent";
import { NavigationUI } from "./NavigationUI";


export const Hero = () => {
  return (
    <div
      id="Hero"
      className="relative flex h-fit w-full justify-center bg-cblue"
    >

      
      <div className="relative flex min-h-screen w-[80%] flex-col pb-[8em] xl:min-h-screen 2xl:min-h-screen">
        <NavigationUI />
        <HeroContent />
        <Cloud
          classname="w-fit h-fit absolute top-[7em] 2xl:left-[16em] xl:left-[16em]  left-[90%] transition-all duration-1000"
          direction="left"
          delay={2}
        />
        <Cloud
          classname="w-fit h-fit absolute  top-[36em] -right-[6em] xl:-right-[14em] 2xl:-right-[18em] transition-all duration-1000"
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
