import React from "react";
import Link from "next/link";
import productData from "../../data/products.json";
import Image from "next/image";

function ProductItem({ productName }) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function getProductsByName(data, name) {
    const formattedName = capitalizeFirstLetter(name);

    const entry = data.find((item) => item.name === formattedName);

    if (entry.name === formattedName) {
      return entry.products;
    }
    return [];
  }

  const products = getProductsByName(productData, productName);

  return (
    <div className="row g-4 mb-50">
      {products.map((product) => (
        <div
          className="col-lg-4 col-md-6 wow animate fadeInDown"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
          key={product.id}
        >
          <div className="product-card">
            <div className="product-card-img">
              <Link href={`/products/${productName}/${product.id}`}>
                <Image src={product.img} alt="" width={404} height={418} />
              </Link>
            </div>
            <div className="product-card-content">
              <h6>
                <Link href={`/products/${productName}/${product.id}`}>
                  {product.name}
                </Link>
              </h6>
            </div>
            <span className="for-border" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductItem;
