import About from "./components/about/About";
import AllProducts from "./components/all_products/AllProducts";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/Products";
import Testimonials from "./components/testimonials/Testimonials";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Knowmore from "./components/knowmore/Knowmore";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/allproducts" element={<AllProducts />}></Route>
          <Route path="/aboutus" element={<Knowmore />}></Route>
        </Routes>
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
