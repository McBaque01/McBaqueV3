import { FadeSVG } from "../../framer-motion/FadeSVG";
import { Fade } from "../../framer-motion/Fade";
import CloudBlue from "../../../media/image/CloudBlue.svg";

interface CloudPropsType {
  classname?: string;
  direction?: string;
  delay?: number;
}

export const Cloud = ({ classname, direction, delay }: CloudPropsType) => {
  return (
    <div className={classname}>
      <Fade delay={3}>
        
        <FadeSVG ImagePath={CloudBlue} direction={direction} delay={delay}/>
      </Fade>
    </div>

    // <div className='w-full h-fit absolute  top-[8em] left-[16em]'>
    //     <img src={CloudSVG} alt='CloudSVG' className='min-w-[16em] min-h-fit max-w-[16em] max-h-[16em] ' />
    // </div>
  );
};
