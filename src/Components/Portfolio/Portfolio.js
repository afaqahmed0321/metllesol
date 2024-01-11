import React from "react";
const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio ">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Portfolio</h2>
          <h4>We have done a lot of work, Let’s Check some from here</h4>
          <p>
            All organizations must adapt their markets from traditional to
            digitalized approaches as a result of the market's digitalization.
            As a provider of software solutions, we provide you a website that
            serves as your digitalized marketplace, allowing you to connect with
            customers all across the world.
          </p>
        </div>
        <ul
          id="portfolio-flters"
          className="d-flex justify-content-center"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <li data-filter="*" className="filter-active">
            All
          </li>
          <li data-filter=".filter-app">WEB</li>
          <li data-filter=".filter-card">DESIGN</li>
          <li data-filter=".filter-web">App</li>
        </ul>
        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-img">
              <img
                src="assets/img/portfolio/cultural_engagment.webp"
                className="img-fluid"
                id="img-height"
                alt=""
              />
            </div>
            <div className="portfolio-info">
              <h4>Culturalengagment</h4>
              <p>Culturalengagment</p>
              <a
                href="https://www.culturalengagement.sayone.team/"
                data-gallery="assets/img/portfolio/cultural_engagment.webp"
                className="portfolio-lightbox preview-link"
              >
                <i className="bx bx-link" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-img">
              <img
                src="assets/img/pro/wellness_winners_test.webp"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="portfolio-info">
              <h4>Wellness Winners</h4>
              <p>wellness_winners_test</p>
              <a
                href="https://wellness-winners.web.app/login"
                data-gallery="assets/img/pro/wellness_winners_test.webp"
                className="portfolio-lightbox preview-link"
              >
                <i className="bx bx-link" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-img">
              <img
                src="assets/img/portfolio/8.webp"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="portfolio-info">
              <h4>IVLOO</h4>
              <p>Ivloo</p>
              <a
                href="https://ivloo.com/"
                data-gallery="assets/img/portfolio/8.webp"
                className="portfolio-lightbox preview-link"
              >
                <i className="bx bx-link" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-img">
              <img
                src="assets/img/portfolio/promise_tech_test.webp"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="portfolio-info">
              <h4>7D2D SERVER HOSTING</h4>
              <p>7D2Dserverhosting</p>
              <a
                href="assets/img/portfolio/promise_tech_test.webp"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link"
              >
                <i className="bx bx-link" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-img">
              <img
                src="assets/img/pro/2.webp"
                className="img-fluid"
                height={"30px"}
                alt=""
              />
            </div>
            <div className="portfolio-info">
              <h4>ZO</h4>
              <p>ZO</p>
              <a
                href="https://zoorganized.com/"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link"
                title="Web 2"
              >
                <i className="bx bx-link" />
              </a>
              {/* <a className="details-link" title="More Details">
                <i className="bx bx-link" />
              </a> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-img">
              <img
                src="assets/img/pro/construction_builder.webp"
                className="img-fluid"
                height={"20px"}
                alt=""
              />
            </div>
            <div className="portfolio-info">
              <h4>Construction Builder</h4>
              <p>construction_builder</p>
              <a
                href="https://constructionbuilder.com/"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link"
              >
                <i className="bx bx-link" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-img">
              <img
                src="assets/img/pro/ted_test.webp"
                className="img-fluid"
                height={"50px"}
                alt=""
              />
            </div>
            <div className="portfolio-info">
              <h4>Ted</h4>
              <p>ted</p>

              <a className="details-link" href="https://ted-six.vercel.app/">
                <i className="bx bx-link" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6  portfolio-item filter-card">
            <div className="portfolio-img">
              <img
                src="assets/img/portfolio/7.webp"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="portfolio-info">
              <h4>APOLLO</h4>
              <p>apollo</p>
              <a
                href="assets/img/portfolio/portfolio-8.jpg"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link"
                title="Card 3"
              >
                <i className="bx bx-link" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
