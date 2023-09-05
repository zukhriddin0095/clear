import React, { Component } from "react";

import "./header.scss";

export class Header extends Component {
  render() {

    let DarkMode = () => {
      const DarkLight = document.querySelector(".Darklight__btn");
      
      DarkLight.addEventListener("click", () => {
        document.querySelector("body").classList.toggle("DarkLight")
      })
    }
    let Toggle = () => {
      const btn = document.querySelector(".toggle");
      btn.addEventListener("click", () => {
        document.querySelector('.header__link').classList.toggle("header__link__toggle")
      })
    }

    return (
      <header className="header__p">
        <nav className="container header">
          <img src="/logo.png" alt="" />
          <ul className="header__link">
            <li className="header__link__item">
              <a className="link" href="#hiome">
                Продукция
              </a>
            </li>
            <span className="header__link__border"></span>
            <li className="header__link__item">
              <a className="link" href="#hiome">
                Сертификаты
              </a>
            </li>
            <span className="header__link__border"></span>
            <li className="header__link__item">
              <a href="#hiome">Наша команда</a>
            </li>
            <span className="header__link__border"></span>
            <li className="header__link__item">
              <a href="#hiome">O нас</a>
            </li>
            <span className="header__link__border"></span>
            <li className="header__link__item">
              <a href="#hiome">Новости</a>
            </li>
            <span className="header__link__border"></span>
            <li className="header__link__item">
              <a href="#hiome">Вакансии</a>
            </li>
            <span className="header__link__border"></span>
            <li className="header__link__item">
              <a href="#hiome">Контакты</a>
            </li>
          </ul>
          <div className="header__language">
            <a href="#home">RU</a>
            <span className="header__link__border"></span>
            <a href="#home">EN</a>
          </div>
          <button onClick={DarkMode} className="Darklight__btn">
            <i class="fa-solid fa-circle-half-stroke"></i>
          </button>
          <button onClick={Toggle} className="toggle">
            <i class="fa-solid fa-bars"></i>
          </button>
        </nav>
      </header>
    );
  }
}

export default Header;
