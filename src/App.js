import {useEffect, useState} from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
const API_URL='https://www.omdbapi.com?apikey=686b68bd';
const movie1={
        "Title": "Avengers: Infinity War",
        "Year": "2018",
        "imdbID": "tt4154756",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    }

const App=()=>{
    const [movies,setMovies]=useState([]);
    const [searchTerm,setSearchTerm]=useState('');
    const searchMovies = async(title)=>{
        const response=await fetch(`${API_URL}&s=${title}`);
        const data=await response.json();
        setMovies(data.Search);
    }
    useEffect(()=>{
    searchMovies('Avengers');

    },[]);
    return(
        <div className='app'>
            <h1>Movieji</h1>
            <div className='search'>
                <input 
                placeholder='Search for Movies'
                value={searchTerm}
                onChange={(e)=>{setSearchTerm(e.target.value)}}
                ></input>
                <img src={SearchIcon} alt='Search' onClick={()=>{searchMovies(searchTerm)}}/>
            </div>
            {movies && movies.length>0 ?
            <div className='container'>
            {movies.map((movie)=>{
               return <MovieCard movie={movie}/>
})}
         </div>:<div><h2>No movies found!!</h2></div>}
              
        </div>
    )
}
export default App;