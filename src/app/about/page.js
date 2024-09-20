"use client";
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import Home3countdown from "@/components/countdown/Home3countdown";
import Home3Feature from "@/components/feature/Home3Feature";
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

      <Home3Feature />
      <Home3countdown />
      <Home3Tools />
    </MainLayout>
  );
};

export default Aboutpage;
