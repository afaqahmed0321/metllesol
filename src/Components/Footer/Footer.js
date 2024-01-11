import React from "react";

import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Footer = () => {
  const notify = () => toast("Submit Your Email!");
  const SignupSchema = () =>
    Yup.object().shape({
      email: Yup.string().email("Invalid email").required("Email is required"),
    });

  return (
    <footer id="footer">
      <div className="footer-newsletter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h4>Join our newsletter</h4>
              <p>Register your email to get the latest updates.</p>
              <Formik
                initialValues={{ email: "" }}
                validationSchema={SignupSchema}
                onSubmit={async (values, { setSubmitting }) => {
                  try {
                    const res = await axios.post(
                      `http://localhost:8080/sendemail`,
                      values
                    );
                    console.log(res);
                    if (res.status === 200) {
                      toast.success(res.data);
                    } else {
                      toast.error("Error");
                    }
                  } catch (e) {
                    console.log(e);
                  }
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                }) => (
                  <>
                    <form onSubmit={handleSubmit}>
                      <input
                        type="email"
                        className="new-input"
                        onChange={handleChange}
                        id="email"
                        onBlur={handleBlur}
                        value={values.email}
                        name="email"
                      />

                      <input
                        type="submit"
                        defaultValue="Subscribe"
                        onClick={notify}
                      />
                    </form>
                    {touched.email && errors.email ? (
                      <div className="text-danger d-flex">{errors.email}</div>
                    ) : null}
                  </>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-xl-3 col-md-6 footer-contact">
              <h3 className="footer_heading">MettleSol</h3>
              <div>
                <strong> Address:</strong>
                <br /> Gulberg III, Lahore, Punjab Pakistan
                <br />
                London United Kingdom
                <br />
                <strong>Phone:</strong>
                <p>
                  <a href="tel:+923030266005">+92-303-0266005</a>
                  <br></br>
                  <a href="tel:+1 857-444-4637">+1 857-444-4637</a>
                </p>
                <br />
                <strong>Email:</strong>
                <br />
                <a href="mailto:jason.f@mettlesol.com">jason.f@mettlesol.com</a>
                <br />
              </div>
            </div>
            <div className="col-lg-2 col-xl-2 col-md-6 footer-links">
              <h4 className="ml-2">&nbsp;Pages</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#about">About us</a>
                </li>

                <li>
                  <i className="bx bx-chevron-right" />
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                  <a href="/blog" target="_blank">
                    Blogs
                  </a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                  <a href="/career">Career</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />

                  <a href="/courses">Courses</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-xl-3 col-md-6 footer-links">
              <h4>&nbsp;Our Services</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" />
                  <a href="#">Custom Software Solutions</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                  <a href="#">App Development</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                  <a href="#">UI/UX Design</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                  <a href="#">QA & Testing</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                  <a href="#">AWS</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-5 col-xl-4 col-md-6 footer-links">
              <h4>Our Social Networks</h4>
              <p>Follow the links to visit our social media accounts</p>
              <div className="social-links mt-3">
                <a
                  href=" https://twitter.com/mettle_sol"
                  target="_blank"
                  className="twitter"
                >
                  <i className="bx bxl-twitter" />
                </a>
                <a
                  href="https://www.facebook.com/mettlesolution/"
                  className="facebook"
                  target="_blank"
                >
                  <i className="bx bxl-facebook" />
                </a>
                <a
                  href="https://www.instagram.com/mettlesol/"
                  className="instagram"
                  target="_blank"
                >
                  <i className="bx bxl-instagram" />
                </a>

                <a
                  href="https://www.linkedin.com/company/mettlesol"
                  className="linkedin"
                  target="_blank"
                >
                  <i className="bx bxl-linkedin" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCm6uixC3_zk9lx-4Hzd6K3w"
                  className="linkedin"
                  target="_blank"
                >
                  <i className="bx bxl-youtube" />
                </a>
              </div>
              <div className="row mt-4 justify-content-left">
                <div className=" col-3 d-flex">
                  <script
                    type="IN/FollowCompany"
                    data-id="74148764"
                    data-counter="bottom"
                  ></script>
                </div>

                <div className=" col-5 pl-4" id="left-space">
                  <div
                    className="clutch-widget justify-content-space-between"
                    data-nofollow="true"
                    data-url="https://widget.clutch.co"
                    data-widget-type="1"
                    data-height="90"
                    data-clutchcompany-id="1788300"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-bottom clearfix">
        <div className="copyright">
          © Copyright
          <strong> &nbsp;MettleSol</strong>. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
