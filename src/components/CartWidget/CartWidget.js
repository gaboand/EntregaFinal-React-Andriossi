import './CartWidget.css'
import cart from  "./assets/cart.svg"

const CartWidget = () => {
return (
    <div className="Cart">
        <img src={cart} alt="cart-widget" className="cartImg"/>
        <p className='CartNumber'>0</p>
    </div>
    )
}

export default CartWidget