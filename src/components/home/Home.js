import "./HomeStyles.css";

import About from "../about/About";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Products from "../products/Products";
import Testimonials from "../testimonials/Testimonials";
import Clients from "../clients/Clients";

function Home() {
  return (
    <>
      <Navbar />
      <About />
      <Products />
      <Clients />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
