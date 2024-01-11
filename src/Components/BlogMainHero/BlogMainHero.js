import React from "react";

const BlogMainHero = () => {
  return (
    <>
      <section className="blog_main--hero">
        <div className="continer">
          <div className="bln_flexx">
            <div className="blg_ss-item">
              <h1>
                Always hungry for <br></br>new knowledge
              </h1>
            </div>
            <div className="blg_ss-itemsa">
              <p>
                Find artciles, stories of other people's experiences, and
                knowledge of any topic.
              </p>
              <a href="/companyblog">
                Read More <i className="fa fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogMainHero;
