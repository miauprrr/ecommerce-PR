import { useState } from "react"
import { product } from "../../../products"
import { useEffect } from "react"
import Counter from "../../common/counter/Counter"
import { useParams } from "react-router"
import './itemDetail.css'
import { db } from "../../../firebaseConfig"
import { collection, doc, getDoc } from "firebase/firestore"

const ItemDetail = () => {
    const { id } = useParams()

    const [item, setItem] = useState({})

    useEffect(() => {
        let productCollection = collection(db, "products")
        let refDoc = doc(productCollection, id)
        const getProduct = getDoc(refDoc)
        getProduct.then((res) => {
            setItem({ id: res.id, ...res.data() })
        })
    }, [id])

    return (
        <div>
            <img className="imgProduct" src={item.imageUrl} alt="" />
            <h2>{item.title}</h2>
            <h2> {item.description}</h2>
            <Counter item={item} />
        </div>
    )
}

export default ItemDetail