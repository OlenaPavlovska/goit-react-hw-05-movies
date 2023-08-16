import css from './movieList.module.css'
import React,{ useEffect, useState } from "react"
import { getTrendingMovies } from "../api"
import { NavLink } from "react-router-dom"



const MovieList = ()=>{
const[movies,setMovies]= useState([])
const [error,setError]= useState(null)

useEffect(()=>{
getTrendingMovies().then((movies)=>{
    setMovies(movies)})
.catch((error)  => {
    setError('Error fetching trending movies: ' + error.message);
})
},[])

return(
    <div className={css.container}>
{error && <div>{error}</div>}
<h1 className={css.title}>TRENDING MOVIES</h1>

<ul>
    {movies.map((movie)=>(
    <li key={movie.id}>
        <NavLink className={css.list} to={`/movies/${movie.id}`}>
            {movie.title? movie.title : movie.name}
        </NavLink>
    </li>
))}

</ul>
    </div>
)
}


export default MovieList