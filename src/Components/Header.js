import React from "react"
import {Link} from "react-router-dom"

function Header() {
    return (
        <header>
            {/* <div className="container"> */}
                <div className="links-wrapper">
                    <Link className="nav-link" to="/">Search Page</Link>
                    <Link className="nav-link" to="/watchlist">Your Watchlist</Link>
                </div>
            {/* </div> */}
        </header>
    )
}

export default Header