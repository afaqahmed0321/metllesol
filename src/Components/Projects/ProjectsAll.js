import React from "react";


import ProjectCard from "./ProjectCard";

const ProjectsAll = () => {
  return (
    <>
      <section>
        <div className="project__head">
          <h3>PROJECTS</h3>
          <h1>
            Featured <b>Case Studies</b>
          </h1>
        </div>
        <div className="project-flex">
          <ProjectCard
            backGroundColor={"#F69425"}
            category={"NEWS"}
            projectName={"Culturalengagment"}
            projectImage="assets/img/portfolio/cultural_engagment.webp"
          />
          <ProjectCard
            backGroundColor={"#480ca8"}
            category={"TRANSPORT"}
            projectName={"APOLLO"}
            projectImage="assets/img/portfolio/7.webp"
          />
          <ProjectCard
            backGroundColor={"#19B590"}
            category={"EDUCATION"}
            projectName={"TED"}
            projectImage="assets/img/pro/ted.png"
          />

          <ProjectCard
            backGroundColor={"#B01944"}
            category={"ECOMMERCE"}
            projectName={"IVLOO"}
            projectImage="assets/img/portfolio/8.webp"
          />
          <ProjectCard
            backGroundColor={"#395065"}
            category={"TRAVELLING"}
            projectName={"ZO"}
            projectImage="assets/img/pro/2.webp"
          />
          <ProjectCard
            backGroundColor={"#1D1C1A"}
            category={"TECH"}
            projectName={"7D2D SERVER HOSTING"}
            projectImage="assets/img/portfolio/promise_tech_test.webp"
          />
          <ProjectCard
            backGroundColor={"#28B774"}
            category={"HEALTH"}
            projectName={"Wellness Winners"}
            projectImage="assets/img/pro/well.png"
          />
        </div>
      </section>
    </>
  );
};

export default ProjectsAll;
