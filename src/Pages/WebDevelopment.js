import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import BenefitOFWeb from "../Components/ServicePage/BenefitOFWeb";
import Industries from "../Components/ServicePage/Industries";
import ServiceHero from "../Components/ServicePage/ServiceHero";
import ServiceMain from "../Components/ServicePage/ServiceMain";
import TechUse from "../Components/ServicePage/TechUse";
import WebsiteCreation from "../Components/ServicePage/WebsiteCreation";

const WebDevelopment = () => {
  return (
    <>
      <Header />
      <ServiceMain />
      <WebsiteCreation />
      <ServiceHero />
      <BenefitOFWeb />
      <Industries />
      <TechUse />
      <Footer />
    </>
  );
};

export default WebDevelopment;
