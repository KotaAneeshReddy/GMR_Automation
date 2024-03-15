import "./ProductDetail.css";
import { useState, useEffect } from "react";

import { useProductData } from "../../ProductContext";
import { useParams } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Contact from "../contact/Contact";
import Modal from "../modal/Modal";

const ProductDetail = () => {
  const productData = useProductData();

  const { id } = useParams();
  const product = productData.find((product) => product.id === parseInt(id));

  // Use state to track if the modal should be open for this particular product
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <section className="product_detail">
        <div className="container product_detail_container">
          <div className="container product_image">
            <img src={product.image_url} alt={product.title} />
          </div>
          <div className="container product_details">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <div className="product_cta">
              {/* Always display the button */}
              <button className="product_detail btn" onClick={handleOpenModal}>
                Get Quote
              </button>
            </div>
            {/* Render the Modal component based on the isModalOpen state */}
            {isModalOpen && (
              <Modal
                closeModal={handleCloseModal}
                productTitle={product.title}
              />
            )}
          </div>
        </div>
        <Contact />
        <Footer />
      </section>
    </>
  );
};

export default ProductDetail;
