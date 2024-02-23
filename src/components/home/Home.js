import "./HomeStyles.css"

import About from "../about/About";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Products from "../products/Products";
import Testimonials from "../testimonials/Testimonials";

function Home(){
    return(
        <>
            <Navbar/>
            <About/>
            <Products/>
            <Testimonials/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default Home;