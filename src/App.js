import AllProducts from "./components/all_products/AllProducts";
import Home from "./components/home/Home";

import { ProductProvider } from "./ProductContext";
import productData from "./data/ProductsData";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Knowmore from "./components/knowmore/Knowmore";
import ProductDetail from "./components/productDetail/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <ProductProvider value={productData}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/allproducts" element={<AllProducts />}></Route>
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/aboutus" element={<Knowmore />}></Route>
          </Routes>
        </ProductProvider>
      </Layout>
    </BrowserRouter>
    // <div className="App">
    //   <Navbar/>
    //   <About/>
    //   <Products/>
    //   <Testimonials/>
    //   <Contact/>
    //   <Footer/>
    //   {/* <AllProducts/> */}
    // </div>
  );
}

export default App;
