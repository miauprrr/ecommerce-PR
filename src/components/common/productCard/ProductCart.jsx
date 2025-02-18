import { Button } from '@mui/material'
import './productCard.css'
import { Link } from 'react-router'

const ProductCart = ({id, title, price, stock, category, description, imageUrl}) => {
    return (
    <div className='divProduct'>
        <img className='imgProduct' src={imageUrl} alt="" />
        <h2> {title} </h2>
        <h2> {price} </h2>
        <Link to={`/itemDetail/${id}`}>
            <Button variant= "outlined"> Ver detalles</Button>
        </Link>
    </div>
)
}

export default ProductCart