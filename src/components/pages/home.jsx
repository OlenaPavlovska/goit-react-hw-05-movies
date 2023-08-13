// import css from './home.module.css'
import  MovieList from "../movieList/movieList"
import React, {Suspense } from "react"


const Home = ()=>{
return(
<div>
<Suspense fallback={<div>Loading...</div>}>
    < MovieList searchParams={{query:''}}/>
</Suspense>
</div>
)}


export default Home