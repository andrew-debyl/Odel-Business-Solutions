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
                href="/contact"
                className="primary-btn2 wow animate fadeInRight"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
                data-text="Discover More"
              >
                <span>Discover More</span>
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
                  <div className="icon">
                    <img src="assets/icons/wanandlan.png" alt="" />
                  </div>
                  <h5>
                    <div>WAN & LAN Services</div>
                  </h5>

                  <div className="content">
                    <p>
                      We offer expert WAN and LAN services, including secure
                      international IPVPN solutions and dedicated WDM circuits
                      for high-capacity data transfer. Our reliable,
                      high-performance solutions enhance your network’s
                      efficiency and scalability, helping your business stay
                      connected and competitive.
                    </p>
                  </div>
                </div>
                <div className="single-services">
                  <div className="icon">
                    <img src="assets/icons/isp.png" alt="" />
                  </div>
                  <h5>
                    <div>ISP Services</div>
                  </h5>

                  <div className="content">
                    <p>
                      We provide a range of ISP services tailored to your needs,
                      including reliable connectivity, robust storage and
                      backup, antivirus protection, hosted email, e-safety
                      solutions, and web hosting. Each service is designed to
                      enhance your online experience and ensure your operations
                      run smoothly.
                    </p>
                  </div>
                </div>
                <div className="single-services">
                  <div className="icon">
                    <img src="assets/icons/wireless.png" alt="" />
                  </div>
                  <h5>
                    <div>Wireless Solutions</div>
                  </h5>

                  <div className="content">
                    <p>
                      Our wireless solutions are designed to support a mobile
                      workforce, providing enhanced connectivity and
                      flexibility. Tailored to meet your needs, these solutions
                      ensure your team stays connected and productive, no matter
                      where they are.
                    </p>
                  </div>
                </div>
                <div className="single-services">
                  <div className="icon">
                    <img src="assets/icons/networkservices.png" alt="" />
                  </div>
                  <h5>
                    <div>Managed Network Services</div>
                  </h5>

                  <div className="content">
                    <p>
                      Our managed network services help reduce costs, streamline
                      operations, and revitalize your network. We simplify
                      complexity, allowing you to focus on your core business
                      while we handle your network management needs.
                    </p>
                  </div>
                </div>
                <div className="single-services">
                  <div className="icon">
                    <img src="assets/icons/proffservices.png" alt="" />
                  </div>
                  <h5>
                    <div>Professional Services</div>
                  </h5>

                  <div className="content">
                    <p>
                      Leverage our expert advice on security, network
                      optimization, and more to ensure your technology operates
                      at peak performance. Our professional services are
                      designed to enhance your systems and support your business
                      goals effectively.
                    </p>
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
