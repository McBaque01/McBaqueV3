import { Icon } from "@iconify/react";
import { Fade } from "../../framer-motion/Fade";
import { FadeJr } from "../../framer-motion/FadeJr";
import { MobileNavigation } from "./MobileNavigation";

export const HeroContent = () => {
  return (
    <div className="relative flex h-full w-full flex-col py-9 xl:justify-end xl:py-5 2xl:justify-end 2xl:py-5">
      <MobileNavigation />
      {/* <div className=' h-[60%] w-full flex flex-col gap-6 relative'> */}
      <Fade className="relative flex h-[60%] w-full flex-col gap-4" delay={1.5}>
        <FadeJr>
          <h1 className="relative z-10 w-full font-Montserrat text-[3em] font-black leading-none text-clightbrown transition-all duration-1000 xl:text-[4.5em] 2xl:text-[5.8em]">
            MARK JOHN BAQUE
          </h1>
        </FadeJr>
        <FadeJr>
          <h2 className="relative z-10 w-full font-Montserrat text-[1.5em] font-semibold  leading-none text-cred transition-all duration-1000 xl:text-[2.5em] 2xl:text-[3em]">
            WEB DEVELOPER
          </h2>
        </FadeJr>
        <FadeJr>
          <p className="relative z-10 w-full font-Montserrat font-normal tracking-widest text-clightbrown transition-all duration-1000 xl:w-[80%] xl:text-[1em] 2xl:w-[80%] 2xl:text-[1.2em]">
            Passionate Web Developer creating innovative and user-friendly web
            applications. Expertise in front-end and back-end development with a
            keen eye for detail and performance. Committed to delivering
            seamless digital experiences.
          </p>
        </FadeJr>
      </Fade>

      <Fade
        className="relative  flex h-full w-full flex-row items-end justify-end gap-0 xl:h-[20%] xl:gap-5 2xl:h-[20%] 2xl:gap-5"
        delay={2.4}
      >
        <FadeJr>
          <Icon
            icon="mage:linkedin"
            width="60"
            height="60"
            color="#f44f4f"
            className="relative z-10 p-2 transition-all duration-500  hover:scale-125 xl:p-0 2xl:p-0"
          />
        </FadeJr>

        <FadeJr>
          <Icon
            icon="jam:github"
            width="60"
            height="60"
            color="#f44f4f"
            className="relative z-10 p-2 transition-all duration-500  hover:scale-125 xl:p-0 2xl:p-0"
            style={{}}
          />
        </FadeJr>
      </Fade>
    </div>
  );
};
