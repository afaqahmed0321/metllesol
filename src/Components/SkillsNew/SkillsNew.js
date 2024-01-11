import React from "react";

const SkillsNew = () => {
  return (
    <>
      <section className="main__skills">
        <div className="container">
          <h1>We Deal In</h1>
          <div className="skills__flex">
            <div className="skils__itme">
              <img src="assets/img/skills/web-development.png" />
              <h3>Web Development</h3>
              <p>
                We specialize in developing end-to-end solutions, with our
                specialists available to assist you at every stage, from product
                conception through maintenance and support.
              </p>
              <a href="/">Learn More</a>
            </div>
            <div className="skils__itme">
              <img src="assets/img/skills/mobile-app.png" />
              <h3>Mobile Development</h3>
              <p>
                Our experts make suggestions to help you improve your
                development approach, decrease procedural churn, and improve
                your product or technology ecosystem.
              </p>
              <a href="/">Learn More</a>
            </div>
            <div className="skils__itme">
              <img src="assets/img/skills/ux.png" />
              <h3>UI UX Design</h3>
              <p>
                We create cutting-edge user interfaces that provide outstanding
                outcomes. We help your business to reach its full digital
                potential.
              </p>
              <a href="/">Learn More</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsNew;
