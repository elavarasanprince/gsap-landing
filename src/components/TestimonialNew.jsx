import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Autoplay  } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// import Qt from '../assets/images/qt-text.svg';


const testimonials = [
  {
    message:
      "Sudhar is a maverick, a rare mix of being a good samaritan and a kind businessman who empowers many directly and indirectly to be happy and successful.",
    name: "VivianGomes",
    role: "Co-founder at HFR&D",
  },
  {
    message:
      "I have saved Sudhar’s number as Mr.Linkedin in my phone. He is someone who inspired me to take my personal brand seriously.",
    name: "architectssr",
    role: "founder at finteriors and dehub for architects",
  },
 
{
  message:
  "Whenever I want the best, I partner with the best. Partnering with Sudharsanan Ganapathy for my personal branding has made a significant difference.",
name: "ck kumaravel",
role: "Co-founder and CEO, Naturals Salons",
},
{
  message:
  "Sudharsanan is easily the best personal branding strategist in the country. His depth of knowledge towards business and content strategy is amazing.",
name: "ThangavelPuhal",
role: "CEO at DigiNadu",
},
{
  message:
  "Sudharsanan’s people skills, consistency and strategic thinking are things I admire about him. My personal brand got a drastic improvement because of him.",
name: "Nandhinipriya",
role: "Founder and CEO, Aarah Herbals",
},
{
  message:
  "When I started my new journey of Business Transformation Coach, I approached Sudharsanan for my personal branding. I had an excellent experience working with him and his team. He is just brilliant.",
name: "MalayDamania",
role: "Author and Business Transformation Coach",
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
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="2"
                        viewBox="0 0 50 2"
                        fill="none"
                      >
                        <path d="M0 1H50" stroke="currentColor" />
                      </svg> */}
                      {item.name}
                    </span>
                    <span className="text-muted">{item.role}</span>
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
