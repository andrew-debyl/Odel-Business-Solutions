"use client";
import React from "react";
import Header2 from "../header/Header2";
import Breadcrumb from "./Breadcrumb";
import Footer2 from "../footer/Footer2";

const MainLayout = ({ children }) => {

  return (
    <>
      <Header2 />
      <Breadcrumb />
      {children}
      <Footer2 />
    </>
  );
};

export default MainLayout;
