
import { Fade } from "../../framer-motion/Fade";
import { FadeJr } from "../../framer-motion/FadeJr";
import { Navlink } from "./Navlink";

export const MobileNavigation = () => {
  const navigationContent = ["About", "Skill", "Contact"];
  return (
    <div className="visible absolute -top-[0.5em] h-fit w-full overflow-hidden overflow-x-scroll py-2 xl:hidden 2xl:hidden">
      <Fade className="flex w-fit gap-1" delay={0.4}>
        {navigationContent &&
          navigationContent.map((content, index) => (
            <div className=" cursor-pointer">
              <FadeJr
                direction="down"
                key={index}
                classname="font-Montserrat uppercase font-semibold text-clightbrown border-2 px-4 py-1 border-cred rounded-full text-[0.8em] active:bg-cred"
              >
                <Navlink Linkto={content}>{content}</Navlink>
              </FadeJr>
            </div>
          ))}
      </Fade>
    </div>
  );
};
