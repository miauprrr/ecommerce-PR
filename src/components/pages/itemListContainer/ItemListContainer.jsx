import "./itemListContainer.css";
import ProductCart from "../../common/productCard/ProductCart";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Box, CircularProgress } from "@mui/material";
import { db } from "../../../firebaseConfig";
import { getDocs, collection, addDoc, query, where } from "firebase/firestore";

const itemListContainer = () => {
  const { name } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const coleccionProductos = collection(db, "products")
    let consulta = coleccionProductos

    if (name) {
      const coleccionfiltrada = query(
        coleccionProductos,
        where("category", "==", name)
      )
      consulta = coleccionfiltrada
    }

    const getProducts = getDocs(consulta)
    getProducts.then((res) => {
      let newArray = res.docs.map((elemento) => {
        return { id: elemento.id, ...elemento.data() }
      })
      setItems(newArray)
    })
  }, [name])

  return (
    <div>
      <h1 className="mensajeInicial"> SkinCare and MakeUp </h1>
      {items.length === 0 ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh', // Esto asegura que ocupe toda la altura de la ventana
          }}>
          <CircularProgress />
        </Box>
      ) : (
        <div>
          {items.map((item) => {
            return <ProductCart key={item.id} {...item} />;
          })}
        </div>)}
    </div>
  )
}
export default itemListContainer 