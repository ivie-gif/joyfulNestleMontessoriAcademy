import React from 'react';
import SchoolImages from '../../imagedata';

const SchoolGallery = () => {
  return (
    <div className="container-fluid schoolImages">
      <div className="container py-5">
        <div
          className="mx-auto text-center wow fadeIn"
          data-wow-delay="0.1s"
          style={{ maxWidth: '600px' }}
        >
          <h4 className="mb-4 d-inline-block p-2 title-border-radius"  style={{ borderBottom: '2px solid #000000'}}>
            TAKE A SCHOOL TOUR
          </h4>
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
      </div>
    </div>
  );
};

export default SchoolGallery;
