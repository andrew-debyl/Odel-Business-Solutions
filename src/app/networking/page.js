"use client";
import MainLayout from "@/components/layout/MainLayout";
import useWow from "@/hooks/useWow";
import Link from "next/link";

const Networking = () => {
  useWow();

  return (
    <MainLayout>
      <div
        className="home2-service-section two scroll-margin mb-120"
        id="service-section"
      >
        <div className="container">
          <div className="row mb-60">
            <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
              <div
                className="section-title2 wow animate fadeInLeft"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <span>Our Services</span>
                <h2>Explore Our Solutions</h2>
              </div>
              <Link
                href="/service/service-details"
                className="primary-btn2 wow animate fadeInRight"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
                data-text="Explore More"
              >
                <span>Explore More</span>
              </Link>
            </div>
          </div>
          <div
            className="row wow animate fadeInDown"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="col-lg-12">
              <div className="sevices-wrap">
                <div className="single-services">
                  <div className="icon"></div>
                  <h5>
                    <div>WAN & LAN Services</div>
                  </h5>

                  <div className="content">
                    <p>
                      Whether you're looking for international IPVPN solutions
                      or a dedicated WDM circuit, our expertise is second to
                      none.
                    </p>
                  </div>
                  <div className="button-area">
                    <div className="explore-btn">Learn More</div>
                  </div>
                </div>
                <div className="single-services">
                  <div className="icon"></div>
                  <h5>
                    <div>ISP Services</div>
                  </h5>

                  <div className="content">
                    <p>
                      Choose from a range of services including reliable
                      connectivity, robust storage and backup, antivirus
                      protection, hosted email, e-safety, and web hosting, all
                      designed to suit your specific requirements.
                    </p>
                  </div>
                  <div className="button-area">
                    <div className="explore-btn">Learn More</div>
                  </div>
                </div>
                <div className="single-services">
                  <div className="icon"></div>
                  <h5>
                    <div>Wireless Solutions</div>
                  </h5>

                  <div className="content">
                    <p>
                      Our wireless solutions are meticulously crafted to support
                      a truly mobile workforce, enhancing connectivity and
                      flexibility.
                    </p>
                  </div>
                  <div className="button-area">
                    <div className="explore-btn">Learn More</div>
                  </div>
                </div>
                <div className="single-services">
                  <div className="icon"></div>
                  <h5>
                    <div>Managed Network Services</div>
                  </h5>

                  <div className="content">
                    <p>
                      We help reduce costs, revitalize your network, and
                      simplify complexity with our comprehensive managed network
                      services.
                    </p>
                  </div>
                  <div className="button-area">
                    <div className="explore-btn">Learn More</div>
                  </div>
                </div>
                <div className="single-services">
                  <div className="icon"></div>
                  <h5>
                    <div>Professional Services</div>
                  </h5>

                  <div className="content">
                    <p>
                      Benefit from our expert advice on security, network
                      optimization, and more, ensuring your technology operates
                      at its best.
                    </p>
                  </div>
                  <div className="button-area">
                    <div className="explore-btn">Learn More</div>
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

export default Networking;