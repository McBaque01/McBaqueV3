import React from 'react'
import { motion, useAnimation, useInView  } from "framer-motion"
import { useEffect, useRef } from "react";

interface FadeMotionType {
    children?: React.ReactNode;
    className?: string;
    delay?: number;
}

export const Fade = ({children, className, delay}: FadeMotionType) => {

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

      const Parent = {
        hidden: { opacity: 0},
        show: {
          opacity: 1,
          transition: {
            delayChildren: delay,
            staggerChildren: 0.3,
            staggerDirection: 1
          }
        }
      }
      
    
     
  return (
    <motion.div ref={ParentRef} variants={Parent} initial="hidden"
        animate={controls}
        className={`${className}`}
        >
        {children}
    </motion.div>
  )
}
