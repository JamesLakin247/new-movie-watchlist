import React from "react"
import {Routes, Route} from "react-router-dom"

import Header from "./Components/Header"
import SearchPage from "./pages/SearchPage";
import Watchlist from "./pages/Watchlist"

function App() {
  
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<SearchPage />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </div>
  );
}

export default App;