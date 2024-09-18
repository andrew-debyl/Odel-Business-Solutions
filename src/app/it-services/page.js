import MainLayout from "@/components/layout/MainLayout";

const ITServices = () => {
  return (
    <MainLayout>
      <div
        className="service-details-page pt-120 mb-120"
        id="service-details-section"
      >
        <div className="container">
          <div className="service-details-top-area mb-80">
            <div className="row g-lg-4 gy-5 align-items-center">
              <div
                className="col-lg-6 order-lg-1 order-2 wow animate fadeInLeft"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="service-details-top-content">
                  <p>
                    We offer rapid delivery of IT hardware and infrastructure
                    from top brands including Apple, Citrix, Dell, HP, Hitachi
                    Data Systems (HDS), IBM, Lenovo, NetApp, and VMware — all at
                    competitive prices. Whether you need desktops, laptops,
                    printers, or telephony solutions, we ensure prompt and
                    accurate delivery every time. Our commitment to speed,
                    quality, and value sets us apart from the competition.
                  </p>
                  <p>
                    In addition, our virtualization and cloud services provide
                    significant competitive advantages, enhancing business
                    agility, reducing costs, and enabling mobility. Our
                    technological solutions are designed to meet these needs
                    effectively.
                  </p>
                  <p>
                    Our team is uniquely equipped with the skills and expertise
                    of a full-service provider across voice, networking, data
                    center, and contact center technologies. We offer
                    comprehensive services, from design and implementation to
                    management and support, utilizing the latest technologies
                    from leading vendors.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-6 order-lg-2 order-1 wow animate fadeInRight"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="service-details-img">
                  <img
                    src="/assets/img/innerpage/service-details-feature-img.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
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
                <div className="faq-content">
                  <p>
                    Our unparalleled expertise in security, disaster recovery,
                    and business continuity ensures that you can rely on us for
                    confidence and protection every day. We also offer
                    professional services including business and technical
                    consultancy, design and implementation advice, health
                    checks, readiness reviews, and onsite support, allowing you
                    to maximize your technology investment.
                  </p>
                  <p>
                    Thousands of businesses trust us for their IT needs. With
                    tier-1 accreditations from top technology vendors like
                    SHARP, DELL, Toshiba, Canon, RICOH, Konica Minolta, and
                    Kyocera, we provide the scale and specialized teams
                    necessary to deliver exceptional service and the best prices
                    available.
                  </p>
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
