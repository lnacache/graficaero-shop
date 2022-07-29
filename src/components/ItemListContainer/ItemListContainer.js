import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import products from "../../utils/productsmocks";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [listProducts, setListProducts] = useState([]);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });

  useEffect(() => {
    getProducts
      .then((res) => {
        setListProducts(res);
      })
      .catch((error) => {
        console.log("falla en la llamada");
      })
      .finally(() => {});
  }, []);

  return (
    <div>
      <div>
        <h4 className="headline">
          <b>Últimos Productos</b>
        </h4>
      </div>
      <div className="list-products">
        <ItemList dataProducts={listProducts} />
      </div>
    </div>
  );
};

export default ItemListContainer;
