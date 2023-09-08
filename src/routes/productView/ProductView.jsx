import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../../api/axios";
import "./ProductView.scss";
import { FiChevronRight } from "react-icons/fi";
import {HiOutlineShoppingCart} from "react-icons/hi"
import Scroll from "../../components/scroll/Scroll";
const ProductView = () => {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [itemCounter, setItemCounter] = useState(1);
  const [activeImageNumber, setActiveImageNumber] = useState(0);
  const [productViewData, setProductViewData] = useState(null);
  let productDataInURL = useParams();
  useEffect(() => {
    instance(`/product/single-product/${productDataInURL.id}`)
      .then((response) =>
        setProductViewData(response.data?.singleProduct?.at(0))
      )
      .catch((err) => console.log(err));
  }, [productDataInURL.id]);
  console.log(activeImageNumber);

  console.log(productViewData);
  function decrement() {
    if (itemCounter > 1) {
      setItemCounter(itemCounter - 1);
    }
  }

  function increment() {
    if (
      itemCounter <
      +productViewData?.productSizesAndQuantity[selectedVariant].quantity
    ) {
      setItemCounter(itemCounter + 1);
    }
  }

  console.log(selectedVariant);

  return (
    <>
      <div className="container">
        <Scroll/>
        <div className="product__block">
          <div>
            <div className="productView__img">
              <img
                width={400}
                height={400}
                src={productViewData?.productImages[activeImageNumber]}
                alt=""
              />
            </div>
            <div className="productView__images">
              {productViewData?.productImages.map((productImageThumb, ind) => (
                <img
                  className={
                    ind === activeImageNumber
                      ? "borderBlock" 
                      : "borderNone" 
                  }
                  width="100%"
                  height="100%"
                  src={productImageThumb}
                  alt=""
                  onClick={() => setActiveImageNumber(ind)}
                />
              ))}
            </div>
          </div>
          <div className="product__wrapper">
            <h1>{productViewData?.productName_uz}</h1>
            <div className="productView__box">
              <button>{productViewData?.productMainCategory_uz}</button>
              <FiChevronRight />
              <button>{productViewData?.productSubCategory_uz}</button>
            </div>
            <div className="productView__wrap">
              <p>Омборда: </p>
              <span>{productViewData?.productSizesAndQuantity[selectedVariant].quantity}</span>
              <p>Ўлчам:</p>
              <select
                onChange={(e) => {
                  setSelectedVariant(+e.target.value);
                  setItemCounter(1);
                }}
              >
                {productViewData?.productSizesAndQuantity.map(
                  (productItemVariant, ind) => (
                    <option value={ind}>{productItemVariant.size}</option>
                  )
                )}
              </select>
            </div>

            <h5>
              {productViewData?.productSizesAndQuantity[selectedVariant].price}

              <span> CУМ</span>
            </h5>
            <div className="productView__counter">
              <div className="productView__count">
                <h2>Cони:</h2>
                <div>
                  <button onClick={decrement}>-</button>
                  <span>{itemCounter}</span>
                  <button onClick={increment}>+</button>
                </div>
              </div>
              <div className="productView__count">
                <h2>Умумий нархи:</h2>
                <button className="productView__btn">
                  {itemCounter *
                    +productViewData?.productSizesAndQuantity[selectedVariant]
                      .price}

                  <span> CУМ</span>
                </button>
              </div>
              <div className="productView__shop">
                <HiOutlineShoppingCart className="product__shop"/>
              <span>Саватга қўшиш</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductView;
