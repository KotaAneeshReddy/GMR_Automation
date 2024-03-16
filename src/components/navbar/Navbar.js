import "./NavbarStyles.css";
import logoSvg from "../../assets/images/logo.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation(); // Get current location
  const [clicked, setClicked] = useState(false);

  const handleClicked = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <nav>
        <a href="/">
          <img id="logo" src={logoSvg} alt="logo" />
        </a>

        <div>
          <ul id="navbar" className={clicked ? "active" : ""}>
            <li>
              <Link
                className={location.pathname === "/" ? "active" : ""}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={location.pathname === "/allproducts" ? "active" : ""}
                to="/allproducts"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                className={location.pathname === "/aboutus" ? "active" : ""}
                to="/aboutus"
              >
                About
              </Link>
            </li>
            <li>
              <a href="#contact" onClick={handleClicked}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div id="navbar-mobile" onClick={handleClicked}>
          <FontAwesomeIcon
            className="bar"
            icon={clicked ? faCircleXmark : faBars}
          />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
