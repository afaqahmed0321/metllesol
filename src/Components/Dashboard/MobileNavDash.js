import React from "react";
import { NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

const MobileNavDash = () => {
  return (
    <>
      <div className="mbl_Nav--dashb">
        <div className="menu__mblds">
          <Menu>
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
          </Menu>
        </div>

        <div className="company__lgo">
          <h1>MettleSol</h1>
        </div>
      </div>
    </>
  );
};

export default MobileNavDash;
