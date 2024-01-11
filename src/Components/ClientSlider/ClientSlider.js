import React from "react";

import Slider from "react-slick";

const ClientSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        <div className="slide_itm">
          <img src="assets/img/clients/ship.png" className="img-fluid" alt="" />
        </div>
        <div className="slide_itm">
          <img src="assets/img/clients/ted.png" className="img-fluid" alt="" />
        </div>
        <div className="slide_itm">
          <img
            src="assets/img/clients/squired.png"
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="slide_itm">
          <img src="assets/img/clients/dent.svg" className="img-fluid" alt="" />
        </div>

        <div className="slide_itm">
          <img
            src="assets/img/clients/zerooo.png"
            className="img-fluid"
            alt=""
          />
        </div>
      </Slider>
    </>
  );
};

export default ClientSlider;
