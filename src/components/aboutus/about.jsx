import React, { Component } from "react";

import "./about.scss";

export class About extends Component {
  render() {
    return (
      <section>
        <div className="container ">
          <h3 className="about-title">
            О компании <span className="leangroup">LEANGROUP</span>
          </h3>
          <div className="about">
            <div className="about__aside">
              <img
                className="about__aside__video"
                src="/video.png"
                alt="video"
              />
              <button className="about__aside__video__btn">
                <i class="fa-solid fa-play"></i>
              </button>
            </div>
            <div className="about__bside">
              <p>
                Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и
                на сегодняшний день является ведущей компанией по производству
                ламинатных и экструзионных туб.
              </p>
              <p>
                Имея две технологии – для производства ламинатных и
                экструзионных туб, мы предлагаем вам широкий спектр
                возможностей. Большим преимуществом является собственный
                печатный цех в ламинате и in-line печать в экструзии с
                возможностью различных дополнительных опций декора. Особое
                внимание уделяется работе с поставщиками для контроля и
                поддержания качества производимой нами продукции.
              </p>
              <p>
                С января 2018 года компания стала членом Европейской Ассоциации
                производителей туб (ETMA), что подтверждает сильную позицию
                бренда и на рынке Европы.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
