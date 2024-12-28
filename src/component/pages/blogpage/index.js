import React, { useEffect } from 'react';
import BlogPosts from '../../blogdata';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container-fluid blog py-5">
      <div className="container py-5">
        <div
          className="mx-auto text-center wow fadeIn"
          data-wow-delay="0.1s"
          style={{ maxWidth: '600px' }}
        >
          <h4 className=" mb-4 d-inline-block p-2 title-border-radius text-dark text-uppercase" style={{borderBottom: '2px solid #0000000'}}>
            Latest News & Blog
          </h4>
          <h1 className=" mb-5 display-6 fs-4 text-dark text-uppercase" >Read Our Latest News & Blog</h1>
        </div>
        <div className="row g-5 justify-content-center">
          {BlogPosts.map((post, index) => (
            <div
              className="col-md-6 col-lg-6 col-xl-4 wow fadeIn"
              data-wow-delay={`${0.1 * (index + 1)}s`}
              key={index}
            >
              <div className="blog-item rounded-bottom">
                <div className="blog-img overflow-hidden position-relative img-border-radius">
                  <img
                    src={post.imgSrc}
                    className="img-fluid w-100"
                    alt="Blog post"
                  />
                </div>
                <div className="d-flex justify-content-between px-4 py-3 blog-date-comments" style={{borderBottom: '1px solid #000000', backgroundColor: '#00ecf4'}}>
                  <small style={{color: '#000000'}}>
                    <i className="fas fa-calendar me-1" style={{color: '#000000'}}></i> {post.date}
                  </small>
                </div>
                <div className="blog-content d-flex align-items-center px-4 py-3" style={{backgroundColor: '#00ecf4'}}>
                  <div className="overflow-hidden rounded-circle rounded-top" style={{color: '#0000000', border: '1px solid #000000'}}>
                    <i className="fas fa-user fs-1 rounded-circle text-center p-2 rounded-top" 
                    style={{width: '70px',
                        height: '70px',
                        borderStyle: 'dotted',
                        borderColor: '#000000',
                        color: '#000000'}}></i>
                  </div>
                  <div className="ms-3">
                    <h6  style={{color: '#000000'}}>{post.authorName}</h6>
                  </div>
                </div>
                <div className="px-4 pb-4 rounded-bottom" style={{backgroundColor: '#00ecf4', color: '#000000'}}>
                  <div className="blog-text-inner">
                    <a href="#" className="h4" >
                      {post.title}
                    </a>
                    <p className="mt-3 mb-4" style={{color: '#000000'}}>{post.description}</p>
                  </div>
                  <div className="text-center">
                     <Link to={`/blog/${post.slug}`}>
                  <button className="btn px-4 py-2 mb-3 btn-border-radius" 
                      style={{backgroundColor: '#fdc735', color: '#000000'}}>View Details</button>
                </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
