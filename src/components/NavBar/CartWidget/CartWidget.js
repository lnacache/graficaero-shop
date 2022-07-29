import "./CartWidget.css";

function CartWidget() {
  return (
    <div>
      <div className="nav-item alfa">
        <a className="nav-link active" href="g">
          <i className="fa-solid fa-cart-shopping"></i>
          Carrito
        </a>
      </div>
    </div>
  );
}

export default CartWidget;
