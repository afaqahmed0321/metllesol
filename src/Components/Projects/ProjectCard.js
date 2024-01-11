import React from "react";

const ProjectCard = ({
  backGroundColor,
  category,
  projectName,
  projectLink,
  projectImage,
}) => {
  return (
    <>
      <div
        className="project-item"
        style={{ backgroundColor: backGroundColor }}
      >
        <div className="inner-projects">
          <h4>{category}</h4>
          <h1>{projectName}</h1>
          <div className="project_more">
            <a href={projectLink}>LEARN MORE</a>
          </div>
          <div className="project_img">
            <img src={projectImage} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
