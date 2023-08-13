import axios from 'axios'
const API_KEY = 'fb80b48b1255806de867923f1e41971b'

// функція для отримання популярних фільмів на сьогодні
async function getTrendingMovies(){
    try{
    const url =  `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
    const res = await axios.get(url)
    return res.data.results
}
catch(error){
return[]
}}

// функція для пошуку фільмів

async function searchMovies(query,page=1){
    try{
        const url=`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
        const res= await axios.get(url)
        return res.data.results
    }
    catch (error){
        return []
    }
}


// функція для отримааня інформаціі про фільм
async function getMovieDetails(movieId){
    try{
        const url=`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
        const res =await axios.get(url)
        return res.data
    }
    catch (error){
        return null
    }
}

// функція для отримання інформації про акторів
async function getMovieCredits(movieId){
try{
    const url =  `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
    const res = await axios.get(url)
    return res.data
}
catch (error){
    return []
}
}

// функція для отримання огляду фільму
async function getMovieReview(movieId){
    try {
        const url=`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`;
        const res = await axios.get(url)
        return res.data
    }
    catch (error){
        return []
    }
}


export{
    getTrendingMovies,
    searchMovies,
    getMovieDetails,
    getMovieCredits,
    getMovieReview
}