import React from "react";
import Footer2 from "@/components/footer/Footer2";
import Header1 from "@/components/header/Header1";
import Link from "next/link";

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
      <Footer2 />
    </>
  );
}
