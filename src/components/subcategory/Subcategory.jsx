// import React, { useState, useEffect } from "react";
// import "./Subcategory.scss";
// import { useParams } from "react-router-dom";
// import { instance } from "../../api/axios";
// import ProductCard from "../product-card/ProductCard";

// const Subcategory = () => {
//   const { categoryname } = useParams();
//   const [categories, setCategories] = useState(null);
//   useEffect(() => {
//     instance(`/category/subcategories/${categoryname}`)
//       .then((response) => setCategories(response.data))
//       .catch((err) => setCategories(err));
//   }, [categoryname]);
//   return (
//     <div className="container">
//       <div className="category__wrapper">
//       <h2>{categories?.subcategoryTranslate?.uz}</h2>
//         <div className="category__box">
//           {categories?.subcategory?.map((categoryItem) => (
//             <ProductCard key={categoryItem.id} productData={categoryItem} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Subcategory;


import React, { useState, useEffect } from "react";
import "./Subcategory.scss";
import { useParams } from "react-router-dom";
import { instance } from "../../api/axios";
import ProductCard from "../product-card/ProductCard";

const Subcategory = () => {
  const { categoryname } = useParams();
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    instance(`/category/subcategories/${categoryname}`)
      .then((response) => setCategories(response.data))
      .catch((err) => setCategories(err));
  }, [categoryname]);
  console.log(categories);

  return (
    <div className="container">
      <div className="category__wrapper">
        <h2>{categories?.subcategoryTranslate?.uz}</h2>
        <div className="category__box">
          {categories?.subcategory?.map((categoryItem) => (
            <ProductCard key={categoryItem.id} productData={categoryItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subcategory;