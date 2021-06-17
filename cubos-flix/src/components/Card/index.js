import './style.css';
import { ReactComponent as Star } from '../../images/golden-star.svg'

function Card({ movies }) {
    console.log(movies)
    return (
        <>
        { movies.map(item => (
            <div 
            className="card" 
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${item.poster})`,
            }}>
                <div className="movie-info">
                    <h3>{item.title}</h3>
                    <div className="movie-stars">
                        <Star/>
                        {item.votes}
                    </div>
                </div>
                <div className="button-card">
                    <button>Sacola <span>R${item.price}</span></button>
                </div>
            </div>
        ))}
        </>
    );
}

export default Card;