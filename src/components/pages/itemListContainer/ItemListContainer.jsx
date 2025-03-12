import "./itemListContainer.css";
import ProductCart from "../../common/productCard/ProductCart";
import { product } from "../../../products";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CircularProgress } from "@mui/material";
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

  // const rellenar = () => {
  //   let productsCollections = collection(db, "products")

  //   product.forEach((product) => {
  //     addDoc(productsCollections, product)
  //   });
  // }

  return (
    <div>
      <h1 className="mensajeInicial"> SkinCare and MakeUp </h1>
      {/* <button onClick={rellenar}> Rellenar db</button> */}
      {items.length === 0 ? (
        <CircularProgress />
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