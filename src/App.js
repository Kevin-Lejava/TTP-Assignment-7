import './App.css';
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Trending from "./Trending"
import Search from "./Search"
import Random from "./Random"

function App() {

  return (



    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Trending />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Random" element={<Random />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App;