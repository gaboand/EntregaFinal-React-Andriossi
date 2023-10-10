import React, { useContext } from 'react';
import './CartWidget.css';
import { Link } from 'react-router-dom';
import cart from "./assets/cart.svg";
import { useCart } from '../../context/CartContext'; // Cambio en la importación

const CartWidget = () => {
    const { totalQuantity } = useCart(); // Cambio en cómo se obtiene el contexto

    return (
        <Link to='/cart' className='CartWidget'>
            <img src={cart} alt="cart-widget" className="cartImg"/>
            { totalQuantity }
        </Link>
    );
}

export default CartWidget;



// style={{ display: totalQuantity > 0 ? 'block' : 'none'}}