// import css from './movie.module.css'
import React, { useState, useEffect, useCallback } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { searchMovies } from "../api"



const Movies = ()=>{
    const [search,setSearch]=useState('')
    const [searchResule,setSearchResult]= useState([])
    const [searchPerform,setSearchPerform]=useState(false)
    const [searchParms,setSearchParams]= useSearchParams()

    const fetchData=useCallback(async (query)=>{
        try {
            const movies=await searchMovies(query)
            setSearchResult(movies)
            setSearchPerform(true)
        }catch (error){
            console.error('Error searching movies:', error);
        }
    },[])

    useEffect(()=>{
        const query= searchParms.get('query')
        if(query){
            setSearch(query)
            fetchData(query)
        }
    },[fetchData,searchParms])


    const location= useLocation()
    
    const onBack= ()=>{
if (location.pathname.includes('/movies')){
    window.history.back()
}else{
    window.location.href='/'
}
}
    const handleSubmitSearch=(query)=>{
        setSearchParams({query: query})
    }
    return(
<div>
    <h2>Search Movie</h2>
    <input
    
    type='text'
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    />
    <button onClick={()=>handleSubmitSearch(search)}>Search </button>
    {searchResule && searchPerform.length>0 ? (
<div>
    <h3>Search Results</h3>
    <button onClick={onBack}>Go back</button>

    <ul>
        {searchResule.map((movie)=>(
            <li key={movie.id}>
                 <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
           
       ) )}
    </ul>
</div>
 ):searchPerform && searchResule.length===0?(
<p>No movies found</p>
):null }
    </div>
 )
    }

    export default Movies