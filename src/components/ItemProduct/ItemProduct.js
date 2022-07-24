import ItemCount from "../ItemCount/ItemCount";
import "./ItemProduct.css";

const ItemProduct = ({ data }) => {
  const { title, image, price, stock } = data;

  return (
    <div className="item-product">
      <img src={`/assets/${image}`} alt="Producto" />
      <p>{title}</p>
      <span>$ {price}</span>
      <p>Stock: {stock}</p>
      <ItemCount stock={stock}/>
      <button>Comprar</button>
    </div>
  );
};

export default ItemProduct;
