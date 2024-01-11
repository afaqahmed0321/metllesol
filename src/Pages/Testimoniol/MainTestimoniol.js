import React from "react";

import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ClientLove from "../../Components/Testimoniol/ClientLove";
import ClientTestimoniol from "../../Components/Testimoniol/ClientTestimoniol";
import TestimoniolBanner from "../../Components/Testimoniol/TestimoniolBanner";
import TestimoniolSlider from "../../Components/Testimoniol/TestimoniolSlider";

const MainTestimoniol = () => {
  return (
    <>
      <Header />
      <TestimoniolBanner />
      <ClientLove />
      <ClientTestimoniol />
      <TestimoniolSlider />

      <Footer />
    </>
  );
};

export default MainTestimoniol;
