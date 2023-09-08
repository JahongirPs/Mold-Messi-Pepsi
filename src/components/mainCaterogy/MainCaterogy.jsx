import React, { useState, useEffect } from "react";
import "./MainCaterogy.scss";
import { useParams } from "react-router-dom";
import { instance } from "../../api/axios";
import ProductCard from "../product-card/ProductCard";

const MainCategory = () => {
  const { categoryname } = useParams();
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    let isDataFetched = true;
    instance(`/category/categories/${categoryname}`)
      .then((response) => {
        if (isDataFetched) {
          setCategories(response.data);
        }
      })
      .catch((err) => setCategories(err));

    return () => {
      isDataFetched = false;
    };
  }, [categoryname]);


  return (
    <div className="container">
      <div className="category__wrapper">
        {categories?.length > 0 ? (
          <>
            <h2>{categories?.maincategoryTranslate?.uz}</h2>
            <div className="category__box">
              {categories?.maincategory?.map((categoryItem) => (
                <ProductCard key={categoryItem.id} productData={categoryItem} />
              ))}
            </div>
          </>
        ) : (
          <div className="loading">
            <i className="fa-solid fa-spinner fa-spin-pulse fa-2xl"></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainCategory;
