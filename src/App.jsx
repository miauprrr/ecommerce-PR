import { BrowserRouter, Routes } from "react-router"
import Navbar from "./components/layouts/navbar/Navbar"
import ItemDetail from "./components/pages/itemDetail/ItemDetail"
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer"
import { Route } from "react-router"
import Cart from "./components/pages/cart/Cart"

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:name" element={<ItemListContainer/>}/> 
        <Route path="/cart" element={<Cart/>}/> 
        <Route path="/itemDetail/:id" element = {<ItemDetail/>}/>
        <Route path="*" element={<h> 404 not found </h>}/> 
      </Routes>
    </BrowserRouter>
  ) 
}

export default App
