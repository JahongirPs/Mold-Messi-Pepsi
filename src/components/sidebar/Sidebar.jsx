import "./Sidebar.scss";
import { instance } from "../../api/axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { AiOutlineAppstore } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";
import { v4 as uuidv4 } from "uuid";
import Banner from "../banner/Banner";

const Aside = () => {
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    let isFetched = false;
    instance("/category/category-nest")
      .then((response) => setCategoryData(response.data))
      .catch((err) => console.log(err));
    console.log(isFetched);
    return () => {
      isFetched = true;
    };
  }, []);
  return (
    <div className="block">
        <Banner/>
      <div className="aside">
        <button className="aside__header">
          <AiOutlineAppstore className="aside__logo" />
          <p>Category</p>
        </button>
        <ul className="aside__menu">
          {categoryData.mainCategory_ru?.map((mainCategoryItem, ind) => (
            <li key={uuidv4()} className="aside__menu-item">
              <Link to={`/maincategory/${mainCategoryItem}`}>
                {mainCategoryItem}
              </Link>
              <FiChevronRight />
              <div className="sub__category-item">
                {categoryData.productSubCategories_ru[ind].map(
                  (subCategoryItem) =>
                    subCategoryItem ? (
                      <Link
                        to={`/subcategory/${subCategoryItem}`}
                        key={uuidv4()}
                      >
                        {subCategoryItem}
                      </Link>
                    ) : (
                      <React.Fragment key={uuidv4()}></React.Fragment>
                    )
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Aside;
