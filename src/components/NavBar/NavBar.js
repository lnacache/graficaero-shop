import "./NavBar.css";
import CartWidget from "./CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light navbar-expand-md fixed-bottom back">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="g">
          <img src="/assets/logoartebocono.png" width="120px" alt="Nav" />
        </a>
        <button
          data-bs-toggle="collapse"
          className="navbar-toggler"
          data-bs-target="#navcol-3"
        >
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navcol-3">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item alfa">
              <a className="nav-link active" href="g">
                <i className="fa-solid fa-house"></i>
                Inicio
              </a>
            </li>
            <li className="nav-item alfa">
              <a className="nav-link active" href="g">
                <i className="fa-solid fa-store"></i>
                Tienda
              </a>
            </li>
            <li className="nav-item alfa">
              <a className="nav-link active" href="g">
                <i className="fa-solid fa-people-group"></i>
                Nosotros
              </a>
            </li>
            <li className="nav-item alfa">
              <a className="nav-link active" href="g">
                <i className="fa-solid fa-phone"></i>
                Contacto
              </a>
            </li>
            <li className="nav-item alfa">
              <a className="nav-link active" href="g">
                <i className="fa-solid fa-circle-question"></i>
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
