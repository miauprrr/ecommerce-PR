import { useContext } from 'react'
import { Link } from 'react-router'
import { CartContext } from '../../../context/CartContext'
import { Button } from '@mui/material'
import './cart.css'
import Swal from 'sweetalert2'
import { toast } from 'sonner'

const Cart = () => {
  const { resetCart, cart, removeById, getTotalAmount } = useContext(CartContext)
  let total = getTotalAmount()
  const resetCartWithAlert = () => {
    Swal.fire({
      title: "¿Quieres vaciar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si",
      denyButtonText: `No`
    }).then((result) => {
      if (result.isConfirmed) {
        resetCart();
        Swal.fire({
          title: "Carrito vaciado con éxito",
          showDenyButton: false,
          showCancelButton: false,
          confirmButtonText: "Ok",
          denyButtonText: `Succcess`,
          icon: "success"
        });
      } else if (result.isDenied) {
      }
    });
  }

  return (
    <div>
      {cart.map((elemento) => {
        return (
          <div key={elemento.id} className='productosCarrito'>
            <img src={elemento.imageUrl} alt="" />
            <h2>{elemento.title}</h2>
            <h2> Cantidad: {elemento.quantity}</h2>
            <h2> Precio: ${elemento.price} </h2>
            <Button variant='text' onClick={() => {
              removeById(elemento.id);
              toast.warning("Producto eliminado")
            }}>
              Eliminar </Button>
          </div>
        )
      })}


      <div className='botonesCarrito'>
        {cart.length > 0 &&
          <h2>
            El total a pagar es: ${total}
          </h2>}
        <div className='botones'>
          <Button variant="outlined" onClick={resetCartWithAlert}>
            Vaciar carrito
          </Button>
          <Button variant="contained">
            <Link to="/checkout"> Finalizar compra</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Cart