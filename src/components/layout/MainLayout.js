"use client";
import React from "react";
import Header2 from "../header/Header2";
import Breadcrumb from "./Breadcrumb";
import Footer3 from "../footer/Footer3";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header2 />
      <Breadcrumb />
      {children}
      <Footer3 />
    </>
  );
};

export default MainLayout;
