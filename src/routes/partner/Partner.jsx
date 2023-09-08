import React from "react";
import hamkorImg from "../../assets/img/hamkorImg.png";
import "./Partner.scss";
import { Link } from "react-router-dom";
const Partner = () => {
  return (
    <>
      <div className="container">
        <div className="hamkor__block">
          <h1>Ҳамкорлар</h1>
          <div className="hamkor__wrapper">
            <img src={hamkorImg} alt="" />
            <h2>Қурилиши давом этяпти</h2>
            <Link to="/">Асосий саҳифа</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner;
