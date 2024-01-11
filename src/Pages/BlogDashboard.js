import React from "react";
import NavigationDashboard from "../Components/Dashboard/NavigationDashboard";
import RichTextEditor from "../Components/Dashboard/RichTextEditor";
import InputField from "../Components/Dashboard/InputField";
import BlogItem from "../Components/Dashboard/BlogItem";
import MobileNavDash from "../Components/Dashboard/MobileNavDash";

const BlogDashboard = () => {
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
                        <h1>Blog Post Portal</h1>
                        <p>
                          Here you can Post, Edit, Delete and View the Blog
                          Post.
                        </p>
                        <div className="field__flex">
                          <InputField
                            label="Blog Title"
                            type="text"
                            placeholderText="Enter Blog Title"
                            name="blog"
                          />
                          <InputField
                            label="Blog Category"
                            type="text"
                            placeholderText="Enter Blog Category"
                            name="category"
                          />
                        </div>
                        <div className="job-dtls">
                          <label htmlFor="responsible">
                            Entter Blog Details
                          </label>

                          <RichTextEditor richtextPlaceholder="" />
                        </div>
                        <div className="job__sbmt">
                          <button>Submit</button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="blogs__post-main">
                    <BlogItem />
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

export default BlogDashboard;
