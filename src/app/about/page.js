"use client";
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import Home3countdown from "@/components/countdown/Home3countdown";
import Home2About from "@/components/about/Home2About";
import Home3Tools from "@/components/tools/Home3Tools";
import useWow from "@/hooks/useWow";

const Aboutpage = () => {
  useWow();

  return (
    <MainLayout>
      <div
        className="home1-about-section scroll-margin mb-120"
        id="about-section"
      ></div>

      <Home2About />
      <Home3countdown />
      <Home3Tools />
    </MainLayout>
  );
};

export default Aboutpage;
