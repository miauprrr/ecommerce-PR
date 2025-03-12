import { BrowserRouter, Routes } from "react-router"
import Navbar from "./components/layouts/navbar/Navbar"
import ItemDetail from "./components/pages/itemDetail/ItemDetail"
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer"
import { Route } from "react-router"
import Cart from "./components/pages/cart/Cart"
import Checkout from "./components/pages/checkout/Checkout"
import CartContextProvider from "./context/CartContext"
import { Toaster } from "sonner"


function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Toaster duration = {2000}/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:name" element={<ItemListContainer/>}/> 
          <Route path="/cart" element={<Cart/>}/> 
          <Route path="/itemDetail/:id" element = {<ItemDetail/>}/>
          <Route path="*" element={<h1> 404 not found </h1>}/> 
          <Route path="/checkout" element = {<Checkout/>} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  ) 
}

export default App
