"use client"
import React from "react";
import breadcrumbData from "../../data/Breadcrumb.json";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Breadcrumb = () => {
  const currentSlug = usePathname().replace(/\/\d+$/, '');

  const filteredBreadcrumbData = breadcrumbData.filter(
    (item) => item.slug === currentSlug
  );

  if (filteredBreadcrumbData.length === 0) {
    return (
        <div
        className="breadcrumb-section"
        style={{
          backgroundImage: "url(/assets/img/innerpage/breadcrumb-bg1.png), linear-gradient(180deg, #121212 0%, #121212 100%)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-wrapper">
                <div className="banner-content">
                  <ul className="breadcrumb-list">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                  </ul>
                  <h1>Path Not Match</h1>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  
  const currentBreadcrumb = filteredBreadcrumbData[0];

  return (
    <>
      <div
        className="breadcrumb-section"
        style={{
          backgroundImage:
            "url(/assets/img/innerpage/breadcrumb-bg1.png), linear-gradient(180deg, #121212 0%, #121212 100%)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-wrapper">
                <div className="banner-content">
                  <ul className="breadcrumb-list">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>{currentBreadcrumb.name}</li>
                  </ul>
                  <h1>{currentBreadcrumb.pageTitle}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
