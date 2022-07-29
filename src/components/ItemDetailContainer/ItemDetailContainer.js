import "./ItemDetailContainer.css";
import { useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import products from "../../utils/productsmocks";

const ItemDetailContainer = () => {
  const [itemproduct, setItemproduct] = useState([]);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });

  getProducts
    .then((res) => {
      setItemproduct(res);
    })
    .catch((error) => {
      console.log("llamada fallada");
    })
    .finally(() => {});

  return (
    <div>
      <div className="list-item-detail">
        {itemproduct.map((products) => {
          return <ItemDetail key={products.id} detail={products} />;
        })}
      </div>
    </div>
  );
};

export default ItemDetailContainer;
