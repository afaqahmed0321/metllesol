import React from "react";
import NavigationDashboard from "../Components/Dashboard/NavigationDashboard";
import RichTextEditor from "../Components/Dashboard/RichTextEditor";
import InputField from "../Components/Dashboard/InputField";
import CourseItem from "../Components/Dashboard/CourseItem";
import MobileNavDash from "../Components/Dashboard/MobileNavDash";

const CourseDashboard = () => {
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
                        <h1>Course Portal</h1>
                        <p>
                          Here you can Post, Edit, Delete and View the Course.
                        </p>
                        <div className="field__flex">
                          <InputField
                            label="Course Title"
                            type="text"
                            placeholderText="Enter Course Title"
                            name="course"
                          />
                          <InputField
                            label="Course Category"
                            type="text"
                            placeholderText="Enter Course Category"
                            name="course-category"
                          />
                        </div>
                        <div className="job-dtls">
                          <label htmlFor="responsible">
                            Enter Course Details
                          </label>

                          <RichTextEditor richtextPlaceholder="" />
                        </div>
                        <div className="job__sbmt">
                          <button>Submit</button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="my--courses">
                    <CourseItem />
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

export default CourseDashboard;
