import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./ContactStyles.css";

import "leaflet/dist/leaflet.css";
import L from "leaflet";

function Contact() {
  const [formState, setFormState] = useState({});
  const form = useRef();

  const YOUR_LATITUDE = 17.54191601161015;
  const YOUR_LONGITUDE = 78.3659428381569;

  useEffect(() => {
    if (!document.getElementById("map")._leaflet_id) {
      // Initialize map
      const map = L.map("map", {
        scrollWheelZoom: false,
        dragging: false, // Disable dragging
        zoomControl: false, // Disable zoom control
      }).setView([YOUR_LATITUDE, YOUR_LONGITUDE], 13);

      // const map = L.map("map").setView([YOUR_LATITUDE, YOUR_LONGITUDE], 13);

      // Add tile layer
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Add a marker for the office location
      const marker = L.marker([YOUR_LATITUDE, YOUR_LONGITUDE])
        .addTo(map)
        .bindPopup("Your Office Location")
        .openPopup();

      // Add click event listener to the marker
      marker.on("click", () => {
        // Redirect to Google Maps
        window.open(
          `https://www.google.com/maps/search/?api=1&query=${YOUR_LATITUDE},${YOUR_LONGITUDE}`,
          "_blank"
        );
      });
    }
  }, []); // Empty dependency array to run effect only once

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_urfnpa8", "template_8bywttq", form.current, {
        publicKey: "W_tnbvN7buJU0V13l",
      })
      .then(
        () => {
          alert("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const changeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const config = {
      // SecureToken: '70d9e60a-af6c-4c44-a9f3-c23553ac26de',
      // // SecureToken:'0e61bd6d-152f-4651-9b42-c0499c29e58f',
      // To : 'kotaaneeshreddy@gmail.com',
      // From : formState.email,
      // Subject : "Regarding GMR Automation",
      // Body : `Name:${formState.name} Email:${formState.email} PhoneNumber:${formState.number} Message:${formState.message}`

      Host: "smtp.elasticemail.com",
      Username: "kotaaneeshreddy@gmail.com",
      Password: "9A9F3EDB6AAB3B54897B7A4C10F1BC3B8DAB",
      To: "kotaaneeshreddy143@gmail.com",
      From: "kotaaneeshreddy@gmail.com",
      Subject: "This is the subject",
      Body: "And this is the body",
    };
    if (window.Email) {
      window.Email.send(config).then(() => {
        alert("Email Sent Succesfully");
      });
    }
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className="container location-contact-container">
        {/* <div className="container location-container">
          <iframe
            title="Office Location"
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: 0 }}
            src={`https://www.google.com/maps/embed/v1/place?q=YOUR_LATITUDE,YOUR_LONGITUDE&key=YOUR_GOOGLE_MAPS_API_KEY`}
            allowFullScreen
          ></iframe>
        </div> */}

        <div
          id="map"
          className="container location-contact-container"
          style={{ height: "400px" }}
        ></div>
        <div className="container contact_container">
          <form action="" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              value={formState.name || ""}
              placeholder="Your Full Name"
              required
              onChange={changeHandler}
            />
            <input
              type="email"
              name="email"
              value={formState.email || ""}
              placeholder="Your Email"
              required
              onChange={changeHandler}
            />
            <input
              type="number"
              name="number"
              value={formState.number || ""}
              placeholder="Enter your number"
              required
              onChange={changeHandler}
            />
            <textarea
              name="message"
              value={formState.message || ""}
              rows="7"
              placeholder="Your Message"
              required
              onChange={changeHandler}
            ></textarea>
            <input
              id="form_btn"
              type="submit"
              value="Send Message"
              className="btn btn-primary"
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
