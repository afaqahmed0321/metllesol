import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import HeroCareer from "../Components/Career/HeroCareer";
import WhyJoin from "../Components/Career/WhyJoin";
import HiringProcess from "../Components/Career/HiringProcess";
import EmployeeBenefits from "../Components/Career/EmployeeBenefits";
import OpenVacancies from "../Components/Career/OpenVacancies";

const Career = () => {
  return (
    <>
      <Header />
      <HeroCareer />
      <WhyJoin />
      <HiringProcess />
      <EmployeeBenefits />
      <OpenVacancies />
      <Footer />
    </>
  );
};

export default Career;
