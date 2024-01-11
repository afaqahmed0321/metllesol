import React from "react";

const HelpYouIn = () => {
  return (
    <>
      <section className="industries_serve">
        <div className="container">
          <div className="industries_main">
            <div className="serve_head">
              <h1>We Will Help You!</h1>
              <p>Hard-to-fill tech positions are no longer an issue!</p>
            </div>
            <div className="serve__flex">
              <div className="serve_tem">
                <div className="img_serve">
                  <img src="../assets/img/ser1.png" />
                </div>
                <h3>Reduce your Time-to-Market</h3>
                <p>
                  From quality assurance strategy and project management to
                  boosting scope decomposition, we will help you launch your
                  product in the market faster.
                </p>
              </div>
              <div className="serve_tem">
                <div className="img_serve">
                  <img src="../assets/img/ser2.png" />
                </div>
                <h3>Save up to 50% expense</h3>
                <p>
                  Our scalable teams transform with your evolving needs,
                  ensuring that you only have the best available resources
                  suited to your project needs.
                </p>
              </div>
              <div className="serve_tem">
                <div className="img_serve">
                  <img src="../assets/img/ser3.png" />
                </div>
                <h3>Focus on your core business</h3>
                <p>
                  No matter whichever stage of SDLC you are currently on, we
                  will help you ramp up your processes so you can spend your
                  valuable time on core business.
                </p>
              </div>
              <div className="serve_tem">
                <div className="img_serve">
                  <img src="../assets/img/ser4.png" />
                </div>
                <h3>Overcome skill gap.</h3>
                <p>
                  We hire top 2% of the available talent to provide you with a
                  technically proficient team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HelpYouIn;
