import React from "react";
import { AiOutlineTeam } from "react-icons/ai";
import { MdHighQuality } from "react-icons/md";
import { FaConnectdevelop } from "react-icons/fa";
import { SiAltiumdesigner } from "react-icons/si";
import { Element } from "react-scroll";

const Services = () => {
  return (
    <section id="services" className="services section-bg">
      <Element name="ser">
        <div className="container " data-aos="fade-up">
          <div className="section-title">
            <h2>Services</h2>
            <h4>WE provide custom software solutions</h4>
            <p>
              In contemporary era of digitalization, all business organizations
              are in dire need of development resources to expand their
              businesses. Hence, we provide you with your digital market to
              outreach your customers across the globe.
            </p>
          </div>
          <div className="row mt-4">
            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <div className="icon-box">
                <div className="icon">
                  <SiAltiumdesigner
                    style={{ color: "#47b2e4", fontSize: "3rem" }}
                  />
                </div>
                <h4>
                  <a href="#">Responsive &amp; Creative Web Designing</a>
                </h4>
                <p>
                  Web designing is central to our agenda. So, we combine
                  knowledge, creativity, problem solving and experience to
                  produce the desired outcome.
                </p>
                <div className="learn__more">
                  <a href="/web">Learn More</a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
              data-aos="zoom-in"
              data-aos-delay={200}
            >
              <div className="icon-box">
                <div className="icon">
                  <FaConnectdevelop
                    style={{ color: "#47b2e4", fontSize: "3rem" }}
                  />
                </div>
                <h4>
                  <a href="#">Web Development</a>
                </h4>
                <p>
                  Our skilled workforce work in collaboration to design and
                  deliever best possible software solutions and user friendly
                  interfaces for our clients.
                </p>
                <div className="learn__more">
                  <a href="/web">Learn More</a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
              data-aos-delay={300}
            >
              <div className="icon-box">
                <div className="icon">
                  <MdHighQuality
                    style={{ color: "#47b2e4", fontSize: "3rem" }}
                  />
                </div>
                <h4>
                  <a href="#">Quality Assurance</a>
                </h4>
                <p>
                  Quality is crucial for any product. Hence, MettleSol never
                  compromise on qulaity and our QA team endeavour to provide you
                  with best quality possible.
                </p>
                <div className="learn__more">
                  <a href="/web">Learn More</a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
              data-aos-delay={400}
            >
              <div className="icon-box">
                <div className="icon">
                  <AiOutlineTeam
                    style={{ color: "#47b2e4", fontSize: "3rem" }}
                  />
                </div>
                <h4>
                  <a href="#">Dedicated Team</a>
                </h4>
                <p>
                  Our team comprises of highly professional and competent
                  individuals who are not only determined and committed but also
                  well equipped.
                </p>
                <div className="learn__more">
                  <a href="/web">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Services;
