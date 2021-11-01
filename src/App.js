import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Cart from './components/Cart';
import TopMovies from './components/TopMovies';
import PriceButton from './components/PriceButton';
import SearchInput from './components/SearchInput';


function App() {

  const [movies, setMovies] = useState([])
  const [moviesInBasket, setMoviesInBasket] = useState([]);
  const [basketFinalPrice, setBasketFinalPrice] = useState(0);
  const [moviesNameFilter, setMoviesNameFilter] = useState("");

  useEffect(() => {
  async function populateMovies() {
    const response = await fetch('https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR');
    const { results} = await response.json();
    
    setMovies(results);

  } 
    populateMovies(); 
  }, []);
  
  function filterMovie(movie) {
    if (!moviesNameFilter) return movie;

    if (movie.title.includes(moviesNameFilter)) {
        return movie;
    }
}

function getDiscountedPrice(price) {
    return Number(price.toFixed(2));
}

function handleMovieBuy(movie) {
    const newMovies = [...moviesInBasket];
    const movieInBasket = newMovies.find(
        ({ title }) => title === movie.title,
    );

    if (movieInBasket) {
        movieInBasket.count++;
        setMoviesInBasket(newMovies);
        const newPrice = getDiscountedPrice(
            movieInBasket.price + basketFinalPrice,
        );
        setBasketFinalPrice(newPrice);
        return;
    }

    newMovies.push({
        title: movie.title,
        backgroundImg: movie.poster_path,
        price: movie.price,
        count: 1,
    });
    setMoviesInBasket(newMovies);
    const newPrice = getDiscountedPrice(movie.price + basketFinalPrice);
    setBasketFinalPrice(newPrice);
}

function handleMovieAdd(movieTitle) {
    const newMovies = [...moviesInBasket];
    const movieInBasket = newMovies.find(
        ({ title }) => title === movieTitle,
    );

    movieInBasket.count++;
    setMoviesInBasket(newMovies);
    const newPrice = getDiscountedPrice(
        movieInBasket.price + basketFinalPrice,
    );
    setBasketFinalPrice(newPrice);
}

function handleMovieRemoval(movieTitle) {
    const newMovies = [...moviesInBasket];
    const movieInBasket = newMovies.find(
        ({ title }) => title === movieTitle,
    );
    const newPrice = getDiscountedPrice(
        basketFinalPrice - movieInBasket.price,
    );
    setBasketFinalPrice(newPrice);

    movieInBasket.count--;
    if (movieInBasket.count === 0) {
        setMoviesInBasket(
            newMovies.filter(({ title }) => title !== movieTitle),
        );
        return;
    }

    setMoviesInBasket(newMovies);
}

return (
  <div className="App">
      <Navbar
          setMoviesNameFilter={setMoviesNameFilter}
      />
      <main className="content">
          <div className="top-movies">
              <h2>Top Movies</h2>
              <div className="movies-grid">
                  {movies.slice(0, 5).map((movie) => (
                      <Card
                          {...movie}
                          handleMovieBuy={handleMovieBuy}
                      />
                  ))}
              </div>
          </div>
          <div className="movies">
              <h2>Movies</h2>
              <div className="movies-grid">
                  {movies.filter(filterMovie).map((movie) => (
                      <Card {...movie} handleMovieBuy={handleMovieBuy} />
                  ))}
              </div>
          </div>
      </main>
      <Cart
          className="bag"
          moviesInBasket={moviesInBasket}
          finalPrice={basketFinalPrice}
          handleMovieAdd={handleMovieAdd}
          handleMovieRemoval={handleMovieRemoval}
      />
  </div>
);
}

export default App;
