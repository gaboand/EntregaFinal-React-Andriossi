import { Link } from 'react-router-dom'
import './Item.css'
// import imagen1 from "../img/prod1-1.webp";


const Item = ({id, name, img, precio, stock, description }) =>{
    return(
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} className='ItemImg' alt={name} />    
            </picture>
            <section>
                <p className='Info'>Precio: ${precio}</p>
                <p className='Info'>Stock disponible: {stock}</p>
            </section>
            <footer className='ItemFooter'>
                <Link to={`/item/${id}`} className='Option'>Ver Detalle</Link>
            </footer>
        </article>
    )
}

export default Item