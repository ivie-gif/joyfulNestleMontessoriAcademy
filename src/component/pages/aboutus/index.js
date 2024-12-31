import React from "react";
import CustomDiv from "../../reusables/headerDetails";

const AboutUs = () => {
  React.useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <CustomDiv
        backgroundColor="#000000"
        color="#fdc735"
        minHeight="350px"
        width="100%"
        padding="20px"
      >
        <h3
          className="mt-5 text-center text-uppercase display-4  "
          style={{ paddingTop: "150px", borderBottom: "3px solid #fdc735" }}
        >
          About Us
        </h3>
      </CustomDiv>
      <div className="container-fluid py-5 about bg-light">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            {/* Video Section */}
            <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
              <div className="video border position-relative">
                {/* Video Play Button */}
                <button
                  className="btn-play"
                  data-bs-toggle="modal"
                  data-bs-target="#videoModal"
                >
                  <span></span>
                </button>
              </div>

              {/* Modal for Video */}
              <div
                className="modal fade"
                id="videoModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content rounded-0">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Instagram Reel
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div
                        className="ratio ratio-16x9"
                        style={{
                          position: "relative",
                          paddingTop: "56.25%",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        {/* Instagram Embed */}
                        <blockquote
                          className="instagram-media"
                          data-instgrm-permalink="https://www.instagram.com/reel/DC8rU6nNPuc/?igsh=emRnNHN5aXNhZXc2"
                          data-instgrm-version="14"
                        ></blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Section */}
            <div className="col-lg-7 wow fadeIn" data-wow-delay="0.3s">
              <h4
                className="mb-4 d-inline-block text-dark text-uppercase p-2 title-border-radius"
                style={{ borderBottom: "2px solid #000000" }}
              >
                Welcome to our School
              </h4>
              <h1 className="mb-4 text-dark text-uppercase display-6 fs-4">
                Our Priority is to Help Your Child Learn the Smart Way, Building
                a Bright Future for Them
              </h1>
              <p className="text-dark mb-4 text-start">
                At <span className="fw-bold">JoyfulNestle</span>{" "}
                <span className="fw-bold" style={{ color: "#FFFFFF" }}>
                  Montessori
                </span>{" "}
                <span className="fw-bold" style={{ color: "#00f5f9" }}>
                  Academy
                </span>
                , the importance of learning is expressed concisely in many ways
                and by many authors. The Holy Scriptures also emphasize the need
                to study to show oneself approved to God who created all.
              </p>
              <p>
                Learning begins from day one at conception, it continues through
                the period of pregnancy, to the time of delivery into a new
                world and finally to the point of exit to a better world.
                Montessori education believes and allows children to develop
                according to their inner laws of development so that they can
                produce a more peaceful and enduring civilization.
              </p>
              <p>
                Education is power, JoyfulNestle Montessori Academy ensures this
                power is real and acquired by providing a serene and suitable
                study environment for our pupils. At JoyfulNestle, our pupils
                have interpersonal contacts with the Class Directress whose role
                is to observe and respond appropriately to the needs of
                individual pupil in a group while also directing the whole
                group.
              </p>
              <p className="fw-bold">
                We started with two pupils, and we are yet growing.
              </p>
              {/* List of Features */}
              <div class="row mb-4 pt-3">
                <div class="col-lg-6">
                  <h6 class="mb-3">
                    <i
                      class="fas fa-check-circle me-2"
                      style={{ color: "#00f5f9" }}
                    ></i>
                    Sports Activites
                  </h6>
                  <h6 class="mb-3">
                    <i
                      class="fas fa-check-circle me-2"
                      style={{ color: "#00f5f9" }}
                    ></i>
                    Outdoor Games
                  </h6>
                  <h6>
                    <i
                      class="fas fa-check-circle me-2"
                      style={{ color: "#00f5f9" }}
                    ></i>
                    Arts and Crafts
                  </h6>
                </div>
                <div class="col-lg-6">
                  <h6 class="mb-3">
                    <i
                      class="fas fa-check-circle me-2"
                      style={{ color: "#00f5f9" }}
                    ></i>
                    Highly Secured Environment
                  </h6>
                  <h6 class="mb-3">
                    <i
                      class="fas fa-check-circle me-2"
                      style={{ color: "#00f5f9" }}
                    ></i>
                    Qualified & Caring Teachers
                  </h6>
                  <h6>
                    <i
                      class="fas fa-check-circle me-2"
                      style={{ color: "#00f5f9" }}
                    ></i>
                    Holistic Learning Approach
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
