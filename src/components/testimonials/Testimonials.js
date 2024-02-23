import "./TestimonialStyles.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation, Scrollbar, A11y } from "swiper/modules";

import avatar1 from "../../assets/images/Avatar1.png";

function Testimonials() {
  return (
    <section id="testimonials">
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials_container mySwiper"
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("Slide Change")}
      >
        {/* Generate this article dynamically using array */}
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={avatar1} alt="client1"></img>
          </div>
          <h5 className="client_name">Aneesh</h5>
          <small className="client_review">
            Thrilled with my New Automated Gate with modren and sleek design!
            The installation process was smooth, and now I feel much safer at
            home. Thank you for the exceptional service!{" "}
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={avatar1} alt="client1"></img>
          </div>
          <h5 className="client_name">Harsha</h5>
          <small className="client_review">
            Incredibly impressed with the CCTV system installation. The clarity
            and coverage exceed my expectations, providing unmatched peace of
            mind. Professional installation and excellent customer service
            throughout the process.{" "}
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={avatar1} alt="client1"></img>
          </div>
          <h5 className="client_name">Hemanth</h5>
          <small className="client_review">
            Absolutely thrilled with my new automated gate! It adds both
            security and sophistication to my property. Flawless installation
            and exceptional service from start to finish. Highly recommend!{" "}
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={avatar1} alt="client1"></img>
          </div>
          <h5 className="client_name">Ashok</h5>
          <small className="client_review">
            Outstanding Automated Gate Installation! The team was prompt,
            professional, and went above and beyond to ensure everything was
            installed perfectly. Highly recommend their services!{" "}
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Testimonials;
