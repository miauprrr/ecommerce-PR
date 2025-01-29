import './itemListContainer.css'
import ProductCart from "../../common/productCard/ProductCart"

export const ItemListContainer = ({greeting}) => {

    return (
        <div>
            <h2 className='greeting'> {greeting}</h2>
            {/* <ProductCart title= "Crema" price= {18990} stock= {20}/>
            <ProductCart title= "Toner" price= {15990} stock= {26} />
            <ProductCart title= "Serum" price= {21990} stock= {27} />
            <ProductCart title= "Limpiador" price= {10990} stock= {29} /> */}
        </div>
    )
}

export default ItemListContainer
