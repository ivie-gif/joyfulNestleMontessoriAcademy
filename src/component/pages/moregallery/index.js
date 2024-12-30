import React from 'react';
import MoreSchoolImages from '../../imagedata/moreImgData';
import Layout from '../../layout';
import CustomDiv from '../../reusables/headerDetails';

const SchoolGallery = () => {
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
          Our School Gallery
        </h3>
      </CustomDiv>
      
    <div className="container-fluid schoolImages">
      <div className="container py-5">
        <div
          className="mx-auto text-center wow fadeIn"
          data-wow-delay="0.1s"
          style={{ maxWidth: '600px', }}
        >
          <h1 className=" mb-5 display-6 fs-6 text-dark text-uppercase"> Here are some highlights from our Awesome Summer Camp 2017, a glimpse of one of our vibrant classrooms, and the fun-filled Christmas Outdoor Party</h1>
        </div>
        <div className="row g-2 justify-content-center">
          {MoreSchoolImages.map((image) => (
            <div
              key={image.id}
              className="col-md-6 col-lg-4 col-xl-3 wow fadeIn"
              data-wow-delay={image.delay}
            >
              <div className="schoolImages-item overflow-hidden" style={{borderRadius: '10px'}}>
                <img
                  src={image.imgSrc}
                  className="img-fluid w-100"
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default SchoolGallery;
