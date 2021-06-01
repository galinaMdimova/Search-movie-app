import React, { useEffect, useState } from 'react'
import Movie from './components/Movie'
import Hero from './components/Hero'

const MOVIES_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="

function App() {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetch(MOVIES_API)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results)
        console.log(data.results)
      })
  }, [])


  const handleOnSubmit = (e) => {
    e.preventDefault()

    if (setSearchTerm) {
      fetch(SEARCH_API + searchTerm)
        .then(res => res.json())
        .then(data => {
          setMovies(data.results)
        })
      setSearchTerm('')
    }
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <>
      <header>
        <h3 className="title">
          My Movie Collection
        </h3>
        <form onSubmit={handleOnSubmit}>
          <input
            className="search"
            type="search"
            placeholder="Search by movie title..."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
        
      </header>
      <div>
      <Hero/>
      </div>
     
      <div className="movie-container">
        {movies.length > 0 && movies.map((movie) =>
          <Movie key={movie.id} {...movie} />
        )} 
      </div>  
    </>
  )
}

export default App
