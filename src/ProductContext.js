// ProductContext.js
import React, { createContext, useContext } from "react";

const ProductContext = createContext();

export const useProductData = () => useContext(ProductContext);

export const ProductProvider = ({ children, value }) => (
  <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
);
