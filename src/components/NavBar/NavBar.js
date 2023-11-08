import CartWidget from "../CartWidget/CartWidget"
import "bulma/css/bulma.css";
import './NavBar.css'
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="hero is-dark" id="navContainer">
            <Link to={`/`}>
                <h3 id="title">Voilá</h3>
            </Link>   
            <div className="linkContainer">
                <NavLink to={`/category/tapados`} className="linkOption">Tapados</NavLink>
                <NavLink to={`/category/cardigan`} className="linkOption">Cardigans</NavLink>
                <NavLink to={`/category/camperas`} className="linkOption">Camperas</NavLink>
                <NavLink to={`/category/pantalones`} className="linkOption">Pantalones</NavLink>
            </div>
                <CartWidget/>          
        </nav>

    )
}

export default NavBar
