import MainLayout from "@/components/layout/MainLayout";
import Home3Feature from "@/components/feature/Home3Feature";

const ITServices = () => {
  return (
    <MainLayout>
      <div
        className="service-details-page pt-120 mb-120"
        id="service-details-section"
      >
        <Home3Feature />
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
                    src="/assets/img/innerpage/service-details-faq-img.jpg"
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
