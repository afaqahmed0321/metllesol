import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ProjectsAll from "../../Components/Projects/ProjectsAll";
import ProjectHero from "../../Components/Projects/ProjectHero";

const Projects = () => {
  return (
    <>
      <Header />
      <ProjectHero />
      <ProjectsAll />
      <Footer />
    </>
  );
};

export default Projects;
