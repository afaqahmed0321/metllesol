import React from "react";

const HiringProcess = () => {
  return (
    <>
      <section className="hiringProcess">
        <div className="container">
          <div className="hiring_inner">
            <h1>What comes next?</h1>
            <div className="hiring__flex">
              <div className="hiring__item s">
                <div className="hiring__Process">
                  <div className="hiring-process_dv">
                    <h3>Apply</h3>
                    <p>
                      Scroll through the open vacancies below and apply for
                      positions that align with your particular skillset.
                    </p>
                  </div>
                  <div className="hiring-process_dv">
                    <h3>Review</h3>
                    <p>
                      Our expert recruiters review your application. They will
                      screen your résumé and find the best fit for you.
                    </p>
                  </div>
                  <div className="hiring-process_dv">
                    <h3>Interviews</h3>
                    <p>
                      We have a competency-based interviewing process to
                      identify the people who will thrive in our environment.
                      Each department has its own criteria, but they usually
                      revolve round the recruiter’s phone screen, the hiring
                      manager’s interview, and a combination of technical
                      screens, panel interviews, and team presentations.
                    </p>
                  </div>
                  <div className="hiring-process_dv">
                    <h3>Onboarding</h3>
                    <p>
                      Once you’ve received the “Welcome Aboard” message, our
                      onboarding experience will polish and set you up for your
                      professional journey with MettleSol.
                    </p>
                  </div>
                </div>
              </div>
              <div className="hiring__item">
                <div className="interview__img">
                  <img src="assets/img/career/interview.webp" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HiringProcess;
