import React, { useState } from "react";
import "./Header.scss";
import uzbLogo from "../../assets/img/uzbekistan.svg";
import rusLogo from "../../assets/img/russian.svg";
import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import Navbar from "../navbar/Navbar";
import engLogo from "../../assets/img/england.png";
const Header = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="header__block">
            <img
              onClick={() => handleImageClick("uzbLogo")}
              style={{
                borderBottom:
                  selectedImage === "uzbLogo" ? "3px solid #4361EE" : "none",
              }}
              className="header__logo"
              src={uzbLogo}
              alt=""
            />
            <img
              onClick={() => handleImageClick("rusLogo")}
              style={{
                borderBottom:
                  selectedImage === "rusLogo" ? "3px solid #4361EE" : "none",
              }}
              className="header__logo"
              src={rusLogo}
              alt=""
            />{" "}
            <img
              onClick={() => handleImageClick("engLogo")}
              style={{
                borderBottom:
                  selectedImage === "engLogo" ? "3px solid #4361EE" : "none",
              }}
              
              alt=""
            />
            <div>
              <a href="tel:+998 91 186 00 85">
                <FiPhone className="phone__logo" />
                +998 91 186 00 85
              </a>
            </div>
            <div>
              <a href="mailto:erkinjon.hodjaev@gmail.com">
                <TfiEmail className="email__logo" />
                erkinjon.hodjaev@gmail.com
              </a>
            </div>
          </div>
        </div>
      </header>
      <Navbar />
    </>
  );
};

export default Header;
