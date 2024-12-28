import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./component/pages/homepage";
import ContactPage from "./component/pages/contactpage";
import BlogSection from "./component/pages/blogpage";
import BlogDetail from "./component/pages/blogdetails";
import Aboutus from "./component/pages/aboutus";
import Enrollment from "./component/pages/enrollmentpage";
import Career from "./component/pages/careerpage";
import SchoolGallery from "./component/pages/gallerypage";
import Testimonial from "./component/pages/testimonials";
import MoreSchoolImages from "./component/pages/moregallery";

function App() {
  return (
    // <Router>
    // <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/enrollment" element={<Enrollment />} />
        <Route path="/gallery" element={<SchoolGallery />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/moregallery" element={<MoreSchoolImages />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
      </Routes>
    // </Router>
  );
}

export default App;


