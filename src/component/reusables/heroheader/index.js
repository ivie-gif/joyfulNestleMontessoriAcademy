import React from "react";

const HeroHeader = () => {
  return (
    <div
      className="container-fluid py-5 hero-header wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-7 col-md-12">
            <h1
              className="mb-3 text-start"
              style={{ color: "#86A788", fontWeight: "100", marginTop: "130px" }}
            >
              We Care For Your Child
            </h1>
            <h1
              className="mb-5 display-1 text-start text-white"
              style={{ fontFamily: "Fredoka", }}
            >
              A MONTESSORI PREPARED ENVIRONMENT
            </h1>
            <div className="text-start">
              <a
                href=""
                className="btn get-started-btn px-4 py-3 px-md-5 me-4 btn-border-radius"
              >
                Get Started
              </a>
              {/* <a
                href=""
                className="btn get-started-btn px-4 py-3 px-md-5 btn-border-radius"
              >
                Learn More
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
