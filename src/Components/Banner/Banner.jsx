import React from 'react'
import {API_KEY,imageUrl}from'../../Constants/Constants'
import './Banner.css'
import { useEffect } from 'react'
import axios from '../../axios'
import { useState } from 'react'

function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0]);
      
      setMovie(response.data.results[10])
      
    })
  }, [])
  
  return (
    <div
     style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path : ""})`}}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ?movie.title : ""}</h1>
            <div className='banner-buttons'>
                <button className='button'>Play</button>
                <button className='button'>My Playlist</button>

            </div>
            <h1 className='description'> {movie? movie.overview : ""}</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner