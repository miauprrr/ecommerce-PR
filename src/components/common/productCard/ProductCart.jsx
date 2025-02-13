const ProductCart = ({id, title, price, stock, category, description, imageUrl}) => {
    // const ProductCart = ({promps}) => {
    // const {title, price, stock} = promps
    return (
    <div>
        <img src={imageUrl} alt="" />
        <h2> {title} </h2>
        <h2> {price} </h2>
        <h2> {description} </h2>
    </div>
)
}

export default ProductCart