import React from "react";
import { NavLink } from "react-router-dom";

const Page404 = () => {
  return (
    <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.3s">
      <div class="container text-center py-5">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <i class="bi bi-exclamation-triangle display-1 text-primary"></i>
            <h1 class="display-1"><span style={{color: '#00DAF7'}}>4</span>0<span style={{color: '#00DAF7'}}>4</span></h1>
            <h1 class="mb-4">Page Not Found</h1>
            <p class="mb-4">
              We're sorry, the page you have looked for does not exist in our
              website! Maybe go to our home page.
            </p>
            <div>
              <NavLink
                to="/"
                className="btn fw-bold fs-5 get-started-btn text-uppercase px-4 py-3 px-md-5 me-4 btn-border-radius"
              >
                Go Home
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page404;
