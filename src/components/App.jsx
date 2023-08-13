import { Route,Routes } from "react-router-dom"
import React, {Suspense} from "react"
import Header from "./header/header"


const Home= React.lazy(()=>import('./pages/home') )
const Movies= React.lazy(()=>import('./pages/movies') )
const MovieDetails=React.lazy(()=>import('./pages/movieDetails') )
const Cast=React.lazy(()=>import('./pages/cast') )
const Reviews =React.lazy(()=>import('./pages/movie.review') )



const App = () => {
  return(
    <div>
      <Header/>
      <Suspense fallback={<div>loading...</div>}>
<Routes>

          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

</Routes>
      </Suspense>
    </div>
  )
}


export default App