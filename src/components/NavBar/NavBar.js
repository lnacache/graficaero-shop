import "./NavBar.css";
import CartWidget from "./CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav class="navbar navbar-light navbar-expand-md fixed-bottom back">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center" href="g">
          <img src="/assets/logoartebocono.png" width="120px" alt="Nav" />
        </a>
        <button
          data-bs-toggle="collapse"
          class="navbar-toggler"
          data-bs-target="#navcol-3"
        >
          <span class="visually-hidden">Toggle navigation</span>
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navcol-3">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item alfa">
              <a class="nav-link active" href="g">
                <i class="fa-solid fa-house"></i>
                Inicio
              </a>
            </li>
            <li class="nav-item alfa">
              <a class="nav-link active" href="g">
                <i class="fa-solid fa-store"></i>
                Tienda
              </a>
            </li>
            <li class="nav-item alfa">
              <a class="nav-link active" href="g">
                <i class="fa-solid fa-people-group"></i>
                Nosotros
              </a>
            </li>
            <li class="nav-item alfa">
              <a class="nav-link active" href="g">
                <i class="fa-solid fa-phone"></i>
                Contacto
              </a>
            </li>
            <li class="nav-item alfa">
              <a class="nav-link active" href="g">
                <i class="fa-solid fa-circle-question"></i>
                FAQ
              </a>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
