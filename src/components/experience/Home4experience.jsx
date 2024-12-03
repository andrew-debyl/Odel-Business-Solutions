"use client";
import React, { useEffect } from "react";
const Home4experience = () => {
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
        var stepPercentage = progress / 1000; // Dividing by duration in milliseconds (1000ms = 1s)

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
    </>
  );
};
export default Home4experience;
