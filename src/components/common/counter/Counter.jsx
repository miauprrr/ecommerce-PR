import { useState, useEffect } from "react"
import './counter.css'
import { Button } from "@mui/material"

const Counter = ({item}) => {
  const  [contador, setcontador] = useState (1)
  
  const sumar = () => {
    if (contador < item.stock){
    setcontador (contador + 1)
    } else {
      alert ("El stock máximo es "+item.stock)
    }
  }

  const restar = () => {
    if(contador>1){
      setcontador (contador - 1)
    }else {
      alert("La cantidad mínima de producto es 1")
    }
  }

  const onAdd = () => {
    console.log("agregar al carrito")
    let objetoCarrito = {...item, quantity: contador}
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