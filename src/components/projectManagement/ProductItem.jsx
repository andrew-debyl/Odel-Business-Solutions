import React from "react";
import Link from "next/link";
import productData from "../../data/products.json";

function ProductItem({productName}) {

  return (
    <div className="row g-4 mb-50">
      <div
        className="col-lg-4 col-md-6 wow animate fadeInDown"
        data-wow-delay="200ms"
        data-wow-duration="1500ms"
      >
        <div className="product-card">
          <div className="product-card-img">
            <Link href="/product-details">
              <img src="/assets/img/innerpage/product-img1.jpg" alt="" />
              <div className="batch">
                <span>-15%</span>
              </div>
            </Link>
            <div className="cart-area">
              <Link href="/cart" className="add-cart-btn">
                <i className="bi bi-bag-check" /> Add To Cart
              </Link>
            </div>
          </div>
          <div className="product-card-content">
            <h6>
              <Link href="/product-details">Air pod Pro Original</Link>
            </h6>
            <span>
              $150.00 <del>$200.00</del>
            </span>
            <div className="rating">
              <ul>
                <li>
                  <i className="bi bi-star-fill" />
                </li>
                <li>
                  <i className="bi bi-star-fill" />
                </li>
                <li>
                  <i className="bi bi-star-fill" />
                </li>
                <li>
                  <i className="bi bi-star-fill" />
                </li>
                <li>
                  <i className="bi bi-star-fill" />
                </li>
              </ul>
              <span>(50)</span>
            </div>
          </div>
          <span className="for-border" />
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
