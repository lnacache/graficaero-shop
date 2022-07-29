import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ detail }) => {
  const { title, category, price, description, image, stock } = detail;

  return (
    <div className="item-product">
      <div>
        <img src={`/assets/${image}`} alt="Producto" />
      </div>
      <div>
        <h2 className="titulo">{title}</h2>
        <span className="categoria"> Categoria: {category}</span>
        <p className="descripcion">
          <>{description}</>
        </p>
        <h4 className="precio">$ {price}</h4>
        <i className="fa-solid fa-check"></i>
        <span>
          <b> {stock} disponibles</b>{" "}
        </span>
        <div className="contador">
          <ItemCount stock={stock} />
        </div>
        <button type="button" className="btn btn-primary">
          Agregar a Carrito
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
