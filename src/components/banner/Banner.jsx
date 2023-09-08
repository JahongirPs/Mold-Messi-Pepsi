import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Banner.scss";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import svg from "../../assets/img/bannerimg.svg";
import svg2 from "../../assets/img/bannerimg2.svg";

const Banner = () => {
  return (
    <div className="Slider">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation={true}
        pagination={true}
        spaceBetween={20}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="mySwip"
      >
        <SwiperSlide className="mySpiw">
          <img src={svg2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="mySpiw">
          <img src={svg} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
