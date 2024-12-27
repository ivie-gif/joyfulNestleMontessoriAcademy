import React from 'react';
import Layout from '../../layout';

const Enrollment = () => {
 // Assign specific colors based on index

  return (
    // <Layout>
    <div className="container-fluid enrollment py-5">
      <div className="container py-5">
        <div
          className="mx-auto text-center wow fadeIn"
          data-wow-delay="0.1s"
          style={{ maxWidth: '700px' }}
        >
          <h4 className="mb-4 d-inline-block p-2 title-border-radius" style={{borderBottom: '2px solid #000000'}}>
            ENROLL IN OUR SCHOOL
          </h4>
          <h1 className="mb-5 text-dark display-6 fs-4 text-uppercase">Your Child's Journey to Success Begins Here!</h1>
        </div>
        <div className="row g-5">
  {[
    {
      icon: 'fas fa-book',
      title: 'Learn Through Play',
      description:
        '"Where Every Activity is an Opportunity to Grow". Our programs combine fun with learning, allowing children to develop critical thinking, social skills, and creativity.',
      delay: '0.1s',
      color: '#fdc735',
    },
    {
      icon: 'fas fa-sort-alpha-down',
      title: 'Tailored Learning Paths',
      description:
        '"Individual Attention for Every Unique Learner". We focus on each child\'s pace and interests, ensuring they achieve their full potential with customized learning plans.',
      delay: '0.3s',
      color: '#00ecf4',
    },
    {
      icon: 'fas fa-users',
      title: 'Expert Educators',
      description:
        '"Teachers Who Truly Care About Your Child\'s Success". Our Montessori-certified educators create a warm, supportive environment that encourages curiosity.',
      delay: '0.5s',
      color: '#9ad66f',
    },
    {
      icon: 'fas fa-school',
      title: 'Supportive Learning',
      description:
        '"Growing Together, Learning Together". We build a strong unity of teachers, and peers, creating a supportive network for your child\'s success.',
      delay: '0.7s',
      color: '#e8a4cf',
    },
  ].map((enrollment, index) => {

    return (
      <div
        className="col-md-6 col-lg-6 col-xl-3 wow fadeIn"
        data-wow-delay={enrollment.delay}
        key={index}
      >
        {/* Apply background color dynamically */}
        <div
          className="text-center border bg-white enrollment-item"
          
        >
          <div className="enrollment-content d-flex align-items-center justify-content-center p-4" style={{ backgroundColor: enrollment.color }}>
            <div className="enrollment-content-inner">
              <div className="p-4">
                <i
                  className={`${enrollment.icon} fa-2x`}
                  style={{ color: '#86A788' }}
                ></i>
              </div>
              <a className="h6" style={{ color: '#86A788' }}>
                {enrollment.title}
              </a>
              <p className="my-3" style={{ color: '#86A788' }}>
                {enrollment.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  })}
</div>

      </div>
    </div>
    // </Layout>
  );
};

export default Enrollment;
