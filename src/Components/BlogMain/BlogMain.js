import React from "react";

const BlogMain = () => {
  return (
    <>
      <section className="mettlesol__blog">
        <div className="container">
          <div className="mettlesol_blog-main">
            <span>OUR BLOGS</span>
            <div className="blg__ttl">
              <h1>Our latest</h1>
              <h1 className="margin_left">updates</h1>
            </div>

            <div className="mettlesol_blg-flex">
              <div className="blog-inner-column">
                <a href="/clutchblog">
                  <div className="blog-content">
                    <div className="blog-date">
                      <h4>2023</h4>
                      <p>Janauary</p>
                    </div>
                    <div className="blog_img">
                      <img src="/assets/img/blog/growth.svg" />
                    </div>
                    <div className="blog__cnt">
                      <h2>
                        MettleSol Earns High Praise in Our First Clutch Review
                      </h2>
                      <p>
                        The software development industry is growing bigger all
                        the time, and it's easy to see why; in today's world,
                        businesses great and small have an ever-increasing need
                        for custom software solutions to help them keep up with
                        the competition...
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="blog-inner-column">
                <a href="/companyblog">
                  <div className="blog-content">
                    <div className="blog-date">
                      <h4>2023</h4>
                      <p>Janauary</p>
                    </div>
                    <div className="blog_img">
                      <img src="/assets/img/blog/idea.svg" />
                    </div>
                    <div className="blog__cnt">
                      <h2>SETBACK TO IT EXPORTS IN PAKISTAN</h2>
                      <p>
                        Pakistan’s IT industry has become noteworthy in the past
                        few years due to high IT and ITes export services.
                        Pakistan’s economic survey for 2020 -2021 has revealed
                        that the annual growth rate for IT and related services
                        reached 18.85%...
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogMain;
