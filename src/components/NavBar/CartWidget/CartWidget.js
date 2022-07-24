import "./CartWidget.css";

function CartWidget() {
  return (
    <div className="button">
      <div className="icon">
        <a href="#">
          <i class="fa-solid fa-cart-shopping"></i>
        </a>
      </div>
      <span>Carrito</span>
    </div>
  );
}

export default CartWidget;
