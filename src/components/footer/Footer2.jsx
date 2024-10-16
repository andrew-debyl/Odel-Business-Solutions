import Link from "next/link";
import React from "react";

const Footer2 = () => {
  return (
    <>
      <footer className="footer-section style-2">
        <div className="container">
          <div className="footer-top">
            <div className="row g-lg-4 gy-5 justify-content-center">
              <div className="col-lg-4 col-md-8 col-sm-6">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <Link href="/index2" className="logo-dark">
                      <img src="/assets/img/logo-odel.png" alt="" />
                    </Link>
                  </div>
                  <div className="content-wrapper">
                    <div className="content">
                      <span>Phone:</span>
                      <h6>
                        <a href="tel:+14166276564">+1 416-627-6564</a>
                      </h6>
                    </div>
                    <div className="content">
                      <span>Email Address:</span>
                      <h6>
                        <a href="mailto:sales@odelbusinesssolutions.com">
                          sales@odelbusinesssolutions.com
                        </a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 d-flex justify-content-lg-center justify-content-sm-end">
                <div className="footer-widget">
                  <div className="widget-title">
                    <h4>Company</h4>
                  </div>
                  <div className="menu-container">
                    <ul className="widget-list">
                      <li>
                        <Link href="/networking">Networking</Link>
                      </li>
                      <li>
                        <Link href="/about">About Us</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6 d-flex justify-content-lg-center justify-content-sm-start">
                <div className="footer-widget">
                  <div className="widget-title">
                    <h4>Products</h4>
                  </div>
                  <div className="menu-container">
                    <ul className="widget-list">
                      <li>
                        <Link href="/about">Printer</Link>
                      </li>
                      <li>
                        <Link href="/case-study">Copier</Link>
                      </li>
                      <li>
                        <Link href="/blog">Scanner</Link>
                      </li>
                      <li>
                        <Link href="/pricing-plan">Laptop</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-1 col-sm-6 d-flex justify-content-lg-center justify-content-sm-start">
                <div className="footer-widget">
                  <div className="widget-title-temp"></div>
                  <div className="menu-container">
                    <ul className="widget-list">
                      <li>
                        <Link href="/about">Tablet</Link>
                      </li>
                      <li>
                        <Link href="/case-study">Desktop</Link>
                      </li>
                      <li>
                        <Link href="/blog">Server</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="copyright-area">
              <p>Copyright © Odel Business Solutions. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer2;
