import "./AboutStyles.css";

import cam from "../../assets/images/Cam.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleHalfStroke,
  faUsers,
  faDiagramProject,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="about">
      {/* <h5 className="">Get To Know</h5>
            <h2>About Us</h2> */}
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img className="cam" src={cam} alt="Camera" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FontAwesomeIcon
                className="about_icon"
                icon={faCircleHalfStroke}
              />
              <h5>Experience</h5>
              <small>10+ Years in Industry</small>
            </article>
            <article className="about_card">
              <FontAwesomeIcon icon={faUsers} className="about_icon" />
              <h5>Clients</h5>
              <small>250+ Happy Clients</small>
            </article>
            <article className="about_card">
              <FontAwesomeIcon icon={faDiagramProject} className="about_icon" />
              <h5>Projects</h5>
              <small>400+ Completed</small>
            </article>
          </div>

          <p>
            Welcome to GMR Automation. Your premier destination for
            comprehensive automation solutions. From automated gates and
            barriers to advanced CCTV systems and fire safety gadgets, we
            specialize in securing your spaces with cutting-edge technology and
            expert craftsmanship.
          </p>
          <Link to="/aboutus">
            <a href="#contact" className="btn btn-primary">
              Know More..
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
