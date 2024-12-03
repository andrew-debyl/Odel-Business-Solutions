"use client";
import MainLayout from "@/components/layout/MainLayout";
import React from "react";
import { useParams } from "next/navigation";
import data from "@/data/products.json";
import Image from "next/image";
import Head from "next/head";

const ProductDetailsPage = () => {
  const { category, id } = useParams();

  if (!category || !id) {
    return <div></div>;
  }

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
    <>
      <Head>
        <title>Product Page</title>
        <meta
          name="description"
          content={
            productData.desc ||
            "Explore this product for more details and features."
          }
        />
        <meta
          name="keywords"
          content={
            productData.keywords ||
            "product, IT, business solutions, network, hardware, software"
          }
        />
      </Head>
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
                        <Image
                          src={productData.img}
                          alt=""
                          width={504}
                          height={528}
                        />
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
                <div
                  className="product-details-description mb-120"
                  id="reviews"
                >
                  <div className="col-12">
                    <div className="product-details-description-tab">
                      <div className="addithonal-information">
                        <table className="table total-table2">
                          <tbody>
                            {productData.features.map((item) => (
                              <tr key={item.id}>
                                <td>
                                  <span>{item.title}</span>
                                </td>
                                <td>{item.content}</td>
                              </tr>
                            ))}
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
    </>
  );
};

export default ProductDetailsPage;
