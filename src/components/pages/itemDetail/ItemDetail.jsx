import { useState } from "react"
import {product} from "../../../products"
import { useEffect } from "react"
import Counter from "../../common/counter/Counter"

const ItemDetail = () => {

    let id = "1"

    const [ item, setItem ] = useState ({})
    useEffect(() => {
        let producto = product.find ((product) => product.id === id)
        setItem(producto)
    },[id])

    return (
    <div>
        <h2>{item.title}</h2>
        <h2> {item.description}</h2>
        <Counter item = {item}/>
    </div>
    ) 
}

export default ItemDetail