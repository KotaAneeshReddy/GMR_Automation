import "./FooterStyles.css";
import logoSvg from "../../assets/images/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer id="footer">
      <div className="top-footer">
        <div className="left-footer">
          <a href="#">
            <img id="footer_logo" src={logoSvg} alt="logo" />
          </a>
          <p>GMR Automation: Innovating Your Secure Future</p>
        </div>
        <div className="middle-footer">
          <ul className="permalinks">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/allproducts">Products</a>
            </li>
            <li>
              <a href="/aboutus">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="right-footer">
          <h3>Need Help?</h3>
          <article className="contact-info">
            <FontAwesomeIcon icon={faPhone} />
            <h4>+91 9963526060</h4>
          </article>
          <article className="contact-info">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>info@gmrautomation.in</p>
          </article>
          <article className="contact-info">
            <FontAwesomeIcon icon={faLocationDot} />
            <p>Office Address</p>
          </article>
        </div>
      </div>
      <div className="footer_copyright">
        <small>&copy; GMR Automation. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
