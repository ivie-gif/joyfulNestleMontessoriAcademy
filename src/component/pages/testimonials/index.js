import React from "react";
import Layout from "../../layout";
import CustomDiv from "../../reusables/headerDetails";

const Testimonial = () => {
  return (
    <>
    <CustomDiv
        backgroundColor="#000000"
        color="#fdc735"
        minHeight="350px"
        width="100%"
        padding="20px"
      >
        <h3
          className="mt-5 text-center text-uppercase display-4  "
          style={{ paddingTop: "150px", borderBottom: "3px solid #fdc735" }}
        >
          Testimonials
        </h3>
      </CustomDiv>
   
    <div className="container-fluid py-5 testimonial bg-light">
      <div className="container py-5">
        <h4 className="mb-4 d-inline-block p-2 title-border-radius text-uppercase">
        Parent's Comments
        </h4>
      <p className="fw-bold">
        “JoyfulNestle Montessori Academy is making positive impact on my
        daughter Mojetoluwa. She has learnt the art of leadership and forms
        independent opinion on issues. The Montessori curriculum is indeed
        positively effective, kudos to the staffers of JoyfulNestle Montessori
        Academy.”
      </p>
      <p className="fw-bold pb-5"> — Mojetoluwa's Dad</p>
    </div>
    </div>
    </>
  );
};

export default Testimonial;
