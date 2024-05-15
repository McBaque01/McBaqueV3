import McLogo from '../../../media/image/MyLogoV2.svg'
import { Fade } from '../../framer-motion/Fade'
import { FadeImg } from '../../framer-motion/FadeImg'
import { FadeJr } from '../../framer-motion/FadeJr'

import { Navlink } from './Navlink'

export const NavigationUI = () => {

  const navigationContent = ["About", "Skill", "Contact"]

  return (
    <nav className='w-full h-[8em]  flex flex-row justify-center items-center gap-6'>
        <div className='w-full h-full  flex-1 flex  flex-row items-center justify-start font-Montserrat font-black tracking-widest text-clightbrown'>
       
          <Fade className="flex justify-between w-[80%] sm:hidden md:hidden lg:hidden" delay={0.2}>

            {navigationContent && navigationContent.map((content, index)=>
              <FadeJr direction="down" key={index}>
                <Navlink Linkto={content}>{content}</Navlink>
              </FadeJr>
             
            )}
          </Fade>
  
            
        </div>
        <div className='w-[6em] h-fit flex-none flex '>
          <Fade className='w-full h-full'>
            <FadeImg ImagePath={McLogo} altName='MyLogo' classname='w-full h-full' direction='down' />
          </Fade>

        </div>
        <div className='w-full h-full flex-1 flex justify-end items-center'>
          
          <Fade
          className="flex justify-end w-full sm:hidden md:hidden lg:hidden "
          >
            <FadeJr delay={1} direction='down'>
              <div className='border-2 px-6 py-2 text-clightbrown border-clightbrown font-Montserrat capitalize'>
                      <button className=' uppercase text-[16px] font-black tracking-widest w-full h-full'>Download CV</button>
                  </div>
            </FadeJr>
          </Fade>
            
        </div>
    </nav>
  )
}
