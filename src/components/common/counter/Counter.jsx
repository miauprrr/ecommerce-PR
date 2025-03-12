import { useState, useEffect, useContext } from "react"
import './counter.css'
import { Alert, AlertTitle, Button } from "@mui/material"
import { CartContext } from "../../../context/CartContext"
import { toast } from "sonner"

const Counter = ({ item }) => {
  const [contador, setcontador] = useState(1)
  const { addToCart } = useContext(CartContext)

  const sumar = () => {
    if (contador < item.stock) {
      setcontador(contador + 1)
    } else {
      alert("El stock máximo es " + item.stock)
    }
  }

  const restar = () => {
    if (contador > 1) {
      setcontador(contador - 1)
    } else {
      alert("La cantidad mínima de producto es 1")
    }
  }

  const onAdd = () => {
    console.log("agregar al carrito")
    let objetoCarrito = { ...item, quantity: contador }
    addToCart(objetoCarrito)
    toast.success("Producto agregado", { duration: 3000 })
  }

  return (

    <div>
      <div className="styleButton">
        <button onClick={restar}> restar </button>
        <h2> {contador} </h2>
        <button onClick={sumar}> sumar </button>
      </div>
      <Button onClick={onAdd}> Agregar al carrito</Button>
    </div>
  )
}

export default Counter