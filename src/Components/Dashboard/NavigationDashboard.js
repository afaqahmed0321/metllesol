import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const NavigationDashboard = () => {
  return (
    <>
      <div className="my__dashnav">
        <h1>MettleSol</h1>
        <ul className="tab-list">
          <li>
            <NavLink className="active_nav" to={"/dashboard"}>
              <img src="assets/img/dashboard/dash.png" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink className="active_nav" to={"/job-dashboard"}>
              <img src="assets/img/dashboard/job.png" />
              Jobs
            </NavLink>
          </li>
          <li>
            <NavLink className="active_nav" to={"/course-dashboard"}>
              <img src="assets/img/dashboard/course.png" />
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink className="active_nav" to={"/blog-dashboard"}>
              <img src="assets/img/dashboard/blog.png" />
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="logout_action">
        <a>
          <img src="assets/img/dashboard/logoutt.png" /> Logout
        </a>
      </div>
    </>
  );
};

export default NavigationDashboard;
