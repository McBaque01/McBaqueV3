

import { IconHandler } from './IconHandler'


export const Skill = () => {

    
  return (
    <div className='bg-cblue h-fit w-full flex flex-col items-center'>


        <div className='w-[80%] h-screen min-h-fit  flex flex-col'>

            <h1 className='w-full  text-cred font-black tracking-widest text-center text-[2em] font-Montserrat py-4'>TECH STACKS</h1>
            <div className='w-full h-fit p-4 grid 2xl:grid-cols-12 grid-cols-4 gap-4'>
                <IconHandler Icon='devicon:react'/>
                <IconHandler Icon='devicon:react'/>
                <IconHandler Icon='devicon:react'/>
                <IconHandler  Icon='devicon:react'/>
                <IconHandler  Icon='devicon:react'/>
                <IconHandler  Icon='devicon:react'/>
               
            </div>

        </div>
    </div>
  )
}
