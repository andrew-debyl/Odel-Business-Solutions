import React from "react";
import Footer3 from "@/components/footer/Footer3";
import Header1 from "@/components/header/Header1";

export default function NotFound() {
  return (
    <>
      <Header1 />
      <div className="error-page">
        <div className="container">
          <div className="error-content">
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>404</h1>
            <h3>Error</h3>
          </div>
        </div>
      </div>
      <Footer3 />
    </>
  );
}
