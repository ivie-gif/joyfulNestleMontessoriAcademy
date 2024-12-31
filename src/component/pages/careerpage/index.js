import React from "react";
import Layout from "../../layout";
import CustomDiv from "../../reusables/headerDetails";

const ContactUs = () => {
  return (
   <Layout>
      <CustomDiv
        backgroundColor="#457992"
        color="#FFFFFF"
        minHeight="350px"
        width="100%"
        padding="20px"
      >
        <h3
          className="mt-5 text-center text-uppercase display-4  "
          style={{ paddingTop: "150px", borderBottom: "3px solid #FFFFFF" }}
        >
          Join Us
        </h3>
      </CustomDiv>
      <div
        className="container-fluid career-page py-5"
        style={{  backgroundColor: '#FFFFFF' }}
      >
        <div className="container ">
          <div>
            <p>
              At JoyfulNestle Montessori Academy we place high premium on the
              well being and learning development of our pupils, therefore we
              are always on the lookout for individuals with high moral values
              and disciplined professional ethics.
            </p>
            <p>
              Working at JoyfulNestle Montessori Academy provides you unique
              opportunities for career growth as you will be exposed first hand
              to Montessori curriculum and methods.
            </p>
            <p>We currently have open vacancies for the following roles</p>
            <p>Qualified Montessori Class Assistant</p>
            <p>Qualified Class Teachers</p>
            <p>Crèche Minders</p>
            <p>Apply by sending your CV to <span className="text-danger">JoyfulNestle@gmail.com</span></p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
