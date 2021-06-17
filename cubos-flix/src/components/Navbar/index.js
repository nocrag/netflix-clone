import './style.css';
import Logo from '../../images/logo.svg'
import Avatar from '../../images/avatar.jpeg'

function Navbar() {
    return (
        <div className="navbar">
            <img src={Logo} alt="Logo"/>
            <input type="search" id="searchMovie" name="searchMovie" placeholder="Pesquise filmes..."/>
            <p>Bem-vindo Garcon</p>
            <img src={Avatar} alt="Avatar" className="avatar"/>
        </div>
    );
}

export default Navbar;