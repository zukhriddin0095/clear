import React, { Component } from "react";

import "./commond.scss"

export class Commond extends Component {
  render() {
    return (
      <section className="command">
        <div className="container">
          <h3>
            Наша <span>команда</span>
          </h3>
          <div className="commond__cards">
            <div className="commond__cards__Card">
              <img className="img" src="/ave (1).png" alt="" />
              <div className="commond__cards__Card__title">
                <h5>Войнич Дарья</h5>
                <p>Заместитель директора по продажам</p>
              </div>
              <a href="tel:+375 (17) 270-53-77 (317)">
                +375 (17) 270-53-77 (317)
              </a>
            </div>

            <div className="commond__cards__Card">
              <img src="/ave (2).png" alt="" />
              <div className="commond__cards__Card__title">
                <h5>Войнич Дарья</h5>
                <p>Заместитель директора по продажам</p>
              </div>
              <a href="tel:+375 (17) 270-53-77 (317)">
                +375 (17) 270-53-77 (317)
              </a>
            </div>

            <div className="commond__cards__Card">
              <img src="/ave (3).png" alt="" />
              <div className="commond__cards__Card__title">
                <h5>Войнич Дарья</h5>
                <p>Заместитель директора по продажам</p>
              </div>
              <a href="tel:+375 (17) 270-53-77 (317)">
                +375 (17) 270-53-77 (317)
              </a>
            </div>

            <div className="commond__cards__Card">
              <img src="/ave (4).png" alt="" />
              <div className="commond__cards__Card__title">
                <h5>Войнич Дарья</h5>
                <p>Заместитель директора по продажам</p>
              </div>
              <a href="tel:+375 (17) 270-53-77 (317)">
                +375 (17) 270-53-77 (317)
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Commond;
