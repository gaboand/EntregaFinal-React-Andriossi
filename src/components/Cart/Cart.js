import { useContext } from 'react'
import './Cart.css'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total, removeItem } = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay productos en el carrito</h1>
                <Link to='/' className='Option'>Productos</Link>
            </div>
        )
    }

    return (
        <div>
            {cart.map((item) => (
                <CartItem
                    key={item.id}
                    item={item} // Pasa el objeto de item en lugar de solo su id
                    quantity={item.quantity} // Pasa la cantidad de este ítem
                    removeItem={removeItem} // Pasa la función removeItem
                />
            ))}
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className='Button'>Vaciar Carrito</button>
            <Link to='/checkout' className='Option'>Checkout</Link>
        </div>
    )
}

export default Cart
