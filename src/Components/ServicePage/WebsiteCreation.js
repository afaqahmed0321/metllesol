import React from "react";

const WebsiteCreation = () => {
  return (
    <>
      <section className="web__creation">
        <div className="container">
          <div className="heade_erv">
            <h1>Process Of Web Development</h1>
            <span className="line__bld"></span>
            <p>
              We help different businesses to build there online presence in
              digital era. We will create attractive, responsive and user
              friendly website related to your Business or Ecommerce store so
              that you can earn huge profit from it.
            </p>
          </div>
          <div className="levels_services">
            <h1></h1>
            <div className="level__flx">
              <div className="level_item">
                <img src="../assets/img/create/designs.svg" />
                <h3>Web Design</h3>
                <p>
                  Design is most important for any website. So we make creative
                  design which will attractive your buyers.
                </p>
              </div>
              <div className="level_item">
                <img src="../assets/img/create/webs.svg" />
                <h3>Website Development</h3>
                <p>We build your website in any framework of your choice.</p>
              </div>
              <div className="level_item">
                <img src="../assets/img/create/qasa.svg" />
                <h3>Quality Assurance</h3>
                <p>
                  We did QA for your website and give your error file so you can
                  resolve them to improve.
                </p>
              </div>
              <div className="level_item">
                <img src="../assets/img/create/lives.svg" />
                <h3>Get Live</h3>
                <p>
                  We will host your website on live so your website is visible
                  for all internet users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebsiteCreation;
