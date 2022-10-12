import React, {useContext, useEffect} from "react"

import MovieCard from "../Components/MovieCard"
import {Context} from "../Context"
import noMoviesIcon from '../images/no-movie-icon.png'
// import {Link} from "react-router-dom"

function Watchlist() {
    const {watchlist} = useContext(Context)

    function renderMovieCards() {
        if (Array.isArray(watchlist)) {
            return watchlist.map(movie => {

                return (
                    <MovieCard 
                        // key={movie.id}
                        // title={movie.original_title} 
                        // poster={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        // year={movie.release_date.substr(0, 4)}
                        // plot={movie.overview}
                        // rating={movie.vote_average}
                        // runtime={movie.runtime}
                        key={movie.id}
                        movie={movie}
                    />
                )
            })
        }
    }

    useEffect(() => {
        renderMovieCards()
    }, [watchlist])

    const hasItems = watchlist.length ? true : false
    console.log(watchlist)
    console.log(hasItems)

    const content = (
        <div className="no-movies-container">
            <img className="no-movies-icon" src={noMoviesIcon} alt="" />
            <p className="no-movies-text">Add some movies to your watchlist</p>
        </div>
    )

    return (
        <div>
            <div className="watchlist-page"></div>
            <div className="container">
                {watchlist.length ? renderMovieCards() : content}
                {/* {renderMovieCards()} */}
            </div>
        </div>
    )
}

export default Watchlist