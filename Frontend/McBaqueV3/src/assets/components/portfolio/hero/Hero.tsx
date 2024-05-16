import { Cloud } from './Cloud'
import { HeroContent } from './HeroContent'
import { NavigationUI } from './NavigationUI'

export const Hero = () => {
  return (
    <div className='bg-cblue w-full h-screen flex justify-center relative'>
        <div className=' w-[80%] h-full pb-[16em] relative'>
            <NavigationUI/>
            <HeroContent/>
            <Cloud classname='w-fit h-fit absolute  top-[8em] left-[16em]' direction='left' delay={2}/>
            <Cloud classname='w-fit h-fit absolute  top-1/2 -right-[18em] ' direction='left'/>
            <Cloud classname='w-fit h-fit absolute  bottom-[4em] -left-[14em] ' direction='left' delay={3.2}/>
            
        </div>
    </div>
  )
}
