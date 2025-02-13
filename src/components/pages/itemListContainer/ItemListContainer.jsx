import './itemListContainer.css'
import ProductCart from "../../common/productCard/ProductCart"
import { product } from '../../../products'
import { useEffect, useState } from 'react'

const itemListContainer = () => {
    const [items, setItems] = useState ([])

    useEffect(() => {
        const getProducts = new Promise ( (resolve, reject) =>{
        let permiso = true
        if (permiso) {
            resolve(product)
        } else {
            reject({ status: 400, message: "algo salió mal"})
        }
    })

    getProducts
    .then((respuesta) =>{
        setItems (respuesta)
    })
    .catch((error) =>{
        console.log(error)
    })
}, [])


    return (
        <div>
            <h2> Acá van los productos</h2>
            {items.map((item)=>{
                return <ProductCart key ={item.id} {...item} />
                })}
        </div>
    )
}

export default itemListContainer
