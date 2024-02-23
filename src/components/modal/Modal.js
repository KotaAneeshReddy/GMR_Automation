import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ModalStyles.css";

function Modal({ closeModal, productTitle }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_urfnpa8", "template_8bywttq", form.current, {
        publicKey: "W_tnbvN7buJU0V13l",
      })
      .then(
        () => {
          alert("SUCCESS...!");
          closeModal(); // Close modal after successful submission
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-close-button">
          <button
            onClick={() => {
              closeModal(false);
            }}
          >
            {" "}
            X{" "}
          </button>
        </div>
        <h2>Get Quote for {productTitle}</h2>
        <form action="" ref={form} onSubmit={sendEmail}>
          <input type="text" name="product" value={productTitle} readOnly />
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <input
            type="number"
            name="number"
            placeholder="Enter your number"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
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
  );
}

export default Modal;
