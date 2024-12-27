import React from "react";
import Layout from "../../layout";
import HeroHeader from "../../reusables/heroheader";

const ContactUs = () => {
  return (
   <Layout>
      <div
        className="container-fluid career-page py-5"
        style={{ marginTop: "50px" }}
      >
        <div className="container py-5">
          <div className="p-5 rounded">
            <div className="mx-auto text-center" style={{ maxWidth: "700px" }}>
              <h4
                className=" mb-4 border-2 d-inline-block p-2 title-border-radius text-dark"
                style={{ borderBottom: "2px solid #000000" }}
              >
                Join Us
              </h4>
            </div>
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
            <p>Apply by sending your CV to <span className="text-danger">info@joyfulnestle.com</span></p>
          </div>
        </div>
      </div>
      {/* </HeroHeader> */}
    </Layout>
  );
};

export default ContactUs;
