import { useState } from "react";
import { Link } from "react-router-dom";

import "./ProductsStyles.css";
import Modal from "../modal/Modal";

import productData from "../../data/ThreeProductData";

const data1 = productData;

function Products() {
  const [data, setData] = useState([...data1]);

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
    <section id="products">
      <h2>Products</h2>
      <div className="container products_container">
        {data.map((product) => (
          <article key={product.id} className="product">
            <div className="product_image">
              <img src={product.image_url} alt={product.title} />
            </div>
            <h3>{product.title}</h3>
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
      <Link to="/allproducts">
        <a
          href="#allproducts"
          id="all_products_btn"
          className="btn btn-primary"
        >
          View All Products
        </a>
      </Link>
    </section>
  );
}

export default Products;