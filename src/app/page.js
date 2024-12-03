"use client";

import Footer3 from "@/components/footer/Footer3";
import Header1 from "@/components/header/Header1";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    var skillPers = document.querySelectorAll(".experience-bar-per");

    skillPers.forEach(function (skillPer) {
      var per = parseFloat(skillPer.getAttribute("data-per"));
      skillPer.style.width = per + "%";

      var animatedValue = 0;
      var startTime = null;

      function animate(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = timestamp - startTime;
        var stepPercentage = progress / 1000;

        if (stepPercentage < 1) {
          animatedValue = per * stepPercentage;
          skillPer.setAttribute("data-per", Math.floor(animatedValue) + "%");
          requestAnimationFrame(animate);
        } else {
          animatedValue = per;
          skillPer.setAttribute("data-per", Math.floor(animatedValue) + "%");
        }
      }
      requestAnimationFrame(animate);
    });
  }, []);
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Odel Business Solutions provides cutting-edge technology services designed to drive business growth and efficiency. Discover our customer-first approach, innovative solutions, and commitment to quality."
        />
        <meta
          name="keywords"
          content="Odel Business Solutions, technology services, IT solutions, business growth, customer-first, innovation, web design, web development, networking, enterprise solutions, IT consulting"
        />
      </Head>
      <Header1 />
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
              <img src="/assets/img/globe.png" alt="" className="banner--img" />
            </div>
          </div>
        </div>
      </div>
      <div className="home4-experience-section">
        <div className="container">
          <div className="row g-lg-4 gy-5 align-items-center">
            <div className="col-lg-5">
              <div
                className="experience-card-wrap mb-20 wow animate fadeInLeft"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="single-experience">
                  <div className="content">
                    <h4>Commitment to Quality</h4>
                    <p>
                      We maintain the highest standards, ensuring that every
                      solution we deliver enhances our clients' operational
                      efficiency and overall performance.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="experience-card-wrap mb-20 wow animate fadeInLeft"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <div className="single-experience">
                  <div className="content">
                    <h4>Customer-First Approach</h4>
                    <p>
                      We prioritize our clients’ success by understanding their
                      goals and tailoring solutions that align perfectly.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="experience-card-wrap wow animate fadeInLeft"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="single-experience">
                  <div className="content">
                    <h4>Innovation and Agility</h4>
                    <p>
                      In a rapidly evolving tech landscape, we stay at the
                      forefront, adapting to new trends and innovating to
                      provide cutting-edge solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 d-flex justify-content-end">
              <div
                className="experience-percentage-wrap wow animate zoomIn"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="section-title3 mb-60">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={10}
                      height={10}
                      viewBox="0 0 10 10"
                    >
                      <g>
                        <circle cx={5} cy={5} r={5} />
                      </g>
                    </svg>
                    Our Skills
                  </span>
                  <h2>Fields of Expertise</h2>
                </div>
                <div className="eg-progress-wrap">
                  <div className="eg-progress-bar-single mb-45">
                    <div className="eg-progress-bar-title">
                      <h6>Web Design</h6>
                    </div>
                    <div className="eg-progress-bar">
                      <div className="experience-bar-per" data-per={75} />
                    </div>
                  </div>
                  <div className="eg-progress-bar-single mb-45">
                    <div className="eg-progress-bar-title">
                      <h6>Web Development</h6>
                    </div>
                    <div className="eg-progress-bar">
                      <div className="experience-bar-per" data-per={85} />
                    </div>
                  </div>
                  <div className="eg-progress-bar-single mb-45">
                    <div className="eg-progress-bar-title">
                      <h6>Networking</h6>
                    </div>
                    <div className="eg-progress-bar">
                      <div className="experience-bar-per" data-per={95} />
                    </div>
                  </div>
                  <div className="eg-progress-bar-single">
                    <div className="eg-progress-bar-title">
                      <h6>Customer Experience</h6>
                    </div>
                    <div className="eg-progress-bar">
                      <div className="experience-bar-per" data-per={90} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home1-process-section mb-110">
        <div className="container">
          <div className="row mb-40">
            <div
              className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="section-title">
                <span className="small--header">ODEL Business Solutions</span>
                <h2>Join Us on This Journey</h2>
                <hr className="hr--temp" />
              </div>
            </div>
          </div>
          <div className="process-slider-area">
            <div className="row">
              <div className="col-lg-12">
                <div className="swiper-wrapper">
                  <div className="feature-card two">
                    <div className="content">
                      <h4>
                        Our Commitment and <br /> Promise to You
                      </h4>
                      <p>
                        We deliver seamless technology solutions and management
                        support. From initial consultation to final
                        implementation, our expert team is with you every step
                        of the way, ensuring your journey with us is smooth,
                        productive, and satisfying.
                      </p>
                    </div>
                  </div>
                  <div className="feature-card two">
                    <div className="content">
                      <h4>
                        Our Services and <br /> Expertise
                      </h4>
                      <p>
                        Whether you need comprehensive IT solutions, enterprise
                        technology upgrades, or advanced cybersecurity
                        protocols, our diverse offerings ensure we are your
                        single point of contact for all your business needs.
                      </p>
                    </div>
                  </div>
                  <div className="feature-card two">
                    <div className="content">
                      <h4>A Partnership Beyond Technology</h4>
                      <p>
                        At Odel Business Solutions, we believe in fostering
                        long-term relationships with our clients. Your feedback,
                        success stories, and evolving needs inspire us to
                        improve and expand.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      <Footer3 />
    </>
  );
}
