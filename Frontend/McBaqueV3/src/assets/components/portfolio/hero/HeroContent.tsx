import { Icon } from "@iconify/react";
import { Fade } from "../../framer-motion/Fade";
import { FadeJr } from "../../framer-motion/FadeJr";
import { MobileNavigation } from "./MobileNavigation";
import handleRedirectToURL from "../../../utils/handleRedirectToURL";
import { DownloadCV } from "../../../utils/download";

export const HeroContent = () => {
  return (
    <div className="relative flex h-full w-full flex-col justify-end gap-2 xl:justify-end xl:pt-5 2xl:justify-end 2xl:pt-5 ">
      <MobileNavigation />
      {/* <div className=' h-[60%] w-full flex flex-col gap-6 relative'> */}
      <Fade
        className="relative flex h-full w-full flex-col justify-center gap-4 py-[3em] xl:py-[6em] 2xl:py-[6em]"
        delay={1.5}
      >
        <FadeJr classname=" ">
          <h1 className="relative z-10 w-full font-Montserrat text-[3em] font-bold leading-none text-clightbrown transition-all duration-1000 xl:text-[4.5em] 2xl:text-[5.8em]">
            MARK JOHN BAQUE
          </h1>
        </FadeJr>
        <FadeJr classname="">
          <h2 className="relative z-10 w-full font-Montserrat text-[1.5em] font-semibold  leading-none text-cred transition-all duration-1000 xl:text-[2.5em] 2xl:text-[3em]">
            WEB DEVELOPER
          </h2>
        </FadeJr>

        <FadeJr classname="sm:hidden md:hidden lg:hidden">
          <p className="relative z-10 w-full font-Montserrat text-[12px] font-normal tracking-widest text-clightbrown transition-all duration-1000 xl:w-[80%] xl:text-[1em] 2xl:w-[80%] 2xl:text-[1.2em]">
            Passionate Web Developer creating innovative and user-friendly web
            applications. 
            Expertise in front-end and back-end development with a
            keen eye for detail and performance. Committed to delivering
            seamless digital experiences.
          </p>
        </FadeJr>
        <FadeJr classname="2xl:hidden xl:hidden">
          <p className="relative z-10 w-full font-Montserrat text-[12px] font-normal tracking-widest text-clightbrown transition-all duration-1000 xl:w-[80%] xl:text-[1em] 2xl:w-[80%] 2xl:text-[1.2em]">
            Passionate Web Developer creating innovative and user-friendly web
            applications. 
          </p>
         
        </FadeJr>

     
          <FadeJr delay={1.2} direction="down" classname="xl:hidden 2xl:hidden relative z-10">
            <div className="font-Montserrat capitalize text-cred transition-all duration-500 w-fit flex flex-row justify-center items-center gap-1 cursor-pointer">
              <button className=" h-full w-fit text-[14px] font-Montserrat font-normal uppercase tracking-widest" onClick={DownloadCV}>
                Download CV
              </button>
              <Icon icon="ci:external-link" className="text-[1em]" />
            </div>
          </FadeJr>
      
      </Fade>

      <Fade
        className="relative flex w-full flex-row items-end justify-end gap-1  pt-[5em] xl:gap-3  2xl:gap-3 "
        delay={2.4}
      >
        <FadeJr>
          <Icon
            icon="mage:linkedin"
            className="relative z-10 text-[3em] text-cred transition-all duration-500 hover:scale-125 xl:p-0 xl:text-[4em] 2xl:p-0  2xl:text-[4em]"
            onClick={() => handleRedirectToURL({ url: 'https://www.linkedin.com/in/mcbaque/' })}
          />
        </FadeJr>

        <FadeJr>
          <Icon
            icon="jam:github"
            className="relative z-10  text-[3em] text-cred  transition-all duration-500 hover:scale-125 xl:p-0 xl:text-[4em] 2xl:p-0  2xl:text-[4em] "
            onClick={() => handleRedirectToURL({ url: 'https://github.com/McBaque01' })}
          />
        </FadeJr>
      </Fade>
    </div>
  );
};
