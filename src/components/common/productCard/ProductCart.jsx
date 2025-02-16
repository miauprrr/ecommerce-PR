import './productCard.css'

const ProductCart = ({id, title, price, stock, category, description, imageUrl}) => {
    // const ProductCart = ({promps}) => {
    // const {title, price, stock} = promps
    return (
    <div className='divProduct'>
        <img className='imgProduct' src={imageUrl} alt="" />
        <h2> {title} </h2>
        <h2> {price} </h2>
        <h2> {description} </h2>
    </div>
)
}

export default ProductCart