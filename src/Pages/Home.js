import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

import Main from "../Components/Main/Main";
import HeroMain from "../Components/HeroMain/HeroMain";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroMain />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
