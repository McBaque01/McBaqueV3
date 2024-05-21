import { useEffect, useState } from 'react'
import { IconHandler } from './IconHandler'
import { InlineIcon } from '@iconify/react/dist/iconify.js';
import ValoAPI from "../../../media/image/ValoAPI.png"
import handleRedirectToURL from '../../../utils/handleRedirectToURL';
import LightNSeek from '../../../media/image/LightNSeek.png'
import PortfolioV3 from '../../../media/image/PortfolioV3.png'


export interface skilltype {
  name: string;
  iconpath: string;
}

export const Skill = () => {
  const [currSkill, setCurrSkill] = useState<skilltype | null>(null)

  const handleClick = ({name, iconpath}: skilltype) => {

    setCurrSkill({
      name: name,
      iconpath: iconpath,
    })

  }

  useEffect(()=>{
    setCurrSkill({
      name:"REACT",
      iconpath:"devicon:react",
    })

  },[])
  console.log(currSkill?.iconpath)

    
  return (
    <div id="Skill" className='bg-cblue h-fit w-full flex flex-col items-center relative'>
      


            <div className='absolute top-[7em] 2xl:top-[6em] flex justify-center w-full '>
              <div>
                <InlineIcon icon={currSkill?.iconpath as string | ""} className='text-[30em] 2xl:text-[50em] xl:text-[50em] opacity-10'/>
              </div>
              <h1 className='absolute -left-[0em] -top-[1em] text-[5em] 2xl:-left-0 2xl:top-[1em] xl:-left-0 xl:top-[0.5em] font-black tracking-widest 2xl:text-[10em] xl:text-[10em] text-gray-600 brightness-125 font-Montserrat transition-all duration-500 text-center w-full'>
                {currSkill?.name}
              </h1>
            </div>
           
      
      


        <div className='w-[80%] min-h-screen flex flex-col gap-2 relative'>
            <div className='flex flex-col relative '>
              <h1 className='w-full   text-cred font-black tracking-widest text-center text-[2em] xl:text-[4em] 2xl:text-[4em] font-Montserrat pt-4'>TECH STACKS</h1>
              <h1 className='w-full   text-clightbrown font-black tracking-widest text-center text-[1.4em] xl:text-[2em] 2xl:text-[2em] font-Montserrat uppercase'>What I'm capable of</h1>
              <div className='flex justify-center'>
                <div className='w-fit h-fit p-4 grid 2xl:grid-cols-8 xl:grid-cols-7 lg:grid-cols-6 md:grid-cols-5 grid-cols-4 gap-6 min-w-[20em] '>
                    
                    <IconHandler iconpath='devicon:html5-wordmark' name='HTML5' handleClick={handleClick}/>
                    <IconHandler iconpath='devicon:css3' name='CSS3' handleClick={handleClick}/>
                    <IconHandler iconpath='skill-icons:javascript' name='JAVASCRIPT' handleClick={handleClick}/>
                    <IconHandler iconpath='devicon:php' name='PHP' handleClick={handleClick}/>
                    <IconHandler iconpath='devicon:java' name='JAVA' handleClick={handleClick}/>
                    <IconHandler iconpath='logos:dotnet' name='.NET' handleClick={handleClick}/>
                    <IconHandler iconpath='devicon:mysql-wordmark' name='MYSQL' handleClick={handleClick}/>
                    <IconHandler iconpath='skill-icons:mongodb' name='MONGODB' handleClick={handleClick}/>
                    <IconHandler iconpath='skill-icons:expressjs-dark' name='EXPRESSJS' handleClick={handleClick}/>
                    <IconHandler iconpath='devicon:react' name='REACT' handleClick={handleClick}/>
                    <IconHandler iconpath='vscode-icons:file-type-node' name='NODEJS' handleClick={handleClick}/>
                    <IconHandler iconpath='devicon:typescript' name='TYPESCRIPT' handleClick={handleClick}/>
                    <IconHandler iconpath='devicon:vitejs' name='VITE' handleClick={handleClick}/>  
                    <IconHandler iconpath='devicon:tailwindcss' name='TAILWINDCSS' handleClick={handleClick}/>
                    <IconHandler iconpath='devicon:framermotion' name='FRAMER' handleClick={handleClick}/>
                    <IconHandler iconpath='skill-icons:vercel-dark' name='VERCEL' handleClick={handleClick}/>
                    <IconHandler iconpath='logos:postman-icon' name='POSTMAN' handleClick={handleClick}/>
                    <IconHandler iconpath='jam:github' name='GITHUB' handleClick={handleClick}/>
                    <IconHandler iconpath='devicon:git' name='GIT' handleClick={handleClick}/>
                    <IconHandler iconpath='devicon:npm-wordmark' name='NPM' handleClick={handleClick}/>
                      
                </div>
              </div>
            </div>
            <div className='w-full flex flex-col py-4'>
              <h1 className='text-[2em] xl:text-[3.6em] 2xl:text-[3.6em] font-Montserrat text-cred font-black tracking-widest py-5'>PROJECTS</h1>
              <div className='w-full flex flex-col items-center gap-2'>
                 
                  <div className='xl:w-[80%] 2xl:w-[80%] w-full aspect-[3/0.8] bg-gray-800 rounded-[10px] p-2 flex flex-col xl:flex-row  2xl:flex-row gap-2'>


                        <img src={ValoAPI} alt="ValoAPI img" className='xl:w-[45%] 2xl:w-[45%] h-full object-fill rounded-[7px]'/>

                        <div className='w-full h-full  gap-2 flex flex-col relative'>

                          <div className='absolute font-semibold text-slate-500 top-0 right-0 font-Montserrat text-[14px]
                          before:bg-green-400 before:rounded-full before:content-[""] before:p-1 before:absolute before:top-[6px]
                          
                          '>
                            
                            <h1 className='px-3'>Ongoing</h1>
                          </div>


                          <div className=' h-fit w-full font-Montserrat cursor-default xl:text-[1em] 2xl:text-[1em] text-[14px]'>
                            <h1 className='font-semibold text-cred leading-none'>Name</h1>
                            <h2 className=' font-medium text-slate-500 leading-2'>VALO-API</h2>
                          </div>

                          <div className=' h-fit w-full font-Montserrat cursor-default xl:text-[1em] 2xl:text-[1em] text-[14px]'>
                            <h1 className='font-semibold text-cred leading-none '>Domain</h1>
                            <h2 className=' font-medium text-slate-500 leading-2 underline cursor-pointer' onClick={() => handleRedirectToURL({ url: 'https://valoapi.vercel.app/' })}>https://valoapi.vercel.app/</h2>
                          </div>

                          <div className=' h-fit w-full font-Montserrat cursor-default xl:text-[1em] 2xl:text-[1em] text-[14px]'>
                            <h1 className='font-semibold text-cred leading-none'>Description</h1>
                            <h2 className=' font-medium text-slate-500 leading-2'>My web app is designed to provide players with comprehensive details and easy access to information about weapons, agents, and in-game collectibles. Explore these features to enhance your Valorant experience</h2>
                          </div>

                          <div className=' h-fit w-full font-Montserrat cursor-default font-medium xl:text-[1em] 2xl:text-[1em] text-[14px] flex flex-row flex-wrap gap-1'>
                            
                            <div className='bg-gray-700 w-fit py-2 px-4 rounded-full flex justify-between items-center leading-none hover:scale-110 duration-300'>
                              <h1 className='text-cred leading-none text-[14px] xl:text-[1em] 2xl:text-[1em]'>React</h1>
                            </div>

                            <div className='bg-gray-700 w-fit py-2 px-4 rounded-full flex justify-between items-center leading-none hover:scale-110 duration-300'>
                              <h1 className='text-cred leading-none text-[14px] xl:text-[1em] 2xl:text-[1em]'>TailwindCSS</h1>
                            </div>

                            <div className='bg-gray-700 w-fit py-2 px-4 rounded-full flex justify-between items-center leading-none hover:scale-110 duration-300'>
                              <h1 className='text-cred leading-none text-[14px] xl:text-[1em] 2xl:text-[1em]'>Vite</h1>
                            </div>

                            <div className='bg-gray-700 w-fit py-2 px-4 rounded-full flex justify-between items-center leading-none hover:scale-110 duration-300'>
                              <h1 className='text-cred leading-none text-[14px] xl:text-[1em] 2xl:text-[1em]'>Typescript</h1>
                            </div>

                            

                          </div>

                        </div>
                  </div>






                  <div className='xl:w-[80%] 2xl:w-[80%] w-full aspect-[3/0.8] bg-gray-800 rounded-[10px] p-2 flex flex-col xl:flex-row  2xl:flex-row gap-2'>


                        <img src={LightNSeek} alt="LightNSeek" className='xl:w-[45%] 2xl:w-[45%] h-full object-fill rounded-[7px]'/>

                        <div className='w-full h-full  gap-2 flex flex-col relative'>

                          <div className='absolute font-semibold text-slate-500 top-0 right-0 font-Montserrat text-[14px]
                          before:bg-[#0079D0] before:rounded-full before:content-[""] before:p-1 before:absolute before:top-[6px]
                          
                          '>
                            
                            <h1 className='px-3'>Done</h1>
                          </div>


                          <div className=' h-fit w-full font-Montserrat cursor-default xl:text-[1em] 2xl:text-[1em] text-[14px]'>
                            <h1 className='font-semibold text-cred leading-none'>Name</h1>
                            <h2 className=' font-medium text-slate-500 leading-2'>LIGHT N SEEK</h2>
                          </div>

                          <div className=' h-fit w-full font-Montserrat cursor-default xl:text-[1em] 2xl:text-[1em] text-[14px]'>
                            <h1 className='font-semibold text-cred leading-none '>Domain</h1>
                            <h2 className=' font-medium text-slate-500 leading-2 underline cursor-pointer' onClick={() => handleRedirectToURL({ url: 'https://light-n-seek.vercel.app/' })}>https://light-n-seek.vercel.app/</h2>
                          </div>

                          <div className=' h-fit w-full font-Montserrat cursor-default xl:text-[1em] 2xl:text-[1em] text-[14px]'>
                            <h1 className='font-semibold text-cred leading-none'>Description</h1>
                            <h2 className=' font-medium text-slate-500 leading-2'>Light N Seek is an engaging and challenging memory game where players must repeat sequences of lights to progress.
                            Each level introduces a new sequence, requiring sharp focus and quick thinking. Can you master the light patterns and reach the highest levels?.</h2>
                          </div>

                          <div className=' h-fit w-full font-Montserrat cursor-default font-medium xl:text-[1em] 2xl:text-[1em] text-[14px] flex flex-row flex-wrap gap-1'>
                            
                            <div className='bg-gray-700 w-fit py-2 px-4 rounded-full flex justify-between items-center leading-none hover:scale-110 duration-300'>
                              <h1 className='text-cred leading-none text-[14px] xl:text-[1em] 2xl:text-[1em]'>React</h1>
                            </div>

                            <div className='bg-gray-700 w-fit py-2 px-4 rounded-full flex justify-between items-center leading-none hover:scale-110 duration-300'>
                              <h1 className='text-cred leading-none text-[14px] xl:text-[1em] 2xl:text-[1em]'>TailwindCSS</h1>
                            </div>

                            <div className='bg-gray-700 w-fit py-2 px-4 rounded-full flex justify-between items-center leading-none hover:scale-110 duration-300'>
                              <h1 className='text-cred leading-none text-[14px] xl:text-[1em] 2xl:text-[1em]'>Vite</h1>
                            </div>

                            <div className='bg-gray-700 w-fit py-2 px-4 rounded-full flex justify-between items-center leading-none hover:scale-110 duration-300'>
                              <h1 className='text-cred leading-none text-[14px] xl:text-[1em] 2xl:text-[1em]'>Typescript</h1>
                            </div>

                          </div>

                        </div>
                  </div>




                  <div className='xl:w-[80%] 2xl:w-[80%] w-full aspect-[3/0.8] bg-gray-800 rounded-[10px] p-2 flex flex-col xl:flex-row  2xl:flex-row gap-2'>


                        <img src={PortfolioV3} alt="PortfolioV3" className='xl:w-[45%] 2xl:w-[45%] h-full object-fill rounded-[7px]'/>

                        <div className='w-full h-full  gap-2 flex flex-col relative'>

                          <div className='absolute font-semibold text-slate-500 top-0 right-0 font-Montserrat text-[14px]
                          before:bg-[#0079D0] before:rounded-full before:content-[""] before:p-1 before:absolute before:top-[6px]
                          
                          '>
                            
                            <h1 className='px-3'>Done</h1>
                          </div>


                          <div className=' h-fit w-full font-Montserrat cursor-default xl:text-[1em] 2xl:text-[1em] text-[14px]'>
                            <h1 className='font-semibold text-cred leading-none'>Name</h1>
                            <h2 className=' font-medium text-slate-500 leading-2'>PERSONAL PORTFOLIO</h2>
                          </div>

                          <div className=' h-fit w-full font-Montserrat cursor-default xl:text-[1em] 2xl:text-[1em] text-[14px]'>
                            <h1 className='font-semibold text-cred leading-none '>Domain</h1>
                            <h2 className=' font-medium text-slate-500 leading-2 underline cursor-pointer' onClick={() => handleRedirectToURL({ url: 'https://mcbaquev3.vercel.app/' })}>https://mcbaquev3.vercel.app/</h2>
                          </div>

                          <div className=' h-fit w-full font-Montserrat cursor-default xl:text-[1em] 2xl:text-[1em] text-[14px]'>
                            <h1 className='font-semibold text-cred leading-none'>Description</h1>
                            <h2 className=' font-medium text-slate-500 leading-2'>Explore my portfolio to see a diverse range of web development projects, each demonstrating my ability to deliver high-quality, scalable, and maintainable code. 
                            From game development to interactive web applications with API, my work reflects my commitment to excellence in web development.</h2>
                          </div>

                          <div className=' h-fit w-full font-Montserrat cursor-default font-medium xl:text-[1em] 2xl:text-[1em] text-[14px] flex flex-row flex-wrap gap-1'>
                            
                            <div className='bg-gray-700 w-fit py-2 px-4 rounded-full flex justify-between items-center leading-none hover:scale-110 duration-300'>
                              <h1 className='text-cred leading-none text-[14px] xl:text-[1em] 2xl:text-[1em]'>React</h1>
                            </div>

                            <div className='bg-gray-700 w-fit py-2 px-4 rounded-full flex justify-between items-center leading-none hover:scale-110 duration-300'>
                              <h1 className='text-cred leading-none text-[14px] xl:text-[1em] 2xl:text-[1em]'>TailwindCSS</h1>
                            </div>

                            <div className='bg-gray-700 w-fit py-2 px-4 rounded-full flex justify-between items-center leading-none hover:scale-110 duration-300'>
                              <h1 className='text-cred leading-none text-[14px] xl:text-[1em] 2xl:text-[1em]'>Vite</h1>
                            </div>

                            <div className='bg-gray-700 w-fit py-2 px-4 rounded-full flex justify-between items-center leading-none hover:scale-110 duration-300'>
                              <h1 className='text-cred leading-none text-[14px] xl:text-[1em] 2xl:text-[1em]'>Typescript</h1>
                            </div>

                            <div className='bg-gray-700 w-fit py-2 px-4 rounded-full flex justify-between items-center leading-none hover:scale-110 duration-300'>
                              <h1 className='text-cred leading-none text-[14px] xl:text-[1em] 2xl:text-[1em]'>Framer</h1>
                            </div>

                          </div>

                        </div>
                  </div>
                 

              </div>
            </div>

        </div>


        
    </div>
  )
}
