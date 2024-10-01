"use client";
import MainLayout from "@/components/layout/MainLayout";
import React from "react";
import { useParams } from "next/navigation";
import data from "@/data/products.json";

const ProductDetailsPage = () => {
  const { category, id } = useParams();

  const getProductData = (categoryName, productId) => {
    const category = data.find(
      (cat) => cat.name.toLowerCase() === categoryName.toLowerCase()
    );

    if (category) {
      const product = category.products.find((prod) => prod.id === productId);
      return product || null;
    }

    return null;
  };

  const productData = getProductData(category, id);

  return (
    <MainLayout>
      <div
        className="product-details-top-section scroll-margin pt-120 mb-120"
        id="shop"
      >
        <div className="container-xl container-fluid-lg container">
          <div className="row gy-5">
            <div className="col-lg-6">
              <div className="product-details-img">
                <div className="tab-content" id="v-pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="v-pills-img1"
                    role="tabpanel"
                  >
                    <div className="product-details-tab-img">
                      <img src={productData.img} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="product-details-content">
                <h1>{productData.name}</h1>
                <h3>{productData.subName}</h3>
                <p>{productData.desc}</p>
              </div>
              <div className="product-details-description mb-120" id="reviews">
                <div className="col-12">
                  <div className="product-details-description-tab">
                    <div className="addithonal-information">
                      <table className="table total-table2">
                        <tbody>
                          <tr>
                            <td>
                              <span>SKU</span>
                            </td>
                            <td>123ABC</td>
                          </tr>
                          <tr>
                            <td>
                              <span>Category</span>
                            </td>
                            <td>Equipment</td>
                          </tr>
                          <tr>
                            <td>
                              <span>Tags</span>
                            </td>
                            <td>Cream, Watch, Camera</td>
                          </tr>
                          <tr>
                            <td>
                              <span>Weight</span>
                            </td>
                            <td>20 gm</td>
                          </tr>
                          <tr>
                            <td>
                              <span>Dimensions</span>
                            </td>
                            <td>2 × 4 × 5 cm</td>
                          </tr>
                          <tr>
                            <td>
                              <span>Brand</span>
                            </td>
                            <td>Revlon </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductDetailsPage;
