import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";

export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div className="swiper-slide">
          <img src="assets/img/portfolio/portfolio-1.jpg" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide">
          <img src="assets/img/portfolio/portfolio-2.jpg" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide">
          <img src="assets/img/portfolio/portfolio-3.jpg" alt="" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
