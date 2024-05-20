import { Fade } from "../../framer-motion/Fade";
import { FadeJr } from "../../framer-motion/FadeJr";
import { Navlink } from "./Navlink";

export const MobileNavigation = () => {
  const navigationContent = ["About", "Skill", "Contact"];
  return (
    <div className="visible relative z-10 min-h-fit w-full xl:hidden 2xl:hidden ">
      <div className="overflow-x-scroll p-2">
        <Fade className="flex w-fit gap-1" delay={0.4}>
          {navigationContent &&
            navigationContent.map((content, index) => (
              <div className=" cursor-pointer" key={index}>
                <FadeJr
                  direction="down"
                  classname="font-Montserrat uppercase font-semibold text-clightbrown border-2 px-4 py-1 border-cred rounded-full text-[0.8em] active:bg-cred h-fit"
                >
                  <Navlink Linkto={content}>{content}</Navlink>
                </FadeJr>
              </div>
            ))}
        </Fade>
      </div>
    </div>
  );
};
