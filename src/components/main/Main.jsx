import React, { useEffect, useState, Fragment } from "react";
import { instance } from "../../api/axios";
import { v4 as uuidv4 } from "uuid";
import ProductCarousel from "../product-carousel/ProductCarousel";
import Service from "../service/Service";
import "./Main.scss";
import Sidebar from "../sidebar/Sidebar";
import Scroll from "../scroll/Scroll";
const Main = () => {
  const [homeReeldata, setHomeReeldata] = useState([]);

  useEffect(() => {
    let isDataFetched = true;
    instance("/category/category-reel")
      .then((response) => {
        if (isDataFetched) {
          setHomeReeldata(response.data);
        }
      })
      .catch((err) => console.log(err));

    return () => {
      isDataFetched = false;
    };
  }, []);

  return (
    <>
      <div className="container">
        <Scroll />
        <Sidebar />
        {homeReeldata.length > 0 ? (
          <div className="home__product-carousel">
            {homeReeldata.slice(0, 4).map((category) => (
              <Fragment key={uuidv4()}>
                <h2>{category.categoryName_uz}</h2>
                <ProductCarousel categoryData={category} />
              </Fragment>
            ))}
          </div>
        ) : (
          <div className="loading">
            <i class="fa-solid  fa-spinner fa-spin-pulse fa-2xl"></i>
          </div>
        )}
        <Service />
      </div>
    </>
  );
};

export default Main;
