import noresult from "../../assets/img/noresults.png";
import { useState, useEffect } from "react";
import "./Navbar.scss";
import navbarlogo from "../../assets/img/header__logo.svg";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { instance } from "../../api/axios";

const Navbar = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (inputSearch.length === 0) {
      setSearchResults([]);
      return;
    }

    instance(`product/search/${inputSearch}`)
      .then((response) => setSearchResults(response.data))
      .catch((err) => {
        setSearchResults([]);
      });
  }, [inputSearch]);
  function clean() {
    setInputSearch("");
  }

  return (
    <>
      <nav>
        <div className="container">
          <div className="nav__block">
            <div className="nav__wrap">
              <Link to="/">
                <img width="180" height="73" src={navbarlogo} alt="Logo" />
              </Link>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <input
                  value={inputSearch}
                  onChange={(e) => setInputSearch(e.target.value)}
                  className="nav__input"
                  type="text"
                  placeholder="Search"
                />
                <button className="nav__btn" type="submit">
                  <FiSearch className="search" />
                </button>
              </form>
              {searchResults.length > 0 || inputSearch.length !== 0 ? (
                <div className="search__results" onClick={clean}>
                  {searchResults.map((searchedItem) => (
                    <Link
                      key={searchedItem._id}
                      to={`/productView/${searchedItem._id}`}
                    >
                      <div>
                      <div className="search__box">
                            <span>Result:</span>
                            <p className="results__lenght">#</p>
                          </div>
                        <div className="search__results-item">
                          <img src={searchedItem.productImages[0]} alt="" />
                          <h4>{searchedItem.productName_ru}</h4>
                          <strong>
                            {`${searchedItem.productSizesAndQuantity[0].price} CУМ `}
                            {searchedItem.productSizesAndQuantity.length > 1 &&
                              `- ${
                                searchedItem.productSizesAndQuantity.reverse()[0]
                                  .price
                              }`}
                          </strong>
                        </div>
                      </div>
                    </Link>
                  ))}
                  {searchResults.length === 0 && inputSearch.length !== 0 && (
                    <img
                      className="nosearch-result-img"
                      src={noresult}
                      alt=""
                    />
                  )}
                </div>
              ) : null}
            </div>
            <div className="nav__pages">
              <Link to="/">
                <button>Бош сахифа</button>
              </Link>
              <Link to="/partner">
                <button>Ҳамкорлар</button>
              </Link>
              <Link to="/about">
                <button>Биз ҳақимизда</button>
              </Link>
              <Link to="/contact">
                <button>Алоқа</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
