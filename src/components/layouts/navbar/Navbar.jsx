import './navbar.css'
import CartWidget from "../../common/cartWidget/CartWidget"
import { Link } from 'react-router'

const Navbar = () => {
    return (
        <div>
            <ul className='navbar-lc'>
                <li>
                    <Link to="/">
                        <img className='logoTienda' src="https://res.cloudinary.com/dzfgqdlaz/image/upload/v1739331544/miau-footer_feqsv0.jpg" alt="Logo tienda Miau" />
                    </Link>
                </li>
                <li>
                    <Link to="/cart">
                        <CartWidget />
                    </Link>
                </li>
            </ul>
            <ul className="navbar-list">
                <Link to="/">Inicio</Link>
                <Link to="/category/skincare">Skincare</Link>
                <Link to="/category/maquillaje">Maquillaje</Link>
                <li><a href="/">Nosotros</a></li>
                <li><a href="/">Contacto</a></li>
            </ul>

        </div>
    )
}

export default Navbar