import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "swiper/css/pagination";

import "./hero.scss";


export default () => {
  return (
    <section className="hero">
      <div className="container">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="aside">
              <h5>LEANGROUP - тубы и этикетки</h5>
              <h1>Ламинатные тубы </h1>
              <p>
                Используются для производства зубных паст. Широко применяются в
                сегменте косметики, пищевой индустрии, парафармацевтике, бытовой
                химии и DIY (Do-it-Yourself).
              </p>
              <a href="#catlog">Каталог</a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aside">
              <h5>LEANGROUP - тубы и этикетки</h5>
              <h1>Ламинатные тубы </h1>
              <p>
                Используются для производства зубных паст. Широко применяются в
                сегменте косметики, пищевой индустрии, парафармацевтике, бытовой
                химии и DIY (Do-it-Yourself).
              </p>
              <a href="#catlog">Каталог</a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aside">
              <h5>LEANGROUP - тубы и этикетки</h5>
              <h1>Ламинатные тубы </h1>
              <p>
                Используются для производства зубных паст. Широко применяются в
                сегменте косметики, пищевой индустрии, парафармацевтике, бытовой
                химии и DIY (Do-it-Yourself).
              </p>
              <a href="#catlog">Каталог</a>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="social">
          <a href="https://www.instagram.com/zukhriddin0095/">
            <i class="fa-brands fa-vk"></i>
          </a>
          <a href="https://www.instagram.com/zukhriddin0095/">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/zukhriddin0095/">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
  );
};
