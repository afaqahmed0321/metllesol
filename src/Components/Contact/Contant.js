import React from "react";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const SignupSchema = () =>
    Yup.object().shape({
      name: Yup.string().required("Name is required"),
      subject: Yup.string().required("Subject is required"),
      email: Yup.string()
        .email("Email is required")
        .required("Email is required"),
      text: Yup.string().required("Massage is required"),
    });

  return (
    <section id="contact" className="contact">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>
            Contact us and let us know how we can assist. Please complete the
            form, and we'll get back to you as soon as we can.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt" />
                <h4>Location:</h4>
                <p>
                  London, United Kingdom
                  <br /> Gulberg III, Lahore, Punjab Pakistan
                </p>
              </div>
              <div className="email">
                <i className="bi bi-envelope" />
                <h4>Email:</h4>
                <p>
                  <a href="mailto:jason.f@mettlesol.com">
                    jason.f@mettlesol.com
                  </a>
                </p>
              </div>
              <div className="phone">
                <i className="bi bi-phone" />
                <h4>Call:</h4>
                <p>
                  {" "}
                  <a href="tel: +1 857-444-4637"> +1 857-444-4637</a>
                  <br></br>
                  <a href="tel:+923030266005">+92-303-0266005</a>
                </p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.499562889356!2d74.35026581510533!3d31.510436581372897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905f4b7cc6f7b%3A0xbdabe19fbc0244c5!2sAl-Hafeez%20Suites!5e0!3m2!1sen!2s!4v1648508995501!5m2!1sen!2s"
                frameBorder={0}
                style={{ border: 0, width: "100%", height: "290px" }}
                allowFullScreen
              />
            </div>
          </div>
          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <Formik
              initialValues={{ name: "", email: "", subject: "", text: "" }}
              validationSchema={SignupSchema}
              onSubmit={async (values, { setSubmitting }) => {
                try {
                  const res = await axios.post(
                    `http://localhost:8080/sendemail`,
                    values
                  );
                  if (res.status === 200) {
                    toast.success(res.data);
                  } else {
                    toast.error(res.data);
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
                <form onSubmit={handleSubmit} className="php-email-form">
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label htmlFor="name">
                        Your Name{" "}
                        <span
                          style={{
                            color: `${errors.subject ? " red" : ""}`,
                          }}
                        >
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="form-control "
                        id="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        style={{
                          border: `${errors.name ? "1px solid red" : ""}`,
                        }}
                      />
                      {touched.name && errors.name ? (
                        <span className="text-danger">{errors.name}</span>
                      ) : null}
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="email">
                        Your Email{" "}
                        <span
                          style={{
                            color: `${errors.email ? " red" : ""}`,
                          }}
                        >
                          *
                        </span>
                      </label>
                      <input
                        type="email"
                        className={"form-control"}
                        style={{
                          border: `${errors.email ? "1px solid red" : ""}`,
                        }}
                        name="email"
                        id="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        isvalid={touched.email && !errors.email}
                        errors={errors.email}
                      />
                      {touched.email && errors.email ? (
                        <div className="text-danger">{errors.email}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">
                      Subject{" "}
                      <span
                        style={{
                          color: `${errors.subject ? " red" : ""}`,
                        }}
                      >
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.subject}
                      style={{
                        border: `${errors.subject ? "1px solid red" : ""}`,
                      }}
                    />
                    {touched.subject && errors.subject ? (
                      <div className="text-danger">{errors.subject}</div>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="text">
                      Message{" "}
                      <span
                        style={{
                          color: `${errors.text ? " red" : ""}`,
                        }}
                      >
                        *
                      </span>
                    </label>
                    <textarea
                      className="form-control form-text"
                      name="text"
                      type="text"
                      rows="10"
                      cols="50"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.text}
                      style={{
                        border: `${errors.text ? "1px solid red" : ""}`,
                      }}
                    />
                    {touched.text && errors.text ? (
                      <div className="text-danger">{errors.text}</div>
                    ) : null}
                  </div>

                  <div className="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
