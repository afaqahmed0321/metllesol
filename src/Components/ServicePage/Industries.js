import React from "react";

const Industries = () => {
  return (
    <>
      <section className="industries_serve">
        <div className="container">
          <div className="industries_main">
            <div className="serve_head">
              <h1>Industries we serve</h1>
              <p>
                Our team works with a wide array of business areas and industry
                verticals.
              </p>
            </div>
            <div className="serve__flex">
              <div className="serve_tem">
                <div className="img_serve">
                  <img src="../assets/img/ser2.png" />
                </div>
                <h3>Travel</h3>
                <p>
                  Web solutions mean a lot for the travel industry. Hotels,
                  tourist spots, and review services need websites or web apps
                  for proper functioning. Our team of highly experienced web app
                  developers is ready to help.
                </p>
              </div>
              <div className="serve_tem">
                <div className="img_serve">
                  <img src="../assets/img/ser3.png" />
                </div>
                <h3>E-learning</h3>
                <p>
                  Online learning is a great opportunity for people to upgrade
                  their skill set. Web e-learning services surged in popularity
                  recently since a lot of people want to share their expertise
                  with others. That’s why application development becomes more
                  wide-spread in e-learning.
                </p>
              </div>
              <div className="serve_tem">
                <div className="img_serve">
                  <img src="../assets/img/ser4.png" />
                </div>
                <h3>Retail & E-Commerce</h3>
                <p>
                  In the age of the Internet, people make an enormous amount of
                  purchases online. It’s not limited to clothes and food:
                  cosmetics, repair tools, household equipment, and various
                  kinds of services. Create your e-commerce web application with
                  Yellow.
                </p>
              </div>
              <div className="serve_tem">
                <div className="img_serve">
                  <img src="../assets/img/ser5.png" />
                </div>
                <h3>Health & Fitness</h3>
                <p>
                  Health and fitness industry is on the rise. The demand for
                  customizable and easily manageable web solutions is rising.
                  Yellow will help you develop and launch a niche-fit and
                  user-friendly web fitness application
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Industries;
