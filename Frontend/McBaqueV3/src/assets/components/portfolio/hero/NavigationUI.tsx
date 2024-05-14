import React from 'react'
import McLogo from '../../../media/image/MyLogoV2.svg'
import { Navlink } from './Navlink'

export const NavigationUI = () => {
  return (
    <nav className='w-full h-[8em]  flex flex-row justify-center items-center gap-6'>
        <div className='w-full h-full  flex-1 flex  flex-row items-center justify-start font-Montserrat font-black tracking-widest text-clightbrown'>
            <div className='flex justify-between w-[80%] sm:hidden md:hidden lg:hidden'>
            <Navlink Linkto={'About'}>ABOUT</Navlink>
            <Navlink Linkto={'About'}>SKILLS</Navlink>
            <Navlink Linkto={'About'}>CONTACT</Navlink>
            </div>
            
        </div>
        <div className='w-[6em] h-fit flex-none flex'>
            <img src={McLogo}></img>
        </div>
        <div className='w-full h-full flex-1 flex justify-end items-center'>
                <div className='border-2 px-6 py-2 text-clightbrown border-clightbrown font-Montserrat capitalize sm:hidden md:hidden lg:hidden'>
                    <button className=' uppercase text-[16px] font-black tracking-widest w-full h-full'>Download CV</button>
                </div>
        </div>
    </nav>
  )
}
