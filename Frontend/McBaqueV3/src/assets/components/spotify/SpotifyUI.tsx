 import { useEffect, useState } from 'react'
import axios from 'axios'
import { SpotifyTypes } from '../../types/SpotifyTypes'


export const SpotifyUI = () => {

    const BackendRoute: string = import.meta.env.REACT_APP_BACKEND_ROUTE
    const [currMusic, setcurrMusic] = useState<SpotifyTypes | null>(null)

        useEffect(()=>{
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

            getMusic();
        },[BackendRoute])


        console.log("Current Music",currMusic?.name)
  return (
    <div>SpotifyUI</div>
  )
}
