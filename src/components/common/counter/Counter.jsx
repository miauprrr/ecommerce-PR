import { useState, useEffect } from "react"

const Counter = () => {
  const  [contador, setcontador] = useState (1)
  
  const sumar = () => {
    setcontador (contador + 1)
  }

  const restar = () => {
    setcontador (contador - 1)
  }

  return (

    <div>
      <button onClick={restar}> restar </button>
      <h2> {contador} </h2>
      <button onClick={sumar}> sumar </button>
      </div>
  )
}

export default Counter