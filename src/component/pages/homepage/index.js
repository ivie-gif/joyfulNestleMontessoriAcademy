import React from "react";
import Layout from "../../layout";
import HeroHeader from "../../reusables/heroheader";
import Aboutus from "../aboutus";
import Enrollment from "../enrollmentpage";
import SchoolGallery from "../gallerypage";
import BlogSection from "../blogpage";
import Testimonial from "../testimonials";

const HomePage = () => {
  return (
    <Layout>
      <HeroHeader />
      <section id="About">
        <Aboutus />
      </section>
      <section id="Enrollment">
        <Enrollment />
      </section>
      <section id="SchoolGallery">
        <SchoolGallery />
      </section>
      <section id="Testimonial">
        <Testimonial />
      </section>
      <section id="BlogSection">
        <BlogSection />
      </section>
    </Layout>
  );
};

export default HomePage;
