// import css from './movieReview.module.css'

import { getMovieReview } from "../api"
import React,{ useEffect, useState } from "react"


const Cast =({movieId})=>{
const [movieReview,setMovieReview]= useState([])
const [error,setError]= useState(null)

useEffect(()=>{
getMovieReview(movieId)
.then((movieReview)=>{
    setMovieReview(movieReview)
}
).catch((error)=>{
    setError('Error fetching trending movies: ' + error.message)
})
},[movieId])

return(
<div>
{movieReview.length> 0?(
    <ul>
        {movieReview.map((author)=>(
            <li key={author.id}>
                <h3>{author.author}</h3>
                <p>{author.content}</p>

            </li>
        ))}
    </ul>
):(
    <p>{error ? `Error: ${error}` : "We don't have any reviews for this movie."}</p>
    
)}

</div>
)
}
export default Cast