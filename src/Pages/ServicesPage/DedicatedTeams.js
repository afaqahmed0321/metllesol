import React from "react";
import Header from "./../../Components/Header/Header";
import Footer from "./../../Components/Footer/Footer";
import { BiShapeCircle } from "react-icons/bi";
import { BiCircle } from "react-icons/bi";
import { BsBoundingBoxCircles } from "react-icons/bs";
import ReactPlayer from "react-player";

const DedicatedTeams = () => {
  return (
    <>
      <Header />
      <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
      <div className="section-title">
        <h2>Dedicated Teams</h2>
        <h4>
          We grow the tour team using our development resources and recruitment
          capabilities
        </h4>
      </div>
      <section className="main-banner">
        <h2 className="text-center">We Can Help You</h2>
        <div className="row" id="space-mid">
          <div className="col-lg-4 col-md-4">
            <div className="help-box">
              <div className="icon-img">
                <img src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-f40fc51/wp-content/themes/tkxel/assets/images/dt-market-time-icon.svg" />
              </div>
              <h4>Seamlessly Provide Feedback</h4>
              <p>
                Our consumer fundamental approach prioritizes consumer feedback
                for us. You will get regular updates on task levels through
                tools like Jira and Github.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="help-box">
              <div className="icon-img">
                <img src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-f40fc51/wp-content/themes/tkxel/assets/images/dt-save-money-icon.svg" />
              </div>
              <h4>Get the best Out of Your Team</h4>
              <p>
                We assist you boost your internal ability by getting ready your
                internal groups for any incoming method or activity
                modification.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="help-box">
              <div className="icon-img">
                <img src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-f40fc51/wp-content/themes/tkxel/assets/images/dt-fill-gap-icon.svg" />
              </div>
              <h4>Focus on your Core Business</h4>
              <p>
                Our teams are skilled at taking up your projects from design
                till maintenance along with ramping up the process to help you
                focus on your core business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="main-work">
        <div className="row">
          <div className="col-lg-12">
            <div className="work-box">
              <h2>Let’s Work Together</h2>
              <div className="container-cards">
                <div className="work-row">
                  <div className="icon-img">
                    <BiCircle />
                  </div>
                  <h3>Off-site</h3>
                  <p>
                    We can take the requirements by calls and in documented form
                    to start the development according to the client
                    requirements{" "}
                  </p>
                </div>

                <div className="work-row">
                  <div className="icon-img">
                    <BsBoundingBoxCircles />
                  </div>
                  <h3>On-site</h3>
                  <p>
                    Our development team can visit the client’s place to get
                    understanding of the working environment of the client
                    organization. They can also work at their place.
                  </p>
                </div>
                <div className="work-row">
                  <div className="icon-img">
                    <BiShapeCircle />
                  </div>
                  <h3>Off-site + On-site</h3>
                  <p>
                    Our team can visit the client organization and can deliver
                    the requirements to the off-site team that are working on
                    the project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="small-cards">
        <div className="col-lg-12">
          <div className="boarding-box">
            <h3>Our On-Boarding Process</h3>
            <div className="board-row" id="float-left">
              <div className="row">
                <div className="col-auto d-flex">
                  <span>1</span>
                  <img
                    src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-f40fc51/wp-content/themes/tkxel/assets/images/ms-headphone-alt.svg"
                    alt=""
                  />
                </div>
                <div className="col">
                  <h4>Talk to us</h4>
                  <p>Share your vision and requirements with our team.</p>
                </div>
              </div>
            </div>

            <div className="board-row" id="float-right">
              <div className="row">
                <div className="col-auto d-flex">
                  <span>2</span>
                  <img
                    src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-f40fc51/wp-content/themes/tkxel/assets/images/ms-face-smile-team.svg"
                    alt=""
                  />
                </div>
                <div className="col">
                  <h4>Select the Team</h4>
                  <p>Select the best team suited to your project needs</p>
                </div>
              </div>
            </div>

            <div className="board-row" id="float-left">
              <div className="row">
                <div className="col-auto d-flex">
                  <span>3</span>
                  <img
                    src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-f40fc51/wp-content/themes/tkxel/assets/images/ms-time-trial.svg"
                    alt=""
                  />
                </div>
                <div className="col">
                  <h4>Start a Free Trial</h4>
                  <p>Start your risk free trial period to test your team.</p>
                </div>
              </div>
            </div>

            <div className="board-row" id="float-right">
              <div className="row">
                <div className="col-auto d-flex">
                  <span>4</span>
                  <img
                    src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-f40fc51/wp-content/themes/tkxel/assets/images/ms-magnet-start.svg"
                    alt=""
                  />
                </div>
                <div className="col">
                  <h4>Get Started</h4>
                  <p>Satisfied? Carry on with your Selected Team.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-title">
        <h2>Approaches</h2>
      </div>

      <div className="container-main">
        <div className="container-one">
          <div className="card-main" id="bg-one">
            <div className="card-content">
              <h3>Tracking</h3>
              <p>
                Tasks are assigned, maintained and updated regularly through
                Jira and Trello. And the code is stored or pushed in repository
                to keep check on the progress on daily basis
              </p>
            </div>
          </div>
          <div className="card-main" id="bg-two">
            <div className="card-content">
              <h3>Contact</h3>
              <p>
                You can contact us through email and slack to get updates on the
                project progress.
              </p>
            </div>
          </div>
        </div>

        <div className="container-two">
          <div className="card-main" id="bg-three">
            <div className="card-content">
              <h3>Meetings</h3>
              <p>
                Scrum meetings on daily basis is organized to keep check on the
                team members.
              </p>
            </div>
          </div>
          <div className="card-main" id="bg-four">
            <div className="card-content">
              <h3>Product Evaluation</h3>
              <p>
                Your feedback is of utmost importance, so we run regular demo
                sessions and sprint retrospective meetings to inculcate your
                ideas.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DedicatedTeams;
