import css from './cast.module.css'

import { getMovieCredits } from "../api"
import { useState, useEffect }from "react"




const Cast = ({movieId}) => {

    const [movieCredits,setMovieCredits]= useState([])
    const [error,setError]= useState(null)

    useEffect(()=>{
        getMovieCredits(movieId).then((movieCredits)=>{
            setMovieCredits(movieCredits)
        })
        .catch ((error)=>{
            setError('Error fetching trending movies: ' + error.message)
        })
        
    },[movieId])

    const defaultImage= 'https://cdn-icons-png.flaticon.com/512/4054/4054617.png';
return(
    <div className={css.container}>
        <h2 className={css.title}>Cast</h2>
        {error ? (
            <p>Error: {error}</p>):(
                <div>
                    {movieCredits.map((actor)=>(
                        <div key={actor.id}>
                          <img
                          src={actor.profile_path ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}` : defaultImage}
                          alt={actor.name}
                          width={230}
                          />
                          <p>{actor.name}</p>
                        </div>
                    ))}
                </div>
            )
    }
    </div>
)
}
export default Cast