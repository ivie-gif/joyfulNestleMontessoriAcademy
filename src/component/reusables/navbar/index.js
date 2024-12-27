// import React from "react";
// import about from "../../pages/aboutus";
// import contact from "../../pages/contactpage";
// import enrollment from "../../pages/enrollmentpage";
// import { Link } from "react-router-dom";
// import { Link as ScrollLink } from "react-scroll";

// const Navbar = () => {
//   return (
//     <div
//       className="container-fluid border-bottom wow fadeIn"
//       data-wow-delay="0.1s"
//     >
//       <div
//         className=" topbar d-none d-lg-block py-2 px-5"
//         style={{ borderRadius: "0 40px", backgroundColor: "#86A788" }}
//       >
//         <div
//           className="top-info d-flex align-items-center"
//         >
//           <small className="me-3 d-flex align-items-center">
//             <i className="fas fa-map-marker-alt me-2" style={{ color: "#FFFDEC" }}></i>
//             <p className="text-white mb-0">Plot 2B, Ekpo Michael Street, VOERA Estate, Arepo - Lagos-Ibadan Expressway Ogun State Nigeria</p>
//           </small>
//           <small className="me-3 d-flex align-items-center">
//             <i className="fas fa-envelope me-2" style={{ color: "#FFFDEC" }}></i>
//             <p className="text-white mb-0">info@joyfulnestle.com</p>
//           </small>
//         </div>
//       </div>
//       <div className="container px-0">
//         <nav className="navbar navbar-light navbar-expand-xl">
//           <a href="#" className="navbar-brand">
//             <h6 className=" fw-bold" style={{ color: "#86A788" }}>
//               JoyfulNestle <br /> Montessori <br />
//               <span style={{ color: "#ff4880" }}>Academy</span>
//             </h6>
//           </a>
//           <button
//             className="navbar-toggler py-2 px-3"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarCollapse"
//           >
//             <span className="fa fa-bars text-primary"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarCollapse">
//             <div className="navbar-nav mx-auto">
//               <a href="#" className="nav-item nav-link active">
//                 Home
//               </a>
//               {/* <Link to="/" className="nav-item nav-link active">
//                  Home
//                </Link> */}
//               <a href="/about" id="about-us" className="nav-item nav-link">
//                 About
//               </a>
//               <a href="/enrollment" className="nav-item nav-link">
//               Enrollment
//               </a>
//               <a href="/blog" className="nav-item nav-link">
//                 Blogs
//               </a>
//               <a href="/Contact" className="nav-item nav-link">
//                 Contact
//               </a>
//             </div>
//             <div className="d-flex me-4">
//               <div
//                 id="phone-tada"
//                 className="d-flex align-items-center justify-content-center"
//               >
//                 <a
//                   href="#"
//                   className="position-relative wow tada"
//                   data-wow-delay=".9s"
//                 >
//                   <i className="fa fa-phone-alt fa-2x me-4" style={{ color: "#ff4880" }}></i>
//                   <div
//                     className="position-absolute"
//                     style={{ top: "-7px", left: "20px" }}
//                   >
//                     <span>
//                       <i
//                         className="fa fa-comment-dots"
//                         style={{ color: "#ff4880" }}
//                       ></i>
//                     </span>
//                   </div>
//                 </a>
//               </div>
//               <div className="d-flex flex-column pe-3 " style={{ borderRight: '1px solid #ff4880' }}>
//                 <span style={{ color: "#86A788" }}>Have any questions?</span>
               
//                   <span style={{ color: "#ff4880", textDecoration: "none" }}>+2348032018658, +2348066388585</span>
            


//               </div>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Navbar;





import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className={`navbar-container ${scrolled ? "scrolled" : ""}`}>
    <div className=" wow fadeIn" data-wow-delay="0.1s">
      {/* Topbar */}
      <div
        className="topbar d-none d-lg-block py-2 px-5"
        style={{ borderRadius: "0 40px", backgroundColor: "#86A788" }}
      >
        <div className="top-info d-flex align-items-center">
          <small className="me-3 d-flex align-items-center">
            <i className="fas fa-map-marker-alt me-2" style={{ color: "#FFFDEC" }}></i>
            <p className="text-white mb-0">
              Plot 2B, Ekpo Michael Street, VOERA Estate, Arepo - Lagos-Ibadan Expressway Ogun State Nigeria
            </p>
          </small>
          <small className="me-3 d-flex align-items-center">
            <i className="fas fa-envelope me-2" style={{ color: "#FFFDEC" }}></i>
            <p className="text-white mb-0">info@joyfulnestle.com</p>
          </small>
        </div>
      </div>

      {/* Navbar */}
      <div className="container px-0">
          <nav className="navbar navbar-light navbar-expand-xl">
            {/* Brand */}
            <RouterLink to="/" className="navbar-brand">
              <h6>
                JoyfulNestle Montessori <br />
                <span>Academy</span>
              </h6>
            </RouterLink>

            {/* Mobile Toggler */}
            <button
              className="navbar-toggler py-2 px-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars text-primary"></span>
            </button>

            {/* Navbar Items */}
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav mx-auto">
                <RouterLink to="/" className="nav-item nav-link active">
                  Home
                </RouterLink>
                <ScrollLink to="About" smooth={true} duration={100} className="nav-item nav-link">
                  About
                </ScrollLink>
                <ScrollLink to="Enrollment" smooth={true} duration={100} className="nav-item nav-link">
                  Enrollment
                </ScrollLink>
                <ScrollLink to="SchoolGallery" smooth={true} duration={100} className="nav-item nav-link">
                  Gallery
                </ScrollLink>
                <ScrollLink to="Testimonial" smooth={true} duration={100} className="nav-item nav-link">
                  Testimonial
                </ScrollLink>
                <ScrollLink to="blog" smooth={true} duration={100} className="nav-item nav-link">
                  Blogs
                </ScrollLink>
                <RouterLink to="/career" className="nav-item nav-link">
                  Career
                </RouterLink>
                <RouterLink to="/contact" className="nav-item nav-link">
                  Contact
                </RouterLink>
              </div>

              {/* Contact Info */}
              <div className="d-flex me-4 border-start">
                {/* <div id="phone-tada" className="d-flex align-items-center justify-content-center">
                  <a href="tel:+2348032018658" className="position-relative">
                    <i className="fa fa-phone-alt fa-2x me-4"></i>
                  </a>
                </div> */}
                <div className="d-flex flex-column pe-5 nav-details px-3">
                  <span>Have any questions?</span>
                  <span>+2348032018658, +2348066388585</span>
                </div>
              </div>
            </div>
          </nav>
        </div>
    </div>
    </div>
  );
};

export default Navbar;

