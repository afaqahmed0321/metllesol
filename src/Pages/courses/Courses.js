import React, { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Mousewheel, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import HeroSection from "../../Components/HeroSection/HeroSection";

import BlogSection from "../../Components/BlogSection/index";
import "./courses.css";
import {
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaAngular,
  FaVuejs,
  FaNodeJs,
  FaAws,
  FaBootstrap,
} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import {
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import AdmmissionFromModel from "../../Components/AdmmissionFromModel";
import CoursesICon from "../../Components/CoursesIconSection";
import { Button } from "@mui/material";

export const SwiperCard = ({ img, title, heading, delay }) => {
  return (
    <>
      <div
        className="card  my-5 cardMain "
        data-aos="zoom-in"
        data-aos-delay={delay}
      >
        <div>
          <span className="card-img-top" height={"15rem"}>
            {img}
          </span>
        </div>
        <div className="card-body">
          <h3 className="card-title text-lg">{title}</h3>
          <h5>
            <b>{heading}</b>
          </h5>
          <a href="#" className="readText my-2">
            <strong> Read More..</strong>
          </a>
        </div>
      </div>
    </>
  );
};

const Courses = () => {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");

  const handleChange = (newPhone) => {
    setPhone(!newPhone);
  };
  return (
    <>
      <Header />
      <HeroSection
        bgcolor={"#004182a3"}
        video={null}
        img={"../../assets/img/cursesbg.png"}
        heading="Where every learner is a Leader "
        title={"Admission Open Batch-9 2023"}
        button={
          <Button
            variant="contained"
            component="label"
            className="btn btn-primary text-white text-bold shadow-lg px-4 rounded-full"
            onClick={() => setOpen(true)}
          >
            Register now
          </Button>
        }
      />
      <CoursesICon />
      <div className="">
        <section id="curses" className="curses">
          <div className="" data-aos="fade-up">
            <div className="section-title">
              <h2>Courses</h2>
              <Swiper
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={4}
                slidesPerGroup={2}
                mousewheel={true}
                pagination={{
                  clickable: true,
                }}
                spaceBetween={80}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                modules={[EffectCoverflow, Pagination, Mousewheel, Autoplay]}
                className="mySwiper"
                breakpoints={1200}
                loopPreventsSlide={true}
              >
                <SwiperSlide>
                  <SwiperCard
                    delay={100}
                    img={
                      <div className="d-flex flex-row ">
                        <div className="htmlIcon">
                          <FaHtml5 />
                        </div>
                        <div className="cssIcon">
                          <FaCss3Alt />
                        </div>
                      </div>
                    }
                    title={"HTML AND CSS"}
                    heading={
                      "Build Responsive Real-World Websites with HTML and CSS"
                    }
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <SwiperCard
                    delay={200}
                    img={
                      <div className="bootstrapIcon">
                        <FaBootstrap />
                      </div>
                    }
                    title={"Bootstrap"}
                    heading={"Bootstrap Course - The Complete Guide."}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <SwiperCard
                    delay={300}
                    img={
                      <div className="tailwindIcon">
                        <SiTailwindcss />
                      </div>
                    }
                    title={"Tailwind css"}
                    heading={
                      "Tailwind CSS From Scratch | Learn By Building Projects"
                    }
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <SwiperCard
                    delay={400}
                    img={
                      <div className="javaIcon">
                        <DiJavascript />
                      </div>
                    }
                    title={"JAVASCRIPT"}
                    heading={"The Complete JavaScript Course."}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <SwiperCard
                    delay={500}
                    img={
                      <div className="tsIcon">
                        <SiTypescript />
                      </div>
                    }
                    title={"Typescript"}
                    heading={"The Complete Developer's Guide"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <SwiperCard
                    delay={600}
                    img={
                      <div className="reactIcon">
                        <FaReact />
                      </div>
                    }
                    title={"React-JS"}
                    heading={"React - The Complete Guide."}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <SwiperCard
                    delay={700}
                    img={
                      <div className="angularIcon">
                        <FaAngular />
                      </div>
                    }
                    title={"Angular"}
                    heading={"Angular - The Complete Guide."}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <SwiperCard
                    delay={800}
                    img={
                      <div className="vueIcon">
                        <FaVuejs />
                      </div>
                    }
                    title={"Vue-js"}
                    heading={"Complete Vue Developer."}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <SwiperCard
                    delay={900}
                    img={
                      <div className="nodeIcon">
                        <FaNodeJs />
                      </div>
                    }
                    title={"Node-js"}
                    heading={"NodeJS - The Complete Guide."}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <SwiperCard
                    delay={1000}
                    img={
                      <div className="awsIcon">
                        <FaAws />
                      </div>
                    }
                    title={"AWS"}
                    heading={
                      "Introduction to Cloud Computing on AWS for Beginners."
                    }
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <SwiperCard
                    delay={1100}
                    img={
                      <div className="tailwindIcon">
                        <SiPostgresql />
                      </div>
                    }
                    title={"sql"}
                    heading={"The Complete SQL Bootcamp."}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <SwiperCard
                    delay={1200}
                    img={
                      <div className="tailwindIcon">
                        <SiMysql />
                      </div>
                    }
                    title={"mysql"}
                    heading={"The Ultimate MySQL Bootcamp."}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
        <BlogSection
          sectionHeading={"teaching faculty"}
          img={"../../assets/img/faraz.png"}
          imgclasses="techerImg ml-5 shadow-lg"
          content={
            <>
              <b>Syed Faraz Zaidi </b> Bachelors in Computer Science <br />5
              years experience in market 1 year experience in teaching IT
              Frameworks.
              <br /> <br />
              Learn Web development with our experts, To enhance your skills and
              get a skillset which help you to gain knowledge. Enjoy learning
              with us.
              <br />
              Start earning on your own and make your dreams come true. <br />
              <br />
              Ye do lines hum kahin use krin gay banner m Enjoy learning with
              us.
              <br />
              Start earning on your own and make your dreams come true.
            </>
          }
        />
      </div>
      <Footer />
      {open && (
        <AdmmissionFromModel
          open={open}
          onClose={() => setOpen(false)}
          phone={phone}
          cancel={() => setOpen(false)}
          handleChange={handleChange}
        />
      )}
    </>
  );
};

export default Courses;
