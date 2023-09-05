

import React, { Component } from 'react'

import Slider from "react-slick";

import "./product.scss";

export class Product extends Component {
  render() {
     const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 4}
    return (
      <section>
        <div className="container">
          <h3 className="product__title">
            Качество продукции подтверждают{" "}
            <span className="Sertificat">сертификаты</span>
          </h3>
          <Slider {...settings}>
            <div className=".container">
              <h3>
                <img src="/serti (1).png" alt="product" />
              </h3>
            </div>
            <div>
              <h3>
                <img src="/serti (2).png" alt="product" />
              </h3>
            </div>
            <div>
              <h3>
                <img src="/serti (3).png" alt="product" />
              </h3>
            </div>
            <div>
              <h3>
                <img src="/serti (4).png" alt="product" />
              </h3>
            </div>
            <div>
              <h3>
                <img src="/serti (5).png" alt="product" />
              </h3>
            </div>
            <div>
              <h3>
                <img src="/serti (4).png" alt="product" />
              </h3>
            </div>
            <div>
              <h3>
                <img src="/serti (3).png" alt="product" />
              </h3>
            </div>

            <div>
              <h3>
                <img src="/serti (4).png" alt="product" />
              </h3>
            </div>
            <div>
              <h3>
                <img src="/serti (4).png" alt="product" />
              </h3>
            </div>
            <div>
              <h3>
                <img src="/serti (3).png" alt="product" />
              </h3>
            </div>

            <div>
              <h3>
                <img src="/serti (4).png" alt="product" />
              </h3>
            </div>
          </Slider>
        </div>
      </section>
    );
  }}


export default Product