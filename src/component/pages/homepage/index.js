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
    <Layout >
      <HeroHeader />
      <section id="about">
        <Aboutus />
      </section>
      <section id="enrollment">
        <Enrollment />
      </section>
      <section id="gallery">
        <SchoolGallery />
      </section>
      <section id="testimonial">
        <Testimonial />
      </section>
      <section id="blog">
        <BlogSection />
      </section>
    </Layout>
  );
};

export default HomePage;
