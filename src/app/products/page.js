"use client"
import MainLayout from "@/components/layout/MainLayout";
import useWow from "@/hooks/useWow";
import React from "react";
import Home3ProjectManagement from "@/components/projectManagement/Home3ProjectManagement";

const ProductsPage = () => {
  useWow()

  return (
    <MainLayout>
      <div className="shop-page scroll-margin pt-120 pb-120" id="shop">
        <Home3ProjectManagement/>
      </div>
    </MainLayout>
  );
};

export default ProductsPage;
