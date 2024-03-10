import React from "react";

import "./KnowmoreStyles.css";
import Company1 from "../../assets/images/Company1.jpg";
import Company2 from "../../assets/images/Company2.jpg";
import Person from "../../assets/images/Avatar1.png";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Contact from "../contact/Contact";

const Knowmore = () => {
  return (
    <>
      <Navbar />
      <section className="knowmore">
        <h5 className="">Get To Know</h5>
        <h2>ABOUT THE COMPANY</h2>
        <div className="container company_container">
          <div className="company">
            <div className="company_image">
              <img className="cam" src={Company1} alt="Company" />
            </div>
          </div>
          <div className="company_content">
            <p>
              Welcome to GMR Automation, where innovation meets security. With a
              passion for excellence and a commitment to safety, we specialize
              in providing entrance automation Access control and CCTV solutions
              for both residential and commercial properties.
            </p>
            <p>
              At GMR Automation, we understand the importance of protecting your
              spaces. That's why we offer a wide range of services, including
              the installation, maintenance, and repair of automated gates, boom
              barriers, flap barriers, Access control, CCTV systems, and fire
              safety solutions. Our team of highly skilled technicians combines
              expertise with state-of-the-art technology to deliver seamless
              solutions tailored to your unique needs.
            </p>
          </div>
        </div>

        <div className="container company_container">
          <div className="company_content">
            <h3>Our Mission</h3>
            <p>
              Our mission is to prioritize security and convenience with
              unmatched automation solutions, delivered through expertise and
              exceptional service.
            </p>
            <h3>Our Vision</h3>
            <p>
              Our vision is to lead the automation industry with innovative
              solutions, redefining security and convenience for homes and
              businesses worldwide.
            </p>
            <h3>Our Values</h3>
            <div className="values">
              <div>
                <li>
                  <ul>Quality Assurance</ul>
                  <ul>Customer Satisfaction</ul>
                  <ul>Innovation</ul>
                  <ul>Reliability</ul>
                </li>
              </div>
              <div>
                <li>
                  <ul>Safety</ul>
                  <ul>Continous Improvement</ul>
                  <ul>Integrity and Honesty</ul>
                </li>
              </div>
            </div>
          </div>
          <div className="company">
            <div className="company_image">
              <img
                id="second-image"
                className="cam"
                src={Company2}
                alt="Company"
              />
            </div>
          </div>
        </div>

        <div className="team">
          <h2>OUR TEAM</h2>
          <div className="container team_container">
            <div className="person">
              <div className="person_image">
                <img src={Person} alt="Person1.jpg"></img>
              </div>
              <div className="person_info">
                <h3>Mallikarjun</h3>
                <h5>CEO & Founder</h5>
              </div>
            </div>
            <div className="person">
              <div className="person_image">
                <img src={Person} alt="Person1.jpg"></img>
              </div>
              <div className="person_info">
                <h3>Siddharth</h3>
                <h5>Senior Engineer</h5>
              </div>
            </div>
            <div className="person">
              <div className="person_image">
                <img src={Person} alt="Person1.jpg"></img>
              </div>
              <div className="person_info">
                <h3>Ajay</h3>
                <h5>Engineer</h5>
              </div>
            </div>
          </div>
        </div>
        <Contact />
        <Footer />
      </section>
    </>
  );
};

export default Knowmore;
