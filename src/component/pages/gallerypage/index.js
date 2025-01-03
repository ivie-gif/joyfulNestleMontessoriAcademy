import React from 'react';
import SchoolImages from '../../imagedata';
import { Link } from 'react-router-dom';
import CustomDiv from '../../reusables/headerDetails';


const SchoolGallery = () => {
  return (
    <>
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
          Take a School Tour
        </h3>
      </CustomDiv>
    <div className="container-fluid schoolImages">
      <div className="container py-5">
        <div
          className="mx-auto text-center wow fadeIn"
          data-wow-delay="0.1s"
          style={{ maxWidth: '600px' }}
        >
          <h1 className=" mb-5 display-6 fs-4 text-dark text-uppercase"> Some of the events from Awesome Summer camp 2017</h1>
        </div>
        <div className="row g-2 justify-content-center">
          {SchoolImages.map((image) => (
            <div
              key={image.id}
              className="col-md-6 col-lg-4 col-xl-3 wow fadeIn"
              data-wow-delay={image.delay}
            >
              <div className="schoolImages-item border overflow-hidden" style={{borderRadius: '10px'}}>
                <img
                  src={image.imgSrc}
                  className="img-fluid w-100"
                  alt={`schoolImages ${image.id}`}
                />
              </div>
            </div>
          ))}
        </div>
        {/* More Details Button */}
        <div className='text-center'>
            <Link
              to="/moregallery"
              className="btn px-5 fw-bold fs-6 more-gallery-btn py-3 mt-5 btn-border-radius text-center text-uppercase"
            >
              More Galleries
              </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default SchoolGallery;
