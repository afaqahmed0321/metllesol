import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TestimoniolSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="testimoniol-slider">
        <div className="container">
          <div className="testimoniols--main">
            <Slider {...settings}>
              <div className="testimoniol-item">
                <div className="testimoniol-inner-flex">
                  <div className="testimoniol-logo">
                    <img src="https://www.i2cinc.com/wp-content/uploads/2022/06/Bond-testi.png" />
                  </div>
                  <div className="testimoniol-txt">
                    <p>
                      The reason why we chose MettleSol is its track record,
                      reputation in serving customers not only in the U.S. but
                      all around the world, as well as reliability and
                      redundancy to both Bond and its customers.
                    </p>
                    <div className="test-feds">
                      <div className="testi-clnt">
                        <img src="https://www.i2cinc.com/wp-content/uploads/2022/06/meg-nakamura.png" />
                      </div>
                      <div className="test-fed">
                        <h3>Roy Ng</h3>
                        <span>Co-founder & CEO</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="testimoniol-item">
                <div className="testimoniol-inner-flex">
                  <div className="testimoniol-logo">
                    <img src="https://www.i2cinc.com/wp-content/uploads/2022/06/Bond-testi.png" />
                  </div>
                  <div className="testimoniol-txt">
                    <p>
                      The reason why we chose MettleSol is its track record,
                      reputation in serving customers not only in the U.S. but
                      around the world, as well as reliability and redundancy to
                      both Bond and its customers.
                    </p>
                    <div className="test-feds">
                      <div className="testi-clnt">
                        <img src="https://www.i2cinc.com/wp-content/uploads/2022/06/meg-nakamura.png" />
                      </div>
                      <div className="test-fed">
                        <h3>Roy Ng</h3>
                        <span>Co-founder & CEO</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimoniol-item">
                <div className="testimoniol-inner-flex">
                  <div className="testimoniol-logo">
                    <img src="https://www.i2cinc.com/wp-content/uploads/2022/06/Bond-testi.png" />
                  </div>
                  <div className="testimoniol-txt">
                    <p>
                      The reason why we chose MettleSol is its track record,
                      reputation in serving customers not only in the U.S. but
                      around the world, as well as reliability and redundancy to
                      both Bond and its customers.
                    </p>
                    <div className="test-feds">
                      <div className="testi-clnt">
                        <img src="https://www.i2cinc.com/wp-content/uploads/2022/06/meg-nakamura.png" />
                      </div>
                      <div className="test-fed">
                        <h3>Roy Ng</h3>
                        <span>Co-founder & CEO</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimoniol-item">
                <div className="testimoniol-inner-flex">
                  <div className="testimoniol-logo">
                    <img src="https://www.i2cinc.com/wp-content/uploads/2022/06/Bond-testi.png" />
                  </div>
                  <div className="testimoniol-txt">
                    <p>
                      The reason why we chose MettleSol is its track record,
                      reputation in serving customers not only in the U.S. but
                      around the world, as well as reliability and redundancy to
                      both Bond and its customers.
                    </p>
                    <div className="test-feds">
                      <div className="testi-clnt">
                        <img src="https://www.i2cinc.com/wp-content/uploads/2022/06/meg-nakamura.png" />
                      </div>
                      <div className="test-fed">
                        <h3>Roy Ng</h3>
                        <span>Co-founder & CEO</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          <div className="slider-contact">
            <h1>Ready to learn how we can make your vision a reality?</h1>
            <a href="#">CONTACT US</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimoniolSlider;
