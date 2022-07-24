import "./NavBar.css";
import CartWidget from "./CartWidget/CartWidget";
import Head from "./Head/Head";


const NavBar = () => {
  return (
    <>
      <Head />
      <div className="nav">
        <div className="wrapper">
          <div className="button">
            <div className="icon">
              <a href="#">
                <i className="fa-solid fa-users"></i>
              </a>
            </div>
            <span>Nosotros</span>
          </div>

          <div className="button">
            <div className="icon">
              <a href="#">
                <i className="fa-solid fa-briefcase"></i>
              </a>
            </div>
            <span>Portfolio</span>
          </div>

          <div className="button">
            <div className="icon">
              <a href="#">
                <i className="fa-solid fa-shop"></i>
              </a>
            </div>
            <span>Tienda</span>
          </div>

          <div className="button">
            <div className="icon">
              <a href="#">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
            <span>Contacto</span>
          </div>
          <CartWidget />
        </div>
      </div>
    </>
  );
}

export default NavBar;
