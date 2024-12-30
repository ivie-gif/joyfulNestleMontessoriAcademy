import React, { useState, useEffect } from "react";
import { NavLink, Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import LogoImage from "../../../assets/JNMALogo.png";

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
    document.body.style.overflow = "auto"; 
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
    <div className={`navbar-container ${scrolled ? "scrolled" : ""}`}>
      <div className="wow fadeIn" data-wow-delay="0.1s">
        {/* Topbar - Always visible on mobile as well */}
        <div
          className="topbar py-2 px-4"
          style={{ borderRadius: "0 40px", backgroundColor: "#00f5f9" }}
        >
          <div className="top-info">
            {/* Address */}
            <small className=" d-inline-flex flex-row flex-sm-row align-items-center border-dark w-lg-auto">
              <i className="fas fa-map-marker-alt me-2 text-dark"></i>
              <p className="text-dark mb-0 w-sm-100">
                Plot 2B, Ekpo Michael Street, VOERA Estate, Arepo - Lagos-Ibadan
                Expressway Ogun State Nigeria.
              </p>
            </small>

            {/* Email */}
            <small className="d-inline-flex flex-row flex-sm-row align-items-center border-end border-0-sm border-dark px-2 ">
              <i className="fas fa-envelope me-2 text-dark"></i>
              <p className="text-dark mb-0">JoyfulNestle@gmail.com</p>
            </small>
            {/* Social Media */}
            <small className=" d-inline-flex flex-row flex-sm-row align-items-center">
              <a
                href="https://www.facebook.com/share/p/1DPYHkkpuS/?mibextid=wwXIfr"
                target="_blank"
              >
                <i className="fab fa-brands me-2 text-dark fa-facebook-f px-2"></i>
              </a>
              <a
                href="https://www.instagram.com/joyfulnestle?igsh=MmRqZ3FjdDZ5aHhs"
                target="_blank"
              >
                <i className="fab fa-instagram me-2 text-dark"></i>
              </a>
            </small>
          </div>
        </div>

        {/* Navbar */}
        <div className="py-3">
          <nav className="navbar navbar-light navbar-expand-xl">
            {/* Brand */}
            <div className="logo d-flex align-items-center me-auto me-xl-5 px-3" >
            <img src={LogoImage} alt="School Logo" style={{maxHeight: '60px',}} />
            </div>

            {/* Mobile Toggler */}
            <button
              className="navbar-toggler px-2"
              type="button"
              onClick={handleNavbarToggle}
              aria-controls="navbarCollapse"
              aria-expanded={navbarOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <span
                className="fa fa-bars p-2"
                style={{ color: "#00f5f9" }}
              ></span>
            </button>

            {/* Navbar Items */}
            <div
              className={`collapse text-uppercase fw-bold navbar-collapse ${navbarOpen ? "show" : ""}`}
              id="navbarCollapse" 
              style={{
                backgroundColor:
                  navbarOpen && isMobile ? "#FFFFFF" : "transparent",
              }}
            >
              <div className="navbar-nav mx-auto">
                <RouterLink
                  to="/"
                  className="nav-item nav-link"
                  onClick={closeNavbar}
                >
                  Home
                </RouterLink>
                <NavLink
                  to="/about"
                  id="about"
                  smooth={true}
                  duration={100}
                  offset={-60}
                  className="nav-item nav-link"
                  onClick={closeNavbar}
                >
                  About
                </NavLink>
                <NavLink
                  to="/enrollment"
                  id="enrollment"
                  smooth={true}
                  duration={100}
                  offset={-60}
                  className="nav-item nav-link"
                  onClick={closeNavbar}
                >
                  Enrollment
                </NavLink>
                <NavLink
                  to="/gallery"
                  id="gallery"
                  smooth={true}
                  duration={100}
                  offset={-60}
                  className="nav-item nav-link"
                  onClick={closeNavbar}
                >
                  Gallery
                </NavLink>
                <NavLink
                  to="/admissions"
                  id="admissions"
                  smooth={true}
                  duration={100}
                  offset={-60}
                  className="nav-item nav-link"
                  onClick={closeNavbar}
                >
                  Admissions
                </NavLink>
                <NavLink
                  to="/blog"
                  id="blog"
                  smooth={true}
                  duration={100}
                  offset={-60}
                  className="nav-item nav-link"
                  onClick={closeNavbar}
                >
                  Blogs
                </NavLink>
                <NavLink
                  to="/career"
                  className="nav-item nav-link"
                  onClick={closeNavbar}
                >
                  Career
                </NavLink>
                <NavLink
                  to="/contact"
                  className="nav-item nav-link"
                  onClick={closeNavbar}
                >
                  Contact
                </NavLink>
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
