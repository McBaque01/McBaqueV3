import { useEffect, useState } from 'react'
import axios from 'axios'
import { SpotifyTypes } from '../../types/SpotifyTypes'

import { Icon } from "@iconify/react";

export const SpotifyUI = () => {

    const BackendRoute: string = import.meta.env.REACT_APP_BACKEND_ROUTE
    const [currMusic, setcurrMusic] = useState<SpotifyTypes | null>(null)
    const getMusic = async () => {
        try {
           // Assuming the response contains the URL
             const response = await axios.get(`${BackendRoute}/Spotify/CurrentMusic`);
             console.log("res",response)
            console.log(response.data)  
            setcurrMusic(response.data)
        } catch (error) {
            console.log("SPOTIFY UI",error)
        }
    }

        useEffect(()=>{
           
            getMusic();

            const intervalId = setInterval(() => {
                getMusic();
              }, 5000);

            return () => clearInterval(intervalId);
        },[])


        console.log("Current Music",currMusic?.name)
  return (
    <>
        <div className='w-full h-fit flex justify-center bg-cblue py-4'>
            <div className='w-[80%] h-fit text-center font-Montserrat font-semibold flex justify-center flex-col items-center gap-4 min-w-[20em]'>
                {currMusic ? 
                <>
                <h1 className='text-[1em] border-b-2 px-4 text-cred font-Montserrat tracking-widest border-clightbrown'>Spotify on</h1> 
                <div className='  w-full 2xl:h-[8em] xl:h-[8em] h-[5em] max-w-[30em] flex flex-row justify-center items-center border-cred border-2 p-2 '>
                    <img
                        src={currMusic?.album.images[1].url}
                        className='h-full w-fit'
                    ></img>
                    <div className=' w-full h-full flex flex-col justify-center items-start p-2'>
                        <h1 className='text-[16px] font-Montserrat font-normal text-clightbrown tracking-wide'>
                            {currMusic?.name}
                        </h1>
                        <p className='text-[14px] font-Montserrat text-cred tracking-widest border-b-2'>
                        {currMusic?.artists[0].name}
                        </p>
                    </div>
                    <Icon icon="lucide:audio-lines" className='text-[4em] text-clightbrown'/>
                    
                </div>
                </>
                : 
                <h1 className='text-[1em] text-cred border-b-2 px-4 font-Montserrat tracking-widest border-clightbrown'>Spotify off</h1>}
            </div>
        </div>
    </>
  )
}
