import React from "react";
import FooterGallery from "../../imagedata/footerGallery";

const Footer = () => {
  return (
    <>
      <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            {/* Company Info */}
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="footer-item">
              <a href="#" className="navbar-brand">
            <h6 className=" fw-bold text-dark">
              JoyfulNestle Montessori <br />
              <span text-dark>Academy</span>
            </h6>
          </a>
                <p className="mb-4">
                "Building Curiosity, Creativity, and Confidence". Our Montessori approach fosters exploration, self-expression, and a love for lifelong learning.
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="footer-item">
                <div
                  className="d-flex flex-column text-dark"
                  style={{ borderRadius: "50% 20% / 10% 40%"}}
                >
                   <h4 className="mb-4 d-inline-block p-2 title-border-radius text-dark text-uppercase" style={{ borderBottom: '2px solid #000000'}}>
                   Contact Hours
                </h4>
                  <p>Mondays to Fridays</p> <p>7:30am - 6pm</p>
                </div>
              </div>
            </div>

            {/* Location Info */}
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="footer-item">
                <h4 className="mb-4 d-inline-block p-2 title-border-radius text-dark" style={{ borderBottom: '2px solid #000000'}}>
                  LOCATION
                </h4>
                <div className="d-flex flex-column align-items-start">
                  <span href="#" className="text-body text-start mb-4">
                    <i className="fa fa-map-marker-alt me-2 text-dark"></i> Plot 2B, Ekpo Michael Street, VOERA Estate, Arepo - Lagos-Ibadan Expressway Ogun State Nigeria
                  </span>
                  <span href="#" className="text-start rounded-0 text-body mb-4">
                    <i className="fa fa-phone-alt me-2 text-dark"></i> +2348032018658, +2348066388585
                  </span>
                  <span href="#" className="text-start rounded-0 text-body mb-4">
                    <i className="fas fa-envelope me-2 text-dark"></i> JoyfulNestle@gmail.com
                  </span>
                  <span href="#" className="text-start rounded-0 text-body mb-4">
                    <i className="fa fa-clock me-2 text-dark"></i> 26/7 Hours Service
                  </span>
                </div>
              </div>
            </div>

            {/* Gallery */}
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="footer-item">
                <h4 className="mb-4 d-inline-block p-2 title-border-radius text-dark" style={{ borderBottom: '2px solid #000000'}}>
                  OUR GALLERY
                </h4>
                <div className="row g-3">
                  {FooterGallery.map((image) => (
                    <div className="col-4" key={image}>
                      <div className="footer-galary-img rounded-circle" style={{ border: '2px solid #000000'}}>
                        <img
                          src={image.imgSrc}
                          className="img-fluid rounded-circle p-2"
                          alt={`Gallery ${image}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Start */}
      <div className="container-fluid copyright py-4" style={{ backgroundColor: '#fdc735' }}>
  <div className="container">
    <div className="row justify-content-between align-items-center">
      <div className="col-md-6 d-flex align-items-center">
        <i className="fas fa-copyright text-light me-2"></i>
        <span className="text-dark">JoyfulNestle Montessori Academy, All rights reserved.</span>
      </div>
    </div>
  </div>
</div>

      {/* Copyright End */}

      {/* Back to Top */}
      <a href="#" className="btn border-3 rounded-circle back-to-top" style={{color: '#fdc735', backgroundColor: '#00DAF7'}}>
        <i className="fa fa-arrow-up text-dark"></i>
      </a>
    </>
  );
};

export default Footer;
