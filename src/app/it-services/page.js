import MainLayout from "@/components/layout/MainLayout";

const ITServices = () => {
  return (
    <MainLayout>
      <div
        className="service-details-page pt-120 mb-120"
        id="service-details-section"
      >
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
                    <span>IT Services</span>
                    <h2>IT Solutions for Modern Businesses</h2>
                  </div>
                  <div className="feature-list-wrap">
                    <div>
                      <div
                        className="feature-and-progress wow animate fadeInDown"
                        data-wow-delay="400ms"
                        data-wow-duration="1500ms"
                      >
                        <div className="single-feature">
                          <div className="content">
                            <h6>Rapid Delivery of Top IT Hardware</h6>
                            <p>
                              We offer rapid delivery of IT hardware and
                              infrastructure from top brands like Apple, Citrix,
                              Dell, HP, IBM, Lenovo, NetApp, and VMware, at
                              competitive prices. We ensure prompt and accurate
                              delivery every time, setting us apart with our
                              commitment to speed, quality, and value.
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
                            <h6>Business Agility with Cloud Services</h6>
                            <p>
                              Our virtualization and cloud services enhance
                              business agility, reduce costs, and enable
                              mobility. Our solutions are designed to meet these
                              needs effectively.
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
                            <h6>Full-Service IT Solutions</h6>
                            <p>
                              Our team has the expertise of a full-service
                              provider across voice, networking, data center,
                              and contact center technologies. We deliver
                              comprehensive services from design and
                              implementation to management and support, using
                              the latest technologies from leading vendors.
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
                      src="assets/img/site/updating-ai-systems.jpg"
                      className="home3feature--img"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div
            className="service-details-faq-area wow animate fadeInDown"
            data-wow-delay="400ms"
            data-wow-duration="1500ms"
          >
            <div className="row g-lg-4 gy-5 align-items-xl-center">
              <div className="col-lg-6">
                <div className="service-details-faq-img">
                  <img
                    src="/assets/img/site/businessman-pointing.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="home3-feature-section">
                  <div className="feature-content-wrap">
                    <div className="progressBarContainer">
                      <div
                        className="feature-and-progress wow animate fadeInDown"
                        data-wow-delay="400ms"
                        data-wow-duration="1500ms"
                      >
                        <div className="single-feature">
                          <div className="content">
                            <h6>Security and Business Continuity Expertise</h6>
                            <p>
                              Our unparalleled expertise in security, disaster
                              recovery, and business continuity ensures that you
                              can rely on us for confidence and protection every
                              day. We also offer professional services including
                              business and technical consultancy, design and
                              implementation advice, health checks, readiness
                              reviews, and onsite support, allowing you to
                              maximize your technology investment.
                            </p>
                          </div>
                        </div>
                        <span data-slick-index={0} className="progressBar" />
                      </div>
                      <br />
                      <div
                        className="feature-and-progress wow animate fadeInDown"
                        data-wow-delay="400ms"
                        data-wow-duration="1500ms"
                      >
                        <div className="single-feature">
                          <div className="content">
                            <h6>Trusted by Leading Businesses</h6>
                            <p>
                              Thousands of businesses trust us for their IT
                              needs. With tier-1 accreditations from top
                              technology vendors like SHARP, DELL, Toshiba,
                              Canon, RICOH, Konica Minolta, and Kyocera, we
                              provide the scale and specialized teams necessary
                              to deliver exceptional service and the best prices
                              available.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ITServices;
