import { useEffect, useState } from 'react'
import { IconHandler } from './IconHandler'
import { InlineIcon } from '@iconify/react/dist/iconify.js';


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
    <div id="Skill" className='bg-cblue min-h-fit h-lvh w-full flex flex-col items-center relative'>
      


            <div className='absolute top-[7em] 2xl:top-[6em] flex justify-center w-full '>
              <div>
                <InlineIcon icon={currSkill?.iconpath as string | ""} className='text-[30em] 2xl:text-[50em] xl:text-[50em] opacity-10'/>
              </div>
              <h1 className='absolute -left-[0em] -top-[1em] text-[5em] 2xl:-left-0 2xl:top-[1em] xl:-left-0 xl:top-[0.5em] font-black tracking-widest 2xl:text-[10em] xl:text-[10em] text-gray-600 brightness-125 font-Montserrat transition-all duration-500 text-center w-full'>
                {currSkill?.name}
              </h1>
            </div>
           
      
      


        <div className='w-[80%] h-dvh min-h-full flex flex-col gap-2 relative'>
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
            <div className='w-full'>
              <h1 className='text-[2em] xl:text-[3.6em] 2xl:text-[3.6em] font-Montserrat text-cred font-black tracking-widest py-5'>PROJECTS</h1>
              <div className='w-full'>

              </div>
            </div>

        </div>


        
    </div>
  )
}
