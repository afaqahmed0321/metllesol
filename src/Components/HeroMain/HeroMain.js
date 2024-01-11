import React from "react";
import ClientSlider from "../ClientSlider/ClientSlider";

const HeroMain = () => {
  return (
    <section className="hero__main" id="main_hero">
      <div className="main_hero-content">
        {/* <video
          poster=""
          className="videoTag"
          width="100%"
          height="100%"
          autoPlay
          loop
          muted
        >
          <source src="assets/video/child.mp4" type="video/mp4" />
        </video> */}
        <div className="videoTag">
          <img src="assets/img/hero.webp" />
        </div>
        <div className="banner__content-wrapper">
          <div className="bann_detls">
            <h1>Build experiences that create growth</h1>
            <p>
              Adding innovation to technological applications and helping custom
              build your needs. We are delivering software solutions beyond your
              presumptions
            </p>
          </div>
          <div className="client_imgs">
            <ClientSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroMain;
