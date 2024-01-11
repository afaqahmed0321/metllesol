import React from "react";
import Time from "../Components/Dashboard/Time";
import ClockWatch from "../Components/Dashboard/ClockWatch";
import NavigationDashboard from "../Components/Dashboard/NavigationDashboard";
import MobileNavDash from "../Components/Dashboard/MobileNavDash";

const Dashboard = () => {
  return (
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
              <div className="dashboard__contnet dsha">
                <div className="dashboard__header">
                  <div className="post_btn">
                    <a href="">+ Post Job</a>
                  </div>
                  <div className="profile-img d_none">
                    <img src="assets/img/dashboard/woman.png" />
                    <p>HR Manager</p>
                  </div>
                </div>
                <div className="show__time-flex">
                  <div className="dashboard--itmes">
                    <div className="wish_status">
                      <h1>Good Morning, HR Manager</h1>
                      <p>
                        Here is your Job listing, Courses and Blogs statics are.
                      </p>
                    </div>
                    <div className="wish_img">
                      <img src="assets/img/dashboard/morning.png" />
                    </div>
                  </div>
                  <div className="dashboard--clock">
                    <div className="inner__click">
                      <ClockWatch />
                      <Time />
                    </div>
                  </div>
                </div>
                <div className="progress__bars-flex">
                  <div className="progress__itm bls">
                    <div className="prgrss-flex">
                      <h2>20</h2>
                      <p>Jobs posted</p>
                    </div>
                  </div>
                  <div className="progress__itm light-bls">
                    <div className="prgrss-flex">
                      <h2>10</h2>
                      <p>Courses offering</p>
                    </div>
                  </div>
                  <div className="progress__itm grs">
                    <div className="prgrss-flex">
                      <h2>30</h2>
                      <p>Blogs posted</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
