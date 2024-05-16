
import { motion} from "framer-motion"

interface FadeImgType{
    ImagePath: string;
    altName: string
    direction?: string;
    classname?: string;
    delay?:number;
}
export const FadeImg = ({ImagePath, altName, direction, classname, delay}: FadeImgType) => {

    const Fademotion = {
        hidden:{
            opacity:0,
            x: direction === "right" ? -20 : direction === "left" ? 20 : 0,
            y: direction === "up" ? 20 : direction === "down" ? -100 : 0,
        },
        show: {
            opacity: 1,
            x:0,
            y:0,
            
             transition: {
                
                type:'tween',
                ...(delay && { delay: delay }),
                ease: [0.25, 0.25, 0.25, 0.75], 
                  
             }
        },
      }

  return (
        <motion.img
        src={ImagePath}
        alt={altName}
        variants={Fademotion}
        className={classname}
        />
          

      
  )
}


