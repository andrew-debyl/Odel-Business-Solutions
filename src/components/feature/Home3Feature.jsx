"use client";

const Home3Feature = () => {
  return (
    <>
      <div className="home3-feature-section mb-110">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="feature-content-wrap">
                <div
                  className="section-title2 mb-40 wow animate fadeInDown"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <span>Why Choose This</span>
                  <h2>Innovate with Confidence</h2>
                  <p>
                    Welcome to Zenfy, where digital innovation meets strategic
                    excellence. As a dynamic force in the realm of digital
                    marketing, we are dedicated to propelling businesses into
                    the spotlight of online success.
                  </p>
                </div>
                <div className="feature-list-wrap">
                  <div className="progressBarContainer">
                    <div
                      className="feature-and-progress wow animate fadeInDown"
                      data-wow-delay="400ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="single-feature">
                        <div className="content">
                          <h6>List &amp; Board View</h6>
                          <p>
                            Sed accumsan sem cursus luctus porta. amem Phasellu
                            du enim, efficitur quis velit ac, fringilla posuere
                            leo fusci onion of the most important to this work.
                          </p>
                        </div>
                      </div>
                      <span data-slick-index={0} className="progressBar" />
                    </div>
                    <div
                      className="feature-and-progress wow animate fadeInDown"
                      data-wow-delay="600ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="single-feature two pt-25">
                        <div className="content">
                          <h6>Multiple Teams</h6>
                          <p>
                            Sed accumsan sem cursus luctus porta. amem Phasellu
                            du enim, efficitur quis velit ac, fringilla posuere
                            leo fusci onion of the most important to this work.
                          </p>
                        </div>
                      </div>
                      <span data-slick-index={1} className="progressBar" />
                    </div>
                    <div
                      className="feature-and-progress wow animate fadeInDown"
                      data-wow-delay="800ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="single-feature three pt-25">
                        <div className="content">
                          <h6>No Page Load</h6>
                          <p>
                            Sed accumsan sem cursus luctus porta. amem Phasellu
                            du enim, efficitur quis velit ac, fringilla posuere
                            leo fusci onion of the most important to this work.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="slider-item">
                <div className="feature-img">
                  <img
                    src="assets/img/home3/home3-feature-slider-img1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home3Feature;
