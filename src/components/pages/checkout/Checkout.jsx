import { useContext } from "react"
import { useState } from "react"
import { CartContext } from "../../../context/CartContext"
import { db } from "../../../firebaseConfig"
import { addDoc, collection, updateDoc, doc } from "firebase/firestore"


const Checkout = () => {

    const { cart, getTotalAmount, resetCart } = useContext(CartContext)
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState({
        nombre: "",
        email: "",
        telefono: ""
    })

    const [orderId, setOrderId] = useState(null)

    const handleSubmit = (evento) => {
        evento.preventDefault();
        setIsLoading(true)
        let total = getTotalAmount()
        let order = {
            buyer: user,
            items: cart,
            total: total
        }
        let refCollection = collection(db, "orders")
        const promiseResponse = addDoc(refCollection, order)  //como respuesta del método addDoc me da el ID
        promiseResponse
            .then((res) => {
                setOrderId(res.id)
                resetCart()
                setIsLoading(false)
            })
            .catch((error) => console.log({ error }))


        let productsCollection = collection(db, "products")
        order.items.forEach((item) => {
            let productRef = doc(productsCollection, item.id)
            updateDoc(productRef, { stock: item.stock - item.quantity }) //stock menos compra
        })
    }

    const handleChange = (evento) => {
        const { value, name } = evento.target
        setUser({ ...user, [name]: value })
    }


    return (
        <div>
            {
                !isLoading && orderId && (
                    <h2> Gracias por tu compra. Tu número de orden es {orderId} </h2>
                )}
            {
                !isLoading && !orderId && (
                    <form onSubmit={handleSubmit}>
                        <input type="text " placeholder="nombre" name="nombre" onChange={handleChange} />
                        <input type="text " placeholder="email" name="email" onChange={handleChange} />
                        <input type="text " placeholder="teléfono" name="teléfono" onChange={handleChange} />
                        <button disabled={isLoading}> Comprar</button>
                        <button type="button"> Cancelar </button>
                    </form>
                )}
            {isLoading &&
                <h2>
                    Cargando...  //poner otra cosa.
                </h2>
            }
        </div>
    )
}

export default Checkout





// const sumar=(a,b,c)
// <button onclick={sumar}> sumar </button>
// <button onClick={() => sumar (1,5,6)}> Sumar </button> necesita datos