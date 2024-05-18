import McLogo from "../../../media/image/MyLogoV2.svg";
import { Fade } from "../../framer-motion/Fade";

import { FadeJr } from "../../framer-motion/FadeJr";
import { FadeSVG } from "../../framer-motion/FadeSVG";

import { Navlink } from "./Navlink";

export const NavigationUI = () => {
  const navigationContent = ["About", "Skill", "Contact"];

  return (
    <nav className="relative flex h-[6em] w-full flex-row items-center justify-center gap-6 transition-all duration-1000 xl:h-[8em] 2xl:h-[8em]">
      <div className="relative flex  h-full w-full  flex-1 flex-row items-center justify-start font-Montserrat font-black tracking-widest text-clightbrown">
        <Fade
          className="flex w-[80%] justify-between sm:hidden md:hidden lg:hidden "
          delay={0.4}
        >
          {navigationContent &&
            navigationContent.map((content, index) => (
              <div
                className="cursor-pointer transition-all hover:scale-110 hover:text-cred"
                key={index}
              >
                <FadeJr direction="down">
                  <Navlink Linkto={content}>{content}</Navlink>
                </FadeJr>
              </div>
            ))}
        </Fade>
      </div>

      <div className="flex h-fit w-[4em] flex-none transition-all hover:scale-110">
        <Fade className="h-full w-full cursor-pointer">
          <Navlink Linkto="Hero">
            <FadeSVG
              ImagePath={McLogo}
              classname="w-full h-full"
              direction="down"
            />
          </Navlink>
        </Fade>
      </div>
      <div className="flex h-full w-full flex-1 items-center justify-end">
        <Fade className="flex w-full justify-end sm:hidden md:hidden lg:hidden ">
          <FadeJr delay={1.2} direction="down">
            <div className="border-2 border-clightbrown px-6 py-2 font-Montserrat capitalize text-clightbrown transition-all duration-500 hover:scale-110 hover:border-cred">
              <button className=" h-full w-full text-[16px] font-black uppercase tracking-widest">
                Download CV
              </button>
            </div>
          </FadeJr>
        </Fade>
      </div>
    </nav>
  );
};
