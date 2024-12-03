import React from "react";

const Home3Newslatter = () => {
  return (
    <>
      <div className="home3-newsletter-section">
        <div className="container">
          <div className="newsletter-wrapper">
            <div className="row g-lg-4 gy-5 align-items-center">
              <div
                className="col-lg-7 col-md-6 wow animate fadeInLeft"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="section-title white">
                  <span>Connect</span>
                  <h2>Get in Touch With Our Team Today</h2>
                </div>
              </div>
              <div
                className="col-lg-5 col-md-6 wow animate fadeInRight"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="newsletter-form-area">
                  <h6>Enter Your Email:</h6>
                  <div className="form-inner">
                    <input type="email" placeholder="Email Address" />
                    <button type="submit">
                      <i className="bi bi-arrow-right" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home3Newslatter;
