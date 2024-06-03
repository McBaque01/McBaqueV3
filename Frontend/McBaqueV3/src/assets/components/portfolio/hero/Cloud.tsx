import { FadeSVG } from "../../framer-motion/FadeSVG";
import { Fade } from "../../framer-motion/Fade";
import CloudSVG from "../../../media/image/Cloud.svg";

interface CloudPropsType {
  classname?: string;
  direction?: string;
  delay?: number;
}

export const Cloud = ({ classname, direction, delay }: CloudPropsType) => {
  return (
    <div className={classname}>
      <Fade delay={3}>
        <FadeSVG ImagePath={CloudSVG} direction={direction} delay={delay} classname="w-[10em] h-[10em]"/>
      </Fade>
    </div>

    // <div className='w-full h-fit absolute  top-[8em] left-[16em]'>
    //     <img src={CloudSVG} alt='CloudSVG' className='min-w-[16em] min-h-fit max-w-[16em] max-h-[16em] ' />
    // </div>
  );
};
