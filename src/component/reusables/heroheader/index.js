import React from 'react';
import image1 from '../../../assets/moreGallery/12.jpeg';
import image2 from '../../../assets/moreGallery/6.jpeg';
import image3 from '../../../assets/moreGallery/42.jpeg';
import image4 from '../../../assets/moreGallery/27.jpeg';
import image5 from '../../../assets/moreGallery/22.jpeg';
import { NavLink } from 'react-router-dom';


const HeroHeader = () => {
  const images = [image1, image2, image3, image4, image5];

  return (
    <div
      id="hero-header"
      className=" hero-header wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container-fluid p-0">
        <div
          id="heroCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="3000"
        >
          {/* Carousel Items */}
          <div className="carousel-inner">
            {images.map((img, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                style={{
                  height: "100vh",
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div
                  className="container px-5 pt-5 carousel-caption d-flex flex-column justify-content-center h-100"
                  style={{
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  }}
                >
                  <h1
                    className="mb-3 pt-5 display-6 fs-3 text-uppercase"
                    style={{
                      color: "#fdc735",
                      fontWeight: "100",
                      marginTop: "100px",
                    }}
                  >
                    JoyfulNestle Montessori Academy Cares For Your Child
                  </h1>
                  <h1
                    className="mb-5 display-3 text-white"
                    style={{ fontFamily: "Fredoka" }}
                  >
                    A MONTESSORI PREPARED ENVIRONMENT
                  </h1>
                  <div >
                    <NavLink
                      to="enrollment"
                      id='enrollment'
                      className="btn fw-bold fs-5 get-started-btn text-uppercase px-4 py-3 px-md-5 me-4 btn-border-radius"
                    >
                      Get Started
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};



export default HeroHeader;
















