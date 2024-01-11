import React from "react";
import NavigationDashboard from "../Components/Dashboard/NavigationDashboard";
import RichTextEditor from "../Components/Dashboard/RichTextEditor";
import InputField from "../Components/Dashboard/InputField";
import MobileNavDash from "../Components/Dashboard/MobileNavDash";

const JobDashboard = () => {
  return (
    <>
      <section className="admin__dashboard">
        <div className="container-fluid">
          <div className="mobile__version">
            <MobileNavDash />
          </div>
          <div className="tab__flex">
            <div className="dash_navigation">
              <NavigationDashboard />
            </div>
            <div className="dash_content">
              <div className="content-container">
                <div className="dashboard__contnet">
                  <div className="job-form_contnet">
                    <form>
                      <div className="form__container">
                        <h1>Job Portal</h1>
                        <p>
                          Here you can Post, Edit, Delete and View the Job Post.
                        </p>
                        <div className="field__flex">
                          <InputField
                            label="Job Title"
                            type="text"
                            placeholderText="Enter Job Title"
                            name="job"
                          />
                          <InputField
                            label="Job Category"
                            type="text"
                            placeholderText="Enter Job Category"
                            name="category"
                          />
                        </div>
                        <div className="job-dtls">
                          <label htmlFor="responsible">
                            Enter Job Responsibilities
                          </label>

                          <RichTextEditor richtextPlaceholder="" />
                        </div>
                        <div className="job__sbmt">
                          <button>Submit</button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="job-list_action">
                    <h1>Job You Posted</h1>
                    <div className="inner--vacancies">
                      <div className="vaccncies-flex">
                        <div className="vacan_first-itm">
                          <a>React Js Developer</a>
                          <span>
                            <img src="assets/img/career/clock.png" />
                            Dec 28, 2022
                          </span>
                        </div>
                        <div className="vacan_secnd-itm">
                          <h3>Description</h3>
                          <p>
                            MettleSol is hiring "React Js Developer" in Lahore,
                            Pakistan. The candidate should have at least 2 years
                            of experice. Job Description: - Researching
                            organiza...
                          </p>
                        </div>
                        <div className="vacan_third-itm">
                          <div className="inner__actions">
                            <span>
                              <img src="assets/img/dashboard/pen.png" />
                            </span>
                            <span>
                              <img src="assets/img/dashboard/delete.png" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="vaccncies-flex">
                        <div className="vacan_first-itm">
                          <a>Business Developer Intern</a>
                          <span>
                            <img src="assets/img/career/clock.png" />
                            Dec 28, 2023
                          </span>
                        </div>
                        <div className="vacan_secnd-itm">
                          <h3>Description</h3>
                          <p>
                            MettleSol is hiring "Business Developer Intern" in
                            Lahore, Pakistan. The candidate should be fluent in
                            English as well as familiar with latest
                            tectnologies. Job Description: - Researching
                            organiza...
                          </p>
                        </div>
                        <div className="vacan_third-itm">
                          <div className="inner__actions">
                            <span>
                              <img src="assets/img/dashboard/pen.png" />
                            </span>
                            <span>
                              <img src="assets/img/dashboard/delete.png" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="vaccncies-flex">
                        <div className="vacan_first-itm">
                          <a>Social Media Expert</a>
                          <span>
                            <img src="assets/img/career/clock.png" />
                            Dec 28, 2022
                          </span>
                        </div>
                        <div className="vacan_secnd-itm">
                          <h3>Description</h3>
                          <p>
                            MettleSol is hiring "Social Media Expert" in Lahore,
                            Pakistan. The candidate should have at least 1 year
                            of experice. Job Description: - Researching
                            organiza...
                          </p>
                        </div>
                        <div className="vacan_third-itm">
                          <div className="inner__actions">
                            <span>
                              <img src="assets/img/dashboard/pen.png" />
                            </span>
                            <span>
                              <img src="assets/img/dashboard/delete.png" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobDashboard;
