import './navbar.css'
import CartWidget from "../../common/cartWidget/CartWidget"


const Navbar = () => {
    return (
    <div>
        
        <ul className='navbar-lc'>
            <li><a><img src="https://res.cloudinary.com/dzfgqdlaz/image/upload/v1739331544/miau-footer_feqsv0.jpg"alt="Logo tienda Miau"/></a></li>
            <li><CartWidget /></li>
        </ul>
        <ul className="navbar-list"> 
            <li><a href="">Inicio</a></li>
            <li><a href="">Skincare</a></li>
            <li><a href="">Maquillaje</a></li>
            <li><a href="">Nosotros</a></li>
            <li><a href="">Contacto</a></li>
        </ul>
        
    </div>
    )
}

export default Navbar