import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Cart from './components/Cart';
import TopMovies from './components/TopMovies'


function App() {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    populateMovies();
  }, [])

  async function populateMovies() {
    const response = await fetch('https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR');
    const data = await response.json();
    
    const formattedMovies = [];
    for (const movie of data.results) {
      formattedMovies.push({
        id: movie.id,
        title: movie.title,
        poster: movie.poster_path,
        votes: movie.vote_average,
        price: movie.price
      })
    }
    setMovies(formattedMovies);
  } 

  return (
    <div className="app">
      <Navbar/>
      <div className="cart">
        <Cart/>
      </div>
      <TopMovies movies={movies}/>
      <div className="movies-list">
      <Card movies={movies}/>
      </div>
    </div>
  );
}

export default App;
