import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({id, name, img, precio, categoria, stock, description }) => {
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
            <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log ("Cantidad Agregada ",quantity)}/>
            </footer>
        </article>
    )

}

export default ItemDetail