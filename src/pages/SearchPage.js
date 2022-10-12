import React, {useState, useContext} from "react"

import MovieCard from "../Components/MovieCard"
import { Context } from "../Context"
import noMoviesIcon from '../images/no-movie-icon.png'

function SearchPage() {
    const [searchInput, setSearchInput] = useState("")
    const [movieResults, setMovieResults] = useState([])

    const {watchlist} = useContext(Context)

    let content = (
        <div className="no-movies-container">
            <img className="no-movies-icon" src={noMoviesIcon} alt="" />
            <p className="no-movies-text">Search for some movies and add them to your watchlist</p>
        </div>
    )
    
    function renderMovieCards() {
        if (Array.isArray(movieResults)) {
            return movieResults.map(movie => {
                return (
                    <MovieCard 
                        key={movie.id}
                        movie={movie}
                    />
                )
            })
        }
    }

    function search(e) {
        e.preventDefault()
        setSearchInput(e.target.value)
    }

    async function searchMovies() {
        let res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=b4729e68aa0a741155fee062c4bb8df7&language=en-US&page=1&include_adult=false&query=${searchInput}`)
        let data = await res.json()
    
        const movies = data.results
    
        // Get and display search results

        let newArr = []
        movies.forEach(async (movie) => {
            let response = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=b4729e68aa0a741155fee062c4bb8df7&language=en-US&page=1&include_adult=false`)
            let moviesListData = await response.json()
    
            // console.log(moviesListData)
            newArr.push(moviesListData)
            setMovieResults(prevState => [...prevState, moviesListData])
        })
        console.log(movieResults)
    }

    const handleClick = (e) => {
        e.preventDefault()
        setMovieResults([])
        searchMovies()
        renderMovieCards()
        if (!movieResults) {
            content = (
                <h2>No movies found, try another search</h2>
            )
        }

        // console.log(movieResults)
    }

    // useEffect(() => {
    //     setMovieResults([])
    //     searchMovies()
    //     renderMovieCards()
    // }, [searchInput])
    
    return (
        <div>
            <div className="container">
                <div className="search-container">
                    <div className="search-wrapper">
                        <input className="search-input" type="text" placeholder="Find your movie" onChange={e => search(e)}/>
                        <button className="search-btn" onClick={(e) => handleClick(e)}>Search</button>
                    </div>
                </div>
                <div>
                    {movieResults.length ? '' : content}
                    {renderMovieCards()}
                </div>
            </div>
        </div>
    )
}

export default SearchPage