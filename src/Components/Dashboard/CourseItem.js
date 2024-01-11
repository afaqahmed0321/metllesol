import React from "react";

const CourseItem = () => {
  return (
    <>
      <div className="courses_main">
        <h1>All Courses</h1>
        <div className="courses__flex">
          <div className="course--item">
            <div className="course_flex">
              <img src="assets/img/dashboard/react.png" />
              <span>Ongoing</span>
            </div>
            <h3>ReactJS</h3>
            <h4>Frontend Web Development</h4>
            <p>
              The React. JS Course Curriculum contains basic elements like
              introduction, JSX overview, Environmental setup, real-time
              applications, forms and UI...
            </p>
            <div className="duration_course">
              <span className="duration__flx">
                <img src="assets/img/dashboard/calendar.png" />
                Duration:
              </span>
              <span className="weeken__cc">8 Weeks (Weekend Classes)</span>
            </div>
          </div>
          <div className="course--item">
            <div className="course_flex">
              <img src="assets/img/dashboard/htmls.png" />
              <span className="pzd">Paused</span>
            </div>
            <h3>HTML5 and CSS3</h3>
            <h4>Frontend Web Development</h4>
            <p>
              The React. JS Course Curriculum contains basic elements like
              introduction, JSX overview, Environmental setup, real-time
              applications, forms and UI...
            </p>
            <div className="duration_course">
              <span className="duration__flx">
                <img src="assets/img/dashboard/calendar.png" />
                Duration:
              </span>
              <span className="weeken__cc">8 Weeks (Weekend Classes)</span>
            </div>
          </div>
          <div className="course--item">
            <div className="course_flex">
              <img src="assets/img/dashboard/node.png" />
              <span className="comltd">Completed</span>
            </div>
            <h3>NodeJS</h3>
            <h4>Backend Development</h4>
            <p>
              The React. JS Course Curriculum contains basic elements like
              introduction, JSX overview, Environmental setup, real-time
              applications, forms and UI...
            </p>
            <div className="duration_course">
              <span className="duration__flx">
                <img src="assets/img/dashboard/calendar.png" />
                Duration:
              </span>
              <span className="weeken__cc">8 Weeks (Weekend Classes)</span>
            </div>
          </div>
          <div className="course--item">
            <div className="course_flex">
              <img src="assets/img/dashboard/angular.png" />
              <span>Ongoing</span>
            </div>
            <h3>AngularJS</h3>
            <h4>Frontend Web Development</h4>
            <p>
              The React. JS Course Curriculum contains basic elements like
              introduction, JSX overview, Environmental setup, real-time
              applications, forms and UI...
            </p>
            <div className="duration_course">
              <span className="duration__flx">
                <img src="assets/img/dashboard/calendar.png" />
                Duration:
              </span>
              <span className="weeken__cc">8 Weeks (Weekend Classes)</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseItem;
