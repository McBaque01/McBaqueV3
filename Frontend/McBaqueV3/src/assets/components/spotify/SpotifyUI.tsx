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
                <h1 className='text-[1em] px-4 text-cred font-Montserrat tracking-widest border-clightbrown'>I'm currently listening to</h1> 
                <div className='w-full 2xl:h-[5em] xl:h-[5em] h-[5em] max-w-[30em] min-w-fit flex flex-row justify-center items-center border-cred border-2 bg-[#191414] rounded-md'>
                    <img
                        src={currMusic?.album.images[1].url}
                        alt='Spotify Image'
                        className='h-full w-fit rounded'
                    ></img>
                    <div className=' w-full h-full flex flex-col justify-center items-start p-2'>
                        <h1 className='text-[15px] font-Montserrat font-semibold tracking-wide text-[#1DB954]'>
                            {currMusic?.name}
                        </h1>
                        <p className='text-[12px] font-Montserrat text-cred tracking-widest font-bold'>
                        {currMusic?.artists[0].name}
                        </p>
                    </div>
                    <Icon icon="lucide:audio-lines" className='text-[4em] text-clightbrown p-4'/>
                    
                </div>
                </>
                : 
                <h1 className='text-[1em] text-cred border-b-2 px-4 font-Montserrat tracking-widest border-clightbrown'>Spotify off</h1>}
            </div>
        </div>
    </>
  )
}
