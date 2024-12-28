import React from "react";
import Layout from "../../layout";

const Aboutus = () => {
  return (
    //  <Layout>
    <div className="container-fluid py-5 about bg-light">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          {/* Image Section */}
          <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="video border">
            </div>
          </div>

          {/* About Text Section */}
          <div className="col-lg-7 wow fadeIn" data-wow-delay="0.3s">
            <h4
              className=" mb-4 d-inline-block text-dark text-uppercase p-2 title-border-radius"
              style={{ borderBottom: "2px solid #000000" }}
            >
              Welcome to our School
            </h4>
            <h1 className="mb-4 text-dark text-uppercase display-6 fs-4">
              Our Priority is to Help Your Child Learn the Smart Way, Building a
              Bright Future for Them
            </h1>
            <p className="text-dark mb-4 text-start">
              At <span className="fw-bold">JoyfulNestle </span>{" "}
              <span className="fw-bold" style={{ color: "#FFFFFF" }}>
                Montessori{" "}
              </span>{" "}
              <span className="fw-bold" style={{ color: "#00f5f9" }}>
                Academy
              </span>
              , the importance of learning is
              expressed concisely in many ways and by many authors. The Holy
              Scriptures also emphasizes the need to study to show oneself
              approved to God who created all. </p>
              <p>
              Learning begins from day one at
              conception, it continues through the period of pregnancy, to the
              time of delivery into a new world and finally to the point of exit
              to a better world. Montessori education believes and allows
              children to develop according to their inner laws of development
              so that they can produce a more peaceful and enduring
              civilization.
                </p> 
                <p>
                  Education is power, JoyfulNestle Montessori Academy
              ensure this power is real and acquired by providing a serene and
              suitable study environment for our pupils. At JoyfulNestle, our
              pupils have interpersonal contacts with the Class Directress whose
              role is to observe and respond appropriately to the needs of
              individual pupil in a group while also directing the whole group.
              </p>
              <p className="fw-bold">
              We started with two pupils and we are yet growing.
              </p>

            {/* List of Features */}
            <div class="row mb-4 pt-3">
              <div class="col-lg-6">
                <h6 class="mb-3">
                  <i
                    class="fas fa-check-circle me-2"
                    style={{ color: "#00f5f9"}}
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

            {/* More Details Button */}
            {/* <a
              href="#"
              className="btn px-5 py-3 text-white mt-5 btn-border-radius"
              style={{ backgroundColor: "#86A788" }}
            >
              More Details
            </a> */}
          </div>
        </div>
      </div>
    </div>
    //    </Layout>
  );
};

export default Aboutus;
