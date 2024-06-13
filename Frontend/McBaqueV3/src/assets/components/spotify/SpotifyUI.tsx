import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { SpotifyTypes } from '../../types/SpotifyTypes'

import { Icon } from "@iconify/react";

import SpotifyWave from '../../media/image/SpotifyInfinite.svg'
import ReactAudioPlayer from 'react-audio-player';

export const SpotifyUI = () => {
    const audioRef = useRef<ReactAudioPlayer | null>(null)
    const BackendRoute: string = import.meta.env.REACT_APP_BACKEND_ROUTE
    const [currMusic, setcurrMusic] = useState<SpotifyTypes | null>(null)
    const [isPlaying, setIsPlaying] = useState(false);
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
              }, 30000);

            return () => clearInterval(intervalId);
        },[])


       const handlePlay = () => {  
            if (audioRef.current) {
                setIsPlaying(true);
                audioRef.current.audioEl.current?.play();
              }
        }

        const handlePause = () => {
            if (audioRef.current) {
                setIsPlaying(false);
                audioRef.current.audioEl.current?.pause();
              }
        }
        console.log("Current Music",currMusic?.name)
        console.log(audioRef)
  return (
    <>
        <div className='w-full h-fit flex justify-center bg-cblue py-4'>
            <div className='w-[80%] h-fit text-center font-Montserrat font-semibold flex justify-center flex-col items-center gap-4 min-w-[20em]'>
                {currMusic ? 
                <>
                <h1 className='text-[1em] px-4 text-cred font-Montserrat tracking-widest border-clightbrown'>I'm currently listening to</h1> 
                <div className='w-full 2xl:h-[5em] xl:h-[5em] h-[5em] max-w-[30em] min-w-fit flex flex-row justify-center items-center border-cred border-2 bg-[#191414] rounded-md'>
                    <div className='h-full w-fit bg-white relative'>
                        <div className='absolute w-full h-full flex justify-center items-center'>
                                <Icon icon="iconamoon:player-play-fill" className={`${isPlaying ? "hidden" : ""} text-[2em] text-[#1DB954]`} onClick={handlePlay}/>
                                <Icon icon="fluent:pause-32-filled" className={`${isPlaying ? "" : "hidden"} text-[2em]  text-[#1DB954]`} onClick={handlePause}/>
                        </div>
                        <img
                            src={currMusic?.album.images[1].url}
                            alt='Spotify Image'
                            className='h-full w-[8em] rounded'
                        ></img>
                    </div>
                    <div className=' w-full h-full flex flex-col justify-center items-start p-2'>
                        <h1 className='text-[15px] font-Montserrat font-semibold tracking-wide text-[#1DB954]'>
                            {currMusic?.name}
                        </h1>
                        <p className='text-[12px] font-Montserrat text-cred tracking-widest font-bold'>
                        {currMusic?.artists[0].name}
                        </p>
                    </div>
                   
                    <div className='w-[6em] h-full  flex p-1 justify-center items-center'>
                    <object
                        type="image/svg+xml"
                        data={SpotifyWave}
                        aria-label="Spotify Wave"
                        className=' object-cover '
                        >

                        </object>
                   </div>
                    <ReactAudioPlayer 
                    ref={audioRef}
                    src={currMusic.preview_url}
                    onEnded={()=>setIsPlaying(false)}
                    
                    />
                </div>
                </>
                : 
                <h1 className='text-[1em] text-cred border-b-2 px-4 font-Montserrat tracking-widest border-clightbrown'>Spotify off</h1>}
            </div>
        </div>
    </>
  )
}
