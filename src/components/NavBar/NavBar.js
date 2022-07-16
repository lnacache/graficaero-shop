import CartWidget from ".//CartWidget";
import Head from "./Head";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <Head />
      <div className="nav">
        <div className="wrapper">
          <div className="button">
            <div className="icon">
              <a href="g">
                <i className="fa-solid fa-users"></i>
              </a>
            </div>
            <span>Nosotros</span>
          </div>

          <div className="button">
            <div className="icon">
              <a href="g">
                <i className="fa-solid fa-briefcase"></i>
              </a>
            </div>
            <span>Portfolio</span>
          </div>

          <div className="button">
            <div className="icon">
              <a href="g">
                <i className="fa-solid fa-shop"></i>
              </a>
            </div>
            <span>Tienda</span>
          </div>

          <div className="button">
            <div className="icon">
              <a href="g">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
            <span>Contacto</span>
          </div>
          <CartWidget />
        </div>
      </div>
    </>
  )
}

export default NavBar;
