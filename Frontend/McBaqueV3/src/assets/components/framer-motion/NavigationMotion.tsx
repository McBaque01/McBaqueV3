
import { motion, useAnimation, useInView  } from "framer-motion"
import { useEffect, useRef } from "react";

import { Navlink } from '../portfolio/hero/Navlink'


const navigationContent = ["About", "Skill", "Contact"]

export const NavigationMotion = () => {
    const ParentRef = useRef(null)
  const isInView = useInView(ParentRef, {once: false});
  const controls = useAnimation();


  useEffect(()=>{
    if(isInView){
      controls.start('show')
    }else{
      controls.start('hidden')
    }
  },[isInView, controls])



  const container = {
    hidden: { opacity: 0},
    show: {
      opacity: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.3,
        staggerDirection: 1
      }
    }
  }
  

  const item = {
    hidden: { opacity: 0,
    },
    show: { opacity: 1, y: 0, 
    },
  }
  return (
    <motion.div 
    ref={ParentRef}
    variants={container}
    initial="hidden"
    animate={controls}
    className='flex justify-between w-[80%] sm:hidden md:hidden lg:hidden'
    >

         {navigationContent && navigationContent.map((content, index)=>
            <motion.div variants={item} key={index}>
                 <Navlink Linkto={content}>{content}</Navlink>
            </motion.div>
        )}
        

    </motion.div>
  )
}
