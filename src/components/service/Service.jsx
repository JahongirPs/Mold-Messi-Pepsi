import React from "react";
import "./Service.scss";
const Service = () => {
  return (
    <>
      <div className="service">
        <h1>Биз мижозларга қуйидагиларни таклиф қиламиз</h1>
        <div className="service__block">
          <div className="service__box">
            <h2>Бўлиб-бўлиб сотиб олиш</h2>
            <p>
              MOLD-COMPONENTS да ишлаб чиқариш учун қулай онлайн буюртмалар
              режаси
            </p>
          </div>
          <span className="service__hr"></span>
          <div className="service__box">
            <h2>Йетказиб бериш бепул</h2>
            <p>Сифатли маҳсулотлар ва хизматлар</p>
          </div>
          <span className="service__hr"></span>
          <div className="service__box">
            <h2>Бонус тизими</h2>
            <p>Бонус тизими</p>
          </div>
          <span className="service__hr"></span>
          <div className="service__box">
            <h2>Ёрдам!</h2>
            <p>TSS</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
