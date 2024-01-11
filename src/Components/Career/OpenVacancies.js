import React from "react";

const OpenVacancies = () => {
  return (
    <>
      <section className="open__vacancies">
        <div className="container">
          <h1>Open vacancies</h1>
          <div className="inner--vacancies">
            <div className="vaccncies-flex">
              <div className="vacan_first-itm">
                <a>React js developer</a>
                <span>
                  <img src="assets/img/career/clock.png" />
                  Dec 28, 2022
                </span>
              </div>
              <div className="vacan_secnd-itm">
                <h3>Description</h3>
                <p>
                  MettleSol is hiring "React Js Developer" in Lahore, Pakistan.
                  The candidate should have at least 2 years of experice. Job
                  Description: - Researching organiza...
                </p>
              </div>
              <div className="vacan_third-itm">{/* <a>Apply Now</a> */}</div>
            </div>
            <div className="vaccncies-flex">
              <div className="vacan_first-itm">
                <a>Business developer intern</a>
                <span>
                  <img src="assets/img/career/clock.png" />
                  Dec 28, 2023
                </span>
              </div>
              <div className="vacan_secnd-itm">
                <h3>Description</h3>
                <p>
                  MettleSol is hiring "Business Developer Intern" in Lahore,
                  Pakistan. The candidate should be fluent in English as well as
                  familiar with latest tectnologies. Job Description: -
                  Researching organiza...
                </p>
              </div>
              <div className="vacan_third-itm"></div>
            </div>
            <div className="vaccncies-flex">
              <div className="vacan_first-itm">
                <a>Social media expert</a>
                <span>
                  <img src="assets/img/career/clock.png" />
                  Dec 28, 2022
                </span>
              </div>
              <div className="vacan_secnd-itm">
                <h3>Description</h3>
                <p>
                  MettleSol is hiring "Social Media Expert" in Lahore, Pakistan.
                  The candidate should have at least 1 year of experice. Job
                  Description: - Researching organiza...
                </p>
              </div>
              <div className="vacan_third-itm"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OpenVacancies;
