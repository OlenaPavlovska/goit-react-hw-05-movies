// import css from './movieDetails.module.css'

import { getMovieDetails } from "../api"
import React,{ useEffect, useState } from "react"
import { NavLink, Route,Routes, useLocation, useNavigate, useParams } from"react-router-dom"
import Cast from "./cast"
import Reviews from './movie.review'



const MovieDetails=()=>{

const {movieId} = useParams()
const [movieDetails,setMovieDetails]= useState([])
const [error,setError]=useState(null)

const navigate = useNavigate()
const location = useLocation()



const onBack= ()=>{
    if(location.pathname.includes('/movies')){
        navigate(-1)
    }
    else{
        navigate('/')
    }
}


useEffect(()=>{
getMovieDetails(movieId)
.then((movieDetails)=>{
    setMovieDetails(movieDetails)
}).catch((error)=>{
    setError('Error fetching trending movies: ' + error.message);
})
},[movieId])

const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

if(error){
return(<div>{error}</div>)
}

if (!movieDetails){
    return (
        <div>Loading...</div>
    )
}
 
const voteMiddle=movieDetails.vote_avarage
const percentLiked = voteMiddle?(voteMiddle / 10) * 100:null

return(
<>
<div>
    <button type="button" onClick={onBack}>Go back</button>
</div>

<div>
<img
src={movieDetails.poster_path?`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}` : defaultImg}
alt="poster"
width={250}/>
<h2>{movieDetails.title ? movieDetails.title : movieDetails.name}</h2>
<p>User score:{Math.round(percentLiked)}%</p>
<div>
        <h2>Overview</h2>
        <p>{movieDetails.overview}</p>
      </div>
      <div>
        <h2>Genres</h2>
        <p>
          {movieDetails.genres &&
            movieDetails.genres.map((genre) => {
              return genre.name;
            }).join(' ')}
        </p>
      </div>

      <div>
<h2>Additional information</h2>
<ul>
    <li>
        <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
    </li>
    <li>
        <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
    </li>
</ul>

      </div>


    

<Routes >
<Route path = 'cast' element={<Cast movieId={movieId} />} />
<Route path = 'review' element  = {<Reviews movieId={movieId}/>}/>

</Routes>

</div>
</>

)

}

export default MovieDetails