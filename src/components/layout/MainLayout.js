"use client";
import React from "react";
import Header2 from "../header/Header2";
import Breadcrumb from "./Breadcrumb";
import Footer from "../footer/Footer";

const MainLayout = ({ children }) => {

  return (
    <>
      <Header2 />
      <Breadcrumb />
      {children}

      
      <Footer />
    </>
  );
};

export default MainLayout;
