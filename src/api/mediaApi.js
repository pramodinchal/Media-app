import axios from 'axios';

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;

export async function fetchPhotos(query, page = 1, per_page = 18) {

   const response = await axios.get(
      'https://api.unsplash.com/search/photos',
      {
         params: { query, page, per_page },
         headers: {
            Authorization: `Client-ID ${UNSPLASH_KEY}`
         }
      }
   )
  
    console.log(response.data.response); 
   return response.data
   
}

export async function fetchVideos(query, per_page = 30) {

   const response = await axios.get(
      'https://api.pexels.com/videos/search',
      {
         params: { query, per_page },
         headers: {
            Authorization: PEXELS_KEY
         }
      }
   )

   
   console.log(response.data.videos); 
   return response.data
}