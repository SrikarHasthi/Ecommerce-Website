import Product from "./Product";
import "./Home.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import Filter from "./Filter";
import Search from "./Search";
import { useDispatch } from "react-redux";
import { paginationCreater } from "../redux/actions";
import Pagination from "./Pagination";
import { useEffect } from "react";
let Home = () => {
  let history = useHistory();
  let dispatch = useDispatch();
  let data = useSelector((state) => state.data);
  let type = useSelector((state) => state.filter);
  let searchValue = useSelector((state) => state.searchValue);
  let pagination = useSelector((state) => state.pagination);
  let filteredItems = data.filter((e) => {
    if (type == "All Items") return true;
    else if (e.category == type) return true;
  });
  filteredItems = filteredItems.filter((e) => {
    let itemName = e.title;
    itemName = itemName.toLowerCase();
    let searchInputText = searchValue.toLowerCase();
    return itemName.includes(searchInputText);
  });
  let numberofpages = Math.ceil(filteredItems.length / 9);
  useEffect(() => {
    dispatch(paginationCreater({ numberOfPages: numberofpages }));
  },[numberofpages]);
  let startIndex = (pagination.currPage - 1) * 9;
  let endIndex = Math.min(filteredItems.length, pagination.currPage * 9);
  let slicedItems = filteredItems.slice(startIndex, endIndex);
  return (
    <>
      <div className="main-container">
        <div className="sliding-container">
          <div className="sliding-container-two">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    class="d-block w-100"
                    src="https://www.annfone.com/img/cms/mobiles-phones-banner.png"
                    alt="First slide"
                  />
                  {/* <div class="carousel-caption d-none d-md-block">
                    <h5>My Caption Title (1st Image)</h5>
                    <p>
                      The whole caption will only show up if the screen is at
                      least medium size.
                    </p>
                  </div> */}
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    src="https://i.pinimg.com/originals/45/de/10/45de10991f7f94728f80339cd4c8e2f9.png"
                    alt="Second slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    src="https://realkart.in/images/home/slide-2.jpg"
                    alt="Third slide"
                  />
                </div>
              </div>
              <a
                class="carousel-control-prev carousel-cp-btn"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next carousel-cp-btn"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
        <div className="row m-5">
          <div className="col-3">
            <Filter />
          </div>
          <div className="col-9">
            <Search />
            <div className="product-container">
              <div className="row">
                {slicedItems.map((el, index) => {
                  return <Product key={index} data={el} />;
                })}
              </div>
            </div>
            <div style={{ marginLeft: "2rem" }}>
              <Pagination />
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            history.push("/cart");
          }}
          className="cart-btn"
        >
          <span class="material-icons">shopping_cart</span>
        </button>
      </div>
    </>
  );
};
export default Home;
