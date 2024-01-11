import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import HeroSectionBlog from "../../Components/HeroSection2/HeroSectionBlog";

function ClutchBlog() {
  return (
    <>
      <Header />
      <HeroSectionBlog />

      <section className="p-0">
        <div className="container">
          <div className="row col-12">
            <div className="card-body pt-5 px-0" id="text-left">
              <h2 className="h1 blog-heading" id="hd-left">
                MettleSol Earns High Praise in Our First Clutch Review{" "}
              </h2>
              <p className=" blog-p m-2 lead">
                The software development industry is{" "}
                <a
                  href="https://www.classicinformatics.com/blog/software-development-statistics"
                  target="_blank"
                  style={{ color: "blue", textDecoration: "underline" }}
                >
                  growing bigger
                </a>{" "}
                all the time, and it's easy to see why; in today's world,
                businesses great and small have an ever-increasing need for
                custom software solutions to help them keep up with the
                competition, streamline their operations, and be as efficient
                and effective as possible in their respective fields. And if you
                require top quality custom software development services,
                MettleSol is ready to help.
              </p>
              <p className=" blog-p m-2 lead">
                Founded in 2017 and based in Lahore, Pakistan, MettleSol has put
                together a top class team of software designers and developers,
                working with small businesses across the globe in an array of
                industries, from eCommerce to advertising. It doesn't matter
                what sort of sector you're in or what kind of software you need,
                we'll help you make it.
              </p>
            </div>
            <p className=" blog-p m-2 lead">
              Not convinced? Well, as proof of our high standards of service and
              performance, let's take a look at one of our first client review
              on Clutch, an established B2B reviews platform that helps firms
              across the globe connect with the solution providers that they
              need in order to improve effectiveness and increase productivity.
            </p>
            <h2 className="h1 m-3 blog-heading">
              Quality Feedback from a Valued Client
            </h2>
            <script
              type="text/javascript"
              src="https://widget.clutch.co/static/js/widget.js"
            ></script>{" "}
            <div
              className="clutch-widget"
              data-nofollow="true"
              data-url="https://widget.clutch.co"
              data-widget-type="4"
              data-height="auto"
              data-expandifr="true"
              data-snippets="true"
              data-clutchcompany-id="1788300"
            ></div>
            <p className=" blog-p p-4 lead">
              MettleSol's first ever Clutch review gives us a great score and
              comes from the team at Gibraltar Information Systems Ltd. They're
              an IT company, and they were looking for our help in developing
              the front and back-end of a new educational app, designed to
              simplify the university application process for students.
            </p>
            <p className=" blog-p m-2 lead">
              It was a complex project, but our team was up to the task. We
              initially held a meeting with the client to discuss their goals
              and requirements for the project. Then, we set to work on the
              development, keeping the client updated throughout the process.
              The project is still ongoing, but the client is very happy with
              the work provided so far:
            </p>
            <div className="  m-3 mx-auto">
              <blockquote className=" lead blog-p-">
                I am extremely happy with their response time. They are
                available even after work hours.
              </blockquote>
              <cite className="text-primary font-weight-bold ">
                CEO, Gibraltar Information Systems Ltd
              </cite>
            </div>
            <p className=" blog-p m-2 lead">
              This is exactly the kind of feedback we work so hard to earn, so
              we're thrilled to hear that the client has been satisfied so far,
              and we're looking forward to impressing more clients on projects
              to come.
            </p>
            <p className=" blog-p m-2 lead">
              In the meantime, we're also proud to announce that our company has
              been listed among the best software development{" "}
              <a
                href="https://www.classicinformatics.com/blog/software-development-statistics"
                target="_blank"
                style={{ color: "blue", textDecoration: "underline" }}
              >
                companies
              </a>{" "}
              on Top Design Firms. Top Design Firms allows buyers to find the
              right marketing, design, and development firms for their next
              project.
            </p>
            <p className="blog-p m-2 mb-5 lead ">
              If your business needs new software to reach more clients, speed
              up your day-to-day processes, or simply improve your business'
              output, MettleSol can help.{" "}
              <a
                href="https://www.classicinformatics.com/blog/software-development-statistics"
                target="_blank"
                style={{ color: "blue", textDecoration: "underline" }}
              >
                Get in touch
              </a>{" "}
              with us today and let's talk about how we can work together.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ClutchBlog;
