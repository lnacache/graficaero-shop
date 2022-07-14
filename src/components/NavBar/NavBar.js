import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <img
        src="./logograficaero.png"
        width="180px"
        class="logo"
        alt=""
      ></img>

      <ul className="floating-nav">
        <li>
          <a href="g" data-text="Home" className="nav-link active">
            <i className="fas fa-home"></i>
          </a>
        </li>
        <li>
          <a href="g" data-text="About" className="nav-link">
            <i className="fas fa-user"></i>
          </a>
        </li>
        <li>
          <a href="g" data-text="Portfolio" className="nav-link">
            <i className="fas fa-suitcase"></i>
          </a>
        </li>
        <li>
          <a href="g" data-text="Contact" className="nav-link">
            <i className="fas fa-phone-alt"></i>
          </a>
        </li>
        <li>
          <a href="g" data-text="Services" className="nav-link">
            <i className="fas fa-tools"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
