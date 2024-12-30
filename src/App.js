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
import Layout from "./component/layout";

function App() {
  return (
    // <Router>
    // <ScrollToTop />
      <Routes>
          {/* HomePage with internal sections */}
        <Route path="/" element={<HomePage />} />

        {/* External Pages */}
        <Route path="/about" element={<Layout><Aboutus /> </Layout>} />
        <Route path="/enrollment" element={<Layout><Enrollment /> </Layout>} />
        <Route path="/gallery" element={<Layout><SchoolGallery /></Layout>} />
        <Route path="/testimonial" element={<Layout><Testimonial /> </Layout>} />
        <Route path="/blog" element={<Layout><BlogSection /> </Layout>} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/moregallery" element={<MoreSchoolImages />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
      </Routes>
    // </Router>
  );
}

export default App;


