import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile view (screen size)
  const checkMobileView = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    checkMobileView(); // On initial load
    window.addEventListener("resize", checkMobileView);

    return () => {
      window.removeEventListener("resize", checkMobileView); 
    };
  }, []);

  const handleNavbarToggle = () => {
    setNavbarOpen(!navbarOpen);

    if (!navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const closeNavbar = () => {
    setNavbarOpen(false);
    document.body.style.overflow = "auto"; // Re-enable scroll when menu item clicked
  };

  // Handle scrolling
  const handleScroll = () => {
    const heroHeader = document.getElementById("hero-header");
    if (heroHeader) {
      const rect = heroHeader.getBoundingClientRect();
      if (rect.bottom <= 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    } else {
      setScrolled(true);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar-container ${scrolled ? "scrolled" : ""}`} >
      <div className=" wow fadeIn" data-wow-delay="0.1s">
        {/* Topbar */}
        <div
          className="topbar d-none d-lg-block py-2 px-5"
          style={{ borderRadius: "0 40px", backgroundColor: "#00f5f9" }}
        >
          <div className="top-info d-flex align-items-center">
            <small className="me-3 d-flex align-items-center">
              <i
                className="fas fa-map-marker-alt me-2 text-dark"
              ></i>
              <p className="text-dark mb-0">
                Plot 2B, Ekpo Michael Street, VOERA Estate, Arepo - Lagos-Ibadan
                Expressway Ogun State Nigeria
              </p>
            </small>
            <small className="me-3 d-flex align-items-center border-start border-end border-dark px-3 type-5">
              <i
                className="fas fa-envelope me-2 text-dark"
              ></i>
              <p className="text-dark mb-0">JoyfulNestle@gmail.com</p>
            </small>
            <small className="me-3 d-flex align-items-center">
              <a href="https://www.facebook.com/share/p/1DPYHkkpuS/?mibextid=wwXIfr" target="_blank">
            <i class="fab fa-brands me-2 text-dark fa-facebook-f px-2"></i>
              </a>
              <a href="https://www.instagram.com/joyfulnestle?igsh=MmRqZ3FjdDZ5aHhs" target="_blank">
              <i className="fab fa-instagram me-2 text-dark"></i>
              </a>
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
              className="navbar-toggler px-2"
              type="button"
              onClick={handleNavbarToggle} // Toggle navbar open/close
              aria-controls="navbarCollapse"
              aria-expanded={navbarOpen ? 'true' : 'false'}
              aria-label="Toggle navigation"
            >
              <span className="fa fa-bars p-2" style={{ color: "#00f5f9" }}></span>
            </button>

            {/* Navbar Items */}
            <div
              className={`collapse navbar-collapse ${navbarOpen ? "show" : ""}`}
              id="navbarCollapse" style={{
                backgroundColor: navbarOpen && isMobile ? "#FFFFFF" : "transparent",
              }}
            >
              <div className="navbar-nav mx-auto">
                <RouterLink to="/" className="nav-item nav-link" onClick={closeNavbar}>
                  Home
                </RouterLink>
                <ScrollLink
                  to="About"
                  smooth={true}
                  duration={100}
                  offset={-80}
                  className="nav-item nav-link" 
                  onClick={closeNavbar}
                >
                  About
                </ScrollLink>
                <ScrollLink
                  to="Enrollment"
                  smooth={true}
                  duration={100}
                  offset={-80}
                  className="nav-item nav-link" 
                  onClick={closeNavbar}
                >
                  Enrollment
                </ScrollLink>
                <ScrollLink
                  to="SchoolGallery"
                  smooth={true}
                  duration={100}
                  offset={-80}
                  className="nav-item nav-link" 
                  onClick={closeNavbar}
                >
                  Gallery
                </ScrollLink>
                <ScrollLink
                  to="Testimonial"
                  smooth={true}
                  duration={100}
                  offset={-80}
                  className="nav-item nav-link" 
                  onClick={closeNavbar}
                >
                  Testimonial
                </ScrollLink>
                <ScrollLink
                  to="blog"
                  smooth={true}
                  duration={100}
                  offset={-80}
                  className="nav-item nav-link" 
                  onClick={closeNavbar}
                >
                  Blogs
                </ScrollLink>
                <RouterLink to="/career" className="nav-item nav-link" onClick={closeNavbar}>
                  Career
                </RouterLink>
                <RouterLink to="/contact" className="nav-item nav-link" onClick={closeNavbar}>
                  Contact
                </RouterLink>
              </div>

              {/* Contact Info */}
              <div className="d-flex me-4 border-start">
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
