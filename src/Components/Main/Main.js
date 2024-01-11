import React from "react";
import About from "../About/About";
import Articale from "../Articales";
import Cliens from "../Cliens/Cliens";
import Contact from "../Contact/Contant";
// import Contant from "../Contact/Contant";
import CtaSection from "../CtaSection/CtaSection";
import Portfolio from "../Portfolio/Portfolio";
import Services from "../Services/Services";
import Skils from "../Skils/Skils";
import Team from "../Team/Team";
import SkillsNew from "../SkillsNew/SkillsNew";
import { Link } from "react-router-dom";
import TechnicalSkills from "../TechnicalSkills/TechnicalSkills";
import Clutch from "../Clutch/Clutch";


const Main = () => {
  return (
    <main id="main">
      <About />
      <TechnicalSkills />
      <Clutch />
      <Services />
      <Articale />
      <CtaSection />
      <Portfolio />
      <Team />
      <Contact />
    </main>
  );
};

export default Main;
