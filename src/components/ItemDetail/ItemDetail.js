import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext';


const ItemDetail = ({id, name, img, precio, categoria, stock, description }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)
    const { addItem } = useCart();

    console.log(img)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);

        const item = {
            id, name, precio
        };

        addItem(item, quantity);
    }

    return (
        <article className='CardItemDetail'>
            <header className='Header'> 
            </header>
            <picture>
                <img src={img} className='ItemImg2' alt={name} />
            </picture>
            <section>
                <h2 className='ItemHeader'>{name}</h2>
                <p className='Info'>Precio: ${precio}</p>
                <p className='Info'>Stock disponible: {stock}</p>
                <p className='Info'>Descripción: {description}</p>
            </section>
            <footer className='ItemFooter'>
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className='Option'>Terminar compra</Link>
                    ) : ( 
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
            </footer>
        </article>
    );
}

export default ItemDetail;
