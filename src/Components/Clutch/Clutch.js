import React from "react";

const Clutch = () => {
  return (
    <>
      <section className="main__clutch">
        <div className="cluctuc_flex">
          <div className="clutch__detail">
            <div className="inner__paddig">
              <div className="custom-title">
                <h2>Looking for a development partner?</h2>
              </div>

              <p>
                To build successful software you need a development team who
                understands your business needs. Our experts will identify a
                custom solution to fit your idea, timeline, and budget, then
                design and build the application and help you test it with real
                users. As a result, you will gain a modern digital product loved
                by users that benefits your business.
              </p>
              <div className="buttonss">
                <a>Let's start our journey today!</a>
              </div>
            </div>
          </div>
          <div className="clutch__logo">
            <img src="assets/img/clutch.webp" />

            <div className="reviewsda">
              <span>4.5</span>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>

              <i className="fa fa-star-half"></i>
            </div>
            <div className="readmore">
              <a href="https://clutch.co/profile/mettlesol?utm_source=widget&utm_medium=1&utm_campaign=widget&utm_content=logo#summary">
                Read reviews <i className="fa fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clutch;
