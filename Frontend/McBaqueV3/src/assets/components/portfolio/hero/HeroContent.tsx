import { Icon } from '@iconify/react';
import { Fade } from '../../framer-motion/Fade';
import { FadeJr } from '../../framer-motion/FadeJr';

export const HeroContent = () => {
  return (
    <div className='w-full h-full flex flex-col justify-end relative'>

   
        {/* <div className=' h-[60%] w-full flex flex-col gap-6 relative'> */}
            <Fade className='h-[60%] w-full flex flex-col gap-6 relative' delay={1.5}>
                <FadeJr>
                <h1 className='w-full text-[5.8em] font-black leading-none font-Montserrat text-clightbrown xl:text-[4.5em]'>MARK JOHN BAQUE</h1>
                </FadeJr>
                <FadeJr>
                <h2 className='w-full text-[3.5em]  font-semibold leading-none font-Montserrat text-cred xl:text-[2.5em]'>WEB DEVELOPER</h2>
                </FadeJr>
                <FadeJr>
                <p className='w-[80%] text-[1.2em] font-Montserrat font-normal tracking-widest text-clightbrown xl:text-[1em]'>
                    Passionate Web Developer creating innovative and user-friendly web applications.
                     Expertise in front-end and back-end development with a keen eye for detail and performance.
                      Committed to delivering seamless digital experiences.
                </p>
                </FadeJr>
            </Fade>
            
            
        
        
       
            <Fade className='h-[20%]  w-full flex flex-row justify-end items-end gap-2 relative' delay={2.4}>
                <FadeJr>
                    <Icon icon="mage:linkedin" width="60" height="60" color='#f44f4f' className='transition-all hover:scale-125'/>
                </FadeJr>
          
                <FadeJr>
                    <Icon icon="jam:github" width="60" height="60" color='#f44f4f' className='transition-all hover:scale-125'/>
                </FadeJr>
            </Fade>
     

    </div>
  )
}
