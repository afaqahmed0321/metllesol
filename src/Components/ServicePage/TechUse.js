import React from "react";

const TechUse = () => {
  return (
    <>
      <section className="techuse">
        <div className="container">
          <div className="tech_main">
            <div className="tech_head">
              <h1>Technologies we use for web app development</h1>
              <p>
                We use proven JavaScript frameworks and other web application
                development tools that provide you with flexible, scalable, and
                secure solutions.
              </p>
            </div>
            <div className="tech__flex">
              <div className="img_tech">
                <img src="../assets/img/skills/react.png" />
              </div>
              <div className="img_tech">
                <img src="../assets/img/skills/node.png" />
              </div>
              <div className="img_tech">
                <img src="../assets/img/skills/vue.png" />
              </div>
              <div className="img_tech">
                <img src="../assets/img/skills/nativ.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechUse;
