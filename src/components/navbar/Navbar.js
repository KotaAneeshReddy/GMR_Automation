import "./NavbarStyles.css";
import logoSvg from "../../assets/images/logo.png";

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

function Navbar() {
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
          <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
            <li>
              <a className="active" href="/">
                Home
              </a>
            </li>
            <li>
              <Link to="/allproducts">
                <a href="#products">Products</a>
              </Link>
            </li>
            <li>
              <Link to="/aboutus">
                {" "}
                <a href="#Projects">About</a>
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
          {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
          <FontAwesomeIcon
            className="bar"
            icon={clicked ? faCircleXmark : faBars}
          />
          {/* <FontAwesomeIcon className="bar" icon={faCircleXmark} /> */}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
