import Link from "next/link";
import React, { useEffect } from "react";
import { useValue } from "@/hooks/ValueContext";

const Home3ProjectManagement = () => {
  const { setActiveTab } = useValue();
  const { activeTab } = useValue();

  useEffect(() => {
    const updateActiveTabFromHash = () => {
      const hash = window.location.hash.substring(1) || "marketing-teams";
      setActiveTab(hash);
    };

    updateActiveTabFromHash();

    window.addEventListener("hashchange", updateActiveTabFromHash);

    return () => {
      window.removeEventListener("hashchange", updateActiveTabFromHash);
    };
  }, []);

  return (
    <>
      <div className="home3-project-management-section mb-110">
        <div className="container">
          <div className="row justify-content-center mb-60">
            <div className="col-lg-8">
              <div
                className="section-title text-center wow animate fadeInDown"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
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
                  Project Management
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
                </span>
                <h2>Master Your Project Success</h2>
                <p>
                  Welcome to Zenfy, where digital innovation meets strategic
                  excellence. As a dynamic force in the realm of digital
                  marketing, we are dedicated to propelling businesses into the
                  spotlight of online success.
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
                        activeTab === tab ? "active" : ""
                      }`}
                      type="button"
                      role="tab"
                      aria-controls={tab}
                      aria-selected={activeTab === tab}
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
                      activeTab === tab ? "show active" : ""
                    }`}
                    id={tab}
                    role="tabpanel"
                    aria-labelledby={`${tab}-tab`}
                  >
                    <div className="row g-0">
                      <div className="col-lg-6">
                        <div className="project-management-tab-content">
                          <div
                            className="tab-content-top wow animate fadeInDown"
                            data-wow-delay="400ms"
                            data-wow-duration="1500ms"
                          >
                            <h3>Marketing Teams</h3>
                            <p>
                              Aliquam erat volutpat pelentequ habitant morb
                              tristique senec et netus et malesuada fames ac
                              turpis egestas vestibulum annvotet ipsum primis in
                              faucibus orci luctus et ultrices.
                            </p>
                            <ul>
                              <li>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={15}
                                  height={15}
                                  viewBox="0 0 15 15"
                                >
                                  <g>
                                    <path d="M6.84173 14.1071C6.79635 14.1071 6.75147 14.0977 6.7099 14.0795C6.66833 14.0613 6.63098 14.0348 6.60018 14.0014L0.0873947 6.95647C0.0439788 6.9095 0.0151968 6.85089 0.00457124 6.78782C-0.00605429 6.72475 0.00193752 6.65995 0.0275687 6.60135C0.0531998 6.54275 0.0953585 6.4929 0.148885 6.45789C0.202411 6.42287 0.264983 6.40423 0.328943 6.40422H3.46384C3.51091 6.40423 3.55743 6.41433 3.60026 6.43385C3.64309 6.45336 3.68124 6.48184 3.71213 6.51735L5.88873 9.02145C6.12396 8.51862 6.57933 7.68137 7.37841 6.66117C8.55974 5.15293 10.7571 2.93479 14.5164 0.932401C14.5891 0.893707 14.6736 0.883665 14.7533 0.904256C14.833 0.924848 14.9021 0.974577 14.947 1.04362C14.9918 1.11267 15.0091 1.19602 14.9955 1.2772C14.9818 1.35839 14.9383 1.43152 14.8733 1.48214C14.859 1.49336 13.4095 2.63482 11.7413 4.72559C10.2061 6.64962 8.16519 9.7957 7.16094 13.8572C7.1433 13.9286 7.10227 13.992 7.04439 14.0373C6.98652 14.0826 6.91513 14.1072 6.84163 14.1073L6.84173 14.1071Z" />
                                  </g>
                                </svg>
                                Social Media Design
                              </li>
                              <li>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={15}
                                  height={15}
                                  viewBox="0 0 15 15"
                                >
                                  <g>
                                    <path d="M6.84173 14.1071C6.79635 14.1071 6.75147 14.0977 6.7099 14.0795C6.66833 14.0613 6.63098 14.0348 6.60018 14.0014L0.0873947 6.95647C0.0439788 6.9095 0.0151968 6.85089 0.00457124 6.78782C-0.00605429 6.72475 0.00193752 6.65995 0.0275687 6.60135C0.0531998 6.54275 0.0953585 6.4929 0.148885 6.45789C0.202411 6.42287 0.264983 6.40423 0.328943 6.40422H3.46384C3.51091 6.40423 3.55743 6.41433 3.60026 6.43385C3.64309 6.45336 3.68124 6.48184 3.71213 6.51735L5.88873 9.02145C6.12396 8.51862 6.57933 7.68137 7.37841 6.66117C8.55974 5.15293 10.7571 2.93479 14.5164 0.932401C14.5891 0.893707 14.6736 0.883665 14.7533 0.904256C14.833 0.924848 14.9021 0.974577 14.947 1.04362C14.9918 1.11267 15.0091 1.19602 14.9955 1.2772C14.9818 1.35839 14.9383 1.43152 14.8733 1.48214C14.859 1.49336 13.4095 2.63482 11.7413 4.72559C10.2061 6.64962 8.16519 9.7957 7.16094 13.8572C7.1433 13.9286 7.10227 13.992 7.04439 14.0373C6.98652 14.0826 6.91513 14.1072 6.84163 14.1073L6.84173 14.1071Z" />
                                  </g>
                                </svg>
                                Custom ad strategy
                              </li>
                              <li>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={15}
                                  height={15}
                                  viewBox="0 0 15 15"
                                >
                                  <g>
                                    <path d="M6.84173 14.1071C6.79635 14.1071 6.75147 14.0977 6.7099 14.0795C6.66833 14.0613 6.63098 14.0348 6.60018 14.0014L0.0873947 6.95647C0.0439788 6.9095 0.0151968 6.85089 0.00457124 6.78782C-0.00605429 6.72475 0.00193752 6.65995 0.0275687 6.60135C0.0531998 6.54275 0.0953585 6.4929 0.148885 6.45789C0.202411 6.42287 0.264983 6.40423 0.328943 6.40422H3.46384C3.51091 6.40423 3.55743 6.41433 3.60026 6.43385C3.64309 6.45336 3.68124 6.48184 3.71213 6.51735L5.88873 9.02145C6.12396 8.51862 6.57933 7.68137 7.37841 6.66117C8.55974 5.15293 10.7571 2.93479 14.5164 0.932401C14.5891 0.893707 14.6736 0.883665 14.7533 0.904256C14.833 0.924848 14.9021 0.974577 14.947 1.04362C14.9918 1.11267 15.0091 1.19602 14.9955 1.2772C14.9818 1.35839 14.9383 1.43152 14.8733 1.48214C14.859 1.49336 13.4095 2.63482 11.7413 4.72559C10.2061 6.64962 8.16519 9.7957 7.16094 13.8572C7.1433 13.9286 7.10227 13.992 7.04439 14.0373C6.98652 14.0826 6.91513 14.1072 6.84163 14.1073L6.84173 14.1071Z" />
                                  </g>
                                </svg>
                                Advanced demographic
                              </li>
                              <li>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={15}
                                  height={15}
                                  viewBox="0 0 15 15"
                                >
                                  <g>
                                    <path d="M6.84173 14.1071C6.79635 14.1071 6.75147 14.0977 6.7099 14.0795C6.66833 14.0613 6.63098 14.0348 6.60018 14.0014L0.0873947 6.95647C0.0439788 6.9095 0.0151968 6.85089 0.00457124 6.78782C-0.00605429 6.72475 0.00193752 6.65995 0.0275687 6.60135C0.0531998 6.54275 0.0953585 6.4929 0.148885 6.45789C0.202411 6.42287 0.264983 6.40423 0.328943 6.40422H3.46384C3.51091 6.40423 3.55743 6.41433 3.60026 6.43385C3.64309 6.45336 3.68124 6.48184 3.71213 6.51735L5.88873 9.02145C6.12396 8.51862 6.57933 7.68137 7.37841 6.66117C8.55974 5.15293 10.7571 2.93479 14.5164 0.932401C14.5891 0.893707 14.6736 0.883665 14.7533 0.904256C14.833 0.924848 14.9021 0.974577 14.947 1.04362C14.9918 1.11267 15.0091 1.19602 14.9955 1.2772C14.9818 1.35839 14.9383 1.43152 14.8733 1.48214C14.859 1.49336 13.4095 2.63482 11.7413 4.72559C10.2061 6.64962 8.16519 9.7957 7.16094 13.8572C7.1433 13.9286 7.10227 13.992 7.04439 14.0373C6.98652 14.0826 6.91513 14.1072 6.84163 14.1073L6.84173 14.1071Z" />
                                  </g>
                                </svg>
                                Social Media Management
                              </li>
                              <li>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={15}
                                  height={15}
                                  viewBox="0 0 15 15"
                                >
                                  <g>
                                    <path d="M6.84173 14.1071C6.79635 14.1071 6.75147 14.0977 6.7099 14.0795C6.66833 14.0613 6.63098 14.0348 6.60018 14.0014L0.0873947 6.95647C0.0439788 6.9095 0.0151968 6.85089 0.00457124 6.78782C-0.00605429 6.72475 0.00193752 6.65995 0.0275687 6.60135C0.0531998 6.54275 0.0953585 6.4929 0.148885 6.45789C0.202411 6.42287 0.264983 6.40423 0.328943 6.40422H3.46384C3.51091 6.40423 3.55743 6.41433 3.60026 6.43385C3.64309 6.45336 3.68124 6.48184 3.71213 6.51735L5.88873 9.02145C6.12396 8.51862 6.57933 7.68137 7.37841 6.66117C8.55974 5.15293 10.7571 2.93479 14.5164 0.932401C14.5891 0.893707 14.6736 0.883665 14.7533 0.904256C14.833 0.924848 14.9021 0.974577 14.947 1.04362C14.9918 1.11267 15.0091 1.19602 14.9955 1.2772C14.9818 1.35839 14.9383 1.43152 14.8733 1.48214C14.859 1.49336 13.4095 2.63482 11.7413 4.72559C10.2061 6.64962 8.16519 9.7957 7.16094 13.8572C7.1433 13.9286 7.10227 13.992 7.04439 14.0373C6.98652 14.0826 6.91513 14.1072 6.84163 14.1073L6.84173 14.1071Z" />
                                  </g>
                                </svg>
                                Unique ads campaigns
                              </li>
                            </ul>
                          </div>
                          <Link
                            href="/contact"
                            className="primary-btn2 wow animate fadeInUp"
                            data-wow-delay="400ms"
                            data-wow-duration="1500ms"
                            data-text="Get Started Now"
                          >
                            <span>Get Started Now</span>
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="project-management-tab-img-wrap">
                          <img
                            src="assets/img/home3/project-management-tab-img1.jpg"
                            alt=""
                            className="wow animate zoomIn"
                            data-wow-delay="400ms"
                            data-wow-duration="1500ms"
                          />
                        </div>
                      </div>
                    </div>
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
