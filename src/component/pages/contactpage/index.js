import React from 'react';
import Layout from '../../layout';
import CustomDiv from '../../reusables/headerDetails';

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
          Contact us
        </h3>
      </CustomDiv>
    <div className=" contact-page bg-light">
      <div className="container py-5">
        <div className="p-5 rounded" >
          <div
            className="mx-auto text-center"
            style={{ maxWidth: '700px' }}
          >
            <h1 className="mb-4 display-6 fs-2 title-border-radius text-uppercase" style={{color: '#fdc735'}}>For Any Query</h1>
          </div>
          <div className="row g-3 mb-5">
            <div className="col-lg-4">
              <div className="d-flex w-100 p-4 rounded bg-white" style={{border: '1px solid #fdc735'}}>
                <i className="fas fa-map-marker-alt fa-2x me-4" style={{color: '#fdc735'}}></i>
                <div>
                  <h4>Address</h4>
                  <p className="mb-2">Plot 2B, Ekpo Michael Street, VOERA Estate, Arepo - Lagos-Ibadan Expressway Ogun State Nigeria</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex w-100 p-4 rounded bg-white" style={{border: '1px solid #fdc735'}}>
                <i className="fa fa-phone-alt fa-2x me-4" style={{color: '#fdc735'}}></i>
                <div>
                  <h4>Telephone</h4>
                  <p className="mb-2">+2348032018658, +2348066388585</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex w-100 p-4 rounded bg-white" style={{border: '1px solid #fdc735'}}>
                <i className="fas fa-envelope fa-2x me-4" style={{color: '#fdc735'}}></i>
                <div>
                  <h4>Mail Us</h4>
                  <p className="mb-2">JoyfulNestle@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-lg-6">
              <form action="">
                <input
                  type="text"
                  className="w-100 form-control py-3 mb-5 "
                  placeholder="Your Name"
                  style={{boder: '1px solid #fdc735'}}
                />
                <input
                  type="email"
                  className="w-100 form-control py-3 mb-5"
                  placeholder="Enter Your Email"
                  style={{boder: '1px solid #fdc735'}}
                />
                <textarea
                  className="w-100 form-control mb-5"
                  rows="8"
                  placeholder="Your Message"
                  style={{boder: '1px solid #fdc735'}}
                ></textarea>
                <button
                  className="w-100 btn btn-primary form-control py-3 text-white "
                  type="submit"
                  style={{backgroundColor: '#fdc735', boder: '1px solid #fdc735'}}
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="col-lg-6">
              <div className="border h-100 rounded" style={{boder: '1px solid #fdc735'}}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31714.285167269992!2d3.4860516940053065!3d6.664549156835215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bba6e8d1c5b55%3A0x2b68fb84f2f1c3ab!2sPlot%202B%2C%20Ekpo%20Michael%20Street%2C%20VOERA%20Estate%2C%20Arepo%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1708713456789!5m2!1sen!2sng"
                className="w-100 h-100 rounded"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default ContactUs;
