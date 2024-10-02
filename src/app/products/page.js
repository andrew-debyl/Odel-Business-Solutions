"use client"
import MainLayout from "@/components/layout/MainLayout";
import useWow from "@/hooks/useWow";
import React, { useEffect } from "react";
import Home3ProjectManagement from "@/components/projectManagement/Home3ProjectManagement";

const ProductsPage = () => {
  useWow()

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 300); // Adjust the delay time (in milliseconds) as needed
  
    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  return (
    <MainLayout>
      <div className="shop-page scroll-margin pt-120 pb-120" id="shop">
        <Home3ProjectManagement/>
      </div>
    </MainLayout>
  );
};

export default ProductsPage;
