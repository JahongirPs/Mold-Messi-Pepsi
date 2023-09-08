import React from "react";
import "./Footer.scss";
import { TfiLocationPin } from "react-icons/tfi";
import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import footerLogo from "../../assets/img/footer__logo.svg";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer__block">
          <div className="footer__wrap">
            <TfiLocationPin className="location" />
            <div className="footer__box">
              <h2>Бизнинг манзил</h2>
              <p>
                Наманган вилояти , Давлатобод тумани , <br /> Дустлик Шох кучаси
                109-уй
              </p>
            </div>
          </div>
          <div className="footer__wrap">
            <FiPhoneCall className="location" />
            <div className="footer__box">
              <h2>Биз билан боғланинг</h2>
              <p>+998 91 186 00 85</p>
            </div>
          </div>
          <div className="footer__wrap">
            <TfiEmail className="location" />
            <div className="footer__box">
              <h2>Электрон манзил</h2>
              <p>erkinjon.hodjaev@gmail.com</p>
            </div>
          </div>
        </div>
        <hr className="footer__hr" />
        <div className="footer__wrapper">
          <div className="wrapper__item">
            <img width="150" height="100" src={footerLogo} alt="" />
            <p>
              Қолип тайёрлаш учун барча асбоблар, қолип <br /> бутловчи қисмлари
              ва аксессуарлари, қолип учун <br /> киёвий моддалар, силлиқлаш ва
              сайқаллаш <br />
              асбоблари, абразив тошлар, CNC дастгохлари, <br />
              Термопластавтоматлар ва хоказолар.
            </p>
            <h2>Бизни кузатиб боринг</h2>
            <div className="footer__logo-box">
              <div>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path>
                </svg>
              </div>
              <div>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                </svg>
              </div>
              <div>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 576 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="wrapper__item">
            <h2>Фойдали ҳаволалар</h2>
            <div className="footer__wrap">
              <NavLink to="/home">
                <button>Бош сахифа</button>
              </NavLink>
              <NavLink to="/partner">
                <button>Ҳамкорлар</button>
              </NavLink>
            </div>
            <div className="footer__wrap">
              <NavLink to="/about">
                <button>Биз ҳақимизда</button>
              </NavLink>
              <NavLink to="/contact">
                <button>Алоқа</button>
              </NavLink>
            </div>
          </div>
          <div className="wrapper__item">
            <h2>Таклифлар учун</h2>
            <p>
              Доимий мижозларга қулайлик яратиш ва янги <br /> мижозларни жалб
              қилиш учун ушбу сайт <br /> яратилган бўлиб, унда сиз керакли
              қисмлар, <br /> бутловчи қисмлар, асбоблар, каталоглар ва <br />{" "}
              махсулот маълумотларини топишингиз мумкин. <br /> Агар бирор
              нарсани топа олмасангиз - биз билан <br /> телефон ёки почта
              орқали боғланинг, биз сизга <br /> дархол ёрдам берамиз.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
