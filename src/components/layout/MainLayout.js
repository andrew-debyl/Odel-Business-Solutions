"use client";
import React from "react";
import Header2 from "../header/Header2";
import Breadcrumb from "./Breadcrumb";
import Footer3 from "../footer/Footer3";
import { ValueProvider } from "@/hooks/ValueContext";

const MainLayout = ({ children }) => {
  return (
    <>
      <ValueProvider>
        <Header2 />
        <Breadcrumb />
        {children}
        <Footer3 />
      </ValueProvider>
    </>
  );
};

export default MainLayout;
