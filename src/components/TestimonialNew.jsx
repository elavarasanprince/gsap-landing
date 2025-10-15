import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Autoplay  } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// import Qt from '../assets/images/qt-text.svg';


const testimonials = [
  {
    message:
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime place at facere possimus, omnis voluptas assumenda est, omnis dolor repellendus!Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime place at facere possimus, omnis voluptas assumenda est, omnis dolor repellendus!",
    name: "Sarah Thompson",
  },
  {
    message:
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime place at facere possimus, omnis voluptas assumenda est, omnis dolor repellendus!",
    name: "Michael Smith",
  },
];

const TestimonialSection = () => {
  return (
    <section className="testimonial-area-three">
      <div className="container container-semi-large">
        

        <div className="row row-top-padding gy-4 justify-content-between">
          <div className="col-lg-3">
            <div className="qt-img-wrap position-relative">
              {/* <img
                className="qt-sp"
                src="./images/round.svg"
                alt="quote"
              /> */}
                <div className="section-title text-center text-lg-start">
              <span className="d-inline-block text_black position-relative">
                TESTIMONIALS
              </span>
              <h2 className="h2 mt-2 title-anim">What our clients say</h2>
            </div>
              <img
                className="position-absolute top-50 start-50 translate-middle"
                src="./images/qt.svg"
                alt="quote text"
              />
            </div>
          </div>

          <div className="col-lg-8">
            <Swiper
              modules={[Navigation,Autoplay]}
              navigation={{
                nextEl: ".testimonial-two-button-next",
                prevEl: ".testimonial-two-button-prev",
              }}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              speed={800}
              className="testimonial-two-slide"
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-two-info testimonial-three">
                    <p>“{item.message}”</p>
                    <span className="designation text_black d-flex align-items-center gap-3 mt-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="2"
                        viewBox="0 0 50 2"
                        fill="none"
                      >
                        <path d="M0 1H50" stroke="currentColor" />
                      </svg>
                      {item.name}
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="slider-button-wrap-arrow arrow-two color-orange mt-lg-5 mt-4 d-flex align-items-center">
              <div className="testimonial-two-button-prev slide-btn black-button slide-btn-prev">
                <svg
                  width="9"
                  height="16"
                  viewBox="0 0 9 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 1L1 8L8 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="testimonial-two-button-next slide-btn black-button slide-btn-next ms-3">
                <svg
                  width="9"
                  height="16"
                  viewBox="0 0 9 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L8 8L1 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
