import React from "react";
import ProductItem from "./ProductItem";

const Home3ProjectManagement = () => {

  return (
    <>
      <div className="home3-project-management-section mb-110">
        <div className="container">
          <div className="row justify-content-center mb-60">
            <div className="col-lg-8">
              <div
                className="section-title2 text-center wow animate fadeInDown"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <span>ODEL Business Solutions</span>
                <h2>Our Product Range</h2>
                <p>
                  Discover our range of high-quality technology products,
                  including printers, copiers, scanners, laptops, tablets,
                  desktops, and servers. At Odel Business Solutions, we provide
                  tailored solutions to enhance efficiency and support your
                  business growth. Trust us to meet all your tech needs!
                </p>
              </div>
            </div>
          </div>
          <div className="project-management-tab-wrapper">
            <div className="project-management-nav mb-50">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  {[
                    "printer",
                    "copier",
                    "scanner",
                    "laptop",
                    "tablet",
                    "desktop",
                    "server",
                  ].map((tab) => (
                    <button
                      key={tab}
                      className={`nav-link ${
                        "printer" === tab ? "active" : ""
                      }`}
                      type="button"
                      role="tab"
                      aria-controls={tab}
                      aria-selected={"printer" === tab}
                      id={`${tab}-tab`}
                      data-bs-toggle="tab"
                      data-bs-target={`#${tab}`}
                      
                    >
                      {tab
                        .replace(/-/g, " ")
                        .replace(/\b\w/g, (c) => c.toUpperCase())}{" "}
                    </button>
                  ))}
                </div>
              </nav>
            </div>
            <div className="project-management-tab">
              <div className="tab-content" id="nav-tabContent">
                {[
                  "printer",
                  "copier",
                  "scanner",
                  "laptop",
                  "tablet",
                  "desktop",
                  "server",
                ].map((tab) => (
                  <div
                    key={tab}
                    className={`tab-pane fade ${
                      "printer" === tab ? "show active" : ""
                    }`}
                    id={tab}
                    role="tabpanel"
                    aria-labelledby={`${tab}-tab`}
                  >
                    <ProductItem productName={tab} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home3ProjectManagement;
