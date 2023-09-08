import React from "react";
import "./Contact.scss";
import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { TfiLocationPin } from "react-icons/tfi";
const Contact = () => {
  return (
    <div className="container">
      <div className="contact__block">
        <h1 className="contact__title">Биз билан боғланиш</h1>
        <div className="contact__box">
          <FiPhoneCall className="contact__img" />
          <a id="contact__box-ancer" href="tel:+998911860085">
            +998911860085
          </a>
        </div>
        <div className="contact__box">
          <TfiEmail className="contact__img" />
          <a id="contact__box-ancer" href="mailto:+erkinjon.hodjaev@gmail.com">
            erkinjon.hodjaev@gmail.com
          </a>
        </div>
        <div className="contact__box">
          <TfiLocationPin className="contact__img" />
          <p>
            Наманганская область, Давлатабадский район, улица Дустлик Шох 109
          </p>
        </div>
        <p className="contact__list"> Подписывайтесь на нас</p>
        <div className="contact__logo-box">
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
        <div className="contact__maps">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A3d0ea0add2dcd2d226f9189efb0c173010478e0bc42e3b2b908209c9db8539e8&amp;source=constructor"
            width="100%"
            height="500"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
