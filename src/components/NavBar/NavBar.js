function NavBar() {
  return (
    <nav className="navbar navbar-light navbar-expand-md py-3">
      <div className="container">
        <a
          className="navbar-brand d-flex align-items-center"
          href="www.graficaero.com"
        >
          <span className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon"></span>
          <img
            src="./logograficaero.png"
            width="180px"
            class="rounded float-start"
            alt=""
          ></img>
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
            <li className="nav-item">
              <a className="nav-link active" href="www.graficaero.com">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="www.graficaero.com">
                Tienda
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="www.graficaero.com">
                Nosotros
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="www.graficaero.com">
                Contacto
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="www.graficaero.com">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="www.graficaero.com">
                Carrito
              </a>
            </li>
          </ul>
          <button className="btn btn-primary" type="button">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
