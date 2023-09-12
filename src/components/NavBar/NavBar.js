import CartWidget from "../CartWidget/CartWidget"
import "bulma/css/bulma.css";

const NavBar = () => {
    return (
        <nav>
            <h3 className="hero is-primary">Voila</h3>
            <div>
                <button>Pantalones</button>
                <button>Camisas</button>
                <button>Camperas</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar