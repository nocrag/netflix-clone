import './style.css';
import CartLogo from '../../images/bag.svg'

function Cart() {
    return(
        <div className="cart">
            <div className="title">
                <img src={CartLogo} alt="Bag"/>
                <h4>Sacola</h4>
            </div>
            <div className="cart-items">
                <h3>Sua sacola esta vazia</h3>
                <p>Adicione filmes agora</p>
            </div>
        </div>
    );
}

export default Cart;