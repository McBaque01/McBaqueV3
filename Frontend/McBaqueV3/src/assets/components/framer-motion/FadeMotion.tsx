import React from 'react'
import { motion, useAnimation, useInView  } from "framer-motion"
import { useEffect, useRef } from "react";

interface FadeMotionType {
    children?: React.ReactNode;
    direction?: string;
    delay?: number;
  
   
}

export const FadeMotion = ({children, direction, delay}: FadeMotionType) => {

    const ref = useRef(null)
    const isInView = useInView(ref, {once: false});
    const controls = useAnimation();
  
    useEffect(()=>{
      if(isInView){
        controls.start('visible')
      }else{
        controls.start('hidden')
        
      }
    },[isInView, controls])

      const Fademotion = {
        hidden:{
            opacity:0,
            x: direction === "right" ? -100 : direction === "left" ? 100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
           
        },
        visible: {
            opacity: 1,
            x:0,
            y:0, 

        },
      }

  return (
  
        <motion.div
            ref={ref}
            variants={Fademotion}
            initial="hidden"
            animate={controls}
            transition={{
                type:'tween',
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            }}
        
        
        >
            {children}
        </motion.div>
   
  )
}
