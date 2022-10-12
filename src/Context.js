import React, {createContext, useEffect, useState} from "react"

const Context = createContext()

function ContextProvider({children}) {
    const [watchlist, setWatchlist] = useState(localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem("watchlist")) : [])
    const [watchlistIds, setWatchlistIds] = useState(localStorage.getItem("watchlistIds") ? JSON.parse(localStorage.getItem("watchlistIds")) : [])

    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(watchlist))
        localStorage.setItem("watchlistIds", JSON.stringify(watchlistIds))
    }, [watchlist])
  
    // function toggleWatchlist() {
    //   setIsInWatchlist(prevState => !prevState)
    // }

    function checkIfMovieIsInWatchlist(movieId) {
        return watchlistIds.includes(movieId)
    }
  
    function addToWatchlist(movie) {
        setWatchlist(prevState => [...prevState, movie])
        setWatchlistIds(prevState => [...prevState, movie.id])
        // console.log(watchlistIds)
        // document.getElementById(`remove-btn-${movie.id}`).style.display = "block"
        // document.getElementById(`add-btn-${movie.id}`).style.display = "none"
    }

    function removeFromWatchlist(id) {
        // localStorage.removeItem("watchlist")
        const newArr = watchlist.filter(movie => movie.id !== id)
        const newIds = watchlistIds.filter(idArrValue => idArrValue !== id)
        setWatchlist(newArr)
        setWatchlistIds(newIds)
        console.log(watchlistIds)
        // document.getElementById(`remove-btn-${id}`).style.display = "none"
        // document.getElementById(`add-btn-${id}`).style.display = "block"
    }

    // function checkWatchlist() {
    //     console.log(watchlist)
    // }

    return (
        <Context.Provider value={{watchlist, addToWatchlist, removeFromWatchlist, checkIfMovieIsInWatchlist}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}