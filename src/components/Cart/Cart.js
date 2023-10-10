import { useContext } from 'react'
import './Cart.css'
import { useCart } from '../../context/CartContext'; // Cambio en la importación
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useCart(); // Cambio en cómo se obtiene el contexto

    if(totalQuantity === 0) {
        return(
            <div>
                <h1>No hay productos en el carrito</h1>
                <Link to='/' className='Option'>Productos</Link>
            </div>
        )
    }

    return (
        <div>
            { cart.map(p=> <CartItem key={p.id} {...p}/>)}
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className='Button'>Vaciar Carrito</button>
            <Link to='/checkout' className='Option'>Ckeckout</Link>
        </div>
    )
}

export default Cart;
