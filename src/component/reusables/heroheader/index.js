// import React from "react";

// const HeroHeader = () => {
//   return (
//     <div
//     id="hero-header"
//       className="container-fluid py-5 hero-header wow fadeIn "
//       data-wow-delay="0.1s" style={{backgroundColor: 'transparent'}}
//     >
//       <div className="container py-5">
//         <div className="row g-5">
//           <div className="col-lg-7 col-md-12">
//             <h1
//               className="mb-3 text-start text-uppercase"
//               style={{ color: "#fdc735", fontWeight: "100", marginTop: "120px" }}
//             >
//               We Care For Your Child
//             </h1>
//             <h1
//               className="mb-5 display-1 text-start text-white"
//               style={{ fontFamily: "Fredoka", }}
//             >
//               A MONTESSORI PREPARED ENVIRONMENT
//             </h1>
//             <div className="text-start">
//               <a
//                 href=""
//                 className="btn get-started-btn px-4 py-3 px-md-5 me-4 btn-border-radius"
//               >
//                 Get Started
//               </a>
//               {/* <a
//                 href=""
//                 className="btn get-started-btn px-4 py-3 px-md-5 btn-border-radius"
//               >
//                 Learn More
//               </a> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroHeader;






import React from 'react';
import image1 from '../../../assets/moreGallery/12.jpeg';
import image2 from '../../../assets/moreGallery/6.jpeg';
import image3 from '../../../assets/moreGallery/13.jpeg';
import image4 from '../../../assets/moreGallery/27.jpeg';
import image5 from '../../../assets/moreGallery/22.jpeg';
import { Link as RouterLink } from "react-router-dom";


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
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${img})`,
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
                    className="mb-3 pt-5 text-uppercase"
                    style={{
                      color: "#fdc735",
                      fontWeight: "100",
                      marginTop: "100px",
                    }}
                  >
                    We Care For Your Child
                  </h1>
                  <h1
                    className="mb-5 display-3 text-white"
                    style={{ fontFamily: "Fredoka" }}
                  >
                    A MONTESSORI PREPARED ENVIRONMENT
                  </h1>
                  <div >
                    <RouterLink
                      to=""
                      id='enrollment'
                      className="btn get-started-btn text-uppercase px-4 py-3 px-md-5 me-4 btn-border-radius"
                    >
                      Get Started
                    </RouterLink>
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
















