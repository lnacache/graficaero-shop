import "./ItemListContainer.css";
import ItemProduct from "../ItemProduct/ItemProduct";

const ItemListContainer = () => {
  const product1 = {
    title: "Cajitas",
    price: 1000,
    image: "img/img1.jpg",
    stock: 13,
  };

  const product2 = {
    title: "Cojines",
    price: 2000,
    image: "img/img2.jpg",
    stock: 12,
  };

  const product3 = {
    title: "Copas",
    price: 3000,
    image: "img/img3.jpg",
    stock: 11,
  };

  const product4 = {
    title: "Toppers",
    price: 4000,
    image: "img/img4.jpg",
    stock: 10,
  };

  const product5 = {
    title: "Mini Toppers",
    price: 5000,
    image: "img/img5.jpg",
    stock: 9,
  };

  const product6 = {
    title: "Vinilo Decorativos",
    price: 6000,
    image: "img/img6.jpg",
    stock: 8,
  };

  const product7 = {
    title: "Cajitas",
    price: 7000,
    image: "img/img7.jpg",
    stock: 7,
  };

  const product8 = {
    title: "Cajitas",
    price: 8000,
    image: "img/img8.jpg",
    stock: 6,
  };

  const product9 = {
    title: "Toppers",
    price: 9000,
    image: "img/img9.jpg",
    stock: 5,
  };

  const product10 = {
    title: "Toppers",
    price: 10000,
    image: "img/img10.jpg",
    stock: 4,
  };

  const product11 = {
    title: "Cajitas",
    price: 11000,
    image: "img/img11.jpg",
    stock: 3,
  };

  const product12 = {
    title: "Toppers",
    price: 12000,
    image: "img/img12.jpg",
    stock: 2,
  };

  // useEffect( () => {

  // }, [])

  return (
    <div>
      <div>
        <h4 className="headline">
          <b>Últimos Productos</b>
        </h4>
      </div>
      <div className="list-products">
        <ItemProduct data={product1} />
        <ItemProduct data={product2} />
        <ItemProduct data={product3} />
        <ItemProduct data={product4} />
        <ItemProduct data={product5} />
        <ItemProduct data={product6} />
        <ItemProduct data={product7} />
        <ItemProduct data={product8} />
      </div>
      <div>
        <h4 className="headline">
          <b>Productos en Oferta</b>
        </h4>
      </div>
      <div className="list-products">
        <ItemProduct data={product9} />
        <ItemProduct data={product10} />
        <ItemProduct data={product11} />
        <ItemProduct data={product12} />
      </div>
    </div>
  );
};

export default ItemListContainer;
