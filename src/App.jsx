import React, { useState } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [movieTitle, setMovieTitle] = useState('')
  const [movieData, setMovieData] = useState(null)
  const [searchValue, setSearchValue] = useState('');

  const apiKey = 'f09ffdc3a2706e1ee201d1e65c826c09';


  const searchMovie = async () => {
    try {
      const respone = await axios.get(`{apiUrl}&t=${movieTitle}`);
      setMovieData(response.data);
    }
    catch (error) {
      console.error('Error fetching movie data', error.message)
    }
  }

  return (
    <>
      <div className="container">
        <h1 className="app-title">Movies Search Page</h1>
        <div className="search-container">
          <input className="search-input" type="text"
            placeholder='Enter movie title'
            value={movieTitle}
            onChange={(e) => setMovieTitle(e.target.value)} />

          <button className="search-button" onClick={searchMovie}>Search</button>
        </div>
        {movieData && (
          <div className="movie-details">
            <h2>{movieData.Title}</h2>
            <p>{movieData.Plot}</p>
            <img src="{movieData.Poster}" alt={`${movieData.Title} Poster`} />
          </div>
        )}
      </div>
    </>
  )
}

export default App
