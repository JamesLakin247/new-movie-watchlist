import React, { useContext, useState } from "react"
import {Context} from "../Context"

import star from "../images/star-icon.svg"



function MovieCard(props) {
    const {addToWatchlist, removeFromWatchlist, watchlist, checkIfMovieIsInWatchlist} = useContext(Context)
    const [width, setWidth] = useState(window.innerWidth)

    function updateWidth() {
        setWidth(window.innerWidth);
      }
    window.addEventListener('resize', updateWidth)

    const moviePoster = props.movie.poster_path ? 
        <img className="card-poster-img" src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`} alt=""/> : 
        <div className="card-poster-img-null">
            <p className="null-poster-text">Poster Unavailable</p>
        </div>


    return (
        <div className="card-container">
            <div className="card-poster-container">
                {moviePoster}
            </div>
            <div className="card-body-container">
                <div className="card-header">
                    <h3>{props.movie.title}</h3>
                </div>
                <div className="card-info">
                    {/* <span>{props.movie.release_date.substr(0, 4)}</span> */}
                    <span><img src={star} alt=""/>{props.movie.vote_average}</span>
                    <span className="card-runtime">{`${props.movie.runtime} min`}</span>
                </div>
                <div className="card-description">
                    {width > 500 && <span>{`${props.movie.overview.substr(0, 100)}...`}</span>}
                </div>

                {checkIfMovieIsInWatchlist(props.movie.id) ? 
                <button className="toggle-btn remove-btn" /*id={`remove-btn-${props.movie.id}`}</div>*/ onClick={() => removeFromWatchlist(props.movie.id)}>Remove</button> : 
                <button className="toggle-btn add-btn" /*id={`add-btn-${props.movie.id}`}*/ onClick={() => addToWatchlist(props.movie)}>Save</button>}
            </div>
        </div>
    )
}

export default MovieCard