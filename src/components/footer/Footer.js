import "./FooterStyles.css";
import logoSvg from "../../assets/images/logo.png";

function Footer() {
  return (
    <footer id="footer">
      <a href="#">
        <img id="footer_logo" src={logoSvg} alt="logo" />
      </a>

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

      <div className="footer_copyright">
        <small>&copy; GMR Automation. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
