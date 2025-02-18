import './itemListContainer.css'
import ProductCart from "../../common/productCard/ProductCart"
import { product } from '../../../products'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const itemListContainer = () => {

    const {name} = useParams ()
    const [items, setItems] = useState ([])

    useEffect(() => {
        let arrayFiltrado = product.filter (elemento => elemento.category=== name)
        const getProducts = new Promise ( (resolve, reject) =>{
        let permiso = true
        if (permiso) {
            resolve(name ? arrayFiltrado : product)
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
}, [name])


    return (
        <div>
            <h2 className='mensajeInicial'> SkinCare and MakeUp </h2>
            {items.map((item)=>{
                return <ProductCart key ={item.id} {...item} />
                })}
        </div>
    )
}

export default itemListContainer
