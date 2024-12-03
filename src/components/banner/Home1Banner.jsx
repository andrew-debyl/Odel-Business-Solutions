"use client";

import React from "react";
import Link from "next/link";

const Home1Banner = () => {
  return (
    <>
      <div className="home1-banner-section">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center">
              <div className="banner-content">
                <span className="small--header">ODEL Business Solutions</span>
                <h1>Empowering Businesses with Expert Solutions</h1>
                <p>
                  At Odel Business Solutions, we specialize in delivering
                  cutting-edge technology solutions that drive growth and
                  efficiency. With a customer-first approach, we tailor our
                  services to meet your unique business needs, ensuring seamless
                  integration and long-term success. Let us help you navigate
                  the ever-evolving tech landscape and unlock your business’s
                  full potential.
                </p>
                <div className="banner-content-bottom">
                  <Link
                    href="/contact"
                    className="primary-btn1"
                    data-text="Connect With Us"
                  >
                    <span>Connect With Us</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img src="assets/img/globe.png" alt="" className="banner--img"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home1Banner;
