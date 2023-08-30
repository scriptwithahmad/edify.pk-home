import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <div className="HeroMainPage">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          modules={[EffectFade, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="slide slide-01">
            <div className="slideContent">
              <span>Educal University</span>
              <h2>
                Together We'll <br /> Explore New Things
              </h2>
              <p>
                We believe everyone should have the opportunity to create
                progress through technolog.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide slide-02">
            <div className="slideContent">
              <span>Educal University</span>
              <h2 className="slider__title">
                Institution of <br /> Higher Education
              </h2>
              <p>
                We believe everyone should have the opportunity to create
                progress through technolog.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="heroInnerParts">
          <h2>hy</h2>
        </div>
      </div>
    </>
  );
}
