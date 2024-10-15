"use client";
import React from "react";
import Header3 from "../header/Header3";
import Breadcrumb from "./Breadcrumb";
import Footer3 from "../footer/Footer3";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header3 />
      <Breadcrumb />
      {children}
      <Footer3 />
    </>
  );
};

export default MainLayout;
