import { useState } from "react";
import "./AllProductsStyles.css";
import { Link } from "react-router-dom";

import productData from "../../data/ProductsData";
import Carousel from "../carousel/Carousel";
import Testimonials from "../testimonials/Testimonials";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import Modal from "../modal/Modal";
import Navbar from "../navbar/Navbar.js";

const data1 = productData;

function AllProducts() {
  const [data, setData] = useState([...data1]); // Assuming you have data array containing product information

  const handleOpenModal = (productId) => {
    setData((prevData) =>
      prevData.map((product) => {
        if (product.id === productId) {
          return { ...product, openModal: true };
        }
        return product;
      })
    );
  };

  const handleCloseModal = (productId) => {
    setData((prevData) =>
      prevData.map((product) => {
        if (product.id === productId) {
          return { ...product, openModal: false };
        }
        return product;
      })
    );
  };

  return (
    <>
      <Navbar />
      <Carousel />
      <section id="products">
        <h2>All Products</h2>
        <div className="container products_container">
          {data.map((product) => (
            <article key={product.id} className="product">
              {/* <div className="product_image">
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "1.5rem",
                  }}
                  src={product.image_url}
                  alt={product.title}
                />
              </div>
              <h3>{product.title}</h3> */}
              <Link to={`/product/${product.id}`} className="product-link">
                <div className="product_image">
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "1.5rem",
                    }}
                    src={product.image_url}
                    alt={product.title}
                  />
                </div>
                <h3>{product.title}</h3>
              </Link>
              <div className="product_cta">
                <button
                  className="btn"
                  onClick={() => handleOpenModal(product.id)}
                >
                  Get Quote
                </button>
              </div>
              {product.openModal && (
                <Modal
                  closeModal={() => handleCloseModal(product.id)}
                  productTitle={product.title}
                />
              )}
            </article>
          ))}
        </div>
      </section>
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default AllProducts;
