import './style.css'
import Card from '../Card'
import {useEffect, useState} from 'react'

function TopMovies({ movies }) {
    const [topMovies, setTopMovies] = useState([]);
    const [allMovies, setAllMovies] = useState([]);
    useEffect(() => {
        const top5 = [];
        for(let i = 0; i < 5; i++) {
          top5.push(allMovies[i]);
        }
        setTopMovies(top5)
        console.log(topMovies)
      },[])
    useEffect(() => {
        setAllMovies(movies)
    },[])
    return (
        <div className="top-movies">
            <h2>Top Filmes</h2>
            <div>
                {/* <Card movies={topMovies}/> */}
            </div>
        </div>
    )
}

export default TopMovies;



