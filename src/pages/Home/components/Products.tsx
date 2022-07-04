import React from "react";
import ProductFlower2 from "../img/ProductFlower2.svg";
import ProductFlower1 from "../img/ProductFlower1.svg";

const Products = () => {
  return (
    <div className="products">
      <div className="container">
        <h2>Our Products</h2>
        <div className="products-container">
          <div className="products-container__product products-container__product--first">
            <div className="products-container__product__img-container">
              <img
                src={ProductFlower1}
                alt="product"
                className="container__product__img-container__img"
              />
            </div>
            <div className="products-container__product__details">
              <h4>Something Great About your company </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                in etiam blandit eleifend ultricies urna nunc donec ultrices.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                in etiam blandit eleifend ultricies urna nunc donec ultrices.
              </p>
              <button className="products-container__product__details__btn ">
                View{" "}
                <span>
                  <i className="fa-solid fa-arrow-up-right"></i>
                </span>
              </button>
            </div>
          </div>
          <div className="products-container__product">
            <div className="products-container__product__details">
              <h4>Something Great About your company </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                in etiam blandit eleifend ultricies urna nunc donec ultrices.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                in etiam blandit eleifend ultricies urna nunc donec ultrices.
              </p>
              <button className="products-container__product__details__btn ">
                View{" "}
                <span>
                  <i className="fa-solid fa-arrow-up-right"></i>
                </span>
              </button>
            </div>
            <div className="products-container__product__img-container">
              <img
                src={ProductFlower2}
                alt="product"
                className="container__product__img-container__img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
