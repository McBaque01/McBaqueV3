
import { useEffect } from 'react'
import axios from 'axios'


export const SpotifyUI = () => {

    const BackendRoute: string = import.meta.env.REACT_APP_BACKEND_ROUTE

        useEffect(()=>{
            const AuthorizeMe = async () => {
                try {
                    console.log(`${BackendRoute}/Spotify/AuthorizeMe`)
                   // Assuming the response contains the URL
                     const response = await axios.get(`${BackendRoute}/Spotify/CurrentMusic`);
                    
                    console.log(response.data)
                   
                    
                } catch (error) {
                    console.log("SPOTIFY UI",error)
                }
            }

            AuthorizeMe();
        },[BackendRoute])



  return (
    <div>SpotifyUI</div>
  )
}
