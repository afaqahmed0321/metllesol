import React from "react";

function index({ sectionHeading, img, content, imgclasses }) {
  return (
    <>
      <section id="skills" className="skills">
        <div className="section-title">
          <h2>{sectionHeading}</h2>
        </div>
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div
              className="col-lg-6 d-flex align-items-center"
              data-aos="fade-right"
              data-aos-delay={100}
            >
              <img
                src={img}
                className={imgclasses ? imgclasses : `img-fluid animated" `}
                alt=""
                height={10}
              />
            </div>
            <div
              className="col-lg-6 pt-4 pt-lg-0 content pt-2"
              data-aos="fade-left"
              data-aos-delay={100}
            >
              <p
                className="fst-italic pt-2 "
                style={{ whiteSpace: "pre-line" }}
              >
                {content}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default index;
