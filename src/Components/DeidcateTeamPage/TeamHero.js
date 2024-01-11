import React from "react";

const TeamHero = () => {
  return (
    <>
      <section className="team_hero">
        <div className="container">
          <div className="teaam_flex">
            <div className="team_s_itm">
              <div className="hero_main_tem">
                <div class="page-titles">Dedicated teams</div>
                <h1>Your Search For</h1>
                <h1 className="light_clr">Top Tech Talent</h1>
                <h1>Ends Here</h1>
                <p>
                  <span className="light_clr">Tech leaders love us </span>T- Why
                  shouldn’t they when they get top-notch talent from us?
                </p>
                <a>Become Our client</a>
              </div>
            </div>
            <div className="team_s_itm">
              <div className="her_img">
                <img src="assets/img/tem.jpeg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamHero;
