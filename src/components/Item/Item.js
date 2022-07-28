import "./Item.css";

const ItemDetail = ({ data }) => {
  const { title, image, price } = data;

  return (
    <div className="item-product">
      <img src={`/assets/${image}`} alt="Producto" />
      <p>{title}</p>
      <p>$ {price}</p>
      <button type="button" class="btn btn-primary">
        Detalles
      </button>
    </div>
  );
};

export default ItemDetail;
