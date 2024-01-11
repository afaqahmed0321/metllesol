import React, { useEffect } from "react";

const CtaSection = () => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");

    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
  }, []);

  return (
    <section id="cta" className="cta">
      <div className="container" data-aos="zoom-in">
        <div className="row">
          <div className="col-lg-9 text-center text-lg-start">
            <h3>Call To Action</h3>
            <p>
              For collaboration and partnership, you can set up a meeting with
              us as per your feasibility and availability.
            </p>
          </div>
          <div className="col-lg-3 cta-btn-container text-center">
            <a
              className="cta-btn align-middle"
              onClick={() =>
                window.Calendly.initPopupWidget({
                  url: "https://calendly.com/syedahsanali995",
                  color: "#2596be",
                  textColor: "#ffffff",
                  branding: true,
                })
              }
            >
              Call To Action
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
